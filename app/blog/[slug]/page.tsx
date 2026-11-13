import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import OptimizedImage from '@/components/OptimizedImage'
import { absoluteOptimizedSrc, rewriteContentImages } from '@/lib/optimized-image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import RelatedResources from '@/components/RelatedResources'
import { BLOG_DETAIL_CONTENT } from '@/lib/blog-detail-content'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { getRelatedBlogPosts, getRelatedProductsForBlog } from '@/lib/internal-links'
import { absoluteUrl, jsonLdScript, truncateSeoText } from '@/lib/seo'
import { getSeoOverride } from '@/lib/seo-overrides'
import { DEFAULT_KEYWORDS, SITE_LOGO, SITE_NAME } from '@/lib/site-config'
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

  const override = getSeoOverride(`/blog/${post.slug}`)
  const title = override?.title ?? truncateSeoText(detail?.metaTitle || post.title, 57)
  const description = override?.description ?? (detail?.description || post.description)
  // An explicit override is the full <title>; generated titles get the site-name template.
  // Open Graph and Twitter use the same full title as the rendered <title>.
  const fullTitle = override?.title ? title : `${title} | ${SITE_NAME}`

  return {
    title: override?.title ? { absolute: title } : title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...post.tags],
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [absoluteUrl('/about')],
      tags: [...post.tags],
      images: [
        {
          url: absoluteOptimizedSrc(post.image),
          width: 1200,
          height: 630,
          alt: detail?.title || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [absoluteOptimizedSrc(post.image)],
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

  const ceRohsOnly = detail.ctaVariant === 'ce-rohs'
  const relatedPosts = getRelatedBlogPosts(post.slug)
  // EB2M posts: skip the featured-product fallback (unrelated PV / aerosol items) and link the 22mm solution page instead.
  const featuredProducts = ceRohsOnly ? [] : getRelatedProductsForBlog(post.tags)
  const productCategoryHref = post.tags.includes('PV Combiner Box')
    ? '/categories/pv-combiner-box'
    : post.tags.some((tag) => tag.toLowerCase().includes('aerosol'))
      ? '/categories/aerosol-fire-extinguisher'
      : '/products'

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: detail.title,
    description: detail.description,
    image: [absoluteOptimizedSrc(post.image)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: detail.author || SITE_NAME,
      url: absoluteUrl('/about'),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/'),
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(SITE_LOGO),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
    keywords: post.tags.join(', '),
    articleSection: post.tags[0],
    wordCount: detail.wordCount,
    inLanguage: 'en-US',
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(blogJsonLd),
        }}
      />
      {/* BreadcrumbList JSON-LD is emitted by <Breadcrumbs> below. */}

      <section className="border-b border-gray-100 bg-gray-50 py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: detail.title, path: `/blog/${post.slug}` },
            ]}
          />

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
              <OptimizedImage
                src={post.image}
                alt={detail.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            <div dangerouslySetInnerHTML={{ __html: rewriteContentImages(detail.articleHtml) }} />

            <div className="mt-10 rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
              {ceRohsOnly ? (
                <>
                  <h3 className="text-lg font-bold text-gray-900">Send Your Model List for a Quote</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 font-bold text-green-500">✓</span>
                      CE, RoHS and ISO 9001 documentation available on request
                    </li>
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link href="/contact" className="btn-primary inline-flex">
                      Request a Quote
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-600">Factory Direct · OEM Available</p>
                  <h3 className="mt-2 text-lg font-bold text-gray-900">Ready to Source? Get a Factory-Direct Quote.</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 font-bold text-green-500">✓</span>
                      Wholesale pricing with full CE &amp; RoHS documentation
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
                </>
              )}
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="relative h-36 w-full">
                  <OptimizedImage
                    src="/images/banner/about-bg.jpg"
                    alt="UPprocure factory"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {!ceRohsOnly && (
                    <span className="absolute bottom-3 left-4 text-sm font-bold tracking-wide text-white">Factory Direct</span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs leading-relaxed text-gray-500">
                    {ceRohsOnly
                      ? 'CE, RoHS and ISO 9001 documentation available on request'
                      : 'IEC-certified manufacturer of low-voltage electrical protection products. OEM & private label available.'}
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <div className="relative h-8 w-8">
                      <OptimizedImage src="/images/ce.png" alt="CE certified" variant="thumb" fill sizes="32px" className="object-contain" />
                    </div>
                    <div className="relative h-8 w-12">
                      <OptimizedImage src="/images/rohs.png" alt="RoHS compliant" variant="thumb" fill sizes="48px" className="object-contain" />
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

            </div>
          </aside>
        </div>
      </article>

      <RelatedResources
        products={featuredProducts}
        posts={relatedPosts}
        productHeading="Related products"
        postHeading="Related articles"
      />
      <div className="bg-slate-50 px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {ceRohsOnly ? (
            <Link
              href="/solutions/22mm-push-button-switch"
              className="block max-w-md rounded-xl border border-slate-200 bg-white p-4 hover:border-green-300"
            >
              <span className="text-sm font-semibold text-slate-900">Φ22 mm Push Buttons and Operators</span>
              <span className="mt-2 block text-xs leading-5 text-slate-600">
                Flush, mushroom, emergency-stop, key and selector operators in one EB2M series. Check the model tables, then send your list for a quote.
              </span>
              <span className="mt-3 block text-sm font-semibold text-green-700">View the 22mm Range</span>
            </Link>
          ) : (
            <Link href={productCategoryHref} className="text-sm font-semibold text-green-700 hover:text-green-800">
              Browse the related category
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
