import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Placeholder terms page description. Replace with your legal text.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{' '}
            / <span className="text-slate-600">Terms</span>
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">Placeholder Terms Title</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-4xl space-y-8 px-4 text-sm leading-7 text-slate-700 sm:px-6 lg:px-8">
          {[
            'Placeholder Terms Section 01',
            'Placeholder Terms Section 02',
            'Placeholder Terms Section 03',
            'Placeholder Terms Section 04',
            'Placeholder Terms Section 05',
            'Placeholder Terms Section 06',
          ].map((title) => (
            <article key={title}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">{title}</h2>
              <p className="mt-3">Placeholder legal paragraph. Replace this section with your final terms and conditions text.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
