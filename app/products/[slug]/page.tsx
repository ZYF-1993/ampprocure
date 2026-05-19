import { existsSync, readdirSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProductGallery from '@/components/ProductGallery'
import { CATALOG_PRODUCTS, type CatalogProduct } from '@/lib/catalog-products'
import { SITE_URL } from '@/lib/site-config'
import { getProductBySlug } from '@/lib/site-content'

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>
}

function buildProductDescription(product: CatalogProduct): string {
  return product.technicalSummary
}

function publicFileExists(publicPath: string): boolean {
  return existsSync(join(process.cwd(), 'public', publicPath.replace(/^\//, '')))
}

function getProductGalleryImages(product: CatalogProduct): string[] {
  const directoryPath = join(process.cwd(), 'public', 'images', 'products')
  const fileName = product.image.split('/').pop()
  const match = fileName?.match(/^(.*?)(\d+)(\.[a-zA-Z0-9]+)$/)

  if (!match || !existsSync(directoryPath)) {
    return publicFileExists(product.image) ? [product.image] : []
  }

  const [, prefix, , extension] = match

  return readdirSync(directoryPath)
    .map((item) => {
      const imageMatch = item.match(new RegExp(`^${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\d+)${extension.replace('.', '\\.')}$`))
      return imageMatch ? { fileName: item, index: Number(imageMatch[1]) } : null
    })
    .filter((item): item is { fileName: string; index: number } => Boolean(item))
    .sort((a, b) => a.index - b.index)
    .map((item) => `/images/products/${item.fileName}`)
}

function getProductDetailCopy(product: CatalogProduct) {
  if (product.slug === 'MCB-AC-1P') {
    return {
      description:
        'The upprocure 1 Pole MCB is engineered for residential and light commercial single-phase circuits, providing reliable overload and short-circuit protection for lighting branches, socket outlets, and small appliances. Its slim single-module width (18mm) allows maximum circuit density in compact distribution boards. Manufactured in our ISO 9001 certified facility with 18 years of expertise, each unit undergoes 100% electrical testing before shipment. Available in B, C, and D trip curves to suit different load characteristics - B curve for sensitive resistive loads, C curve for general use, D curve for high-inrush equipment.',
      features: [
        'Slim 18mm single-module width - maximises circuit density in compact boards',
        'B / C / D trip curve options - covers lighting, general, and motor loads',
        'Ideal for residential distribution boards and socket circuit protection',
        'CE & RoHS certified - accepted in EU, UK, and global markets',
        '100% factory electrical test before shipment',
        'OEM / ODM customization available - logo, color, rating label',
        '18-year ISO 9001 certified manufacturing facility',
      ],
      specs: [
        ['Poles', '1P'],
        ['Rated Current', '6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A Customed'],
        ['Rated Voltage', '120V / 230V AC'],
        ['Breaking Capacity', '4.5 kA, 6 kA Customed'],
        ['Trip Curve', 'C, B, D Customed'],
        ['Housing Material', 'Flame-Retardant Thermoplastic'],
        ['Mechanical Life', '20,000 operations'],
        ['Electrical Life', '10,000 operations'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS, IEC 60898-1'],
        ['Mounting Method', 'DIN Rail Mounting (35mm)'],
        ['Contact Material', 'High-Conductivity Copper Alloy'],
      ],
    }
  }

  return {
    description: product.technicalSummary,
    features: [
      product.technicalSummary,
      'OEM / ODM customization available - logo, color, packaging, and rating label',
      'Factory quotation, sample support, and bulk order coordination',
      'CE, RoHS, IEC and factory documentation available on request',
      'Product matching support for distributors, panel builders, and project contractors',
    ],
    specs: [
      ['Product Name', product.name],
      ['Category', product.category],
      ['Model / SKU', product.slug],
      ['Application', product.technicalSummary],
      ['Supply Support', 'Wholesale orders, OEM branding, and project quotation support'],
      ['Certification', 'CE, RoHS, IEC and factory documentation available on request'],
    ],
  }
}

function ProductCard({ product }: { product: CatalogProduct }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
      aria-label={product.name}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-green-700">{product.category}</p>
        <h3 className="mt-1 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-700">{product.name}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-gray-500">{product.technicalSummary}</p>

        <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-green-700">
          View Details
          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export function generateStaticParams() {
  return CATALOG_PRODUCTS.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product does not exist.',
    }
  }

  return {
    title: product.name,
    description: buildProductDescription(product),
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: buildProductDescription(product),
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
      type: 'website',
    },
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const galleryImages = getProductGalleryImages(product)
  const relatedProducts = CATALOG_PRODUCTS.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4)
  const detailCopy = getProductDetailCopy(product)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: buildProductDescription(product),
    sku: product.slug,
    category: product.category,
    image: `${SITE_URL}${product.image}`,
    url: `${SITE_URL}/products/${product.slug}`,
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className="border-b border-gray-100 bg-gray-50 py-3">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gray-600" data-i18n="header.home">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="transition-colors hover:text-gray-600" data-i18n="products.breadcrumbProducts">
              Products
            </Link>
            <span>/</span>
            <Link href={`/categories/${product.categoryCode}`} className="transition-colors hover:text-gray-600">
              {product.category}
            </Link>
            <span>/</span>
            <span className="inline-block max-w-40 truncate text-gray-600 align-bottom">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <ProductGallery images={galleryImages} name={product.name} />

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-700">{product.category}</p>

              <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">{product.name}</h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">{detailCopy.description}</p>

              <div className="mt-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900" data-i18n="product.keyFeatures">
                  KEY FEATURES
                </h2>
                <ul className="mt-5 space-y-3">
                  {detailCopy.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-base leading-7 text-gray-600">
                      <svg className="mt-1 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-green-700 px-6 py-4 text-base font-bold text-white transition-colors hover:bg-green-800"
                  data-i18n="product.requestQuote"
                >
                  Request Quotation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-300 px-6 py-4 text-base font-bold text-gray-800 transition-colors hover:bg-gray-50"
                  data-i18n="product.askTechnical"
                >
                  Ask Technical Question
                </Link>
              </div>

              <p className="mt-3 text-xs text-gray-400" data-i18n="product.availability">
                Samples available. OEM pricing on request. Ships worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white pb-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900" data-i18n="product.specsTitle">
              Technical Specifications
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {detailCopy.specs.map(([label, value], index) => (
                    <tr key={label} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <th className="w-1/3 px-5 py-3.5 text-left font-medium text-gray-700">{label}</th>
                      <td className="px-5 py-3.5 leading-6 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="border-t border-gray-100 bg-white py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900" data-i18n="product.relatedTitle">
              More in {product.category}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
