import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from '@/lib/catalog-products'

export const CORE_ROUTES = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/thank-you',
  '/products',
] as const

export const PRODUCT_CATEGORY_MATRIX = CATALOG_CATEGORIES.map((category) => {
  const products = CATALOG_PRODUCTS.filter((item) => item.category === category)
  return {
    category,
    count: products.length,
    sample: products[0] ?? null,
    products,
  }
})

export const FEATURED_PRODUCTS = [...CATALOG_PRODUCTS].sort((a, b) => a.catalogPage - b.catalogPage).slice(0, 12)

export const LATEST_BLOG_POSTS = [...BLOG_POSTS]
  .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
  .slice(0, 12)

export const BLOG_BY_SLUG: Readonly<Record<string, (typeof BLOG_POSTS)[number]>> = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.slug, post])
)

export const PRODUCT_BY_SLUG: Readonly<Record<string, (typeof CATALOG_PRODUCTS)[number]>> = Object.fromEntries(
  CATALOG_PRODUCTS.map((product) => [product.slug, product])
)

export function getBlogBySlug(slug: string) {
  return BLOG_BY_SLUG[slug] ?? null
}

export function getProductBySlug(slug: string) {
  return PRODUCT_BY_SLUG[slug] ?? null
}
