import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCatalogPageImage, normalizeHighlightValue } from '@/lib/catalog-utils'
import { FRAMEWORK_CATEGORIES, getCategoryBySlug, getProductsByCategorySlug } from '@/lib/framework-data'

type CategoryPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return FRAMEWORK_CATEGORIES.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category page does not exist.',
    }
  }

  return {
    title: category.title,
    description: `Placeholder category description for ${category.title}.`,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategorySlug(category.slug)

  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{' '}
            /{' '}
            <Link href="/products" className="hover:text-slate-700">
              Products
            </Link>{' '}
            / <span className="text-slate-600">{category.title}</span>
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">{category.title}</h1>
          <p className="mt-3 max-w-3xl text-xl leading-8 text-slate-600">{category.summary}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
                  <Image
                    src={getCatalogPageImage(product.catalogPage)}
                    alt={`${product.name} placeholder image`}
                    width={320}
                    height={220}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="h-full w-auto max-w-full object-contain"
                  />
                </div>

                <div className="border-t border-gray-100 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{category.title}</p>
                  <h2 className="mt-2 text-2xl font-semibold leading-8 text-slate-900">{product.name}</h2>
                  <div className="mt-3 space-y-1.5 text-sm leading-6 text-slate-700">
                    {product.highlights.slice(0, 3).map((item) => (
                      <p key={item.label + item.value}>
                        <span className="font-semibold text-slate-900">{item.label}:</span> {normalizeHighlightValue(item.value)}
                      </p>
                    ))}
                  </div>

                  <Link href={`/products/${product.slug}`} className="mt-4 inline-flex items-center text-base font-semibold text-emerald-700 hover:text-emerald-800">
                    Placeholder Details Link
                    <span className="ml-2">-&gt;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <article>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Placeholder Category CTA</h2>
            <p className="mt-2 text-sm text-slate-600">Replace this line with your real category conversion copy.</p>
          </article>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
            Placeholder CTA Button
          </Link>
        </div>
      </section>
    </main>
  )
}
