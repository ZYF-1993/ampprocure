import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'
import { getCatalogPageImage, normalizeHighlightValue } from '@/lib/catalog-utils'
import { FRAMEWORK_CATEGORIES, getProductsByCategorySlug } from '@/lib/framework-data'
import { SITE_URL } from '@/lib/site-config'

type ProductsPageProps = {
  searchParams: Promise<{ category?: string }>
}

type CategoryBucket = {
  slug: string
  title: string
  count: number
  products: ReturnType<typeof getProductsByCategorySlug>
}

const productsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Placeholder Products Page',
  url: `${SITE_URL}/products`,
}

function getBuckets(): CategoryBucket[] {
  return FRAMEWORK_CATEGORIES.map((category) => {
    const products = getProductsByCategorySlug(category.slug)
    return {
      slug: category.slug,
      title: category.title,
      count: products.length,
      products,
    }
  })
}

export const metadata: Metadata = {
  title: 'Products',
  description: 'Placeholder products page description. Replace with your own product overview copy.',
  alternates: {
    canonical: '/products',
  },
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const query = await searchParams
  const buckets = getBuckets()
  const selectedSlug = query.category && buckets.some((bucket) => bucket.slug === query.category) ? query.category : 'all'
  const selectedProducts = selectedSlug === 'all' ? buckets.flatMap((bucket) => bucket.products) : (buckets.find((bucket) => bucket.slug === selectedSlug)?.products ?? [])

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{' '}
            / <span className="text-slate-600">Products</span>
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">Placeholder Product Listing Title</h1>
          <p className="mt-3 max-w-3xl text-2xl leading-9 text-slate-600">{CATALOG_PRODUCT_COUNT} placeholder products across {FRAMEWORK_CATEGORIES.length} placeholder categories.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[290px_1fr] lg:px-8">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900">Categories</h2>
            <nav className="mt-4 rounded-xl border border-gray-200 bg-white p-2" aria-label="Product categories">
              <Link
                href="/products"
                className={`flex items-center justify-between rounded-md px-3 py-2 text-base font-medium transition ${
                  selectedSlug === 'all' ? 'bg-emerald-50 text-emerald-800' : 'text-slate-700 hover:bg-gray-100'
                }`}
              >
                <span>All Products</span>
                <span className="text-slate-400">{CATALOG_PRODUCT_COUNT}</span>
              </Link>

              {buckets.map((bucket) => (
                <Link
                  key={bucket.slug}
                  href={`/categories/${bucket.slug}`}
                  className={`mt-1 flex items-center justify-between rounded-md px-3 py-2 text-base font-medium transition ${
                    selectedSlug === bucket.slug ? 'bg-emerald-50 text-emerald-800' : 'text-slate-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{bucket.title}</span>
                  <span className="text-slate-400">{bucket.count}</span>
                </Link>
              ))}
            </nav>
          </aside>

          <section>
            <h2 className="sr-only">Product cards</h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {selectedProducts.map((product) => (
                <article key={`product-${product.id}`} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
                    <Image
                      src={getCatalogPageImage(product.catalogPage)}
                      alt={`${product.name} placeholder image`}
                      width={320}
                      height={220}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="h-full w-auto max-w-full object-contain"
                    />
                  </div>

                  <div className="border-t border-gray-100 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{product.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold leading-8 text-slate-900">{product.name}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{product.technicalSummary}</p>
                    <p className="mt-3 text-sm text-slate-700">
                      <span className="font-semibold">Placeholder Key Spec:</span>{' '}
                      {product.highlights.slice(0, 1).map((item) => `${item.label} ${normalizeHighlightValue(item.value)}`).join(', ')}
                    </p>

                    <Link href={`/products/${product.slug}`} className="mt-4 inline-flex items-center text-lg font-semibold text-emerald-700 hover:text-emerald-800">
                      Placeholder Details Link
                      <span className="ml-2">-&gt;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <article>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Placeholder Support CTA</h2>
            <p className="mt-2 text-sm text-slate-600">Replace this line with your own category support message.</p>
          </article>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
            Placeholder CTA Button
          </Link>
        </div>
      </section>
    </main>
  )
}
