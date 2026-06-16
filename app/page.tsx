import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InquiryForm from '@/components/InquiryForm'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'
import { CONTACT_EMAIL } from '@/lib/site-config'

const focusBlocks = [
  {
    title: 'Focus Industries',
    text: 'Solar PV projects, industrial distribution systems, and low-voltage panel builders.',
  },
  {
    title: 'Flexible Cooperation',
    text: 'Support for OEM branding, tailored packaging, and mixed-product container planning.',
  },
  {
    title: 'Technical Support',
    text: 'Rapid pre-sales guidance on product selection, certifications, and compatibility.',
  },
] as const

const processSteps = [
  {
    title: 'Share Requirements',
    text: 'Send your drawings, target market, certification needs, and preferred product specifications.',
  },
  {
    title: 'Sample & Validation',
    text: 'We arrange samples and technical confirmation before you move into mass order planning.',
  },
  {
    title: 'Mass Production',
    text: 'Stable lead time with practical quality checks throughout production and packing.',
  },
  {
    title: 'Delivery & Support',
    text: 'Global shipping coordination and responsive after-sales communication for repeat orders.',
  },
] as const

const trustCards = [
  {
    title: 'IEC / CE Certified',
    text: 'All products comply with IEC standards and carry CE marking, ensuring safety and regulatory acceptance in global markets.',
    icon: 'certified',
  },
  {
    title: 'OEM & Private Label',
    text: 'Full OEM support with custom branding, packaging, and product specifications. Dedicated engineering team for customization.',
    icon: 'oem',
  },
  {
    title: 'Fast Global Shipping',
    text: 'In-stock products ship quickly. Dedicated logistics support helps ensure customs clearance and on-time global delivery.',
    icon: 'shipping',
  },
  {
    title: 'Dedicated Account Support',
    text: 'Every B2B client receives a dedicated account manager for technical consultation, sample coordination, and after-sales support.',
    icon: 'support',
  },
] as const

const insights = [
  {
    title: 'What Is a Din Rail Aerosol Fire Extinguisher? A Complete Technical Guide',
    text: 'A technical guide to din rail aerosol fire extinguishers — how they work, what\'s inside, where they fit, and the specifications and certifications that separate B2B-grade units from low-tier alternatives.',
    href: '/blog/what-is-din-rail-aerosol-fire-extinguisher-technical-guide',
    image: '/images/blog/what-is-din-rail-aerosol-fire-extinguisher.jpg',
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Fire Suppression'],
    date: 'Apr 27, 2026',
    readTime: 9,
  },
  {
    title: 'Din Rail Aerosol Fire Extinguisher Price Guide 2026: Cost Breakdown & FOB Pricing',
    text: '2026 FOB China price ranges, MOQ-tier pricing, the seven cost factors that move a quote, hidden import-side costs, and a 10-year TCO comparison vs. FM-200 and Novec 1230.',
    href: '/blog/din-rail-aerosol-fire-extinguisher-price-guide-2026',
    image: '/images/blog/din-rail-aerosol-fire-extinguisher-price-guide-2026.jpg',
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Price Guide'],
    date: 'Apr 27, 2026',
    readTime: 10,
  },
  {
    title: 'How Does an Aerosol Fire Extinguisher Work in Electrical Cabinets?',
    text: 'How a DIN-rail aerosol fire extinguisher actually stops an electrical-cabinet fire — the suppression mechanism, dual activation logic, three documented field cases, and why the aerosol outperforms alternatives.',
    href: '/blog/how-does-aerosol-fire-extinguisher-work-electrical-cabinets',
    image: '/images/blog/how-aerosol-fire-extinguisher-works-electrical-cabinets.jpg',
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Fire Suppression'],
    date: 'Apr 27, 2026',
    readTime: 9,
  },
] as const

const HEADLINE = 'One-Stop Industrial Electrical Sourcing Platform.'
const SUBHEADLINE = 'Leveraging the unparalleled manufacturing cluster of Liushi, Wenzhou—the capital of electrical appliances—UPprocure delivers end-to-end procurement for global buyers. We integrate multi-category matching, rigorous QC inspections, and flexible MOQ options into a seamless, contract-ready supply chain.'
const TRUST_BADGES = ['Flexible MOQ', 'Factory-Direct Costing', '100% Quality Inspected', 'Global Logistics Control'] as const

