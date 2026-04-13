export type CatalogHighlight = {
  label: string
  value: string
}

export type CatalogProduct = {
  id: string
  slug: string
  name: string
  category: string
  categoryCode: string
  catalogPage: number
  models: readonly string[]
  highlights: readonly CatalogHighlight[]
  technicalSummary: string
}

const CATEGORY_DEFINITIONS = [
  { code: 'circuit-breaker', title: 'Main Product Category A' },
  { code: 'surge-protector-device', title: 'Main Product Category B' },
  { code: 'dc-fuse-holder', title: 'Main Product Category C' },
  { code: 'over-voltage-protector', title: 'Main Product Category D' },
  { code: 'power-meter', title: 'Main Product Category E' },
  { code: 'wifi-smart-low-voltage-device', title: 'Main Product Category F' },
  { code: 'pv-combiner-box', title: 'Main Product Category G' },
  { code: 'ats-dual-power-switch', title: 'Main Product Category H' },
  { code: 'aerosol-fire-extinguisher', title: 'Main Product Category I' },
] as const

const PRODUCT_SEEDS = [
  { id: 'prd-001', slug: 'placeholder-product-01', code: 'circuit-breaker', page: 1 },
  { id: 'prd-002', slug: 'placeholder-product-02', code: 'circuit-breaker', page: 2 },
  { id: 'prd-003', slug: 'placeholder-product-03', code: 'surge-protector-device', page: 3 },
  { id: 'prd-004', slug: 'placeholder-product-04', code: 'surge-protector-device', page: 4 },
  { id: 'prd-005', slug: 'placeholder-product-05', code: 'dc-fuse-holder', page: 5 },
  { id: 'prd-006', slug: 'placeholder-product-06', code: 'dc-fuse-holder', page: 6 },
  { id: 'prd-007', slug: 'placeholder-product-07', code: 'over-voltage-protector', page: 7 },
  { id: 'prd-008', slug: 'placeholder-product-08', code: 'over-voltage-protector', page: 8 },
  { id: 'prd-009', slug: 'placeholder-product-09', code: 'power-meter', page: 9 },
  { id: 'prd-010', slug: 'placeholder-product-10', code: 'power-meter', page: 10 },
  { id: 'prd-011', slug: 'placeholder-product-11', code: 'wifi-smart-low-voltage-device', page: 11 },
  { id: 'prd-012', slug: 'placeholder-product-12', code: 'wifi-smart-low-voltage-device', page: 12 },
  { id: 'prd-013', slug: 'placeholder-product-13', code: 'pv-combiner-box', page: 13 },
  { id: 'prd-014', slug: 'placeholder-product-14', code: 'pv-combiner-box', page: 14 },
  { id: 'prd-015', slug: 'placeholder-product-15', code: 'ats-dual-power-switch', page: 15 },
  { id: 'prd-016', slug: 'placeholder-product-16', code: 'ats-dual-power-switch', page: 16 },
  { id: 'prd-017', slug: 'placeholder-product-17', code: 'aerosol-fire-extinguisher', page: 17 },
  { id: 'prd-018', slug: 'placeholder-product-18', code: 'aerosol-fire-extinguisher', page: 18 },
] as const

export const CATALOG_PRODUCTS: readonly CatalogProduct[] = PRODUCT_SEEDS.map((seed, index) => {
  const category = CATEGORY_DEFINITIONS.find((item) => item.code === seed.code)
  const productNo = String(index + 1).padStart(2, '0')

  return {
    id: seed.id,
    slug: seed.slug,
    name: `Placeholder Product ${productNo}`,
    category: category?.title ?? 'Main Product Category',
    categoryCode: seed.code,
    catalogPage: seed.page,
    models: [`Model Variant ${productNo}-A`, `Model Variant ${productNo}-B`, `Model Variant ${productNo}-C`],
    highlights: [
      { label: 'Parameter A', value: 'Placeholder Value A' },
      { label: 'Parameter B', value: 'Placeholder Value B' },
      { label: 'Parameter C', value: 'Placeholder Value C' },
      { label: 'Parameter D', value: 'Placeholder Value D' },
    ],
    technicalSummary: `Placeholder technical summary for product ${productNo}. Replace with your real product overview, use case, and selection hints.`,
  }
})

export const CATALOG_CATEGORIES = CATEGORY_DEFINITIONS.map((item) => item.title)

export const CATALOG_PRODUCT_COUNT = CATALOG_PRODUCTS.length
