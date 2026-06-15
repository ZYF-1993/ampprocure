export type CategoryApplication = {
  title: string
  body: string
}

export type CategoryFaq = {
  question: string
  answer: string
}

export type CategoryContent = {
  buyingGuideTitle: string
  buyingGuide: readonly string[]
  applications: readonly CategoryApplication[]
  logistics: readonly string[]
  faq: readonly CategoryFaq[]
}

export const CATEGORY_CONTENT: Readonly<Record<string, CategoryContent>> = {
  'circuit-breaker': {
    buyingGuideTitle: 'Circuit Breaker Buying Guide for Global Procurement',
    buyingGuide: [
      'Selecting industrial-grade circuit breakers for export projects requires matching the device to the fault conditions of the target installation, not just the nominal load. Start with rated breaking capacity (Icn / Icu) — expressed in kA, this defines the maximum prospective short-circuit current the breaker can interrupt without welding or rupture. Residential and light-commercial boards are typically served by 4.5 kA–6 kA devices, while industrial feeders demand higher Icu/Ics ratings. Next, confirm the trip characteristic curve: B-curve (3–5× In) for resistive and lighting loads, C-curve (5–10× In) for general distribution, and D-curve (10–20× In) for high-inrush motors and transformers.',
      'Verify rated current (In), rated voltage (Ue), and pole configuration (1P–4P) against the local grid — AC 230/400 V, or DC up to 500 V for solar strings. Finally, demand documented compliance with IEC/EN 60898-1 (household) or IEC/EN 60947-2 (industrial), which govern breaking capacity, endurance, and temperature classification. Cross-checking these parameters prevents nuisance tripping, ensures discrimination across the distribution chain, and protects against under-rated coordination failures.',
    ],
    applications: [
      {
        title: 'Industrial Automation & Machine Building',
        body: 'In motor control centers and PLC-driven production lines, our C- and D-curve breakers absorb motor inrush without nuisance tripping, while consistent Icu ratings maintain selective coordination between upstream and downstream protection.',
      },
      {
        title: 'Commercial Buildings & Infrastructure',
        body: 'For distribution boards in offices, retail, and hospitality, our 1P–4P MCBs deliver compact 18 mm-per-pole density and stable thermal-magnetic performance across 50/60 Hz networks, simplifying multi-region rollouts.',
      },
      {
        title: 'Renewable Energy Systems (Solar PV / Storage)',
        body: 'DC-rated breakers up to 500 V provide string-level isolation and overcurrent protection for rooftop and ground-mount arrays, with simultaneous multi-pole disconnection for safe maintenance of battery storage and inverter DC sides.',
      },
      {
        title: 'Data Centers & Critical Power',
        body: 'Where uptime is non-negotiable, high-endurance breakers rated for 20,000+ mechanical operations support frequent switching and predictable trip behavior in redundant feeder architectures.',
      },
    ],
    logistics: [
      'We supply B2B buyers worldwide under standard Incoterms 2020, including EXW, FOB, and CIF, so procurement aligns with your existing freight forwarders and customs brokerage. Standard lead time is 3–7 working days for stocked models and 15–30 days for OEM/ODM and high-volume orders, confirmed in writing at the proforma-invoice stage.',
      'Every shipment uses export-grade, anti-shock packaging: individually boxed units, moisture-barrier inner cartons, and reinforced master cartons palletized and strapped for container transit. Breakers are seated in molded trays to prevent terminal and toggle damage from vibration during long-haul sea and air freight. Full documentation — commercial invoice, packing list, certificate of origin, and test reports — is prepared for smooth customs clearance.',
    ],
    faq: [
      {
        question: 'Do you offer OEM/ODM customization for branding or specific ratings?',
        answer: 'Yes. We provide OEM/ODM services covering custom logo and rating-label printing, housing color, retail packaging, and tailored current, voltage, and breaking-capacity configurations. Share your artwork and technical specification, and we will return a sample and tooling timeline before production.',
      },
      {
        question: 'How do your circuit breakers comply with international certification standards?',
        answer: 'Our breakers are manufactured to IEC/EN 60898-1 and IEC/EN 60947-2 and carry CE and RoHS conformity, with test reports available for each model. For markets requiring UL, we can supply UL-recognized components and arrange testing to UL parameters on applicable models — please confirm your destination-market requirement at the inquiry stage.',
      },
      {
        question: 'What is your sample policy and MOQ for industrial buyers?',
        answer: 'We support paid samples for evaluation and qualification before bulk commitment, with sample cost typically credited against your first production order. MOQ varies by model and customization level: standard catalog items carry an intentionally low minimum to enable testing, while OEM runs require a higher volume. Contact us for a model-specific quotation.',
      },
    ],
  },
}

export function getCategoryContent(slug: string): CategoryContent | null {
  return CATEGORY_CONTENT[slug] ?? null
}
