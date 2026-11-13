import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import InquiryActions from '@/components/InquiryActions'
import InquiryForm from '@/components/InquiryForm'
import OptimizedImage from '@/components/OptimizedImage'
import { absoluteOptimizedSrc } from '@/lib/optimized-image'
import { buildPageMetadata, jsonLdScript } from '@/lib/seo'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, inquiryMailto, inquiryMessage, SITE_NAME, SITE_URL, whatsappHref } from '@/lib/site-config'

const imageBase = '/images/solutions/22mm-digital-display-indicator'
const pagePath = '/solutions/22mm-digital-display-indicator'
const topic = '22mm digital display indicator'

export const metadata = buildPageMetadata({
  title: '22mm Digital Display Indicators',
  description:
    '22mm digital display indicators for voltage, current, frequency and temperature. SA50, SA60 and ED16-22 meters for control cabinets. Request a quote.',
  path: pagePath,
  keywords: [
    '22mm digital display indicator',
    '22mm digital panel meter',
    'panel voltmeter ammeter',
    'frequency meter 22mm',
    'SA50 SA60 digital indicator',
    'ED16-22 signal light with meter',
    'control cabinet panel meter',
  ],
  ogImage: '/optimized/display/images/solutions/22mm-digital-display-indicator/hero.webp',
})

const saOutline = 'Front projection 10.5 mm, body behind the panel 40 mm, mounting hole 22.5 mm. Display colour shown: red.'

const sa50Models = [
  { model: 'SA50V', name: 'new type Voltmeter', range: '50–500 V', photo: 'sa50v-photo.jpg', drawing: 'sa50v-dimensions.jpg' },
  { model: 'SA50A', name: 'new type Ammeter', range: '0–100 A', photo: 'sa50a-photo.jpg', drawing: 'sa50a-dimensions.jpg' },
  { model: 'SA50HZ', name: 'new type Hertz meter', range: '30–100 Hz', photo: 'sa50hz-photo.jpg', drawing: 'sa50hz-dimensions.jpg' },
  { model: 'SA50AV', name: 'Voltmeter & Ammeter', range: '50–500 V, 0–100 A', photo: 'sa50av-photo.jpg', drawing: 'sa50av-dimensions.jpg' },
  { model: 'SA50AVHZ', name: 'Voltmeter & Ammeter & Hz meter', range: '50–500 V, 0–100 A, 30–100 Hz', photo: 'sa50avhz-photo.jpg', drawing: 'sa50avhz-dimensions.jpg' },
] as const

const sa60Models = [
  { model: 'SA60V', name: 'new type Voltmeter', range: '50–500 V', photo: 'sa60v-photo.jpg', drawing: 'sa60v-dimensions.jpg' },
  { model: 'SA60A', name: 'new type Ammeter', range: '0–100 A', photo: 'sa60a-photo.jpg', drawing: 'sa60a-dimensions.jpg' },
  { model: 'SA60HZ', name: 'new type Hertz meter', range: '30–100 Hz', photo: 'sa60hz-photo.jpg', drawing: 'sa60hz-dimensions.jpg' },
  { model: 'SA60AV', name: 'Voltmeter & Ammeter', range: '50–500 V, 0–100 A', photo: 'sa60av-photo.jpg', drawing: 'sa60av-dimensions.jpg' },
  { model: 'SA60AVHZ', name: 'Voltmeter & Ammeter & Hz meter', range: '50–500 V, 0–100 A, 30–100 Hz', photo: 'sa60avhz-photo.jpg', drawing: 'sa60avhz-dimensions.jpg' },
] as const

