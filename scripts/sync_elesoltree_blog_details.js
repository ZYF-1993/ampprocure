const fs = require('fs')
const https = require('https')
const path = require('path')

const slugs = [
  'what-is-din-rail-aerosol-fire-extinguisher-technical-guide',
  'din-rail-aerosol-fire-extinguisher-price-guide-2026',
  'how-does-aerosol-fire-extinguisher-work-electrical-cabinets',
  'top-8-applications-din-rail-aerosol-fire-extinguishers-2026',
  'aerosol-vs-fm200-vs-co2-vs-novec-1230-switchgear-fire-suppression',
  'how-to-size-din-rail-aerosol-fire-extinguisher-calculation-guide',
  'din-rail-aerosol-fire-extinguisher-specifications',
  'aerosol-fire-extinguisher-certifications-ce-en-15276-ul-ccc',
  'din-rail-aerosol-fire-extinguisher-buyers-checklist-2026',
  'din-rail-aerosol-fire-extinguisher-china-sourcing-guide',
  'how-to-vet-pv-combiner-box-manufacturer',
  'pv-combiner-box-price-guide-2026',
  'how-to-choose-pv-combiner-box-string-count',
  'ip65-vs-ip66-vs-ip67-pv-combiner-box',
  'pv-combiner-box-certifications-iec-ce-tuv-ul',
  'dc-vs-ac-pv-combiner-box',
  'pv-combiner-box-buyers-checklist',
  'pv-combiner-box-sourcing-china-2026',
  'what-is-solar-pv-combiner-box-photovoltaic-designs',
]

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          resolve(fetchUrl(new URL(res.headers.location, url).toString()))
          return
        }

        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`))
          res.resume()
          return
        }

        res.setEncoding('utf8')
        let body = ''
        res.on('data', (chunk) => {
          body += chunk
        })
        res.on('end', () => resolve(body))
      })
      .on('error', reject)
  })
}

function extractBalancedElement(html, marker) {
  const start = html.indexOf(marker)
  if (start === -1) {
    throw new Error(`Missing marker: ${marker}`)
  }

  let index = start
  let depth = 0
  const tagPattern = /<\/?([a-zA-Z][a-zA-Z0-9-]*)(?:\s[^>]*)?>/g
  tagPattern.lastIndex = start

  while (true) {
    const match = tagPattern.exec(html)
    if (!match) {
      throw new Error(`Unclosed marker: ${marker}`)
    }

    const full = match[0]
    const tag = match[1].toLowerCase()
    const isClosing = full.startsWith('</')
    const isVoid = /\/>$/.test(full) || ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'].includes(tag)

    if (!isClosing && !isVoid) {
      depth += 1
    } else if (isClosing) {
      depth -= 1
      if (depth === 0) {
        index = tagPattern.lastIndex
        break
      }
    }
  }

  return html.slice(start, index)
}

function getMeta(html, property) {
  const pattern = new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']*)["'][^>]*>`, 'i')
  const match = html.match(pattern)
  return match ? decodeEntities(match[1]) : ''
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
}

function normalizeArticleHtml(html) {
  return html
    .replace(/\sdata-nimg="[^"]*"/g, '')
    .replace(/\sdecoding="[^"]*"/g, '')
    .replace(/\sfetchPriority="[^"]*"/g, '')
    .replace(/\ssrcSet="[^"]*"/g, '')
    .replace(/\ssizes="[^"]*"/g, '')
    .replace(/\sstyle="[^"]*"/g, '')
    .replace(/src="\/_next\/image\?url=([^"&]+)[^"]*"/g, (_, encoded) => `src="${decodeURIComponent(encoded)}"`)
    .replace(/<!-- -->/g, '')
    .replace(/<button type="button" class="flex w-full items-center justify-between px-5 py-3">([\s\S]*?)<\/button>/g, '<div class="flex w-full items-center justify-between px-5 py-3">$1</div>')
    .replace(/\[Hide\]/g, '')
}

function extractPost(html) {
  const articleHtml = normalizeArticleHtml(extractBalancedElement(html, '<div class="prose-custom">'))
  const wordCountMatch = html.match(/"wordCount":(\d+)/)
  const authorMatch = html.match(/"author":\{"@type":"Organization","name":"([^"]+)"/)
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)

  return {
    title: titleMatch ? decodeEntities(titleMatch[1].replace(/<[^>]+>/g, '')) : '',
    metaTitle: getMeta(html, 'og:title'),
    description: getMeta(html, 'description'),
    author: authorMatch ? decodeEntities(authorMatch[1]) : 'Soltree Engineering Team',
    wordCount: wordCountMatch ? Number(wordCountMatch[1]) : 0,
    articleHtml,
  }
}

function tsString(value) {
  return `\`${value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')}\``
}

async function main() {
  const entries = []

  for (const slug of slugs) {
    const url = `https://www.elesoltree.com/blog/${slug}`
    process.stdout.write(`Fetching ${slug}... `)
    const html = await fetchUrl(url)
    const post = extractPost(html)
    entries.push([slug, post])
    console.log(`${post.articleHtml.length} chars`)
  }

  const body = entries
    .map(([slug, post]) => {
      return `  ${JSON.stringify(slug)}: {
    title: ${tsString(post.title)},
    metaTitle: ${tsString(post.metaTitle)},
    description: ${tsString(post.description)},
    author: ${tsString(post.author)},
    wordCount: ${post.wordCount},
    articleHtml: ${tsString(post.articleHtml)},
  },`
    })
    .join('\n')

  const output = `export type BlogDetailContent = {
  title: string
  metaTitle: string
  description: string
  author: string
  wordCount: number
  articleHtml: string
}

export const BLOG_DETAIL_CONTENT: Readonly<Record<string, BlogDetailContent>> = {
${body}
} as const
`

  fs.writeFileSync(path.join(process.cwd(), 'lib', 'blog-detail-content.ts'), output)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
