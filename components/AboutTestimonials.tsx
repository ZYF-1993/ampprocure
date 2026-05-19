'use client'

import { useState } from 'react'
import Link from 'next/link'

const pages = [
  [
    {
      quote: "upprocure has been a steady supplier for our switchgear assembly line. Lead times are predictable and the technical team replies fast on selection questions.",
      name: 'Andrei K.',
      company: 'LV Panel Builder — Eastern Europe',
      initials: 'AK',
    },
    {
      quote: "We import surge protectors and DC fuse holders for utility-scale PV projects. Documentation is complete and the OEM packaging support fits our brand very well.",
      name: 'Sofia M.',
      company: 'Solar Distributor — Latin America',
      initials: 'SM',
    },
  ],
  [
    {
      quote: "Mixed-container planning saved us a lot of warehousing pain. They are responsive on RFQs and clear on what is and is not in stock.",
      name: 'Daniel O.',
      company: 'Electrical Wholesale Importer — Middle East',
      initials: 'DO',
    },
    {
      quote: "Their SPD solutions are comprehensive and the engineering team provided detailed documentation that simplified our compliance review significantly.",
      name: 'Marco R.',
      company: 'Systems Integrator — Southern Europe',
      initials: 'MR',
    },
  ],
]

const starPath = 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d={starPath} />
        </svg>
      ))}
    </div>
  )
}

export default function AboutTestimonials() {
  const [page, setPage] = useState(0)

  return (
    <section className="bg-teal-800 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-center">

          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-600/30 px-4 py-1.5 text-sm font-semibold text-green-300">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
              Testimonials
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-snug text-white sm:text-4xl">
              What Our Client <span className="text-green-400">Say&apos;s</span> About Us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-teal-200">
              Client testimonials praise our deep understanding of their challenges, which leads to innovative solutions and strong ROI. Long-term collaborations — some over a decade — demonstrate their trust and satisfaction.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Know More ↗
            </Link>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {pages[page].map((t) => (
                <div key={t.name} className="relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg">
                  <div>
                    <Stars />
                    <p className="mt-4 flex-1 text-sm italic leading-relaxed text-gray-600">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 flex items-end justify-between">
                    <div className="border-l-2 border-green-500 pl-3">
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-green-600">{t.company}</p>
                    </div>
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-green-400 bg-green-700 text-sm font-bold text-white">
                      {t.initials}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all ${i === page ? 'w-6 bg-green-400' : 'w-2 bg-white/30'}`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
