import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { getCatalogPageImage, getCatalogPdfPageUrl, normalizeHighlightValue } from '@/lib/catalog-utils'
import { DEFAULT_KEYWORDS, SITE_NAME, SITE_URL } from '@/lib/site-config'
import { getBlogBySlug } from '@/lib/site-content'

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>
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
    .slice(0, 3)
    .map((item) => item.product)
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogBySlug(slug)

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested blog article does not exist.',
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [...DEFAULT_KEYWORDS, ...post.tags],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [getCatalogPageImage(10)],
    },
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = getBlogBySlug(slug)

  if (!post) {
    notFound()
  }

  const suggestedProducts = scoreProductsByText(`${post.title} ${post.description}`)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: 'en',
        keywords: post.tags.join(', '),
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
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

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <article>
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">{post.category}</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{post.heroSummary}</p>
          <p className="mt-4 text-sm text-slate-500">
            Published {post.publishedAt} | Updated {post.updatedAt} | {post.readingMinutes} min read
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </article>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={getCatalogPageImage(14)}
            alt={`${post.title} article banner`}
            width={1200}
            height={820}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </article>
      </section>

      <section className="mx-auto mt-12 max-w-5xl space-y-10">
        {post.sections.map((section) => (
          <article key={section.heading}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">{section.heading}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.bullets && section.bullets.length > 0 ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-slate-700">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>

      <section className="mt-14 border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-0">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">FAQ</h2>
          <div className="mt-6 space-y-3">
            {post.faq.map((item) => (
              <details key={item.question} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.question}</summary>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Recommended Products</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {suggestedProducts.map((product) => (
            <article key={product.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{product.category}</p>
              <p className="mt-2 text-xs text-slate-500">Catalog Page {product.catalogPage}</p>
              <div className="mt-3 space-y-1.5 text-sm text-slate-700">
                {product.highlights.slice(0, 3).map((item) => (
                  <p key={item.label + item.value}>
                    <span className="font-semibold text-slate-900">{item.label}:</span> {normalizeHighlightValue(item.value)}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                <Link href={`/products/${product.slug}`} className="text-slate-700 hover:text-slate-900">
                  Product Detail
                </Link>
                <Link href={getCatalogPdfPageUrl(product.catalogPage)} target="_blank" className="text-orange-700 hover:text-orange-800">
                  PDF Page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
