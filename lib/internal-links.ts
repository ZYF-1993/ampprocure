import { BLOG_POSTS, type BlogPost } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS, type CatalogProduct } from '@/lib/catalog-products'

const FEATURED_PRODUCT_SLUGS = [
  'PN2-VA4',
  'PN2-VAFD',
  'STATS-06',
  'CZVA1',
  'DDS',
  'D52-2066',
  'D52-2066-wifi',
  'MCB-AC-2P',
  'MCB-DC-2P',
  'HA-12Way-2in2out-500VDC-40A-20AFUSE',
] as const

const CATEGORY_PRODUCT_SLUGS: Readonly<Record<string, readonly string[]>> = {
  'over-voltage-protector': [
    'PN2-VA4',
    'PN2-VAFD',
    'STATS-06',
    'CZVA1',
    'DDS',
    'D52-2066-wifi',
    'MCB-AC-2P',
    'HA-12Way-2in2out-500VDC-40A-20AFUSE',
  ],
  'power-meter': ['DDS', 'D52-2066', 'QY2P', 'ADD', 'DDR', 'D52-2066-wifi', 'PN2-VA4'],
  'circuit-breaker': ['MCB-AC-1P', 'MCB-AC-2P', 'MCB-DC-2P', 'MCB-DC-4P', 'PN2-VA4', 'HA-12Way-2in2out-500VDC-40A-20AFUSE'],
}

const DEFAULT_ARTICLE_SLUGS = [
  'how-to-vet-pv-combiner-box-manufacturer',
  'pv-combiner-box-buyers-checklist',
  'what-is-din-rail-aerosol-fire-extinguisher-technical-guide',
] as const

function productsBySlug(slugs: readonly string[]): CatalogProduct[] {
  return slugs.flatMap((slug) => {
    const product = CATALOG_PRODUCTS.find((item) => item.slug === slug)
    return product ? [product] : []
  })
}

function postsBySlug(slugs: readonly string[]): BlogPost[] {
  return slugs.flatMap((slug) => {
    const post = BLOG_POSTS.find((item) => item.slug === slug)
    return post ? [post] : []
  })
}

export function getFeaturedProducts(): CatalogProduct[] {
  return productsBySlug(FEATURED_PRODUCT_SLUGS)
}

export function getCategorySpotlightProducts(categorySlug: string): CatalogProduct[] {
  const preferred = CATEGORY_PRODUCT_SLUGS[categorySlug]
  if (preferred) {
    return productsBySlug(preferred)
  }
  return CATALOG_PRODUCTS.filter((product) => product.categoryCode === categorySlug).slice(0, 4)
}

export function getRelatedPostsForTopic(categoryCode: string, limit = 3): BlogPost[] {
  if (categoryCode === 'pv-combiner-box') {
    return BLOG_POSTS.filter((post) => post.tags.includes('PV Combiner Box')).slice(0, limit)
  }
  if (categoryCode === 'aerosol-fire-extinguisher') {
    return BLOG_POSTS.filter((post) => post.tags.some((tag) => tag.toLowerCase().includes('aerosol'))).slice(0, limit)
  }
  return postsBySlug(DEFAULT_ARTICLE_SLUGS).slice(0, limit)
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  const current = BLOG_POSTS.find((post) => post.slug === slug)
  if (!current) {
    return []
  }

  return BLOG_POSTS.filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score: post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score || Date.parse(b.post.publishedAt) - Date.parse(a.post.publishedAt))
    .slice(0, limit)
    .map((item) => item.post)
}

export function getRelatedProductsForBlog(tags: readonly string[], limit = 4): CatalogProduct[] {
  if (tags.includes('PV Combiner Box')) {
    return CATALOG_PRODUCTS.filter((product) => product.categoryCode === 'pv-combiner-box').slice(0, limit)
  }
  if (tags.some((tag) => tag.toLowerCase().includes('aerosol'))) {
    return CATALOG_PRODUCTS.filter((product) => product.categoryCode === 'aerosol-fire-extinguisher').slice(0, limit)
  }
  return getFeaturedProducts().slice(0, limit)
}

export const HOME_GUIDE_SLUGS = [
  'how-to-vet-pv-combiner-box-manufacturer',
  'pv-combiner-box-buyers-checklist',
  'dc-vs-ac-pv-combiner-box',
] as const

export function getHomeGuides(): BlogPost[] {
  return postsBySlug(HOME_GUIDE_SLUGS)
}
