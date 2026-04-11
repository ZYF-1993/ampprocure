import Link from 'next/link'
import { CATALOG_CATEGORIES, CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <section>
          <h2 className="font-display text-lg font-bold">AmpProcure Power</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            B2B product platform for inverters, chargers, portable power stations, and inverter boards with quote-ready technical data.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Quick Links</h2>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
            <Link href="/products" className="transition hover:text-white">
              Products
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Legal</h2>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition hover:text-white">
              Terms of Service
            </Link>
            <Link href="/thank-you" className="transition hover:text-white">
              Thank You
            </Link>
          </div>
        </section>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            {CATALOG_PRODUCT_COUNT} products across {CATALOG_CATEGORIES.length} categories.
          </p>
          <p>Copyright {new Date().getFullYear()} AmpProcure Power. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
