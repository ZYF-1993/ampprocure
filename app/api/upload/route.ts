import { NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'
import { createR2Client } from '@/lib/r2'
import { getAuthenticatedAdmin } from '@/lib/supabase-auth'

export const runtime = 'nodejs'

const MAX_FILE_BYTES = 4_000_000
const MAX_REQUEST_BYTES = 4_500_000

function detectImage(buffer: Buffer): { extension: string; contentType: string } | null {
  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return { extension: 'jpg', contentType: 'image/jpeg' }
  }

  if (buffer.length >= 8 && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return { extension: 'png', contentType: 'image/png' }
  }

  if (buffer.length >= 12 && buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
    return { extension: 'webp', contentType: 'image/webp' }
  }

  return null
}

export async function POST(request: Request) {
  try {
    if (process.env.ADMIN_UPLOADS_ENABLED !== 'true') {
      return NextResponse.json({ error: 'Not found.' }, { status: 404 })
    }

    const user = await getAuthenticatedAdmin(request)

    if (!user) {
      return NextResponse.json({ error: 'Administrator access required.' }, { status: 403 })
    }

    const contentLength = Number(request.headers.get('content-length') ?? 0)
    if (contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json({ error: 'Upload request is too large.' }, { status: 413 })
    }

    const bucketName = process.env.R2_BUCKET_NAME
    const publicBaseUrl = process.env.R2_PUBLIC_URL

    if (!bucketName || !publicBaseUrl) {
      return NextResponse.json(
        { error: 'File upload service is not configured. Set R2_BUCKET_NAME and R2_PUBLIC_URL.' },
        { status: 500 }
      )
    }

    const formData = await request.formData()
    const file = formData.get('file')

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'No file was received in the request.' }, { status: 400 })
    }

    if (file.size === 0 || file.size > MAX_FILE_BYTES) {
      return NextResponse.json({ error: 'Images must be between 1 byte and 4 MB.' }, { status: 413 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const detectedImage = detectImage(buffer)

    if (!detectedImage) {
      return NextResponse.json({ error: 'Only JPEG, PNG, and WebP images are accepted.' }, { status: 415 })
    }

    const safeBaseName = file.name.replace(/\.[^.]+$/, '').replace(/[^\w-]+/g, '_').slice(0, 80) || 'image'
    const objectKey = `uploads/${user.id}/${randomUUID()}-${safeBaseName}.${detectedImage.extension}`

    const { PutObjectCommand } = await import('@aws-sdk/client-s3')
    const r2 = await createR2Client()

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: objectKey,
      Body: buffer,
      ContentType: detectedImage.contentType,
      CacheControl: 'public, max-age=31536000, immutable',
    })

    await r2.send(command)

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully.',
      fileName: objectKey,
      url: `${publicBaseUrl.replace(/\/$/, '')}/${objectKey}`,
    })
  } catch (error) {
    console.error('Upload failed:', error)
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500 })
  }
}
