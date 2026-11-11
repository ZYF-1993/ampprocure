import type { Metadata } from 'next'
import type { CatalogProduct } from '@/lib/catalog-products'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site-config'

export function absoluteUrl(path: string): string {
  if (!path || path === '/') {
    return SITE_URL
  }
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

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
  const name = getProductDisplayName(product)
  return truncateSeoText(`${name} | ${product.slug}`, 60)
}

export function getProductSeoDescription(product: CatalogProduct): string {
  const name = getProductDisplayName(product)
  return truncateSeoText(
    `${name} (${product.slug}). ${product.technicalSummary} Request wholesale or OEM pricing by email, RFQ form, or WhatsApp.`,
    160,
  )
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
  absoluteTitle?: boolean
  index?: boolean
  follow?: boolean
  keywords?: string[]
  ogImage?: string
  ogType?: 'website' | 'article'
}

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  index = true,
  follow = true,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle || title.includes(`| ${SITE_NAME}`) ? title : `${title} | ${SITE_NAME}`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: path === '/' ? '/' : path,
    },
    robots: {
      index,
      follow,
      googleBot: {
        index,
        follow,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: 'en_US',
      type: ogType,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}

export function breadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
