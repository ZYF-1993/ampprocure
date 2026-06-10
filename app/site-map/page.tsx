import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'

export const metadata: Metadata = {
  title: 'Site Map',
  description: 'Browse all key pages, categories, product detail pages, and blog articles on this website.',
  alternates: {
    canonical: '/site-map',
  },
  robots: {
    index: false,
    follow: true,
  },
}

const corePages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/thank-you', label: 'Thank You' },
] as const

export default function SiteMapPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">Site Map</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">Access every important route for product discovery, technical reading, and quotation conversion.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Core Pages</h2>
            <div className="mt-4 grid gap-2 text-sm">
              {corePages.map((page) => (
                <Link key={page.href} href={page.href} className="text-green-700 hover:text-green-800">
                  {page.label}
                </Link>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Category Pages</h2>
            <div className="mt-4 grid gap-2 text-sm">
              {FRAMEWORK_CATEGORIES.map((category) => (
                <Link key={category.slug} href={`/categories/${category.slug}`} className="text-green-700 hover:text-green-800">
                  {category.title}
                </Link>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Important Detail Pages</h2>
            <div className="mt-4 grid gap-2 text-sm">
              {CATALOG_PRODUCTS.slice(0, 12).map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="text-green-700 hover:text-green-800">
                  {product.name}
                </Link>
              ))}
              {BLOG_POSTS.slice(0, 8).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="text-green-700 hover:text-green-800">
                  {post.title}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
