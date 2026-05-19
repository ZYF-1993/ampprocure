'use client'

import Image from 'next/image'
import { useState } from 'react'

type ProductGalleryProps = {
  images: readonly string[]
  name: string
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const galleryImages = images.length > 0 ? images : ['/placeholders/industrial-placeholder.svg']
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = galleryImages[activeIndex] ?? galleryImages[0]
  const hasMultipleImages = galleryImages.length > 1

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1))
  }

  function showNext() {
    setActiveIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
        <Image
          src={activeImage}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-8 transition-opacity duration-200"
          priority
        />

        {hasMultipleImages ? (
          <>
            <button
              type="button"
              className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition hover:bg-white"
              aria-label="Previous image"
              onClick={showPrevious}
            >
              <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition hover:bg-white"
              aria-label="Next image"
              onClick={showNext}
            >
              <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </>
        ) : null}

        <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
          {activeIndex + 1} / {galleryImages.length}
        </span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {galleryImages.map((image, index) => {
          const active = index === activeIndex

          return (
            <button
              key={image}
              type="button"
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                active ? 'border-green-600 shadow-sm' : 'border-gray-200 hover:border-gray-400'
              }`}
              aria-label={`View image ${index + 1}`}
              aria-pressed={active}
              onClick={() => setActiveIndex(index)}
            >
              <Image src={image} alt={name} fill sizes="64px" className="object-contain p-1.5" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
