import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InquiryForm from '@/components/InquiryForm'
import AboutTestimonials from '@/components/AboutTestimonials'
import FaqAccordion from '@/components/FaqAccordion'

const imageBase = '/images/solutions/aerosol-fire-extinguisher'

export const metadata: Metadata = {
  title: 'Aerosol Fire Extinguisher Manufacturer & OEM Supplier',
  description:
    'upprocure manufactures DIN rail thermal aerosol fire extinguishers for electrical cabinets, PV combiner boxes & industrial enclosures. ISO certified, 15+ years experience, OEM/ODM available. Request a quote today.',
  keywords: [
    'aerosol fire extinguisher manufacturer',
    'electrical cabinet fire suppression',
    'DIN rail fire sticker',
    'OEM aerosol fire extinguisher',
    'PV combiner box fire protection',
    'thermal aerosol suppression supplier',
  ],
  alternates: {
    canonical: '/solutions/aerosol-fire-extinguisher',
  },
}

const stats = [
  ['15+', 'Years Manufacturing'],
  ['80+', 'Countries Served'],
  ['500+', 'Product Models'],
  ['ISO', '9001 Certified'],
] as const

const products = [
  {
    title: 'Din Rail Aerosol Fire Extinguisher',
    image: 'din-rail-aerosol-fire-extinguisher.jpg',
    bullets: ['Model: QRR-0.01G (-2/10 R LT)', 'Dosage: 10g / 20g', 'Volume: Protects <=0.4m³ to <=0.8m³', 'Size: Ultra-compact (84.5 x 18 x 60mm)', 'Mounting: DIN Rail / 3M Magnetic'],
  },
  {
    title: 'Wireless Aerosol Fire Suppression Device',
    image: 'Wireless-Aerosol-Fire-Suppression-Device.jpg',
    bullets: ['Installation: DIN Rail (Controller)', 'Extinguisher: External Magnetic Mount', 'Coverage: Multi-Zone Capable', 'Cable Length: Customizable', 'Alarm: Sound & Light (Integrated)', 'Safety: Fire Feedback Signal'],
  },
  {
    title: 'Wireless Aerosol Fire Suppression Device RS485',
    image: 'Wireless-Gas-Automatic-Gire-Supression-Device-RS485.jpg',
    bullets: ['Comm Protocol: RS485 (Modbus RTU)', 'Protection Vol: 0.5m³ to 3.0m³', 'Trigger Mode: Thermal / Smoke / Remote', 'Power Supply: AC220V ±20%', 'Backup Power: ≥ 10 Seconds', 'Operating Temp: -40°C ~ +70°C'],
  },
  {
    title: 'Wireless Aerosol Fire Suppression Device 4G Type',
    image: 'Wireless-Gas-Automatic-Gire-Supression-Device-4G-Type.jpg',
    bullets: ['Network: 4G LTE + RS485', 'Remote Features: App Status / SMS Alerts', 'Firmware: Remote OTA Upgrade', 'Sensors: Smoke + Temperature', 'Location: Built-in GPS/Base Station', 'Maintenance: Auto-Self Check'],
  },
] as const

const technology = [
  ['Aerosol Generator Compound (Solid State)', 'A stable solid mixture of oxidizer and reducing agent. Converts to fire-suppressing gas only upon activation. Non-pressurized.'],
  ['Advanced Cooling Vents', 'Housing design directs heat away to ensure casing temperature remains safe (<75°C).'],
  ['Discharge Outlet', 'Precision nozzle enables rapid flooding of the cabinet in <= 6 seconds.'],
  ['DIN Rail Mounting Clip', 'Standard 35mm DIN rail integration allows it to sit perfectly alongside MCBs and terminal blocks.'],
  ['Thermal Activation Cord', '(Blue line) Heat-sensitive cord activates mechanically at 170°C, ensuring operation even during total power failure.'],
] as const

const facilities = [
  ['Aerosol--fire-extinguisher-production-line.jpg', 'Aerosol fire extinguisher production line'],
  ['Automated-assembly-workshop.jpg', 'Automated assembly workshop'],
  ['Quality-inspection-station.jpg', 'Quality inspection station'],
  ['R&D-testing-laboratory.jpg', 'R&D testing laboratory'],
  ['Finished-goods-warehouse.jpg', 'Finished goods warehouse'],
  ['Packaging-and-shipping-area.jpg', 'Packaging and shipping area'],
] as const

const exhibitions = [
  ['展会图片6.jpg', 'upprocure exhibition booth photo 6'],
  ['展会图片1.jpg', 'upprocure exhibition booth photo 1'],
  ['展会图片2.jpg', 'upprocure exhibition booth photo 2'],
  ['展会图片3.jpg', 'upprocure exhibition booth photo 3'],
  ['展会图片4.jpg', 'upprocure exhibition booth photo 4'],
] as const

