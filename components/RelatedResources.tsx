import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'
import type { BlogPost } from '@/lib/blog-posts'
import type { CatalogProduct } from '@/lib/catalog-products'
import { SOLUTIONS } from '@/lib/solutions'

type RelatedResourcesProps = {
  products?: readonly CatalogProduct[]
  posts?: readonly BlogPost[]
  showSolutions?: boolean
  productHeading?: string
  postHeading?: string
}

export default function RelatedResources({
  products = [],
  posts = [],
  showSolutions = false,
  productHeading = 'Related products',
  postHeading = 'Related articles',
}: RelatedResourcesProps) {
  if (!showSolutions && products.length === 0 && posts.length === 0) {
    return null
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Related pages</h2>

        {showSolutions && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Solutions</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <li>
                <Link href="/solutions" className="block h-full rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-green-700 hover:border-green-300">
                  All solutions
                </Link>
              </li>
              {SOLUTIONS.map((solution) => (
                <li key={solution.href}>
                  <Link href={solution.href} className="block h-full rounded-xl border border-slate-200 bg-white p-4 hover:border-green-300">
                    <span className="text-sm font-semibold text-slate-900">{solution.navLabel}</span>
                    <span className="mt-2 block text-xs leading-5 text-slate-600">{solution.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {products.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">{productHeading}</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 hover:border-green-300"
                  >
                    <OptimizedImage
                      src={product.image}
                      alt={product.name}
                      width={64}
                      height={64}
                      variant="thumb"
                      className="h-16 w-16 shrink-0 object-contain"
                    />
                    <span className="text-sm font-semibold leading-snug text-slate-900">{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {posts.length > 0 && (
          <div className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">{postHeading}</h3>
              <Link href="/blog" className="text-sm font-semibold text-green-700 hover:text-green-800">
                All articles
              </Link>
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="block h-full rounded-xl border border-slate-200 bg-white p-4 hover:border-green-300">
                    <span className="text-sm font-semibold leading-snug text-slate-900">{post.title}</span>
                    <span className="mt-2 block line-clamp-3 text-xs leading-5 text-slate-600">{post.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
