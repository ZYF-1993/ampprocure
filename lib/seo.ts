import type { CatalogProduct } from '@/lib/catalog-products'

export function truncateSeoText(value: string, maxLength: number): string {
  const normalized = value.replace(/\s+/g, ' ').trim()

  if (normalized.length <= maxLength) {
    return normalized
  }

  const shortened = normalized.slice(0, maxLength - 1)
  const lastSpace = shortened.lastIndexOf(' ')
  const boundary = lastSpace >= Math.floor(maxLength * 0.65) ? lastSpace : shortened.length

  return `${shortened.slice(0, boundary).trimEnd()}...`
}

export function getProductVariant(product: CatalogProduct): string | null {
  const match = product.slug.match(/-(White|Orange|Grey)$/i)
  if (match) {
    return match[1][0].toUpperCase() + match[1].slice(1).toLowerCase()
  }

  if (product.name.includes('(White)')) {
    return 'White'
  }

  return null
}

export function getProductDisplayName(product: CatalogProduct): string {
  const variant = getProductVariant(product)

  if (!variant || product.name.toLowerCase().includes(variant.toLowerCase())) {
    return product.name
  }

  return `${product.name} (${variant})`
}

export function getProductSeoTitle(product: CatalogProduct): string {
  return truncateSeoText(`${product.slug}: ${getProductDisplayName(product)}`, 56)
}

export function getProductSeoDescription(product: CatalogProduct): string {
  const variant = getProductVariant(product)
  const variantText = variant ? `${variant} housing. ` : ''

  return truncateSeoText(`${product.slug}: ${variantText}${product.technicalSummary}`, 158)
}
