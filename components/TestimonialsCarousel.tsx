'use client'

import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote:
      'upprocure has been a steady supplier for our switchgear assembly line. Lead times are predictable, the technical team replies fast on selection questions, and the OEM packaging support fits our regional brand requirements very well.',
    name: 'Andrei K.',
    role: 'Procurement Manager, LV Panel Builder',
    initials: 'AK',
  },
  {
    quote:
      'We import surge protectors and DC fuse holders for utility-scale PV projects. Documentation is always complete, the OEM packaging support fits our brand well, and the team is responsive whenever we have technical questions before placing orders.',
    name: 'Sofia M.',
    role: 'Solar Distributor',
    initials: 'SM',
  },
  {
    quote:
      'Mixed-container planning saved us a lot of warehousing pain. The team is responsive on RFQs and very clear on stock availability. Lead times are consistent and communication throughout the order process is straightforward and reliable.',
    name: 'Daniel O.',
    role: 'Electrical Wholesale Importer',
    initials: 'DO',
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/banner/about-bg.jpg" alt="" fill className="object-cover object-center" priority={false} />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Satisfied Customers Over The Globe</h2>
          <p className="mt-3 text-sm text-slate-300">See why global industry leaders rely on upprocure for their electrical systems.</p>
        </div>

        <div className="relative mt-12 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Previous"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="grid max-w-2xl w-full [grid-template-areas:'stack']">
            {testimonials.map((item, i) => (
              <div
                key={i}
                style={{ gridArea: 'stack' }}
                className={`rounded-2xl border border-white/10 bg-white/10 px-8 py-10 text-center backdrop-blur-sm transition-opacity duration-300 ${
                  i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <svg className="mx-auto mb-4 h-8 w-8 text-green-400 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base italic leading-relaxed text-slate-100">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-green-400 bg-green-700 text-sm font-bold text-white">
                    {item.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Next"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-green-400' : 'w-2 bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
