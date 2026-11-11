import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Product and category listings are single pages. `?page=2` renders the same
 * document as the clean URL, so it must not be indexed as its own page.
 * A permanent redirect is stronger than a canonical: Google drops the
 * duplicate instead of reporting "Alternate page with proper canonical tag".
 * Other query strings (campaign parameters) stay in place and keep the
 * page's clean canonical.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  if (!url.searchParams.has('page')) {
    return NextResponse.next()
  }

  url.searchParams.delete('page')
  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next|optimized|images|branding).*)',
      has: [{ type: 'query', key: 'page' }],
    },
  ],
}
