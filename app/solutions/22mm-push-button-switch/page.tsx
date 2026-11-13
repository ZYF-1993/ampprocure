import Link from 'next/link'
import { Inter } from 'next/font/google'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import InquiryActions from '@/components/InquiryActions'
import InquiryForm from '@/components/InquiryForm'
import OptimizedImage from '@/components/OptimizedImage'
import { buildPageMetadata, jsonLdScript } from '@/lib/seo'
import { SITE_NAME, SITE_URL } from '@/lib/site-config'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const imageBase = '/images/solutions/22mm-push-button-switch'
const pagePath = '/solutions/22mm-push-button-switch'
const pageTitle = '22mm Push Button Switch Solutions'
const topic = '22mm push button switches'

const description =
  'Φ22 mm EB2M push buttons, selector switches, key switches and emergency stops. 10 A Ith, AC-15 220 V / 5 A, IP40/IP65, six colors. Request a quote.'
const intro =
  'This Φ22 mm series covers flush, mushroom, emergency-stop, key and selector operators plus double push buttons, with momentary, maintained and illuminated versions where listed. Two bodies, standard modular Type A and compact Type B, share the same electrical data: AC-15 220 V / 5 A, Ith 10 A, IP40/IP65, in six colors. Select the operator below, then send the model code as printed in the tables.'
const photoCaption = 'Product photographs from the supplier catalog. Order from the model tables below.'

const features: readonly SpecRow[] = [
  ['Φ22 mm cutout', 'Every model in both ranges is specified in the catalog for a 22 mm mounting hole.'],
  ['Ratings as printed', 'Utilization categories AC-15 / DC-13 (as defined in IEC 60947-5-1). AC-15: 36 V/10 A, 110 V/10 A, 220 V/5 A, 380 V/2.7 A, 660 V/1.8 A. DC-13: 24 V/4 A, 48 V/4 A, 110 V/2 A, 220 V/1 A, 440 V/0.6 A. Ith 10 A.'],
  ['Contacts by code', 'The model code states the contacts: the first digit is NO, the second is NC (for example -10 = 1NO, -01 = 1NC, -11 = 1NO1NC, -20 = 2NO).'],
  ['Mechanical life', 'Push buttons ≥1,000,000 operations; selector switches ≥300,000; key and emergency-stop buttons ≥50,000.'],
  ['Protection', 'IP40 / IP65 for the series. IP rating depends on operator type; confirm with your quote.'],
  ['Six colors', 'Red, green, yellow, blue, white and black (R, G, Y, B, W, K), shown per model in the tables.'],
  ['Lamp voltages', '6, 12, 24, 36, 48, 110 and 127 V AC/DC; 220 V DC; 220 V and 380 V AC.'],
  ['Symbol caps', 'Flush buttons can carry one of 12 printed symbols; custom marking is listed as available.'],
  ['Compliance', 'CE, RoHS and ISO 9001. Documentation is available on request.'],
]

export const metadata = buildPageMetadata({
  title: '22mm Push Button Switches',
  description,
  path: pagePath,
  keywords: [
    '22mm push button switch',
    '22mm selector switch',
    '22mm key switch',
    '22mm emergency stop button',
    'illuminated push button 22mm',
    'mushroom head push button',
    'double push button',
    'IP65 push button',
    'EB2M push button',
    'panel push button switch',
    'twist release emergency stop button',
    'spring return selector switch',
    'Hand-Off-Auto selector switch',
    'panel mount push button',
    'start stop double push button',
  ],
  ogImage: '/optimized/display/images/solutions/22mm-push-button-switch/hero.webp',
})

type SpecRow = readonly [string, string]

type ModelPhoto = {
  code: string
  operator: string
  color: string
}

function modelPhotos(models: readonly ModelPhoto[]) {
  return (['A', 'B'] as const).flatMap((series) => models.map(({ code, operator, color }) => ({
    series,
    model: `EB2M-${series}-${code}`,
    file: `eb2m-${series.toLowerCase()}-${code.toLowerCase().replaceAll('/', '-')}.jpg`,
    alt: `EB2M-${series}-${code} ${operator} 22mm push button, ${color}`,
  })))
}

