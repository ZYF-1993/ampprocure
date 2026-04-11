import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import InquiryForm from '@/components/InquiryForm'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { getCatalogPageImage, getCatalogPdfPageUrl, normalizeHighlightValue } from '@/lib/catalog-utils'
import { DEFAULT_KEYWORDS, SITE_NAME, SITE_URL } from '@/lib/site-config'
import { getProductBySlug } from '@/lib/site-content'

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>
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
    title: `${product.name}`,
    description: `${product.name} technical overview, model options, and catalog page reference for B2B buyers.`,
    keywords: [...DEFAULT_KEYWORDS, product.name.toLowerCase(), product.category.toLowerCase(), 'product detail page'],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      type: 'website',
      title: `${product.name} | ${SITE_NAME}`,
      description: `${product.name} with visible technical highlights and quote-ready details.`,
      url: `${SITE_URL}/products/${product.slug}`,
      images: [getCatalogPageImage(product.catalogPage)],
    },
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = CATALOG_PRODUCTS.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 6)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: `${product.name} from ${product.category} with B2B-ready specification references.`,
    sku: product.id,
    category: product.category,
    image: `${SITE_URL}${getCatalogPageImage(product.catalogPage)}`,
    url: `${SITE_URL}/products/${product.slug}`,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    additionalProperty: product.highlights.slice(0, 12).map((item) => ({
      '@type': 'PropertyValue',
      name: item.label,
      value: normalizeHighlightValue(item.value),
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/contact?product=${encodeURIComponent(product.name)}`,
    },
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="grid gap-10 border-b border-slate-200 pb-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <article>
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">Product Detail</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">Category: {product.category}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">Catalog Page: {product.catalogPage}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Request Quote
            </Link>
            <Link
              href={getCatalogPdfPageUrl(product.catalogPage)}
              target="_blank"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Open Catalog PDF Page
            </Link>
          </div>
        </article>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={getCatalogPageImage(product.catalogPage)}
            alt={`${product.name} image`}
            width={1200}
            height={820}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="h-auto w-full"
          />
        </article>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Technical Parameters</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <tbody>
                {product.highlights.map((item) => (
                  <tr key={item.label + item.value} className="border-b border-slate-200 last:border-b-0">
                    <th className="w-52 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-800">{item.label}</th>
                    <td className="px-3 py-2 text-slate-700">{normalizeHighlightValue(item.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="space-y-5">
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-slate-950">Model Options</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.models.map((model) => (
                <span key={model} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {model}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-slate-950">Technical Summary</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{product.technicalSummary.slice(0, 900)}...</p>
          </section>
        </article>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Submit Inquiry for This Product</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Include quantity, destination market, and timeline to get a tailored quotation.</p>
        <InquiryForm
          source={`product-${product.slug}`}
          submitLabel="Submit Product Inquiry"
          defaultProduct={product.name}
          twoColumnOnDesktop
          redirectOnSuccess="/thank-you"
        />
      </section>

      {relatedProducts.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Related Products</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-xs text-slate-500">Catalog Page {item.catalogPage}</p>
                <div className="mt-3 space-y-1.5 text-sm text-slate-700">
                  {item.highlights.slice(0, 3).map((highlight) => (
                    <p key={highlight.label + highlight.value}>
                      <span className="font-semibold text-slate-900">{highlight.label}:</span> {normalizeHighlightValue(highlight.value)}
                    </p>
                  ))}
                </div>
                <Link href={`/products/${item.slug}`} className="mt-4 inline-block text-sm font-semibold text-orange-700 hover:text-orange-800">
                  View Details
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  )
}
