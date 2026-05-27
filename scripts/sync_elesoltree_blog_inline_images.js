const fs = require('fs')
const https = require('https')
const path = require('path')

const contentPath = path.join(process.cwd(), 'lib', 'blog-detail-content.ts')
const outputDir = path.join(process.cwd(), 'public', 'images', 'blog')
const content = fs.readFileSync(contentPath, 'utf8')
const urls = [...new Set([...content.matchAll(/src="(\/images\/blog\/[^"]+)"/g)].map((match) => match[1]))]

function download(url, target) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          resolve(download(new URL(res.headers.location, url).toString(), target))
          return
        }

        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`))
          res.resume()
          return
        }

        const file = fs.createWriteStream(target)
        res.pipe(file)
        file.on('finish', () => {
          file.close(resolve)
        })
      })
      .on('error', reject)
  })
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true })

  for (const src of urls) {
    const filename = path.basename(src)
    const target = path.join(outputDir, filename)

    if (fs.existsSync(target)) {
      console.log(`Exists ${filename}`)
      continue
    }

    const url = `https://www.upprocure.com${src}`
    process.stdout.write(`Downloading ${filename}... `)
    try {
      await download(url, target)
      console.log('done')
    } catch (error) {
      console.log(`skipped (${error.message})`)
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
