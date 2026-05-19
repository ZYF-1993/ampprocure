'use client'

import { useState } from 'react'

interface Props {
  items: readonly (readonly [string, string])[]
}

export default function FaqAccordion({ items }: Props) {
  const [open, setOpen] = useState<number>(0)

  return (
    <div className="mx-auto mt-10 divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {items.map(([question, answer], i) => {
        const isOpen = open === i
        return (
          <div key={question}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50"
            >
              <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-green-700' : 'text-gray-900'}`}>
                {question}
              </span>
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
              <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500">{answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
