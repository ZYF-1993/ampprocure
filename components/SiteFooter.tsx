import Image from 'next/image'
import Link from 'next/link'
import { CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <section className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center" aria-label="Go to homepage">
              <Image src="/branding/site-logo.png" alt="Site logo" width={400} height={110} className="h-14 w-auto lg:h-16" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">Placeholder footer company description. Replace this paragraph with your own brand introduction.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Placeholder Badge 01', 'Placeholder Badge 02', 'Placeholder Badge 03'].map((badge) => (
                <span key={badge} className="rounded border border-gray-700 px-2 py-0.5 text-xs font-medium text-gray-400">
                  {badge}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-4 space-y-2.5">
              {FRAMEWORK_CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link href={`/categories/${category.slug}`} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/products', label: 'Products' },
                { href: '/blog', label: 'Blog' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-gray-400">[Placeholder Contact Label]</li>
              <li className="text-sm text-gray-400">
                <a href="mailto:placeholder@example.com" className="transition-colors hover:text-white">
                  placeholder@example.com
                </a>
              </li>
              <li className="text-sm text-gray-400">
                <a href="tel:+10000000000" className="transition-colors hover:text-white">
                  +1 000 000 0000
                </a>
              </li>
              <li className="text-sm text-gray-400">{CATALOG_PRODUCT_COUNT} placeholder products listed.</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-gray-500 transition-colors hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 transition-colors hover:text-gray-300">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
