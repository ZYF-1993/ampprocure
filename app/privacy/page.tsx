import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Placeholder privacy policy description. Replace with your legal text.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{' '}
            / <span className="text-slate-600">Privacy</span>
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">Placeholder Privacy Policy Title</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-4xl space-y-8 px-4 text-sm leading-7 text-slate-700 sm:px-6 lg:px-8">
          {[
            'Placeholder Policy Section 01',
            'Placeholder Policy Section 02',
            'Placeholder Policy Section 03',
            'Placeholder Policy Section 04',
            'Placeholder Policy Section 05',
            'Placeholder Policy Section 06',
          ].map((title) => (
            <article key={title}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">{title}</h2>
              <p className="mt-3">Placeholder legal paragraph. Replace this section with your final privacy policy content.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
