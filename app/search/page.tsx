import { Suspense } from 'react'
import SearchClient from './SearchClient'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Search',
  description: 'Search products, categories, pages, and blog content across this B2B website.',
  path: '/search',
  index: false,
  follow: true,
})

export default function SearchPage() {
  return (
    <Suspense>
      <SearchClient />
    </Suspense>
  )
}
