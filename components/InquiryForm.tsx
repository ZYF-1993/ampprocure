'use client'

import Link from 'next/link'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  submitLabel?: string
  source: string
  defaultProduct?: string
  twoColumnOnDesktop?: boolean
  redirectOnSuccess?: string
  showInquiryType?: boolean
}

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  inquiryType: string
  message: string
  website: string
}

const EMPTY: FormState = { name: '', company: '', email: '', phone: '', inquiryType: '', message: '', website: '' }

const INQUIRY_TYPES = [
  'Product Enquiry',
  'Request for Quotation',
  'OEM / Private Label',
  'Sample Request',
  'Technical Support',
  'Distributor Partnership',
  'Other',
] as const

const labelCls = 'mb-1.5 block text-sm font-medium text-gray-700'
const inputCls = 'w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500'

export default function InquiryForm({
  submitLabel = 'Send Enquiry',
  source,
  defaultProduct = '',
  twoColumnOnDesktop = false,
  redirectOnSuccess,
  showInquiryType = false,
}: Props) {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fieldGridCls = twoColumnOnDesktop ? 'grid grid-cols-1 gap-4 lg:grid-cols-2' : 'space-y-4'

  function update(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.currentTarget
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, product: defaultProduct, source, pageUrl: window.location.href }),
      })
      const result = (await res.json()) as { success?: boolean; error?: string }
      if (!res.ok) throw new Error(result.error ?? 'Unable to send inquiry right now.')
      setForm(EMPTY)
      if (redirectOnSuccess) {
        router.push(redirectOnSuccess)
      } else {
        setSubmitted(true)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Request failed. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-gray-900">Message Sent!</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500">
          Thank you for reaching out. Our sales team will reply within <strong className="font-semibold text-gray-700">24 business hours</strong>.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSubmitted(false)}
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Send Another
          </button>
          <Link
            href="/products"
            className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={update}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className={fieldGridCls}>
        <div>
          <label htmlFor={`${source}-name`} className={labelCls}>Full Name *</label>
          <input id={`${source}-name`} name="name" type="text" required value={form.name} onChange={update} placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label htmlFor={`${source}-email`} className={labelCls}>Email Address *</label>
          <input id={`${source}-email`} name="email" type="email" required value={form.email} onChange={update} placeholder="your@email.com" className={inputCls} />
        </div>
      </div>

      <div className={fieldGridCls}>
        <div>
          <label htmlFor={`${source}-company`} className={labelCls}>Company</label>
          <input id={`${source}-company`} name="company" type="text" value={form.company} onChange={update} placeholder="Company name" className={inputCls} />
        </div>
        <div>
          <label htmlFor={`${source}-phone`} className={labelCls}>Phone / WhatsApp</label>
          <input id={`${source}-phone`} name="phone" type="tel" value={form.phone} onChange={update} placeholder="+86-13552727303" className={inputCls} />
        </div>
      </div>

      {showInquiryType && (
        <div>
          <label htmlFor={`${source}-inquiry`} className={labelCls}>Inquiry Type *</label>
          <select id={`${source}-inquiry`} name="inquiryType" required value={form.inquiryType} onChange={update} className={inputCls + ' bg-white'}>
            <option value="" disabled>Select inquiry type...</option>
            {INQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      )}

      <div>
        <label htmlFor={`${source}-message`} className={labelCls}>Message *</label>
        <textarea id={`${source}-message`} name="message" rows={4} required value={form.message} onChange={update} placeholder="Please describe your requirements, including product names, quantities, and any special specifications..." className={inputCls} />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : submitLabel}
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-600">{error}</p>
      )}
    </form>
  )
}
