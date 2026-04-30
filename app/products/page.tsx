import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'
import { getCatalogPageImage, normalizeHighlightValue } from '@/lib/catalog-utils'
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
  title: 'All Products',
  description: 'Explore all product categories with modern B2B navigation and direct access to technical product pages.',
  alternates: {
    canonical: '/products',
  },
}

export default function ProductsPage() {
  const buckets = getBuckets()
  const selectedProducts = buckets.flatMap((bucket) => bucket.products)

  return (
    <main className="bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              <span data-i18n="header.home">Home</span>
            </Link>{' '}
            / <span className="text-slate-600" data-i18n="products.breadcrumbProducts">Products</span>
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl" data-i18n="products.title">
            All Products
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl" data-i18n="products.subtitle">
            Discover complete product lines with quick category navigation and direct access to technical details.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">{CATALOG_PRODUCT_COUNT}</span>
            <span className="text-sm text-slate-500" data-i18n="products.totalLabel">Total Listed Models</span>
            <span className="ml-2 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{FRAMEWORK_CATEGORIES.length}</span>
            <span className="text-sm text-slate-500" data-i18n="products.categoryCountLabel">Active Categories</span>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
          <aside className="products-catalog-sidebar lg:sticky lg:top-24 lg:self-start">
            <h2 className="products-catalog-sidebar-title" data-i18n="products.navTitle">
              Categories
            </h2>
            <nav className="products-catalog-nav" aria-label="Product categories">
              <Link href="/products" className="products-catalog-nav-item products-catalog-nav-item-active">
                <span data-i18n="header.allProducts">All Products</span>
                <span className="products-catalog-count">{CATALOG_PRODUCT_COUNT}</span>
              </Link>

              {buckets.map((bucket) => (
                <Link key={bucket.slug} href={`/categories/${bucket.slug}`} className="products-catalog-nav-item">
                  <span>{bucket.title}</span>
                  <span className="products-catalog-count">{bucket.count}</span>
                </Link>
              ))}
            </nav>
          </aside>

          <section>
            <div className="mb-4 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900" data-i18n="products.gridTitle">
                Product Listing Grid
              </h2>
              <p className="mt-1 text-sm text-slate-500" data-i18n="products.catalogHint">
                Select a category from the left navigation or browse all products below.
              </p>
            </div>

            <div className="products-card-grid">
              {selectedProducts.map((product) => (
                <Link key={`product-${product.id}`} href={`/products/${product.slug}`} className="products-card group">
                  <div className="products-card-media">
                    <div className="products-card-media-placeholder" aria-hidden="true" />
                    <Image
                      src={getCatalogPageImage(product.catalogPage)}
                      alt={`${product.name} product image`}
                      width={320}
                      height={220}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="products-card-image"
                    />
                  </div>

                  <div className="products-card-body">
                    <div className="products-card-meta-row">
                      <p className="products-card-category">{product.category}</p>
                      <span className="products-card-page-chip">P.{product.catalogPage}</span>
                    </div>

                    <h3 className="products-card-title">{product.name}</h3>
                    <p className="products-card-description">{product.technicalSummary}</p>

                    <p className="products-card-spec">
                      <span data-i18n="products.keySpecLabel">Key Spec:</span>{' '}
                      {product.highlights.slice(0, 1).map((item) => `${item.label} ${normalizeHighlightValue(item.value)}`).join(', ')}
                    </p>

                    <span className="products-card-link">
                      <span data-i18n="products.learnMore">View Details</span>
                      <svg className="products-card-link-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <article>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900" data-i18n="products.cta.title">
              Need Product Matching Support?
            </h2>
            <p className="mt-2 text-sm text-slate-600" data-i18n="products.cta.description">
              Share your target application and we will recommend the right model combination.
            </p>
          </article>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
            <span data-i18n="products.cta.button">Contact Sales</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
