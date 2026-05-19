'use client'

import { useState } from 'react'

const WA_NUMBER = '8613552727303'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Thank you for contacting UPprocure. You will be chatting with +86 135 5272 7303 on WhatsApp.')}`

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.965.985-3.595A9.816 9.816 0 012.12 12c0-5.453 4.436-9.88 9.909-9.88S21.938 6.547 21.938 12c0 5.454-4.437 9.88-9.909 9.88z" />
    </svg>
  )
}

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
          <div className="flex items-start justify-between bg-teal-700 px-4 py-3">
            <div>
              <p className="text-base font-bold text-white">Click to Chat</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-teal-100">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                I am Online Now!
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-2 mt-0.5 text-teal-200 transition hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="bg-[#e5ddd5] px-4 py-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4b5a0' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}>
            <div className="inline-block rounded-lg rounded-tl-none bg-white px-4 py-2.5 shadow-sm">
              <p className="text-sm text-gray-800">Chat for UPprocure Now! 👋</p>
            </div>
          </div>

          <div className="bg-white px-4 py-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
            <p className="mt-2 text-center text-xs text-gray-400">
              Online |{' '}
              <a href="/privacy" className="hover:underline">Privacy policy</a>
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:bg-green-600 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
      </button>
    </div>
  )
}
