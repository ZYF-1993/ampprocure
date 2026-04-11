import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CATALOG_CATEGORIES, CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'
import { getCatalogPageImage } from '@/lib/catalog-utils'
import { DEFAULT_KEYWORDS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about our B2B manufacturing capabilities, OEM/ODM process, and quality-first approach for industrial power product sourcing.',
  keywords: [...DEFAULT_KEYWORDS, 'about inverter manufacturer', 'OEM ODM power electronics', 'factory quality control'],
  alternates: {
    canonical: '/about',
  },
}

const capabilityItems = [
  {
    title: 'OEM/ODM Development',
    detail: 'Model adaptation, private labeling, custom packaging, and documentation matching for target markets.',
  },
  {
    title: 'Quality Assurance Process',
    detail: 'Incoming materials checks, in-line test points, and shipment inspection records for consistent delivery quality.',
  },
  {
    title: 'Technical Presales Support',
    detail: 'Power sizing, parameter matching, and catalog-page references to reduce decision errors before ordering.',
  },
  {
    title: 'After-Sales Coordination',
    detail: 'Standardized troubleshooting flow, replacement guidance, and project continuity support for channel partners.',
  },
] as const

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <article>
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
            About Our B2B Platform
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            A sourcing-focused website built for industrial power buyers
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            We organize product data, technical specifications, and inquiry flows so distributors, importers, and project teams can evaluate
            options quickly and move to commercial discussion with confidence.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Products</p>
              <p className="mt-1 font-display text-2xl font-bold text-slate-950">{CATALOG_PRODUCT_COUNT}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Categories</p>
              <p className="mt-1 font-display text-2xl font-bold text-slate-950">{CATALOG_CATEGORIES.length}</p>
            </div>
          </div>
        </article>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={getCatalogPageImage(24)}
            alt="Factory facility placeholder"
            width={1200}
            height={800}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="h-auto w-full"
          />
        </article>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Core Capabilities</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilityItems.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Work With Our Team</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Whether you are building a new product line or scaling repeat orders, we support technical evaluation, model roadmap planning, and
          stable delivery collaboration.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  )
}