const families = [
  {
    id: 'flush',
    title: 'Flush push buttons',
    intro: 'Momentary (-10) or maintained (-10T); illuminated -10D / -10DT. Symbol versions /FH.',
    codes: ['-10', '-10T', '-10D', '-10DT'],
    photos: modelPhotos([
      { code: '10', operator: 'flush', color: 'green' },
      { code: '10D', operator: 'illuminated flush', color: 'red' },
      { code: '10/FH', operator: 'symbol flush', color: 'yellow' },
    ]),
  },
  {
    id: 'mushroom',
    title: 'Mushroom head',
    intro: '-10M, -10MT, illuminated -10MD, -10MTD.',
    codes: ['-10M', '-10MT', '-10MD', '-10MTD'],
    photos: modelPhotos([
      { code: '10M', operator: 'mushroom head', color: 'green' },
    ]),
  },
  {
    id: 'emergency-stop',
    title: 'Emergency stop, twist release',
    intro: '-01ZS, -01ZS/A, -01ZS/B; illuminated -01DZS, -01DZS/A. Red head.',
    codes: ['-01ZS', '-01ZS/A', '-01ZS/B', '-01DZS', '-01DZS/A'],
    photos: modelPhotos([
      { code: '01ZS', operator: 'twist-release emergency stop', color: 'red' },
      { code: '01ZS/A', operator: 'twist-release emergency stop', color: 'red' },
      { code: '01ZS/B', operator: 'twist-release emergency stop', color: 'red' },
    ]),
  },
  {
    id: 'key-switch',
    title: 'Key switches',
    intro: '2-position -10Y, -10CY, -10CY/fu; 3-position -20YS, -20CYS, -20CYS/f.fu.',
    codes: ['-10Y', '-10CY', '-10CY/fu', '-20YS', '-20CYS', '-20CYS/f.fu'],
    photos: modelPhotos([
      { code: '10Y', operator: 'key switch', color: 'black' },
      { code: '10CY', operator: 'key switch', color: 'black' },
    ]),
  },
  {
    id: 'selector-short',
    title: 'Selector switches, short lever',
    intro: '-10X, -10X/fu, -20XS, -20XS/f.fu; illuminated -10XD, -10XD/fu, -20XSD, -20XSD/f.fu.',
    codes: ['-10X', '-10X/fu', '-20XS', '-20XS/f.fu', '-10XD', '-10XD/fu', '-20XSD', '-20XSD/f.fu'],
    photos: modelPhotos([
      { code: '10X', operator: 'short lever selector', color: 'black' },
      { code: '10XD', operator: 'illuminated short lever selector', color: 'green' },
    ]),
  },
  {
    id: 'selector-long',
    title: 'Selector switches, long lever',
    intro: '-10CX, -10CX/fu, -20CXS, -20CXS/f.fu; illuminated -10CXD, -10CXD/fu, -20CXSD, -20CXSD/f.fu.',
    codes: ['-10CX', '-10CX/fu', '-20CXS', '-20CXS/f.fu', '-10CXD', '-10CXD/fu', '-20CXSD', '-20CXSD/f.fu'],
    photos: modelPhotos([
      { code: '10CX', operator: 'long lever selector', color: 'black' },
      { code: '10CXD', operator: 'illuminated long lever selector', color: 'red' },
    ]),
  },
  {
    id: 'double-button',
    title: 'Double push buttons',
    intro: '-11PRG / -11PDRG (flat), -11HRG / -11HDRG (extended), -11RG / -11DRG (oval). Marking options R, R1–R7 (I/O, ON/OFF, START/STOP).',
    codes: ['-11PRG', '-11PDRG', '-11HRG', '-11HDRG', '-11RG', '-11DRG'],
    photos: modelPhotos([
      { code: '11PRG', operator: 'flat double', color: 'red/green' },
      { code: '11HRG', operator: 'extended double', color: 'red/green' },
      { code: '11RG', operator: 'oval double', color: 'red/green' },
    ]),
  },
] as const

