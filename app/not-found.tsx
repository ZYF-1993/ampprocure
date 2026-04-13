import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-4xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">Page Not Found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">The page you requested is not available. Continue from the main navigation.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center justify-center rounded-md bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
            Back to Home
          </Link>
          <Link href="/products" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">
            Browse Products
          </Link>
        </div>
      </section>
    </main>
  )
}
