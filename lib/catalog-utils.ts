import { CATALOG_PRODUCTS } from '@/lib/catalog-products'

export const CATALOG_PDF_PATH = '#'

export function getCatalogPdfPageUrl(page: number): string {
  void page
  return CATALOG_PDF_PATH
}

export function getCatalogPageImage(page: number): string {
  return CATALOG_PRODUCTS.find((product) => product.catalogPage === page)?.image ?? '/placeholders/industrial-placeholder.svg'
}

export function normalizeHighlightValue(value: string): string {
  return value
    .replace(/^Single Choice\)\s*/i, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*\"Alarm.*$/i, '')
    .trim()
}
