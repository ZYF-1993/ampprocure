import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_PRODUCTS } from '@/lib/catalog-products'
import { SITE_URL } from '@/lib/site-config'
import { CORE_ROUTES } from '@/lib/site-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const coreEntries: MetadataRoute.Sitemap = CORE_ROUTES.filter((path) => path !== '/thank-you').map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))

  const productEntries: MetadataRoute.Sitemap = CATALOG_PRODUCTS.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...coreEntries, ...productEntries, ...blogEntries]
}