const ed16Models = [
  { model: 'ED16-22VD', description: 'Voltmeter (V)', range: 'AC 30–500 V', photo: 'ed16-22vd-photo.jpg', note: '' },
  { model: 'ED16-22HZ', description: 'Frequency meter (Hz)', range: 'AC 35–99 Hz', photo: 'ed16-22hz-photo.jpg', note: '' },
  { model: 'ED16-22AD', description: 'Ammeter (A)', range: 'AC 0–100 A', photo: 'ed16-22ad-photo.jpg', note: '' },
  { model: 'ED16-22VAD', description: 'Voltmeter + Ammeter (V+A)', range: 'AC 50–500 V, AC 0–100 A', photo: 'ed16-22vad-photo.jpg', note: '' },
  { model: 'ED16-22VD2', description: 'Voltmeter (V)', range: 'AC 30–500 V', photo: 'ed16-22vd2-photo.jpg', note: '' },
  { model: 'ED16-22HZ2', description: 'Frequency meter (Hz)', range: 'AC 35–99 H', photo: 'ed16-22hz2-photo.jpg', note: 'The catalog prints this range as “AC 35–99 H”.' },
  { model: 'ED16-22WD', description: 'Thermo Meter (°C)', range: '−25 °C to 125 °C', photo: 'ed16-22wd-photo.jpg', note: '' },
  { model: 'ED16-22AD2', description: 'Ammeter (A)', range: 'AC 0–100 A', photo: 'ed16-22ad2-photo.jpg', note: '' },
  { model: 'ED16-22FVD', description: 'Voltmeter (V)', range: 'AC 30–500 V', photo: 'ed16-22fvd-photo.jpg', note: '' },
  { model: 'ED16-22FHZ', description: 'Frequency meter (Hz)', range: 'AC 35–99 Hz', photo: 'ed16-22fhz-photo.jpg', note: '' },
  { model: 'ED16-22FAD', description: 'Ammeter (A)', range: 'AC 0–100 A', photo: 'ed16-22fad-photo.jpg', note: '' },
  { model: 'ED16-22FVAD', description: 'Voltmeter + Ammeter (V+A)', range: 'AC 50–500 V, AC 0–100 A', photo: 'ed16-22fvad-photo.jpg', note: '' },
  { model: 'ED16-22VAHZ', description: 'Voltmeter + Ammeter + Frequency meter (V+A+Hz)', range: 'AC 50–500 V, AC 0–100 A, AC 35–99 Hz', photo: 'ed16-22vahz-photo.jpg', note: '' },
  {
    model: 'ED16-22VAWD',
    description: 'Voltmeter + Ammeter + Thermometer (V+A+°C)',
    range: 'AC 50–500 V, AC 0–100 A, and a third line printed AC 35–99 Hz',
    photo: 'ed16-22vawd-photo.jpg',
    note: 'The description is voltmeter + ammeter + thermometer, while the third printed range line is AC 35–99 Hz. Confirm the third parameter before ordering.',
  },
] as const

const workingConditions = [
  ['Ambient temperature', '−25 °C to +55 °C'],
  ['Relative humidity', '≤ 98%'],
  ['Pollution degree', 'Pollution degree 3'],
  ['Installation category', 'Installation category / group III'],
  ['Damp-heat', 'Models marked “TH” can work in a damp-heat environment'],
] as const

const technicalData = [
  ['Power-frequency withstand voltage', '2.5 kV AC (rms), 1 min'],
  ['Insulation resistance', '≥ 2 MΩ'],
  ['Allowable voltage fluctuation', '±20%'],
  ['Continuous operating life', '≥ 30,000 H (with lamp / illuminated)'],
  ['Head protection degree', 'IP40 (head)'],
  ['Applying frequency', 'AC 50–60 Hz'],
] as const

const selectionRows = [
  ['Voltage only', 'SA50V (50–500 V)', 'SA60V (50–500 V)', 'ED16-22VD / VD2 / FVD (AC 30–500 V)'],
  ['Current only', 'SA50A (0–100 A)', 'SA60A (0–100 A)', 'ED16-22AD / AD2 / FAD (AC 0–100 A)'],
  ['Frequency only', 'SA50HZ (30–100 Hz)', 'SA60HZ (30–100 Hz)', 'ED16-22HZ / FHZ (AC 35–99 Hz). ED16-22HZ2 is printed as AC 35–99 H.'],
  ['Voltage + current', 'SA50AV', 'SA60AV', 'ED16-22VAD / FVAD'],
  ['Voltage + current + frequency', 'SA50AVHZ', 'SA60AVHZ', 'ED16-22VAHZ'],
  ['Temperature only', '—', '—', 'ED16-22WD (−25 °C to 125 °C)'],
  ['Voltage + current + temperature', '—', '—', 'ED16-22VAWD. Confirm the third parameter: the description is a thermometer, and the third printed range line is AC 35–99 Hz.'],
] as const

const catalogApplications = [
  'Industrial monitoring',
  'Energy monitoring and energy management',
  'Scientific research',
  'Daily equipment monitoring',
  'Industrial automation',
] as const

