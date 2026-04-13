export const CATALOG_PDF_PATH = '#'

export function getCatalogPdfPageUrl(page: number): string {
  void page
  return CATALOG_PDF_PATH
}

export function getCatalogPageImage(page: number): string {
  void page
  return '/placeholders/industrial-placeholder.svg'
}

export function normalizeHighlightValue(value: string): string {
  return value
    .replace(/^Single Choice\)\s*/i, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*\"Alarm.*$/i, '')
    .trim()
}
