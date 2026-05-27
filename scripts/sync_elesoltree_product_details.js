const fs = require('fs/promises')
const path = require('path')

const ROOT = process.cwd()
const CATALOG_PATH = path.join(ROOT, 'lib', 'catalog-products.ts')
const OUTPUT_PATH = path.join(ROOT, 'lib', 'product-detail-content.ts')
const BASE_URL = 'https://www.upprocure.com/products'

function decodeHtml(value) {
  return value
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
}

function stripTags(value) {
  return decodeHtml(value.replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim()
}

function localizeBrand(value) {
  return value
    .replace(/\bProcure\b/g, 'UPPROCURE')
    .replace(/\bprocure\b/g, 'upprocure')
}

function extractBetween(value, startPattern, endPattern) {
  const startMatch = value.match(startPattern)
  if (!startMatch || startMatch.index === undefined) return ''
  const start = startMatch.index + startMatch[0].length
  const rest = value.slice(start)
  const endMatch = rest.match(endPattern)
  return endMatch && endMatch.index !== undefined ? rest.slice(0, endMatch.index) : rest
}

function extractDetail(html) {
  const productArea = extractBetween(html, /<section class="section">/, /<section class="border-t border-gray-100 bg-white|<footer/)
  const descriptionMatch =
    productArea.match(/<h1[^>]*>[\s\S]*?<\/h1>\s*<div class="mt-4 space-y-3 text-base leading-relaxed text-gray-600">\s*<p>([\s\S]*?)<\/p>\s*<\/div>/) ??
    productArea.match(/<h1[^>]*>[\s\S]*?<\/h1>\s*<p[^>]*>([\s\S]*?)<\/p>/)
  const description = descriptionMatch ? localizeBrand(stripTags(descriptionMatch[1])) : ''

  const featuresArea = extractBetween(productArea, /KEY FEATURES|Key Features/, /<\/ul>/)
  const features = Array.from(featuresArea.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g))
    .map((match) => localizeBrand(stripTags(match[1])))
    .filter(Boolean)

  const specsArea = extractBetween(productArea || html, /Technical Specifications/, /<\/table>/)
  const specs = Array.from(specsArea.matchAll(/<tr[^>]*>[\s\S]*?<(?:th|td)[^>]*>([\s\S]*?)<\/(?:th|td)>[\s\S]*?<td[^>]*>([\s\S]*?)<\/td>[\s\S]*?<\/tr>/g))
    .map((match) => [localizeBrand(stripTags(match[1])), localizeBrand(stripTags(match[2]))])
    .filter(([label, value]) => label && value)

  return { description, features, specs }
}

async function fetchProduct(slug) {
  const response = await fetch(`${BASE_URL}/${encodeURIComponent(slug)}`)
  if (!response.ok) {
    throw new Error(`${slug}: HTTP ${response.status}`)
  }
  const html = await response.text()
  const detail = extractDetail(html)
  if (!detail.description || detail.features.length === 0 || detail.specs.length === 0) {
    throw new Error(`${slug}: incomplete product detail extraction`)
  }
  return detail
}

async function main() {
  const catalog = await fs.readFile(CATALOG_PATH, 'utf8')
  const slugs = Array.from(catalog.matchAll(/"slug":\s*"([^"]+)"/g)).map((match) => match[1])
  const output = {}

  for (const [index, slug] of slugs.entries()) {
    process.stdout.write(`[${index + 1}/${slugs.length}] ${slug} `)
    try {
      output[slug] = await fetchProduct(slug)
      process.stdout.write('ok\n')
    } catch (error) {
      process.stdout.write(`failed: ${error.message}\n`)
    }
  }

  const source = `export type ProductDetailContent = {
  description: string
  features: readonly string[]
  specs: readonly (readonly [string, string])[]
}

export const PRODUCT_DETAIL_CONTENT = ${JSON.stringify(output, null, 2)} as const satisfies Record<string, ProductDetailContent>
`

  await fs.writeFile(OUTPUT_PATH, source)
  console.log(`Wrote ${Object.keys(output).length} product detail records to ${path.relative(ROOT, OUTPUT_PATH)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