const services = [
  [
    'Service Consultation',
    'Whether your requirements are straightforward or complex, our team provides expert advice and technical consultation. For more intricate projects, we offer in-depth engineering support to ensure optimal product selection, guaranteeing safety and efficiency in your electrical systems.',
  ],
  [
    'Product Recommendations',
    'Unsure which aerosol fire extinguisher suits your system? Our specialists provide free, customized recommendations based on your specific operational and environmental requirements, ensuring you get the perfect fit for your electrical protection needs.',
  ],
  [
    'Logistics Support',
    'If you lack a reliable freight forwarder, we can arrange transportation from our factory to your project site at no extra cost. Our logistics team ensures timely and secure delivery to keep your project on schedule, minimizing downtime and delays.',
  ],
  [
    'Installation Support',
    'Need help with installation? Our technical team is available to answer your questions or provide hands-on support. For larger projects, we can even dispatch an engineer to your site for on-the-ground assistance, ensuring seamless integration within your electrical network.',
  ],
] as const

const faqs = [
  ['What is a DIN Rail Aerosol Fire Extinguisher and where is it used?', 'A DIN Rail Aerosol Fire Extinguisher is a compact fire suppression device designed specifically to snap onto standard 35mm DIN rails found in electrical cabinets. It is used to protect enclosed spaces like meter boxes, server racks, and low-voltage switchgear by extinguishing fires at the source before they spread.'],
  ['Is the aerosol residue harmful to electronics?', 'No. upprocure aerosol produces a micron-sized particulate that is non-corrosive and non-conductive. After a discharge, the fine dust can be blown out or wiped away. It does not damage circuit boards like water or foam would.'],
  ['How do I install the extinguisher on a DIN rail?', 'Installation is "plug-and-play." The QRR series features a specialized mounting clip that attaches directly to the 35mm guide rail. For cabinets without rails, the device also supports magnetic suction or screw fixation, allowing flexible placement near potential fire sources.'],
  ['Does the device require electricity to activate?', 'No, it can operate passively. The primary activation method is a Thermal Sensing Cord that snakes through the cabinet. If the temperature hits 170°C, it triggers mechanically. However, for Smart models, electrical activation via smoke sensors or remote control is also supported.'],
  ['Do I need to check the pressure gauge annually?', 'No. Unlike traditional gas cylinders, upprocure aerosol extinguishers are non-pressurized solid-state devices. They are maintenance-free for their entire 10-year service life. You do not need to perform annual weighing or pressure checks.'],
  ['What is the safety distance for the discharge nozzle?', 'Keep the nozzle at least 0.3m away from the protected object (like wires or breakers) and 1.5m away from personnel. Ensure there are no obstacles within 500mm directly in front of the nozzle.'],
  ['Can I connect the extinguisher to a fire alarm control panel?', 'Yes. The device includes "Fire Feedback" and "Switch Output" terminals. When activated, it sends a passive contact signal to your main fire alarm system or BMS to indicate a discharge event.'],
  ['Is the aerosol residue conductive or corrosive to circuit boards?', 'The Heat Aerosol Fire Extinguishing Device uses a new-generation formula that is non-corrosive and safe for electronics. While a fine particulate settles after discharge, it is non-conductive and can be cleaned. It is designed specifically for electrical environments.'],
  ['What happens if the main AC power is cut during a fire?', 'For the Smart Series (connected to AC220V), the device has a built-in Power-off Continuous Work feature. It can continue to detect and operate for at least 10 seconds after a total power loss, ensuring protection during electrical faults.'],
  ['Does the DIN Rail series support RS485 or 4G monitoring?', 'Yes. We offer specific models (RS485 Type and 4G Type) that integrate Modbus protocol. This allows real-time monitoring of temperature, smoke density, and device status via a PC or Mobile App.'],
  ['Can this be used in outdoor solar combiner boxes?', 'Yes. The device is built for harsh environments. The integrated type works from -40°C to +70°C, and the standard type operates from -50°C to +90°C, making it ideal for outdoor PV inverters and battery storage systems.'],
] as const

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">{title}</h2>
      {text ? <p className="mt-3 text-base leading-7 text-gray-500">{text}</p> : null}
      <div className="mx-auto mt-4 h-0.5 w-12 rounded bg-green-600" />
    </div>
  )
}

