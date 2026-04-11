import { PutObjectCommand } from '@aws-sdk/client-s3'
import { NextResponse } from 'next/server'
import { r2 } from '@/lib/r2'

export async function POST(request: Request) {
  try {
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

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const safeName = file.name.replace(/[^\w.-]+/g, '_')
    const uniqueFilename = `${Date.now()}-${safeName}`

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: uniqueFilename,
      Body: buffer,
      ContentType: file.type || 'application/octet-stream',
    })

    await r2.send(command)

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully.',
      fileName: uniqueFilename,
      url: `${publicBaseUrl}/${uniqueFilename}`,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown upload error'
    console.error('Upload failed:', error)
    return NextResponse.json({ error: `Upload failed: ${message}` }, { status: 500 })
  }
}
