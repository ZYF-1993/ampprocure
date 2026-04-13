import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InquiryForm from '@/components/InquiryForm'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CATALOG_PRODUCT_COUNT } from '@/lib/catalog-products'
import { getCatalogPageImage } from '@/lib/catalog-utils'
import { FRAMEWORK_CATEGORIES } from '@/lib/framework-data'
import { SITE_NAME, SITE_URL } from '@/lib/site-config'

const latestPosts = [...BLOG_POSTS].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)).slice(0, 3)

const processSteps = [
  { title: 'Placeholder Workflow Step 01', text: 'Replace with your actual workflow description.' },
  { title: 'Placeholder Workflow Step 02', text: 'Replace with your actual workflow description.' },
  { title: 'Placeholder Workflow Step 03', text: 'Replace with your actual workflow description.' },
  { title: 'Placeholder Workflow Step 04', text: 'Replace with your actual workflow description.' },
] as const

const trustCards = [
  { title: 'Placeholder Trust Point 01', text: 'Replace with your actual trust statement.' },
  { title: 'Placeholder Trust Point 02', text: 'Replace with your actual trust statement.' },
  { title: 'Placeholder Trust Point 03', text: 'Replace with your actual trust statement.' },
  { title: 'Placeholder Trust Point 04', text: 'Replace with your actual trust statement.' },
] as const

const testimonials = [
  { quote: 'Placeholder testimonial line for social proof area.', role: 'Placeholder Role', company: 'Placeholder Company' },
  { quote: 'Placeholder testimonial line for social proof area.', role: 'Placeholder Role', company: 'Placeholder Company' },
  { quote: 'Placeholder testimonial line for social proof area.', role: 'Placeholder Role', company: 'Placeholder Company' },
] as const

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  description: 'Placeholder organization schema description.',
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Placeholder homepage metadata description.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0">
          <Image src={getCatalogPageImage(10)} alt="Homepage hero placeholder image" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px]">
            <article>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">Placeholder Hero Label</p>
              <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Placeholder Hero Headline For Your Homepage</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Placeholder hero description. Replace with your core value statement and conversion message.</p>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <Link href="/products" className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700 sm:w-auto">
                  Placeholder Primary CTA
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto"
                >
                  Placeholder Secondary CTA
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {['Placeholder Tag 01', 'Placeholder Tag 02', 'Placeholder Tag 03', 'Placeholder Tag 04'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 shadow-2xl shadow-black/25 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-green-300">Placeholder Stats</p>
              <dl className="mt-5 grid grid-cols-2 gap-5">
                <div>
                  <dt className="text-2xl font-bold text-white">00+</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-slate-300">Placeholder metric label</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-white">00+</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-slate-300">Placeholder metric label</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-white">{CATALOG_PRODUCT_COUNT}+</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-slate-300">Placeholder metric label</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-white">24h</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-slate-300">Placeholder metric label</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: 'Placeholder Focus Block 01', text: 'Replace this short description with your own copy.' },
              { title: 'Placeholder Focus Block 02', text: 'Replace this short description with your own copy.' },
              { title: 'Placeholder Focus Block 03', text: 'Replace this short description with your own copy.' },
            ].map((item) => (
              <article key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-green-700">{item.title}</p>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Placeholder Process Label</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Placeholder Process Headline</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">Replace this process intro with your own messaging.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Placeholder Categories Label</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{FRAMEWORK_CATEGORIES.length} Placeholder Categories</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">Replace this with your category overview description.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {FRAMEWORK_CATEGORIES.map((category, index) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:border-green-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-center bg-gray-50 p-6 transition-colors group-hover:bg-green-50" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={getCatalogPageImage(12 + index)}
                    alt={`${category.title} placeholder image`}
                    width={160}
                    height={160}
                    className="h-28 w-28 object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-gray-100 px-4 py-3 text-center">
                  <h3 className="text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-700">{category.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">{category.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Placeholder Trust Label</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Placeholder Trust Headline</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card) => (
              <article key={card.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Placeholder About Label</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Placeholder About Section Title</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">Replace this with your short company overview paragraph.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>- Placeholder bullet one</li>
              <li>- Placeholder bullet two</li>
              <li>- Placeholder bullet three</li>
            </ul>
          </article>

          <article className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image src={getCatalogPageImage(25)} alt="About section placeholder image" width={1200} height={840} className="h-auto w-full" />
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Placeholder Gallery Label</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Placeholder Gallery Headline</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {[51, 52, 53, 54, 55].map((page) => (
              <article key={page} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <Image src={getCatalogPageImage(page)} alt={`Gallery placeholder ${page}`} width={640} height={480} className="h-40 w-full object-cover" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Placeholder Badges Label</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Placeholder Certification Headline</h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {['Placeholder Badge 01', 'Placeholder Badge 02', 'Placeholder Badge 03', 'Placeholder Badge 04'].map((item) => (
              <span key={item} className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-700 py-14">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <article>
            <h2 className="text-3xl font-bold tracking-tight text-white">Placeholder CTA Headline</h2>
            <p className="mt-2 text-sm text-green-100">Replace this line with your own call-to-action message.</p>
          </article>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50">
            Placeholder CTA Button
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Placeholder Blog Label</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Placeholder Blog Headline</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {latestPosts.map((post, index) => (
              <article key={post.slug} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <Image src={getCatalogPageImage(38 + index)} alt={`${post.title} placeholder article image`} width={760} height={460} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-green-700 transition hover:text-green-800">
                    Placeholder Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <Image src={getCatalogPageImage(44)} alt="Testimonials section placeholder image" fill className="object-cover" />
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Placeholder Testimonials Headline</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, idx) => (
              <article key={`${item.role}-${idx}`} className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-slate-100">&quot;{item.quote}&quot;</p>
                <p className="mt-4 text-sm font-semibold text-white">{item.role}</p>
                <p className="text-xs text-slate-300">{item.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <article className="lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Placeholder Contact Label</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Placeholder Contact Headline</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">Replace with your real contact guidance text.</p>

              <ul className="mt-8 space-y-5">
                <li className="text-sm text-gray-700">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Address</p>
                  <p className="mt-1">[Placeholder Address]</p>
                </li>
                <li className="text-sm text-gray-700">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email</p>
                  <a href="mailto:placeholder@example.com" className="mt-1 inline-block hover:text-green-700">
                    placeholder@example.com
                  </a>
                </li>
                <li className="text-sm text-gray-700">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Phone / WhatsApp</p>
                  <a href="tel:+10000000000" className="mt-1 inline-block hover:text-green-700">
                    +1 000 000 0000
                  </a>
                </li>
              </ul>
            </article>

            <article className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                <h3 className="text-lg font-bold text-gray-900">Placeholder Form Title</h3>
                <p className="mb-6 mt-1 text-xs text-gray-500">Replace with your form helper text.</p>
                <InquiryForm source="home-enquiry" submitLabel="Placeholder Submit" twoColumnOnDesktop redirectOnSuccess="/thank-you" />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
