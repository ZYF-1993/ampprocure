export type CategorySeo = {
  title: string
  description: string
  h1: string
  intro: readonly string[]
}

/**
 * Per-category title, meta description, H1, and intro.
 * Titles are the full title tag (about 60 characters) and descriptions stay
 * within about 155 characters. Copy uses catalog facts only.
 */
export const CATEGORY_SEO: Readonly<Record<string, CategorySeo>> = {
  'over-voltage-protector': {
    title: 'Adjustable Over/Under Voltage Protector | UPprocure',
    description:
      'Factory supplier of adjustable AC over/under voltage protectors with display and over-current options. Request a manufacturer quote.',
    h1: 'Adjustable Over and Under Voltage Protectors',
    intro: [
      'UPprocure supplies adjustable AC over-voltage and under-voltage protectors for distributors, panel builders, and OEM programs. The models below are the ones published in the current catalog.',
      'The DIN-rail PN2 series (PN2-VA2, PN2-VA3, PN2-VA4, PN2-VA5, PN2-VAK, and PN2-VAFD) is self-resetting, with a digital display and over-current protection, in 40A, 63A, and 80A options. PN2-VA4 is the housing and packaging logo version. PN2-VA5 puts a logo on the display. PN2-VAK adds kWh. PN2-VAFD shows voltage, current, power, frequency, and kWh.',
      'Plug-in sockets: CZVA1 is adjustable (over-voltage 230–300V, under-voltage 140–210V) with a digital display, in EU, UK, and South Africa plugs, rated 2300W / 10A. CZVA2 uses fixed cutoffs at 165V±5V and 265V±5V, in 10A and 13A versions. CZVA3 is an EU 16A / 3680W socket with voltage and current on the display and over-current protection.',
      'STATS-06 is the AC 380V 3-phase 4-wire protector, 63A or 100A, with a color display and over/under voltage, over-current, phase-loss, open-neutral, phase-sequence, and unbalance protection. STATS-03, STATS-04, and STATS-05 are 3-way automatic transfer switches with voltage displays. These protectors are AC devices. DC breakers are under Circuit Breaker, and DC combiner boxes are under PV Combiner Box.',
      'For a factory or supplier quote, email sales@upprocure.com, use the RFQ form, or WhatsApp +86-13552727303. Include the model and current rating.',
    ],
  },
  'power-meter': {
    title: 'DIN Rail Power & Energy Meter Supplier | UPprocure',
    description:
      'DIN rail power and energy meters: single-phase DDS, ADD, and QY2P, plus the D52-2066 6-in-1 display for 110V, 220V, and 380V. Ask for a quote.',
    h1: 'DIN Rail Power and Energy Meters',
    intro: [
      'This category lists the DIN-rail power and energy meters in the catalog. DDS662, DDS667, and DDS668 are single-phase meters at 5(80)A, 110V/230V, 50/60Hz. ADD is an 18mm single-phase meter, 5(60)A, 230V, Class 1. QY2P is a single-phase series listed at 0.5% accuracy. DDR is an 18mm meter for voltage, current, and frequency, 80–500V and 0–100A. D52-2066 is a 6-in-1 monitor for 110V/220V and 380V, 100A, showing voltage, current, power, power factor, kWh, and frequency.',
      'The WiFi edition of the D52-2066 is listed under Wifi Smart Low Voltage Device. Email sales@upprocure.com, send the RFQ form, or WhatsApp +86-13552727303 with the model and panel voltage.',
    ],
  },
  'circuit-breaker': {
    title: 'AC & DC Miniature Circuit Breaker Supplier | UPprocure',
    description:
      'AC and DC miniature circuit breakers, 1P–4P, 6–63A, B/C/D curves. DC models are rated 500V for solar strings. Request a supplier quote.',
    h1: 'AC and DC Miniature Circuit Breakers',
    intro: [
      'The circuit breaker catalog is miniature breakers for AC boards and DC solar circuits. AC models are 1P, 2P, 3P, and 4P, 6–63A, with B, C, and D curves. DC models use the same pole counts and 6–63A range, with a 500V DC rating. The 1P DC breaker is listed at 18mm wide.',
      'Tell us the pole count, AC or DC, current, and curve. Email sales@upprocure.com, use the RFQ form, or WhatsApp +86-13552727303.',
    ],
  },
}

export function getCategorySeo(slug: string): CategorySeo | null {
  return CATEGORY_SEO[slug] ?? null
}
