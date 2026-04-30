import type { Metadata } from 'next'
import './globals.css'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import I18nRuntime from '@/components/I18nRuntime'
import { DEFAULT_KEYWORDS, DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  other: {
    google: 'notranslate',
  },
  icons: {
    icon: [
      { url: '/branding/site-favicon.png?v=3', type: 'image/png' },
      { url: '/branding/site-favicon.png?v=3', rel: 'shortcut icon' },
    ],
    apple: [{ url: '/branding/site-favicon.png?v=3' }],
  },
  title: {
    default: `${SITE_NAME} | Placeholder Website`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Placeholder Website`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Website placeholder image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Placeholder Website`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" translate="no" className="h-full antialiased notranslate">
      <body className="min-h-full bg-white text-slate-900">
        <I18nRuntime />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
