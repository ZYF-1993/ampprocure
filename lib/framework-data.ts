import { CATALOG_PRODUCTS } from '@/lib/catalog-products'

export type FrameworkCategory = {
  slug: string
  title: string
  summary: string
  count: number
}

const CATEGORY_SUMMARY_BY_CODE: Readonly<Record<string, string>> = {
  'circuit-breaker': 'Placeholder category summary. Replace with your category positioning and technical value statement.',
  'surge-protector-device': 'Placeholder category summary. Replace with your category positioning and technical value statement.',
  'dc-fuse-holder': 'Placeholder category summary. Replace with your category positioning and technical value statement.',
  'over-voltage-protector': 'Placeholder category summary. Replace with your category positioning and technical value statement.',
  'power-meter': 'Placeholder category summary. Replace with your category positioning and technical value statement.',
  'wifi-smart-low-voltage-device': 'Placeholder category summary. Replace with your category positioning and technical value statement.',
  'pv-combiner-box': 'Placeholder category summary. Replace with your category positioning and technical value statement.',
  'ats-dual-power-switch': 'Placeholder category summary. Replace with your category positioning and technical value statement.',
  'aerosol-fire-extinguisher': 'Placeholder category summary. Replace with your category positioning and technical value statement.',
}

export const FRAMEWORK_CATEGORIES: readonly FrameworkCategory[] = Array.from(
  CATALOG_PRODUCTS.reduce<Map<string, FrameworkCategory>>((map, product) => {
    const current = map.get(product.categoryCode)

    if (current) {
      map.set(product.categoryCode, {
        ...current,
        count: current.count + 1,
      })
      return map
    }

    map.set(product.categoryCode, {
      slug: product.categoryCode,
      title: product.category,
      summary: CATEGORY_SUMMARY_BY_CODE[product.categoryCode] ?? 'Industrial product category with complete specification and quotation support.',
      count: 1,
    })

    return map
  }, new Map()).values()
).sort((a, b) => b.count - a.count)

export const HEADER_FEATURED_PRODUCTS = [...CATALOG_PRODUCTS].sort((a, b) => a.catalogPage - b.catalogPage).slice(0, 8)

export const TOPBAR_ITEMS = [
  `${CATALOG_PRODUCTS.length} Placeholder Models`,
  `${new Set(CATALOG_PRODUCTS.map((item) => item.categoryCode)).size} Placeholder Categories`,
  'Placeholder Service Label',
  'Placeholder Response Promise',
] as const

export const HOME_CORE_BLOCKS = [
  {
    title: 'Placeholder Core Block A',
    text: 'Placeholder text for homepage core value section. Replace with your real conversion message.',
  },
  {
    title: 'Placeholder Core Block B',
    text: 'Placeholder text for homepage core value section. Replace with your real conversion message.',
  },
  {
    title: 'Placeholder Core Block C',
    text: 'Placeholder text for homepage core value section. Replace with your real conversion message.',
  },
] as const

export const HOME_PROCESS_STEPS = [
  'Placeholder Step 01',
  'Placeholder Step 02',
  'Placeholder Step 03',
  'Placeholder Step 04',
  'Placeholder Step 05',
  'Placeholder Step 06',
] as const

export function getCategoryBySlug(slug: string): FrameworkCategory | null {
  return FRAMEWORK_CATEGORIES.find((item) => item.slug === slug) ?? null
}

export function getProductsByCategorySlug(slug: string) {
  return CATALOG_PRODUCTS.filter((product) => product.categoryCode === slug)
}
