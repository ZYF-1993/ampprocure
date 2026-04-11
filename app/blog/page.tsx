import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { getCatalogPageImage } from '@/lib/catalog-utils'
import { DEFAULT_KEYWORDS, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read B2B buying guides, technical selection tips, and sourcing playbooks for inverters, battery chargers, and portable power systems.',
  keywords: [...DEFAULT_KEYWORDS, 'inverter buying guide', 'B2B product sourcing blog', 'industrial power SEO content'],
  alternates: {
    canonical: '/blog',
  },
}

const sortedPosts = [...BLOG_POSTS].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))

const blogListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'AmpProcure Power Blog',
  url: `${SITE_URL}/blog`,
  blogPost: sortedPosts.slice(0, 20).map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
  })),
}

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section>
        <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">Industry Blog</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Customer-Focused B2B Knowledge Center</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
          Learn how to compare models, validate parameters, and reduce procurement risks with practical guides written for importers,
          distributors, and project integrators.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sortedPosts.map((post, index) => (
          <article key={post.slug} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={getCatalogPageImage(10 + (index % 12))}
              alt={`${post.title} cover image`}
              width={780}
              height={520}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{post.category}</p>
              <h2 className="mt-2 text-xl font-semibold leading-8 text-slate-900">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{post.description}</p>
              <p className="mt-3 text-xs text-slate-500">
                Published {post.publishedAt} | {post.readingMinutes} min read
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-orange-700 transition hover:text-orange-800">
                Read Full Article
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
