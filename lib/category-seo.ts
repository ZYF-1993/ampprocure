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
      'Adjustable AC over/under voltage and over-current protectors with digital display for 35mm DIN rail, 3-phase boards, and plug-in sockets. Request a quote.',
    h1: 'Adjustable Over and Under Voltage Protectors',
    intro: [
      'UPprocure supplies adjustable AC over-voltage and under-voltage protectors for distributors, panel builders, and OEM programs. The models below cover 35mm DIN-rail single-phase boards (PN2 series, 40A–80A), 3-phase 4-wire AC 380V distribution (STATS-06, 63A/100A), 3-way voltage-priority transfer switches (STATS-03/04/05), and plug-in appliance sockets (CZVA1–CZVA3).',
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
      'AC and DC miniature circuit breakers, 1P to 4P, 6–63A, B/C/D trip curves, 35mm DIN rail. DC models rated 500V DC for solar PV strings. Request a quote.',
    h1: 'AC and DC Miniature Circuit Breakers',
    intro: [
      'The circuit breaker catalog covers 35mm DIN-rail miniature circuit breakers (MCBs) for AC distribution boards and DC solar PV circuits. AC models span 1P, 2P, 3P, and 4P from 6A to 63A with B, C, and D trip curves (aligned to IEC 60898-1). DC models use the same 1P–4P pole counts and 6–63A range with a 500V DC rating per pole (aligned to IEC 60947-2) for solar strings and battery storage.',
      'Specify AC or DC, pole count, rated current, trip curve, breaking capacity, and quantity when requesting a quotation.',
    ],
  },
  'surge-protector-device': {
    title: 'AC & DC Surge Protective Devices (SPD) 1P–4P | UPprocure',
    description:
      'AC and DC surge protective devices for distribution boards and solar PV: 1P to 4P, 40kA Imax, 35mm DIN rail, 385V AC and up to 1500V DC. Request a quote.',
    h1: 'AC and DC Surge Protective Devices (SPD)',
    intro: [
      'UPprocure supplies 35mm DIN-rail modular Type 2 surge protective devices for AC distribution boards and solar PV DC circuits. AC models (SPD-AC-1P through 4P-Grey) are rated 385V AC with 20kA In / 40kA Imax (8/20 µs), <25ns response time, and hot-swappable cartridges for TT, TN-S, and 3-phase systems (IEC 61643-11).',
      'Solar PV DC models (SPD-DC-1P through 4P, available in White and Orange housings) cover 500V, 1000V, and 1500V DC with 40kA Imax discharge capacity (IEC 61643-31) for combiner boxes, dual-MPPT inverters, and energy storage.',
    ],
  },
  'dc-fuse-holder': {
    title: 'DC & DIN Rail Fuse Holders, RT18 Series | UPprocure',
    description:
      'RT18 DIN rail fuse holders for AC and DC: 32A 10x38mm, 63A 14x51mm and 125A 22x58mm models from 1P to 4P, with fuse status indication. Request a quote.',
    h1: 'DC and DIN Rail Fuse Holders (RT18 Series)',
    intro: [
      'The RT18 DIN-rail fuse holder series covers 1P to 4P configurations across three standard cylindrical fuse-link sizes: RT18-32X (32A, 10×38 mm, up to 690V AC / 500V DC), RT18-63X (63A, 14×51 mm, 690V AC / 500V DC on 2P), and RT18-125AM (125A, 22×58 mm, 690V AC).',
      'Built for IEC 60269-compliant gG, aM, and gPV fuse links with per-pole blown-fuse status indication and flame-retardant housings, RT18 holders serve solar PV string protection, industrial control branches, and commercial sub-distribution boards.',
    ],
  },
  'wifi-smart-low-voltage-device': {
    title: 'WiFi Smart Breakers & Energy Meters (Tuya) | UPprocure',
    description:
      'Tuya WiFi smart DIN rail circuit breakers, reclosing leakage protectors and energy meters with app control and energy monitoring. Request a quote.',
    h1: 'Tuya WiFi Smart Low-Voltage Devices',
    intro: [
      'This category brings together 2.4GHz Tuya WiFi DIN-rail devices for remote circuit control, energy monitoring, and fault recovery. The catalog includes the SOLT smart DIN-rail circuit breaker series (1–63A, 90–300V AC), SRP and SRP-L 63A smart reclosing residual-current leakage protectors (with TFT display or physical local button), and the D52-2066-wifi 6-in-1 100A energy monitor with app consumption history.',
      'Confirm your destination market and radio-compliance requirements (such as CE-RED or FCC) when requesting samples or OEM quotations.',
    ],
  },
  'pv-combiner-box': {
    title: 'Solar PV Combiner Box Supplier (IP65 OEM) | UPprocure',
    description:
      'IP65 PV combiner boxes with 1 to 6 string inputs, DC breakers, PV fuses, isolators and 40kA SPDs in plastic or steel enclosures. Request a quote.',
    h1: 'IP65 Solar PV Combiner Boxes (500V–1000V DC)',
    intro: [
      'UPprocure supplies pre-wired IP65 PV combiner boxes for residential rooftops, commercial arrays, and off-grid solar installations. Flame-retardant plastic models (HT and HA series) cover 1-in-1-out, 2-in-1-out, and 2-in-2-out topologies at 500V, 600V, and 1000V DC with 32A–63A DC breakers or 1200V DC isolators, 15A–30A gPV fuses, and 40kA DC SPDs.',
      'For larger commercial strings, the PCB-M cold-rolled steel series provides lockable IP65 enclosures with 4-in or 6-in string inputs and 63A–125A main DC breakers. Send your string count, DC voltage, and single-line diagram for a project quotation.',
    ],
  },
  'ats-dual-power-switch': {
    title: 'ATS Dual Power Automatic Transfer Switches | UPprocure',
    description:
      'Automatic transfer switches for mains, generator and inverter backup: PC class 50ms and CB class models, 2P, 3P and 4P, 63A, 110V/220V. Request a quote.',
    h1: 'ATS Dual Power Automatic Transfer Switches',
    intro: [
      'Our DIN-rail and panel-mount automatic transfer switches (ATS) manage mains-to-generator and mains-to-inverter changeover in 2P, 3P, and 4P configurations at 63A, 110V/220V AC. Choose PC-class switches (ATS-ST and ATS-W2R series) for rapid ~50 ms transfer on critical loads, or CB-class mechanically interlocked switches (STQ1-63 and STQ2-63 series, ~2 s transfer) for economical backup power.',
      'Need 3-input voltage-priority transfer switching? See the STATS-03, STATS-04, and STATS-05 models listed under Over Voltage Protectors.',
    ],
  },
  'aerosol-fire-extinguisher': {
    title: 'DIN Rail Aerosol Fire Extinguisher Supplier | UPprocure',
    description:
      'Compact DIN rail thermal aerosol fire suppression devices for electrical cabinets, PV combiner boxes, and industrial control enclosures. Request a quote.',
    h1: 'DIN Rail Aerosol Fire Extinguishers for Cabinets',
    intro: [
      'DIN-rail thermal aerosol fire extinguishers mount directly on a standard 35mm DIN rail beside MCBs and terminal blocks inside electrical cabinets, PV combiner boxes, and battery enclosures. Passive thermal cord activation at 170°C discharges non-pressurized solid-state aerosol within 6 seconds—requiring no external power, piping, or routine pressure checks.',
      'Available in 10g, 20g, and 30g dosages for enclosed cabinet volumes. For multi-zone wireless, RS485 Modbus, and 4G cabinet fire suppression options, see our Aerosol Fire Extinguisher Solutions page.',
    ],
  },
}

export function getCategorySeo(slug: string): CategorySeo | null {
  return CATEGORY_SEO[slug] ?? null
}
