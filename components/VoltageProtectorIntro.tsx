import type { ReactNode } from 'react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  inquiryMailto,
  inquiryMessage,
  whatsappHref,
} from '@/lib/site-config'

type ModelDetail = readonly [model: string, description: string]

const PN2_DETAILS: readonly ModelDetail[] = [
  ['PN2-VA4', 'Housing and packaging logo version.'],
  ['PN2-VA5', 'Puts a logo on the display.'],
  ['PN2-VAK', 'Adds kWh.'],
  ['PN2-VAFD', 'Shows voltage, current, power, frequency, and kWh.'],
]

const CZVA_DETAILS: readonly ModelDetail[] = [
  [
    'CZVA1',
    'Adjustable (over-voltage 230–300V, under-voltage 140–210V) with a digital display, in EU, UK, and South Africa plugs, rated 2300W / 10A.',
  ],
  ['CZVA2', 'Fixed cutoffs at 165V±5V and 265V±5V, in 10A and 13A versions.'],
  ['CZVA3', 'EU 16A / 3680W socket with voltage and current on the display and over-current protection.'],
]

const STATS_DETAILS: readonly ModelDetail[] = [
  [
    'STATS-06',
    'AC 380V 3-phase 4-wire protector, 63A or 100A, with a color display and over/under voltage, over-current, phase-loss, open-neutral, phase-sequence, and unbalance protection.',
  ],
  ['STATS-03, STATS-04, and STATS-05', '3-way automatic transfer switches with voltage displays.'],
]

function ModelDetails({ models, stacked = false }: { models: readonly ModelDetail[]; stacked?: boolean }) {
  const rowClass = stacked ? '' : 'sm:grid sm:grid-cols-[minmax(0,6rem)_minmax(0,1fr)] sm:gap-x-3'

  return (
    <dl className="mt-2 space-y-2">
      {models.map(([model, description]) => (
        <div key={model} className={rowClass}>
          <dt className="font-semibold text-slate-900">{model}</dt>
          <dd>{description}</dd>
        </div>
      ))}
    </dl>
  )
}

function QuotePanel({ topic }: { topic: string }) {
  const actions = [
    {
      channel: 'Email inquiry',
      label: 'Email sales',
      detail: CONTACT_EMAIL,
      href: inquiryMailto(`RFQ: ${topic}`),
    },
    {
      channel: 'RFQ form',
      label: 'Send a quotation request',
      detail: 'Model, quantity, and destination',
      href: '#category-rfq-form',
    },
    {
      channel: 'WhatsApp',
      label: 'Chat with sales',
      detail: CONTACT_PHONE_DISPLAY,
      href: whatsappHref(inquiryMessage(topic)),
      newTab: true,
    },
  ]

  return (
    <aside aria-labelledby="voltage-quote-heading" className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <h2 id="voltage-quote-heading" className="text-lg font-semibold text-slate-900">Request a Quote</h2>
      <p className="mt-2 text-[0.9375rem] leading-6 text-slate-600">
        For a factory or supplier quote, include the model and current rating.
      </p>
      <ul className="mt-4 divide-y divide-slate-200 border-t border-slate-200">
        {actions.map(({ channel, label, detail, href, newTab }) => (
          <li key={channel}>
            <a
              href={href}
              target={newTab ? '_blank' : undefined}
              rel={newTab ? 'noopener noreferrer' : undefined}
              className="flex min-h-11 flex-col justify-center rounded-sm px-2 py-2 text-sm leading-5 hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <span className="text-slate-600">{channel}</span>
              <span className="font-semibold text-green-700 underline underline-offset-2">{label}</span>
              <span className="text-slate-600">{detail}</span>
              {newTab && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default function VoltageProtectorIntro({ title, lead, topic }: { title: ReactNode; lead: string; topic: string }) {
  return (
    <div id="voltage-protector-intro" className="wrap-anywhere">
      <header>
        {title}
        <p className="mt-4 max-w-[66ch] text-base leading-7 text-slate-600">{lead}</p>
      </header>

      <div className="mt-6 grid grid-cols-[minmax(0,1fr)] items-start gap-6 min-[60rem]:grid-cols-[minmax(0,1fr)_17.5rem] min-[60rem]:gap-8 min-[75rem]:grid-cols-[minmax(0,1fr)_19rem] min-[75rem]:gap-10">
        <div className="min-w-0 max-w-[68ch] text-[0.9375rem] leading-6 text-slate-600 tabular-nums">
          <section aria-labelledby="voltage-pn2-heading" className="border-t border-slate-200 py-3">
            <h2 id="voltage-pn2-heading" className="text-base font-semibold text-slate-900">DIN-Rail PN2 Series</h2>
            <p className="mt-1 font-medium text-slate-900">PN2-VA2, PN2-VA3, PN2-VA4, PN2-VA5, PN2-VAK, and PN2-VAFD</p>
            <p className="mt-1">Self-resetting, with a digital display and over-current protection, in 40A, 63A, and 80A options.</p>
            <ModelDetails models={PN2_DETAILS} />
          </section>

          <section aria-labelledby="voltage-czva-heading" className="border-t border-slate-200 py-3">
            <h2 id="voltage-czva-heading" className="text-base font-semibold text-slate-900">Plug-In Sockets (CZVA)</h2>
            <ModelDetails models={CZVA_DETAILS} />
          </section>

          <section aria-labelledby="voltage-stats-heading" className="border-t border-slate-200 py-3">
            <h2 id="voltage-stats-heading" className="text-base font-semibold text-slate-900">3-Phase Protector &amp; 3-Way Transfer Switches (STATS)</h2>
            <ModelDetails models={STATS_DETAILS} stacked />
          </section>

          <div role="note" className="mt-1 border-s-2 border-slate-300 bg-slate-50 px-3 py-2">
            <p className="font-semibold text-slate-900">AC Devices</p>
            <p>These protectors are AC devices. DC breakers are under Circuit Breaker, and DC combiner boxes are under PV Combiner Box.</p>
          </div>
        </div>

        <QuotePanel topic={topic} />
      </div>
    </div>
  )
}
