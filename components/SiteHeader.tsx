'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'

const MAIN_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
] as const

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
    </svg>
  )
}

export default function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false)

  const isProductsRoute = pathname.startsWith('/products') || pathname.startsWith('/categories')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white transition-shadow duration-200">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Go to homepage">
            <span className="font-display text-2xl font-bold italic tracking-tight text-emerald-600">YOUR BRAND</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <Link
              href="/"
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                pathname === '/' ? 'font-semibold text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              Home
            </Link>

            <div className="relative" onMouseEnter={() => setDesktopProductsOpen(true)} onMouseLeave={() => setDesktopProductsOpen(false)}>
              <button
                type="button"
                aria-expanded={desktopProductsOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isProductsRoute ? 'font-semibold text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Product
                <Chevron open={desktopProductsOpen} />
              </button>

              <div
                className={`absolute left-1/2 top-full z-50 mt-2 w-[360px] -translate-x-1/2 rounded-xl border border-gray-100 bg-white p-3 shadow-xl transition ${
                  desktopProductsOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              >
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/products"
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-green-700 hover:bg-green-50"
                    >
                      <span>All Products</span>
                      <span className="text-xs text-gray-400">{CATALOG_PRODUCT_COUNT}</span>
                    </Link>
                  </li>
                  {FRAMEWORK_CATEGORIES.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/categories/${category.slug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-green-700"
                      >
                        <span>{category.title}</span>
                        <span className="text-xs text-gray-400">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {MAIN_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href ? 'font-semibold text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-gray-100 transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'max-h-[640px]' : 'max-h-0'}`}>
        <nav className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8" aria-label="Mobile navigation">
          <ul className="space-y-0.5">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === '/' ? 'bg-green-50 font-semibold text-green-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isProductsRoute ? 'bg-green-50 font-semibold text-green-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Product
                <Chevron open={mobileProductsOpen} />
              </button>

              <div className={`overflow-hidden transition-all duration-200 ${mobileProductsOpen ? 'max-h-[520px]' : 'max-h-0'}`}>
                <ul className="mt-1 ml-4 space-y-0.5 border-l-2 border-gray-100 pl-4">
                  <li>
                    <Link
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex rounded-lg px-3 py-2 text-sm font-semibold text-green-700 hover:bg-green-50"
                    >
                      All Products
                    </Link>
                  </li>
                  {FRAMEWORK_CATEGORIES.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/categories/${category.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-green-700"
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {MAIN_LINKS.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === link.href ? 'bg-green-50 font-semibold text-green-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
