import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_CATEGORIES, CATALOG_PRODUCT_COUNT, CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { getCatalogPageImage, getCatalogPdfPageUrl, getProductRoutePath, normalizeHighlightValue } from '@/lib/catalog-utils'
import { JYINS_LOCALES, JYINS_TOTAL_ROUTE_COUNT } from '@/lib/jyins-routes'
import { DEFAULT_KEYWORDS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site-config'

const categoryMatrix = CATALOG_CATEGORIES.map((category) => {
  const items = CATALOG_PRODUCTS.filter((product) => product.category === category)
  return {
    category,
    items,
    sample: items[0],
  }
}).sort((a, b) => b.items.length - a.items.length)

const featuredProducts = [...CATALOG_PRODUCTS]
  .sort((a, b) => a.catalogPage - b.catalogPage)
  .slice(0, 12)

const latestPosts = BLOG_POSTS.slice(0, 12)

const capabilityBlocks = [
  {
    title: 'OEM/ODM Engineering',
    detail: 'Custom parameter combinations, private labeling, packaging adaptation, and multilingual documentation.',
  },
  {
    title: 'Factory Production Control',
    detail: 'Batch-level QC checkpoints, test records, and shipment traceability for large channel orders.',
  },
  {
    title: 'Global Channel Support',
    detail: 'Standardized selection guidance, replacement workflows, and lifecycle support for recurring buyers.',
  },
  {
    title: 'Catalog-Driven Presales',
    detail: 'Each product card links to a specific PDF page so technical details are verifiable in one click.',
  },
] as const

const procurementSteps = [
  {
    title: 'Requirement Intake',
    detail: 'Collect load profile, rated and surge power, voltage platform, and destination market constraints.',
  },
  {
    title: 'Sample Validation',
    detail: 'Confirm waveform compatibility, efficiency, and protection behavior under real operating conditions.',
  },
  {
    title: 'Commercial Proposal',
    detail: 'Lock model list, compliance scope, payment terms, and delivery schedule with measurable milestones.',
  },
  {
    title: 'Scale Production',
    detail: 'Release production with defined quality records, final inspections, and after-sales service alignment.',
  },
] as const

const complianceBlocks = [
  {
    name: 'Safety & EMC Compliance',
    text: 'Structured documentation and test-ready dossiers prepared for target market review.',
  },
  {
    name: 'Battery & Charging Validation',
    text: 'Battery-type adaptation checks with practical charging strategy references for project deployment.',
  },
  {
    name: 'Inverter Reliability Protocols',
    text: 'Temperature, overload, and protection behavior reviewed with repeatable acceptance criteria.',
  },
  {
    name: 'Documentation Readiness',
    text: 'Model lists, technical sheets, and installation notes prepared for distributor and integrator workflows.',
  },
] as const

const homeFaq = [
  {
    question: 'How can we select the right inverter model faster?',
    answer:
      'Start from actual load profiles, then align rated and surge power, input voltage platform, and waveform requirements before comparing prices.',
  },
  {
    question: 'Can we review technical parameters before requesting a quote?',
    answer:
      'Yes. Every featured product card includes key highlights and a direct jump link to the exact page in the product catalog PDF.',
  },
  {
    question: 'Do you support OEM and ODM procurement programs?',
    answer:
      'Yes. We support model adaptation, parameter customization, private labeling, packaging options, and lifecycle service strategy for channel partners.',
  },
] as const

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'Manufacturer'],
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      knowsAbout: DEFAULT_KEYWORDS,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/news/{query}`,
        'query-input': 'required name=query',
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#featured-products`,
      name: 'Featured Industrial Power Products',
      itemListElement: featuredProducts.slice(0, 10).map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}${getProductRoutePath(product)}`,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: homeFaq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
}

export const metadata: Metadata = {
  title: 'Industrial Inverters, Chargers and Power Stations | Wholesale and OEM Supply',
  description:
    'Explore industrial inverters, battery chargers, portable power stations, and inverter boards with visual specs and direct catalog-page references.',
  keywords: [
    ...DEFAULT_KEYWORDS,
    'industrial inverter supplier',
    'portable power station manufacturer',
    'battery charger OEM',
    'inverter board supplier',
    'B2B power electronics',
  ],
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <header className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_40%),radial-gradient(circle_at_15%_20%,_rgba(249,115,22,0.14),_transparent_30%)]" />

        <section className="relative border-b border-slate-200 bg-slate-950 text-slate-100">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8">
            <p>{CATALOG_PRODUCT_COUNT} product models with direct technical references to catalog pages</p>
            <p>{JYINS_TOTAL_ROUTE_COUNT.toLocaleString()} multilingual route entries for global buyers and distributors</p>
          </div>
        </section>

        <section className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-slate-950">
            {SITE_NAME}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
            <Link href="/" className="transition hover:text-slate-950">
              Home
            </Link>
            <Link href="/product/3-stages-12v-60a-battery-chargers-for-lithium-lead-acid-lfp-battery" className="transition hover:text-slate-950">
              Products
            </Link>
            <Link href="/application" className="transition hover:text-slate-950">
              Solutions
            </Link>
            <Link href="/odm-oem" className="transition hover:text-slate-950">
              OEM/ODM
            </Link>
            <Link href="/news/inverter-industry-trends-in-2025.html" className="transition hover:text-slate-950">
              Blog
            </Link>
          </nav>

          <Link
            href="/inquire"
            className="inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
          >
            Request a Quote
          </Link>
        </section>

        <section className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-20">
          <article>
            <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
              Industrial Power Category Matrix
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Choose the right power products faster with clear specs and real catalog pages
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Compare models, review key parameters, and open the exact PDF page for each product. Submit your requirements to receive a
              tailored quotation and recommended configuration.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/inquire"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
              >
                Request a Quote
              </Link>
              <Link
                href="/pdf-download"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Download Catalog
              </Link>
              <Link
                href="/news/inverter-industry-trends-in-2025.html"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Read Industry Blog
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <Image
              src={getCatalogPageImage(10)}
              alt="Factory and product catalog hero placeholder"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </article>
        </section>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Product Models</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">{CATALOG_PRODUCT_COUNT}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Catalog Categories</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">{CATALOG_CATEGORIES.length}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Published Blog Posts</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">{BLOG_POSTS.length}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Language Routes</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">{JYINS_LOCALES.length + 1}</p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Why Buyers Choose This Product Center</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Everything is organized for fast model selection, technical confirmation, and smooth purchasing communication.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilityBlocks.map((block) => (
            <article key={block.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{block.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{block.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Category Matrix with Catalog Anchors</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Organize products by category and surface a quick technical snapshot so buyers can qualify models before inquiry.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categoryMatrix.map((group) => {
              if (!group.sample) return null

              return (
                <article key={group.category} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                  <Image
                    src={getCatalogPageImage(group.sample.catalogPage)}
                    alt={`${group.category} category preview`}
                    width={720}
                    height={460}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{group.category}</h3>
                    <p className="mt-1 text-sm text-slate-600">{group.items.length} products available</p>
                    <div className="mt-4 space-y-1.5 text-sm text-slate-700">
                      {group.sample.highlights.slice(0, 3).map((item) => (
                        <p key={item.label + item.value}>
                          <span className="font-semibold text-slate-900">{item.label}:</span> {normalizeHighlightValue(item.value)}
                        </p>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                      <Link href={getCatalogPdfPageUrl(group.sample.catalogPage)} target="_blank" className="text-orange-700 hover:text-orange-800">
                        View PDF Page {group.sample.catalogPage}
                      </Link>
                      <Link href={getProductRoutePath(group.sample)} className="text-slate-700 hover:text-slate-900">
                        Open Product Route
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Featured Product Cards</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Each card includes image context, key specifications, and one-click access to the exact product page in the catalog PDF.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={getCatalogPageImage(product.catalogPage)}
                alt={`${product.name} product image placeholder`}
                width={720}
                height={460}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.category}</p>
                <h3 className="mt-1 text-lg font-semibold leading-7 text-slate-900">{product.name}</h3>
                <p className="mt-1 text-xs text-slate-500">Catalog Page {product.catalogPage}</p>

                <div className="mt-3 space-y-1.5">
                  {product.highlights.slice(0, 4).map((item) => (
                    <p key={item.label + item.value} className="text-sm leading-6 text-slate-700">
                      <span className="font-semibold text-slate-900">{item.label}:</span> {normalizeHighlightValue(item.value)}
                    </p>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                  <Link href={getCatalogPdfPageUrl(product.catalogPage)} target="_blank" className="text-orange-700 hover:text-orange-800">
                    View PDF Page
                  </Link>
                  <Link href={getProductRoutePath(product)} className="text-slate-700 hover:text-slate-900">
                    Open Product Route
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">OEM/ODM Delivery Workflow</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Structured milestones reduce rework and improve project predictability for large-volume procurement.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {procurementSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-700">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Quality and Compliance Readiness</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Build trust with operational content blocks that procurement teams and engineering reviewers can evaluate quickly.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {complianceBlocks.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Industry Blog Hub</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {BLOG_POSTS.length} customer-focused guides are available to help you choose models, confirm parameters, and avoid ordering
              mistakes.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {latestPosts.map((post) => (
              <article key={post.path} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{post.category}</p>
                <h3 className="mt-2 text-lg font-semibold leading-7 text-slate-900">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={post.path} className="mt-4 inline-block text-sm font-semibold text-orange-700 transition hover:text-orange-800">
                  Read Full Post
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <article>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-3">
            {homeFaq.map((item) => (
              <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.question}</summary>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" id="quote">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Submit Your RFQ</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Share your target parameters and market requirements to receive a model shortlist and sourcing plan.
          </p>
          <form className="mt-5 space-y-4" action="#" method="post">
            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-800">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-800">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                placeholder="email@company.com"
              />
            </div>
            <div>
              <label htmlFor="requirements" className="mb-1 block text-sm font-medium text-slate-800">
                Requirement Details
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                placeholder="Power range, voltage platform, battery chemistry, compliance targets, order quantity"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Book a Factory Tour
            </button>
          </form>
        </article>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold">Global Service Languages</h2>
          <p className="mt-2 text-sm text-slate-300">
            Browse localized entry routes for your region and connect with the right product information quickly.
          </p>
          <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-10">
            {JYINS_LOCALES.map((lang) => (
              <Link
                key={lang}
                href={`/${lang}`}
                className="rounded border border-slate-700 bg-slate-900 px-2 py-1 text-center text-xs font-medium transition hover:bg-slate-800"
              >
                {lang.toUpperCase()}
              </Link>
            ))}
          </div>
        </section>
      </footer>
    </main>
  )
}
