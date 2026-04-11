import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read how we collect, use, and protect inquiry data submitted on this B2B website.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-950">Privacy Policy</h1>
      <p className="mt-5 text-base leading-7 text-slate-600">Effective Date: April 11, 2026</p>

      <section className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
        <article>
          <h2 className="text-xl font-semibold text-slate-900">1. Information We Collect</h2>
          <p className="mt-2">
            We collect information you submit through inquiry forms, such as your name, company, email address, phone number, product interest,
            and requirement details.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">2. How We Use Data</h2>
          <p className="mt-2">
            Inquiry data is used to respond to requests, recommend products, prepare quotations, and improve website content quality and user
            experience.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">3. Data Sharing</h2>
          <p className="mt-2">
            We do not sell personal data. Information may be processed by service providers that support email, hosting, and website analytics,
            under contractual confidentiality obligations.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">4. Data Retention and Security</h2>
          <p className="mt-2">
            We retain data only as long as needed for business and legal purposes and apply reasonable technical and organizational safeguards to
            protect submitted information.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">5. Your Rights</h2>
          <p className="mt-2">
            You may request access, correction, or deletion of your data by contacting us through the Contact page.
          </p>
        </article>
      </section>
    </main>
  )
}
