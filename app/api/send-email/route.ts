import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type SendEmailPayload = {
  title?: string
  message?: string
}

const resendApiKey = process.env.RESEND_API_KEY
const notificationRecipients = (process.env.NOTIFICATION_EMAILS ?? '')
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean)

const senderEmail = process.env.RESEND_FROM_EMAIL ?? 'no-reply@example.com'

export async function POST(request: Request) {
  try {
    if (!resendApiKey) {
      return NextResponse.json({ error: 'RESEND_API_KEY is missing.' }, { status: 500 })
    }

    if (notificationRecipients.length === 0) {
      return NextResponse.json(
        { error: 'NOTIFICATION_EMAILS is missing. Add at least one recipient email.' },
        { status: 500 }
      )
    }

    const payload = (await request.json()) as SendEmailPayload
    const content = payload.title?.trim() || payload.message?.trim() || 'A new inquiry was submitted from the website.'

    const resend = new Resend(resendApiKey)
    const data = await resend.emails.send({
      from: senderEmail,
      to: notificationRecipients,
      subject: 'New Website Inquiry',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1f2937;">
          <h2 style="margin-bottom: 12px;">A new message has been submitted</h2>
          <p style="font-size: 16px; line-height: 1.6; background: #f3f4f6; padding: 14px; border-radius: 8px;">
            ${content}
          </p>
          <p style="font-size: 13px; color: #6b7280; margin-top: 16px;">Please review it in your dashboard or inbox.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown email error'
    console.error('Email dispatch failed:', error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
