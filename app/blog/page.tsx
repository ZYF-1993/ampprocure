import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_POSTS, BLOG_TAGS } from '@/lib/blog-posts'
import { DEFAULT_KEYWORDS, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technical articles, selection guides, and installation best practices from UPprocure engineers — covering circuit breakers, SPDs, ATS, PV systems, and more.',
  keywords: [...DEFAULT_KEYWORDS, ...BLOG_TAGS],
  alternates: {
    canonical: '/blog',
  },
}

const posts = [...BLOG_POSTS].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`))
}

const blogListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Technical Resources',
  url: `${SITE_URL}/blog`,
  blogPost: posts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}${post.image}`,
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
          <nav className="mb-4 flex items-center gap-2 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-600">Blog</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Technical Resources</h1>
          <p className="mt-3 max-w-2xl text-base text-gray-500">
            Selection guides, installation tips, and technical insights from the UPprocure engineering team.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {BLOG_TAGS.map((tag) => (
              <span key={tag} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                aria-label={post.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 line-clamp-2 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-700">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-gray-500">{post.description}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>{post.readingMinutes} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">Stay Updated with Technical Guides</h2>
          <p className="mt-2 text-sm text-gray-500">
            New articles on electrical protection, energy efficiency, and smart building technology every month.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Subscribe via Contact Form
          </Link>
        </div>
      </section>
    </main>
  )
}
