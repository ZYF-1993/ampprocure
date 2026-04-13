import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { getCatalogPageImage } from '@/lib/catalog-utils'
import { DEFAULT_KEYWORDS, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Placeholder blog listing description. Replace with your content strategy summary.',
  keywords: [...DEFAULT_KEYWORDS, 'placeholder blog keyword'],
  alternates: {
    canonical: '/blog',
  },
}

const posts = [...BLOG_POSTS].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))

const blogListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Placeholder Blog',
  url: `${SITE_URL}/blog`,
  blogPost: posts.slice(0, 20).map((post) => ({
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
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{' '}
            / <span className="text-slate-600">Blog</span>
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">Placeholder Blog Listing Title</h1>
          <p className="mt-3 max-w-3xl text-xl leading-8 text-slate-600">Placeholder blog intro. Replace with your own editorial direction and keyword clusters.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <article key={post.slug} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <Image
                  src={getCatalogPageImage(30 + (index % 15))}
                  alt={`${post.title} placeholder cover image`}
                  width={780}
                  height={520}
                  className="h-48 w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{post.category}</p>
                  <h2 className="mt-2 text-xl font-semibold leading-8 text-slate-900">{post.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{post.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800">
                    Placeholder Read Link
                    <span className="ml-2">-&gt;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <article>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Placeholder Blog CTA Headline</h2>
            <p className="mt-2 text-sm text-slate-600">Replace this line with your own blog-to-product conversion message.</p>
          </article>
          <Link href="/products" className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
            Placeholder CTA Button
          </Link>
        </div>
      </section>
    </main>
  )
}
