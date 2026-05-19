export const SITE_NAME = 'UPprocure'

export const SITE_DESCRIPTION =
  'UPprocure supplies low-voltage electrical protection products for distributors, panel builders, system integrators, and project contractors.'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.upprocure.com'

export const DEFAULT_OG_IMAGE = '/images/company-exterior.jpg'

export const DEFAULT_KEYWORDS = [
  'circuit breaker',
  'surge protector',
  'DC fuse holder',
  'power meter',
  'ATS dual power switch',
  'PV combiner box',
]