function ServiceIcon({ title }: { title: string }) {
  if (title === 'Service Consultation') {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12.75h.008v.008h-.008v-.008Zm3.367 0H12v.008h-.008v-.008Zm3.375 0h.008v.008h-.008v-.008Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 3.314-3.806 6-8.5 6a10.78 10.78 0 0 1-3.306-.505L3 20l1.783-4.109C4.285 14.714 4 13.386 4 12c0-3.314 3.806-6 8.5-6S21 8.686 21 12Z" />
      </svg>
    )
  }

  if (title === 'Product Recommendations') {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75 5.25 6.3v5.325c0 4.247 2.867 7.958 6.75 9 3.883-1.042 6.75-4.753 6.75-9V6.3L12 3.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12.25 1.75 1.75 3.75-4" />
      </svg>
    )
  }

  if (title === 'Logistics Support') {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h10.5v9.75H3.75V6.75Zm10.5 3h3.25l2.75 3.25v3.5h-6v-6.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.25 18.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      </svg>
    )
  }

  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.25 6.75 3-3 3 3-3 3-3-3ZM3.75 20.25l7.5-7.5m0 0 2.25 2.25m-2.25-2.25L9 10.5m4.5 4.5 1.5 1.5M9 10.5 6.75 12.75 3.75 9.75 6 7.5l3 3Zm4.5 4.5 3.75 3.75" />
    </svg>
  )
}

export default function AerosolFireExtinguisherSolutionPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
        <Image src={`${imageBase}/hero-bg.jpg`} alt="Aerosol fire extinguisher manufacturing facility" fill priority className="object-cover opacity-30" sizes="100vw" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-xl flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-400">Manufacturer & OEM Supplier</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">Aerosol Fire Extinguisher Solutions</h1>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                Passive thermal aerosol fire suppression systems engineered for total enclosure protection. Zero power requirements, zero wiring, zero maintenance — deliver industrial-grade fire safety backed by 15+ years of manufacturing expertise.
              </p>
              <Link href="#contact-form" className="mt-8 inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                Get a Free Quote
              </Link>
            </div>
            <div className="w-full shrink-0 lg:w-[420px] xl:w-[500px]">
              <div className="relative h-[280px] overflow-hidden rounded-3xl shadow-2xl">
                <Image src={`${imageBase}/Aerosol-Fire-Extinguisher-Solutions.jpg`} alt="Aerosol fire extinguisher for electrical cabinet" fill priority className="object-cover brightness-75" sizes="(max-width: 1024px) 100vw, 500px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="text-center">
                <dt className="text-3xl font-bold text-green-700">{value}</dt>
                <dd className="mt-1 text-sm text-gray-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Product Range" title="Aerosol Fire Extinguisher Products" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="relative h-52 w-full overflow-hidden rounded-t-2xl bg-white">
                  <Image src={`${imageBase}/${product.image}`} alt={product.title} fill className="object-contain p-4" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm font-semibold leading-snug text-gray-950">{product.title}</h3>
                  <ul className="mt-4 flex-1 space-y-2 text-xs leading-5 text-gray-600">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact-form" className="mt-5 inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800">
                    Get Quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Product Technology" title="Inside upprocure Technology" text="Engineered for reliability. See what makes the industry standard for miniature fire suppression." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div className="space-y-4">
              {technology.map(([title, text]) => (
                <article key={title} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative h-[420px] overflow-hidden rounded-2xl bg-white shadow-sm sm:col-span-2">
                <Image src={`${imageBase}/aerosol-tech-diagram.jpg`} alt="Aerosol fire extinguisher internal structure diagram" fill className="object-contain p-4" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl bg-gray-200 shadow-sm sm:col-span-2">
                <Image src={`${imageBase}/aerosol-installed.jpg`} alt="Aerosol fire extinguisher installed in electrical cabinet" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative min-h-[430px] overflow-hidden rounded-3xl bg-gray-100">
            <Image src={`${imageBase}/Aerosol-Fire-Extinguisher-factory.jpg`} alt="upprocure aerosol fire extinguisher manufacturing facility" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 p-5 shadow-lg">
              <p className="text-3xl font-bold text-blue-700">15+</p>
              <p className="mt-1 text-sm font-medium text-gray-700">Years of Experience</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">About upprocure</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">We Are The Leading Manufacturer For Aerosol Fire Extinguisher Solutions</h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              upprocure is a factory-direct manufacturer specializing in aerosol fire suppression devices for electrical cabinets and industrial enclosures. With over 15 years of expertise, ISO 9001 certified production, and 200,000+ units delivered annually, we provide reliable OEM and ODM solutions to distributors and system integrators across 80+ countries.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-green-50 p-5">
                <h3 className="text-sm font-bold text-gray-950">In-House R&D</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">Own laboratory for product testing and continuous improvement of aerosol suppression technology.</p>
              </div>
              <div className="rounded-xl bg-green-50 p-5">
                <h3 className="text-sm font-bold text-gray-950">OEM / ODM Ready</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">Full customization — your logo, label, capacity and packaging, with flexible MOQ.</p>
              </div>
            </div>
            <Link href="/about" className="mt-7 inline-flex font-semibold text-green-700 hover:text-green-800">
              Discover More →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Our Facilities" title="Factory Capabilities & Production Lines" text="Automated workflows, strict quality control, on-time global delivery." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(([image, alt]) => (
              <div key={image} className="relative h-56 overflow-hidden rounded-2xl bg-gray-200 shadow-sm">
                <Image src={`${imageBase}/${image}`} alt={alt} fill className="object-cover transition duration-300 hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Global Presence" title="Exhibitions & Events" text="Join us at global trade shows to discover our electrical and solar innovations. Let's build a reliable partnership together." />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            {exhibitions.map(([image, alt], index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-xl ${index === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}
              >
                <div className={`relative w-full ${index === 0 ? 'h-64 md:h-full' : 'h-52 md:h-64'}`} style={index === 0 ? { minHeight: '320px' } : undefined}>
                  <Image
                    src={`${imageBase}/${image}`}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes={index === 0 ? '(max-width: 768px) 100vw, 420px' : '(max-width: 768px) 50vw, 420px'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-700 py-14">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get Your{' '}
            <span className="underline decoration-green-400 decoration-2 underline-offset-4">
              Free Sample!
            </span>
          </h2>
          <p className="mt-4 text-base font-medium text-gray-300">
            We provide samples for free, you just need to tell us what you need.
          </p>
          <Link
            href="#contact-form"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-green-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" />
            </svg>
            Get Sample Now
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">Beyond Manufacturing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              More Than Just an Aerosol Fire Extinguisher Manufacturer
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 rounded bg-green-600" />
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-500">
              At upprocure, we go beyond manufacturing by offering a suite of value-added services tailored to meet your project needs. Every customer receives personalized attention, expert guidance, and seamless support throughout their journey with us.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map(([title, text]) => (
              <article key={title} className="flex gap-5 rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
                  <ServiceIcon title={title} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutTestimonials />

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Knowledge About DIN Rail Aerosol Fire Extinguishers</h2>
            <div className="mx-auto mt-3 h-0.5 w-12 rounded bg-green-600" />
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-gray-900 py-16 text-white sm:py-20">
        <Image src={`${imageBase}/world-map.jpg`} alt="" fill className="object-cover opacity-25" sizes="100vw" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Trusted Aerosol Fire Extinguisher</h2>
            <p className="mt-2 text-xl font-semibold text-green-300">Made in China. Global Shipping.</p>
            <p className="mt-5 text-base leading-8 text-gray-300">
              Based in Yueqing, China — the electrical manufacturing hub — upprocure combines in-house production with 15+ years of R&D to deliver reliable aerosol fire suppression devices worldwide.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ['200,000+', 'Units Per Year'],
              ['80+', 'Countries & Regions Served'],
              ['15+', 'Years Experience'],
              ['50,000㎡', 'Factory in Total'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <dt className="text-2xl font-bold text-white">{value}</dt>
                <dd className="mt-1 text-sm text-gray-300">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact-form" className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">Contact Us</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">Have questions about our products or need assistance with a project? Our team is ready to help you find the perfect electrical solution.</p>
            <div className="mt-7 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Address</p>
                <p className="mt-1 text-sm text-gray-700">Fenghuang Industrial Zone, Baishi Town, Yueqing Zhejiang P. R. China</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email</p>
                <a href="mailto:zyf5732@gmail.com" className="mt-1 block text-sm text-gray-800 hover:text-green-700">zyf5732@gmail.com</a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Phone / WhatsApp</p>
                <a href="tel:+8613552727303" className="mt-1 block text-sm text-gray-800 hover:text-green-700">+86-13552727303</a>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Business Hours</h3>
                <dl className="mt-3 space-y-1.5 text-xs">
                  {['Monday – Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div key={day} className="flex justify-between">
                      <dt className="text-gray-500">{day}</dt>
                      <dd className="font-medium text-gray-800">09:00 – 22:00 CST</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-gray-400">Emails are monitored outside hours. We aim to respond within 24 hours on business days.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">Send an Enquiry</h2>
              <p className="mt-1 text-xs text-gray-500">All fields marked * are required.</p>
              <InquiryForm source="aerosol-solution" defaultProduct="Aerosol Fire Extinguisher" submitLabel="Send Now" twoColumnOnDesktop showInquiryType />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
