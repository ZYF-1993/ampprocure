import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import WhatsAppChat from '@/components/WhatsAppChat'
import I18nRuntime from '@/components/I18nRuntime'
import { CONTACT_EMAIL, DEFAULT_KEYWORDS, DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_LOGO, SITE_NAME, SITE_URL } from '@/lib/site-config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

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
    url: SITE_URL,
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
  url: SITE_URL,
  logo: `${SITE_URL}${SITE_LOGO}`,
  image: `${SITE_URL}/images/company-exterior.jpg`,
  description:
    'Based in Liushi, Wenzhou (the capital of electrical appliances), UPprocure is a premier global sourcing and supply chain platform specializing in professional industrial electrical protection, power metering, and distribution safety solutions.',
  email: CONTACT_EMAIL,
  telephone: '+86-13552727303',
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
    telephone: '+86-13552727303',
    contactType: 'sales',
    email: CONTACT_EMAIL,
    availableLanguage: ['English', 'Chinese'],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" translate="no" className={`notranslate scroll-smooth ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-white antialiased">
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
        {children}
        <SiteFooter />
        <WhatsAppChat />
      </body>
    </html>
  )
}