const relatedLinks = [
  { href: '/categories/power-meter', label: 'Power meters', text: 'DIN-rail energy and multi-parameter meters for kWh billing and logging.' },
  { href: '/categories/over-voltage-protector', label: 'Over-voltage protectors', text: 'Self-resetting over/under-voltage protection for the same cabinets.' },
  { href: '/categories/ats-dual-power-switch', label: 'ATS dual power switches', text: 'Automatic transfer switches for mains and generator panels.' },
  { href: '/categories/circuit-breaker', label: 'Circuit breakers', text: 'Miniature circuit breakers for distribution and machine panels.' },
  { href: '/categories/pv-combiner-box', label: 'PV combiner boxes', text: 'PV combiner boxes already listed for solar array projects.' },
  { href: '/categories/wifi-smart-low-voltage-device', label: 'WiFi smart low-voltage devices', text: 'Related monitoring and control devices already listed on the site.' },
  { href: '/products/D52-2066', label: 'D52-2066 power meter', text: 'A DIN-rail 6-in-1 AC power monitor already listed on this site.' },
  { href: '/products/PN2-VA4', label: 'PN2-VA4 voltage protector', text: 'A self-resetting voltage protector already listed on this site.' },
  { href: '/solutions/metal-push-button', label: 'Metal push button solutions', text: 'Anti-vandal metal push buttons for 12, 16, 19, 22 and 25 mm panel cutouts.' },
  { href: '/solutions/aerosol-fire-extinguisher', label: 'Aerosol fire extinguisher solutions', text: 'Cabinet fire suppression, listed as a separate solution.' },
  { href: '/contact', label: 'Contact / RFQ', text: 'Send a quotation request from the contact page.' },
] as const

const faqs = [
  [
    'What is a 22mm digital display indicator?',
    'It is a panel-mounted electronic measuring instrument that converts analog electrical signals into a digital readout. The SA50/SA60 series is described as a real-time display of voltage and current for industrial monitoring, energy monitoring and energy management, scientific research, daily equipment monitoring, and industrial automation. The meters mount through a standard 22 mm panel hole. The SA drawings specify a 22.5 mm mounting hole, in the same style as a signal lamp.',
  ],
  [
    'What is the difference between SA50, SA60 and ED16-22?',
    'All three are 22 mm-mount digital indicators. SA50 has a 51 mm square bezel. SA60 has a 60 mm square bezel. Both share a 22.5 mm hole, 10.5 mm front projection, 40 mm body depth, and the same ranges: 50–500 V, 0–100 A, and 30–100 Hz. ED16-22 is a signal-light style meter in round or rectangular heads, with red, green, yellow, blue, and white colour options, different voltage and frequency spans, and a thermometer model. Outline dimensions for ED16-22 are not given in the catalog.',
  ],
  [
    'Which model should I choose for voltage, current and frequency together?',
    'Use SA50AVHZ or SA60AVHZ (50–500 V, 0–100 A, 30–100 Hz) for the square SA bezel, or ED16-22VAHZ (AC 50–500 V, AC 0–100 A, AC 35–99 Hz) for the ED16-22 head. For one or two parameters, use the selection guide on this page.',
  ],
  [
    'What are the working conditions and the IP rating?',
    'For SA50 and SA60, the catalog states ambient temperature −25 °C to +55 °C, relative humidity ≤ 98%, pollution degree 3, installation category III, and head protection IP40. Models marked “TH” can work in a damp-heat environment. Vibration wording is inconsistent between the catalog languages, so it is not listed here as a rating. Working conditions and IP rating are not listed for ED16-22.',
  ],
  [
    'How is the 0–100 A current range measured? Is a current transformer included?',
    'The catalog lists 0–100 A for SA50/SA60 and AC 0–100 A for ED16-22. It does not say whether the input is direct, a shunt, or an external current transformer, and it does not list a CT ratio. Confirm the current-input method, wiring, and any current transformer with the enquiry.',
  ],
  [
    'Which certificates can you provide?',
    'Product-level certificates are not printed on the SA50, SA60, or ED16-22 catalog pages. Product-level certificates for these digital display indicators are available on request. Share your target market and we will confirm the applicable documents before order.',
  ],
] as const

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${pagePath}#webpage`,
      url: `${SITE_URL}${pagePath}`,
      name: '22mm Digital Display Indicator Solutions',
      description:
        '22mm digital display indicators for voltage, current, frequency and temperature. SA50, SA60 and ED16-22 meters for control cabinets. Request a quote.',
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    },
    {
      '@type': 'ItemList',
      name: '22mm digital display indicators',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'SA50 22mm Digital Display Indicator',
          url: `${SITE_URL}${pagePath}#sa50`,
          image: absoluteOptimizedSrc(`${imageBase}/sa50v-photo.jpg`),
          description: '51 mm-bezel, 22.5 mm-cutout digital indicators for 50-500 V, 0-100 A and 30-100 Hz, in single- and multi-parameter models.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'SA60 22mm Digital Display Indicator',
          url: `${SITE_URL}${pagePath}#sa60`,
          image: absoluteOptimizedSrc(`${imageBase}/sa60v-photo.jpg`),
          description: '60 mm-bezel, 22.5 mm-cutout digital indicators with the same voltage, current and frequency ranges as the SA50 series.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'ED16-22 Signal Light with Meter',
          url: `${SITE_URL}${pagePath}#ed16-22`,
          image: absoluteOptimizedSrc(`${imageBase}/ed16-22vd-photo.jpg`),
          description: '22 mm signal-light style digital indicators for AC voltage, current, frequency and temperature, with red, green, yellow, blue and white colour options.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">{title}</h2>
      {text ? <p className="mt-3 text-base leading-7 text-gray-500">{text}</p> : null}
      <div className="mx-auto mt-4 h-0.5 w-12 rounded bg-green-600" />
    </div>
  )
}

