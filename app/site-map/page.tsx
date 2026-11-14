import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'
import { absoluteUrl } from '@/lib/seo'
import { SOLUTIONS } from '@/lib/solutions'

export const metadata: Metadata = {
  title: 'Site Map',
  description: 'Browse all key pages, categories, product detail pages, and blog articles on this website.',
  alternates: {
    canonical: absoluteUrl('/site-map'),
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
  { href: '/solutions', label: 'Solutions' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
] as const

export default function SiteMapPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">Site Map</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Browse all {CATALOG_PRODUCTS.length} products, {FRAMEWORK_CATEGORIES.length} categories,
            {' '}{SOLUTIONS.length} application solutions, and {BLOG_POSTS.length} technical articles.
          </p>
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
            <h2 className="text-lg font-semibold text-slate-900">Application Solutions</h2>
            <div className="mt-4 grid gap-2 text-sm">
              {SOLUTIONS.map((solution) => (
                <Link key={solution.href} href={solution.href} className="text-green-700 hover:text-green-800">
                  {solution.title}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-100 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">All Products by Category</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FRAMEWORK_CATEGORIES.map((category) => (
              <article key={category.slug} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">
                  <Link href={`/categories/${category.slug}`} className="hover:text-green-700">
                    {category.title}
                  </Link>
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {CATALOG_PRODUCTS.filter((product) => product.categoryCode === category.slug).map((product) => (
                    <li key={product.slug}>
                      <Link href={`/products/${product.slug}`} className="text-green-700 hover:text-green-800">
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">All Technical Articles</h2>
          <ul className="mt-6 grid gap-4 text-sm md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <li key={post.slug}>
                <Link href={post.path} className="text-green-700 hover:text-green-800">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
