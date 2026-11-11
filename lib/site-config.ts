export const SITE_NAME = 'UPprocure'

export const SITE_DESCRIPTION =
  'UPprocure supplies low-voltage electrical protection products for distributors, panel builders, system integrators, and project contractors.'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.upprocure.com'

export const DEFAULT_OG_IMAGE = '/optimized/display/images/company-exterior.webp'
export const SITE_LOGO = '/optimized/thumb/branding/site-logo.webp'
export const CONTACT_EMAIL = 'sales@upprocure.com'
export const CONTACT_PHONE = '+8613552727303'
export const CONTACT_PHONE_DISPLAY = '+86-13552727303'
export const CONTACT_WHATSAPP_E164 = '8613552727303'

export const DEFAULT_KEYWORDS = [
  'circuit breaker',
  'surge protector',
  'DC fuse holder',
  'power meter',
  'ATS dual power switch',
  'PV combiner box',
]

export function inquiryMailto(subject: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}

export function whatsappHref(message: string): string {
  return `https://wa.me/${CONTACT_WHATSAPP_E164}?text=${encodeURIComponent(message)}`
}

export function inquiryMessage(topic?: string): string {
  if (topic && topic.trim()) {
    return `Hello UPprocure, I would like a quote for ${topic.trim()}.`
  }
  return 'Hello UPprocure, I would like to inquire about your electrical products.'
}

/**
 * TODO(owner): add public profile URLs (LinkedIn, Alibaba, or similar) before
 * they are placed in Organization sameAs. None are in the repo today.
 * TODO(owner): upload current ISO 9001, CE, and CCC certificate PDFs and their
 * certificate numbers. The site shows certification names already published
 * on the pages, but not downloadable documents.
 * TODO(owner): confirm published MOQ and typical lead time per category if
 * those figures should appear next to the RFQ form.
 */
export const OWNER_CONTENT_TODOS = [
  'Public social or marketplace profile URLs for Organization sameAs.',
  'Downloadable ISO 9001, CE, and CCC certificate files with certificate numbers.',
  'Confirmed MOQ and lead-time figures per category.',
] as const
