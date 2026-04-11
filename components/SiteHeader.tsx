import Link from 'next/link'

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-slate-950">
          AmpProcure Power
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
        >
          Request a Quote
        </Link>
      </div>

      <nav aria-label="Mobile navigation" className="border-t border-slate-200 bg-white md:hidden">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 overflow-x-auto px-4 py-2 text-sm font-medium text-slate-700 sm:px-6 lg:px-8">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
