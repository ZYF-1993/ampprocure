import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'

export type SiteSearchItemType = 'Product' | 'Category' | 'Blog' | 'Page'

export type SiteSearchItem = {
  id: string
  type: SiteSearchItemType
  title: string
  summary: string
  href: string
  tags: readonly string[]
}

const CORE_PAGES: readonly SiteSearchItem[] = [
  {
    id: 'page-home',
    type: 'Page',
    title: 'Home',
    summary: 'Homepage with featured categories, trust section, and conversion-oriented inquiry entry points.',
    href: '/',
    tags: ['home', 'overview', 'landing'],
  },
  {
    id: 'page-products',
    type: 'Page',
    title: 'Products',
    summary: 'Product listing page with category navigation, product cards, and quotation pathways.',
    href: '/products',
    tags: ['products', 'catalog', 'product list'],
  },
  {
    id: 'page-blog',
    type: 'Page',
    title: 'Blog',
    summary: 'Industry and technical articles for B2B buyers and specification-driven sourcing teams.',
    href: '/blog',
    tags: ['blog', 'knowledge', 'insight'],
  },
  {
    id: 'page-about',
    type: 'Page',
    title: 'About',
    summary: 'Company introduction, manufacturing capability highlights, and business background information.',
    href: '/about',
    tags: ['about', 'company', 'factory'],
  },
  {
    id: 'page-contact',
    type: 'Page',
    title: 'Contact',
    summary: 'Inquiry form and direct communication channel for pre-sales and technical consultation.',
    href: '/contact',
    tags: ['contact', 'inquiry', 'support'],
  },
]

const PRODUCT_ITEMS: readonly SiteSearchItem[] = CATALOG_PRODUCTS.map((product) => ({
  id: `product-${product.id}`,
  type: 'Product',
  title: product.name,
  summary: product.technicalSummary,
  href: `/products/${product.slug}`,
  tags: [
    product.category,
    ...product.models,
    ...product.highlights.map((item) => `${item.label} ${item.value}`),
  ],
}))

const CATEGORY_ITEMS: readonly SiteSearchItem[] = FRAMEWORK_CATEGORIES.map((category) => ({
  id: `category-${category.slug}`,
  type: 'Category',
  title: category.title,
  summary: category.summary,
  href: `/categories/${category.slug}`,
  tags: ['category', category.title, category.slug],
}))

const BLOG_ITEMS: readonly SiteSearchItem[] = BLOG_POSTS.map((post) => ({
  id: `blog-${post.slug}`,
  type: 'Blog',
  title: post.title,
  summary: post.description,
  href: `/blog/${post.slug}`,
  tags: [...post.tags, post.category],
}))

export const SEARCH_INDEX: readonly SiteSearchItem[] = [...CORE_PAGES, ...CATEGORY_ITEMS, ...PRODUCT_ITEMS, ...BLOG_ITEMS]

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

function splitTokens(text: string) {
  return normalize(text)
    .split(' ')
    .filter((token) => token.length >= 2)
}

export function searchSiteContent(rawQuery: string) {
  const query = normalize(rawQuery)
  if (!query) {
    return []
  }

  const tokens = splitTokens(query)
  if (tokens.length === 0) {
    return []
  }

  return SEARCH_INDEX.map((item) => {
    const title = normalize(item.title)
    const summary = normalize(item.summary)
    const tags = normalize(item.tags.join(' '))
    const href = normalize(item.href)

    const tokenScore = tokens.reduce((score, token) => {
      let next = score
      if (title.includes(token)) next += 6
      if (tags.includes(token)) next += 4
      if (summary.includes(token)) next += 2
      if (href.includes(token)) next += 1
      return next
    }, 0)

    const phraseBonus = title.includes(query) || tags.includes(query) ? 8 : 0

    return {
      item,
      score: tokenScore + phraseBonus,
    }
  })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .map((entry) => entry.item)
}
