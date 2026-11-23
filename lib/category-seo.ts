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
