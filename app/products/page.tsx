import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'
import { FRAMEWORK_CATEGORIES, getProductsByCategorySlug } from '@/lib/framework-data'
import { SITE_URL } from '@/lib/site-config'

type CategoryBucket = {
  slug: string
  title: string
  count: number
  products: ReturnType<typeof getProductsByCategorySlug>
}

const productsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'All Products',
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
  description:
    "Browse upprocure's full range of low-voltage electrical protection products: circuit breakers, SPDs, DC fuse holders, power meters, ATS, PV combiner boxes and more.",
  alternates: {
    canonical: '/products',
  },
}

export default function ProductsPage() {
  const buckets = getBuckets()
  const selectedProducts = buckets.flatMap((bucket) => bucket.products)

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
          <nav className="mb-4 flex items-center gap-2 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-600">
              <span data-i18n="header.home">Home</span>
            </Link>
            <span>/</span>
            <span className="text-gray-600" data-i18n="products.breadcrumbProducts">
              Products
            </span>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl" data-i18n="products.title">
            All Products
          </h1>

          <p className="mt-3 max-w-2xl text-base text-gray-500" data-i18n="products.subtitle">
            {CATALOG_PRODUCT_COUNT} products across {FRAMEWORK_CATEGORIES.length} categories - CE certified, IEC compliant, wholesale & OEM pricing available.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            <aside className="shrink-0 lg:w-56">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900" data-i18n="products.navTitle">
                Categories
              </h2>
              <nav aria-label="Product categories">
                <ul className="mt-3 space-y-0.5">
                  <li>
                    <Link href="/products" className="flex items-center justify-between rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
                      <span data-i18n="header.allProducts">All Products</span>
                      <span className="text-xs text-gray-400">{CATALOG_PRODUCT_COUNT}</span>
                    </Link>
                  </li>

                  {buckets.map((bucket) => (
                    <li key={bucket.slug}>
                      <Link
                        href={`/categories/${bucket.slug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-green-700"
                      >
                        <span>{bucket.title}</span>
                        <span className="text-xs text-gray-400">{bucket.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="flex-1">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {selectedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                    aria-label={product.name}
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-medium uppercase tracking-wide text-green-700">{product.category}</p>
                      <h3 className="mt-1 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-700">{product.name}</h3>
                      <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-gray-500">{product.technicalSummary}</p>

                      <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-green-700">
                        <span data-i18n="products.learnMore">View Details</span>
                        <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900" data-i18n="products.cta.title">
            Can't find what you need?
          </h2>
          <p className="mt-2 text-sm text-gray-500" data-i18n="products.cta.description">
            Contact our sales team for custom specifications, OEM programmes, or bulk pricing.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
            <span data-i18n="products.cta.button">Contact Sales</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
