import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  inquiryMailto,
  inquiryMessage,
  whatsappHref,
} from '@/lib/site-config'

type InquiryActionsProps = {
  topic?: string
  formHref?: string
  tone?: 'light' | 'dark'
  layout?: 'grid' | 'stack'
}

const LIGHT_LINK =
  'flex min-h-11 flex-col items-start justify-center rounded-lg border border-gray-200 bg-white px-4 py-3 text-left transition hover:border-green-600 hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700'
const DARK_LINK =
  'flex min-h-11 flex-col items-start justify-center rounded-lg border border-white/25 bg-slate-950/85 px-4 py-3 text-left text-white transition hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

export default function InquiryActions({ topic, formHref = '/contact#rfq', tone = 'light', layout = 'grid' }: InquiryActionsProps) {
  const subject = topic ? `RFQ: ${topic}` : 'Product inquiry'
  const linkClass = tone === 'dark' ? DARK_LINK : LIGHT_LINK
  const eyebrow = tone === 'dark' ? 'text-xs font-semibold uppercase tracking-wide text-slate-200' : 'text-xs font-semibold uppercase tracking-wide text-gray-500'
  const label = tone === 'dark' ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-gray-900'
  const detail = tone === 'dark' ? 'text-xs text-slate-200' : 'text-xs text-gray-600'

  return (
    <ul className={layout === 'stack' ? 'space-y-2' : 'grid grid-cols-1 gap-3 sm:grid-cols-3'}>
      <li>
        <a href={inquiryMailto(subject)} className={linkClass}>
          <span className={eyebrow}>Email inquiry</span>
          <span className={label}>Email sales</span>
          <span className={detail}>{CONTACT_EMAIL}</span>
        </a>
      </li>
      <li>
        <a href={formHref} className={linkClass}>
          <span className={eyebrow}>RFQ form</span>
          <span className={label}>Send a quotation request</span>
          <span className={detail}>Model, quantity, and destination</span>
        </a>
      </li>
      <li>
        <a href={whatsappHref(inquiryMessage(topic))} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <span className={eyebrow}>WhatsApp</span>
          <span className={label}>Chat with sales</span>
          <span className={detail}>{CONTACT_PHONE_DISPLAY}</span>
        </a>
      </li>
    </ul>
  )
}
