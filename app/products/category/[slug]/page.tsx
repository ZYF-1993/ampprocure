import { permanentRedirect } from 'next/navigation'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'

type LegacyCategoryPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return FRAMEWORK_CATEGORIES.map((c) => ({ slug: c.slug }))
}

export default async function LegacyCategoryPage({ params }: LegacyCategoryPageProps) {
  const { slug } = await params
  permanentRedirect(`/categories/${slug}`)
}
