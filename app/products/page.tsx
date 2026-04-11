import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { getCatalogPageImage, getCatalogPdfPageUrl, normalizeHighlightValue } from '@/lib/catalog-utils'
import { DEFAULT_KEYWORDS, SITE_URL } from '@/lib/site-config'
import { PRODUCT_CATEGORY_MATRIX } from '@/lib/site-content'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse complete B2B product categories including inverters, chargers, portable power stations, and inverter boards with visible technical highlights.',
  keywords: [...DEFAULT_KEYWORDS, 'industrial power product catalog', 'inverter product summary', 'B2B product detail page'],
  alternates: {
    canonical: '/products',
  },
}

const productListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Industrial Power Product Catalog',
  numberOfItems: CATALOG_PRODUCTS.length,
  itemListElement: CATALOG_PRODUCTS.slice(0, 50).map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: product.name,
    url: `${SITE_URL}/products/${product.slug}`,
  })),
}

export default function ProductsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productListJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section>
        <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">Product Center</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Industrial Power Products for Wholesale and Project Procurement</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
          Choose by category first, then compare detailed parameters on each product page. Every model includes a direct link to its catalog PDF
          page for technical verification.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {PRODUCT_CATEGORY_MATRIX.map((group) => (
          <article key={group.category} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{group.category}</h2>
            <p className="mt-2 text-sm text-slate-600">{group.count} models in this category.</p>
            {group.sample ? (
              <Link href={`/products/${group.sample.slug}`} className="mt-3 inline-block text-sm font-semibold text-orange-700 hover:text-orange-800">
                View a Sample Product
              </Link>
            ) : null}
          </article>
        ))}
      </section>

      <section className="mt-14 space-y-12">
        {PRODUCT_CATEGORY_MATRIX.map((group) => (
          <article key={group.category} id={group.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') }>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">{group.category}</h2>
            <p className="mt-2 text-sm text-slate-600">Top models from this category. Open detail pages for complete parameters.</p>

            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.products.slice(0, 9).map((product) => (
                <article key={product.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src={getCatalogPageImage(product.catalogPage)}
                    alt={`${product.name} product photo`}
                    width={720}
                    height={460}
                    className="h-44 w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold leading-7 text-slate-900">{product.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">Catalog Page {product.catalogPage}</p>
                    <div className="mt-3 space-y-1.5 text-sm leading-6 text-slate-700">
                      {product.highlights.slice(0, 4).map((item) => (
                        <p key={item.label + item.value}>
                          <span className="font-semibold text-slate-900">{item.label}:</span> {normalizeHighlightValue(item.value)}
                        </p>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                      <Link href={`/products/${product.slug}`} className="text-slate-700 hover:text-slate-900">
                        Product Details
                      </Link>
                      <Link href={getCatalogPdfPageUrl(product.catalogPage)} target="_blank" className="text-orange-700 hover:text-orange-800">
                        Open PDF Page
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
