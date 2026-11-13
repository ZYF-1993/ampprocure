/**
 * Explicit search-result copy, keyed by route path (for example '/', '/about',
 * '/products/MCB-AC-1P', '/blog/how-to-choose-22mm-push-button-switch').
 *
 * When an entry exists, its `title` is used verbatim as the full <title>
 * (no " | UPprocure" suffix is appended and nothing is truncated), and its
 * `description` is used verbatim as the meta description. Open Graph and
 * Twitter tags follow the same values. Keep titles within about 60 characters
 * and descriptions within about 155 characters.
 *
 * Routes without an entry keep their current generated title and description.
 */
export type SeoOverride = {
  title?: string
  description?: string
}

// Source: copywriter file meta-v1.csv (2026-11-13), rows marked changed=yes, verbatim.
export const SEO_OVERRIDES: Readonly<Record<string, SeoOverride>> = {
  "/": {
    title: "Electrical Protection Products Supplier | UPprocure",
    description: "UPprocure supplies circuit breakers, surge protectors, DC fuse holders, power meters, ATS and PV combiner boxes for OEM and B2B projects. Request a quote.",
  },
  "/about": {
    title: "About Us: Low-Voltage Electrical Protection | UPprocure",
    description: "UPprocure supplies low-voltage electrical protection products to distributors, system integrators and project contractors, with OEM support. Contact sales.",
  },
  "/blog": {
    title: "Electrical Selection Guides & Technical Blog | UPprocure",
    description: "Technical articles and selection guides on circuit breakers, SPDs, ATS, PV combiner boxes and DIN rail aerosol fire extinguishers for B2B buyers.",
  },
  "/contact": {
    title: "Contact Sales: RFQ, Samples & OEM Inquiries | UPprocure",
    description: "Contact UPprocure for product inquiries, samples, OEM projects or technical support. Reach sales by email, RFQ form or WhatsApp. Send your inquiry.",
  },
  "/terms": {
    title: "Terms of Use | UPprocure",
    description: "UPprocure Terms of Use: the rules and conditions that govern your use of the upprocure.com website, product information, RFQ forms and related services.",
  },
  "/products": {
    title: "Low-Voltage Electrical Protection Products | UPprocure",
    description: "Browse low-voltage electrical protection products: circuit breakers, SPDs, DC fuse holders, power meters, ATS and PV combiner boxes. Request a quote.",
  },
  "/solutions": {
    title: "Panel Components & Fire Suppression Solutions | UPprocure",
    description: "Solutions for control panels and enclosures: 22mm push buttons, metal push buttons, 22mm digital indicators and DIN rail aerosol fire extinguishers.",
  },
  "/solutions/aerosol-fire-extinguisher": {
    title: "Aerosol Fire Extinguisher Solutions for Cabinets | UPprocure",
    description: "DIN rail thermal aerosol fire extinguishers for electrical cabinets, PV combiner boxes and industrial enclosures, with OEM options. Send your inquiry.",
  },
  "/solutions/metal-push-button": {
    title: "Anti-Vandal Metal Push Buttons, 12–25mm | UPprocure",
    description: "Anti-vandal metal push buttons in 12–25 mm cutouts. Momentary or latching action, ring or dot illumination, screw or pin terminals. Request a quote.",
  },
  "/categories/surge-protector-device": {
    title: "AC & DC Surge Protective Devices (SPD) 1P–4P | UPprocure",
    description: "AC and DC surge protective devices for distribution boards and solar PV: 1P to 4P, 40kA Imax, 35mm DIN rail, 385V AC and up to 1500V DC. Request a quote.",
  },
  "/categories/dc-fuse-holder": {
    title: "DC & DIN Rail Fuse Holders, RT18 Series | UPprocure",
    description: "RT18 DIN rail fuse holders for AC and DC: 32A 10x38mm, 63A 14x51mm and 125A 22x58mm models from 1P to 4P, with fuse status indication. Request a quote.",
  },
  "/categories/wifi-smart-low-voltage-device": {
    title: "WiFi Smart Breakers & Energy Meters (Tuya) | UPprocure",
    description: "Tuya WiFi smart DIN rail circuit breakers, reclosing leakage protectors and energy meters with app control and energy monitoring. Request a quote.",
  },
  "/categories/pv-combiner-box": {
    title: "PV Combiner Box Manufacturer & Supplier | UPprocure",
    description: "IP65 PV combiner boxes with 1 to 6 string inputs, DC breakers, PV fuses, isolators and 40kA SPDs in plastic or steel enclosures. Request a quote.",
  },
  "/categories/ats-dual-power-switch": {
    title: "ATS Dual Power Switch Manufacturer & Supplier | UPprocure",
    description: "Automatic transfer switches for mains, generator and inverter backup: PC class 50ms and CB class models, 2P, 3P and 4P, 63A, 110V/220V. Request a quote.",
  },
  "/categories/aerosol-fire-extinguisher": {
    title: "DIN Rail Aerosol Fire Extinguishers | UPprocure",
    description: "Compact DIN rail thermal aerosol fire suppression devices for electrical cabinets, PV combiner boxes and enclosed control equipment. Request a quote.",
  },
  "/products/MCB-AC-1P": {
    title: "1P AC Miniature Circuit Breaker 6–63A, MCB-AC-1P | UPprocure",
    description: "Single-pole AC MCB, 6–63A, B/C/D curves, 4.5 or 6kA, 18mm wide for 35mm DIN rail. For lighting and socket circuits; OEM labels available. Request a quote.",
  },
  "/products/MCB-AC-2P": {
    title: "2P AC Miniature Circuit Breaker 6–63A, MCB-AC-2P | UPprocure",
    description: "Double-pole AC MCB, 6–63A, B/C/D curves, breaks live and neutral together for TT systems and outdoor circuits. OEM labels available. Request a quote.",
  },
  "/products/MCB-AC-3P": {
    title: "3P AC Miniature Circuit Breaker 6–63A, MCB-AC-3P | UPprocure",
    description: "Three-pole AC MCB, 6–63A, B/C/D curves, up to 6kA, trips all phases together for motors, pumps and HVAC. D curve for high inrush loads. Request a quote.",
  },
  "/products/MCB-AC-4P": {
    title: "4P AC Miniature Circuit Breaker 6–63A, MCB-AC-4P | UPprocure",
    description: "Four-pole 3P+N AC MCB, 6–63A, B/C/D curves, switches all phases and neutral for TN-S and TN-C-S systems. OEM labels available. Request a quote.",
  },
  "/products/MCB-DC-1P": {
    title: "1P DC Circuit Breaker 500V 6–63A, MCB-DC-1P | UPprocure",
    description: "Single-pole 500V DC MCB, 6–63A, 6kA DC, C curve, just 18mm wide for PV string and DC branch protection on 35mm DIN rail. Request a quote.",
  },
  "/products/MCB-DC-2P": {
    title: "2P DC Circuit Breaker 500V 6–63A, MCB-DC-2P | UPprocure",
    description: "Two-pole 500V DC MCB, 6–63A, 6kA, breaks positive and negative together for residential solar and battery storage. OEM options available. Request a quote.",
  },
  "/products/MCB-DC-3P": {
    title: "3P DC Circuit Breaker 500V 6–63A, MCB-DC-3P | UPprocure",
    description: "Three-pole DC MCB, 500V per pole, 6–63A, 6kA DC, with an arc chamber on every pole for commercial PV arrays and DC buses. Request a quote.",
  },
  "/products/MCB-DC-4P": {
    title: "4P DC Circuit Breaker 500V 6–63A, MCB-DC-4P | UPprocure",
    description: "Four-pole DC MCB, 500V per pole, 6–63A, 6kA DC, for industrial solar, battery storage and bipolar DC networks on 35mm DIN rail. Request a quote.",
  },
  "/products/SPD-AC-1P-Grey": {
    title: "1P AC Surge Protector 385V 40kA, SPD-AC-1P-Grey | UPprocure",
    description: "Single-pole 385V AC surge protector for N-PE protection in TN-S systems: 20kA In, 40kA Imax, <25ns MOV, hot-swappable grey module. Request a quote.",
  },
  "/products/SPD-AC-2P-Grey": {
    title: "2P AC Surge Protector 385V 40kA, SPD-AC-2P-Grey | UPprocure",
    description: "2-pole 385V AC surge protector with full-mode L-N, L-PE and N-PE protection, 40kA Imax, <25ns, for single-phase and IT systems. Request a quote.",
  },
  "/products/SPD-AC-3P-Grey": {
    title: "3P AC Surge Protector 385V 40kA, SPD-AC-3P-Grey | UPprocure",
    description: "3-pole 385V AC surge protector for 3-phase 3-wire systems without neutral: L-PE on each phase, 40kA Imax, <25ns, hot-swappable. Request a quote.",
  },
  "/products/SPD-AC-4P-Grey": {
    title: "4P AC Surge Protector 385V 40kA, SPD-AC-4P-Grey | UPprocure",
    description: "4-pole 385V AC surge protector for TT and TN-S 3-phase 4-wire systems: L1/L2/L3/N-PE full mode, 40kA Imax, for main panels. Request a quote.",
  },
  "/products/SPD-DC-1P-White": {
    title: "1P PV Surge Protector 1000V, SPD-DC-1P-White | UPprocure",
    description: "Single-pole PV surge protector for 500VDC or 1000VDC solar systems: 20kA In, 40kA Imax, 2.8/3.6kV Up, white DIN rail housing. Request a quote.",
  },
  "/products/SPD-DC-2P-White": {
    title: "2P PV Surge Protector 1000V, SPD-DC-2P-White | UPprocure",
    description: "2-pole PV surge protector for 500VDC or 1000VDC that protects positive and negative lines: 40kA Imax, 2.8/3.6kV Up, white housing. Request a quote.",
  },
  "/products/SPD-DC-3P-White": {
    title: "3P PV Surge Protector 1500V, SPD-DC-3P-White | UPprocure",
    description: "3-pole full-mode PV surge protector for 1000VDC and 1500VDC: DC+/PE, DC-/PE and DC+/DC-, 40kA Imax, hot-swappable, white housing. Request a quote.",
  },
  "/products/SPD-DC-4P-White": {
    title: "4P PV Surge Protector 1500V, SPD-DC-4P-White | UPprocure",
    description: "4-pole dual-input PV surge protector for 1000VDC and 1500VDC with two independent DC circuits for dual MPPT inverters, white housing. Request a quote.",
  },
  "/products/SPD-DC-1P-Orange": {
    title: "1P PV Surge Protector 1000V, SPD-DC-1P-Orange | UPprocure",
    description: "Single-pole PV surge protector for 500VDC or 1000VDC solar systems: 20kA In, 40kA Imax, 2.8/3.6kV Up, orange DIN rail housing. Request a quote.",
  },
  "/products/SPD-DC-2P-Orange": {
    title: "2P PV Surge Protector 1000V, SPD-DC-2P-Orange | UPprocure",
    description: "2-pole PV surge protector for 500VDC or 1000VDC that protects positive and negative lines: 40kA Imax, 2.8/3.6kV Up, orange housing. Request a quote.",
  },
  "/products/SPD-DC-3P-Orange": {
    title: "3P PV Surge Protector 1500V, SPD-DC-3P-Orange | UPprocure",
    description: "3-pole full-mode PV surge protector for 1000VDC and 1500VDC: DC+/PE, DC-/PE and DC+/DC-, 40kA Imax, hot-swappable, orange housing. Request a quote.",
  },
  "/products/SPD-DC-4P-Orange": {
    title: "4P PV Surge Protector 1500V, SPD-DC-4P-Orange | UPprocure",
    description: "4-pole dual-input PV surge protector for 1000VDC and 1500VDC with two independent DC circuits for dual MPPT inverters, orange housing. Request a quote.",
  },
  "/products/RT18-32X-1P": {
    title: "DIN Rail Fuse Holder 32A 690V 1P, RT18-32X-1P | UPprocure",
    description: "Single-pole 32A 500–690V AC DIN rail fuse holder for 10x38mm fuse links, with red LED blown-fuse indicator and IP20 finger-safe design. Request a quote.",
  },
  "/products/RT18-32X-2P": {
    title: "DC Fuse Holder 32A 500V 2P, RT18-32X-2P | UPprocure",
    description: "Double-pole 32A 500V DC fuse holder for 10x38mm fuses that protects positive and negative lines in PV, battery and DC supply circuits. Request a quote.",
  },
  "/products/RT18-32X-3P": {
    title: "DIN Rail Fuse Holder 32A 690V 3P, RT18-32X-3P | UPprocure",
    description: "Three-pole 32A 500–690V AC fuse holder for 10x38mm fuses, with an LED per phase for motor circuits and industrial control panels. Request a quote.",
  },
  "/products/RT18-32X-4P": {
    title: "DIN Rail Fuse Holder 32A 690V 4P, RT18-32X-4P | UPprocure",
    description: "Four-pole 3P+N 32A 500–690V AC fuse holder for 10x38mm fuses, with an LED on every pole including neutral, for TN-S boards. Request a quote.",
  },
  "/products/RT18-63X-1P": {
    title: "DIN Rail Fuse Holder 63A 690V 1P, RT18-63X-1P | UPprocure",
    description: "Single-pole 63A 500–690V AC fuse holder for 14x51mm fuse links, for main circuits and sub-distribution boards. Red LED, 4–16mm² wire. Request a quote.",
  },
  "/products/RT18-63X-2P": {
    title: "DIN Rail Fuse Holder 63A 690V 2P, RT18-63X-2P | UPprocure",
    description: "Double-pole 63A fuse holder rated 690V AC or 500V DC for 14x51mm fuses, for large PV arrays and battery storage. LED on each pole. Request a quote.",
  },
  "/products/RT18-63X-3P": {
    title: "DIN Rail Fuse Holder 63A 690V 3P, RT18-63X-3P | UPprocure",
    description: "Three-pole 63A 500–690V AC fuse holder for 14x51mm fuses, for large motors, compressors and heavy machinery. Red LED per phase. Request a quote.",
  },
  "/products/RT18-63X-4P": {
    title: "DIN Rail Fuse Holder 63A 690V 4P, RT18-63X-4P | UPprocure",
    description: "Four-pole 3P+N 63A 500–690V AC fuse holder for 14x51mm fuses, for feeders, data centers and 4-wire industrial boards. LED per pole. Request a quote.",
  },
  "/products/RT18-125AM-1P": {
    title: "DIN Rail Fuse Holder 125A 690V 1P, RT18-125AM-1P | UPprocure",
    description: "Single-pole 125A 690V DIN rail fuse holder for 22x58mm fuse links, with thickened copper conductors and a yellow fuse status window. Request a quote.",
  },
  "/products/RT18-125AM-2P": {
    title: "DIN Rail Fuse Holder 125A 690V 2P, RT18-125AM-2P | UPprocure",
    description: "Double-pole 125A 690V fuse holder for 22x58mm fuses that fuses line and neutral together for TT systems, outdoor and bathroom circuits. Request a quote.",
  },
  "/products/RT18-125AM-3P": {
    title: "DIN Rail Fuse Holder 125A 690V 3P, RT18-125AM-3P | UPprocure",
    description: "Three-pole 125A 690V fuse holder for 22x58mm fuses, with a yellow status window per phase for motor control centers and industrial feeds. Request a quote.",
  },
  "/products/RT18-125AM-4P": {
    title: "DIN Rail Fuse Holder 125A 690V 4P, RT18-125AM-4P | UPprocure",
    description: "Four-pole 3P+N 125A 690V fuse holder for 22x58mm fuses, 140mm wide, for HVAC feeds, motor control centers and TN-S main boards. Request a quote.",
  },
  "/products/PN2-VA2": {
    title: "Self-Resetting Voltage Protector 40–80A, PN2-VA2 | UPprocure",
    description: "Self-resetting DIN rail over/under voltage and over-current protector, 40/63/80A, 0.5s trip, adjustable 130–300V and 80–210V limits. Request a quote.",
  },
  "/products/PN2-VA3": {
    title: "Voltage Protector, White/Green Display, PN2-VA3 | UPprocure",
    description: "Voltage protector with white voltage and green current digits for bright switchrooms: 40/63/80A, 0.5s trip, auto reset, password lock. Request a quote.",
  },
  "/products/PN2-VA4": {
    title: "OEM Logo Voltage Protector 40–80A, PN2-VA4 | UPprocure",
    description: "Self-resetting over/under voltage and over-current protector with your logo on housing and packaging: 40/63/80A, 0.5s trip, dual display. Request a quote.",
  },
  "/products/PN2-VA5": {
    title: "Voltage Protector with Logo on Display, PN2-VA5 | UPprocure",
    description: "Self-resetting voltage protector that shows your brand on its digital display: 40/63/80A, 0.5s trip, adjustable limits, password lock. Request a quote.",
  },
  "/products/PN2-VAK": {
    title: "Voltage Protector with kWh Meter 40–80A, PN2-VAK | UPprocure",
    description: "Voltage protector with built-in kWh meter: over/under voltage and over-current trip, auto reset, 40/63/80A, tri-color V/A/kWh display. Request a quote.",
  },
  "/products/PN2-VAFD": {
    title: "5-in-1 Voltage Protector & Power Meter, PN2-VAFD | UPprocure",
    description: "5-in-1 DIN rail voltage protector that shows voltage, current, power, frequency and kWh, with 0.5s trip and auto reset. 40/63/80A. Request a quote.",
  },
  "/products/STATS-03": {
    title: "3-Way ATS with Triple Voltage Display, STATS-03 | UPprocure",
    description: "3-input AC 220V automatic transfer switch with L1/L2/L3 voltage display, <0.2s switching, custom priority and 63/80/100A options. Request a quote.",
  },
  "/products/STATS-04": {
    title: "3-Way ATS with Current Display, STATS-04 | UPprocure",
    description: "3-way automatic transfer switch that shows three input voltages plus output current, with <0.2s switching and over/under voltage trip. Request a quote.",
  },
  "/products/STATS-05": {
    title: "3-Way ATS with 5-Parameter Display, STATS-05 | UPprocure",
    description: "3-way ATS that displays three input voltages, output voltage and output current, with <0.2s switching and adjustable delays, 63–100A. Request a quote.",
  },
  "/products/STATS-06": {
    title: "3-Phase 380V Voltage/Current Protector, STATS-06 | UPprocure",
    description: "AC 380V 3-phase 4-wire protector for over/under voltage, over-current, phase loss, open neutral and unbalance, 63A or 100A, color display. Request a quote.",
  },
  "/products/CZVA1": {
    title: "Adjustable Voltage Protector Socket, CZVA1 | UPprocure",
    description: "Plug-in voltage protector socket with digital display and adjustable cutoffs (230–300V, 140–210V), in EU, UK and South Africa plugs. Request a quote.",
  },
  "/products/CZVA2": {
    title: "Plug-in Voltage Protector Socket 10A/13A, CZVA2 | UPprocure",
    description: "Zero-setup plug-in voltage protector with fixed 165V and 265V cutoffs, 30s auto recovery and 3 status LEDs, in EU, UK and SA versions. Request a quote.",
  },
  "/products/CZVA3": {
    title: "EU 16A Voltage Protector Socket, CZVA3 | UPprocure",
    description: "EU Schuko 16A/3680W voltage protector socket with red/green voltage and current display, 0.5s trip, over-current cutoff and password lock. Request a quote.",
  },
  "/products/D52-2066": {
    title: "6-in-1 DIN Rail AC Power Monitor 100A, D52-2066 | UPprocure",
    description: "DIN rail meter showing voltage, current, power, PF, kWh and frequency on one color screen; 100A, single-phase 110/220V or 3-phase 380V. Request a quote.",
  },
  "/products/D52-2066-wifi": {
    title: "Tuya WiFi 6-in-1 DIN Rail Energy Meter, D52-2066 | UPprocure",
    description: "Tuya WiFi edition of the D52-2066: 6-in-1 DIN rail meter with color display, 100A range and daily, monthly, yearly kWh history in the app. Request a quote.",
  },
  "/products/QY2P": {
    title: "Single-Phase DIN Rail Energy Meter 0.5%, QY2P | UPprocure",
    description: "QY2P DIN rail energy meters with 0.5% accuracy in three models: multi-color LED with 5 parameters, or color LCD for V, A and kWh. Request a quote.",
  },
  "/products/ADD": {
    title: "18mm DIN Rail Energy Meter 5(60)A 230V, ADD | UPprocure",
    description: "Single-phase 18mm DIN rail energy meter, 5(60)A, 230V, Class 1, in analog, digital LCD or backlit LCD versions for dense boards. Request a quote.",
  },
  "/products/DDR": {
    title: "18mm DIN Rail AC Volt/Amp/Hz Meter, DDR Series | UPprocure",
    description: "Ultra-slim 18mm DIN rail AC meters with red LED display: V+A+Hz, V+A or single-parameter models, AC 80–500V, 0–100A, for panels. Request a quote.",
  },
  "/products/SOLT": {
    title: "Tuya WiFi Smart DIN Rail Circuit Breaker, SOLT | UPprocure",
    description: "Tuya WiFi DIN rail breaker in three models: remote on/off, energy metering, or metering plus voltage protection. 90–300V, 1–63A. Request a quote.",
  },
  "/products/SRP": {
    title: "WiFi Smart Reclosing RCD 63A, TFT Display, SRP | UPprocure",
    description: "10-in-1 Tuya WiFi leakage protector with auto reclosing, 1.46in TFT display, voltage and current protection and kWh metering, 0.1–63A. Request a quote.",
  },
  "/products/SRP-L": {
    title: "WiFi Reclosing RCD 63A, Physical Button, SRP-L | UPprocure",
    description: "Smart reclosing leakage protector with a raised physical button for gloved local use, plus Tuya app control and 10-in-1 protection. Request a quote.",
  },
  "/products/HT-8Way-2in1out-600VDC": {
    title: "PV Combiner Box 2 In 1 Out 600VDC 63A, 15A Fuse | UPprocure",
    description: "2-string PV combiner box for 600V DC with a 63A DC breaker, four 15A PV fuses and 40kA SPD in an IP65 flame-retardant housing. Request a quote.",
  },
  "/products/HT-8Way-1in1out-600VDC": {
    title: "PV Combiner Box 1 In 1 Out 600VDC 63A, 15A Fuse | UPprocure",
    description: "1-string PV combiner box for 600V DC with a 63A DC breaker, two 15A PV fuses and 40kA surge protection, IP65 for outdoor use. Request a quote.",
  },
  "/products/HA-8Way-2in1out-500VDC-32A-15AFUSE": {
    title: "PV Combiner Box 2 In 1 Out 500VDC 32A, 15A Fuse | UPprocure",
    description: "2-string, 1-output 500V DC PV combiner box with a 32A DC breaker, four 15A PV fuses and a 40kA SPD in an IP65 outdoor enclosure. Request a quote.",
  },
  "/products/HA-8Way-2in1out-500VDC-40A-20AFUSE": {
    title: "PV Combiner Box 2 In 1 Out 500VDC 40A, 20A Fuse | UPprocure",
    description: "2-string, 1-output 500V DC PV combiner box with a 40A DC breaker, four 20A PV fuses and a 40kA SPD in an IP65 outdoor enclosure. Request a quote.",
  },
  "/products/HA-8Way-2in1out-500VDC-63A-30AFUSE": {
    title: "PV Combiner Box 2 In 1 Out 500VDC 63A, 30A Fuse | UPprocure",
    description: "2-string, 1-output 500V DC PV combiner box with a 63A DC breaker, four 30A PV fuses and a 40kA SPD in an IP65 outdoor enclosure. Request a quote.",
  },
  "/products/HA-12Way-2in2out-500VDC-32A-15AFUSE": {
    title: "PV Combiner Box 2 In 2 Out 500VDC 32A, 15A Fuse | UPprocure",
    description: "2-string, 2-output 500V DC PV combiner box that feeds two inverter channels: 32A DC breaker, four 15A fuses, 40kA SPD, IP65. Request a quote.",
  },
  "/products/HA-12Way-2in2out-500VDC-40A-20AFUSE": {
    title: "PV Combiner Box 2 In 2 Out 500VDC 40A, 20A Fuse | UPprocure",
    description: "2-string, 2-output 500V DC PV combiner box that feeds two inverter channels: 40A DC breaker, four 20A fuses, 40kA SPD, IP65. Request a quote.",
  },
  "/products/HA-12Way-2in2out-500VDC-63A-30AFUSE": {
    title: "PV Combiner Box 2 In 2 Out 500VDC 63A, 30A Fuse | UPprocure",
    description: "2-string, 2-output 500V DC PV combiner box that feeds two inverter channels: 63A DC breaker, four 30A fuses, 40kA SPD, IP65. Request a quote.",
  },
  "/products/HA-4Way-500VDC-32A": {
    title: "PV Combiner Box 1 String 500VDC, 32A + SPD | UPprocure",
    description: "Compact 1-string PV combiner box for 500V DC with a 32A DC breaker and 40kA surge protection in an IP65 flame-retardant enclosure. Request a quote.",
  },
  "/products/HA-4Way-500VDC-40A": {
    title: "PV Combiner Box 1 String 500VDC, 40A + SPD | UPprocure",
    description: "Compact 1-string PV combiner box for 500V DC with a 40A DC breaker and 40kA surge protection in an IP65 flame-retardant enclosure. Request a quote.",
  },
  "/products/HA-8Way-1in1out-1000VDC-DS": {
    title: "PV Combiner Box 1 In 1 Out 1000VDC 32A Isolator | UPprocure",
    description: "1-string PV combiner box for 1000V DC systems with a 32A/1200V DC isolator switch, two 15A PV fuses and 40kA SPD, IP65 outdoor. Request a quote.",
  },
  "/products/HA-12way-2in1out-1000VDC-DS": {
    title: "PV Combiner Box 2 In 1 Out 1000VDC 32A Isolator | UPprocure",
    description: "2-string PV combiner box for 1000V DC systems with a 32A/1200V DC isolator switch, four 15A PV fuses and 40kA SPD, IP65 outdoor. Request a quote.",
  },
  "/products/HA-8Way-2DCB-2SPD": {
    title: "PV Combiner Box 1 String, Dual 32A DC Breakers | UPprocure",
    description: "1-string PV combiner box with dual 32A DC breakers and dual 500V/40kA SPDs for redundant or bipolar protection, in an IP65 housing. Request a quote.",
  },
  "/products/HA-4Way-1DCB-1SPD-White": {
    title: "White PV Combiner Box 1 String 40A Breaker + SPD | UPprocure",
    description: "Compact 1-string PV combiner box in a white IP65 housing with a 40A DC breaker and 500V/40kA SPD for on-grid and off-grid systems. Request a quote.",
  },
  "/products/HA-8Way-2DCB-2SPD-White": {
    title: "White PV Combiner Box, Dual 40A Breakers & SPDs | UPprocure",
    description: "1-string PV combiner box in a white IP65 housing with dual 40A DC breakers and dual 500V/40kA SPDs for redundant protection. Request a quote.",
  },
  "/products/HA-18Way-4DCB-4SPD-White": {
    title: "White PV Combiner Box, 4x 40A Breakers & 4x SPD | UPprocure",
    description: "1-string PV combiner box in a white IP65 housing with four 40A DC breakers and four 500V/40kA SPDs for high-redundancy sites. Request a quote.",
  },
  "/products/PCB-M6in-01": {
    title: "PV Combiner Box 6-In 100A Steel, PCB-M6in-01 | UPprocure",
    description: "6-input PV combiner box in an IP65 cold-rolled steel enclosure with a 100A DC breaker, six 15A fuses, 40kA SPD and built-in radiator. Request a quote.",
  },
  "/products/PCB-M4in-02": {
    title: "PV Combiner Box 4-In 63A 20A Fuse, PCB-M4in-02 | UPprocure",
    description: "4-input PV combiner box in a lockable IP65 steel enclosure with a 63A DC breaker, four 20A PV fuses and 40kA SPD for commercial arrays. Request a quote.",
  },
  "/products/PCB-M6in-03": {
    title: "PV Combiner Box 6-In 63A 20A Fuse, PCB-M6in-03 | UPprocure",
    description: "6-input PV combiner box in a lockable IP65 steel enclosure with a 63A DC breaker, six 20A PV fuses and 40kA SPD for commercial arrays. Request a quote.",
  },
  "/products/PCB-M4in-04": {
    title: "PV Combiner Box 4-In 63A 15A Fuse, PCB-M4in-04 | UPprocure",
    description: "4-input PV combiner box in a lockable IP65 steel enclosure with a 63A DC breaker, four 15A PV fuses and 40kA SPD for commercial arrays. Request a quote.",
  },
  "/products/PCB-M6in-05": {
    title: "PV Combiner Box 6-In 125A Steel, PCB-M6in-05 | UPprocure",
    description: "6-input PV combiner box in a lockable IP65 steel enclosure with a 125A DC breaker, six 15A PV fuses and 40kA SPD for larger arrays. Request a quote.",
  },
  "/products/ATS-ST-2P-63A-220V-110V": {
    title: "Automatic Transfer Switch 2P 63A 50ms, ATS-ST-2P | UPprocure",
    description: "PC class 2-pole ATS for 110V/220V single-phase, 63A, 50ms transfer from mains to inverter or generator, with over/under voltage cutoff. Request a quote.",
  },
  "/products/ATS-ST-4P-63A-220V-110V": {
    title: "Automatic Transfer Switch 4P 63A 50ms, ATS-ST-4P | UPprocure",
    description: "PC class 4-pole ATS for 3-phase 4-wire systems, 63A, 50ms transfer that switches all phases and neutral, with over/under voltage cutoff. Request a quote.",
  },
  "/products/ATS-W2R-2P-220V-110V": {
    title: "Automatic Transfer Switch 2P 63A, ATS-W2R-2P | UPprocure",
    description: "PC class 2-pole automatic transfer switch, 63A, 110V/220V, with 50ms changeover from mains to generator or PV inverter for homes and RVs. Request a quote.",
  },
  "/products/ATS-W2R-3P-220V-110V": {
    title: "Automatic Transfer Switch 3P 63A, ATS-W2R-3P | UPprocure",
    description: "PC class 3-pole automatic transfer switch for 3-phase systems without neutral, 63A, 110V/220V, 50ms changeover and auto return to mains. Request a quote.",
  },
  "/products/ATS-W2R-4P-220V-110V": {
    title: "Automatic Transfer Switch 4P 63A, ATS-W2R-4P | UPprocure",
    description: "PC class 4-pole automatic transfer switch for 3-phase systems with neutral, 63A, 110V/220V, 50ms changeover to generator or PV inverter. Request a quote.",
  },
  "/products/STQ1-63-2P-220V-110V": {
    title: "CB Class Transfer Switch 2P 63A, STQ1-63-2P | UPprocure",
    description: "STQ1-63 CB class 2-pole ATS with mechanical interlock, 63A, 110V/220V, about 2s transfer, an economical option for home and RV backup. Request a quote.",
  },
  "/products/STQ1-63-3P-220V-110V": {
    title: "CB Class Transfer Switch 3P 63A, STQ1-63-3P | UPprocure",
    description: "STQ1-63 CB class 3-pole ATS with mechanical interlock, 63A, about 2s transfer, for three-phase industrial equipment and motors. Request a quote.",
  },
  "/products/STQ1-63-4P-220V-110V": {
    title: "CB Class Transfer Switch 4P 63A, STQ1-63-4P | UPprocure",
    description: "STQ1-63 CB class 4-pole ATS with mechanical interlock and over/under voltage protection, 63A, for hospitals and cold storage. Request a quote.",
  },
  "/products/STQ2-63-2P-220V-110V": {
    title: "CB Class Transfer Switch 2P 63A, STQ2-63-2P | UPprocure",
    description: "STQ2-63 2-pole CB class transfer switch, 63A, 110V/220V, switches to generator or PV inverter in about 2s. For homes and RVs. Request a quote.",
  },
  "/products/STQ2-63-3P-220V-110V": {
    title: "CB Class Transfer Switch 3P 63A, STQ2-63-3P | UPprocure",
    description: "STQ2-63 3-pole CB class transfer switch, 63A, 110V/220V, interlocked sources and about 2s changeover for three-phase motors. Request a quote.",
  },
  "/products/STQ2-63-4P-220V-110V": {
    title: "CB Class Transfer Switch 4P 63A, STQ2-63-4P | UPprocure",
    description: "STQ2-63 4-pole CB class transfer switch, 63A, with over/under voltage protection for mixed 3-phase and single-phase loads. Request a quote.",
  },
  "/products/Aerosol-DIN-Rail": {
    title: "DIN Rail Thermal Aerosol Fire Extinguisher | UPprocure",
    description: "Passive DIN rail aerosol fire extinguisher for electrical cabinets: activates at 170°C within 6s, no power or wiring, 10/20/30g sizes. Request a quote.",
  },
  "/blog/how-to-choose-22mm-push-button-switch": {
    title: "How to Choose a 22mm Push Button Switch | UPprocure",
    description: "Choose a 22mm push button switch by operator, NO/NC contacts, lamp voltage, IP rating and body size. A practical guide for panel builders.",
  },
  "/blog/what-is-din-rail-aerosol-fire-extinguisher-technical-guide": {
    title: "What Is a DIN Rail Aerosol Fire Extinguisher? | UPprocure",
    description: "What a DIN rail aerosol fire extinguisher is, how it works and why it is used for fire suppression inside electrical enclosures. Read the technical guide.",
  },
  "/blog/din-rail-aerosol-fire-extinguisher-price-guide-2026": {
    title: "DIN Rail Aerosol Extinguisher Price Guide 2026 | UPprocure",
    description: "A 2026 cost guide for DIN rail aerosol fire extinguishers sourced from China: cost breakdown, what drives quotes, and lifetime cost vs FM-200 and Novec.",
  },
  "/blog/how-does-aerosol-fire-extinguisher-work-electrical-cabinets": {
    title: "How Aerosol Fire Extinguishers Work in Cabinets | UPprocure",
    description: "How DIN rail aerosol fire extinguishers suppress electrical-cabinet fires: the suppression mechanism, dual activation modes and three field case studies.",
  },
  "/blog/top-8-applications-din-rail-aerosol-fire-extinguishers-2026": {
    title: "8 Applications of DIN Rail Aerosol Extinguishers | UPprocure",
    description: "Eight industrial applications for DIN rail aerosol fire extinguishers in 2026, with market size, growth rate, distributor margin and sales-cycle data.",
  },
  "/blog/aerosol-vs-fm200-vs-co2-vs-novec-1230-switchgear-fire-suppression": {
    title: "Aerosol vs FM-200, CO2, Novec 1230: Switchgear | UPprocure",
    description: "Aerosol, FM-200, CO2 and Novec 1230 compared for switchgear fire suppression: technical specs, 10-year total cost of ownership and when to use each.",
  },
  "/blog/how-to-size-din-rail-aerosol-fire-extinguisher-calculation-guide": {
    title: "How to Size a DIN Rail Aerosol Fire Extinguisher | UPprocure",
    description: "Size DIN rail aerosol fire extinguishers step by step with the EN 15276 formula, two worked calculation examples and a sizing checklist for engineers.",
  },
  "/blog/din-rail-aerosol-fire-extinguisher-specifications": {
    title: "DIN Rail Aerosol Extinguisher Specifications | UPprocure",
    description: "The 18 datasheet parameters buyers should verify on a DIN rail aerosol fire extinguisher, plus red flags, 7 fraud patterns and a verification checklist.",
  },
  "/blog/aerosol-fire-extinguisher-certifications-ce-en-15276-ul-ccc": {
    title: "Aerosol Certifications: CE, EN 15276, UL, CCC | UPprocure",
    description: "An importer's guide to aerosol fire extinguisher certifications (CE, EN 15276, UL 2775 and CCC), with 5 fraud cases and a 30-minute verification process.",
  },
  "/blog/din-rail-aerosol-fire-extinguisher-buyers-checklist-2026": {
    title: "DIN Rail Aerosol Extinguisher Checklist 2026 | UPprocure",
    description: "A pre-PO checklist for buying DIN rail aerosol fire extinguishers in 2026: 122 verification points across product, supplier, logistics and after-sales.",
  },
  "/blog/din-rail-aerosol-fire-extinguisher-china-sourcing-guide": {
    title: "DIN Rail Aerosol Extinguishers: China Sourcing | UPprocure",
    description: "A B2B guide to sourcing DIN rail aerosol fire extinguishers from China: key specs, certifications to verify and how to vet suppliers before you order.",
  },
  "/blog/how-to-vet-pv-combiner-box-manufacturer": {
    title: "How to Vet a PV Combiner Box Manufacturer | UPprocure",
    description: "Factory or trading company? A 7-point audit SOP, a certificate check method and 10 red flags for vetting a PV combiner box manufacturer before the PO.",
  },
  "/blog/pv-combiner-box-price-guide-2026": {
    title: "PV Combiner Box Price Guide 2026: Cost Ranges | UPprocure",
    description: "Why PV combiner box quotes vary up to 6x for the same spec: 2026 cost ranges from China, a full cost breakdown and the traps at both ends of the market.",
  },
  "/blog/how-to-choose-pv-combiner-box-string-count": {
    title: "PV Combiner Box String Count: 4/8/16-in-1 Guide | UPprocure",
    description: "Match 4-in-1, 8-in-1, 16-in-1 and 24-in-1 PV combiner boxes to your project scale and inverter MPPT count without over- or under-specifying.",
  },
  "/blog/ip65-vs-ip66-vs-ip67-pv-combiner-box": {
    title: "IP65 vs IP66 vs IP67 PV Combiner Box Guide | UPprocure",
    description: "More IP isn't always better. Match IP65, IP66, or IP67 PV combiner box to your actual climate — without over-spec waste or under-spec field failure.",
  },
  "/blog/pv-combiner-box-certifications-iec-ce-ul": {
    title: "PV Combiner Box Certifications: IEC, CE & UL | UPprocure",
    description: "Which PV combiner box certifications (IEC 61439, CE, UL, RoHS) open which markets, and how buyers can verify each one before shipment.",
  },
  "/blog/dc-vs-ac-pv-combiner-box": {
    title: "DC vs AC PV Combiner Box: Which Do You Need? | UPprocure",
    description: "Wrong combiner box type stalls projects for weeks. Learn when to specify a DC or AC PV combiner box — and why the components are never interchangeable.",
  },
  "/blog/pv-combiner-box-buyers-checklist": {
    title: "PV Combiner Box Buyer's Checklist: 12 Specs | UPprocure",
    description: "The 12-point PV combiner box checklist engineers use to verify voltage, SPD, IP rating, certifications and warranty before placing the next PO.",
  },
  "/blog/pv-combiner-box-sourcing-china-2026": {
    title: "PV Combiner Box Sourcing from China 2026 | UPprocure",
    description: "Sourcing PV combiner boxes from China in 2026: how to evaluate DC components, IP65 enclosures and OEM options. A practical guide for solar distributors.",
  },
  "/blog/what-is-solar-pv-combiner-box-photovoltaic-designs": {
    title: "What Is a Solar PV Combiner Box? Design Guide | UPprocure",
    description: "What a solar PV combiner box does in commercial 1000V/1500V DC systems: DC isolation, surge protection, IEC 61439-2 and installation notes for EPCs.",
  },
}

export function getSeoOverride(path: string): SeoOverride | undefined {
  const normalized = path === '' ? '/' : path.replace(/\/+$/, '') || '/'
  return SEO_OVERRIDES[normalized]
}
