import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getCatalogPageImage } from '@/lib/catalog-utils'

export const metadata: Metadata = {
  title: 'About',
  description: 'Placeholder about page description. Replace with your company profile overview.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{' '}
            / <span className="text-slate-600">About</span>
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">Placeholder About Page Title</h1>
          <p className="mt-3 max-w-3xl text-xl leading-8 text-slate-600">Placeholder page intro. Replace with your brand story and positioning summary.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Placeholder Label</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Placeholder Section Headline</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Placeholder paragraph one. Replace with your real company background and key strengths.</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">Placeholder paragraph two. Replace with your production or service highlights.</p>

            <div className="mt-6 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {['Placeholder Feature 01', 'Placeholder Feature 02', 'Placeholder Feature 03', 'Placeholder Feature 04', 'Placeholder Feature 05', 'Placeholder Feature 06'].map((item) => (
                <p key={item}>- {item}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                Placeholder Products CTA
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">
                Placeholder Contact CTA
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image src={getCatalogPageImage(25)} alt="About section placeholder image" width={1200} height={860} className="h-auto w-full" sizes="(max-width: 1024px) 100vw, 45vw" />
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Placeholder Capabilities Label</p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Placeholder Capabilities Headline</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              'Placeholder Capability Card 01',
              'Placeholder Capability Card 02',
              'Placeholder Capability Card 03',
              'Placeholder Capability Card 04',
            ].map((title) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Placeholder card description. Replace with real capability details.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Placeholder Timeline Headline</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { year: '20XX', event: 'Placeholder milestone item 01' },
              { year: '20XX', event: 'Placeholder milestone item 02' },
              { year: '20XX', event: 'Placeholder milestone item 03' },
              { year: '20XX', event: 'Placeholder milestone item 04' },
            ].map((item, index) => (
              <article key={`${item.year}-${index}`} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-green-700">{item.year}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.event}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Placeholder Certifications Headline</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Placeholder Cert 01', 'Placeholder Cert 02', 'Placeholder Cert 03', 'Placeholder Cert 04'].map((item) => (
              <span key={item} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-14">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <article>
            <h2 className="text-3xl font-bold tracking-tight text-white">Placeholder Partnership CTA</h2>
            <p className="mt-2 text-sm text-green-100">Replace this CTA with your own conversion message.</p>
          </article>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50">
            Placeholder CTA Button
          </Link>
        </div>
      </section>
    </main>
  )
}