const productCategoryCards = [
  {
    slug: 'circuit-breaker',
    title: 'Circuit Breaker',
    text: 'Reliable overcurrent and short-circuit protection for LV systems.',
    image: '/images/categories/circuit-breaker.png',
  },
  {
    slug: 'surge-protector-device',
    title: 'Surge Protector Device',
    text: 'Transient overvoltage suppression for sensitive equipment.',
    image: '/images/categories/surge-protector-device.png',
  },
  {
    slug: 'dc-fuse-holder',
    title: 'DC Fuse Holder',
    text: 'Safe and compact fuse mounting for DC circuits up to 1500V.',
    image: '/images/categories/dc-fuse-holder.png',
  },
  {
    slug: 'over-voltage-protector',
    title: 'Over Voltage Protector',
    text: 'Automatic load disconnection against sustained overvoltage.',
    image: '/images/categories/over-voltage-protector.png',
  },
  {
    slug: 'power-meter',
    title: 'Power Meter',
    text: 'Precision energy measurement for industrial and commercial use.',
    image: '/images/categories/power-meter.png',
  },
  {
    slug: 'wifi-smart-low-voltage-device',
    title: 'Wifi Smart Low Voltage Device',
    text: 'IoT-enabled low-voltage devices for smart building control.',
    image: '/images/categories/wifi-smart-low-voltage-device.png',
  },
  {
    slug: 'pv-combiner-box',
    title: 'PV Combiner Box',
    text: 'String combiner solutions for solar PV arrays.',
    image: '/images/categories/pv-combiner-box.png',
  },
  {
    slug: 'ats-dual-power-switch',
    title: 'ATS Dual Power Switch',
    text: 'Automatic transfer switching for uninterrupted power supply.',
    image: '/images/categories/ats-dual-power-switch.png',
  },
  {
    slug: 'aerosol-fire-extinguisher',
    title: 'Aerosol Fire Extinguisher',
    text: 'Compact aerosol-based fire suppression for rapid response.',
    image: '/images/categories/aerosol-fire-extinguisher.png',
  },
] as const

const heroMetrics = [
  {
    value: '87+',
    label: 'Certified Products',
    icon: 'circuit',
    tone: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    value: '99.8%',
    label: 'QC Pass Rate',
    icon: 'shield',
    tone: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    value: 'Flexible',
    label: 'MOQ Options',
    icon: 'globe',
    tone: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    value: '24/7',
    label: 'Response Time',
    icon: 'bolt',
    tone: 'text-amber-600',
    bg: 'bg-amber-50',
  },
] as const

export const metadata: Metadata = {
  title: { absolute: 'UPprocure | Electrical Protection Products Supplier' },
  description: 'upprocure supplies circuit breakers, surge protectors, DC fuse holders, power meters, ATS switches, and PV combiner boxes for B2B wholesale and OEM projects.',
  alternates: {
    canonical: '/',
  },
}

function CardIcon({ type }: { type: (typeof trustCards)[number]['icon'] }) {
  if (type === 'certified') {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  }

  if (type === 'oem') {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 7.409a2.25 2.25 0 0 1-1.07-1.916V5.25" />
      </svg>
    )
  }

  if (type === 'shipping') {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    )
  }

  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  )
}

