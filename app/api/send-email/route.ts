import { NextResponse } from 'next/server'

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
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FALLBACK_SENDER_EMAIL = 'onboarding@resend.dev'

const resendApiKey = process.env.RESEND_API_KEY
const senderEmail = process.env.RESEND_FROM_EMAIL?.trim() || FALLBACK_SENDER_EMAIL

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

export async function POST(request: Request) {
  try {
    if (!resendApiKey) {
      return NextResponse.json({ error: 'RESEND_API_KEY is missing.' }, { status: 500 })
    }

    const notificationRecipients = [
      ...parseEmailList(process.env.NOTIFICATION_EMAILS),
      ...parseEmailList(process.env.RESEND_TO_EMAIL),
    ]
    const recipients = notificationRecipients

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

    if (message.length === 0 && legacyTitle.length === 0) {
      return NextResponse.json({ error: 'Please provide inquiry details before submitting.' }, { status: 400 })
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
      return NextResponse.json({ error: error.message || 'Failed to dispatch email via Resend.' }, { status: 502 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown email error'
    console.error('Email dispatch failed:', error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
