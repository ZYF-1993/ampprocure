import Link from 'next/link'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/seo'

type Crumb = {
  name: string
  href?: string
  path?: string
}

export default function Breadcrumbs({ items, tone = 'default' }: { items: readonly Crumb[]; tone?: 'default' | 'inverse' }) {
  const jsonLd = breadcrumbJsonLd(
    items.map((item) => ({
      name: item.name,
      path: item.path ?? item.href ?? '/',
    })),
  )

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${tone === 'inverse' ? 'text-slate-200' : 'text-gray-600'}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last || !item.href ? (
                <span className={tone === 'inverse' ? 'text-white' : 'text-gray-800'} aria-current={last ? 'page' : undefined}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className={tone === 'inverse' ? 'hover:text-white' : 'hover:text-green-700'}>
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
