import type { NextConfig } from 'next'

const r2PublicUrl = process.env.R2_PUBLIC_URL?.replace(/\/$/, '')
const useR2Assets = process.env.USE_R2_ASSETS === 'true' || process.env.VERCEL === '1'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, '')

if (useR2Assets && !r2PublicUrl) {
  throw new Error('R2_PUBLIC_URL is required when deploying with remote static assets.')
}

const connectSources = ["'self'"]

if (supabaseUrl) {
  const supabaseHost = new URL(supabaseUrl).host
  connectSources.push(supabaseUrl, `wss://${supabaseHost}`)
}

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src ${connectSources.join(' ')}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  process.env.NODE_ENV === 'production' ? 'upgrade-insecure-requests' : '',
].filter(Boolean).join('; ')

const remoteAssetRewrites = r2PublicUrl && useR2Assets
  ? ['products', 'blog', 'solutions', 'banner'].map((directory) => ({
      source: `/images/${directory}/:path*`,
      destination: `${r2PublicUrl}/images/${directory}/:path*`,
    }))
  : []

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  poweredByHeader: false,

  // These packages are loaded from node_modules at runtime (not bundled by webpack).
  // This prevents their entire dependency trees from being inlined into function bundles.
  serverExternalPackages: [
    '@aws-sdk/client-s3',
    '@supabase/supabase-js',
    'resend',
  ],

  // Exclude build-time-only binaries from serverless function bundles.
  // @next/swc-* are compiler binaries (~130 MB each) required only during
  // `next build`, never at runtime. Without this, Vercel bundles them into
  // every serverless function and exceeds the 250 MB uncompressed limit.
  // Key must be a route glob (e.g. '/*'), values must start with './' per docs.
  outputFileTracingExcludes: {
    '/*': [
      './public/images/**',
      './node_modules/@next/swc-linux-x64-gnu/**/*',
      './node_modules/@next/swc-linux-x64-musl/**/*',
      './node_modules/@next/swc-win32-x64-msvc/**/*',
      './node_modules/@next/swc-darwin-x64/**/*',
      './node_modules/@next/swc-darwin-arm64/**/*',
      './node_modules/@img/**/*',
      './node_modules/typescript/**/*',
      './node_modules/eslint/**/*',
      './node_modules/@typescript-eslint/**/*',
      './node_modules/eslint-plugin-react-hooks/**/*',
      './node_modules/eslint-config-next/**/*',
      './node_modules/axe-core/**/*',
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
        ],
      },
    ]
  },

  async rewrites() {
    return {
      beforeFiles: remoteAssetRewrites,
      afterFiles: [
        { source: '/inquire', destination: '/contact' },
        { source: '/product/:slug*', destination: '/products/:slug*' },
        { source: '/productshow/:slug*', destination: '/products/:slug*' },
      ],
      fallback: [],
    }
  },
}

export default nextConfig
