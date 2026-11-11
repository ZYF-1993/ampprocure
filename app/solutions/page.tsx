import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import InquiryActions from '@/components/InquiryActions'
import OptimizedImage from '@/components/OptimizedImage'
import { SOLUTIONS } from '@/lib/solutions'
import { absoluteUrl, buildPageMetadata, jsonLdScript } from '@/lib/seo'
import { SITE_NAME, SITE_URL } from '@/lib/site-config'

export const metadata = buildPageMetadata({
  title: 'Solutions',
  description:
    'Application solutions from UPprocure, including metal push buttons, 22mm digital display indicators, and DIN rail aerosol fire extinguishers. Request a quote.',
  path: '/solutions',
  keywords: [
    'electrical cabinet solutions',
    'metal push button',
    'anti-vandal push button',
    'aerosol fire extinguisher',
    '22mm digital display indicator',
    'control cabinet panel meter',
  ],
})

const solutionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Solutions',
  url: `${SITE_URL}/solutions`,
  isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  mainEntity: {
    '@type': 'ItemList',
    name: 'UPprocure solutions',
    itemListElement: SOLUTIONS.map((solution, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: solution.title,
      url: absoluteUrl(solution.href),
    })),
  },
}

export default function SolutionsIndexPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(solutionsJsonLd) }} />

      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Home', href: '/', path: '/' }, { name: 'Solutions', path: '/solutions' }]} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solutions</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
            Application pages for equipment that sits in the same cabinets as the UPprocure catalog. Each page lists the published models and how to request a quote.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {SOLUTIONS.map((solution) => (
            <article key={solution.href} className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <Link href={solution.href} className="relative block h-64 bg-gray-50">
                <OptimizedImage
                  src={solution.image}
                  alt={solution.imageAlt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-bold tracking-tight text-gray-950">
                  <Link href={solution.href} className="hover:text-green-700">
                    {solution.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">{solution.summary}</p>
                <Link href={solution.href} className="mt-5 inline-flex font-semibold text-green-700 hover:text-green-800">
                  View solution
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950">Request a quote</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
            Send the model, quantity, and destination by email, the RFQ form, or WhatsApp.
          </p>
          <div className="mt-6">
            <InquiryActions topic="UPprocure solutions" formHref="/contact#rfq" />
          </div>
        </div>
      </section>
    </main>
  )
}
