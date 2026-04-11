import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { JYINS_BASE_PATHS, JYINS_LOCALES } from '@/lib/jyins-routes'
import { SITE_URL } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const urls = new Set<string>()

  for (const basePath of JYINS_BASE_PATHS) {
    urls.add(basePath)
    for (const locale of JYINS_LOCALES) {
      urls.add(basePath === '/' ? `/${locale}` : `/${locale}${basePath}`)
    }
  }

  for (const post of BLOG_POSTS) {
    urls.add(post.path)
    for (const locale of JYINS_LOCALES) {
      urls.add(`/${locale}${post.path}`)
    }
  }

  return Array.from(urls).map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path.includes('/news/') ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
