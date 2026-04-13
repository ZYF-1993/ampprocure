import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  async rewrites() {
    return [
      { source: '/inquire', destination: '/contact' },
      { source: '/product/:slug*', destination: '/products' },
      { source: '/productshow/:slug*', destination: '/products' },
    ]
  },
}

export default nextConfig
