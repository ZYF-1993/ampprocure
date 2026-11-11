export type ProductEnrichment = {
  title: string
  description: string
  applications: readonly string[]
  relatedSlugs: readonly string[]
}

/**
 * Unique titles, meta descriptions, and application notes for thin product
 * URLs. Every figure is already published on that product's catalog summary
 * or detail record. Titles are the full title tag.
 */
export const PRODUCT_ENRICHMENT: Readonly<Record<string, ProductEnrichment>> = {
  DDS: {
    title: 'DDS Single-Phase DIN Rail Energy Meter | UPprocure',
    description:
      'DDS662, DDS667, and DDS668 single-phase DIN rail meters, 5(80)A, 110/230V, with kWh display and pulse output. Request a quote.',
    applications: [
      'Use this series for single-phase DIN-rail metering at 5(80)A, 110V/230V, 50/60Hz. The catalog lists it for residential sub-metering, rental billing, tenant monitoring, and light industrial boards.',
      'DDS662 shows kWh, voltage, current, and power, with a pulse output of 1600 imp/kWh. DDS667 adds a backlit LCD and a button for data switching and reset, in 110V/60Hz or 230V/50Hz versions. DDS668 adds power factor and frequency, with manual or automatic scrolling. ADD is the 18mm 5(60)A 230V meter. QY2P is the single-phase series listed at 0.5% accuracy. D52-2066 is the 6-in-1 monitor, including 380V.',
    ],
    relatedSlugs: ['ADD', 'QY2P', 'D52-2066', 'DDR'],
  },
  'PN2-VA4': {
    title: 'PN2-VA4 Adjustable Voltage Protector | UPprocure',
    description:
      'PN2-VA4 self-resetting over/under voltage and over-current protector, 40–80A, dual display, adjustable trips, OEM logo. Ask for a quote.',
    applications: [
      'PN2-VA4 is the self-resetting over/under voltage and over-current protector with logo customization on the housing and packaging. The published uses are wholesale distribution, panel-builder OEM projects, and private-label brands.',
      'The dual display shows voltage in red and current in green. Settings published for this model are over-voltage 130–300V AC, under-voltage 80–210V AC, over-current protection, and a reset delay of 0–999 seconds (default 60 seconds). Current options are 40A, 63A, and 80A, at AC 220V, with AC 110V noted as customizable. PN2-VA2 is the base model in the same series. PN2-VA5 puts the logo on the display. PN2-VAK adds kWh. PN2-VAFD adds power, frequency, and kWh.',
    ],
    relatedSlugs: ['PN2-VA2', 'PN2-VA5', 'PN2-VAK', 'PN2-VAFD'],
  },
  'HA-12Way-2in2out-500VDC-40A-20AFUSE': {
    title: '500V DC 2-in 2-out PV Combiner, 40A | UPprocure',
    description:
      '2-string input, 2-output 500V DC PV combiner with a 40A breaker, four 20A fuses, and a 40kA SPD in an IP65 enclosure. Request a quote.',
    applications: [
      'This box is for outdoor on-grid or off-grid PV arrays that need two string inputs and two outputs at 500V DC.',
      'It lists a 40A DC breaker, four 20A PV fuses, and a 500V DC SPD at 40kA, in an IP65 flame-retardant plastic enclosure. The other 2-input 2-output 500V boxes in the catalog are the 32A breaker with 15A fuses, and the 63A breaker with 30A fuses.',
    ],
    relatedSlugs: [
      'HA-12Way-2in2out-500VDC-32A-15AFUSE',
      'HA-12Way-2in2out-500VDC-63A-30AFUSE',
      'HA-8Way-2in1out-500VDC-40A-20AFUSE',
      'HT-8Way-2in1out-600VDC',
    ],
  },
  'D52-2066-wifi': {
    title: 'D52-2066 WiFi 6-in-1 Energy Meter | UPprocure',
    description:
      'Tuya WiFi edition of the D52-2066: 6-in-1 DIN rail meter with color display, 100A, and app history for voltage, current, power, and kWh.',
    applications: [
      'The WiFi edition is for homes, rentals, hotels, offices, and commercial buildings where the same 6-in-1 readings need to be checked in the Tuya app.',
      'The page lists Tuya 2.4GHz WiFi, a color display of voltage, current, power, power factor, kWh, and frequency, 40–300V AC, 0–100A, and consumption history by day, month, and year. D52-2066 is the same measurement platform without WiFi, listed under Power Meter.',
    ],
    relatedSlugs: ['D52-2066', 'DDS', 'SOLT', 'SRP'],
  },
}

export function getProductEnrichment(slug: string): ProductEnrichment | null {
  return PRODUCT_ENRICHMENT[slug] ?? null
}
