export type CatalogHighlight = {
  label: string
  value: string
}

export type CatalogProduct = {
  id: string
  slug: string
  name: string
  category: string
  categoryCode: string
  catalogPage: number
  image: string
  models: readonly string[]
  highlights: readonly CatalogHighlight[]
  technicalSummary: string
}

const PRODUCT_DATA = [
  {
    "slug": "MCB-AC-1P",
    "name": "MCB 1P AC 6 – 63A Circuit breaker",
    "category": "Circuit Breaker",
    "categoryCode": "circuit-breaker",
    "image": "/images/products/MCB-AC-1P-01.jpg",
    "technicalSummary": "Single-pole miniature circuit breaker, 6 – 63A, B/C/D-curve, ideal for residential lighting and socket circuit protection."
  },
  {
    "slug": "MCB-AC-2P",
    "name": "MCB 2P AC 6 – 63A Circuit breaker",
    "category": "Circuit Breaker",
    "categoryCode": "circuit-breaker",
    "image": "/images/products/MCB-AC-2P-01.jpg",
    "technicalSummary": "Double-pole miniature circuit breaker, 6 – 63A, B/C/D-curve, simultaneously disconnects live and neutral for full circuit isolation."
  },
  {
    "slug": "MCB-AC-3P",
    "name": "MCB 3P AC 6 – 63A Circuit breaker",
    "category": "Circuit Breaker",
    "categoryCode": "circuit-breaker",
    "image": "/images/products/MCB-AC-3P-01.jpg",
    "technicalSummary": "Three-pole miniature circuit breaker, 6 – 63A, B/C/D-curve, designed for three-phase industrial equipment and motor protection."
  },
  {
    "slug": "MCB-AC-4P",
    "name": "MCB 4P AC 6 – 63A Circuit breaker",
    "category": "Circuit Breaker",
    "categoryCode": "circuit-breaker",
    "image": "/images/products/MCB-AC-4P-01.jpg",
    "technicalSummary": "Four-pole miniature circuit breaker, 6 – 63A, B/C/D-curve, full three-phase + neutral protection for TN-S and TN-C-S systems."
  },
  {
    "slug": "MCB-DC-1P",
    "name": "MCB 1P DC 6 – 63A Circuit Breaker",
    "category": "Circuit Breaker",
    "categoryCode": "circuit-breaker",
    "image": "/images/products/MCB-DC-1P-01.jpg",
    "technicalSummary": "Ultra-compact single-pole DC breaker for solar PV string protection – only 18mm wide, 500V DC rated."
  },
  {
    "slug": "MCB-DC-2P",
    "name": "MCB 2P DC 6 – 63A Circuit Breaker",
    "category": "Circuit Breaker",
    "categoryCode": "circuit-breaker",
    "image": "/images/products/MCB-DC-2P-01.jpg",
    "technicalSummary": "Two-pole DC breaker with simultaneous positive/negative disconnection – the industry standard for residential solar and battery storage."
  },
  {
    "slug": "MCB-DC-3P",
    "name": "MCB 3P DC 6 – 63A Circuit Breaker",
    "category": "Circuit Breaker",
    "categoryCode": "circuit-breaker",
    "image": "/images/products/MCB-DC-3P-01.jpg",
    "technicalSummary": "Three-pole DC breaker for commercial PV arrays and high-voltage DC bus protection – 500V per pole, series-stackable."
  },
  {
    "slug": "MCB-DC-4P",
    "name": "MCB 4P DC 6 – 63A Circuit Breaker",
    "category": "Circuit Breaker",
    "categoryCode": "circuit-breaker",
    "image": "/images/products/MCB-DC-4P-01.jpg",
    "technicalSummary": "Four-pole DC breaker for industrial solar plants and bipolar DC networks – maximum isolation safety with 500V per pole."
  },
  {
    "slug": "SPD-AC-1P-Grey",
    "name": "1P AC Surge Protector 385V 40kA - TN-S Neutral-Ground SPD for Sub-distribution & Lightning Boxes",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-AC-1P-Grey-1.jpg",
    "technicalSummary": "1-pole 385VAC surge protector for TN-S neutral-ground (N-PE) protection. 40kA max discharge current, – .0kV protection level, <25ns response – modular hot-swappable DIN rail design for sub-distribution and combined lightning boxes."
  },
  {
    "slug": "SPD-AC-2P-Grey",
    "name": "2P AC Surge Protector 385V 40kA - Full Mode L-N/L-PE/N-PE SPD for Residential & Industrial Circuits",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-AC-2P-Grey-1.jpg",
    "technicalSummary": "2-pole 385VAC full-mode surge protector covering L-N, L-PE and N-PE protection. 40kA max discharge, – .0kV protection level, <25ns response – modular hot-swappable DIN rail SPD for residential and small industrial distribution boxes."
  },
  {
    "slug": "SPD-AC-3P-Grey",
    "name": "3P AC Surge Protector 385V 40kA - Three-Phase L-PE SPD for Industrial Equipment & Motor Control",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-AC-3P-Grey-1.jpg",
    "technicalSummary": "3-pole 385VAC surge protector for three-phase 3-wire systems (no neutral). Independent L1-PE, L2-PE, L3-PE protection per phase. 40kA max discharge, – .5kV protection level, <25ns response – for industrial power equipment and motor control panels."
  },
  {
    "slug": "SPD-AC-4P-Grey",
    "name": "4P AC Surge Protector 385V 40kA - Full Mode Three-Phase+N SPD for Factory, Data Center & Large Buildings",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-AC-4P-Grey-1.jpg",
    "technicalSummary": "4-pole 385VAC full-mode surge protector for TT/TN-S three-phase 4-wire systems. L1-PE, L2-PE, L3-PE and N-PE protection in one unit. 40kA max discharge, – .5kV, <25ns response – for factory main cabinets, data centers and large building entry panels."
  },
  {
    "slug": "SPD-DC-1P-White",
    "name": "1P DC Surge Protector 500V/1000V 40kA - PV Solar SPD for RV & Residential Solar Systems",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-DC-1P-White-1.jpg",
    "technicalSummary": "1-pole DC surge protector supporting 500VDC and 1000VDC PV systems. 40kA max discharge current, fast response – protects solar electrical systems and load equipment from lightning and transient overvoltage. For RVs and residential solar installations."
  },
  {
    "slug": "SPD-DC-2P-White",
    "name": "2P DC Surge Protector 500V/1000V 40kA - PV Solar SPD for RV & Residential Solar Systems",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-DC-2P-White-1.jpg",
    "technicalSummary": "2-pole DC surge protector supporting 500VDC and 1000VDC PV systems. Simultaneously protects both positive and negative conductors. 40kA max discharge, fast response – for RV and residential solar distribution boxes."
  },
  {
    "slug": "SPD-DC-3P-White",
    "name": "3P DC Surge Protector 1000V/1500V 40kA - Full Mode PV SPD for Inverter DC Side & Solar Power Stations",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-DC-3P-White-1.jpg",
    "technicalSummary": "3-pole high-voltage DC surge protector for 1000VDC and 1500VDC PV systems. Full-mode protection: DC+/PE, DC-/PE and DC+/DC-. 40kA max discharge, – .0kV protection level – for PV combiner boxes, inverter DC sides, and solar power stations."
  },
  {
    "slug": "SPD-DC-4P-White",
    "name": "4P DC Surge Protector 1000V/1500V 40kA - Dual-Input PV SPD for Dual MPPT Inverters & Energy Storage",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-DC-4P-White-1.jpg",
    "technicalSummary": "4-pole dual-input DC surge protector for 1000VDC/1500VDC PV systems. Independent protection on two DC circuits (DC1+/PE, DC1-/PE, DC2+/PE, DC2-/PE). 40kA max discharge – for dual MPPT inverters, PV combiner boxes, and energy storage systems."
  },
  {
    "slug": "SPD-DC-1P-Orange",
    "name": "1P DC Surge Protector 500V/1000V 40kA - PV Solar SPD for RV & Residential Solar Systems",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-DC-1P-Orange-1.jpg",
    "technicalSummary": "1-pole DC surge protector supporting 500VDC and 1000VDC PV systems. 40kA max discharge current, fast response – protects solar electrical systems and load equipment from lightning and transient overvoltage. For RVs and residential solar installations."
  },
  {
    "slug": "SPD-DC-2P-Orange",
    "name": "2P DC Surge Protector 500V/1000V 40kA - PV Solar SPD for RV & Residential Solar Systems",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-DC-2P-Orange-1.jpg",
    "technicalSummary": "2-pole DC surge protector supporting 500VDC and 1000VDC PV systems. Simultaneously protects both positive and negative conductors. 40kA max discharge, fast response – for RV and residential solar distribution boxes."
  },
  {
    "slug": "SPD-DC-3P-Orange",
    "name": "3P DC Surge Protector 1000V/1500V 40kA - Full Mode PV SPD for Inverter DC Side & Solar Power Stations",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-DC-3P-Orange-1.jpg",
    "technicalSummary": "3-pole high-voltage DC surge protector for 1000VDC and 1500VDC PV systems. Full-mode protection: DC+/PE, DC-/PE and DC+/DC-. 40kA max discharge, – .0kV protection level – for PV combiner boxes, inverter DC sides, and solar power stations."
  },
  {
    "slug": "SPD-DC-4P-Orange",
    "name": "4P DC Surge Protector 1000V/1500V 40kA - Dual-Input PV SPD for Dual MPPT Inverters & Energy Storage",
    "category": "Surge Protector Device",
    "categoryCode": "surge-protector-device",
    "image": "/images/products/SPD-DC-4P-Orange-1.jpg",
    "technicalSummary": "4-pole dual-input DC surge protector for 1000VDC/1500VDC PV systems. Independent protection on two DC circuits (DC1+/PE, DC1-/PE, DC2+/PE, DC2-/PE). 40kA max discharge – for dual MPPT inverters, PV combiner boxes, and energy storage systems."
  },
  {
    "slug": "RT18-32X-1P",
    "name": "RT18-32X 1P DIN Rail Fuse Holder 32A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-32X-1P-1.jpg",
    "technicalSummary": "Single-pole 32A 690V DIN rail fuse holder for 10x38mm fuse links — the most compact RT18-32X option, ideal for single-phase control circuits, lighting distribution boards, and individual equipment protection."
  },
  {
    "slug": "RT18-32X-2P",
    "name": "RT18-32X 2P DC Fuse Holder 32A 500V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-32X-2P-1.jpg",
    "technicalSummary": "Double-pole 32A 500V DC fuse holder for 10x38mm fuse links — simultaneous positive and negative line protection for PV arrays, battery banks, and DC control circuits, with red LED fault indication."
  },
  {
    "slug": "RT18-32X-3P",
    "name": "RT18-32X 3P DIN Rail Fuse Holder 32A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-32X-3P-1.jpg",
    "technicalSummary": "Three-pole 32A 690V DIN rail fuse holder for 10x38mm fuse links — per-phase fuse isolation for three-phase motors and industrial control panels, with LED fuse-blow indication per phase."
  },
  {
    "slug": "RT18-32X-4P",
    "name": "RT18-32X 4P DIN Rail Fuse Holder 32A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-32X-4P-1.jpg",
    "technicalSummary": "Four-pole 32A 690V DIN rail fuse holder for 10x38mm fuse links — complete 3P+N fuse disconnection for TN-S systems and commercial distribution boards, with LED fault indication on each pole."
  },
  {
    "slug": "RT18-63X-1P",
    "name": "RT18-63X 1P DIN Rail Fuse Holder 63A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-63X-1P-1.jpg",
    "technicalSummary": "Single-pole 63A 690V DIN rail fuse holder for 14x51mm fuse links — high-current protection for single-phase main circuits, sub-distribution boards, and heavy-duty equipment feeds, with LED fuse-blow indication."
  },
  {
    "slug": "RT18-63X-2P",
    "name": "RT18-63X 2P DIN Rail Fuse Holder 63A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-63X-2P-1.jpg",
    "technicalSummary": "Double-pole 63A DIN rail fuse holder for 14x51mm fuse links — high-current dual-line protection for large PV arrays, battery storage systems, and heavy-duty dual-line AC/DC circuits, with LED fault indication."
  },
  {
    "slug": "RT18-63X-3P",
    "name": "RT18-63X 3P DIN Rail Fuse Holder 63A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-63X-3P-1.jpg",
    "technicalSummary": "Three-pole 63A 690V DIN rail fuse holder for 14x51mm fuse links — high-current per-phase protection for large industrial motors, compressors, and heavy three-phase machinery, with LED fault indication per phase."
  },
  {
    "slug": "RT18-63X-4P",
    "name": "RT18-63X 4P DIN Rail Fuse Holder 63A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-63X-4P-1.jpg",
    "technicalSummary": "Four-pole 63A 690V DIN rail fuse holder for 14x51mm fuse links — complete high-current 3P+N fuse disconnection for large commercial buildings, data centers, and industrial 4-wire distribution panels, with LED fault indication per pole."
  },
  {
    "slug": "RT18-125AM-1P",
    "name": "RT18-125AM 1P DIN Rail Fuse Holder 125A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-125AM-1P-1.jpg",
    "technicalSummary": "Single-pole 125A 690V DIN rail fuse holder for Φ22×58mm fuse links — the most compact RT18-125AM option at 35mm wide, one module per rail slot, ideal for single-phase lighting circuits and individual equipment protection."
  },
  {
    "slug": "RT18-125AM-2P",
    "name": "RT18-125AM 2P DIN Rail Fuse Holder 125A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-125AM-2p-1.jpg",
    "technicalSummary": "Double-pole 125A 690V DIN rail fuse holder for Φ22×58mm fuse links — simultaneous line + neutral disconnection, compliant with IEC 60364 / BS 7671 double-pole protection requirements, ideal for TT earthing systems and outdoor circuits."
  },
  {
    "slug": "RT18-125AM-3P",
    "name": "RT18-125AM 3P DIN Rail Fuse Holder 125A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-125AM-3p-1.jpg",
    "technicalSummary": "Three-pole 125A 690V DIN rail fuse holder for Φ22×58mm fuse links — independent per-phase fuse protection for three-phase motors and industrial machinery, individual yellow status indicators for rapid phase-fault diagnosis."
  },
  {
    "slug": "RT18-125AM-4P",
    "name": "RT18-125AM 4P DIN Rail Fuse Holder 125A 690V",
    "category": "DC Fuse Holder",
    "categoryCode": "dc-fuse-holder",
    "image": "/images/products/RT18-125AM-4p-1.jpg",
    "technicalSummary": "Four-pole 125A 690V DIN rail fuse holder for Φ22×58mm fuse links — complete 3P+N fuse disconnection for TN-S/TN-C-S systems, four independent yellow status indicators, ideal for large HVAC, MCC and complex four-wire distribution boards."
  },
  {
    "slug": "PN2-VA2",
    "name": "PN2-VA2 Self-Resetting Over/Under Voltage Protector 40A–80A",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/products/PN2-VA2-1.jpg",
    "technicalSummary": "Self-resetting over/under voltage and over-current protector with dual digital display — automatically disconnects on fault and restores power when the supply stabilizes, no manual reset needed. 40A / 63A / 80A options."
  },
  {
    "slug": "PN2-VA3",
    "name": "PN2-VA3 Self-Resetting Over/Under Voltage Protector 40A–80A",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/products/PN2-VA3-1.jpg",
    "technicalSummary": "Self-resetting voltage protector for professional electrical contractors and commercial panel installations — white + green dual digital display delivers sharp digit contrast under the bright fluorescent lighting typical of commercial enclosures. Configurable over/under voltage and over-current thresholds, auto-restore, password lock. CE & RoHS certified. 40A / 63A / 80A."
  },
  {
    "slug": "PN2-VA4",
    "name": "PN2-VA4 Self-Resetting Voltage Protector 40A–80A with OEM Logo Support",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/products/PN2-VA4-1.jpg",
    "technicalSummary": "Self-resetting over/under voltage and over-current protector with red + green dual digital display and full OEM logo customization — ideal for distributors, panel builders, and private-label electrical brands. 40A / 63A / 80A options."
  },
  {
    "slug": "PN2-VA5",
    "name": "PN2-VA5 Self-Resetting Voltage Protector with Digital Display Logo Customization",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/products/PN2-VA5-1.jpg",
    "technicalSummary": "Self-resetting over/under voltage protector with digital display logo customization — your brand name or logo appears directly on the device screen, ideal for OEM electrical brands and premium panel builders. 40A / 63A / 80A options."
  },
  {
    "slug": "PN2-VAK",
    "name": "PN2-VAK Self-Resetting Voltage Protector with kWh Energy Meter 40A–80A",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/products/PN2-VAK-1.jpg",
    "technicalSummary": "Self-resetting over/under voltage and over-current protector with built-in kWh energy meter — tri-color display shows voltage (red), current (green), and cumulative energy consumption (blue) simultaneously. 40A / 63A / 80A options."
  },
  {
    "slug": "PN2-VAFD",
    "name": "PN2-VAFD 5-in-1 Self-Resetting Voltage Protector with Voltage, Current, Power, Frequency & kWh Meter",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/products/PN2-VAFDM-1.jpg",
    "technicalSummary": "5-in-1 self-resetting voltage protector with multi-function meter — simultaneously displays voltage, current, power (W), frequency (Hz), and cumulative kWh on one device. The most comprehensive PN2 series model. 40A / 63A / 80A options."
  },
  {
    "slug": "STATS-03",
    "name": "STATS-03 3-Way ATS Automatic Transfer Switch with Over/Under Voltage Protection & Triple Voltage Display",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/products/STATS-03-1.jpg",
    "technicalSummary": "3-way automatic transfer switch (ATS) with priority-based switching (L1→L2→L3) and triple input voltage display — purpose-built for power source redundancy and supply quality monitoring in factories, server rooms, generators, and solar storage systems."
  },
  {
    "slug": "STATS-04",
    "name": "STATS-04 3-Way ATS Automatic Transfer Switch with Triple Voltage & Output Current Display",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/products/STATS-04-1.jpg",
    "technicalSummary": "3-way ATS with 4-parameter display showing three input voltages plus real-time output current — adds load current visibility for installations where monitoring actual load draw is as critical as source switching. 63A / 80A / 100A options."
  },
  {
    "slug": "STATS-05",
    "name": "STATS-05 3-Way ATS Automatic Transfer Switch with Full 5-Parameter Display",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/products/STATS-05-1.jpg",
    "technicalSummary": "Most advanced 3-way ATS in the STATS series — 5-parameter display shows three input voltages, output voltage, and output current simultaneously. Full source-and-load visibility for mission-critical installations. 63A / 80A / 100A options."
  },
  {
    "slug": "STATS-06",
    "name": "STATS-06 3-Phase 4-Wire Over/Under Voltage & Current Protector with Multi-Protection",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/products/STATS-06-1.jpg",
    "technicalSummary": "Intelligent 3-phase 4-wire protection relay for AC380V systems — combines over/under voltage, over-current, phase loss, open neutral, phase sequence, and 3-phase unbalance protection in one unit. Color display with real-time L1/L2/L3 voltage and current. 63A / 100A."
  },
  {
    "slug": "CZVA1",
    "name": "Adjustable Digital Voltage Protector Socket EU/UK/South Africa Plug Over/Under Voltage Protection",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/categories/over-voltage-protector.png",
    "technicalSummary": "Plug-and-play digital voltage protector socket for home appliances — adjustable over-voltage (230–300V) and under-voltage (140–210V) protection with auto power restore. Available in EU (Schuko), UK, and South Africa plug standards. 2300W / 10A."
  },
  {
    "slug": "CZVA2",
    "name": "Plug-in Voltage Protector Socket EU/UK/South Africa Universal Over/Under Voltage Cutoff",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/categories/over-voltage-protector.png",
    "technicalSummary": "Fixed-threshold plug-in voltage protector with 3-LED status indicators — no setup required, plugs in and protects instantly. Cuts off below 165V±5V or above 265V±5V, auto-restores after 30s. EU Schuko, UK, South Africa. 10A / 13A, optional child safety shutter. CE & RoHS."
  },
  {
    "slug": "CZVA3",
    "name": "CZVA3 EU Plug 16A Voltage Protector Socket Dual Display Voltage Current with Password Lock",
    "category": "Over Voltage Protector",
    "categoryCode": "over-voltage-protector",
    "image": "/images/categories/over-voltage-protector.png",
    "technicalSummary": "Advanced EU plug voltage protector socket with dual-color display showing voltage (red) and current (green) simultaneously — plus password lock, over-current protection, and energy-saving mode. Fully adjustable thresholds, 16A / 3680W. Ideal for high-power appliances and shared or commercial environments."
  },
  {
    "slug": "D52-2066",
    "name": "D52-2066 6-in-1 AC Power Monitor DIN Rail 110V 220V 380V 100A Voltage Current Power Factor kWh Frequency",
    "category": "Power Meter",
    "categoryCode": "power-meter",
    "image": "/images/products/D52-2066-1.jpg",
    "technicalSummary": "6-in-1 DIN rail AC power monitor — displays voltage, current, active power (W), power factor, energy consumption (kWh), and frequency simultaneously on a color screen. Supports 110V/220V single-phase and 380V three-phase. 100A, ±1% accuracy. CE certified."
  },
  {
    "slug": "D52-2066-wifi",
    "name": "D52-2066 Tuya WiFi Smart Energy Meter 6-in-1 DIN Rail Monitor with Remote App Control",
    "category": "Wifi Smart Low Voltage Device",
    "categoryCode": "wifi-smart-low-voltage-device",
    "image": "/images/products/D52-2066-wifi-1.jpg",
    "technicalSummary": "Tuya WiFi smart energy meter with 6-in-1 color display — monitor voltage, current, power, power factor, kWh, and frequency remotely via mobile app. Real-time data plus daily, monthly, and yearly consumption history. DIN rail, 100A, power-failure memory. Ideal for homes, rentals, hotels, and commercial spaces."
  },
  {
    "slug": "QY2P",
    "name": "QY2P Single-Phase DIN Rail Energy Meter LED/LCD Display 0.5% Accuracy",
    "category": "Power Meter",
    "categoryCode": "power-meter",
    "image": "/images/products/QY2P-1.jpg",
    "technicalSummary": "Single-phase DIN rail energy meter series with 0.5% high accuracy — available in three models: QY2P-E (LED, 5-parameter full monitoring), QY2P-UID (LCD, streamlined V/I/kWh), and QY2P-UIDY (upgraded color LCD, enhanced readout). Factory calibrated, suitable for residential, commercial, and industrial metering."
  },
  {
    "slug": "DDS",
    "name": "DDS Single-Phase DIN Rail Energy Meter DDS662 DDS667 DDS668 Series 110V 230V",
    "category": "Power Meter",
    "categoryCode": "power-meter",
    "image": "/images/products/DDS-1.jpg",
    "technicalSummary": "DDS662/DDS667/DDS668 series single-phase DIN rail energy meters — 110V/230V, 50/60Hz, 5(80)A. Three models covering basic kWh metering through full multi-parameter monitoring (kWh, V, I, W, PF, Hz). Backlit LCD options, pulse output, suitable for residential, rental billing, and global power distribution systems."
  },
  {
    "slug": "ADD",
    "name": "ADD 18mm 1P Single-Phase DIN Rail Energy Meter 5(60)A 230V Class 1",
    "category": "Power Meter",
    "categoryCode": "power-meter",
    "image": "/images/products/ADD-1.jpg",
    "technicalSummary": "Ultra-narrow 18mm single-phase DIN rail energy meter, 5(60)A, 230V, Class 1 accuracy. Three display options: analog roller, digital LCD, and backlit LCD with reset button. CE certified, flame-retardant nylon housing. Ideal for residential, rental, and small commercial metering."
  },
  {
    "slug": "DDR",
    "name": "DDR Series 18mm DIN Rail AC Digital Multi-Function Meter Voltage Current Frequency",
    "category": "Power Meter",
    "categoryCode": "power-meter",
    "image": "/images/products/DDR-1.jpg",
    "technicalSummary": "DDR series ultra-slim 18mm DIN rail AC digital meter — 5 model configurations covering voltage, current, frequency, and 3-channel current monitoring. Bright red LED display, 80–500V, 0–100A, CE compliant. Ideal for real-time parameter monitoring in distribution cabinets, workshops, and commercial panels."
  },
  {
    "slug": "SOLT",
    "name": "SOLT Tuya WiFi Smart DIN Rail Circuit Breaker with Energy Monitoring and Voltage Protection",
    "category": "Wifi Smart Low Voltage Device",
    "categoryCode": "wifi-smart-low-voltage-device",
    "image": "/images/products/SOLT-1.jpg",
    "technicalSummary": "Tuya/Smart Life WiFi smart DIN rail circuit breaker — three models: SOLT-OF (remote on/off), SOLT-M (energy monitoring), SOLT-MV (full protection + metering). App control, Alexa & Google Assistant compatible. AC 90–300V, 1A–63A, ≥100,000 operations."
  },
  {
    "slug": "SRP",
    "name": "SRP Tuya WiFi Smart Reclosing Leakage Protector 63A 10-in-1 with TFT Display and Energy Metering",
    "category": "Wifi Smart Low Voltage Device",
    "categoryCode": "wifi-smart-low-voltage-device",
    "image": "/images/products/SRP-1.jpg",
    "technicalSummary": "10-in-1 Tuya WiFi smart reclosing leakage protector — leakage protection, over/under voltage, over-current, overload, plus real-time voltage, current, power, kWh, frequency, and power factor. 1.46\" TFT color display, auto-reclose, 63A, 1,000,000 mechanical life. Alexa & Google Assistant."
  },
  {
    "slug": "SRP-L",
    "name": "SRP-L Tuya WiFi Smart Reclosing Leakage Protector 63A with Prominent Physical Button and Energy Metering",
    "category": "Wifi Smart Low Voltage Device",
    "categoryCode": "wifi-smart-low-voltage-device",
    "image": "/images/categories/wifi-smart-low-voltage-device.png",
    "technicalSummary": "10-in-1 Tuya WiFi smart reclosing leakage protector with prominent raised physical button — designed for fast, reliable local manual operation without requiring app access. Leakage protection, over/under voltage, over-current, overload, full energy metering. 1.46\" TFT display, 63A, auto-reclose."
  },
  {
    "slug": "HT-8Way-2in1out-600VDC",
    "name": "PV Combiner Box 2 String Input 1 Output, 600V DC 63A Breaker, 15A Fuse & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HT-8Way-2in1out-600VDC-1.jpg",
    "technicalSummary": "2-string PV combiner box with 63A DC breaker, 4×15A fuses and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HT-8Way-1in1out-600VDC",
    "name": "PV Combiner Box 1 String Input 1 Output, 600V DC 63A Breaker, 15A Fuse & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HT-8Way-1in1out-600VDC-1.jpg",
    "technicalSummary": "1-string PV combiner box with 63A DC breaker, 2×15A fuses and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-8Way-2in1out-500VDC-32A-15AFUSE",
    "name": "PV Combiner Box 2 String Input 1 Output, 500V DC 32A Breaker, 15A Fuse & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-8Way-2in1out-500VDC-32A-15AFUSE-1.jpg",
    "technicalSummary": "2-string PV combiner box with 32A DC breaker, 4×15A fuses and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-8Way-2in1out-500VDC-40A-20AFUSE",
    "name": "PV Combiner Box 2 String Input 1 Output, 500V DC 40A Breaker, 20A Fuse & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-8Way-2in1out-500VDC-40A-20AFUSE-1.jpg",
    "technicalSummary": "2-string PV combiner box with 40A DC breaker, 4×20A fuses and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-8Way-2in1out-500VDC-63A-30AFUSE",
    "name": "PV Combiner Box 2 String Input 1 Output, 500V DC 63A Breaker, 30A Fuse & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-8Way-2in1out-500VDC-63A-30AFUSE-1.jpg",
    "technicalSummary": "2-string PV combiner box with 63A DC breaker, 4×30A fuses and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-12Way-2in2out-500VDC-32A-15AFUSE",
    "name": "PV Combiner Box 2 String Input 2 Output, 500V DC 32A Breaker, 15A Fuse & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-12Way-2in2out-500VDC-32A-15AFUSE-1.jpg",
    "technicalSummary": "2-string, 2-output PV combiner box with 32A DC breaker, 4×15A fuses and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-12Way-2in2out-500VDC-40A-20AFUSE",
    "name": "PV Combiner Box 2 String Input 2 Output, 500V DC 40A Breaker, 20A Fuse & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-12Way-2in2out-500VDC-40A-20AFUSE-1.jpg",
    "technicalSummary": "2-string, 2-output PV combiner box with 40A DC breaker, 4×20A fuses and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-12Way-2in2out-500VDC-63A-30AFUSE",
    "name": "PV Combiner Box 2 String Input 2 Output, 500V DC 63A Breaker, 30A Fuse & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-12Way-2in2out-500VDC-63A-30AFUSE-1.jpg",
    "technicalSummary": "2-string, 2-output PV combiner box with 63A DC breaker, 4×30A fuses and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-4Way-500VDC-32A",
    "name": "PV Combiner Box 1 String Input 1 Output, 500V DC 32A Breaker & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-4Way-500VDC-32A-1.jpg",
    "technicalSummary": "Compact 1-string PV combiner box with 32A DC breaker and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-4Way-500VDC-40A",
    "name": "PV Combiner Box 1 String Input 1 Output, 500V DC 40A Breaker & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-4Way-500VDC-40A-1.jpg",
    "technicalSummary": "Compact 1-string PV combiner box with 40A DC breaker and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-8Way-1in1out-1000VDC-DS",
    "name": "PV Combiner Box 1 String Input 1 Output, 1000V DC, 32A Isolator Switch, 15A Fuse & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-8Way-1in1out-1000VDC-DS-1.jpg",
    "technicalSummary": "1-string 1000V DC PV combiner box with 32A/1200V isolator switch, 2×15A fuses and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-12way-2in1out-1000VDC-DS",
    "name": "PV Combiner Box 2 String Input 1 Output, 1000V DC, 32A Isolator Switch, 15A Fuse & 40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-12way-2in1out-1000VDC-DS-1.jpg",
    "technicalSummary": "2-string 1000V DC PV combiner box with 32A/1200V isolator switch, 4×15A fuses and 500V/40kA SPD in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-8Way-2DCB-2SPD",
    "name": "PV Combiner Box 1 String Input 1 Output, Dual 32A DC Breakers & Dual 500V/40kA SPDs",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-8Way-2DCB-2SPD-1.jpg",
    "technicalSummary": "1-string PV combiner box with dual 32A DC breakers and dual 500V/40kA SPDs for redundant protection, in an IP65 flame-retardant enclosure."
  },
  {
    "slug": "HA-4Way-1DCB-1SPD-White",
    "name": "PV Combiner Box (White) 1 String Input 1 Output, 40A DC Breaker & 500V/40kA SPD",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-4Way-1DCB-1SPD-White-1.jpg",
    "technicalSummary": "Compact 1-string PV combiner box in a white IP65 enclosure with 40A DC breaker and 500V/40kA SPD."
  },
  {
    "slug": "HA-8Way-2DCB-2SPD-White",
    "name": "PV Combiner Box (White) 1 String Input 1 Output, Dual 40A DC Breakers & Dual 500V/40kA SPDs",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-8Way-2DCB-2SPD-White-1.jpg",
    "technicalSummary": "1-string PV combiner box in a white IP65 enclosure with dual 40A DC breakers and dual 500V/40kA SPDs for redundant protection."
  },
  {
    "slug": "HA-18Way-4DCB-4SPD-White",
    "name": "PV Combiner Box (White) 1 String Input 1 Output, 4× 40A DC Breakers & 4× 500V/40kA SPDs",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/HA-18Way-4DCB-4SPD-White-1.jpg",
    "technicalSummary": "1-string PV combiner box in a white IP65 enclosure with 4× 40A DC breakers and 4× 500V/40kA SPDs for high-redundancy protection."
  },
  {
    "slug": "PCB-M6in-01",
    "name": "PV Combiner Box 6 PV Array Inputs, 100A DC Breaker, 15A Fuse & 40kA SPD (Steel, with Radiator)",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/PCB-M6in-01-1.jpg",
    "technicalSummary": "6-input PV combiner box in a cold-rolled steel enclosure with 100A DC breaker, 6×15A fuses, 500V/40kA SPD and built-in radiator."
  },
  {
    "slug": "PCB-M4in-02",
    "name": "PV Combiner Box 4 PV Array Inputs, 63A DC Breaker, 20A Fuse & 40kA SPD (Steel, with Safety Lock)",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/PCB-M4in-02-1.jpg",
    "technicalSummary": "4-input PV combiner box in a heavy-duty steel enclosure with 63A DC breaker, 4×20A fuses, 500V/40kA SPD and lockable door."
  },
  {
    "slug": "PCB-M6in-03",
    "name": "PV Combiner Box 6 PV Array Inputs, 63A DC Breaker, 20A Fuse & 40kA SPD (Steel, with Safety Lock)",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/PCB-M6in-03-1.jpg",
    "technicalSummary": "6-input PV combiner box in a heavy-duty steel enclosure with 63A DC breaker, 6×20A fuses, 500V/40kA SPD and lockable door."
  },
  {
    "slug": "PCB-M4in-04",
    "name": "PV Combiner Box 4 PV Array Inputs, 63A DC Breaker, 15A Fuse & 40kA SPD (Steel, with Safety Lock)",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/PCB-M4in-04-1.jpg",
    "technicalSummary": "4-input PV combiner box in a heavy-duty steel enclosure with 63A DC breaker, 4×15A fuses, 500V/40kA SPD and lockable door."
  },
  {
    "slug": "PCB-M6in-05",
    "name": "PV Combiner Box 6 PV Array Inputs, 125A DC Breaker, 15A Fuse & 40kA SPD (Steel, with Safety Lock)",
    "category": "PV Combiner Box",
    "categoryCode": "pv-combiner-box",
    "image": "/images/products/PCB-M6in-05-1.jpg",
    "technicalSummary": "6-input PV combiner box in a heavy-duty steel enclosure with 125A DC breaker, 6×15A fuses, 500V/40kA SPD and lockable door."
  },
  {
    "slug": "ATS-ST-2P-63A-220V-110V",
    "name": "63A 2P Automatic Transfer Switch 110V/220V - PC Class 50ms Fast Switching ATS for Home & RV",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/ATS-ST-2P-63A(220V 110V)-1.jpg",
    "technicalSummary": "2-pole 63A PC class ATS for 110V/220V single-phase systems. Auto & manual transfer in 50ms with built-in over/under-voltage protection – ideal for home emergency backup, RV, and generator applications."
  },
  {
    "slug": "ATS-ST-4P-63A-220V-110V",
    "name": "63A 4P Automatic Transfer Switch 110V/220V - PC Class 50ms Three-Phase ATS for Commercial Use",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/ATS-ST-4P-63A(220V 110V)-1.jpg",
    "technicalSummary": "4-pole 63A PC class ATS for three-phase 110V/220V systems. Switches all 3 lines and neutral simultaneously in 50ms – built for hospitals, cold storage, and data centers."
  },
  {
    "slug": "ATS-W2R-2P-220V-110V",
    "name": "63A 2P Automatic Transfer Switch 110V/220V - PC Class 50ms Dual Power ATS for Home & RV",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/ATS-W2R-2P(220V 110V)-1.jpg",
    "technicalSummary": "2-pole 63A PC class ATS for single-phase 110V/220V systems. Auto & manual transfer in 50ms, compatible with mains, generator and PV inverter – ideal for home emergency backup and RV."
  },
  {
    "slug": "ATS-W2R-3P-220V-110V",
    "name": "63A 3P Automatic Transfer Switch 110V/220V - PC Class 50ms Three-Phase ATS for Commercial Use",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/ATS-W2R-3P(220V 110V)-1.jpg",
    "technicalSummary": "3-pole 63A PC class ATS for three-phase 110V/220V systems (no neutral). Auto & manual transfer in 50ms, compatible with mains, generator and PV inverter – for hospitals, cold storage, and data centers."
  },
  {
    "slug": "ATS-W2R-4P-220V-110V",
    "name": "63A 4P Automatic Transfer Switch 110V/220V - PC Class 50ms Three-Phase+N ATS for Commercial Use",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/ATS-W2R-4P(220V 110V)-1.jpg",
    "technicalSummary": "4-pole 63A PC class ATS for three-phase 110V/220V systems with neutral. Auto & manual transfer in 50ms, compatible with mains, generator and PV inverter – for hospitals, cold storage, and data centers."
  },
  {
    "slug": "STQ1-63-2P-220V-110V",
    "name": "STQ1-63 63A 2P CB Class Auto Transfer Switch 110V/220V - Economical ATS for Home, RV & Fire Protection",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/STQ1-63-2P(220V 110V)-1.jpg",
    "technicalSummary": "63A 2-pole CB class ATS for single-phase 110V/220V. Mechanical interlock prevents dual-power connection. ~2s auto transfer – an economical choice for home backup, RV, elevators, and fire protection."
  },
  {
    "slug": "STQ1-63-3P-220V-110V",
    "name": "STQ1-63 63A 3P CB Class Auto Transfer Switch 110V/220V - Three-Phase ATS for Industrial Equipment & Motors",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/STQ1-63-3P(220V 110V)-1.jpg",
    "technicalSummary": "63A 3-pole CB class ATS for three-phase 110V/220V. Mechanical interlock, ~2s auto transfer, max ~22kW – a cost-effective solution for industrial equipment, commercial elevators, and three-phase motors."
  },
  {
    "slug": "STQ1-63-4P-220V-110V",
    "name": "STQ1-63 63A 4P CB Class Auto Transfer Switch 110V/220V - Three-Phase+N ATS for Hospitals & Cold Storage",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/STQ1-63-4P(220V 110V)-1.jpg",
    "technicalSummary": "63A 4-pole CB class ATS for three-phase 110V/220V with neutral. Mechanical interlock + over/under-voltage protection, ~2s auto transfer, supports mixed 3-phase and single-phase loads – for hospitals, cold storage, and data centers."
  },
  {
    "slug": "STQ2-63-2P-220V-110V",
    "name": "STQ2-63 63A 2P CB Class Auto Transfer Switch 110V/220V - Economical Single-Phase ATS for Home & RV",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/STQ2-63-2P(220V 110V)-1.jpg",
    "technicalSummary": "63A 2-pole CB class ATS for single-phase 110V/220V. Mechanical interlock, ~2s auto transfer, max ~6.9kW – an economical civilian ATS for home emergency backup, RV, fire protection, and elevators."
  },
  {
    "slug": "STQ2-63-3P-220V-110V",
    "name": "STQ2-63 63A 3P CB Class Auto Transfer Switch 110V/220V - Three-Phase ATS for Industrial Equipment & Motors",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/STQ2-63-3P(220V 110V)-1.jpg",
    "technicalSummary": "63A 3-pole CB class ATS for three-phase 110V/220V (no neutral). Mechanical interlock, ~2s auto transfer, max ~22kW – a cost-effective solution for industrial equipment, commercial elevators, and three-phase motors."
  },
  {
    "slug": "STQ2-63-4P-220V-110V",
    "name": "STQ2-63 63A 4P CB Class Auto Transfer Switch 110V/220V - Three-Phase+N ATS for Hospitals & Cold Storage",
    "category": "ATS Dual Power Switch",
    "categoryCode": "ats-dual-power-switch",
    "image": "/images/products/STQ2-63-4P(220V 110V)-1.jpg",
    "technicalSummary": "63A 4-pole CB class ATS for three-phase 110V/220V with neutral. Mechanical interlock + over/under-voltage protection, ~2s auto transfer, supports mixed 3-phase and single-phase loads – for hospitals, cold storage, and data centers."
  },
  {
    "slug": "Aerosol-DIN-Rail",
    "name": "DIN Rail Thermal Aerosol Fire Extinguishing Device",
    "category": "Aerosol Fire Extinguisher",
    "categoryCode": "aerosol-fire-extinguisher",
    "image": "/images/products/Aerosol-Fire-Extinguishing-Sticker-1.jpg",
    "technicalSummary": "Passive DIN-rail thermal aerosol fire sticker for distribution cabinets, PV combiner boxes and electrical enclosures. 170°C self-activation, no power or wiring required."
  }
] as const

export const CATALOG_PRODUCTS: readonly CatalogProduct[] = PRODUCT_DATA.map((product, index) => ({
  id: `prd-${String(index + 1).padStart(3, '0')}`,
  catalogPage: index + 1,
  models: [product.name],
  highlights: [
    { label: 'Category', value: product.category },
    { label: 'Application', value: product.technicalSummary },
  ],
  ...product,
}))

export const CATALOG_CATEGORIES = [
  "Circuit Breaker",
  "Surge Protector Device",
  "DC Fuse Holder",
  "Over Voltage Protector",
  "Power Meter",
  "Wifi Smart Low Voltage Device",
  "PV Combiner Box",
  "ATS Dual Power Switch",
  "Aerosol Fire Extinguisher"
]

export const CATALOG_PRODUCT_COUNT = CATALOG_PRODUCTS.length
