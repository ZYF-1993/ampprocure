import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import InquiryForm from '@/components/InquiryForm'
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <article>
              <p className="text-sm text-slate-500">
                <Link href="/" className="hover:text-slate-700">
                  Home
                </Link>{' '}
                /{' '}
                <Link href="/products" className="hover:text-slate-700">
                  Products
                </Link>{' '}
                / <span className="text-slate-700">{product.name}</span>
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">{product.name}</h1>
              <p className="mt-4 text-base leading-7 text-slate-600">{buildProductDescription(product.name, product.category, product.highlights)}</p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
                <span className="rounded-full bg-slate-100 px-2.5 py-1">Category: {product.category}</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1">Model Ref: {product.id}</span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
                >
                  Placeholder Primary CTA
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Placeholder Secondary CTA
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={getCatalogPageImage(product.catalogPage)}
                alt={`${product.name} placeholder image`}
                width={1200}
                height={840}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </article>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Placeholder Feature List</h2>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                {product.highlights.map((item) => (
                  <li key={item.label + item.value}>
                    <span className="font-semibold text-slate-900">{item.label}:</span> {normalizeHighlightValue(item.value)}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Placeholder Specifications Table</h2>
              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <tbody>
                    {product.highlights.map((item) => (
                      <tr key={`${product.id}-${item.label}`} className="border-b border-slate-200 last:border-b-0">
                        <th className="w-44 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-800">{item.label}</th>
                        <td className="px-3 py-2 text-slate-700">{normalizeHighlightValue(item.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">Placeholder Inquiry Section Title</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Replace this line with your real inquiry instructions.</p>
            <InquiryForm source={`product-${product.slug}`} submitLabel="Placeholder Submit" defaultProduct={product.name} twoColumnOnDesktop redirectOnSuccess="/thank-you" />
          </section>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">Placeholder Related Products Headline</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {relatedProducts.map((item) => (
                <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">{item.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">Model Ref: {item.id}</p>
                  <Link href={`/products/${item.slug}`} className="mt-3 inline-block text-sm font-semibold text-green-700 hover:text-green-800">
                    Placeholder Details Link
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  )
}
