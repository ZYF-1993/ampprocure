import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'upprocure Terms of Use — the rules and conditions that govern your use of our website and services.',
  alternates: {
    canonical: '/terms',
  },
}

const sections = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing or using the upprocure website (upprocure.com), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website. These terms apply to all visitors, business customers, and anyone who accesses or uses our website. upprocure reserves the right to update these terms at any time; continued use of the website following any changes constitutes your acceptance of the revised terms.`,
  },
  {
    title: 'Use of the Website',
    body: `You may use this website solely for lawful business purposes, including browsing our product catalog, submitting product inquiries, requesting quotations, and accessing technical resources. You agree not to use the website in any way that could damage, disable, overburden, or impair it, or interfere with any other user's access. Unauthorized scraping, crawling, or automated data collection without prior written consent from upprocure is strictly prohibited.`,
  },
  {
    title: 'Product Information & Pricing',
    body: `Product descriptions, specifications, and images on this website are provided for general reference and are subject to change without notice. While we strive for accuracy, upprocure does not warrant that all product information is complete, current, or error-free. All prices are indicative and subject to formal quotation; actual pricing depends on order quantity, delivery terms, and market conditions. A binding agreement is formed only upon written confirmation of a purchase order by upprocure.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content on this website — including text, product photographs, technical documentation, logos, and graphics — is the intellectual property of upprocure or its licensors and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without prior written permission from upprocure. Limited use for personal, non-commercial reference purposes is permitted provided that all copyright notices are retained.`,
  },
  {
    title: 'Disclaimer of Warranties',
    body: `This website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. upprocure does not warrant that the website will be uninterrupted or error-free, that defects will be corrected, or that the website or servers are free of viruses or other harmful components. Your use of any information or materials on this website is entirely at your own risk.`,
  },
  {
    title: 'Limitation of Liability',
    body: `To the fullest extent permitted by applicable law, upprocure and its officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or reliance on its content. Our total liability in any matter arising out of or relating to these terms shall not exceed the amount you have paid to upprocure in the three months preceding the event giving rise to the claim. For questions about these Terms, please contact us at zyf5732@gmail.com.`,
  },
] as const

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            {' '}/ <span className="text-slate-600">Terms of Use</span>
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Terms of Use</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-4xl space-y-8 px-4 text-sm leading-7 text-slate-700 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-slate-600">
            Please read these Terms of Use carefully before using the upprocure website. These terms set out the rights and responsibilities of all users of our website and services.
          </p>
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">{section.title}</h2>
              <p className="mt-3">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
