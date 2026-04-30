import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { getCatalogPageImage, normalizeHighlightValue } from '@/lib/catalog-utils'
import { SITE_URL } from '@/lib/site-config'
import { getProductBySlug } from '@/lib/site-content'

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>
}

function buildProductDescription(name: string, category: string, highlights: readonly { label: string; value: string }[]): string {
  const core = highlights
    .slice(0, 3)
    .map((item) => `${item.label}: ${normalizeHighlightValue(item.value)}`)
    .join(' | ')

  return `Placeholder product description for ${name} in ${category}. ${core}.`
}

export function generateStaticParams() {
  return CATALOG_PRODUCTS.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product does not exist.',
    }
  }

  return {
    title: product.name,
    description: buildProductDescription(product.name, product.category, product.highlights),
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = CATALOG_PRODUCTS.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: buildProductDescription(product.name, product.category, product.highlights),
    sku: product.id,
    category: product.category,
    image: `${SITE_URL}${getCatalogPageImage(product.catalogPage)}`,
    url: `${SITE_URL}/products/${product.slug}`,
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Breadcrumb strip */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors" data-i18n="header.home">
              Home
            </Link>
            {' / '}
            <Link href="/products" className="hover:text-gray-600 transition-colors" data-i18n="products.breadcrumbProducts">
              Products
            </Link>
            {' / '}
            <Link href={`/categories/${product.categoryCode}`} className="hover:text-gray-600 transition-colors">
              {product.category}
            </Link>
            {' / '}
            <span className="text-gray-600 max-w-50 inline-block truncate align-bottom">{product.name}</span>
          </p>
        </div>
      </div>

      {/* Product hero section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Two-column: image left, info right */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">

            {/* Product image */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={getCatalogPageImage(product.catalogPage)}
                  alt={`${product.name} product image`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6 transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Product info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-700">
                {product.category}
              </p>

              <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {product.technicalSummary}
              </p>

              {/* Key features */}
              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500" data-i18n="product.keyFeatures">
                  Key Features
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {product.highlights.slice(0, 6).map((item) => (
                    <li key={item.label + item.value} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>
                        <span className="font-semibold text-gray-900">{item.label}:</span>{' '}
                        {normalizeHighlightValue(item.value)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                  data-i18n="product.requestQuote"
                >
                  Request Quotation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border border-green-700 px-6 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
                  data-i18n="product.askTechnical"
                >
                  Ask Technical Question
                </Link>
              </div>

              <p className="mt-3 text-xs text-gray-400" data-i18n="product.availability">
                Samples available · OEM pricing on request · Ships worldwide
              </p>
            </div>
          </div>

          {/* Technical specifications — full width below hero */}
          <div className="mt-16">
            <h2 className="text-xl font-bold text-gray-900" data-i18n="product.specsTitle">
              Technical Specifications
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {product.highlights.map((item, index) => (
                    <tr key={`${product.id}-${item.label}`} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <th className="w-1/3 px-5 py-3.5 text-left font-medium text-gray-700">{item.label}</th>
                      <td className="px-5 py-3.5 text-gray-600">{normalizeHighlightValue(item.value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


{/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-gray-100 bg-white py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900" data-i18n="product.relatedTitle">
              More in {product.category}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-250 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.2),0_0_0_1px_rgba(52,211,153,0.12)]"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-linear-to-br from-slate-50 to-slate-100">
                    <div className="absolute inset-3 rounded-xl border border-dashed border-slate-200 bg-white/50" aria-hidden="true" />
                    <Image
                      src={getCatalogPageImage(item.catalogPage)}
                      alt={`${item.name} product image`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="relative z-10 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[10.5px] font-bold uppercase tracking-widest text-emerald-600">{item.category}</p>
                    <h3 className="mt-1.5 text-sm font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-emerald-700">
                      {item.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-slate-500">
                      {item.technicalSummary}
                    </p>
                    <span
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 transition-all duration-200 group-hover:gap-2.5 group-hover:text-emerald-800"
                      data-i18n="product.viewDetails"
                    >
                      View Details
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