const glossary = [
  'Momentary (spring return)',
  'Maintained (latching)',
  'Illuminated',
  'Mushroom head',
  'Emergency stop',
  'Twist release',
  'Key switch',
  'Short/long lever selector',
  'Double push button',
  'Extended button',
  'f / fu / f.fu spring return: left to center / right to center / both to center',
] as const
const omittedFromCatalog = [
  'Certificate numbers.',
  'Electrical life.',
  'Lamp type and lamp current.',
  'Price, minimum order, lead time and sample policy.',
] as const
const selectionSteps = [
  'Choose the operator: flush, mushroom, emergency stop, key, short- or long-lever selector, or double button.',
  'Choose the body: Type A standard modular body (52 × 30 mm), or Type B compact body (40 × 30 mm) where buttons are closely spaced.',
  'Choose the action: momentary, maintained, or for selectors and keys the spring-return code f, fu or f.fu.',
  'Choose contacts from the code: -10, -01, -11 or -20.',
  'If illuminated, specify the color and the lamp voltage from the printed list.',
  'In the inquiry, send the model as printed (e.g. EB2M-A-10D or EB2M-B-01ZS), color, lamp voltage, quantity and destination.',
] as const
const faqs: readonly SpecRow[] = [
  ['What is the difference between EB2M-A and EB2M-B?', 'The electrical data, operators and colors are the same. The difference is the body. EB2M-A has a standard modular body, 52 × 30 mm behind the panel with side-clip contact blocks. EB2M-B has a compact 40 × 30 mm body for tight panel spacing. Both mount in a Φ22 mm hole.'],
  ['Which contacts are available?', 'The model suffix states the contacts: -10 is 1NO, -01 is 1NC, -11 is 1NO1NC and -20 is 2NO. Emergency stops are printed as -01 (1NC); double push buttons as -11 (1NO1NC).'],
  ['Which lamp voltages can I order?', '6, 12, 24, 36, 48, 110 and 127 V AC/DC, 220 V DC, and 220 V or 380 V AC, as printed.'],
  ['Is the series IP65?', 'The series is rated IP40 / IP65. IP rating depends on operator type; confirm with your quote.'],
  ['What do f, fu and f.fu mean on selector switches?', 'They are spring-return options: f returns from left to center, fu from right to center, and f.fu from both sides to center. Codes without them are maintained.'],
  ['What is the difference between momentary and maintained (latching) push buttons?', 'A momentary push button changes its contacts only while it is pressed and springs back when released. A maintained (latching) push button stays in the pressed position until it is pressed again. In the EB2M codes, a T marks the maintained version: -10 is momentary and -10T is maintained, -10M and -10MT are the mushroom-head versions, and -10D and -10DT are the illuminated versions. Selector and key switches without f, fu or f.fu in the code are maintained.'],
  ['Which certificates can you provide?', 'CE, RoHS and ISO 9001 documentation is available on request.'],
]

const environment: readonly SpecRow[] = [
  ['Ambient', '−25 °C to +40 °C'],
  ['Altitude', '≤2000 m'],
  ['Relative humidity', '≤90%'],
  ['Pollution degree', '3'],
  ['Protection', 'IP40 / IP65'],
  ['Compliance', 'CE / RoHS / ISO 9001'],
]

const acRatings: readonly SpecRow[] = [
  ['36 V', '10 A'],
  ['110 V', '10 A'],
  ['220 V', '5 A'],
  ['380 V', '2.7 A'],
  ['660 V', '1.8 A'],
]

const dcRatings: readonly SpecRow[] = [
  ['24 V', '4 A'],
  ['48 V', '4 A'],
  ['110 V', '2 A'],
  ['220 V', '1 A'],
  ['440 V', '0.6 A'],
]

const bodies = [
  {
    series: 'A',
    title: 'Type A',
    model: 'EB2M-A',
    text: 'Standard modular body. Body behind the panel 52 × 30 mm (43 mm without the side clips), 50 mm deep behind the panel, 11 mm above the panel. Contact blocks clip on at the side.',
  },
  {
    series: 'B',
    title: 'Type B',
    model: 'EB2M-B',
    text: 'Compact body for tight panel spacing. Body 40 × 30 mm, 33.5 mm wide in side view, 60 mm overall height including 11 mm above the panel.',
  },
] as const

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${pagePath}#webpage`,
      url: `${SITE_URL}${pagePath}`,
      name: pageTitle,
      description,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    },
    {
      '@type': 'ItemList',
      name: pageTitle,
      itemListElement: families.map((family, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: family.title,
        url: `${SITE_URL}${pagePath}#${family.id}`,
        description: family.intro,
      })),
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

