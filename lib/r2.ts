import { S3Client } from "@aws-sdk/client-s3";

// 创建 R2 客户端连接器
export const r2 = new S3Client({
  region: "auto",
  // 这里的 endpoint 就是你在 Cloudflare 看到的那个网址
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});