function SpecTable({ caption, rows }: { caption: string; rows: readonly (readonly [string, string])[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="min-w-full text-left text-sm">
        <caption className="border-b border-gray-100 px-5 py-4 text-left text-base font-semibold text-gray-950">{caption}</caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-gray-100 last:border-0">
              <th scope="row" className="w-2/5 px-5 py-3 align-top font-medium text-gray-900">{label}</th>
              <td className="px-5 py-3 text-gray-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ModelCards({
  models,
}: {
  models: readonly { model: string; name: string; range: string; photo: string; drawing: string }[]
}) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {models.map((item) => (
        <article key={item.model} className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="relative h-52 bg-white">
            <OptimizedImage src={`${imageBase}/${item.photo}`} alt={`${item.model} ${item.name}`} fill className="object-contain p-4" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="flex flex-1 flex-col border-t border-gray-100 p-5">
            <h4 className="text-base font-bold text-gray-950">{item.model}</h4>
            <p className="mt-1 text-sm text-gray-600">{item.name}</p>
            <p className="mt-3 text-sm font-medium text-gray-900">Range: {item.range}</p>
            <div className="relative mt-4 h-40 rounded-xl bg-gray-50">
              <OptimizedImage src={`${imageBase}/${item.drawing}`} alt={`${item.model} outline drawing`} fill className="object-contain p-3" sizes="(max-width: 640px) 100vw, 320px" />
            </div>
            <Link href="#contact-form" className="mt-5 inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800">
              Get Quote
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default function DigitalDisplayIndicatorSolutionPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(pageJsonLd) }} />

      <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-24">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            tone="inverse"
            items={[
              { name: 'Home', href: '/', path: '/' },
              { name: 'Solutions', href: '/solutions', path: '/solutions' },
              { name: '22mm Digital Display Indicators', path: pagePath },
            ]}
          />
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-xl flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-400">Control Cabinet Monitoring</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">22mm Digital Display Indicator Solutions</h1>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                22mm digital display indicators that convert analog electrical signals into a clear digital readout. The SA50, SA60 and ED16-22 families mount in a standard 22 mm panel hole and display voltage, current, frequency and — on selected ED16-22 models — temperature, as single- or multi-parameter meters for control cabinets and equipment monitoring.
              </p>
              <div className="mt-8">
                <InquiryActions topic={topic} formHref="#contact-form" tone="dark" />
              </div>
            </div>
            <div className="w-full shrink-0 lg:w-[460px] xl:w-[540px]">
              <div className="relative h-[300px] overflow-hidden rounded-3xl bg-white shadow-2xl sm:h-[340px]">
                <OptimizedImage src={`${imageBase}/hero.jpg`} alt="SA50 and SA60 22mm digital display indicators" fill priority className="object-contain p-3" sizes="(max-width: 1024px) 100vw, 540px" />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                Family photograph of the SA50/SA60 range. Sellable models on this page are the ones in the selection tables. A colour multi-parameter face in the photograph is not listed in those tables.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Applications"
            title="When a pilot-light cutout is enough"
            text="A compact live display of voltage, current, or frequency, without reserving a full DIN-rail meter module."
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-gray-950">The panel requirement</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                In low-voltage cabinets and equipment panels, buyers often need a compact, at-a-glance reading of voltage, current, or frequency without reserving a full DIN-rail meter module. A conventional energy meter is the right tool for kWh billing and multi-parameter logging. A 22mm digital indicator is the right tool when the panel already has a pilot-light cutout and the operator only needs a live display.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-950">Catalog-stated uses</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
                {catalogApplications.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-5 text-gray-500">Listed for the SA50/SA60 series. These uses are not repeated from other lamp families.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Overview"
            title="Three 22 mm families, one mounting idea"
            text="Select the bezel style first, then the parameter set."
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-sm leading-7 text-gray-600">
            <p>
              The 22mm digital display indicator range is a family of panel-mounted electronic measuring instruments. The SA50/SA60 series converts analog electrical signals into an intuitive digital signal and provides an easy-to-read measurement of voltage and current in real time.
            </p>
            <p>
              The catalog describes SA50/SA60 as a component for modern monitoring systems and asks the buyer to balance precision, function, and cost when selecting a model. No numeric accuracy class is given in the tables.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article id="sa50" className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-950">SA50 series</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">Square 51 mm bezel, 22.5 mm mounting hole, red LED display as shown. Single or combined V / A / Hz.</p>
            </article>
            <article id="sa60" className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-950">SA60 series</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">Square 60 mm bezel, the same 22.5 mm hole and the same measurement ranges as SA50, for a larger front-of-panel readout.</p>
            </article>
            <article id="ed16-22" className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-950">ED16-22 Signal Light with Meter</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">22 mm signal-light style meters in round and rectangular heads, with colour options and additional temperature models.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Product Range" title="SA50 series" text={`51 mm square bezel. ${saOutline}`} />
          <ModelCards models={[...sa50Models]} />
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Product Range" title="SA60 series" text={`60 mm square bezel. Same measurement ranges as SA50. ${saOutline}`} />
          <ModelCards models={[...sa60Models]} />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Product Range"
            title="ED16-22 Signal Light with Meter"
            text="Marked NEW in the catalog. Colours for every model: red, green, yellow, blue, white. No outline dimensions, IP rating, or electrical withstand table is given for this sub-series."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ed16Models.map((item) => (
              <article key={item.model} className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="relative h-44 bg-slate-900">
                  <OptimizedImage src={`${imageBase}/${item.photo}`} alt={`${item.model} ${item.description}`} fill className="object-contain p-4" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm font-bold text-gray-950">{item.model}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  <p className="mt-3 text-sm font-medium text-gray-900">{item.range}</p>
                  {item.note ? <p className="mt-2 text-xs leading-5 text-gray-500">{item.note}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="specifications" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Specifications" title="SA50 / SA60 published ratings" text="Values below are the figures that agree in the catalog. Conflicting lines are omitted." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <SpecTable caption="Working conditions" rows={workingConditions} />
            <SpecTable caption="Technical data" rows={technicalData} />
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-bold text-gray-950">Not stated, or not consistent, in the catalog</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
              <li>Numeric accuracy class.</li>
              <li>Whether the 0–100 A input is direct, a shunt, or a current transformer, and any CT ratio.</li>
              <li>Auxiliary supply and wiring diagram.</li>
              <li>ED16-22 outline dimensions, IP rating, and electrical withstand.</li>
              <li>SA50/SA60 display colours other than the red display shown on the drawings.</li>
              <li>How to order the “TH” damp-heat variant.</li>
              <li>Brightness and comparative tracking index. The bilingual lines do not agree, so neither figure is published.</li>
              <li>Vibration. The bilingual lines do not agree, so no vibration rating is published.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="selection" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Selection" title="Model selection guide" />
          <ol className="mx-auto mt-10 max-w-3xl list-decimal space-y-3 pl-5 text-sm leading-7 text-gray-600">
            <li>Need the smallest pilot-light look, or a colour choice: ED16-22. Need a 51 mm square face in a 22.5 mm hole: SA50. Need a larger 60 mm face in the same hole: SA60.</li>
            <li>Choose the parameter set from the table below.</li>
            <li>ED16-22 colours: red, green, yellow, blue, or white. SA50/SA60: red display as shown. Other SA colours are not listed.</li>
            <li>SA50/SA60 environment, as stated: −25 °C to +55 °C, humidity ≤ 98%, pollution degree 3, installation category III, head IP40. Ask for the TH variant if the installation is in a damp-heat environment.</li>
            <li>When you enquire, include the model, quantity, destination, and the ED16-22 colour if you need one. Current-input method, wiring, and any current transformer are not in the catalog, so include those requirements in the enquiry.</li>
          </ol>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="min-w-[760px] w-full text-left text-sm">
              <caption className="sr-only">Parameter selection for SA50, SA60, and ED16-22</caption>
              <thead className="bg-gray-50 text-gray-900">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Need to display</th>
                  <th scope="col" className="px-4 py-3 font-semibold">SA50</th>
                  <th scope="col" className="px-4 py-3 font-semibold">SA60</th>
                  <th scope="col" className="px-4 py-3 font-semibold">ED16-22</th>
                </tr>
              </thead>
              <tbody>
                {selectionRows.map((row) => (
                  <tr key={row[0]} className="border-t border-gray-100">
                    {row.map((cell, index) => (
                      index === 0 ? (
                        <th key={`${row[0]}-${index}`} scope="row" className="px-4 py-3 align-top font-medium text-gray-900">{cell}</th>
                      ) : (
                        <td key={`${row[0]}-${index}`} className="px-4 py-3 align-top text-gray-600">{cell}</td>
                      )
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Related equipment"
            title="Works alongside other cabinet products"
            text="The list below is UPprocure site context. It is not a catalog application claim for this indicator family."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-green-600">
                <h3 className="text-sm font-bold text-gray-950">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">Documents</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Certificates on request</h2>
          <p className="mt-4 text-base leading-8 text-gray-600">
            Product-level certificates for the SA50, SA60 and ED16-22 digital display indicators are available on request. Share your target market and we will confirm the applicable documents before order.
          </p>
        </div>
      </section>

      <section className="bg-gray-700 py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Request a quote for 22mm digital display indicators</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-gray-300">
            Send the model (for example SA50AVHZ, SA60V or ED16-22VAHZ), quantity, destination, colour if you are ordering ED16-22, and any certification or OEM requirements. The same request can go by email, the form, or WhatsApp.
          </p>
          <div className="mx-auto mt-8 max-w-4xl">
            <InquiryActions topic={topic} formHref="#contact-form" tone="dark" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Questions about 22mm digital display indicators</h2>
            <div className="mx-auto mt-3 h-0.5 w-12 rounded bg-green-600" />
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section id="contact-form" className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">Contact Us</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">Send the model, quantity, and destination. The form, email, and WhatsApp all reach the same sales desk.</p>
            <div className="mt-7 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Address</p>
                <p className="mt-1 text-sm text-gray-700">No. 24, Lane 3, Ouchao South Road, Huanghua Village, Liushi Town, Yueqing City, Wenzhou, Zhejiang Province, China</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email</p>
                <a href={inquiryMailto('RFQ: 22mm digital display indicator')} className="mt-1 block text-sm text-gray-800 hover:text-green-700">{CONTACT_EMAIL}</a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Phone</p>
                <a href="tel:+8613552727303" className="mt-1 block text-sm text-gray-800 hover:text-green-700">{CONTACT_PHONE_DISPLAY}</a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">WhatsApp</p>
                <a href={whatsappHref(inquiryMessage(topic))} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-gray-800 hover:text-green-700">{CONTACT_PHONE_DISPLAY}</a>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Business Hours</h3>
                <dl className="mt-3 space-y-1.5 text-xs">
                  {['Monday – Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div key={day} className="flex justify-between">
                      <dt className="text-gray-500">{day}</dt>
                      <dd className="font-medium text-gray-800">09:00 – 22:00 CST</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-gray-400">Emails are monitored outside hours. We aim to respond within 24 hours on business days.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">Send an Enquiry</h2>
              <p className="mt-1 text-xs text-gray-500">All fields marked * are required.</p>
              <InquiryForm source="22mm-digital-display-indicator-solution" defaultProduct="22mm Digital Display Indicator" submitLabel="Send Now" twoColumnOnDesktop showInquiryType />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
