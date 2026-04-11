import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InquiryForm from '@/components/InquiryForm'
import { BLOG_POST_COUNT } from '@/lib/blog-posts'
import { CATALOG_CATEGORIES, CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'
import { getCatalogPageImage, getCatalogPdfPageUrl, normalizeHighlightValue } from '@/lib/catalog-utils'
import { DEFAULT_KEYWORDS, SITE_NAME, SITE_URL } from '@/lib/site-config'
import { FEATURED_PRODUCTS, LATEST_BLOG_POSTS, PRODUCT_CATEGORY_MATRIX } from '@/lib/site-content'

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'Manufacturer'],
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: 'B2B manufacturer platform for inverters, chargers, portable power stations, and inverter boards.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: 'en',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/products?query={query}`,
        'query-input': 'required name=query',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Source industrial power products with clear specifications, direct catalog page references, and fast quote support for global B2B buyers.',
  keywords: [...DEFAULT_KEYWORDS, 'B2B power products', 'industrial inverter supplier', 'wholesale inverter manufacturer'],
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_42%),radial-gradient(circle_at_12%_30%,_rgba(249,115,22,0.14),_transparent_32%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <article>
            <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
              B2B Industrial Power Platform
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Build your next wholesale power project with verified product data
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Compare technical parameters, open exact catalog pages, and submit RFQ details for faster model matching, sample validation,
              and production planning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Request a Quote
              </Link>
              <Link
                href={getCatalogPdfPageUrl(10)}
                target="_blank"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Open Catalog
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <Image
              src={getCatalogPageImage(10)}
              alt="Industrial power product showcase"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-auto w-full"
            />
          </article>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Product Models</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">{CATALOG_PRODUCT_COUNT}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Product Categories</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">{CATALOG_CATEGORIES.length}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Published Blog Posts</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">{BLOG_POST_COUNT}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Quote Response Goal</p>
          <p className="mt-2 font-display text-3xl font-bold text-slate-950">24h</p>
        </article>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Product Categories for B2B Sourcing</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Start from category-level selection, then shortlist specific models by power rating, voltage platform, waveform, and technical
            protection requirements.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCT_CATEGORY_MATRIX.map((group) => (
              <article key={group.category} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{group.category}</h3>
                <p className="mt-1 text-sm text-slate-600">{group.count} models available for this category.</p>
                {group.sample ? (
                  <>
                    <p className="mt-4 text-sm font-medium text-slate-800">Sample model: {group.sample.name}</p>
                    <Link href={`/products/${group.sample.slug}`} className="mt-3 inline-block text-sm font-semibold text-orange-700 hover:text-orange-800">
                      View Details
                    </Link>
                  </>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Featured Products</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Every product card links to its detail page and exact PDF page, making technical confirmation and internal decision-making easier.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {FEATURED_PRODUCTS.slice(0, 9).map((product) => (
            <article key={product.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={getCatalogPageImage(product.catalogPage)}
                alt={`${product.name} product image`}
                width={720}
                height={460}
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.category}</p>
                <h3 className="mt-1 text-lg font-semibold leading-7 text-slate-900">{product.name}</h3>
                <p className="mt-1 text-xs text-slate-500">Catalog Page {product.catalogPage}</p>
                <div className="mt-3 space-y-1.5">
                  {product.highlights.slice(0, 3).map((item) => (
                    <p key={item.label + item.value} className="text-sm leading-6 text-slate-700">
                      <span className="font-semibold text-slate-900">{item.label}:</span> {normalizeHighlightValue(item.value)}
                    </p>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                  <Link href={`/products/${product.slug}`} className="text-slate-700 hover:text-slate-900">
                    Product Detail
                  </Link>
                  <Link href={getCatalogPdfPageUrl(product.catalogPage)} target="_blank" className="text-orange-700 hover:text-orange-800">
                    PDF Page
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Latest Blog Posts</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Use practical buyer guides to align model selection, technical review, and quote discussions across your sourcing team.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {LATEST_BLOG_POSTS.slice(0, 6).map((post) => (
              <article key={post.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{post.category}</p>
                <h3 className="mt-2 text-lg font-semibold leading-7 text-slate-900">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-orange-700 hover:text-orange-800">
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <article>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Tell Us Your Project Requirements</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Share load profile, voltage requirements, target quantity, and compliance expectations. Our team will return matching models and
            commercial suggestions.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>Model shortlist tailored to your usage scenario</li>
            <li>Clear technical comparison for decision-makers</li>
            <li>Fast quotation with OEM/ODM options when needed</li>
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Submit RFQ</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Your inquiry will be sent directly to our sales inbox.</p>
          <InquiryForm source="home-rfq" submitLabel="Send Inquiry" redirectOnSuccess="/thank-you" />
        </article>
      </section>
    </main>
  )
}
