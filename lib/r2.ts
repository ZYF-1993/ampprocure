export async function createR2Client() {
  const { S3Client } = await import('@aws-sdk/client-s3')
  const r2Endpoint =
    process.env.R2_ENDPOINT ?? `https://${process.env.R2_ACCOUNT_ID ?? ''}.r2.cloudflarestorage.com`
  return new S3Client({
    region: 'auto',
    endpoint: r2Endpoint,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? '',
    },
  })
}
