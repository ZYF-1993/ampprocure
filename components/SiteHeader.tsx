'use client'

import { useState } from 'react'
import Image from 'next/image'
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

const SOLUTION_LINKS = [
  { href: '/solutions/aerosol-fire-extinguisher', label: 'Aerosol Fire Extinguisher Solution' },
] as const

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
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
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false)
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false)

  const isProductsRoute = pathname.startsWith('/products') || pathname.startsWith('/categories')
  const isSolutionsRoute = pathname.startsWith('/solutions')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white transition-shadow duration-200">
      <div className="container">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Go to homepage">
            <Image src="/branding/site-logo.png" alt="Site logo" width={340} height={92} priority className="h-8 w-auto object-contain lg:h-9" />
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Main navigation">
            <Link
              href="/"
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                pathname === '/' ? 'font-semibold text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span data-i18n="header.home">Home</span>
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDesktopProductsOpen(true)}
              onMouseLeave={() => setDesktopProductsOpen(false)}
              onFocusCapture={() => setDesktopProductsOpen(true)}
              onBlurCapture={(event) => {
                const nextTarget = event.relatedTarget as Node | null
                if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
                  setDesktopProductsOpen(false)
                }
              }}
            >
              <div className="inline-flex items-center rounded-md">
                <Link
                  href="/products"
                  className={`rounded-l-md px-4 py-2 text-sm font-medium transition-colors ${
                    isProductsRoute ? 'font-semibold text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span data-i18n="header.product">Product</span>
                </Link>
                <button
                  type="button"
                  aria-expanded={desktopProductsOpen}
                  aria-haspopup="true"
                  aria-label="Toggle product menu"
                  onClick={() => setDesktopProductsOpen((prev) => !prev)}
                  className={`rounded-r-md px-2 py-2 transition-colors ${
                    isProductsRoute ? 'text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Chevron open={desktopProductsOpen} />
                </button>
              </div>

              <div
                className={`absolute left-1/2 top-full z-50 w-[min(1000px,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  desktopProductsOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0 pointer-events-none'
                }`}
              >
                <div className="product-mega-panel">
                  <div className="product-mega-highlight">
                    <Link
                      href="/products"
                      onClick={() => setDesktopProductsOpen(false)}
                      className="product-mega-all-link"
                    >
                      <span className="product-mega-all-copy">
                        <span className="product-mega-all-title" data-i18n="header.allProducts">
                          All Products
                        </span>
                        <span className="product-mega-all-subtitle">Browse The Complete Catalog</span>
                      </span>
                      <span className="product-mega-count-badge">{CATALOG_PRODUCT_COUNT}</span>
                    </Link>
                  </div>

                  <div className="product-mega-right-col">
                    <p className="product-mega-grid-header" data-i18n="header.categories">Browse Categories</p>
                    <ul className="product-mega-grid">
                      {FRAMEWORK_CATEGORIES.map((category) => (
                        <li key={category.slug}>
                          <Link href={`/categories/${category.slug}`} onClick={() => setDesktopProductsOpen(false)} className="product-mega-item">
                            <div className="product-mega-item-thumb">
                              <Image
                                src={`/images/categories/${category.slug}.png`}
                                alt={category.title}
                                width={100}
                                height={76}
                                className="h-[76px] w-auto object-contain"
                              />
                            </div>
                            <span className="product-mega-item-label">
                              <span>{category.title}</span>
                              <span className="product-mega-item-count">{category.count}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {MAIN_LINKS.slice(1, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href ? 'font-semibold text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span data-i18n={`header.${link.label === 'Contact Us' ? 'contactUs' : link.label.toLowerCase()}`}>{link.label}</span>
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setDesktopSolutionsOpen(true)}
              onMouseLeave={() => setDesktopSolutionsOpen(false)}
              onFocusCapture={() => setDesktopSolutionsOpen(true)}
              onBlurCapture={(event) => {
                const nextTarget = event.relatedTarget as Node | null
                if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
                  setDesktopSolutionsOpen(false)
                }
              }}
            >
              <button
                type="button"
                aria-expanded={desktopSolutionsOpen}
                aria-haspopup="true"
                onClick={() => setDesktopSolutionsOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isSolutionsRoute ? 'font-semibold text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span data-i18n="header.solutions">Solutions</span>
                <Chevron open={desktopSolutionsOpen} />
              </button>

              <div
                className={`absolute left-0 top-full z-50 w-72 pt-3 transition-all duration-200 ${
                  desktopSolutionsOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0 pointer-events-none'
                }`}
              >
                <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                  {SOLUTION_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDesktopSolutionsOpen(false)}
                      className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {MAIN_LINKS.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href ? 'font-semibold text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span data-i18n="header.contactUs">{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link href="/contact" className="btn-primary">
              <span data-i18n="header.contactUs">Contact Us</span>
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

      <div className={`overflow-hidden border-t border-gray-100 transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'max-h-[calc(100vh-64px)]' : 'max-h-0'}`}>
        <nav className="container max-h-[calc(100vh-64px)] overflow-y-auto py-4" aria-label="Mobile navigation">
          <ul className="space-y-0.5">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  pathname === '/' ? 'bg-green-50 font-semibold text-green-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span data-i18n="header.home">Home</span>
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  isProductsRoute ? 'bg-green-50 font-semibold text-green-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span data-i18n="header.product">Product</span>
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
                      <span data-i18n="header.allProducts">All Products</span>
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
              link.href === '/contact' ? null : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      pathname === link.href ? 'bg-green-50 font-semibold text-green-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span data-i18n={`header.${link.label.toLowerCase()}`}>{link.label}</span>
                  </Link>
                </li>
              )
            ))}
            <li>
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  isSolutionsRoute ? 'bg-green-50 font-semibold text-green-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span data-i18n="header.solutions">Solutions</span>
                <Chevron open={mobileSolutionsOpen} />
              </button>

              <div className={`overflow-hidden transition-all duration-200 ${mobileSolutionsOpen ? 'max-h-[180px]' : 'max-h-0'}`}>
                <ul className="mt-1 ml-4 space-y-0.5 border-l-2 border-gray-100 pl-4">
                  {SOLUTION_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {MAIN_LINKS.slice(3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    pathname === link.href ? 'bg-green-50 font-semibold text-green-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span data-i18n="header.contactUs">{link.label}</span>
                </Link>
              </li>
            ))}
            <li className="mt-4 border-t border-gray-100 pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full justify-center">
                <span data-i18n="header.contactUs">Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
