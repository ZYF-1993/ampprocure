import { NextResponse } from 'next/server'
import { getAuthenticatedAdmin } from '@/lib/supabase-auth'

type SendEmailPayload = {
  name?: string
  company?: string
  email?: string
  phone?: string
  product?: string
  inquiryType?: string
  source?: string
  pageUrl?: string
  title?: string
  message?: string
  website?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FALLBACK_SENDER_EMAIL = 'onboarding@resend.dev'

const resendApiKey = process.env.RESEND_API_KEY
const senderEmail = process.env.RESEND_FROM_EMAIL?.trim() || FALLBACK_SENDER_EMAIL
const MAX_BODY_BYTES = 16_000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim())
}

function parseEmailList(value: string | undefined): string[] {
  if (!value) return []
  return value
    .split(/[,\n;]+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0 && isValidEmail(item))
}

function sanitize(value: string | undefined, max = 500): string {
  if (!value) return ''
  return value.trim().replace(/\s+/g, ' ').slice(0, max)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isRateLimited(request: Request): boolean {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const clientId = forwardedFor?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
  const now = Date.now()
  const current = rateLimitStore.get(clientId)

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(clientId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  current.count += 1

  if (rateLimitStore.size > 10_000) {
    for (const [key, value] of rateLimitStore) {
      if (value.resetAt <= now) rateLimitStore.delete(key)
    }
  }

  return current.count > RATE_LIMIT_MAX_REQUESTS
}

function hasValidOrigin(request: Request): boolean {
  const origin = request.headers.get('origin')
  if (!origin) return false

  const forwardedHost = request.headers.get('x-forwarded-host')
  const host = forwardedHost || request.headers.get('host')
  const forwardedProtocol = request.headers.get('x-forwarded-proto')
  const protocol = forwardedProtocol || new URL(request.url).protocol.replace(':', '')

  if (!host) return false

  try {
    return new URL(origin).host === host && new URL(origin).protocol === `${protocol}:`
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? ''
    const contentLength = Number(request.headers.get('content-length') ?? 0)

    if (!hasValidOrigin(request)) {
      return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 })
    }

    if (!contentType.startsWith('application/json')) {
      return NextResponse.json({ error: 'Content-Type must be application/json.' }, { status: 415 })
    }

    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Request body is too large.' }, { status: 413 })
    }

    if (isRateLimited(request)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    if (!resendApiKey) {
      return NextResponse.json({ error: 'RESEND_API_KEY is missing.' }, { status: 500 })
    }

    const notificationRecipients = new Set([
      ...parseEmailList(process.env.NOTIFICATION_EMAILS),
      ...parseEmailList(process.env.RESEND_TO_EMAIL),
    ])
    const recipients = [...notificationRecipients]

    if (recipients.length === 0) {
      return NextResponse.json(
        { error: 'Email recipients are missing. Set NOTIFICATION_EMAILS or RESEND_TO_EMAIL in .env.local.' },
        { status: 500 }
      )
    }

    if (!isValidEmail(senderEmail)) {
      return NextResponse.json(
        { error: 'RESEND_FROM_EMAIL is invalid. Use a verified sender like sales@yourdomain.com.' },
        { status: 500 }
      )
    }

    const payload = (await request.json()) as SendEmailPayload
    const name = sanitize(payload.name, 120)
    const company = sanitize(payload.company, 180)
    const email = sanitize(payload.email, 180)
    const phone = sanitize(payload.phone, 80)
    const product = sanitize(payload.product, 200)
    const inquiryType = sanitize(payload.inquiryType, 120)
    const source = sanitize(payload.source, 120)
    const pageUrl = sanitize(payload.pageUrl, 500)
    const legacyTitle = sanitize(payload.title, 200)
    const message = sanitize(payload.message, 3000)
    const website = sanitize(payload.website, 200)

    if (website) {
      return NextResponse.json({ success: true })
    }

    const authenticatedAdmin = legacyTitle ? await getAuthenticatedAdmin(request) : null
    const isAuthenticatedNotification = Boolean(legacyTitle && authenticatedAdmin)

    if (!isAuthenticatedNotification && (!name || !isValidEmail(email) || !message)) {
      return NextResponse.json(
        { error: 'Name, a valid email address, and inquiry details are required.' },
        { status: 400 }
      )
    }

    const summary = message || legacyTitle || 'A new inquiry was submitted from the website.'
    const subjectLine = product ? `New RFQ: ${product}` : 'New Website Inquiry'
    const subject = subjectLine.slice(0, 140)

    const fields = [
      { label: 'Name', value: name || 'Not provided' },
      { label: 'Company', value: company || 'Not provided' },
      { label: 'Email', value: email || 'Not provided' },
      { label: 'Phone', value: phone || 'Not provided' },
      { label: 'Product', value: product || 'Not specified' },
      { label: 'Inquiry Type', value: inquiryType || 'Not specified' },
      { label: 'Source', value: source || 'Website form' },
      { label: 'Page URL', value: pageUrl || 'Not provided' },
    ]

    const tableRows = fields
      .map(
        (field) => `
          <tr>
            <td style="padding:8px 10px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;width:160px;">${escapeHtml(field.label)}</td>
            <td style="padding:8px 10px;border:1px solid #e2e8f0;">${escapeHtml(field.value)}</td>
          </tr>
        `
      )
      .join('')

    const { Resend } = await import('resend')
    const resend = new Resend(resendApiKey)
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: recipients,
      replyTo: isValidEmail(email) ? email : undefined,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1f2937;">
          <h2 style="margin:0 0 12px 0;">New B2B Inquiry Received</h2>
          <table style="border-collapse:collapse;font-size:14px;line-height:1.5;margin-bottom:14px;">
            ${tableRows}
          </table>
          <p style="font-size:15px;line-height:1.7;background:#f3f4f6;padding:14px;border-radius:8px;margin:0;">
            ${escapeHtml(summary)}
          </p>
        </div>
      `,
      text: [
        `Name: ${name || 'Not provided'}`,
        `Company: ${company || 'Not provided'}`,
        `Email: ${email || 'Not provided'}`,
        `Phone: ${phone || 'Not provided'}`,
        `Product: ${product || 'Not specified'}`,
        `Inquiry Type: ${inquiryType || 'Not specified'}`,
        `Source: ${source || 'Website form'}`,
        `Page URL: ${pageUrl || 'Not provided'}`,
        '',
        `Message: ${summary}`,
      ].join('\n'),
    })

    if (error) {
      console.error('Resend API returned an error:', error)
      return NextResponse.json({ error: 'Unable to send your inquiry right now.' }, { status: 502 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Email dispatch failed:', error)
    return NextResponse.json({ error: 'Unable to send your inquiry right now.' }, { status: 500 })
  }
}
