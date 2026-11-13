// Submit the site's sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver and
// other participating engines share submissions through api.indexnow.org).
//
// Usage:
//   node scripts/indexnow-submit.mjs --dry-run          # list what would be sent
//   node scripts/indexnow-submit.mjs                    # submit every sitemap URL
//   node scripts/indexnow-submit.mjs /blog/some-post    # submit only these paths/URLs
//
// Options (environment variables):
//   INDEXNOW_SITEMAP  sitemap URL or local file path (default: https://www.upprocure.com/sitemap.xml)
//
// The key below is public by design: IndexNow verifies ownership by fetching
// https://www.upprocure.com/<key>.txt, which lives in public/. Only run this
// after the deployment that contains the key file is live.
import { readFile } from 'node:fs/promises'

const HOST = 'www.upprocure.com'
const ORIGIN = `https://${HOST}`
const KEY = 'c8799b0c2f031f350a45a7962ef1f03c'
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`
const ENDPOINT = 'https://api.indexnow.org/indexnow'
const MAX_URLS_PER_REQUEST = 10000

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const explicitTargets = args.filter((arg) => !arg.startsWith('--'))

async function loadSitemap(source) {
  if (/^https?:\/\//.test(source)) {
    const response = await fetch(source)
    if (!response.ok) {
      throw new Error(`Could not fetch ${source}: HTTP ${response.status}`)
    }
    return response.text()
  }
  return readFile(source, 'utf8')
}

function extractPageUrls(xml) {
  // <loc> only: <image:loc> entries are image URLs, not pages.
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) =>
    match[1].replace(/&amp;/g, '&'),
  )
  return [...new Set(urls)].filter((url) => new URL(url).host === HOST)
}

function toAbsolute(target) {
  const url = new URL(target, ORIGIN)
  if (url.host !== HOST) {
    throw new Error(`Refusing to submit a URL outside ${HOST}: ${target}`)
  }
  return url.toString()
}

async function submit(urlList) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  })
  const body = await response.text()
  // 200 = accepted, 202 = accepted (key validation pending).
  // 400 bad request, 403 key not valid, 422 URLs do not match host, 429 too many requests.
  console.log(`IndexNow responded HTTP ${response.status}${body ? `: ${body}` : ''}`)
  if (response.status !== 200 && response.status !== 202) {
    process.exitCode = 1
  }
}

async function main() {
  let urls
  if (explicitTargets.length > 0) {
    urls = [...new Set(explicitTargets.map(toAbsolute))]
  } else {
    const source = process.env.INDEXNOW_SITEMAP || `${ORIGIN}/sitemap.xml`
    urls = extractPageUrls(await loadSitemap(source))
  }

  if (urls.length === 0) {
    throw new Error('No URLs to submit.')
  }

  console.log(`${urls.length} URL(s) for ${HOST}`)
  if (dryRun) {
    urls.forEach((url) => console.log(url))
    console.log('Dry run: nothing was submitted.')
    return
  }

  for (let start = 0; start < urls.length; start += MAX_URLS_PER_REQUEST) {
    await submit(urls.slice(start, start + MAX_URLS_PER_REQUEST))
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
