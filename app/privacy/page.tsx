import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'upprocure Privacy Policy — how we collect, use, and protect your personal information when you use our website or contact us for B2B inquiries.',
  alternates: {
    canonical: '/privacy',
  },
}

const sections = [
  {
    title: 'Information We Collect',
    body: `When you submit an inquiry, request a quote, or contact us through our website, we collect information you provide directly — including your name, company name, email address, phone number, and the details of your product inquiry. We also automatically collect standard technical data such as your IP address, browser type, and pages visited in order to maintain and improve our website.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information you provide solely to respond to your business inquiries, send product quotations, process sample requests, and provide after-sales technical support. We may also use your contact details to send relevant product updates or technical articles that may be of interest to your business — you may opt out of these communications at any time by contacting us directly.`,
  },
  {
    title: 'Information Sharing',
    body: `upprocure does not sell, rent, or trade your personal information to any third parties. We may share information with trusted logistics and payment partners strictly as required to fulfill your orders. All third-party partners are contractually required to handle your data in accordance with applicable privacy laws and to use it only for the purpose of fulfilling the service requested.`,
  },
  {
    title: 'Data Security',
    body: `We implement industry-standard technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our website uses HTTPS encryption for all data transmissions. While we take every reasonable precaution, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Cookies',
    body: `Our website uses essential cookies to ensure core functionality such as form submissions and navigation. We may also use analytics cookies to understand how visitors interact with our website so we can improve the user experience. You can disable cookies in your browser settings at any time; however, some features of the website may not function correctly as a result.`,
  },
  {
    title: 'Your Rights & Contact',
    body: `You have the right to request access to, correction of, or deletion of the personal data we hold about you. To exercise any of these rights, or if you have any questions or concerns about this Privacy Policy, please contact us by email at ${CONTACT_EMAIL} or by phone at +86-13552727303. This policy may be updated from time to time; the latest version will always be available on this page.`,
  },
] as const

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            {' '}/ <span className="text-slate-600">Privacy Policy</span>
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-4xl space-y-8 px-4 text-sm leading-7 text-slate-700 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-slate-600">
            upprocure (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of our business customers and website visitors. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
          </p>
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">{section.title}</h2>
              <p className="mt-3">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
