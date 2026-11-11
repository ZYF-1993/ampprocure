import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MobileInquiryBar from '@/components/MobileInquiryBar'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import WhatsAppChat from '@/components/WhatsAppChat'
import I18nRuntime from '@/components/I18nRuntime'
import { CANONICAL_ORIGIN } from '@/lib/seo'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, DEFAULT_KEYWORDS, DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_LOGO, SITE_NAME } from '@/lib/site-config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_ORIGIN),
  other: {
    google: 'notranslate',
  },
  icons: {
    icon: [
      { url: '/branding/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/branding/favicon-32.png', rel: 'shortcut icon', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/branding/apple-touch-icon.png', sizes: '180x180' }],
  },
  title: {
    default: `${SITE_NAME} | Electrical Protection Products Supplier`,
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
    title: `${SITE_NAME} | Electrical Protection Products Supplier`,
    description: SITE_DESCRIPTION,
    url: CANONICAL_ORIGIN,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'upprocure electrical protection products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Electrical Protection Products Supplier`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  legalName: 'Wenzhou Xingliu Gongju Youxian Gongsi',
  url: CANONICAL_ORIGIN,
  logo: `${CANONICAL_ORIGIN}${SITE_LOGO}`,
  image: `${CANONICAL_ORIGIN}${DEFAULT_OG_IMAGE}`,
  description:
    'Based in Liushi, Wenzhou (the capital of electrical appliances), UPprocure is a premier global sourcing and supply chain platform specializing in professional industrial electrical protection, power metering, and distribution safety solutions.',
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_DISPLAY,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 24, Lane 3, Ouchao South Road, Huanghua Village, Liushi Town',
    addressLocality: 'Yueqing City, Wenzhou',
    addressRegion: 'Zhejiang Province',
    postalCode: '325604',
    addressCountry: 'CN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT_PHONE_DISPLAY,
    contactType: 'sales',
    email: CONTACT_EMAIL,
    availableLanguage: ['English', 'Chinese'],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: CANONICAL_ORIGIN,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${CANONICAL_ORIGIN}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" translate="no" className={`notranslate ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-white pb-24 antialiased lg:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gray-900 focus:shadow"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <I18nRuntime />
        <SiteHeader />
        <div id="main-content" className="flex flex-1 flex-col">
          {children}
        </div>
        <SiteFooter />
        <div className="hidden lg:contents">
          <WhatsAppChat />
        </div>
        <MobileInquiryBar />
      </body>
    </html>
  )
}
