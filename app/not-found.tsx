import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-slate-900">
      <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">Route Not Included In Mirrored Framework</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          The requested path is outside the copied jyins route map. Use the homepage to navigate existing mirrored routes.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700"
        >
          Back to Homepage Framework
        </Link>
      </section>
    </main>
  )
}
