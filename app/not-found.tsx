import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryActions from '@/components/InquiryActions'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you requested is not available. Browse products or send an inquiry.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          That address is not on this site. Browse a product category or send the model you need.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex min-h-11 items-center justify-center rounded-md bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
            Back to Home
          </Link>
          <Link href="/products" className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">
            Browse Products
          </Link>
          <Link href="/contact#rfq" className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">
            Request a Quote
          </Link>
        </div>
        <nav aria-label="Product categories" className="mt-8 flex flex-wrap justify-center gap-2">
          {FRAMEWORK_CATEGORIES.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-green-600 hover:text-green-700">
              {category.title}
            </Link>
          ))}
        </nav>
        <div className="mt-8 text-left">
          <InquiryActions formHref="/contact#rfq" />
        </div>
      </section>
    </main>
  )
}
