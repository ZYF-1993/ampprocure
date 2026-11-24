import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import InquiryActions from '@/components/InquiryActions'
import OptimizedImage from '@/components/OptimizedImage'
import { buildPageMetadata } from '@/lib/seo'

const strengths = [
  'Vetted Liushi Partner Factories',
  'CE, RoHS & ISO 9001 Support',
  'OEM & Private-Label Coordination',
  'Multi-Category Consolidation',
  'Pre-Shipment Quality Checks',
  'Clear Project Quotations',
] as const

const capabilities = [
  {
    title: 'Vetted Partner Production',
    text: 'Direct coordination with specialized low-voltage electrical factories in Liushi, Wenzhou for circuit breakers, SPDs, meters, fuse holders, and panel controls.',
    icon: 'tools',
  },
  {
    title: 'Technical Spec Matching',
    text: 'Pre-sales model matching across pole counts, rated currents, trip curves, DC voltages, and cutout dimensions for panel builders and EPC BOMs.',
    icon: 'lab',
  },
  {
    title: 'Quality & Compliance Docs',
    text: 'Pre-shipment inspection coordination and model-specific CE, RoHS, ISO 9001, and applicable IEC test documentation supplied on request.',
    icon: 'shield',
  },
  {
    title: 'Consolidated Export Logistics',
    text: 'Mixed-SKU order consolidation, export-grade packaging, and commercial shipping documentation for global distributors and contractors.',
    icon: 'globe',
  },
] as const

const workflowPillars = [
  { step: '01', title: 'BOM & Spec Review', event: 'Review target models, AC/DC ratings, pole configurations, trip curves, and destination-market requirements.' },
  { step: '02', title: 'Partner Factory Matching', event: 'Match each product line to vetted production partners in the Liushi electrical cluster.' },
  { step: '03', title: 'Sample Evaluation', event: 'Coordinate evaluation samples and specification confirmation before volume production begins.' },
  { step: '04', title: 'OEM & Packaging Setup', event: 'Confirm custom logo printing, rating labels, instruction sheets, and export carton specifications.' },
  { step: '05', title: 'Pre-Shipment Verification', event: 'Check model codes, quantities, labeling accuracy, and visual/electrical inspection records prior to dispatch.' },
  { step: '06', title: 'Consolidated Delivery', event: 'Combine multiple low-voltage categories into one shipment with packing lists and compliance documents.' },
] as const

const certifications = [
  { title: 'CE Marking', text: 'Conformity documentation available by applicable model' },
  { title: 'RoHS', text: 'Restriction of hazardous substances documentation on request' },
  { title: 'ISO 9001', text: 'Quality management system documentation from partner lines' },
  { title: 'IEC Standards', text: 'Models aligned to applicable IEC 60898, 60947, 61643, and 60269 series' },
] as const

export const metadata = buildPageMetadata({
  title: 'About Us',
  description: 'Learn about UPprocure, a low-voltage electrical protection supply and OEM partner in Liushi, Wenzhou serving distributors, panel builders, and contractors.',
  path: '/about',
})

function CheckIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function CapabilityIcon({ type }: { type: (typeof capabilities)[number]['icon'] }) {
  if (type === 'tools') {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.42 15.17 5.83 5.83A2.65 2.65 0 0 0 21 17.25l-5.88-5.88M11.42 15.17l2.5-3.03c.32-.38.74-.63 1.21-.77m-3.71 3.8-4.66 5.65a2.55 2.55 0 1 1-3.58-3.58l6.83-5.63m5.12-.24c.55-.16 1.16-.19 1.74-.14a4.5 4.5 0 0 0 4.49-6.33l-3.28 3.27a3 3 0 0 1-2.25-2.25l3.28-3.27a4.5 4.5 0 0 0-6.34 4.49c.09 1.07-.07 2.26-.9 2.95l-.11.08m-1.74 1.44L5.91 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.41l4.26 4.26" />
      </svg>
    )
  }

  if (type === 'lab') {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75h4.5M10.5 3.75v5.34l-5.4 8.84A1.5 1.5 0 0 0 6.38 20.25h11.24a1.5 1.5 0 0 0 1.28-2.32l-5.4-8.84V3.75M8.02 14.25h7.96" />
      </svg>
    )
  }

  if (type === 'shield') {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75 4.5 6.75v5.5c0 4.78 3.2 7.67 7.5 8.99 4.3-1.32 7.5-4.21 7.5-8.99v-5.5L12 3.75Zm-3 8.45 2 2 4-4" />
      </svg>
    )
  }

  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18m0 18c2.49 0 4.5-4.03 4.5-9S14.49 3 12 3m0 18c-2.49 0-4.5-4.03-4.5-9S9.51 3 12 3m-8.5 9h17" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <OptimizedImage src="/images/company-exterior.jpg" alt="upprocure company exterior" fill priority sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 text-left">
            <Breadcrumbs tone="inverse" items={[{ name: 'Home', href: '/' }, { name: 'About Us', path: '/about' }]} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">About UPprocure</p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">Low-Voltage Electrical Supply &amp; OEM Partner</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300">
            Based in Liushi, Wenzhou, UPprocure supplies low-voltage electrical protection, power metering, and control-panel components for distributors, panel builders, system integrators, and EPC contractors worldwide.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Company Overview</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Built on Quality, Delivered Globally</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              UPprocure coordinates multi-category low-voltage electrical supply from Liushi, Wenzhou—covering AC/DC miniature circuit breakers, surge protective devices, RT18 fuse holders, adjustable voltage protectors, DIN-rail power meters, ATS transfer switches, IP65 PV combiner boxes, 22mm panel controls, and DIN-rail aerosol fire extinguishers. We work with vetted partner factories so B2B buyers can consolidate specifications, OEM labeling, quality checks, and export logistics through one point of contact.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 active:scale-[0.98]">
                View Products
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-green-200 hover:bg-green-50 hover:text-green-700 active:scale-[0.98]">
                Contact Sales
              </Link>
            </div>
          </article>

          <div className="relative h-80 overflow-hidden rounded-2xl bg-gray-100 lg:h-96">
            <OptimizedImage src="/images/company-exterior.jpg" alt="upprocure company exterior" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Our Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Supply-Chain &amp; OEM Capabilities</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <CapabilityIcon type={item.icon} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
        {/* Circuit-grid dot background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(74,222,128,0.18) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-linear-to-b from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-slate-950 to-transparent" />

        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">How We Support B2B Buyers</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">From Technical RFQ to Export Dispatch</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
              A structured six-step sourcing workflow designed to reduce specification errors and simplify multi-category procurement.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflowPillars.map((item, index) => (
              <li key={item.step}
                className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-green-500/70 hover:shadow-[0_0_28px_rgba(74,222,128,0.18)]"
              >
                {/* Corner glow */}
                <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-green-500/10 blur-2xl transition-all duration-500 group-hover:bg-green-500/25" />

                <div className="relative flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-green-800 bg-green-950 px-3 py-1 text-xs font-bold text-green-400">
                    Step {item.step}
                  </span>
                  <div className="relative flex h-5 w-5 items-center justify-center">
                    <span
                      className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-green-400/30"
                      style={{ animationDelay: `${index * 0.45}s`, animationDuration: '2.8s' }}
                    />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                  </div>
                </div>

                <h3 className="relative mt-3.5 text-sm font-semibold text-white">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-6 text-slate-300">{item.event}</p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-transparent via-green-500/70 to-transparent transition-all duration-500 group-hover:w-full" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Compliance & Quality</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Certifications</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              Compliance documentation varies by product line and destination market. Confirm your required standards during quotation so we verify applicable model coverage before ordering.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((item) => (
              <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                  <CheckIcon className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-14">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Interested in a Partnership?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-green-100">
            We work with distributors, wholesalers, panel builders, and project contractors. Reach out to discuss pricing, OEM programs, or technical requirements.
          </p>
          <div className="mx-auto mt-7 max-w-3xl text-left">
            <InquiryActions topic="partnership" formHref="/contact#rfq" tone="dark" />
          </div>
          <Link href="/contact#rfq" className="mt-5 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50 active:scale-[0.98]">
            Open the RFQ form
          </Link>
        </div>
      </section>
    </main>
  )
}
