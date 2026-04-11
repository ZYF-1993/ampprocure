import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildLocalizedPath,
  isJyinsMirroredPath,
  JYINS_LOCALES,
  normalizePath,
  stripLocalePrefix,
} from '@/lib/jyins-routes'
import { BLOG_POSTS, getBlogPostByPath } from '@/lib/blog-posts'
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS, type CatalogProduct } from '@/lib/catalog-products'
import {
  CATALOG_PDF_PATH,
  getCatalogPageImage,
  getCatalogPdfPageUrl,
  getProductRoutePath,
  normalizeHighlightValue,
} from '@/lib/catalog-utils'
import { DEFAULT_KEYWORDS, SITE_NAME, SITE_URL } from '@/lib/site-config'

type CatchAllPageProps = {
  params: Promise<{ slug: string[] }>
}

type RouteKind = 'product' | 'article' | 'catalog' | 'corporate'

type RouteCopy = {
  badge: string
  title: string
  description: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

const ROUTE_COPY_BY_PATH: Readonly<Record<string, RouteCopy>> = {
  '/inquire': {
    badge: 'Get a Quote',
    title: 'Request a Quote',
    description:
      'Share your power requirements, voltage platform, and quantity target. We will recommend suitable models and provide a fast quotation.',
    primaryCtaLabel: 'Start Inquiry',
    primaryCtaHref: '#inquiry-form',
    secondaryCtaLabel: 'Download Catalog',
    secondaryCtaHref: '/pdf-download',
  },
  '/pdf-download': {
    badge: 'Catalog Center',
    title: 'Download Product Catalog',
    description:
      'Open the full product catalog to review model details, technical parameters, and page-by-page product references.',
    primaryCtaLabel: 'Open Full Catalog PDF',
    primaryCtaHref: CATALOG_PDF_PATH,
    secondaryCtaLabel: 'Request a Quote',
    secondaryCtaHref: '/inquire',
  },
  '/odm-oem': {
    badge: 'OEM/ODM Service',
    title: 'OEM and ODM Manufacturing Support',
    description:
      'Discuss model customization, private labeling, and packaging requirements for your market and project scenario.',
    primaryCtaLabel: 'Discuss OEM Project',
    primaryCtaHref: '/inquire',
    secondaryCtaLabel: 'View Product Categories',
    secondaryCtaHref: '/application',
  },
  '/application': {
    badge: 'Application Center',
    title: 'Application-Based Product Selection',
    description:
      'Find suitable inverters, chargers, and power stations by use case so your team can shortlist models quickly.',
    primaryCtaLabel: 'Get Model Recommendation',
    primaryCtaHref: '/inquire',
    secondaryCtaLabel: 'Download Catalog',
    secondaryCtaHref: '/pdf-download',
  },
}

function pathFromSlug(slug: string[]): string {
  if (slug.length === 0) return '/'
  return '/' + slug.join('/')
}

function getRouteKind(basePath: string): RouteKind {
  if (basePath.startsWith('/productshow/') || basePath.startsWith('/product/')) return 'product'
  if (basePath.startsWith('/news/')) return 'article'
  if (basePath === '/application' || basePath === '/application_category/industry-applications') return 'catalog'
  return 'corporate'
}

function localizedPath(locale: string | null, path: string): string {
  return locale ? buildLocalizedPath(path, locale) : path
}

function getSafeHref(locale: string | null, href: string): string {
  if (href.startsWith('#') || href.startsWith('/catalog/')) return href
  return localizedPath(locale, href)
}

function toTitleCase(value: string): string {
  return value
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function buildFallbackCopy(basePath: string, routeKind: RouteKind): RouteCopy {
  const cleaned = basePath
    .replace(/^\//, '')
    .replace(/\.html$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\//g, ' ')
    .trim()

  const pageTitle = cleaned ? toTitleCase(cleaned) : 'Information Page'
  const badge = routeKind === 'catalog' ? 'Application Page' : 'Business Page'

  return {
    badge,
    title: pageTitle,
    description:
      'Review product information, technical references, and inquiry options on this page. Contact us for model recommendations.',
    primaryCtaLabel: 'Request a Quote',
    primaryCtaHref: '/inquire',
    secondaryCtaLabel: 'Download Catalog',
    secondaryCtaHref: '/pdf-download',
  }
}

function getRouteCopy(basePath: string, routeKind: RouteKind): RouteCopy {
  return ROUTE_COPY_BY_PATH[basePath] ?? buildFallbackCopy(basePath, routeKind)
}

function tokenScore(path: string, text: string): number {
  const tokens = path
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter((token) => token.length >= 2)

  const bag = text.toLowerCase()
  return tokens.reduce((sum, token) => (bag.includes(token) ? sum + 1 : sum), 0)
}

function getMatchedProducts(path: string, limit = 9) {
  const scored = CATALOG_PRODUCTS.map((product) => {
    const bag = `${product.name} ${product.category} ${product.models.join(' ')} ${product.technicalSummary}`
    return { product, score: tokenScore(path, bag) }
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  if (scored.length > 0) return scored.slice(0, limit).map((item) => item.product)
  return CATALOG_PRODUCTS.slice(0, limit)
}

function getHighlightValue(product: CatalogProduct, labelKeywords: readonly string[]): string | null {
  const match = product.highlights.find((item) => {
    const normalized = item.label.toLowerCase()
    return labelKeywords.some((keyword) => normalized.includes(keyword))
  })

  return match ? normalizeHighlightValue(match.value) : null
}

function buildProductIntro(product: CatalogProduct): string {
  const ratedPower = getHighlightValue(product, ['rated power', 'output power'])
  const inputVoltage = getHighlightValue(product, ['input voltage'])
  const outputVoltage = getHighlightValue(product, ['output voltage'])
  const waveform = getHighlightValue(product, ['waveform'])

  const parts = [
    ratedPower ? `rated power ${ratedPower}` : null,
    inputVoltage ? `input voltage ${inputVoltage}` : null,
    outputVoltage ? `output voltage ${outputVoltage}` : null,
    waveform ? `${waveform} output` : null,
  ].filter(Boolean)

  if (parts.length === 0) {
    return 'Review the detailed specifications below to confirm model fit, electrical compatibility, and deployment requirements.'
  }

  return `This model supports ${parts.join(', ')}. Review full technical parameters below before placing your order.`
}

export async function generateMetadata({ params }: CatchAllPageProps): Promise<Metadata> {
  const { slug } = await params
  const pathname = normalizePath(pathFromSlug(slug))

  if (!isJyinsMirroredPath(pathname)) {
    return {
      title: 'Page Not Found',
      description: 'The requested route is not available in this website.',
    }
  }

  const { basePath } = stripLocalePrefix(pathname)
  const routeKind = getRouteKind(basePath)
  const blog = routeKind === 'article' ? getBlogPostByPath(basePath) : null

  if (blog) {
    return {
      title: blog.title,
      description: blog.description,
      keywords: [...blog.tags, ...DEFAULT_KEYWORDS],
      alternates: {
        canonical: pathname,
      },
      openGraph: {
        type: 'article',
        title: blog.title,
        description: blog.description,
        url: `${SITE_URL}${pathname}`,
        publishedTime: blog.publishedAt,
        modifiedTime: blog.updatedAt,
        images: [getCatalogPageImage(10)],
      },
    }
  }

  const leadProduct = getMatchedProducts(basePath, 1)[0]

  if (routeKind === 'product' && leadProduct) {
    return {
      title: `${leadProduct.name} | Product Information`,
      description: buildProductIntro(leadProduct),
      keywords: [...DEFAULT_KEYWORDS, leadProduct.name.toLowerCase(), leadProduct.category.toLowerCase()],
      alternates: {
        canonical: pathname,
      },
      openGraph: {
        type: 'website',
        title: `${leadProduct.name} | ${SITE_NAME}`,
        description: buildProductIntro(leadProduct),
        url: `${SITE_URL}${pathname}`,
        images: [getCatalogPageImage(leadProduct.catalogPage)],
      },
    }
  }

  const routeCopy = getRouteCopy(basePath, routeKind)
  return {
    title: `${routeCopy.title} | ${SITE_NAME}`,
    description: routeCopy.description,
    keywords: DEFAULT_KEYWORDS,
    alternates: {
      canonical: pathname,
    },
  }
}

export default async function RoutePage({ params }: CatchAllPageProps) {
  const { slug } = await params
  const pathname = normalizePath(pathFromSlug(slug))

  if (!isJyinsMirroredPath(pathname)) {
    notFound()
  }

  const { locale, basePath } = stripLocalePrefix(pathname)
  const routeKind = getRouteKind(basePath)
  const blog = routeKind === 'article' ? getBlogPostByPath(basePath) : null
  const matchedProducts = getMatchedProducts(basePath, 9)
  const leadProduct = matchedProducts[0] ?? CATALOG_PRODUCTS[0]
  const routeCopy = !blog && routeKind !== 'product' ? getRouteCopy(basePath, routeKind) : null
  const heroBadge = blog ? blog.category : routeKind === 'product' ? 'Product Detail' : routeCopy?.badge ?? 'Information'
  const heroTitle = blog ? blog.title : routeKind === 'product' ? leadProduct.name : routeCopy?.title ?? 'Information Page'
  const heroDescription = blog
    ? blog.heroSummary
    : routeKind === 'product'
      ? buildProductIntro(leadProduct)
      : routeCopy?.description ??
        'Review product information, technical references, and inquiry options on this page.'

  const primaryCtaHref = blog
    ? localizedPath(locale, '/inquire')
    : routeKind === 'product'
      ? localizedPath(locale, `/inquire?product=${encodeURIComponent(leadProduct.name)}`)
      : getSafeHref(locale, routeCopy?.primaryCtaHref ?? '/inquire')
  const primaryCtaLabel = blog
    ? 'Request a Quote'
    : routeKind === 'product'
      ? 'Request Quote for This Model'
      : routeCopy?.primaryCtaLabel ?? 'Request a Quote'
  const secondaryCtaHref = blog
    ? getCatalogPdfPageUrl(leadProduct.catalogPage)
    : routeKind === 'product'
      ? getCatalogPdfPageUrl(leadProduct.catalogPage)
      : getSafeHref(locale, routeCopy?.secondaryCtaHref ?? '/pdf-download')
  const secondaryCtaLabel = blog
    ? `Open Catalog Page ${leadProduct.catalogPage}`
    : routeKind === 'product'
      ? `Open Catalog Page ${leadProduct.catalogPage}`
      : routeCopy?.secondaryCtaLabel ?? 'Download Catalog'
  const productSpecs = leadProduct.highlights
    .map((item) => ({
      label: item.label,
      value: normalizeHighlightValue(item.value),
    }))
    .filter((item) => item.value.length > 0)
    .slice(0, 14)
  const candidateRelatedProducts = matchedProducts.filter((product) => product.id !== leadProduct.id).slice(0, 6)
  const relatedProducts = candidateRelatedProducts.length > 0 ? candidateRelatedProducts : matchedProducts.slice(0, 6)
  const productFaq = [
    {
      question: `How can I confirm whether ${leadProduct.name} fits my application?`,
      answer:
        'Please provide your load profile, input voltage, output voltage, and expected runtime. We will verify model compatibility and suggest the best-fit option.',
    },
    {
      question: 'Can I get OEM/ODM customization for this product?',
      answer:
        'Yes. We support model customization, private labeling, and packaging options based on your project and market requirements.',
    },
    {
      question: 'Where can I check full technical details?',
      answer: `Use the catalog link for Page ${leadProduct.catalogPage}. It includes the detailed specification table for this model.`,
    },
  ] as const

  const jsonLd = blog
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            headline: blog.title,
            description: blog.description,
            datePublished: blog.publishedAt,
            dateModified: blog.updatedAt,
            inLanguage: 'en',
            keywords: blog.tags.join(', '),
            mainEntityOfPage: `${SITE_URL}${pathname}`,
          },
          {
            '@type': 'FAQPage',
            mainEntity: blog.faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
        ],
      }
    : {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            name: heroTitle,
            url: `${SITE_URL}${pathname}`,
            description: heroDescription,
            inLanguage: 'en',
          },
          {
            '@type': 'Product',
            name: leadProduct.name,
            category: leadProduct.category,
            sku: leadProduct.id,
            image: `${SITE_URL}${getCatalogPageImage(leadProduct.catalogPage)}`,
            url: `${SITE_URL}${pathname}`,
            description: buildProductIntro(leadProduct),
            additionalProperty: leadProduct.highlights.slice(0, 10).map((item) => ({
              '@type': 'PropertyValue',
              name: item.label,
              value: normalizeHighlightValue(item.value),
            })),
            brand: {
              '@type': 'Brand',
              name: SITE_NAME,
            },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: `${SITE_URL}${pathname}`,
            },
          },
        ],
      }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <header className="border-b border-slate-200 bg-white">
        <section className="border-b border-slate-200 bg-slate-950 text-slate-100">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
            <p>Industrial Product and Application Center</p>
            <p>
              {CATALOG_PRODUCTS.length} products | {BLOG_POSTS.length} blog posts
            </p>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-display text-lg font-bold text-slate-950">
            {SITE_NAME}
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href={localizedPath(locale, '/product/3-stages-12v-60a-battery-chargers-for-lithium-lead-acid-lfp-battery')}>Products</Link>
            <Link href={localizedPath(locale, '/application')}>Applications</Link>
            <Link href={localizedPath(locale, '/odm-oem')}>OEM/ODM</Link>
            <Link href={localizedPath(locale, '/news/inverter-industry-trends-in-2025.html')}>Blog</Link>
          </nav>
          <Link
            href={localizedPath(locale, '/inquire')}
            className="inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            Request a Quote
          </Link>
        </section>
      </header>

      {blog ? (
        <>
          <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8">
              <article>
                <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
                  {blog.category}
                </p>
                <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                  {blog.title}
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-600">{blog.heroSummary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span>Published {blog.publishedAt}</span>
                  <span>Updated {blog.updatedAt}</span>
                  <span>{blog.readingMinutes} min read</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <Image
                  src={getCatalogPageImage(leadProduct.catalogPage)}
                  alt={`${leadProduct.name} catalog page preview`}
                  width={900}
                  height={1200}
                  className="h-auto w-full rounded-lg border border-slate-200"
                />
                <Link
                  href={getCatalogPdfPageUrl(leadProduct.catalogPage)}
                  target="_blank"
                  className="mt-4 inline-flex rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
                >
                  Open Catalog Page {leadProduct.catalogPage}
                </Link>
              </article>
            </div>
          </section>

          <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            <article className="space-y-9">
              {blog.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-slate-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </article>
          </section>

          <section className="border-y border-slate-200 bg-white">
            <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">FAQ</h2>
              <div className="mt-5 space-y-3">
                {blog.faq.map((item) => (
                  <details key={item.question} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.question}</summary>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
              <article>
                <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
                  {heroBadge}
                </p>
                <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">{heroTitle}</h1>
                <p className="mt-4 text-base leading-7 text-slate-600">{heroDescription}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={primaryCtaHref}
                    className="inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700"
                  >
                    {primaryCtaLabel}
                  </Link>
                  <Link
                    href={secondaryCtaHref}
                    target={secondaryCtaHref.startsWith('/catalog/') ? '_blank' : undefined}
                    className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                  >
                    {secondaryCtaLabel}
                  </Link>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <Image
                  src={getCatalogPageImage(leadProduct.catalogPage)}
                  alt={`${leadProduct.name} product image from catalog`}
                  width={900}
                  height={1200}
                  className="h-auto w-full rounded-lg border border-slate-200"
                />
              </article>
            </div>
          </section>

          {routeKind === 'product' && (
            <>
              <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Technical Parameters</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Check the core electrical parameters below. If you need full test details, use the catalog-page link for complete data.
                    </p>
                    <div className="mt-5 overflow-x-auto">
                      <table className="min-w-full border-collapse text-sm">
                        <tbody>
                          {productSpecs.map((spec) => (
                            <tr key={spec.label + spec.value} className="border-b border-slate-200 last:border-b-0">
                              <th className="w-40 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-800">{spec.label}</th>
                              <td className="px-3 py-2 text-slate-700">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </article>

                  <article className="space-y-5">
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                      <h2 className="text-xl font-bold tracking-tight text-slate-950">Model Options</h2>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {leadProduct.models.length > 0 ? (
                          leadProduct.models.slice(0, 12).map((model) => (
                            <span key={model} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                              {model}
                            </span>
                          ))
                        ) : (
                          <span className="text-sm text-slate-600">Model options available on request.</span>
                        )}
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                      <h2 className="text-xl font-bold tracking-tight text-slate-950">Typical Applications</h2>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                        <li>Mobile power and vehicle electrical systems</li>
                        <li>Off-grid backup and emergency power scenarios</li>
                        <li>Field operation, service vehicles, and outdoor deployment</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                      <h2 className="text-xl font-bold tracking-tight text-slate-950">Need a Fast Quotation?</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Send your required quantity and application details. We will suggest the right model and provide a quotation quickly.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                          href={localizedPath(locale, `/inquire?product=${encodeURIComponent(leadProduct.name)}`)}
                          className="inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
                        >
                          Request Quote for This Product
                        </Link>
                        <Link
                          href={getCatalogPdfPageUrl(leadProduct.catalogPage)}
                          target="_blank"
                          className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                        >
                          Open Full Spec PDF
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              </section>

              <section className="border-y border-slate-200 bg-white">
                <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Product FAQ</h2>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {productFaq.map((item) => (
                      <details key={item.question} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.question}</summary>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            {basePath === '/inquire' && (
              <article className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm" id="inquiry-form">
                <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Tell Us Your Requirement</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Include power range, voltage, quantity, and target market. We will return recommended models and a quotation plan.
                </p>
                <form className="mt-5 grid gap-4 md:grid-cols-2" action="#" method="post">
                  <div>
                    <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-800">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-800">
                      Work Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="requirements" className="mb-1 block text-sm font-medium text-slate-800">
                      Requirement Details
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={5}
                      className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                      placeholder="Power range, input voltage, output voltage, quantity, lead-time expectation"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </article>
            )}

            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">
              {routeKind === 'product' ? 'Related Models You May Also Need' : 'Recommended Products'}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {(routeKind === 'product' ? relatedProducts : matchedProducts).map((product) => (
                <article key={product.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <Image
                    src={getCatalogPageImage(product.catalogPage)}
                    alt={`${product.name} catalog image`}
                    width={560}
                    height={720}
                    className="h-44 w-full rounded-md border border-slate-200 object-cover"
                  />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Catalog Page {product.catalogPage}</p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900">{product.name}</h3>
                  <p className="mt-1 text-xs text-slate-600">{product.category}</p>
                  <div className="mt-3 space-y-1.5">
                    {product.highlights.slice(0, 4).map((item) => (
                      <p key={item.label + item.value} className="text-sm leading-6 text-slate-700">
                        <span className="font-semibold text-slate-900">{item.label}:</span> {normalizeHighlightValue(item.value)}
                      </p>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                    <Link href={getCatalogPdfPageUrl(product.catalogPage)} target="_blank" className="text-orange-700 hover:text-orange-800">
                      View PDF Page
                    </Link>
                    <Link href={getProductRoutePath(product)} className="text-slate-700 hover:text-slate-900">
                      Open Product Page
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {routeKind === 'catalog' ? (
            <section className="border-y border-slate-200 bg-white">
              <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Application Category Coverage</h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {CATALOG_CATEGORIES.map((category) => {
                    const items = CATALOG_PRODUCTS.filter((product) => product.category === category)
                    const sample = items[0]
                    if (!sample) return null

                    return (
                      <article key={category} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <h3 className="text-lg font-semibold text-slate-900">{category}</h3>
                        <p className="mt-1 text-sm text-slate-600">{items.length} products mapped for this application cluster.</p>
                        <Link
                          href={getCatalogPdfPageUrl(sample.catalogPage)}
                          target="_blank"
                          className="mt-3 inline-block text-sm font-semibold text-orange-700 hover:text-orange-800"
                        >
                          Review Page {sample.catalogPage}
                        </Link>
                      </article>
                    )
                  })}
                </div>
              </div>
            </section>
          ) : (
            <section className="border-y border-slate-200 bg-white">
              <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Customer Support Highlights</h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    'Model Selection Support',
                    'Technical Documentation',
                    'OEM/ODM Service',
                    'After-Sales Assistance',
                  ].map((item) => (
                    <article key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Get clear guidance, visible technical details, and direct next actions to complete your purchase decision with confidence.
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">Language Route Matrix</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {JYINS_LOCALES.map((lang) => {
              const href = buildLocalizedPath(basePath, lang)
              const active = locale === lang
              return (
                <Link
                  key={lang}
                  href={href}
                  className={`rounded-md border px-3 py-2 text-center text-sm font-medium transition ${
                    active
                      ? 'border-orange-300 bg-orange-50 text-orange-700'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {lang.toUpperCase()}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold">Need Help Choosing a Model?</h2>
          <p className="mt-2 text-sm text-slate-300">
            Send your power requirement, voltage platform, and target quantity. We will recommend suitable models and provide a fast quotation.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={localizedPath(locale, '/inquire')}
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Request a Quote
            </Link>
            <Link
              href={CATALOG_PDF_PATH}
              target="_blank"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
            >
              Download Catalog
            </Link>
          </div>
        </section>
      </footer>
    </main>
  )
}
