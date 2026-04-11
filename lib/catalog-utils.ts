import { CATALOG_PRODUCTS, type CatalogProduct } from '@/lib/catalog-products'
import { JYINS_BASE_PATHS } from '@/lib/jyins-routes'

export const CATALOG_PDF_PATH = '/catalog/jyins-product-catalog-2025.pdf'

export function getCatalogPdfPageUrl(page: number): string {
  const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1
  return `${CATALOG_PDF_PATH}#page=${safePage}`
}

export function getCatalogPageImage(page: number): string {
  const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1
  return `/catalog/thumbs/page-${String(safePage).padStart(3, '0')}.jpg`
}

export function normalizeHighlightValue(value: string): string {
  return value
    .replace(/^Single Choice\)\s*/i, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*\"Alarm.*$/i, '')
    .trim()
}

export function getPrimaryProductByPath(path: string): CatalogProduct | null {
  const lower = path.toLowerCase()
  const tokens = lower
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter((token) => token.length >= 2)

  const scored = CATALOG_PRODUCTS.map((product) => {
    const bag = `${product.name} ${product.category} ${product.models.join(' ')} ${product.technicalSummary}`.toLowerCase()
    const score = tokens.reduce((acc, token) => (bag.includes(token) ? acc + 1 : acc), 0)
    return { product, score }
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored[0]?.product ?? CATALOG_PRODUCTS[0] ?? null
}

export function getProductsByCategory(category: string): CatalogProduct[] {
  return CATALOG_PRODUCTS.filter((product) => product.category === category)
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter((token) => token.length >= 2)
}

const PRODUCT_ROUTE_POOL = JYINS_BASE_PATHS.filter(
  (path) => path.startsWith('/productshow/') || path.startsWith('/product/')
)

export function getProductRoutePath(product: CatalogProduct): string {
  const productTokens = new Set(tokenize(`${product.slug} ${product.name} ${product.models.join(' ')}`))

  const scored = PRODUCT_ROUTE_POOL.map((path) => {
    const routeTokens = tokenize(path)
    const score = routeTokens.reduce((sum, token) => (productTokens.has(token) ? sum + 1 : sum), 0)
    return { path, score }
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored[0]?.path ?? '/product/3-stages-12v-60a-battery-chargers-for-lithium-lead-acid-lfp-battery'
}
