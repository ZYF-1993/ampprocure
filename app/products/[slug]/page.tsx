import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProductGallery from '@/components/ProductGallery'
import { CATALOG_PRODUCTS, type CatalogProduct } from '@/lib/catalog-products'
import { PRODUCT_DETAIL_CONTENT } from '@/lib/product-detail-content'
import { PRODUCT_GALLERY_IMAGES } from '@/lib/product-gallery-images.generated'
import { getProductDisplayName, getProductSeoDescription, getProductSeoTitle } from '@/lib/seo'
import { SITE_NAME, SITE_URL } from '@/lib/site-config'
import { getCanonicalProductSlug, getProductBySlug } from '@/lib/site-content'

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>
}

function getProductGalleryImages(product: CatalogProduct): readonly string[] {
  return PRODUCT_GALLERY_IMAGES[product.image] ?? [product.image]
}

function getProductDetailCopy(product: CatalogProduct) {
  const sourceDetail = PRODUCT_DETAIL_CONTENT[product.slug as keyof typeof PRODUCT_DETAIL_CONTENT]
  if (sourceDetail) {
    return sourceDetail
  }

  const { slug, categoryCode, name, technicalSummary } = product

  // ── MCB AC ──────────────────────────────────────────────────────────────
  if (slug.startsWith('MCB-AC-')) {
    const poles = slug.split('-')[2]
    const poleNum = parseInt(poles)
    const width = `${poleNum * 18}mm`
    const voltageMap: Record<string, string> = { '1P': '120V / 230V AC', '2P': '230V / 400V AC', '3P': '230V / 400V AC', '4P': '230V / 400V AC' }
    const useMap: Record<string, string> = {
      '1P': 'Ideal for residential lighting branches and socket circuit protection',
      '2P': 'Simultaneously disconnects live and neutral for full single-phase isolation',
      '3P': 'Full three-phase protection for industrial equipment and motor loads',
      '4P': 'Three-phase + neutral protection for TN-S and TN-C-S distribution systems',
    }
    return {
      description: `The upprocure ${poles} AC MCB provides reliable overcurrent and short-circuit protection for residential and commercial circuits. Its compact ${width} DIN rail form factor and wide current range (6–63A) with B, C, and D trip curves make it the go-to breaker for lighting branches, socket outlets, and motor loads. Manufactured in our ISO 9001 certified facility with 18 years of expertise; 100% electrically tested before shipment.`,
      features: [
        `${width} wide - maximises circuit density on 35mm DIN rail`,
        'B / C / D trip curve options - covers lighting, general use, and high-inrush motor loads',
        useMap[poles] ?? 'Suitable for residential and commercial distribution boards',
        'CE & RoHS certified - accepted in EU, UK, and global markets',
        '100% factory electrical test before shipment',
        'OEM / ODM customization available - logo, color, rating label',
        '18-year ISO 9001 certified manufacturing facility',
      ],
      specs: [
        ['Poles', poles],
        ['Rated Current', '6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A (customizable)'],
        ['Rated Voltage', voltageMap[poles] ?? '230V AC'],
        ['Breaking Capacity', '4.5 kA / 6 kA (customizable)'],
        ['Trip Curve', 'B, C, D (customizable)'],
        ['Module Width', width],
        ['Contact Material', 'High-Conductivity Copper Alloy'],
        ['Housing Material', 'Flame-Retardant Thermoplastic'],
        ['Mechanical Life', '20,000 operations'],
        ['Electrical Life', '10,000 operations'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS, IEC 60898-1'],
      ],
    }
  }

  // ── MCB DC ──────────────────────────────────────────────────────────────
  if (slug.startsWith('MCB-DC-')) {
    const poles = slug.split('-')[2]
    const poleNum = parseInt(poles)
    const width = `${poleNum * 18}mm`
    return {
      description: `The upprocure ${poles} DC MCB is purpose-built for solar PV string protection and DC circuit disconnection. With a 500V DC rating and compact ${width} DIN rail footprint, it delivers reliable overcurrent and short-circuit protection for battery storage banks, PV arrays, and DC distribution boards. CE certified to IEC 60947-2.`,
      features: [
        `${width} DC-optimised arc extinguishing chamber`,
        '500V DC rated - solar PV string and battery storage bank protection',
        'B / C / D trip curve for various DC load characteristics',
        'Simultaneous multi-pole disconnection for complete DC circuit isolation',
        'CE & RoHS certified - accepted in EU, UK, and global markets',
        'OEM / ODM customization available',
        '18-year ISO 9001 certified manufacturing facility',
      ],
      specs: [
        ['Poles', poles],
        ['Rated Current', '6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A (customizable)'],
        ['Rated Voltage', '500V DC'],
        ['Breaking Capacity', '3 kA / 6 kA DC (customizable)'],
        ['Trip Curve', 'B, C, D (DC characteristic)'],
        ['Module Width', width],
        ['Housing Material', 'Flame-Retardant Thermoplastic'],
        ['Mechanical Life', '20,000 operations'],
        ['Electrical Life', '10,000 operations'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS, IEC 60947-2'],
        ['Application', 'Solar PV arrays, battery storage, DC distribution panels'],
      ],
    }
  }

  // ── SPD AC ──────────────────────────────────────────────────────────────
  if (slug.startsWith('SPD-AC-')) {
    const poles = slug.split('-')[2]
    const poleNum = parseInt(poles)
    const modeMap: Record<string, string> = {
      '1P': 'N-PE (neutral-to-earth)',
      '2P': 'L-N, L-PE, N-PE (full mode)',
      '3P': 'L1-PE, L2-PE, L3-PE (per phase)',
      '4P': 'L1-PE, L2-PE, L3-PE, N-PE (full mode 3P+N)',
    }
    return {
      description: `The upprocure ${poles} AC SPD provides Class II transient overvoltage protection for ${poleNum <= 2 ? 'single-phase' : 'three-phase'} AC distribution systems. Its 40kA maximum discharge capacity and <25ns response time protect sensitive equipment from lightning-induced surges and switching transients. Modular hot-swappable design enables replacement without powering down the panel.`,
      features: [
        '40kA max discharge current - protects against direct and indirect lightning',
        `${modeMap[poles] ?? 'multi-mode'} protection coverage`,
        '<25ns response time - faster than equipment damage threshold',
        'Hot-swappable modular design - replace without panel shutdown',
        'LED status indicator - green OK / red fault for instant health check',
        'CE certified to IEC 61643-11',
        'OEM / ODM customization available',
      ],
      specs: [
        ['Poles', poles],
        ['System Voltage (Uc)', '385V AC (50/60 Hz)'],
        ['Max Discharge Current (Imax)', '40 kA (8/20 μs)'],
        ['Nominal Discharge Current (In)', '20 kA (8/20 μs)'],
        ['Protection Level (Up)', poleNum <= 2 ? '≤ 1.0 kV' : '≤ 1.5 kV'],
        ['Response Time', '< 25 ns'],
        ['Protection Mode', modeMap[poles] ?? 'multi-mode'],
        ['Status Indicator', 'LED (green = OK, red = fault)'],
        ['Mounting', 'DIN-rail 35mm, hot-swap modular'],
        ['Certification', 'CE, RoHS, IEC 61643-11'],
        ['Application', 'Sub-distribution boards, main panels, combined lightning protection'],
      ],
    }
  }

  // ── SPD DC ──────────────────────────────────────────────────────────────
  if (slug.startsWith('SPD-DC-')) {
    const poles = slug.split('-')[2]
    const poleNum = parseInt(poles)
    const highVoltage = poleNum >= 3
    const voltageRating = highVoltage ? '1000V / 1500V DC' : '500V / 1000V DC'
    const modeMap: Record<string, string> = {
      '1P': 'DC+ positive line to PE',
      '2P': 'DC+/PE and DC-/PE simultaneous',
      '3P': 'DC+/PE, DC-/PE, DC+/DC- (full mode)',
      '4P': 'Dual-circuit: DC1+/PE, DC1-/PE, DC2+/PE, DC2-/PE',
    }
    return {
      description: `The upprocure ${poles} DC SPD is engineered for ${highVoltage ? 'utility-scale high-voltage' : 'residential and commercial'} solar PV protection. Supporting ${voltageRating} systems with 40kA discharge capacity, it guards inverters and DC equipment from lightning transients and switching overvoltages.`,
      features: [
        `${voltageRating} support - covers standard residential and commercial PV voltages`,
        '40kA max discharge current (8/20μs) - full lightning protection',
        `${modeMap[poles] ?? 'multi-mode DC'} protection`,
        '<25ns response time - protects inverters and DC equipment',
        'Hot-swappable modular DIN rail design',
        'CE certified to IEC 61643-31',
        'OEM / ODM customization available',
      ],
      specs: [
        ['Poles', poles],
        ['System Voltage (Uc)', voltageRating],
        ['Max Discharge Current (Imax)', '40 kA (8/20 μs)'],
        ['Nominal Discharge Current (In)', '20 kA (8/20 μs)'],
        ['Protection Level (Up)', '≤ 2.0 kV'],
        ['Response Time', '< 25 ns'],
        ['Protection Mode', modeMap[poles] ?? 'multi-mode'],
        ['Status Indicator', 'LED status window'],
        ['Mounting', 'DIN-rail 35mm, hot-swap modular'],
        ['Certification', 'CE, RoHS, IEC 61643-31'],
        ['Application', highVoltage ? 'Utility PV, energy storage, dual MPPT inverters' : 'Residential solar, RV solar, small PV arrays'],
      ],
    }
  }

  // ── RT18-32X Fuse Holders ───────────────────────────────────────────────
  if (slug.startsWith('RT18-32X-')) {
    const poles = slug.split('-')[2]
    return {
      description: `The upprocure RT18-32X ${poles} DIN rail fuse holder accepts standard 10×38mm fuse links up to 32A at 690V AC / 500V DC. LED blown-fuse indication per pole eliminates guesswork during fault diagnosis. Compact modular design for 35mm DIN rail.`,
      features: [
        '32A / 690V AC rated - handles most LV control and distribution circuits',
        'Accepts standard 10×38mm fuse links (gG / gPV type)',
        'LED blown-fuse indicator per pole - instant visual fault detection',
        'Compact DIN rail design - minimises panel space',
        'Flame-retardant thermoplastic housing',
        'CE & IEC 60269 certified',
        'OEM / ODM customization available',
      ],
      specs: [
        ['Poles', poles],
        ['Rated Current', '32A'],
        ['Rated Voltage', '690V AC / 500V DC'],
        ['Fuse Link Size', '10 × 38mm'],
        ['Fuse Type', 'gG (general purpose), gPV (solar PV)'],
        ['LED Indicator', 'Blown-fuse LED per pole'],
        ['Housing Material', 'Flame-Retardant Thermoplastic'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS, IEC 60269'],
        ['Application', 'Control circuits, lighting boards, PV arrays, motor protection'],
      ],
    }
  }

  // ── RT18-63X Fuse Holders ───────────────────────────────────────────────
  if (slug.startsWith('RT18-63X-')) {
    const poles = slug.split('-')[2]
    return {
      description: `The upprocure RT18-63X ${poles} DIN rail fuse holder accommodates 14×51mm fuse links up to 63A at 690V. Designed for high-current sub-distribution mains, motor feeds, and industrial equipment with LED blown-fuse indication for rapid fault identification.`,
      features: [
        '63A / 690V rated - high-current distribution circuits',
        'Accepts 14×51mm fuse links (gG / gL type)',
        'LED blown-fuse indicator per pole - rapid fault identification',
        'Robust DIN rail construction for industrial environments',
        'UL94-V0 flame-retardant housing',
        'CE & IEC 60269 certified',
        'OEM / ODM customization available',
      ],
      specs: [
        ['Poles', poles],
        ['Rated Current', '63A'],
        ['Rated Voltage', '690V AC'],
        ['Fuse Link Size', '14 × 51mm'],
        ['Fuse Type', 'gG / gL (general purpose)'],
        ['LED Indicator', 'Blown-fuse LED per pole'],
        ['Housing Material', 'Flame-Retardant Thermoplastic (UL94-V0)'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS, IEC 60269'],
        ['Application', 'Sub-distribution mains, large motors, compressors, industrial panels'],
      ],
    }
  }

  // ── RT18-125AM Fuse Holders ─────────────────────────────────────────────
  if (slug.startsWith('RT18-125AM-')) {
    const poles = slug.split('-')[2]
    return {
      description: `The upprocure RT18-125AM ${poles} DIN rail fuse holder accommodates Φ22×58mm fuse links up to 125A at 690V. Built for high-capacity main circuits, HVAC equipment, and large commercial panels, with individual yellow status indicators per pole.`,
      features: [
        '125A / 690V rated - handles large commercial and industrial loads',
        'Accepts Φ22×58mm fuse links for high fault-energy protection',
        'Individual yellow status indicator per pole',
        '35mm wide (1 DIN module per pole) - minimal panel space',
        'UL94-V0 flame-retardant thermoplastic housing',
        'CE & IEC 60269 certified',
        'OEM / ODM customization available',
      ],
      specs: [
        ['Poles', poles],
        ['Rated Current', '125A'],
        ['Rated Voltage', '690V AC'],
        ['Fuse Link Size', 'Φ22 × 58mm'],
        ['Fuse Type', 'gG / NH type (high capacity)'],
        ['Status Indicator', 'Yellow indicator per pole'],
        ['Module Width', '35mm per pole (1 DIN unit)'],
        ['Housing Material', 'Flame-Retardant Thermoplastic (UL94-V0)'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS, IEC 60269'],
        ['Application', 'HVAC, MCC, large commercial panels, 4-wire distribution boards'],
      ],
    }
  }

  // ── PN2-VA Over/Under Voltage Protectors ───────────────────────────────
  if (slug.startsWith('PN2-VA')) {
    const displayMap: Record<string, string> = {
      'PN2-VA2': 'Dual digital (red voltage + green current)',
      'PN2-VA3': 'White + green high-contrast dual display',
      'PN2-VA4': 'Red + green display with OEM logo customization',
      'PN2-VA5': 'Digital display with brand logo on screen (full OEM)',
      'PN2-VAK': 'Tri-color (red V + green I + blue kWh)',
      'PN2-VAFD': '5-parameter (V, I, W, Hz, kWh simultaneously)',
    }
    const meteringMap: Record<string, string> = {
      'PN2-VA2': 'V, I', 'PN2-VA3': 'V, I', 'PN2-VA4': 'V, I',
      'PN2-VA5': 'V, I', 'PN2-VAK': 'V, I, kWh', 'PN2-VAFD': 'V, I, W, Hz, kWh',
    }
    return {
      description: `The ${slug} is a self-resetting over/under voltage and over-current protector for DIN rail installation. It automatically disconnects loads when voltage exceeds set thresholds and restores power once the supply stabilizes — no manual reset required. Available in 40A, 63A, and 80A ratings with adjustable protection thresholds.`,
      features: [
        'Auto-reset after voltage returns to safe range - no manual intervention',
        'Adjustable over-voltage (220–290V) and under-voltage (140–200V) thresholds',
        'Over-current protection with configurable trip level',
        `${displayMap[slug] ?? 'Digital display'} for real-time parameter visibility`,
        'Password lock - prevents unauthorized threshold adjustments',
        '40A / 63A / 80A current options',
        'CE & RoHS certified, DIN rail mounting',
      ],
      specs: [
        ['Model', slug],
        ['Rated Current', '40A / 63A / 80A (selectable)'],
        ['Operating Voltage', '100 – 300V AC, 50/60Hz'],
        ['Over-voltage Trip', 'Adjustable 220 – 290V (default 265V)'],
        ['Under-voltage Trip', 'Adjustable 140 – 200V (default 170V)'],
        ['Auto-Restore Delay', 'Adjustable 3 – 300 seconds'],
        ['Response Time', '< 0.1 s'],
        ['Display', displayMap[slug] ?? 'Digital display'],
        ['Metering', meteringMap[slug] ?? 'V, I'],
        ['Password Lock', 'Yes'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS'],
      ],
    }
  }

  // ── STATS-06 Three-phase Protection Relay ──────────────────────────────
  if (slug === 'STATS-06') {
    return {
      description: 'The STATS-06 is an intelligent 3-phase 4-wire protection relay for AC 380V systems. It combines over/under voltage, over-current, phase loss, open neutral, phase sequence, and three-phase unbalance protection in one compact DIN rail unit with a color display showing real-time L1/L2/L3 voltage and current.',
      features: [
        '6-in-1 protection: OV, UV, over-current, phase loss, open neutral, phase sequence',
        '3-phase unbalance protection - safeguards sensitive three-phase motors and equipment',
        'Real-time L1/L2/L3 voltage and current on color display',
        'All thresholds fully adjustable for site-specific requirements',
        '63A / 100A current options',
        'CE & RoHS certified',
        'OEM / ODM customization available',
      ],
      specs: [
        ['Model', 'STATS-06'],
        ['System', '3-phase 4-wire, AC 380V'],
        ['Rated Current', '63A / 100A (selectable)'],
        ['Operating Voltage', 'AC 380V (3-phase)'],
        ['Protection Functions', 'OV, UV, OC, phase loss, open neutral, phase sequence, unbalance'],
        ['Display', 'Color display, real-time L1/L2/L3 V + I'],
        ['Response Time', '< 0.1 s'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS'],
        ['Application', 'Industrial panels, motor control centers, 3-phase equipment protection'],
      ],
    }
  }

  // ── STATS-03/04/05 Three-way ATS ───────────────────────────────────────
  if (slug.startsWith('STATS-')) {
    const displayMap: Record<string, string> = {
      'STATS-03': 'Triple voltage display (V1, V2, V3 inputs)',
      'STATS-04': 'Triple V input + output current (V1/V2/V3 + Iout)',
      'STATS-05': '5-parameter: V1/V2/V3 input + Vout + Iout',
    }
    return {
      description: `The ${slug} is a 3-way automatic transfer switch with priority-based switching (L1→L2→L3). It monitors three independent AC power sources and transfers load to the next available source when the active source fails or goes out of voltage specification.`,
      features: [
        '3-way ATS - triple power source redundancy (L1→L2→L3 priority)',
        `${displayMap[slug] ?? 'Multi-parameter display'} for real-time source monitoring`,
        'Built-in OV/UV detection on each input - rejects out-of-spec sources',
        'Fast transfer < 20ms - near-seamless handover for most equipment',
        '63A / 80A / 100A current options',
        'DIN rail mounting, compact design',
        'CE & RoHS certified',
      ],
      specs: [
        ['Model', slug],
        ['Input Sources', '3 independent AC inputs (L1 priority → L2 → L3)'],
        ['Rated Current', '63A / 80A / 100A (selectable)'],
        ['Rated Voltage', 'AC 100 – 300V, 50/60Hz'],
        ['Transfer Time', '< 20ms'],
        ['Display', displayMap[slug] ?? 'Multi-parameter'],
        ['OV/UV Detection', 'Per input, adjustable thresholds'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS'],
        ['Application', 'Factories, server rooms, generators, solar + grid redundancy'],
      ],
    }
  }

  // ── CZVA Plug-in Voltage Protectors ────────────────────────────────────
  if (slug.startsWith('CZVA')) {
    const ratingMap: Record<string, string> = { 'CZVA1': '10A / 2300W', 'CZVA2': '10A – 13A / 2300W', 'CZVA3': '16A / 3680W' }
    const displayMap: Record<string, string> = {
      'CZVA1': 'Adjustable thresholds, LED status indicator',
      'CZVA2': '3-LED status indicators (fixed thresholds, no setup)',
      'CZVA3': 'Dual-color display (red V + green I), password lock, adjustable',
    }
    return {
      description: `The ${slug} is a plug-in voltage protector for home appliances. It automatically cuts off power when voltage leaves the safe operating range and restores it after the supply stabilizes. No installation required — plug in and protect. Available in EU, UK, and South Africa plug standards.`,
      features: [
        'Plug-and-protect - no electrician or installation required',
        `${displayMap[slug] ?? 'LED indicator'}`,
        'Over-voltage and under-voltage cut-off protection',
        'Auto power restore after supply stabilizes',
        `${ratingMap[slug] ?? '10A'} rating - suitable for home appliances`,
        'EU / UK / South Africa plug options available',
        'CE & RoHS certified',
      ],
      specs: [
        ['Model', slug],
        ['Rated Current / Power', ratingMap[slug] ?? '10A'],
        ['Operating Voltage', 'AC 100 – 300V, 50/60Hz'],
        ['Over-voltage Cutoff', slug === 'CZVA3' ? 'Adjustable 230–300V' : '265V ± 5V'],
        ['Under-voltage Cutoff', slug === 'CZVA3' ? 'Adjustable 140–210V' : '165V ± 5V'],
        ['Auto-Restore Delay', '30 seconds'],
        ['Display', displayMap[slug] ?? 'LED indicator'],
        ['Plug Type', 'EU Schuko / UK / South Africa (specify on order)'],
        ['Certification', 'CE, RoHS'],
        ['Application', 'Refrigerators, air conditioners, TVs, washing machines, home appliances'],
      ],
    }
  }

  // ── D52-2066 Power Monitor ──────────────────────────────────────────────
  if (slug === 'D52-2066') {
    return {
      description: 'The D52-2066 is a 6-in-1 DIN rail AC power monitor with a color display. It simultaneously measures voltage, current, active power, power factor, energy consumption (kWh), and frequency — replacing multiple instruments in a single 2-module DIN rail device. Supports 110V/220V single-phase and 380V three-phase.',
      features: [
        '6 parameters on one display: V, I, W, PF, kWh, Hz - replaces multiple instruments',
        'Color display for clear readability in any lighting condition',
        'Supports 110V/220V single-phase and 380V three-phase systems',
        '100A direct measurement (CT input for higher currents)',
        '±1% measurement accuracy - suitable for billing and energy management',
        'DIN rail, 2-module wide (36mm)',
        'CE certified',
      ],
      specs: [
        ['Model', 'D52-2066'],
        ['Measured Parameters', 'V, I, W (active power), PF, kWh, Hz'],
        ['Supply Voltage', '110V / 220V AC (1-phase), 380V AC (3-phase)'],
        ['Rated Current', '100A (direct) / 5A CT input'],
        ['Measurement Accuracy', '± 1%'],
        ['Display', 'Color LCD'],
        ['Module Width', '2 DIN modules (36mm)'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Communication', 'None (standard model)'],
        ['Certification', 'CE'],
        ['Application', 'Energy monitoring, distribution panels, commercial buildings'],
      ],
    }
  }

  // ── D52-2066 WiFi Smart Energy Meter ───────────────────────────────────
  if (slug === 'D52-2066-wifi') {
    return {
      description: 'The D52-2066 WiFi is a Tuya smart energy meter combining 6-in-1 parameter monitoring with remote app control. Monitor voltage, current, power, power factor, kWh, and frequency in real time from anywhere via the Tuya/Smart Life app with daily, monthly, and yearly consumption history.',
      features: [
        'Remote monitoring via Tuya/Smart Life app - real-time data on your phone',
        '6 parameters: V, I, W, PF, kWh, Hz - displayed locally and in app',
        'Daily, monthly, and yearly energy consumption history',
        'Power-failure memory - kWh accumulation retained after power loss',
        '100A rated, DIN rail, 2-module design',
        'Smart home ecosystem compatible',
        'CE certified',
      ],
      specs: [
        ['Model', 'D52-2066 WiFi'],
        ['Measured Parameters', 'V, I, W, PF, kWh, Hz'],
        ['Connectivity', 'WiFi 2.4GHz, Tuya / Smart Life'],
        ['App', 'Tuya / Smart Life (iOS & Android)'],
        ['Supply Voltage', '110V / 220V AC (single-phase)'],
        ['Rated Current', '100A'],
        ['Measurement Accuracy', '± 1%'],
        ['Data History', 'Daily / Monthly / Yearly consumption'],
        ['Power-Failure Memory', 'Yes'],
        ['Display', 'Color LCD + App'],
        ['Mounting', 'DIN-rail 35mm, 2 modules'],
        ['Certification', 'CE'],
      ],
    }
  }

  // ── QY2P Series Energy Meter ────────────────────────────────────────────
  if (slug === 'QY2P') {
    return {
      description: 'The QY2P series are high-accuracy Class 0.5 single-phase DIN rail energy meters. Three variants: QY2P-E (5-parameter LED), QY2P-UID (streamlined LCD), QY2P-UIDY (enhanced color LCD). Factory calibrated for residential, commercial, and industrial billing.',
      features: [
        'Class 0.5 accuracy - suitable for commercial billing and energy audits',
        'Three display options: LED, LCD, and color LCD',
        'V, I, W, PF, Hz, kWh monitoring (QY2P-E full model)',
        'Factory calibrated - no field calibration required',
        '5(60)A / 230V',
        'DIN rail, 2-module (36mm)',
        'CE certified',
      ],
      specs: [
        ['Series', 'QY2P-E / QY2P-UID / QY2P-UIDY'],
        ['Accuracy Class', 'Class 0.5'],
        ['Rated Current', '5(60)A'],
        ['Rated Voltage', '230V AC, 50/60Hz'],
        ['Measured Parameters', 'kWh; V, I, W, PF, Hz (QY2P-E)'],
        ['Display', 'LED (QY2P-E) / LCD (QY2P-UID) / Color LCD (QY2P-UIDY)'],
        ['Module Width', '2 DIN modules (36mm)'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Calibration', 'Factory calibrated'],
        ['Certification', 'CE'],
        ['Application', 'Residential, commercial, and industrial energy billing'],
      ],
    }
  }

  // ── DDS Series Energy Meters ────────────────────────────────────────────
  if (slug === 'DDS') {
    return {
      description: 'The DDS series (DDS662/DDS667/DDS668) are single-phase DIN rail energy meters from basic kWh metering to full multi-parameter monitoring. All models support 110V/230V and 50/60Hz for global deployment, with backlit LCD and optional pulse output for BMS/SCADA integration.',
      features: [
        '110V / 230V dual voltage support - globally deployable',
        'Three models: DDS662 (kWh), DDS667 (kWh + V/I), DDS668 (full 6-parameter)',
        'Backlit LCD on all models',
        'Pulse output for BMS/SCADA integration (DDS667/DDS668)',
        '5(80)A - covers most residential and commercial loads',
        'CE certified to IEC 62053',
        'OEM branding available',
      ],
      specs: [
        ['Series', 'DDS662 / DDS667 / DDS668'],
        ['Rated Current', '5(80)A'],
        ['Rated Voltage', '110V / 230V AC, 50/60Hz'],
        ['Accuracy Class', 'Class 1'],
        ['Measured Parameters', 'kWh (DDS662); kWh + V/I (DDS667); kWh + V/I/W/PF/Hz (DDS668)'],
        ['Display', 'Backlit LCD'],
        ['Pulse Output', 'Yes (DDS667 / DDS668)'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, IEC 62053'],
        ['Application', 'Residential, rental billing, global power distribution'],
      ],
    }
  }

  // ── ADD 18mm Energy Meter ───────────────────────────────────────────────
  if (slug === 'ADD') {
    return {
      description: 'The ADD ultra-narrow 18mm single-phase DIN rail energy meter occupies one DIN module slot — ideal for high-density panel installations. Three display variants: analog roller, digital LCD, backlit LCD with reset button. 5(60)A, 230V, Class 1. CE certified.',
      features: [
        'Ultra-narrow 18mm (1 DIN module) - highest density panel installations',
        'Three display options: analog roller, digital LCD, backlit LCD + reset',
        'Class 1 accuracy - residential and rental billing',
        'CE certified, flame-retardant nylon housing',
        '5(60)A, 230V, 50/60Hz',
        'Simple installation, no configuration required',
        'OEM branding available',
      ],
      specs: [
        ['Model', 'ADD (3 display variants)'],
        ['Module Width', '18mm (1 DIN unit)'],
        ['Rated Current', '5(60)A'],
        ['Rated Voltage', '230V AC, 50/60Hz'],
        ['Accuracy Class', 'Class 1'],
        ['Display Options', 'Analog roller / Digital LCD / Backlit LCD with reset'],
        ['Housing Material', 'Flame-Retardant Nylon'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE'],
        ['Application', 'Residential, rental properties, small commercial metering'],
      ],
    }
  }

  // ── DDR Series Digital Meters ───────────────────────────────────────────
  if (slug === 'DDR') {
    return {
      description: 'The DDR series are ultra-slim 18mm DIN rail AC digital meters in 5 model configurations covering single-channel voltage/current, multi-channel current, and frequency measurement. The bright red LED display ensures clear readability in commercial cabinet environments.',
      features: [
        'Ultra-slim 18mm (1 DIN module) - minimal panel space',
        '5 configurations: V / I / Hz / 3-channel current',
        'Bright red LED display - high contrast in any environment',
        '80–500V voltage, 0–100A current (5A CT input)',
        'CE compliant',
        'Suitable for distribution cabinets and commercial panels',
        'OEM branding available',
      ],
      specs: [
        ['Series', 'DDR (5 model configurations)'],
        ['Module Width', '18mm (1 DIN unit)'],
        ['Measured Parameters', 'V / I / Hz / 3-channel I (model-dependent)'],
        ['Voltage Range', '80 – 500V AC'],
        ['Current Input', '0 – 100A (via 5A CT)'],
        ['Frequency Range', '45 – 65Hz'],
        ['Display', 'LED (red, high brightness)'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE'],
        ['Application', 'Distribution cabinets, workshops, commercial panels'],
      ],
    }
  }

  // ── SOLT WiFi Smart Circuit Breaker ────────────────────────────────────
  if (slug === 'SOLT') {
    return {
      description: 'The SOLT is a Tuya/Smart Life WiFi smart DIN rail circuit breaker with remote on/off, energy monitoring, and full protection functions (model-dependent). Control circuits from anywhere via smartphone, set schedules and automation rules. Compatible with Alexa and Google Assistant.',
      features: [
        'Remote on/off via Tuya/Smart Life app - control from anywhere',
        'Three models: SOLT-OF (on/off), SOLT-M (+ energy monitoring), SOLT-MV (+ voltage protection)',
        'Alexa and Google Assistant voice control',
        'AC 90–300V wide voltage range - globally deployable',
        '1A–63A, ≥ 100,000 operations',
        'DIN rail, compact design',
        'CE & RoHS certified',
      ],
      specs: [
        ['Models', 'SOLT-OF / SOLT-M / SOLT-MV'],
        ['Rated Current', '1A – 63A (selectable)'],
        ['Rated Voltage', 'AC 90 – 300V, 50/60Hz'],
        ['Connectivity', 'WiFi 2.4GHz, Tuya / Smart Life'],
        ['App Control', 'Tuya / Smart Life (iOS & Android)'],
        ['Voice Control', 'Amazon Alexa, Google Assistant'],
        ['Functions', 'On/off; energy monitoring (SOLT-M); OV/UV protection (SOLT-MV)'],
        ['Mechanical Life', '≥ 100,000 operations'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS'],
      ],
    }
  }

  // ── SRP / SRP-L Smart Leakage Protector ────────────────────────────────
  if (slug === 'SRP' || slug === 'SRP-L') {
    return {
      description: `The ${slug} is a 10-in-1 Tuya WiFi smart reclosing leakage protector. It combines leakage, over/under voltage, over-current, and overload protection with real-time energy metering and smartphone control. Auto-reclose restores power automatically after fault clearance.`,
      features: [
        '10-in-1: leakage + OV/UV/OC/overload + V/I/W/kWh/Hz/PF metering',
        'Auto-reclose after fault clearance - reduces service call-outs',
        '1.46" TFT color display with real-time parameter readout',
        'Remote control and push notifications via Tuya/Smart Life app',
        'Alexa and Google Assistant voice control',
        '63A, 1,000,000 mechanical operations',
        'CE & RoHS certified',
      ],
      specs: [
        ['Model', slug],
        ['Rated Current', '63A'],
        ['Rated Voltage', 'AC 100 – 300V, 50/60Hz'],
        ['Leakage Sensitivity', '30mA / 100mA / 300mA (selectable)'],
        ['Protection Functions', 'Leakage, OV, UV, OC, overload, auto-reclose'],
        ['Energy Metering', 'V, I, W, kWh, Hz, PF'],
        ['Display', '1.46" TFT color display'],
        ['Connectivity', 'WiFi 2.4GHz, Tuya / Smart Life'],
        ['Voice Control', 'Amazon Alexa, Google Assistant'],
        ['Mechanical Life', '1,000,000 operations'],
        ['Mounting', 'DIN-rail 35mm'],
        ['Certification', 'CE, RoHS'],
      ],
    }
  }

  // ── PV Combiner Boxes ───────────────────────────────────────────────────
  if (categoryCode === 'pv-combiner-box') {
    const dcVoltageMatch = name.match(/(\d+)V DC/)
    const breakerMatch = name.match(/(\d+)A Breaker/)
    const isolatorMatch = name.match(/(\d+)A Isolator/)
    const fuseMatch = name.match(/(\d+)A Fuse/)
    const stringsMatch = name.match(/(\d+) String/)
    const outputsMatch = name.match(/(\d+) Output/)
    const dcVoltage = dcVoltageMatch ? `${dcVoltageMatch[1]}V DC` : '500V DC'
    const breakerRating = breakerMatch ? `${breakerMatch[1]}A DC breaker` : isolatorMatch ? `${isolatorMatch[1]}A isolator switch` : 'DC breaker'
    const fuseRating = fuseMatch ? `${fuseMatch[1]}A per string` : 'None'
    const strings = stringsMatch ? stringsMatch[1] : '1'
    const outputs = outputsMatch ? outputsMatch[1] : '1'
    const enclosureColor = slug.includes('White') ? 'White' : 'Black'
    return {
      description: `This PV combiner box integrates a ${breakerRating}${fuseMatch ? ', string fuse holders,' : ''} and 40kA SPD in a single IP65 weatherproof enclosure. It consolidates all string-level protection components for ${strings}-string solar arrays into one pre-wired unit, simplifying roof installation and inspection.`,
      features: [
        'All-in-one enclosure: breaker + fuse + SPD — pre-wired, ready to install',
        'IP65 weatherproof - suitable for outdoor rooftop and ground-mount systems',
        '40kA SPD - lightning and switching transient protection',
        `${dcVoltage} system voltage - compatible with standard PV string configurations`,
        'Flame-retardant housing - fire safety for roof-mounted installations',
        'CE & RoHS certified',
        'OEM / ODM customization available - labeling and configuration',
      ],
      specs: [
        ['PV String Inputs', strings],
        ['Outputs', outputs],
        ['System Voltage', dcVoltage],
        ['Main Protection', breakerRating],
        ['String Fuse', fuseRating],
        ['SPD Rating', '500V DC / 40kA (8/20μs)'],
        ['Enclosure Rating', 'IP65 (weatherproof)'],
        ['Housing Material', 'Flame-Retardant Plastic'],
        ['Enclosure Color', enclosureColor],
        ['Mounting', 'Wall-mount (surface mount)'],
        ['Certification', 'CE, RoHS'],
        ['Application', 'Residential, commercial, and ground-mount solar PV systems'],
      ],
    }
  }

  // ── Generic fallback ────────────────────────────────────────────────────
  return {
    description: technicalSummary,
    features: [
      technicalSummary,
      'OEM / ODM customization available - logo, color, packaging, and rating label',
      'Factory quotation, sample support, and bulk order coordination',
      'CE, RoHS, IEC and factory documentation available on request',
      'Product matching support for distributors, panel builders, and project contractors',
    ],
    specs: [
      ['Product Name', name],
      ['Category', product.category],
      ['Model / SKU', slug],
      ['Application', technicalSummary],
      ['Supply Support', 'Wholesale orders, OEM branding, and project quotation support'],
      ['Certification', 'CE, RoHS, IEC and factory documentation available on request'],
    ],
  }
}

function ProductCard({ product }: { product: CatalogProduct }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card group flex flex-col"
      aria-label={product.name}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

  const title = getProductSeoTitle(product)
  const description = getProductSeoDescription(product)
  const displayName = getProductDisplayName(product)

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${getCanonicalProductSlug(product.slug)}`,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/products/${product.slug}`,
      images: [
        {
          url: product.image,
          alt: displayName,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [product.image],
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
  const displayName = getProductDisplayName(product)
  const productUrl = `${SITE_URL}/products/${product.slug}`

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.category,
        item: `${SITE_URL}/categories/${product.categoryCode}`,
      },
      { '@type': 'ListItem', position: 4, name: displayName, item: productUrl },
    ],
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: displayName,
    image: galleryImages.map((src) => (src.startsWith('http') ? src : `${SITE_URL}${src}`)),
    description: detailCopy.description,
    sku: product.slug,
    mpn: product.slug,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    category: product.category,
    url: productUrl,
    additionalProperty: detailCopy.specs.map(([name, value]) => ({
      '@type': 'PropertyValue',
      name,
      value,
    })),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      url: productUrl,
      seller: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    },
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className="border-b border-gray-100 bg-gray-50 py-3">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-600" data-i18n="header.home">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gray-600" data-i18n="products.breadcrumbProducts">
              Products
            </Link>
            <span>/</span>
            <Link href={`/categories/${product.categoryCode}`} className="hover:text-gray-600">
              {product.category}
            </Link>
            <span>/</span>
            <span className="max-w-[160px] truncate text-gray-600">{displayName}</span>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ProductGallery images={galleryImages} name={displayName} />

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-700">{product.category}</p>

              <h1 className="mt-2 max-w-full break-words text-pretty text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                {displayName}
              </h1>

              <div className="mt-4 space-y-3 text-base leading-relaxed text-gray-600">
                <p>{detailCopy.description}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900" data-i18n="product.keyFeatures">
                  Key Features
                </h2>
                <ul className="mt-3 space-y-2">
                  {detailCopy.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/contact?product=${encodeURIComponent(displayName)}`}
                  className="btn-primary-lg flex-1 justify-center"
                  data-i18n="product.requestQuote"
                >
                  Request Quotation
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline-lg flex-1 justify-center"
                  data-i18n="product.askTechnical"
                >
                  Ask Technical Question
                </Link>
              </div>

              <p className="mt-4 text-xs text-gray-400" data-i18n="product.availability">
                Samples available &middot; OEM pricing on request &middot; Ships worldwide
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-bold text-gray-900" data-i18n="product.specsTitle">
              Technical Specifications
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {detailCopy.specs.map(([label, value], index) => (
                    <tr key={label} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="w-1/3 px-5 py-3 font-medium text-gray-700">{label}</td>
                      <td className="px-5 py-3 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="border-t border-gray-100 bg-white py-14 sm:py-16">
          <div className="container">
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
