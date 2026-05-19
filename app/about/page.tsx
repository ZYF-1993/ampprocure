import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const strengths = [
  'ISO & CE Certified Quality',
  'Factory Direct Supply',
  'Smart Power Monitoring',
  'Wide Range of Applications',
  'Trusted by Global Customers',
  'Competitive Pricing',
] as const

const capabilities = [
  {
    title: 'Advanced Manufacturing',
    text: '50,000 m² production facility with automated assembly lines, in-process quality control, and full traceability.',
    icon: 'tools',
  },
  {
    title: 'In-House R&D',
    text: '30+ engineers dedicated to product development and IEC standard compliance testing in our accredited laboratory.',
    icon: 'lab',
  },
  {
    title: 'Quality Assurance',
    text: 'ISO 9001:2015 certified. Every product batch undergoes 100% electrical testing before shipment. CE, RoHS, TÜV certified.',
    icon: 'shield',
  },
  {
    title: 'Global Distribution',
    text: 'Export to 80+ countries with established distribution networks in Europe, Southeast Asia, Middle East, and Africa.',
    icon: 'globe',
  },
] as const

const milestones = [
  { year: '2008', event: 'Founded in Zhejiang, China with focus on miniature circuit breakers.' },
  { year: '2012', event: 'Obtained ISO 9001 certification and launched SPD product line.' },
  { year: '2016', event: 'Expanded into PV protection products to meet growing solar demand.' },
  { year: '2019', event: 'Launched WiFi smart low-voltage device range for smart buildings.' },
  { year: '2022', event: 'Passed TÜV audit; extended distribution to 80+ countries.' },
  { year: '2024', event: 'Introduced 1500V DC product line for utility-scale solar projects.' },
] as const

const certifications = [
  { title: 'CE Marking', text: 'European conformity for low-voltage directive' },
  { title: 'RoHS', text: 'Restriction of hazardous substances compliance' },
  { title: 'ISO 9001:2015', text: 'Quality management system certification' },
  { title: 'IEC Standards', text: 'Products tested to IEC 60898, 61643, 61008 and more' },
  { title: 'TÜV', text: 'Independent safety testing and certification' },
] as const

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about upprocure, a supplier of low-voltage electrical protection products for distributors, system integrators, and project contractors.',
  alternates: {
    canonical: '/about',
  },
}

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
          <Image src="/images/company-exterior.jpg" alt="upprocure company exterior" fill priority sizes="100vw" className="object-cover opacity-15" />
        </div>
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">About upprocure</p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">15+ Years of Engineering Excellence</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300">
            upprocure provides low-voltage electrical protection products for distributors, system integrators, and project contractors worldwide.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Company Overview</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Built on Quality, Delivered Globally</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              With focused expertise in electrical protection, upprocure supplies a comprehensive range of low-voltage electrical products, including circuit breakers, RCCBs, surge protectors, and smart meters. Our solutions are widely applied in residential, commercial, and industrial settings, helping customers build safe and efficient power distribution systems.
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
            <Image src="/images/company-exterior.jpg" alt="upprocure company exterior" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Our Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">End-to-End Manufacturing</h2>
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Our Journey</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Company Milestones</h2>
          </div>

          <ol className="mt-12 space-y-6">
            {milestones.map((item, index) => (
              <li key={item.year} className="grid gap-4 sm:grid-cols-[120px_1fr] sm:gap-6">
                <div className="flex items-center gap-3 sm:justify-end">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">{index + 1}</span>
                  <span className="text-lg font-bold text-green-700">{item.year}</span>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-sm leading-6 text-gray-600">{item.event}</p>
                </div>
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
              All products are independently certified to international standards, ensuring regulatory acceptance in global markets.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
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
            We work with distributors, wholesalers, and project contractors. Reach out to discuss pricing, OEM programmes, or technical requirements.
          </p>
          <Link href="/contact" className="mt-7 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50 active:scale-[0.98]">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
