import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/InquiryForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Placeholder contact page description. Replace with your inquiry and support messaging.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{' '}
            / <span className="text-slate-600">Contact</span>
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">Placeholder Contact Page Title</h1>
          <p className="mt-3 max-w-3xl text-xl leading-8 text-slate-600">Placeholder contact intro. Replace with your real response promise and support process.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <article>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Placeholder Contact Block</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Replace this with your contact instructions and inquiry expectations.</p>

            <ul className="mt-8 space-y-5">
              <li className="text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Address</p>
                <p className="mt-1">[Placeholder Address]</p>
              </li>
              <li className="text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
                <a href="mailto:placeholder@example.com" className="mt-1 inline-block hover:text-green-700">
                  placeholder@example.com
                </a>
              </li>
              <li className="text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Phone / WhatsApp</p>
                <a href="tel:+10000000000" className="mt-1 inline-block hover:text-green-700">
                  +1 000 000 0000
                </a>
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Placeholder Form Header</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Replace with your form helper text and expected response timeline.</p>
            <InquiryForm source="contact-sales" submitLabel="Placeholder Submit" twoColumnOnDesktop redirectOnSuccess="/thank-you" />
          </article>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Placeholder Service Highlights</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {['Placeholder Service Card 01', 'Placeholder Service Card 02', 'Placeholder Service Card 03'].map((title) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Placeholder card description. Replace with your own operational statement.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
