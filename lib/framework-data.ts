import { CATALOG_PRODUCTS } from '@/lib/catalog-products'

export type FrameworkCategory = {
  slug: string
  title: string
  summary: string
  count: number
}

const CATEGORY_SUMMARY_BY_CODE: Readonly<Record<string, string>> = {
  'circuit-breaker': 'Reliable overcurrent and short-circuit protection for LV systems.',
  'surge-protector-device': 'Transient overvoltage suppression for sensitive equipment.',
  'dc-fuse-holder': 'Safe and compact fuse mounting for DC circuits up to 1500V.',
  'over-voltage-protector': 'Automatic load disconnection against sustained overvoltage.',
  'power-meter': 'Precision energy measurement for industrial and commercial use.',
  'wifi-smart-low-voltage-device': 'IoT-enabled low-voltage devices for smart building control.',
  'pv-combiner-box': 'String combiner solutions for solar PV arrays.',
  'ats-dual-power-switch': 'Automatic transfer switching for uninterrupted power supply.',
  'aerosol-fire-extinguisher': 'Compact aerosol-based fire suppression for rapid response.',
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
)

export const HEADER_FEATURED_PRODUCTS = [...CATALOG_PRODUCTS].sort((a, b) => a.catalogPage - b.catalogPage).slice(0, 8)

export const TOPBAR_ITEMS = [
  `${CATALOG_PRODUCTS.length} Product Models`,
  `${new Set(CATALOG_PRODUCTS.map((item) => item.categoryCode)).size} Product Categories`,
  'OEM Support',
  '24h Quote Response',
] as const

export const HOME_CORE_BLOCKS = [
  {
    title: 'Electrical Protection Supply',
    text: 'Core products for distributors, panel builders, and project contractors.',
  },
  {
    title: 'OEM Cooperation',
    text: 'Packaging, label, and mixed-order support for repeat B2B procurement.',
  },
  {
    title: 'Responsive Quotation',
    text: 'Clear product matching and RFQ follow-up for low-voltage applications.',
  },
] as const

export const HOME_PROCESS_STEPS = [
  'Confirm Requirements',
  'Match Products',
  'Prepare Samples',
  'Confirm Order',
  'Arrange Production',
  'Support Delivery',
] as const

export function getCategoryBySlug(slug: string): FrameworkCategory | null {
  return FRAMEWORK_CATEGORIES.find((item) => item.slug === slug) ?? null
}

export function getProductsByCategorySlug(slug: string) {
  return CATALOG_PRODUCTS.filter((product) => product.categoryCode === slug)
}
