import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'
import { absoluteOptimizedSrc } from '@/lib/optimized-image'
import { PRODUCT_GALLERY_IMAGES } from '@/lib/product-gallery-images.generated'
import { absoluteUrl } from '@/lib/seo'
import { CORE_ROUTES } from '@/lib/site-content'

const SOLUTION_PATH = '/solutions/aerosol-fire-extinguisher'

export default function sitemap(): MetadataRoute.Sitemap {
  const coreEntries: MetadataRoute.Sitemap = CORE_ROUTES
    .filter((path) => path !== '/thank-you' && path !== '/site-map')
    .map((path) => ({
      url: absoluteUrl(path),
      ...(path === '/' ? { images: [absoluteOptimizedSrc('/images/company-exterior.jpg')] } : {}),
    }))

  const solutionEntry: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(SOLUTION_PATH),
      images: [absoluteOptimizedSrc('/images/solutions/aerosol-fire-extinguisher/hero-bg.jpg')],
    },
  ]

  const productEntries: MetadataRoute.Sitemap = CATALOG_PRODUCTS.map((product) => ({
    url: absoluteUrl(`/products/${product.slug}`),
    images: (PRODUCT_GALLERY_IMAGES[product.image] ?? [product.image]).map((image) => absoluteOptimizedSrc(image)),
  }))

  const categoryEntries: MetadataRoute.Sitemap = FRAMEWORK_CATEGORIES.map((category) => ({
    url: absoluteUrl(`/categories/${category.slug}`),
    images: [absoluteOptimizedSrc(`/images/categories/${category.slug}.png`, 'thumb')],
  }))

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt),
    images: [absoluteOptimizedSrc(post.image)],
  }))

  return [...coreEntries, ...solutionEntry, ...categoryEntries, ...productEntries, ...blogEntries]
}
