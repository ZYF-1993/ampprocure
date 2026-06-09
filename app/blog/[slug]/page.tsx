import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_DETAIL_CONTENT } from '@/lib/blog-detail-content'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { DEFAULT_KEYWORDS, SITE_NAME, SITE_URL } from '@/lib/site-config'
import { getBlogBySlug } from '@/lib/site-content'

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`))
}

function formatShortDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`))
}

function scoreProductsByText(text: string) {
  const tokens = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter((token) => token.length >= 3)

  return [...CATALOG_PRODUCTS]
    .map((product) => {
      const bag = `${product.name} ${product.category} ${product.technicalSummary}`.toLowerCase()
      const score = tokens.reduce((sum, token) => (bag.includes(token) ? sum + 1 : sum), 0)
      return { product, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 1)
    .map((item) => item.product)
}

function getRelatedPosts(slug: string) {
  const posts = [...BLOG_POSTS].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
  const current = posts.findIndex((post) => post.slug === slug)
  const afterCurrent = current >= 0 ? posts.slice(current + 1) : []
  const beforeCurrent = current > 0 ? posts.slice(0, current) : []

  return [...afterCurrent, ...beforeCurrent].slice(0, 3)
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  const detail = BLOG_DETAIL_CONTENT[slug]

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested blog article does not exist.',
    }
  }

  return {
    title: detail?.metaTitle || post.title,
    description: detail?.description || post.description,
    keywords: [...DEFAULT_KEYWORDS, ...post.tags],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: detail?.metaTitle || post.title,
      description: detail?.description || post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      images: [
        {
          url: `${SITE_URL}${post.image}`,
          width: 1200,
          height: 630,
          alt: detail?.title || post.title,
        },
      ],
    },
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  const detail = BLOG_DETAIL_CONTENT[slug]

  if (!post || !detail) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug)
  const featuredProducts = scoreProductsByText(`${detail.title} ${detail.description} ${post.tags.join(' ')}`)
  const productCategoryHref = post.tags.includes('PV Combiner Box') ? '/categories/pv-combiner-box' : '/categories/aerosol-fire-extinguisher'

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: detail.title,
    description: detail.description,
    image: [`${SITE_URL}${post.image}`],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: detail.author || SITE_NAME,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.tags[0],
    wordCount: detail.wordCount,
    inLanguage: 'en-US',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: detail.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="border-b border-gray-100 bg-gray-50 py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-5 flex items-center gap-2 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">
              Blog
            </Link>
            <span>/</span>
            <span className="max-w-[220px] truncate text-gray-600">{detail.title}</span>
          </nav>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 max-w-full break-words text-pretty text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-[32px] 2xl:text-[34px]">
            {detail.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400 sm:gap-4">
            <span>{detail.author}</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
          <div className="min-w-0">
            <div className="relative mb-8 aspect-[1200/650] overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={post.image}
                alt={detail.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            <div dangerouslySetInnerHTML={{ __html: detail.articleHtml }} />

            <div className="mt-10 rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-600">Factory Direct · OEM Available</p>
              <h3 className="mt-2 text-lg font-bold text-gray-900">Ready to Source? Get a Factory-Direct Quote.</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 font-bold text-green-500">✓</span>
                  Wholesale pricing with full CE &amp; TUV documentation
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 font-bold text-green-500">✓</span>
                  OEM &amp; private label — custom spec, your brand
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 font-bold text-green-500">✓</span>
                  Samples, datasheets &amp; tech support on request
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn-primary inline-flex">
                  Request a Quote
                </Link>
                <span className="text-xs text-gray-400">Reply within 24 hours</span>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="relative h-36 w-full">
                  <Image
                    src="/images/banner/about-bg.jpg"
                    alt="UPPROCURE factory — IEC-certified electrical component manufacturer"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-sm font-bold tracking-wide text-white">Factory Direct</span>
                </div>
                <div className="p-4">
                  <p className="text-xs leading-relaxed text-gray-500">
                    IEC-certified manufacturer of low-voltage electrical protection products. OEM &amp; private label available.
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <div className="relative h-8 w-8">
                      <Image src="/images/ce.png" alt="CE certified" fill sizes="32px" className="object-contain" />
                    </div>
                    <div className="relative h-8 w-12">
                      <Image src="/images/TUV.png" alt="TUV certified" fill sizes="48px" className="object-contain" />
                    </div>
                    <div className="relative h-8 w-12">
                      <Image src="/images/rohs.png" alt="RoHS compliant" fill sizes="48px" className="object-contain" />
                    </div>
                  </div>
                  <Link href="/contact" className="btn-primary mt-4 inline-flex w-full justify-center py-2 text-xs">
                    Request a Quote
                  </Link>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">About This Article</h3>
                <dl className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-400">Author</dt>
                    <dd className="max-w-[140px] text-right font-medium text-gray-700">{detail.author}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-400">Published</dt>
                    <dd className="font-medium text-gray-700">{formatDate(post.publishedAt)}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-400">Reading time</dt>
                    <dd className="font-medium text-gray-700">{post.readingMinutes} min</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Related Articles</h3>
                <ul className="mt-4 space-y-4">
                  {relatedPosts.map((related) => (
                    <li key={related.slug}>
                      <Link href={`/blog/${related.slug}`} className="group">
                        <p className="text-sm font-medium leading-snug text-gray-800 transition-colors group-hover:text-green-700">
                          {BLOG_DETAIL_CONTENT[related.slug]?.title || related.title}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">{formatShortDate(related.publishedAt)}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Featured Products</h3>
                <ul className="mt-4 space-y-3">
                  {featuredProducts.map((product) => (
                    <li key={product.slug}>
                      <Link
                        href={`/products/${product.slug}`}
                        className="group flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-2.5 transition-colors hover:border-green-200 hover:bg-green-50"
                      >
                        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md bg-white">
                          <Image src={product.image} alt={product.name} fill sizes="56px" className="object-contain p-1" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="line-clamp-2 text-xs font-medium leading-snug text-gray-800 transition-colors group-hover:text-green-700">
                            {product.name}
                          </p>
                          <p className="mt-1 text-[11px] font-medium text-green-600">View Product →</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={productCategoryHref}
                  className="mt-3 inline-flex w-full justify-center rounded-lg border border-gray-200 py-2 text-xs font-medium text-gray-600 transition-colors hover:border-green-300 hover:text-green-700"
                >
                  View All Products →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