const containerClass = 'mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8'
const headingClass = 'text-2xl font-semibold tracking-tight text-[#0F2A44] sm:text-3xl'

// Keep the shared inquiry components and scope their visual treatment to this page.
const inquiryActionsClass = 'mt-8 [&_a]:rounded-[4px] [&_a]:border-[#DDE3E8] [&_a]:bg-white [&_a:hover]:border-[#0F2A44] [&_a:hover]:bg-[#F3F5F7] [&_a:focus-visible]:outline-[#0F2A44] [&_span]:text-[#5B6B7A] [&_a>span:nth-child(2)]:text-[#0F2A44] [&_li:nth-child(2)>a]:border-[#E8590C] [&_li:nth-child(2)>a]:bg-[#E8590C] [&_li:nth-child(2)>a_span]:text-white'

function SpecTable({ caption, rows }: { caption: string; rows: readonly SpecRow[] }) {
  return (
    <div className="overflow-x-auto rounded-[6px] border border-[#DDE3E8] bg-white">
      <table className="w-full text-left text-sm">
        <caption className="border-b border-[#DDE3E8] bg-[#F3F5F7] px-5 py-4 text-left font-semibold text-[#0F2A44]">{caption}</caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-[#DDE3E8] last:border-0">
              <th scope="row" className="w-2/5 px-5 py-3 align-top font-medium text-[#0F2A44]">{label}</th>
              <td className="px-5 py-3 align-top font-mono text-[#1F2A33] tabular-nums">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ModelTable({ title, codes }: { title: string; codes: readonly string[] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-[6px] border border-[#DDE3E8] bg-white">
      <table className="w-full min-w-[580px] text-left text-sm">
        <caption className="sr-only">{title}</caption>
        <thead className="bg-[#F3F5F7] text-[#0F2A44]">
          <tr>
            {bodies.map((body) => <th key={body.series} scope="col" className="px-5 py-3 font-semibold">{body.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {codes.map((code) => (
            <tr key={code} className="border-t border-[#DDE3E8]">
              {bodies.map((body) => (
                <td key={body.series} className="px-5 py-3 font-mono text-[#0F2A44]">{body.model}{code}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function FamilySection({ family }: { family: (typeof families)[number] }) {
  return (
    <section id={family.id} className="scroll-mt-24 border-t border-[#DDE3E8] py-10 md:py-16">
      <div className={containerClass}>
        <h2 className={headingClass}>{family.title}</h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-[#5B6B7A]">{family.intro}</p>
        <ModelTable title={family.title} codes={family.codes} />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6">
          {bodies.map((body) => (
            <div key={body.series} className="min-w-0">
              <h3 className="border-b border-[#DDE3E8] pb-3 font-mono text-sm font-semibold text-[#0F2A44]">{body.model}</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {family.photos.filter((photo) => photo.series === body.series).map((photo) => (
                  <figure key={photo.model} className="max-w-[300px]">
                    <OptimizedImage src={`${imageBase}/${photo.file}`} alt={photo.alt} width={600} height={600} loading="lazy" className="h-auto w-full object-contain" sizes="(max-width: 640px) 50vw, 300px" />
                    <figcaption className="mt-2 font-mono text-xs text-[#0F2A44]">{photo.model}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-6 text-[#5B6B7A]">{photoCaption}</p>
      </div>
    </section>
  )
}

export default function PushButtonSwitchSolutionPage() {
  return (
    <main className={`${inter.className} bg-white text-[#1F2A33] [&_*]:animate-none [&_*]:shadow-none [&_*]:transition-none`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(pageJsonLd) }} />

      <section className="border-b border-[#DDE3E8] py-10 md:py-16">
        <div className={containerClass}>
          <div className="[&_a:hover]:text-[#0F2A44] [&_nav]:text-[#5B6B7A] [&_span]:text-[#0F2A44]">
            <Breadcrumbs items={[
              { name: 'Home', href: '/', path: '/' },
              { name: 'Solutions', href: '/solutions', path: '/solutions' },
              { name: pageTitle, path: pagePath },
            ]} />
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#5B6B7A]">Panel Control Components</p>
              <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-[#0F2A44] sm:text-4xl lg:text-5xl">{pageTitle}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#5B6B7A]">{intro}</p>
              <Link href="#contact-form" className="mt-6 inline-flex min-h-11 items-center rounded-[4px] bg-[#E8590C] px-5 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]">
                Request a quote
              </Link>
            </div>
            <figure className="min-w-0 lg:col-span-5">
              <div className="relative overflow-hidden rounded-[6px] border border-[#DDE3E8] bg-white">
                <OptimizedImage src={`${imageBase}/eb2m-a-hero.jpg`} alt="EB2M 22mm push buttons, selector, key switch and emergency stop" width={800} height={800} priority className="h-auto w-full object-contain" sizes="(min-width: 1024px) 560px, 100vw" />
                <span className="pointer-events-none absolute bottom-4 left-4 text-lg font-semibold text-[#0F2A44]">Φ22 operators in one series</span>
              </div>
              <figcaption className="mt-3 text-xs leading-6 text-[#5B6B7A]">{photoCaption}</figcaption>
            </figure>
          </div>
          <nav aria-label="Operator families" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#DDE3E8] pt-5 text-sm font-medium text-[#0F2A44]">
            {families.map((family) => (
              <Link key={family.id} href={`#${family.id}`} className="underline-offset-4 hover:underline">{family.title}</Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-[#F3F5F7] py-10 md:py-16">
        <div className={containerClass}>
          <h2 className={headingClass}>Key facts</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, text]) => (
              <article key={title} className="rounded-[6px] border border-[#DDE3E8] bg-white p-5">
                <h3 className="text-base font-semibold text-[#0F2A44]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5B6B7A]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="specifications" className="scroll-mt-24 py-10 md:py-16">
        <div className={containerClass}>
          <h2 className={headingClass}>Ratings as printed</h2>
          <p className="mt-3 text-sm leading-7 text-[#5B6B7A]">Utilization categories AC-15 / DC-13 (as defined in IEC 60947-5-1).</p>
          <p className="mt-3 font-mono font-semibold text-[#0F2A44]">Ith 10 A.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <SpecTable caption="AC-15" rows={acRatings} />
            <SpecTable caption="DC-13" rows={dcRatings} />
          </div>
          <div className="mt-8">
            <SpecTable caption="Environment" rows={environment} />
          </div>
        </div>
      </section>

      <section id="bodies" className="scroll-mt-24 bg-[#F3F5F7] py-10 md:py-16">
        <div className={containerClass}>
          <h2 className={headingClass}>Type A vs Type B</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#5B6B7A]">Both ranges list the same operators, ratings, environment and colors. The difference is the body: Type A uses a standard modular body (52 × 30 mm), while Type B uses a smaller compact body (40 × 30 mm) for closely spaced buttons. Dimensions are taken from the catalog outline drawings for the flush button; check the drawing of the exact model you order.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6">
            {bodies.map((body) => (
              <article key={body.series} className="min-w-0 rounded-[6px] border border-[#DDE3E8] bg-white p-3 sm:p-6">
                <h3 className="text-lg font-semibold text-[#0F2A44]">{body.title} <span className="block font-mono text-sm sm:ml-2 sm:inline">{body.model}</span></h3>
                <OptimizedImage src={`${imageBase}/eb2m-${body.series.toLowerCase()}-hero.jpg`} alt={`EB2M-${body.series} 22mm push buttons, selector, key switch and emergency stop`} width={800} height={800} loading="lazy" className="mt-5 h-auto w-full object-contain" sizes="(max-width: 1280px) 50vw, 560px" />
                <p className="mt-3 text-sm leading-7 text-[#5B6B7A]">{body.text}</p>
                <p className="mt-3 text-xs leading-6 text-[#5B6B7A]">Catalog range name: Compact range.</p>
                <OptimizedImage src={`${imageBase}/eb2m-${body.series.toLowerCase()}-dimensions.jpg`} alt={`${body.model}-10 outline dimensions`} width={1200} height={1600} loading="lazy" className="mt-5 h-auto w-full object-contain" sizes="(max-width: 1280px) 50vw, 560px" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {families.map((family) => <FamilySection key={family.id} family={family} />)}

      <section id="glossary" className="scroll-mt-24 bg-[#F3F5F7] py-10 md:py-16">
        <div className={containerClass}>
          <h2 className={headingClass}>Glossary</h2>
          <ul className="mt-8 grid gap-4 text-sm leading-7 text-[#5B6B7A] sm:grid-cols-2">
            {glossary.map((term) => <li key={term} className="rounded-[6px] border border-[#DDE3E8] bg-white p-5">{term}</li>)}
          </ul>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className={containerClass}>
          <h2 className={headingClass}>Not stated for this series</h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-[#5B6B7A]">
            {omittedFromCatalog.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section id="selection" className="scroll-mt-24 border-y border-[#DDE3E8] bg-[#F3F5F7] py-10 md:py-16">
        <div className={containerClass}>
          <h2 className={headingClass}>Selection guide</h2>
          <ol className="mt-6 max-w-4xl list-decimal space-y-4 pl-5 text-sm leading-7 text-[#5B6B7A]">
            {selectionSteps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className={containerClass}>
          <h2 className={headingClass}>Certificates on request</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#5B6B7A]">CE, RoHS and ISO 9001 documents are available on request. Contact us for the certification documents for your project.</p>
        </div>
      </section>

      <section className="bg-[#0F2A44] py-10 md:py-16">
        <div className={containerClass}>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Request a quote for 22mm push button switches</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-white">Send the model as printed (for example EB2M-A-10D, EB2M-B-20XS/f.fu or EB2M-A-01ZS), color, lamp voltage if illuminated, quantity and destination. You can send your inquiry via the quote form, email or WhatsApp.</p>
          <div className={inquiryActionsClass}><InquiryActions topic={topic} formHref="#contact-form" /></div>
        </div>
      </section>

      <section className="bg-[#F3F5F7] py-10 md:py-16">
        <div className={containerClass}>
          <h2 className={headingClass}>FAQ</h2>
          <div className="[&>div]:rounded-[6px] [&>div]:border-[#DDE3E8] [&_button:hover]:bg-[#F3F5F7] [&_button>span]:text-[#0F2A44] [&_button>span:last-child]:rounded-[4px] [&_button>span:last-child]:bg-[#F3F5F7] [&_p]:text-[#5B6B7A]">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24 py-10 md:py-16">
        <div className={`${containerClass} grid gap-8 lg:grid-cols-12`}>
          <div className="lg:col-span-5">
            <h2 className={headingClass}>Request a quote for 22mm push button switches</h2>
            <p className="mt-4 text-sm leading-7 text-[#5B6B7A]">In the inquiry, send the model as printed (e.g. EB2M-A-10D or EB2M-B-01ZS), color, lamp voltage, quantity and destination.</p>
          </div>
          <div className="rounded-[6px] border border-[#DDE3E8] p-5 lg:col-span-7 [&_input]:rounded-[4px] [&_input]:border-[#DDE3E8] [&_input:focus]:border-[#0F2A44] [&_input:focus]:ring-[#0F2A44] [&_textarea]:rounded-[4px] [&_textarea]:border-[#DDE3E8] [&_textarea:focus]:border-[#0F2A44] [&_textarea:focus]:ring-[#0F2A44] [&_label]:text-[#0F2A44] [&_button[type=submit]]:rounded-[4px] [&_button[type=submit]]:bg-[#E8590C] [&_button[type=submit]:hover]:bg-[#E8590C]">
            <InquiryForm source="22mm-push-button-switch-solution" defaultProduct="22mm Push Button Switches (EB2M)" submitLabel="Request a quote" twoColumnOnDesktop redirectOnSuccess="/thank-you" />
          </div>
        </div>
      </section>
    </main>
  )
}
