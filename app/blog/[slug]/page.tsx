import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
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
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = getBlogBySlug(slug)

  if (!post) {
    notFound()
  }

  const suggestedProducts = scoreProductsByText(`${post.title} ${post.description} ${post.heroSummary}`)

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
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="border-b border-gray-100 bg-gray-50 py-10">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{' '}
            /{' '}
            <Link href="/blog" className="hover:text-slate-700">
              Blog
            </Link>{' '}
            / <span className="text-slate-600">Article</span>
          </p>

          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{post.heroSummary}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-white px-2.5 py-1">Published {post.publishedAt}</span>
            <span className="rounded-full bg-white px-2.5 py-1">Updated {post.updatedAt}</span>
            <span className="rounded-full bg-white px-2.5 py-1">{post.readingMinutes} min read</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {post.sections.slice(0, 6).map((section) => (
            <article key={section.heading}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">{section.heading}</h2>
              {section.paragraphs.slice(0, 3).map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-slate-700">
                  {section.bullets.slice(0, 6).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">Placeholder FAQ Section</h2>
            <div className="mt-5 space-y-3">
              {post.faq.map((item) => (
                <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.question}</summary>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </article>

          {suggestedProducts.length > 0 ? (
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Placeholder Related Products Block</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Replace this line with your own article-to-product transition copy.</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {suggestedProducts.map((product) => (
                  <div key={product.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">{product.category}</p>
                    <Link href={`/products/${product.slug}`} className="mt-3 inline-block text-sm font-semibold text-green-700 hover:text-green-800">
                      Placeholder Product Link
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          ) : null}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <article>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Placeholder Article CTA</h2>
            <p className="mt-2 text-sm text-slate-600">Replace this line with your own lead-generation copy.</p>
          </article>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
            Placeholder CTA Button
          </Link>
        </div>
      </section>
    </main>
  )
}
