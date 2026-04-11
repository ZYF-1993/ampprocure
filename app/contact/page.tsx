import type { Metadata } from 'next'
import InquiryForm from '@/components/InquiryForm'
import { DEFAULT_KEYWORDS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact our B2B sales team for model recommendations, technical validation, and wholesale quotation support.',
  keywords: [...DEFAULT_KEYWORDS, 'contact inverter supplier', 'B2B RFQ form', 'wholesale quotation'],
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <article>
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">Contact Sales</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Start your B2B inquiry with clear technical requirements</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Tell us your load profile, voltage platform, quantity plan, and compliance requirements. We will provide model recommendations and a
            quotation roadmap.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Response Workflow</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Requirement review, model shortlist, and quote alignment with your project scope.</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">RFQ Best Practice</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Include target market, expected order volume, and timeline for faster feedback quality.</p>
            </article>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Submit Inquiry</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">After submission, you will be redirected to the Thank You page.</p>
          <InquiryForm source="contact-page" submitLabel="Submit Inquiry" twoColumnOnDesktop redirectOnSuccess="/thank-you" />
        </article>
      </section>
    </main>
  )
}
