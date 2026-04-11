import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review the terms governing access and use of this B2B industrial power website.',
  alternates: {
    canonical: '/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-950">Terms of Service</h1>
      <p className="mt-5 text-base leading-7 text-slate-600">Effective Date: April 11, 2026</p>

      <section className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
        <article>
          <h2 className="text-xl font-semibold text-slate-900">1. Website Use</h2>
          <p className="mt-2">
            This website is provided for business information, product reference, and quotation inquiries. You agree to use it lawfully and for
            legitimate commercial purposes.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">2. Product Information</h2>
          <p className="mt-2">
            Product specifications and descriptions are provided for reference. Final technical details, commercial terms, and delivery scope are
            confirmed during formal quotation and order acceptance.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">3. Intellectual Property</h2>
          <p className="mt-2">
            Website content, layout, and materials are protected by applicable intellectual property laws. Unauthorized commercial reuse is not
            permitted.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">4. Limitation of Liability</h2>
          <p className="mt-2">
            To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential losses arising from use of this
            website or reliance on reference information.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">5. Updates</h2>
          <p className="mt-2">
            We may update these terms from time to time. The latest effective date will appear at the top of this page.
          </p>
        </article>
      </section>
    </main>
  )
}
