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
  'surge-protector-device': {
    buyingGuideTitle: 'Surge Protective Device (SPD) Buying Guide for Global Procurement',
    buyingGuide: [
      'Specifying surge protective devices starts with the SPD type and the standard it is tested to. Type 1 (T1) devices are tested with the 10/350 µs impulse (Iimp) for service entrances exposed to direct lightning; Type 2 (T2) devices use the 8/20 µs waveform (In / Imax) for sub-distribution boards; Type 3 (T3) protect sensitive end equipment. AC devices must conform to IEC/EN 61643-11, while photovoltaic applications require IEC/EN 61643-31. The decisive performance figures are Uc (maximum continuous operating voltage), In and Imax (nominal and maximum discharge current in kA), and above all Up (voltage protection level) — Up must sit comfortably below the impulse withstand of the equipment being protected.',
      'Equally important are the safety mechanisms: an integrated thermal disconnector to isolate an end-of-life module, a mechanical status indicator (green/red), and a declared short-circuit withstand with the correct backup fuse. For three-phase networks, confirm the protection configuration (L-N, L-PE, N-PE full mode) matches the earthing system (TT, TN-S, TN-C-S). For solar, DC SPDs must be rated for the full open-circuit string voltage (1000 V or 1500 V) and use a fail-safe Y design.',
    ],
    applications: [
      {
        title: 'Building Distribution Boards (Type 2)',
        body: 'Installed in main and sub-distribution boards, our Type 2 SPDs clamp switching and indirect lightning transients with sub-25 ns response, protecting downstream loads while the thermal disconnector and status window simplify inspection and replacement.',
      },
      {
        title: 'Service-Entrance & Lightning Protection (Type 1+2)',
        body: 'Where a structure has an external lightning protection system, combined Type 1+2 devices handle the 10/350 µs partial lightning current at the origin of the installation, coordinating with downstream protection to keep Up within equipment limits.',
      },
      {
        title: 'Solar PV Arrays & Inverters',
        body: 'DC SPDs rated to 1000 V/1500 V with fail-safe Y configuration guard inverter DC inputs and combiner boxes against induced surges, a leading cause of unplanned PV downtime.',
      },
      {
        title: 'Telecom, CCTV & Data Networks',
        body: 'Compact DIN-rail SPDs protect signal and low-voltage control lines in distributed infrastructure, where a single transient can disable an entire monitoring network.',
      },
    ],
    logistics: [
      'We ship worldwide under Incoterms 2020 (EXW, FOB, CIF), with a typical lead time of 3–7 working days for stocked modules and 15–30 days for OEM/ODM and bulk orders, fixed on the proforma invoice. Where a coordinated backup fuse or pluggable spare module is specified, it is matched and packed with the base unit to avoid field mismatches.',
      'SPD modules ship in anti-static, moisture-barrier inner packaging inside reinforced export cartons, palletized for container transit. Each batch is accompanied by IEC 61643 test reports, CE and RoHS documentation, and a packing list to streamline customs clearance.',
    ],
    faq: [
      {
        question: 'Can you customize SPD ratings, color, and branding for our brand?',
        answer: 'Yes. We offer OEM/ODM support for Uc and discharge-current ratings, housing and base color, status-indicator labeling, and printed branding. Send your specification and artwork and we will return an evaluation sample plus a tooling and production timeline before the main run.',
      },
      {
        question: 'How are your SPDs certified for international markets?',
        answer: 'Our AC SPDs are tested to IEC/EN 61643-11 and PV SPDs to IEC/EN 61643-31, carrying CE and RoHS conformity with per-model test reports. For destinations that require additional national approvals, share the target market at the inquiry stage and we will confirm the available documentation.',
      },
      {
        question: 'What is your sample policy and MOQ?',
        answer: 'Paid evaluation samples are available before bulk commitment, with the sample cost typically credited against your first order. Standard catalog modules carry a low MOQ for qualification, while OEM configurations require a higher minimum. Contact us for a model-specific quotation.',
      },
    ],
  },
  'dc-fuse-holder': {
    buyingGuideTitle: 'DC Fuse Holder & Fuse Link Buying Guide for Global Procurement',
    buyingGuide: [
      'The single most common — and most dangerous — procurement error in this category is applying an AC-rated fuse holder to a DC circuit. DC current has no natural zero crossing, so the holder and fuse link must be explicitly rated for the DC voltage and breaking duty of the application. Confirm the rated voltage (typically AC 690 V or DC 500–1000 V), the rated current (32 A, 63 A, or 125 A), and the fuse-link footprint: 10×38 mm, 14×51 mm, or 22×58 mm. The holder must accept the correct link size and provide touch-safe IP20 finger protection per IEC 60529.',
      'Match the fuse-link class to the load. gG links provide general-purpose line protection per IEC 60269-1/2, aM links are tuned for motor circuits, and gPV links to IEC 60269-6 are mandatory for photovoltaic strings — they provide full-range DC breaking and reverse-current behavior that AC links cannot. For diagnostics, LED blown-fuse indication per pole shortens fault-finding in dense panels. Verify the housing is flame-retardant (UL94 V-0) for installations near energized busbars.',
    ],
    applications: [
      {
        title: 'Solar PV String Protection',
        body: 'With gPV links rated to 1000 V DC, our holders provide per-string overcurrent and reverse-current protection in combiner boxes and array junctions, with LED indication for rapid identification of a blown string.',
      },
      {
        title: 'Industrial Control & Motor Branches',
        body: '10×38 mm and 14×51 mm holders with gG or aM links protect control transformers, contactor coils, and motor feeders on the DIN rail, isolating a fault without dropping the whole panel.',
      },
      {
        title: 'Battery Storage & DC Distribution',
        body: 'DC-rated holders safeguard battery banks and DC bus connections, where high prospective fault currents demand a verified DC breaking capacity rather than a re-purposed AC device.',
      },
      {
        title: 'Commercial Distribution Boards',
        body: 'High-current 22×58 mm holders up to 125 A protect sub-mains and large equipment feeds, with per-pole status indicators for fast visual inspection.',
      },
    ],
    logistics: [
      'Orders ship worldwide under Incoterms 2020 (EXW, FOB, CIF), with 3–7 working days for stocked holders and 15–30 days for OEM and volume orders. Fuse links are a separate line item — specify class (gG/aM/gPV), rating, and quantity per holder so we can pre-kit holders with links and prevent field mismatches.',
      'Ceramic fuse links are individually cushioned in molded trays and moisture-barrier packs to prevent cracking during long-haul transit; holders ship in reinforced export cartons, palletized for containers. IEC 60269 test reports, CE/RoHS documents, and a detailed packing list accompany every shipment.',
    ],
    faq: [
      {
        question: 'Do you offer customized configurations or branding?',
        answer: 'Yes. We support OEM/ODM on pole count, current rating, indicator type, housing color, and printed branding, and we can pre-assemble holders with matched fuse links. Provide your specification and artwork for a sample and lead-time confirmation.',
      },
      {
        question: 'Which standards do your fuse holders and links meet?',
        answer: 'Holders and links are built to the IEC 60269 series — including IEC 60269-6 for gPV solar links — with CE and RoHS conformity and test reports per model. Confirm your destination market so we can advise on any additional national requirements.',
      },
      {
        question: 'What is your sample and MOQ policy?',
        answer: 'Paid samples are available for qualification, typically credited against the first order. Standard holders carry a low MOQ, while custom configurations and OEM branding require a higher minimum. Request a model-specific quotation to proceed.',
      },
    ],
  },
  'over-voltage-protector': {
    buyingGuideTitle: 'Over/Under Voltage Protector Buying Guide for Global Procurement',
    buyingGuide: [
      'In regions with unstable grids, the priority is matching protection thresholds and switching capacity to local supply behavior. Confirm the rated switching current (commonly 40 A, 63 A, or 80 A single-phase) and that the internal relay or contactor can make and break the full load without contact welding. The defining feature is adjustable protection: an over-voltage trip (typically 250–300 V), an under-voltage trip (140–200 V), and a configurable auto-recovery delay so the load is not re-energized until the supply is stable.',
      'Response time should be well under 0.5 s to protect motor-driven appliances from sustained over-voltage. For three-phase systems, look for combined functions — phase-loss, phase-sequence, open-neutral, and three-phase unbalance protection — which prevent the single-phasing and reverse-rotation damage that destroys three-phase motors. Integrated metering (V, I, kWh) adds diagnostic value, and a password lock prevents unauthorized threshold changes. Confirm CE and RoHS conformity for the target market.',
    ],
    applications: [
      {
        title: 'Unstable-Grid Residential Protection',
        body: 'Across markets in Africa, South Asia, and the Middle East, self-resetting protectors shield refrigerators, air conditioners, and electronics from over/under-voltage and automatically restore power once the grid stabilizes — with no manual reset call-out.',
      },
      {
        title: 'Three-Phase Motor & Equipment Protection',
        body: 'Multi-function relays add phase-loss, phase-sequence, and unbalance detection, preventing single-phasing and reverse rotation that cause costly motor burnout in pumps, compressors, and CNC machinery.',
      },
      {
        title: 'Commercial & Rental Properties',
        body: 'Panel-mounted protectors with metering give landlords and facility managers voltage-quality visibility and automatic load protection across multiple tenant circuits.',
      },
      {
        title: 'Source-Redundant Installations',
        body: 'Three-way transfer variants monitor multiple incoming sources and switch to the next in-spec supply, combining voltage protection with continuity for sites with generators or solar.',
      },
    ],
    logistics: [
      'We ship globally under Incoterms 2020 (EXW, FOB, CIF), with 3–7 working days for stocked models and 15–30 days for OEM/ODM and bulk orders, confirmed on the proforma invoice. Default threshold presets can be factory-set to your local grid profile so units arrive ready to install.',
      'As electronic assemblies, units are packed in anti-static, moisture-barrier inner cartons inside reinforced master cartons, palletized for container transit and cushioned against vibration. CE/RoHS documentation, test reports, and a packing list accompany each shipment for smooth clearance.',
    ],
    faq: [
      {
        question: 'Can thresholds, display, and branding be customized?',
        answer: 'Yes. We offer OEM/ODM on factory threshold presets, display type (LED/LCD/color), current rating, housing color, and on-screen and label branding. Provide your grid parameters and artwork for a sample and timeline.',
      },
      {
        question: 'How are these devices certified?',
        answer: 'Our protectors carry CE and RoHS conformity with per-model test reports and are designed to the relevant IEC low-voltage control-gear requirements. Tell us the destination market to confirm the available documentation.',
      },
      {
        question: 'What are your sample and MOQ terms?',
        answer: 'Paid samples are available before bulk purchase, typically credited against your first order. Standard models carry a low MOQ, while OEM presets and branding require a higher minimum. Contact us for a model-specific quotation.',
      },
    ],
  },
  'power-meter': {
    buyingGuideTitle: 'DIN Rail Power & Energy Meter Buying Guide for Global Procurement',
    buyingGuide: [
      'Start with accuracy class and the legal status of the measurement. Energy meters are graded to IEC 62053-21/22 — Class 1 for general sub-metering and energy management, Class 0.5S for precision and revenue applications. Critically, any meter used for the legal billing of tenants or customers within the EU must hold MID approval (Measuring Instruments Directive, EN 50470); a Class 1 meter without MID is fine for internal monitoring but not for invoicing. Confirm single- versus three-phase, and the connection method: direct connection (e.g. 5(80) A or 100 A) for small loads, or CT-operated (5 A or 333 mV input) with the correct current-transformer ratio for larger feeders.',
      'Define the parameter set you actually need — kWh is universal, but active/reactive power, power factor, frequency, and THD matter for power-quality and demand management. For integration, confirm the communication protocol (Modbus RTU over RS-485, or M-Bus) and the pulse-output constant (imp/kWh) for BMS, SCADA, and EMS platforms. Finally, check the DIN module width and that a backlit display ensures readability inside enclosed cabinets.',
    ],
    applications: [
      {
        title: 'Tenant Sub-Metering & Rental Billing',
        body: 'Single-phase DIN meters with pulse output and clear backlit displays allocate consumption fairly across apartments, shops, and workshops; MID-approved variants are available where invoicing requires legal metrology.',
      },
      {
        title: 'Energy Management & BMS Integration',
        body: 'Modbus RS-485 meters stream voltage, current, power, and energy to building-management and EMS platforms, enabling load analysis, demand control, and ISO 50001 reporting.',
      },
      {
        title: 'EV Charging & Solar Self-Consumption',
        body: 'Bidirectional and CT-operated meters quantify charge sessions and PV self-consumption versus grid export, supporting cost recovery and incentive reporting.',
      },
      {
        title: 'Industrial Panel & Feeder Monitoring',
        body: 'CT-operated three-phase meters track per-feeder demand and power factor in distribution panels, flagging poor PF before utility penalties accrue.',
      },
    ],
    logistics: [
      'We ship worldwide under Incoterms 2020 (EXW, FOB, CIF), with 3–7 working days for stocked meters and 15–30 days for OEM/ODM and bulk orders. CT-operated meters can be supplied with matched current transformers, and the pulse constant or Modbus address map pre-configured to your specification.',
      'Meters with LCD/LED displays are packed in anti-static, moisture-barrier inner cartons and cushioned against impact inside reinforced export cartons, palletized for container transit. Each shipment includes calibration/test reports, CE and RoHS documentation, and a packing list; MID certificates are provided for MID-approved models.',
    ],
    faq: [
      {
        question: 'Can you customize parameters, communication, and branding?',
        answer: 'Yes. We support OEM/ODM on the measured-parameter set, pulse constant, Modbus/M-Bus configuration, display type, current rating and CT ratio, and printed branding. Share your point list and artwork for a sample and lead time.',
      },
      {
        question: 'Are your meters certified for billing in our market?',
        answer: 'Standard meters are accuracy Class 1 (or Class 0.5S) to IEC 62053 with CE/RoHS conformity and test reports — ideal for sub-metering and energy management. For legal billing in the EU, MID-approved variants (EN 50470) are available on request; confirm your billing requirement at the inquiry stage.',
      },
      {
        question: 'What is your sample and MOQ policy?',
        answer: 'Paid samples are available for evaluation, typically credited against the first order. Standard meters carry a low MOQ, while OEM and MID configurations require a higher minimum. Request a model-specific quotation to proceed.',
      },
    ],
  },
  'wifi-smart-low-voltage-device': {
    buyingGuideTitle: 'WiFi Smart Low-Voltage Device Buying Guide for Global Procurement',
    buyingGuide: [
      'For connected breakers, meters, and reclosers, evaluate the protection function first and the connectivity second. Confirm the core electrical duty — rated current (e.g. 1–63 A), a wide operating voltage (AC 90–300 V for varied grids), and the protection set: remote on/off, energy metering, over/under-voltage, over-current, and, for reclosing leakage protectors, residual-current sensitivity (30/100/300 mA) with automatic re-closing after the fault clears. Mechanical and electrical endurance (≥100,000 operations) indicates switching durability.',
      'On connectivity, most devices use the Tuya / Smart Life ecosystem over 2.4 GHz WiFi (note: not 5 GHz), with app control, scheduling, push alerts, and Alexa/Google voice integration. The decisive compliance issue is radio approval: the EU requires CE-RED (Radio Equipment Directive 2014/53/EU) and the US requires an FCC ID — a device without the correct radio certification cannot be legally sold or imported. Also confirm power-failure data retention and OTA firmware support for long-term fleet management.',
    ],
    applications: [
      {
        title: 'Remote & Distributed Site Management',
        body: 'App-controlled breakers let operators switch and monitor circuits at unmanned sites, rentals, and vacation properties without a truck roll, with push alerts on trip or fault.',
      },
      {
        title: 'Landlord & Prepaid Energy Control',
        body: 'Smart meters and breakers with remote disconnect support pay-as-you-go and tenant energy control, with consumption history exported to the app for transparent billing.',
      },
      {
        title: 'Smart Home & Light Commercial Automation',
        body: 'Tuya/Smart Life integration brings scheduling, scene control, and Alexa/Google voice to lighting, HVAC, and appliance circuits in homes and small businesses.',
      },
      {
        title: 'Energy Monitoring & Fault Resilience',
        body: 'Reclosing leakage protectors restore supply automatically after a transient earth fault, cutting nuisance outages while logging real-time V/I/P/kWh to the cloud.',
      },
    ],
    logistics: [
      'We ship worldwide under Incoterms 2020 (EXW, FOB, CIF), with 3–7 working days for stocked devices and 15–30 days for OEM/ODM and bulk orders. App branding and default settings can be pre-configured; tell us the destination market early so the correct radio-certified variant is supplied.',
      'Devices ship in anti-static, moisture-barrier packaging inside reinforced export cartons, palletized for containers. Documentation includes CE (with CE-RED for the radio) and RoHS plus test reports; FCC documentation is provided for US-bound orders. A packing list accompanies each shipment for clearance.',
    ],
    faq: [
      {
        question: 'Can you provide custom branding and a dedicated app?',
        answer: 'Yes. We support OEM/ODM on housing and branding, default parameters, and Tuya-based app branding and white-labeling, plus current and protection-function configuration. Share your requirements for a sample and timeline.',
      },
      {
        question: 'How are the wireless devices certified for our market?',
        answer: 'Devices carry CE — including CE-RED for the 2.4 GHz radio — plus RoHS, with test reports per model. For the US we can supply FCC-compliant variants. Confirm your destination market at the inquiry stage so the correct radio approval is included.',
      },
      {
        question: 'What are your sample and MOQ terms?',
        answer: 'Paid samples are available before bulk commitment, typically credited against the first order. Standard devices carry a low MOQ, while OEM and app-branding projects require a higher minimum. Contact us for a model-specific quotation.',
      },
    ],
  },
  'pv-combiner-box': {
    buyingGuideTitle: 'PV Combiner Box Buying Guide for Global Procurement',
    buyingGuide: [
      'Size the combiner box around the system voltage and string count of the array. Confirm the maximum DC voltage (600 V residential, 1000 V commercial, 1500 V utility-scale) and that every DC component is rated for it — using an AC-rated isolator or breaker on a DC string is a serious arc-flash hazard. Match the number of string inputs and outputs, the per-string protection (gPV fuses to IEC 60269-6), and the main DC disconnect: a load-break isolator or DC breaker with a proper arc-extinguishing chamber for safe on-load switching during maintenance.',
      'Protection and enclosure rating decide field reliability. A Type 2 DC SPD (e.g. 40 kA, fail-safe Y) guards the array and inverter against induced surges. The enclosure must carry the right ingress and material rating for the environment — IP65/IP66 with UV-stabilized, flame-retardant polycarbonate, or powder-coated steel for harsh outdoor duty. Pre-wired busbars, correct conductor sizing, and proper earthing cut installation time and inspection risk. For North American projects, confirm UL 1741 alignment up front.',
    ],
    applications: [
      {
        title: 'Residential Rooftop Systems',
        body: 'Compact 1–2 string IP65 boxes integrate a DC isolator and 40 kA SPD in one pre-wired enclosure, simplifying rooftop installation and inspection sign-off.',
      },
      {
        title: 'Commercial & Industrial (C&I) Arrays',
        body: 'Multi-string boxes with gPV fuses, a load-break DC switch, and surge protection consolidate string protection for large rooftop and carport systems at 1000 V.',
      },
      {
        title: 'Utility-Scale Ground Mount',
        body: '1500 V-rated steel-enclosure combiners with high string counts and high-current DC breakers aggregate array sections while withstanding harsh outdoor exposure.',
      },
      {
        title: 'Battery Storage & Hybrid Inverter DC Side',
        body: 'Combiners with redundant breakers and SPDs protect the DC side of hybrid and storage installations where multiple sources share a common bus.',
      },
    ],
    logistics: [
      'We ship worldwide under Incoterms 2020 (EXW, FOB, CIF), with 3–7 working days for stocked configurations and 15–30 days for custom builds and bulk orders. Because combiner boxes are project-specific, send your string count, system voltage, fuse and breaker ratings, and enclosure preference so each unit is pre-wired and tested to your single-line diagram.',
      'As bulky, weather-sealed assemblies, boxes ship in foam-cushioned cartons or wooden crates, palletized and strapped to protect enclosure gaskets, glands, and internal components during sea freight; dimensional weight is factored into the quotation. Each shipment includes IEC test reports, CE/RoHS documentation, wiring diagrams, and a packing list.',
    ],
    faq: [
      {
        question: 'Can boxes be configured and branded to our project spec?',
        answer: 'Yes. We build to your single-line diagram — string inputs and outputs, fuse and breaker ratings, isolator type, SPD class, enclosure material and color, and printed branding. Provide your specification for a sample and tooling timeline.',
      },
      {
        question: 'Which certifications do your combiner boxes carry?',
        answer: 'Components and assemblies are built to the relevant IEC standards (IEC 60269-6 PV fuses, IEC 61643-31 DC SPDs) with CE and RoHS conformity and test reports. For North American projects we can align to UL 1741 and supply UL-recognized components on request — confirm the destination market early.',
      },
      {
        question: 'What is your sample and MOQ policy?',
        answer: 'A paid sample or pilot unit is available before volume orders, typically credited against the first order. MOQ depends on configuration complexity; standard builds carry a lower minimum than fully custom enclosures. Request a project-specific quotation.',
      },
    ],
  },
  'ats-dual-power-switch': {
    buyingGuideTitle: 'Automatic Transfer Switch (ATS) Buying Guide for Global Procurement',
    buyingGuide: [
      'The first decision is the ATS class per IEC 60947-6-1. PC-class switches are purpose-built transfer mechanisms that carry and transfer current but do not interrupt short circuits, giving fast, reliable changeover; CB-class units are built from two interlocked breakers and add integral overload and short-circuit protection. Match the rated current and pole count to the system — 2P for single-phase, 3P for three-phase without switched neutral, and 4P where the neutral must be switched in TN-S/TT systems to avoid circulating or fault currents.',
      'Transfer time must suit the load: electronically controlled switches change over in about 50 ms for sensitive electronics, while economical CB-class units transfer in roughly 1–2 s for general backup. A mechanical interlock is essential — it physically prevents both sources from connecting at once, protecting personnel and equipment from generator back-feed. Look for an intelligent controller with adjustable over/under-voltage detection on each source, and confirm compatibility with mains, generator, inverter, and PV sources as required.',
    ],
    applications: [
      {
        title: 'Standby Generator Changeover',
        body: 'PC- and CB-class switches automatically transfer hospitals, telecom sites, and data centers to generator power on mains failure, with the mechanical interlock preventing dangerous back-feed.',
      },
      {
        title: 'Solar / Grid / Backup Hybrid Systems',
        body: 'Multi-source switches prioritize PV or grid and fall back to generator or battery, maintaining supply continuity across changing source availability.',
      },
      {
        title: 'Residential & RV Backup',
        body: 'Compact 2P switches give homes, cabins, and RVs simple, safe automatic backup between mains and a generator or inverter.',
      },
      {
        title: 'Industrial & Critical Infrastructure',
        body: '4P switches with neutral switching protect three-phase plants, cold storage, and lifts where single-phasing or a neutral fault would cause damage or downtime.',
      },
    ],
    logistics: [
      'We ship worldwide under Incoterms 2020 (EXW, FOB, CIF), with 3–7 working days for stocked switches and 15–30 days for OEM/ODM and bulk orders. Controller voltage thresholds and transfer logic can be preset to your application before dispatch.',
      'ATS units contain heavy contactor and interlock mechanisms; they are immobilized in molded supports and cushioned inside reinforced export cartons, palletized and strapped to prevent mechanism damage in transit. IEC 60947-6-1 test reports, CE/RoHS documentation, wiring diagrams, and a packing list accompany every shipment.',
    ],
    faq: [
      {
        question: 'Can the ATS class, poles, and branding be customized?',
        answer: 'Yes. We offer OEM/ODM on class (PC/CB), pole count, current rating, controller logic and thresholds, terminal layout, and printed branding. Share your single-line diagram and load profile for a sample and timeline.',
      },
      {
        question: 'Which standards do your transfer switches meet?',
        answer: 'Our ATS units are built to IEC 60947-6-1 with CE and RoHS conformity and per-model test reports. Confirm your destination market so we can advise on any additional national approvals required.',
      },
      {
        question: 'What are your sample and MOQ terms?',
        answer: 'Paid samples are available before bulk orders, typically credited against the first order. Standard switches carry a low MOQ, while custom controllers and OEM branding require a higher minimum. Contact us for a model-specific quotation.',
      },
    ],
  },
  'aerosol-fire-extinguisher': {
    buyingGuideTitle: 'Condensed Aerosol Fire Suppression Buying Guide for Global Procurement',
    buyingGuide: [
      'Condensed aerosol devices suppress fire by releasing a fine potassium-based aerosol that chemically interrupts combustion, without piping, pressurization, or a discharge nozzle. Specify around the protected volume: the rated application density of the device (grams of aerosol per cubic meter) must match the sealed enclosure size to achieve reliable knock-down. Confirm the activation method — autonomous thermal activation (typically a fixed temperature around 170 °C) for unattended cabinets, or electrical activation tied to a detection panel — and the response and discharge time.',
      'For electrical applications, the agent must be electrically non-conductive and leave minimal corrosive residue, making it suitable for live distribution cabinets, PV combiner boxes, and battery enclosures. Environmental credentials matter to overseas buyers: condensed aerosol is a halon-free clean agent with zero ozone-depletion potential and negligible global-warming potential, a recognized replacement for halon and gaseous systems. Verify the rated service life (often 5–10 years) and the temperature and humidity operating range for the installation environment.',
    ],
    applications: [
      {
        title: 'Electrical Distribution Cabinets',
        body: 'Self-activating DIN-rail or surface units sit inside switchgear and control panels, suppressing an incipient fire at the source at around 170 °C without power, wiring, or human intervention.',
      },
      {
        title: 'Solar PV Combiner Boxes & Inverters',
        body: 'Compact aerosol generators protect DC combiner and inverter enclosures, where arc faults pose a fire risk in remote, unmanned PV installations.',
      },
      {
        title: 'Battery & Energy-Storage (ESS) Enclosures',
        body: 'Non-conductive, residue-light suppression is well suited to lithium battery cabinets and ESS modules, where early intervention is critical to contain thermal events.',
      },
      {
        title: 'Telecom & EV-Charging Cabinets',
        body: 'Maintenance-free units guard unattended telecom shelters and EV-charger enclosures distributed across wide service areas.',
      },
    ],
    logistics: [
      'Condensed aerosol generators are classified as dangerous goods for transport. We prepare the required Safety Data Sheet (SDS/MSDS) and UN/transport classification, and shipments are typically arranged by sea freight under Incoterms 2020 (EXW, FOB, CIF); air freight is restricted and handled only through certified dangerous-goods channels where permitted. Standard lead time is 3–7 working days for stocked units and 15–30 days for OEM and bulk orders.',
      'Units are packed to dangerous-goods requirements in UN-compliant cartons with the correct marking and labeling, palletized for container transit. Each shipment includes the SDS, applicable fire-suppression test reports, CE/RoHS documentation, and a packing list to support customs and DG clearance — please confirm your port and any national import rules for fire-suppression devices at the inquiry stage.',
    ],
    faq: [
      {
        question: 'Can the device size, activation, and branding be customized?',
        answer: 'Yes. We offer OEM/ODM on aerosol charge size (protected volume), activation method (thermal or electrical), mounting format, housing color, and printed branding. Share your enclosure dimensions and activation requirement for a sample and timeline.',
      },
      {
        question: 'How are these devices certified and shipped legally?',
        answer: 'Devices carry CE and RoHS conformity with applicable fire-suppression test reports, and they ship with a Safety Data Sheet and UN transport classification as dangerous goods. Confirm your destination so we can advise on import rules and the correct DG shipping method for fire-suppression products.',
      },
      {
        question: 'What is your sample and MOQ policy?',
        answer: 'Paid samples are available before bulk purchase, typically credited against the first order, subject to dangerous-goods shipping arrangements. Standard units carry a low MOQ, while OEM charge sizes and branding require a higher minimum. Contact us for a model-specific quotation.',
      },
    ],
  },
}

export function getCategoryContent(slug: string): CategoryContent | null {
  return CATEGORY_CONTENT[slug] ?? null
}
