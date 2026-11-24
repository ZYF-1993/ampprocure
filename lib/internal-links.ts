import { BLOG_POSTS, type BlogPost } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS, type CatalogProduct } from '@/lib/catalog-products'
import { EB2M_ARTICLES } from '@/lib/eb2m-blog-articles'
import { EB2M_PROCUREMENT_ARTICLES } from '@/lib/eb2m-procurement-blog-articles'

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
  'over-voltage-protector': ['PN2-VA4', 'PN2-VAFD', 'STATS-06', 'CZVA1', 'PN2-VAK', 'CZVA3', 'STATS-05', 'PN2-VA2'],
  'power-meter': ['DDS', 'D52-2066', 'QY2P', 'ADD', 'DDR', 'D52-2066-wifi'],
  'circuit-breaker': ['MCB-AC-1P', 'MCB-AC-2P', 'MCB-AC-3P', 'MCB-AC-4P', 'MCB-DC-1P', 'MCB-DC-2P', 'MCB-DC-3P', 'MCB-DC-4P'],
  'surge-protector-device': ['SPD-AC-2P-Grey', 'SPD-AC-4P-Grey', 'SPD-DC-2P-White', 'SPD-DC-3P-White', 'SPD-DC-4P-White', 'SPD-DC-2P-Orange'],
  'dc-fuse-holder': ['RT18-32X-2P', 'RT18-32X-3P', 'RT18-63X-2P', 'RT18-63X-3P', 'RT18-125AM-3P', 'RT18-125AM-4P'],
  'wifi-smart-low-voltage-device': ['SOLT', 'SRP', 'SRP-L', 'D52-2066-wifi'],
  'pv-combiner-box': ['HA-12Way-2in2out-500VDC-40A-20AFUSE', 'HA-8Way-2in1out-500VDC-40A-20AFUSE', 'HT-8Way-2in1out-600VDC', 'HA-12way-2in1out-1000VDC-DS', 'PCB-M4in-02', 'PCB-M6in-01'],
  'ats-dual-power-switch': ['ATS-ST-2P-63A-220V-110V', 'ATS-ST-4P-63A-220V-110V', 'ATS-W2R-2P-220V-110V', 'STQ1-63-2P-220V-110V', 'STQ2-63-4P-220V-110V'],
  'aerosol-fire-extinguisher': ['Aerosol-DIN-Rail'],
}

const EB2M_CLUSTER_SLUGS: readonly string[] = [
  ...EB2M_PROCUREMENT_ARTICLES.map(({ post }) => post.slug),
  ...EB2M_ARTICLES.map(({ post }) => post.slug),
  'how-to-choose-22mm-push-button-switch',
  '22mm-selector-switch-key-switch-spring-return-hand-off-auto',
  '22mm-emergency-stop-button-twist-release-guide',
]

const EB2M_CLUSTER_SET: ReadonlySet<string> = new Set(EB2M_CLUSTER_SLUGS)

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

export function getRelatedProductsForProduct(
  product: CatalogProduct,
  preferredSlugs: readonly string[] = [],
  limit = 4,
): CatalogProduct[] {
  const sameCategory = CATALOG_PRODUCTS.filter((item) => item.categoryCode === product.categoryCode)
  const currentIndex = sameCategory.findIndex((item) => item.slug === product.slug)

  // Rotate sibling products starting after the current product so every item in the
  // category receives incoming sibling links rather than only the first four items.
  const rotatedSiblings =
    currentIndex >= 0
      ? [...sameCategory.slice(currentIndex + 1), ...sameCategory.slice(0, currentIndex)]
      : sameCategory

  // Pair color variants (e.g., SPD-DC-2P-White <-> SPD-DC-2P-Orange) first when present.
  const counterpartSlug = product.slug.endsWith('-White')
    ? product.slug.replace(/-White$/, '-Orange')
    : product.slug.endsWith('-Orange')
      ? product.slug.replace(/-Orange$/, '-White')
      : null
  const counterpart = counterpartSlug
    ? CATALOG_PRODUCTS.find((item) => item.slug === counterpartSlug)
    : undefined

  const candidates = [
    ...(counterpart ? [counterpart] : []),
    ...productsBySlug(preferredSlugs),
    ...rotatedSiblings,
  ]

  const seen = new Set<string>([product.slug])
  const results: CatalogProduct[] = []
  for (const item of candidates) {
    if (!seen.has(item.slug)) {
      seen.add(item.slug)
      results.push(item)
      if (results.length >= limit) break
    }
  }
  return results
}

export function getRelatedPostsForTopic(categoryCode: string, limit = 3): BlogPost[] {
  if (categoryCode === 'pv-combiner-box') {
    return postsBySlug([
      'pv-combiner-box-buyers-checklist',
      'pv-combiner-box-certifications-iec-ce-ul',
      'how-to-choose-pv-combiner-box-string-count',
    ]).slice(0, limit)
  }
  if (categoryCode === 'aerosol-fire-extinguisher') {
    return BLOG_POSTS.filter((post) => post.tags.some((tag) => tag.toLowerCase().includes('aerosol'))).slice(0, limit)
  }
  return []
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  if (EB2M_CLUSTER_SET.has(slug)) {
    const idx = EB2M_CLUSTER_SLUGS.indexOf(slug)
    const rotated = [
      ...EB2M_CLUSTER_SLUGS.slice(idx + 1),
      ...EB2M_CLUSTER_SLUGS.slice(0, idx),
    ]
    return postsBySlug(rotated).slice(0, limit)
  }

  const current = BLOG_POSTS.find((post) => post.slug === slug)
  if (!current) {
    return []
  }

  const sameTopic = BLOG_POSTS.filter(
    (post) => post.slug !== slug && !EB2M_CLUSTER_SET.has(post.slug),
  ).sort((a, b) => {
    const scoreA = a.tags.filter((tag) => current.tags.includes(tag)).length
    const scoreB = b.tags.filter((tag) => current.tags.includes(tag)).length
    return scoreB - scoreA || Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
  })

  // Rotate within top-scoring same-topic articles so older guides (e.g., certifications) also receive internal links.
  const topicPool = sameTopic.filter((post) => post.tags.some((tag) => current.tags.includes(tag)))
  if (topicPool.length > limit) {
    const allTopic = BLOG_POSTS.filter((post) => post.tags.some((tag) => current.tags.includes(tag)))
    const curIdx = allTopic.findIndex((post) => post.slug === slug)
    if (curIdx >= 0) {
      const rotated = [...allTopic.slice(curIdx + 1), ...allTopic.slice(0, curIdx)]
      return rotated.slice(0, limit)
    }
  }

  return sameTopic.slice(0, limit)
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
