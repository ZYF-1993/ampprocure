import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, inquiryMailto, inquiryMessage, whatsappHref } from '@/lib/site-config'

const actionClass =
  'inline-flex min-h-11 items-center justify-center rounded-lg px-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700'

export default function MobileInquiryBar() {
  return (
    <nav
      aria-label="Inquiry options"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden"
    >
      <ul className="grid grid-cols-3 gap-2">
        <li>
          <a href={inquiryMailto('Product inquiry')} className={`${actionClass} bg-gray-100 text-gray-900`}>
            Email
          </a>
        </li>
        <li>
          <a href="/contact#rfq" className={`${actionClass} bg-green-700 text-white`}>
            RFQ form
          </a>
        </li>
        <li>
          <a
            href={whatsappHref(inquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className={`${actionClass} bg-[#075E54] text-white`}
          >
            WhatsApp
          </a>
        </li>
      </ul>
      <p className="sr-only">
        Email {CONTACT_EMAIL} or WhatsApp {CONTACT_PHONE_DISPLAY}.
      </p>
    </nav>
  )
}
