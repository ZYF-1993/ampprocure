'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { searchSiteContent } from '@/lib/site-search'

const TYPE_BADGE_STYLE: Record<string, string> = {
  Product: 'bg-emerald-50 text-emerald-700',
  Category: 'bg-cyan-50 text-cyan-700',
  Blog: 'bg-amber-50 text-amber-700',
  Page: 'bg-slate-100 text-slate-700',
}

export default function SearchClient() {
  const params = useSearchParams()
  const rawKeyword = (params.get('q') ?? '').trim()
  const keyword = rawKeyword.replace(/\s+/g, ' ')
  const results = keyword ? searchSiteContent(keyword) : []

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>{' '}
            / <span className="text-slate-600">Search</span>
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Site Search</h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
            Search product models, category pages, technical blog posts, and key B2B conversion pages from one entry point.
          </p>

          <form action="/search" method="get" className="mt-8 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_auto]">
            <label htmlFor="site-search-input" className="sr-only">Search keyword</label>
            <input
              id="site-search-input"
              name="q"
              defaultValue={keyword}
              placeholder="Search product name, category, model, or blog topic..."
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Results</h2>
            <p className="mt-2 text-sm text-slate-600">
              {keyword
                ? `Keyword: "${keyword}" - ${results.length} matched items`
                : 'Enter a keyword to search across your website.'}
            </p>
          </article>

          {keyword && results.length > 0 ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {results.map((result) => (
                <article key={result.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${TYPE_BADGE_STYLE[result.type] ?? TYPE_BADGE_STYLE.Page}`}>
                    {result.type}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold leading-8 text-slate-900">{result.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{result.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {result.tags.slice(0, 3).map((tag) => (
                      <span key={`${result.id}-${tag}`} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={result.href} className="mt-4 inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800">
                    Open Result <span className="ml-2">-&gt;</span>
                  </Link>
                </article>
              ))}
            </div>
          ) : null}

          {keyword && results.length === 0 ? (
            <article className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <h3 className="text-2xl font-semibold text-slate-900">No direct match found</h3>
              <p className="mt-2 text-sm text-slate-600">Try broader terms like product category, model keyword, or application scenario.</p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <Link href="/products" className="inline-flex items-center justify-center rounded-md bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800">
                  Browse Products
                </Link>
                <Link href="/blog" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  Read Blog
                </Link>
              </div>
            </article>
          ) : null}
        </div>
      </section>
    </main>
  )
}
