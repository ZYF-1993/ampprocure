import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCatalogPageImage, normalizeHighlightValue } from '@/lib/catalog-utils'
import { FRAMEWORK_CATEGORIES, getCategoryBySlug, getProductsByCategorySlug } from '@/lib/framework-data'

type CategoryPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return FRAMEWORK_CATEGORIES.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category page does not exist.',
    }
  }

  return {
    title: `${category.title} | Category`,
    description: category.summary,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      title: `${category.title} | Product Category`,
      description: category.summary,
      url: `/categories/${category.slug}`,
      type: 'website',
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategorySlug(category.slug)

  const categoryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.title,
    description: category.summary,
    about: 'Industrial product category',
    isPartOf: '/products',
    numberOfItems: products.length,
    url: `/categories/${category.slug}`,
  }

  return (
    <main className="bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categoryJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700" data-i18n="header.home">
              Home
            </Link>{' '}
            /{' '}
            <Link href="/products" className="hover:text-slate-700" data-i18n="products.breadcrumbProducts">
              Products
            </Link>{' '}
            / <span className="text-slate-700">{category.title}</span>
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{category.title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{category.summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
              {products.length}
            </span>
            <span className="text-sm text-slate-500" data-i18n="categories.modelCount">
              Listed Models
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {FRAMEWORK_CATEGORIES.length}
            </span>
            <span className="text-sm text-slate-500" data-i18n="categories.totalCategories">
              Total Categories
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-6">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500" data-i18n="categories.switcherTitle">
            Category Navigation
          </h2>

          <nav aria-label="Category navigation">
            <ul className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/products"
                  className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-400 hover:bg-slate-50"
                  data-i18n="categories.all"
                >
                  All
                </Link>
              </li>

              {FRAMEWORK_CATEGORIES.map((item) => {
                const active = item.slug === category.slug

                return (
                  <li key={item.slug}>
                    <Link
                      href={`/categories/${item.slug}`}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        active
                          ? 'border-green-600 bg-green-600 text-white shadow-sm'
                          : 'border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      <span>{item.title}</span>
                      <span
                        className={`inline-flex min-w-6 items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                          active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {item.count}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_34px_-26px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_32px_48px_-20px_rgba(15,23,42,0.38),0_0_0_1px_rgba(16,185,129,0.12)]"
              >
                <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="absolute inset-4 rounded-xl border border-dashed border-slate-200 bg-white/60" aria-hidden="true" />
                  <Image
                    src={getCatalogPageImage(product.catalogPage)}
                    alt={`${product.name} placeholder image`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="relative z-10 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">{category.title}</p>
                    <span className="inline-flex h-5 min-w-10 items-center justify-center rounded-full bg-slate-100 px-2 text-[10px] font-bold text-slate-500">
                      P.{product.catalogPage}
                    </span>
                  </div>

                  <h2 className="text-[15px] font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-emerald-700">{product.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{product.technicalSummary}</p>

                  <p className="mt-3 text-[13px] text-slate-600">
                    <span className="font-semibold text-slate-800" data-i18n="products.keySpecLabel">
                      Key Spec:
                    </span>{' '}
                    {product.highlights
                      .slice(0, 1)
                      .map((item) => `${item.label} ${normalizeHighlightValue(item.value)}`)
                      .join(', ')}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-all duration-200 group-hover:gap-2.5 group-hover:text-emerald-800">
                    <span data-i18n="categories.viewDetails">View Details</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <article>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900" data-i18n="categories.ctaTitle">
              Need Application-Based Product Matching?
            </h2>
            <p className="mt-2 text-sm text-slate-600" data-i18n="categories.ctaDescription">
              Share your project context and get a recommended model list with technical notes.
            </p>
          </article>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            data-i18n="categories.ctaButton"
          >
            Request Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
