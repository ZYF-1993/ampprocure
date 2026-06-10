import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'
import { PRODUCT_GALLERY_IMAGES } from '@/lib/product-gallery-images.generated'
import { SITE_URL } from '@/lib/site-config'
import { CORE_ROUTES } from '@/lib/site-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const coreEntries: MetadataRoute.Sitemap = CORE_ROUTES
    .filter((path) => path !== '/thank-you' && path !== '/site-map')
    .map((path) => ({
      url: `${SITE_URL}${path}`,
      ...(path === '/' ? { images: [`${SITE_URL}/images/company-exterior.jpg`] } : {}),
    }))

  const productEntries: MetadataRoute.Sitemap = CATALOG_PRODUCTS.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    images: (PRODUCT_GALLERY_IMAGES[product.image] ?? [product.image]).map((image) => `${SITE_URL}${image}`),
  }))

  const categoryEntries: MetadataRoute.Sitemap = FRAMEWORK_CATEGORIES.map((category) => ({
    url: `${SITE_URL}/categories/${category.slug}`,
    images: [`${SITE_URL}/images/categories/${category.slug}.png`],
  }))

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    images: [`${SITE_URL}${post.image}`],
  }))

  return [...coreEntries, ...categoryEntries, ...productEntries, ...blogEntries]
}