function HeroMetricIcon({ type }: { type: (typeof heroMetrics)[number]['icon'] }) {
  if (type === 'circuit') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h6m4 0h6M4 17h6m4 0h6M10 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM12 9v6" />
      </svg>
    )
  }

  if (type === 'shield') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 19 6v5.2c0 4.3-2.8 7.8-7 9.3-4.2-1.5-7-5-7-9.3V6l7-2.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.8 12.1 2 2 4.5-4.7" />
      </svg>
    )
  }

  if (type === 'globe') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.8 12h16.4M12 3.5c2.1 2.3 3.1 5.1 3.1 8.5s-1 6.2-3.1 8.5M12 3.5C9.9 5.8 8.9 8.6 8.9 12s1 6.2 3.1 8.5" />
      </svg>
    )
  }

  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m13 2.8-8 11h6l-1 7.4 8-11h-6l1-7.4Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2.1A9.82 9.82 0 0 0 3.6 16.93L2.4 21.3l4.48-1.17a9.8 9.8 0 0 0 5.16 1.46h.01A9.82 9.82 0 0 0 12.04 2.1Zm5.79 14.04c-.24.67-1.38 1.28-1.93 1.36-.49.07-1.12.1-1.8-.11-.42-.13-.95-.31-1.64-.61-2.88-1.24-4.75-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.12 1-2.41.27-.29.59-.36.78-.36h.56c.18.01.43-.07.67.51.24.58.83 2 .9 2.15.08.14.12.31.03.5-.1.2-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.58.17.29.76 1.25 1.62 2.03 1.12.99 2.06 1.3 2.35 1.44.29.15.46.12.63-.07.17-.2.72-.84.91-1.13.2-.29.39-.24.66-.15.27.1 1.72.82 2.02.96.29.15.49.22.56.34.07.12.07.7-.17 1.37Z" />
    </svg>
  )
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* 背景：使用本地生成图，并叠加深色遮罩，保证白色主标题与背景有清晰区分 */}
      <Image
        src="/images/hero-industrial-sourcing-bg.png"
        alt="Industrial electrical sourcing and global logistics background"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950/72" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(15,23,42,0.78)_42%,rgba(15,23,42,0.42)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 左侧：品牌承诺、标题、副标题与转化按钮 */}
          <div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
              {HEADLINE}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              {SUBHEADLINE}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.35)] transition duration-200 hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.98]"
              >
                Request a Free Quote
              </Link>
              <a
                href="https://wa.me/8613552727303"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition duration-200 hover:scale-105 hover:border-emerald-300 hover:bg-white/15 hover:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.98]"
              >
                <WhatsAppIcon />
                Talk on WhatsApp
              </a>
            </div>
          </div>

          {/* 右侧：纯代码智能供应链数据面板 */}
          <div className="relative">
            <div className="absolute inset-6 -z-10 rounded-[2rem] bg-blue-400/20 blur-3xl" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {heroMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.26)] backdrop-blur-md"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${metric.bg} ${metric.tone}`}>
                    <HeroMetricIcon type={metric.icon} />
                  </div>
                  <p className="mt-6 text-3xl font-extrabold leading-none text-white">{metric.value}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-200">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* 底部：工业采购信任标签 */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase text-slate-300">
          {TRUST_BADGES.map((badge, index) => (
            <span key={badge} className="inline-flex items-center gap-x-3">
              {index > 0 ? <span className="text-blue-300/70">·</span> : null}
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />

      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            <div className="text-center">
              <dt className="text-4xl font-extrabold tracking-tight text-blue-700 sm:text-5xl">15+</dt>
              <dd className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">Years of Industry Focus</dd>
            </div>
            <div className="text-center">
              <dt className="text-4xl font-extrabold tracking-tight text-green-700 sm:text-5xl">80+</dt>
              <dd className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">Export Markets Supported</dd>
            </div>
            <div className="text-center">
              <dt className="text-4xl font-extrabold tracking-tight text-orange-500 sm:text-5xl">{CATALOG_PRODUCT_COUNT}+</dt>
              <dd className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">Catalog Models Listed</dd>
            </div>
            <div className="text-center">
              <dt className="text-4xl font-extrabold tracking-tight text-green-700 sm:text-5xl">24h</dt>
              <dd className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">Typical Quote Response</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {focusBlocks.map((item) => (
              <article key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h2 className="text-xs font-bold uppercase tracking-widest text-green-700">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">How We Work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Smooth B2B Procurement Flow</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              We keep communication clear from first inquiry to final delivery, helping you shorten sourcing cycles and reduce project risk.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Our Product Range</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{productCategoryCards.length} Product Categories</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              From miniature circuit breakers to smart WiFi devices, every upprocure product category is selected for performance, safety, and long-term sourcing reliability.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {productCategoryCards.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:border-green-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-center bg-gray-50 p-6 transition-colors group-hover:bg-green-50" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={category.image}
                    alt={`${category.title} product category`}
                    width={160}
                    height={160}
                    className="h-32 w-32 object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-gray-100 px-4 py-3 text-center">
                  <h3 className="text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-700">{category.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">{category.text}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Why upprocure</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Your Trusted Manufacturing Partner</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              We combine international quality standards with tailored services to ensure a seamless supply chain experience for every partner.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card) => (
              <article key={card.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <CardIcon type={card.icon} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">About upprocure</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Factory-Direct Electrical Solutions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              Explore our 50,000 m² facility with automated lines and R&amp;D centers. We deliver reliable electrical solutions.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ height: '440px' }}>
              <Image src="/images/company-exterior.jpg" alt="upprocure manufacturing facility" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">Reliable &amp; Smart Power Solutions.</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                <span className="font-semibold text-gray-900">With over 15 years of manufacturing expertise,</span>{' '}
                upprocure produces a full range of low-voltage electrical products, including circuit breakers, SPDs, DC fuse holders, power meters, and ATS systems. Our solutions are widely used in residential, commercial, and industrial applications. Backed by ISO 9001 certification and advanced production facilities, we deliver consistent quality at competitive prices.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {['ISO & CE Certified Quality', 'Factory Direct Supply', 'Smart Power Monitoring', 'Wide Application', 'Global Customer Trust', 'Competitive Pricing'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                  Get Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Global Presence</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Exhibitions &amp; Events</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              Join us at global trade shows to discover our electrical and solar innovations. Let&apos;s build a reliable partnership together.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            <div className="col-span-2 overflow-hidden rounded-xl md:col-span-1 md:row-span-2">
              <div className="relative h-64 w-full md:h-full" style={{ minHeight: '320px' }}>
                <Image alt="upprocure exhibition booth" fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover transition-transform duration-500 hover:scale-105" src="/images/展会图片1.jpg" />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl">
              <div className="relative h-52 w-full md:h-64">
                <Image alt="upprocure trade show photo 2" fill sizes="(max-width: 768px) 50vw, 420px" className="object-cover transition-transform duration-500 hover:scale-105" src="/images/展会图片2.jpg" />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl">
              <div className="relative h-52 w-full md:h-64">
                <Image alt="upprocure trade show photo 3" fill sizes="(max-width: 768px) 50vw, 420px" className="object-cover transition-transform duration-500 hover:scale-105" src="/images/展会图片3.jpg" />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl">
              <div className="relative h-52 w-full md:h-64">
                <Image alt="upprocure trade show photo 4" fill sizes="(max-width: 768px) 50vw, 420px" className="object-cover transition-transform duration-500 hover:scale-105" src="/images/展会图片4.jpg" />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl">
              <div className="relative h-52 w-full md:h-64">
                <Image alt="upprocure trade show photo 5" fill sizes="(max-width: 768px) 50vw, 420px" className="object-cover transition-transform duration-500 hover:scale-105" src="/images/展会图片5.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Certifications</p>
              <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
                Quality You Can Trust,<br />Certified Worldwide.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                upprocure maintains a global presence, supplying certified low-voltage electrical products to customers in over 80 countries. Every product is backed by internationally recognized certifications, ensuring compliance, safety, and reliability across markets.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  'ISO 9001:2015 Quality Management System',
                  'CE Marking — IEC/EN Standards Compliant',
                  'CCC Certification (China Compulsory Certificate)',
                  'RoHS Compliant — Environmentally Responsible',
                  'Trusted Supplier for Global Electrical Brands',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                  Get a Free Quote
                </Link>
              </div>
            </div>
            <div>
              <Image src="/images/证书图片.png" alt="upprocure certifications" width={720} height={540} className="w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-700 py-14">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_48%)]" />
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Start Your Next Order?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-green-100">
            Tell us your market, specs, and target quantity. Our technical sales team will send a clear quotation plan within one business day.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-green-700 shadow-sm transition-all hover:bg-green-50 active:scale-[0.98]">
              Contact Our Sales Team
            </Link>
            <Link href="/products" className="inline-flex items-center rounded-lg border border-white/50 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98]">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Technical Resources</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Latest Articles</h2>
            </div>
            <Link href="/blog" className="hidden items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-800 sm:flex">
              All articles
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {insights.map((post) => (
              <Link key={post.title} href={post.href} className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">{tag}</span>
                    ))}
                  </div>
                  <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-700">{post.title}</h3>
                  <p className="mt-2 flex-1 line-clamp-3 text-xs leading-relaxed text-gray-500">{post.text}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <article className="lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Contact upprocure</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Send Your Product Requirement</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Tell us the product category, voltage platform, quantity, packaging needs, and target delivery timeline. Our team will reply with next-step details.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="text-sm text-gray-700">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 inline-block hover:text-green-700">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="text-sm text-gray-700">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Phone</p>
                  <a href="tel:+8613552727303" className="mt-1 inline-block hover:text-green-700">
                    +86-13552727303
                  </a>
                </li>
                <li className="text-sm text-gray-700">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">WhatsApp</p>
                  <a
                    href="https://wa.me/8613552727303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block hover:text-green-700"
                  >
                    +86-13552727303
                  </a>
                </li>
                <li className="text-sm text-gray-700">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Response Time</p>
                  <p className="mt-1">Within 24 business hours for most RFQs.</p>
                </li>
              </ul>
            </article>

            <article className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">Send an Enquiry</h3>
                <p className="mb-6 mt-1 text-xs text-gray-500">Product details, quantities, and target market help us reply faster.</p>
                <InquiryForm source="home-enquiry" submitLabel="Send Now" twoColumnOnDesktop showInquiryType redirectOnSuccess="/thank-you" />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
