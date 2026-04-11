import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for submitting your inquiry. Our B2B sales team will contact you shortly.',
  alternates: {
    canonical: '/thank-you',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800">
          Inquiry Submitted
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950">Thank you. Your request is on the way to our sales team.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          We will review your technical requirements and reply with suitable models and quotation guidance.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            Continue Browsing Products
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Read Buying Guides
          </Link>
        </div>
      </section>
    </main>
  )
}
