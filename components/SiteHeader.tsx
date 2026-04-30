'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const MAIN_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
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
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false)

  const isProductsRoute = pathname.startsWith('/products') || pathname.startsWith('/categories')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white transition-shadow duration-200">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[60px] items-center justify-between lg:h-[68px] xl:h-[72px]">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Go to homepage">
            <Image src="/branding/site-logo.png" alt="Site logo" width={340} height={92} priority className="h-7 w-auto sm:h-8 lg:h-[34px] xl:h-9" />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:ml-10 lg:flex xl:ml-14 xl:gap-1" aria-label="Main navigation">
            <Link
              href="/"
              className={`whitespace-nowrap rounded-md px-3 py-2 text-[13px] font-medium transition-colors xl:px-4 xl:text-[14px] ${
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
                  className={`whitespace-nowrap rounded-l-md px-3 py-2 text-[13px] font-medium transition-colors xl:px-4 xl:text-[14px] ${
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
                className={`absolute left-1/2 top-full z-50 w-[min(940px,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition-all duration-200 ${
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
                            <span className="product-mega-item-label">
                              <span className="product-mega-icon" aria-hidden="true">
                                <svg viewBox="0 0 6 6" fill="currentColor">
                                  <circle cx="3" cy="3" r="3" />
                                </svg>
                              </span>
                              <span>{category.title}</span>
                            </span>
                            <span className="product-mega-item-count">{category.count}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {MAIN_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-md px-3 py-2 text-[13px] font-medium transition-colors xl:px-4 xl:text-[14px] ${
                  pathname === link.href ? 'font-semibold text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } ${link.href === '/contact' ? 'mr-5 xl:mr-8' : ''}`}
              >
                <span data-i18n={`header.${link.label === 'Contact Us' ? 'contactUs' : link.label.toLowerCase()}`}>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center justify-end gap-2 lg:ml-14 lg:flex xl:ml-16 xl:gap-2.5">
            <Link
              href="/search"
              aria-label="Search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-50 xl:hidden"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </Link>
            <form action="/search" method="get" className="hidden items-center gap-0 xl:flex">
              <label htmlFor="desktop-header-search" className="sr-only">
                Search in site
              </label>
              <input
                id="desktop-header-search"
                name="q"
                placeholder="Search in site..."
                data-i18n-placeholder="header.searchPlaceholder"
                className="h-10 w-36 rounded-l-md border border-r-0 border-slate-300 px-3 text-sm text-slate-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 2xl:w-40"
              />
              <button
                type="submit"
                aria-label="Search"
                className="inline-flex h-10 w-10 items-center justify-center rounded-r-md border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </button>
            </form>
            <div>
              <LanguageSwitcher />
            </div>
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg bg-green-700 px-4 text-[12px] font-semibold text-white transition hover:bg-green-800 xl:h-10 xl:px-5 xl:text-[13px]"
            >
              <span data-i18n="header.contactUs">Contact Us</span>
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
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
        <nav className="mx-auto max-h-[calc(100vh-64px)] w-full max-w-7xl overflow-y-auto px-4 py-4 sm:px-6 lg:px-8" aria-label="Mobile navigation">
          <ul className="space-y-0.5">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
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
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
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
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === link.href ? 'bg-green-50 font-semibold text-green-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span data-i18n={`header.${link.label === 'Contact Us' ? 'contactUs' : link.label.toLowerCase()}`}>{link.label}</span>
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <form action="/search" method="get" className="space-y-2">
                <label htmlFor="mobile-header-search" className="block text-xs font-semibold uppercase tracking-wide text-slate-500" data-i18n="header.mobileSearchLabel">
                  Search In Site
                </label>
                <div className="flex gap-2">
                  <input
                    id="mobile-header-search"
                    name="q"
                    placeholder="Keyword..."
                    data-i18n-placeholder="header.mobileSearchPlaceholder"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
                  >
                    <span data-i18n="header.mobileSearchGo">Go</span>
                  </button>
                </div>
              </form>
            </li>
            <li className="pt-2">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
