import type { Metadata } from 'next'
import { Suspense } from 'react'
import SearchClient from './SearchClient'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search products, categories, pages, and blog content across this B2B website.',
  alternates: {
    canonical: '/search',
  },
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchClient />
    </Suspense>
  )
}
