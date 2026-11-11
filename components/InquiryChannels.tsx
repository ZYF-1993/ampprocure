import InquiryActions from '@/components/InquiryActions'
import InquiryForm from '@/components/InquiryForm'

type InquiryChannelsProps = {
  id?: string
  source: string
  topic: string
  heading?: string
  description?: string
}

export default function InquiryChannels({
  id = 'rfq',
  source,
  topic,
  heading = 'Request a quote',
  description = 'Choose email, the RFQ form, or WhatsApp. Include the model, quantity, destination market, and any certification requirements.',
}: InquiryChannelsProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-tight text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">{description}</p>
      <div className="mt-5">
        <InquiryActions topic={topic} formHref={`#${id}-form`} />
      </div>
      <div id={`${id}-form`} className="mt-6 scroll-mt-24 border-t border-gray-100 pt-6">
        <h3 className="text-base font-semibold text-gray-900">RFQ form</h3>
        <p className="mb-4 mt-1 text-xs text-gray-500">Fields marked * are required. This request is emailed to the sales team.</p>
        <InquiryForm
          source={source}
          defaultProduct={topic}
          submitLabel="Send RFQ"
          twoColumnOnDesktop
          showInquiryType
          redirectOnSuccess="/thank-you"
        />
      </div>
    </section>
  )
}
