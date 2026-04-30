'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeaderSearch() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState('')

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const query = keyword.trim()
    if (!query) {
      router.push('/search')
      setOpen(false)
      return
    }

    router.push(`/search?q=${encodeURIComponent(query)}`)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Search website"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </button>

      <div
        className={`absolute right-0 top-full z-[70] mt-2 w-80 rounded-xl border border-slate-200 bg-white p-4 shadow-xl transition ${
          open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <form onSubmit={submitSearch} className="space-y-3">
          <label htmlFor="header-search-input" className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Search In Site
          </label>
          <input
            id="header-search-input"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Enter product, category, blog keyword..."
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}
