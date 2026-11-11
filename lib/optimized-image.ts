import { SITE_URL } from '@/lib/site-config'

export type ImageVariant = 'thumb' | 'display'

const RASTER = /\.(png|jpe?g)$/i

/**
 * Map a public image path to a pre-generated WebP that is served as a static
 * file. Those files are outside the R2 rewrite prefixes, so production does
 * not spend a Vercel image transformation on them.
 */
export function optimizedSrc(src: string, variant: ImageVariant = 'display'): string {
  if (!src || src.startsWith('data:') || src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  const [path, query] = src.split('?')
  if (!path.startsWith('/') || path.startsWith('/optimized/') || !RASTER.test(path)) {
    return src
  }

  const webp = path.replace(RASTER, '.webp')
  const optimized = `/optimized/${variant}${webp}`
  return query ? `${optimized}?${query}` : optimized
}

export function absoluteOptimizedSrc(src: string, variant: ImageVariant = 'display'): string {
  const resolved = optimizedSrc(src, variant)
  if (resolved.startsWith('http://') || resolved.startsWith('https://')) {
    return resolved
  }
  return `${SITE_URL}${resolved.startsWith('/') ? resolved : `/${resolved}`}`
}

export function rewriteContentImages(html: string, variant: ImageVariant = 'display'): string {
  return html.replace(
    /(src\s*=\s*["'])(\/[^"']+\.(?:png|jpe?g))(["'])/gi,
    (_match, before: string, src: string, after: string) => `${before}${optimizedSrc(src, variant)}${after}`,
  )
}
