import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You — Enquiry Received',
  description: 'Thank you for contacting upprocure. Our sales team will reply to your enquiry within 24 business hours.',
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
    <main className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-3xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full rounded-2xl border border-gray-100 bg-white p-10 shadow-sm sm:p-14">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <p className="mt-5 inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">
          Enquiry Received
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Thank You for Reaching Out!
        </h1>

        <p className="mt-4 text-base leading-7 text-gray-500">
          We&apos;ve received your enquiry and our sales team will get back to you within <strong className="font-semibold text-gray-700">24 business hours</strong>. In the meantime, feel free to browse our product catalog or read our latest articles.
        </p>

        <ul className="mt-6 space-y-2.5">
          {[
            'Your message has been delivered to our team.',
            'We typically reply within 24 hours on business days (Mon–Fri, 09:00–22:00 CST).',
            'For urgent matters, reach us directly on WhatsApp: +86-13552727303.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Browse Products
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Read Our Blog
          </Link>
        </div>

      </section>
    </main>
  )
}
