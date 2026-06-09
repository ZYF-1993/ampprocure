import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { HeadObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const ROOT = process.cwd()
const ASSET_DIRECTORIES = ['products', 'blog', 'solutions', 'banner']
const CONTENT_TYPES = {
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}
const CONCURRENCY = 8

function requireEnv(name) {
  const value = process.env[name]?.trim()
  if (!value) throw new Error(`${name} is required.`)
  return value
}

const accountId = requireEnv('R2_ACCOUNT_ID')
const bucketName = requireEnv('R2_BUCKET_NAME')
const client = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT || `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: requireEnv('R2_ACCESS_KEY_ID'),
    secretAccessKey: requireEnv('R2_SECRET_ACCESS_KEY'),
  },
})

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(directory, entry.name)
      return entry.isDirectory() ? collectFiles(fullPath) : [fullPath]
    })
  )
  return nested.flat()
}

async function uploadFile(filePath) {
  const fileStats = await stat(filePath)
  const relativePath = path.relative(path.join(ROOT, 'public'), filePath).replaceAll('\\', '/')
  const extension = path.extname(filePath).toLowerCase()
  const contentType = CONTENT_TYPES[extension] || 'application/octet-stream'

  try {
    const existing = await client.send(new HeadObjectCommand({ Bucket: bucketName, Key: relativePath }))
    if (existing.ContentLength === fileStats.size) {
      return { status: 'skipped', bytes: fileStats.size }
    }
  } catch (error) {
    const statusCode = error?.$metadata?.httpStatusCode
    if (statusCode && statusCode !== 404) throw error
  }

  const { readFile } = await import('node:fs/promises')
  await client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: relativePath,
      Body: await readFile(filePath),
      ContentType: contentType,
      CacheControl: 'public, max-age=31536000, immutable',
    })
  )

  return { status: 'uploaded', bytes: fileStats.size }
}

async function main() {
  const files = (
    await Promise.all(
      ASSET_DIRECTORIES.map((directory) => collectFiles(path.join(ROOT, 'public', 'images', directory)))
    )
  ).flat()

  let cursor = 0
  let uploaded = 0
  let skipped = 0
  let uploadedBytes = 0

  async function worker() {
    while (cursor < files.length) {
      const index = cursor
      cursor += 1
      const result = await uploadFile(files[index])

      if (result.status === 'uploaded') {
        uploaded += 1
        uploadedBytes += result.bytes
      } else {
        skipped += 1
      }

      const completed = uploaded + skipped
      if (completed % 25 === 0 || completed === files.length) {
        console.log(`[${completed}/${files.length}] uploaded=${uploaded} skipped=${skipped}`)
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()))
  console.log(`R2 sync complete: ${uploaded} uploaded, ${skipped} unchanged, ${(uploadedBytes / 1_048_576).toFixed(1)} MB transferred.`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
