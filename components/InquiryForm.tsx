'use client'

import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { t } from '@/lib/i18n'

type InquiryFormProps = {
  submitLabel?: string
  source: string
  defaultProduct?: string
  twoColumnOnDesktop?: boolean
  redirectOnSuccess?: string
}

type InquiryFormState = {
  name: string
  company: string
  email: string
  phone: string
  product: string
  message: string
}

type FeedbackState = {
  type: 'success' | 'error'
  message: string
}

const EMPTY_FORM: InquiryFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  message: '',
}

export default function InquiryForm({
  submitLabel = 'Submit Inquiry',
  source,
  defaultProduct = '',
  twoColumnOnDesktop = false,
  redirectOnSuccess,
}: InquiryFormProps) {
  const router = useRouter()
  const [form, setForm] = useState<InquiryFormState>({
    ...EMPTY_FORM,
    product: defaultProduct,
  })
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<FeedbackState | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const queryParams = new URLSearchParams(window.location.search)
    const productFromQuery = queryParams.get('product')?.trim()
    if (!productFromQuery) return

    setForm((prev) => {
      if (prev.product.trim().length > 0) return prev
      return {
        ...prev,
        product: productFromQuery,
      }
    })
  }, [])

  function updateField(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.currentTarget
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFeedback(null)
    setSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          source,
          pageUrl: window.location.href,
        }),
      })

      const result = (await response.json()) as { success?: boolean; error?: string }
      if (!response.ok) {
        throw new Error(result.error ?? 'Unable to send inquiry right now.')
      }

      setFeedback({
        type: 'success',
        message: t('inquiry.success', 'Inquiry sent successfully. Our sales team will contact you shortly.'),
      })
      setForm({
        ...EMPTY_FORM,
        product: form.product,
      })

      if (redirectOnSuccess) {
        router.push(redirectOnSuccess)
      }
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error instanceof Error ? error.message : t('inquiry.error', 'Request failed. Please try again.'),
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className={twoColumnOnDesktop ? 'mt-5 grid gap-4 md:grid-cols-2' : 'mt-5 space-y-4'} onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor={`${source}-name`} className="mb-1 block text-sm font-medium text-slate-800" data-i18n="inquiry.fullName">
          Full Name
        </label>
        <input
          id={`${source}-name`}
          name="name"
          type="text"
          value={form.name}
          onChange={updateField}
          autoComplete="name"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
          placeholder="Your name"
          data-i18n-placeholder="inquiry.fullNamePlaceholder"
        />
      </div>

      <div>
        <label htmlFor={`${source}-company`} className="mb-1 block text-sm font-medium text-slate-800" data-i18n="inquiry.companyName">
          Company Name
        </label>
        <input
          id={`${source}-company`}
          name="company"
          type="text"
          value={form.company}
          onChange={updateField}
          autoComplete="organization"
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
          placeholder="Your company name"
          data-i18n-placeholder="inquiry.companyNamePlaceholder"
        />
      </div>

      <div>
        <label htmlFor={`${source}-email`} className="mb-1 block text-sm font-medium text-slate-800" data-i18n="inquiry.workEmail">
          Work Email
        </label>
        <input
          id={`${source}-email`}
          name="email"
          type="email"
          value={form.email}
          onChange={updateField}
          autoComplete="email"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
          placeholder="email@company.com"
          data-i18n-placeholder="inquiry.workEmailPlaceholder"
        />
      </div>

      <div>
        <label htmlFor={`${source}-phone`} className="mb-1 block text-sm font-medium text-slate-800" data-i18n="inquiry.phoneWhatsApp">
          Phone / WhatsApp
        </label>
        <input
          id={`${source}-phone`}
          name="phone"
          type="tel"
          value={form.phone}
          onChange={updateField}
          autoComplete="tel"
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
          placeholder="+1 000 000 0000"
          data-i18n-placeholder="inquiry.phonePlaceholder"
        />
      </div>

      <div className={twoColumnOnDesktop ? 'md:col-span-2' : undefined}>
        <label htmlFor={`${source}-product`} className="mb-1 block text-sm font-medium text-slate-800" data-i18n="inquiry.interestedProduct">
          Interested Product
        </label>
        <input
          id={`${source}-product`}
          name="product"
          type="text"
          value={form.product}
          onChange={updateField}
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
          placeholder="Placeholder product name"
          data-i18n-placeholder="inquiry.interestedProductPlaceholder"
        />
      </div>

      <div className={twoColumnOnDesktop ? 'md:col-span-2' : undefined}>
        <label htmlFor={`${source}-message`} className="mb-1 block text-sm font-medium text-slate-800" data-i18n="inquiry.requirementDetails">
          Requirement Details
        </label>
        <textarea
          id={`${source}-message`}
          name="message"
          rows={twoColumnOnDesktop ? 5 : 4}
          value={form.message}
          onChange={updateField}
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
          placeholder="Power range, voltage platform, quantity, delivery timeline, and certification requirements"
          data-i18n-placeholder="inquiry.requirementPlaceholder"
        />
      </div>

      <div className={twoColumnOnDesktop ? 'md:col-span-2' : undefined}>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-orange-400"
        >
          {submitting ? t('inquiry.submitting', 'Sending Inquiry...') : <span data-i18n="inquiry.submit">{submitLabel}</span>}
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`${twoColumnOnDesktop ? 'md:col-span-2' : ''} text-sm ${
          feedback?.type === 'error' ? 'text-red-700' : 'text-emerald-700'
        }`}
      >
        {feedback?.message ?? t('inquiry.defaultStatus', 'Your inquiry is sent directly to our sales mailbox.')}
      </p>
    </form>
  )
}
