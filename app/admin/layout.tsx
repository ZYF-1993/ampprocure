import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  if (process.env.ADMIN_CONSOLE_ENABLED !== 'true') {
    notFound()
  }

  return children
}
