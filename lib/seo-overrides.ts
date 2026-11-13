/**
 * Explicit search-result copy, keyed by route path (for example '/', '/about',
 * '/products/MCB-AC-1P', '/blog/how-to-choose-22mm-push-button-switch').
 *
 * When an entry exists, its `title` is used verbatim as the full <title>
 * (no " | UPprocure" suffix is appended and nothing is truncated), and its
 * `description` is used verbatim as the meta description. Open Graph and
 * Twitter tags follow the same values. Keep titles within about 60 characters
 * and descriptions within about 155 characters.
 *
 * Routes without an entry keep their current generated title and description.
 */
export type SeoOverride = {
  title?: string
  description?: string
}

export const SEO_OVERRIDES: Readonly<Record<string, SeoOverride>> = {}

export function getSeoOverride(path: string): SeoOverride | undefined {
  const normalized = path === '' ? '/' : path.replace(/\/+$/, '') || '/'
  return SEO_OVERRIDES[normalized]
}
