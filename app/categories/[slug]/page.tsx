import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryContent } from '@/lib/category-content'
import { FRAMEWORK_CATEGORIES, getCategoryBySlug, getProductsByCategorySlug } from '@/lib/framework-data'
import { SITE_NAME, SITE_URL } from '@/lib/site-config'

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

  const title = `${category.title} Manufacturer & Supplier`
  const image = `/images/categories/${category.slug}.png`

  return {
    title,
    description: category.summary,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description: category.summary,
      url: `${SITE_URL}/categories/${category.slug}`,
      type: 'website',
      images: [
        {
          url: image,
          alt: `${category.title} product range`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description: category.summary,
      images: [image],
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
  const content = getCategoryContent(category.slug)
  const categoryUrl = `${SITE_URL}/categories/${category.slug}`

  const faqJsonLd =
    content && content.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: content.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null

  const categoryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.title,
    description: category.summary,
    about: 'Industrial product category',
    isPartOf: `${SITE_URL}/products`,
    numberOfItems: products.length,
    url: categoryUrl,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/products/${product.slug}`,
      })),
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: category.title, item: categoryUrl },
    ],
  }

  return (
    <main className="bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categoryJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
          }}
        />
      )}

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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {products.map((product) => (
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
                  <h2 className="mt-1 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-700">{product.name}</h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-gray-500">{product.technicalSummary}</p>

                  <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-green-700">
                    <span data-i18n="categories.viewDetails">View Details</span>
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {content && (
        <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="space-y-12 lg:col-span-2">
                <article>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {content.buyingGuideTitle}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                    {content.buyingGuide.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </article>

                <article>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Industry Application Scenarios
                  </h2>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    {content.applications.map((application) => (
                      <div key={application.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <h3 className="text-sm font-semibold text-slate-900">{application.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{application.body}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Frequently Asked Questions
                  </h2>
                  <dl className="mt-5 divide-y divide-slate-200 border-t border-slate-200">
                    {content.faq.map((item) => (
                      <div key={item.question} className="py-5">
                        <dt className="text-base font-semibold text-slate-900">{item.question}</dt>
                        <dd className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </div>

              <aside className="lg:col-span-1">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-8">
                  <h2 className="text-lg font-bold text-slate-900">Global Logistics &amp; Commercial Terms</h2>
                  <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                    {content.logistics.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

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
