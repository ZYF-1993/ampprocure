import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',

  // Exclude build-time-only binaries from serverless function bundles.
  // @next/swc-* are compiler binaries (~130 MB each) required only during
  // `next build`, never at runtime. Without this, Vercel bundles them into
  // every serverless function and exceeds the 250 MB uncompressed limit.
  // Key must be a route glob (e.g. '/*'), values must start with './' per docs.
  outputFileTracingExcludes: {
    '/*': [
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

  async rewrites() {
    return [
      { source: '/inquire', destination: '/contact' },
      { source: '/product/:slug*', destination: '/products' },
      { source: '/productshow/:slug*', destination: '/products' },
    ]
  },
}

export default nextConfig
