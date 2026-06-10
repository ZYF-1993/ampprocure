import { CATALOG_PRODUCTS } from '@/lib/catalog-products'

export type FrameworkCategory = {
  slug: string
  title: string
  summary: string
  count: number
}

const CATEGORY_SUMMARY_BY_CODE: Readonly<Record<string, string>> = {
  'circuit-breaker': 'Source AC and DC miniature circuit breakers for residential, commercial, solar, and industrial panels, with B2B quotation and OEM support.',
  'surge-protector-device': 'Compare AC and DC surge protective devices for distribution boards and solar PV systems, including multi-pole 40kA DIN rail options.',
  'dc-fuse-holder': 'Find DIN rail fuse holders for AC and DC protection, from compact 10x38mm models to high-current industrial configurations.',
  'over-voltage-protector': 'Explore self-resetting voltage protectors and monitoring relays with adjustable over-voltage, under-voltage, and over-current protection.',
  'power-meter': 'Compare DIN rail power and energy meters for residential sub-metering, commercial panels, and industrial monitoring applications.',
  'wifi-smart-low-voltage-device': 'Source WiFi smart circuit breakers and leakage protectors with remote control, energy monitoring, and Tuya or Smart Life connectivity.',
  'pv-combiner-box': 'Compare IP65 PV combiner boxes with integrated DC breakers, fuses, isolators, and surge protection for solar array projects.',
  'ats-dual-power-switch': 'Find automatic transfer switches for mains, generator, inverter, and backup power systems, with 2P, 3P, and 4P configurations.',
  'aerosol-fire-extinguisher': 'Source compact DIN rail aerosol fire suppression devices for electrical cabinets, PV combiner boxes, and enclosed control equipment.',
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
