export type ProductDetailContent = {
  description: string
  features: readonly string[]
  specs: readonly (readonly [string, string])[]
}

export const PRODUCT_DETAIL_CONTENT = {
  "MCB-AC-1P": {
    "description": "The UPPROCURE 1 Pole MCB is engineered for residential and light commercial single-phase circuits, providing reliable overload and short-circuit protection for lighting branches, socket outlets, and small appliances. Its slim single-module width (18mm) allows maximum circuit density in compact distribution boards. Manufactured in our ISO 9001 certified facility with 18 years of expertise, each unit undergoes 100% electrical testing before shipment. Available in B, C, and D trip curves to suit different load characteristics – B curve for sensitive resistive loads, C curve for general use, D curve for high-inrush equipment.",
    "features": [
      "Slim 18mm single-module width – maximises circuit density in compact boards",
      "B / C / D trip curve options – covers lighting, general, and motor loads",
      "Ideal for residential distribution boards and socket circuit protection",
      "CE & RoHS certified – accepted in EU, UK, and global markets",
      "100% factory electrical test before shipment",
      "OEM / ODM customization available – logo, color, rating label",
      "18-year ISO 9001 certified manufacturing facility"
    ],
    "specs": [
      [
        "Poles",
        "1P"
      ],
      [
        "Rated Current",
        "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A Customed"
      ],
      [
        "Rated Voltage",
        "120V / 230V AC"
      ],
      [
        "Breaking Capacity",
        "4.5 kA, 6 kA Customed"
      ],
      [
        "Trip Curve",
        "C, B, D Customed"
      ],
      [
        "Housing Material",
        "Flame-Retardant Thermoplastic"
      ],
      [
        "Mechanical Life",
        "20,000 operations"
      ],
      [
        "Electrical Life",
        "10,000 operations"
      ],
      [
        "Mounting",
        "DIN-rail 35mm"
      ],
      [
        "Certification",
        "CE, RoHS, IEC 60898-1"
      ],
      [
        "Mounting Method",
        "DIN Rail Mounting (35mm)"
      ],
      [
        "Contact Material",
        "High-Conductivity Copper Alloy"
      ]
    ]
  },
  "MCB-AC-2P": {
    "description": "The UPPROCURE 2 Pole MCB provides complete single-phase circuit isolation by simultaneously breaking both the live and neutral conductors – a critical safety requirement for bathroom circuits, outdoor installations, and any application where full disconnection is mandatory. Rated at 120V/230V AC across 6A to 63A, it is the preferred choice for TT earthing systems and markets requiring double-pole protection by regulation (IEC 60364, BS 7671). Manufactured under ISO 9001 quality management, the robust flame-retardant housing and high-conductivity copper alloy contacts ensure consistent performance over 20,000 mechanical operations.",
    "features": [
      "Simultaneous live + neutral disconnection – full circuit isolation in one operation",
      "Mandatory for bathroom, outdoor, and TT system installations",
      "Complies with IEC 60364 and BS 7671 double-pole protection requirements",
      "CE & RoHS certified – accepted in EU, UK, and global markets",
      "High-conductivity copper alloy contacts – 20,000 mechanical operations rated",
      "OEM / ODM customization available – logo, color, rating label",
      "18-year ISO 9001 certified manufacturing facility"
    ],
    "specs": [
      [
        "Poles",
        "2P"
      ],
      [
        "Rated Current",
        "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A Customed"
      ],
      [
        "Rated Voltage",
        "120V / 230V AC"
      ],
      [
        "Breaking Capacity",
        "4.5 kA, 6 kA Customed"
      ],
      [
        "Trip Curve",
        "C, B, D Customed"
      ],
      [
        "Housing Material",
        "Flame-Retardant Thermoplastic"
      ],
      [
        "Mechanical Life",
        "20,000 operations"
      ],
      [
        "Electrical Life",
        "10,000 operations"
      ],
      [
        "Mounting",
        "DIN-rail 35mm"
      ],
      [
        "Certification",
        "CE, RoHS, IEC 60898-1"
      ],
      [
        "Mounting Method",
        "DIN Rail Mounting (35mm)"
      ],
      [
        "Contact Material",
        "High-Conductivity Copper Alloy"
      ]
    ]
  },
  "MCB-AC-3P": {
    "description": "The UPPROCURE 3 Pole MCB is purpose-built for three-phase industrial and commercial applications, protecting motors, HVAC equipment, pumps, and three-phase distribution sub-boards from overload and short-circuit faults. All three poles trip simultaneously on fault detection, preventing single-phasing damage to connected three-phase motors – a common cause of motor burnout. The D-curve option accommodates high inrush currents during motor start-up without nuisance tripping. With a compact 3-module DIN-rail footprint and CE-certified breaking capacity up to 6kA, it delivers industrial-grade protection in a space-efficient package suited to panel builders and system integrators worldwide.",
    "features": [
      "Simultaneous three-phase disconnection – prevents single-phasing motor damage",
      "D-curve option for high inrush motor and transformer loads",
      "Ideal for HVAC, pumps, compressors, and three-phase sub-boards",
      "CE & RoHS certified – accepted in EU, UK, and global markets",
      "Compact 3-module DIN footprint – optimises panel space in industrial enclosures",
      "OEM / ODM customization available – logo, color, rating label",
      "18-year ISO 9001 certified manufacturing facility"
    ],
    "specs": [
      [
        "Poles",
        "3P"
      ],
      [
        "Rated Current",
        "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A Customed"
      ],
      [
        "Rated Voltage",
        "120V / 230V AC"
      ],
      [
        "Breaking Capacity",
        "4.5 kA, 6 kA Customed"
      ],
      [
        "Trip Curve",
        "C, B, D Customed"
      ],
      [
        "Housing Material",
        "Flame-Retardant Thermoplastic"
      ],
      [
        "Mechanical Life",
        "20,000 operations"
      ],
      [
        "Electrical Life",
        "10,000 operations"
      ],
      [
        "Mounting",
        "DIN-rail 35mm"
      ],
      [
        "Certification",
        "CE, RoHS, IEC 60898-1"
      ],
      [
        "Mounting Method",
        "DIN Rail Mounting (35mm)"
      ],
      [
        "Contact Material",
        "High-Conductivity Copper Alloy"
      ]
    ]
  },
  "MCB-AC-4P": {
    "description": "The UPPROCURE 4 Pole MCB delivers complete protection for three-phase four-wire (3P+N) systems by simultaneously isolating all three phase conductors and the neutral – the highest level of circuit isolation available in a miniature circuit breaker. It is the code-compliant choice for TN-S and TN-C-S earthing systems where neutral switching is required, including commercial buildings, data centres, hospitals, and industrial facilities with sensitive electronic loads. The 4-pole design eliminates the risk of neutral voltage rise during asymmetric faults, protecting downstream equipment from damaging overvoltage. Available from 6A to 63A with B, C, and D trip curves to match any load profile.",
    "features": [
      "Full 3P+N simultaneous disconnection – highest isolation level for four-wire systems",
      "Required for TN-S and TN-C-S systems where neutral switching is mandated",
      "Eliminates neutral voltage rise risk during asymmetric fault conditions",
      "Ideal for data centres, hospitals, and commercial buildings with sensitive loads",
      "CE & RoHS certified – accepted in EU, UK, and global markets",
      "OEM / ODM customization available – logo, color, rating label",
      "18-year ISO 9001 certified manufacturing facility"
    ],
    "specs": [
      [
        "Poles",
        "4P"
      ],
      [
        "Rated Current",
        "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A Customed"
      ],
      [
        "Rated Voltage",
        "120V / 230V AC"
      ],
      [
        "Breaking Capacity",
        "4.5 kA, 6 kA Customed"
      ],
      [
        "Trip Curve",
        "C, B, D Customed"
      ],
      [
        "Housing Material",
        "Flame-Retardant Thermoplastic"
      ],
      [
        "Mechanical Life",
        "20,000 operations"
      ],
      [
        "Electrical Life",
        "10,000 operations"
      ],
      [
        "Mounting",
        "DIN-rail 35mm"
      ],
      [
        "Certification",
        "CE, RoHS, IEC 60898-1"
      ],
      [
        "Mounting Method",
        "DIN Rail Mounting (35mm)"
      ],
      [
        "Contact Material",
        "High-Conductivity Copper Alloy"
      ]
    ]
  },
  "MCB-DC-1P": {
    "description": "The UPPROCURE 1 Pole DC MCB is the most space-efficient solution for protecting individual photovoltaic strings and single-line DC branch circuits. At just 18mm wide, it fits where multi-pole breakers cannot – making it the go-to choice for densely packed combiner boxes and compact off-grid battery enclosures. Rated at 500V DC with enhanced magnetic arc quenching, this breaker reliably interrupts stubborn DC arcs that would damage conventional AC-rated devices. Every unit leaves our ISO 9001 certified factory only after passing 100% electrical verification, giving installers confidence in consistent trip accuracy across the full 6 – 63A range. Whether you are wiring a rooftop solar array, a 48V telecom rack, or an RV leisure battery, the 1P DC MCB delivers code-compliant overcurrent protection without wasting valuable panel space.",
    "features": [
      "Ultra-compact 18mm single-module width – saves critical DIN-rail space in crowded combiner boxes.",
      "500V DC arc-quenching chamber – safely extinguishes persistent DC arcs that standard AC breakers cannot handle.",
      "9 current ratings (6A – 63A) – one SKU family covers everything from small off-grid setups to large string inverters.",
      "100% factory electrical testing – every unit verified for correct trip curve before shipment.",
      "Full OEM/ODM program – custom printing, private-label packaging, and modified trip curves available.",
      "Thermal-magnetic dual protection – fast short-circuit response plus reliable overload tripping.",
      "Snap-on 35mm DIN rail mount – tool-free installation and removal for rapid field service."
    ],
    "specs": [
      [
        "Poles",
        "1P"
      ],
      [
        "Rated Current",
        "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A (DC)"
      ],
      [
        "Rated Voltage",
        "500V DC"
      ],
      [
        "Breaking Capacity",
        "6 kA DC"
      ],
      [
        "Trip Curve",
        "C (DC)"
      ],
      [
        "Housing Material",
        "Flame-Retardant Thermoplastic, UV Resistant"
      ],
      [
        "Mechanical Life",
        "20,000 operations"
      ],
      [
        "Electrical Life",
        "10,000 operations"
      ],
      [
        "Mounting",
        "DIN-rail 35mm"
      ],
      [
        "Certification",
        "CE, RoHS, IEC 60947-2, TÜV (for PV)"
      ],
      [
        "Mounting Method",
        "DIN Rail Mounting (35mm)"
      ],
      [
        "Contact Material",
        "Silver Alloy Contacts"
      ],
      [
        "Application",
        "Solar PV System, DC Power Distribution, Marine Electrical System"
      ],
      [
        "Arc Extinguishing System",
        "Enhanced Magnetic Arc Quenching for DC"
      ],
      [
        "Wiring Method",
        "Screw Terminal, Compatible with Soft Silicone Wire (with Copper Crimp)"
      ],
      [
        "Operating Temperature",
        "-25°C to +70°C"
      ],
      [
        "IP Rating",
        "IP20"
      ]
    ]
  },
  "MCB-DC-2P": {
    "description": "The UPPROCURE 2 Pole DC MCB is the most widely specified DC breaker for residential solar installations and battery energy storage systems. By breaking both the positive and negative conductors simultaneously, it provides complete galvanic isolation in a single switching action – eliminating the shock hazard that remains when only one pole is opened. Rated at 500V DC with 6kA breaking capacity, it handles the demanding fault currents generated by lithium-ion battery banks and high-voltage PV strings alike. The linked toggle mechanism guarantees that both poles trip together under overload or short-circuit conditions, meeting the safety requirements of IEC 60947-2 and TÜV PV certification. Backed by 18 years of manufacturing expertise and 100% pre-shipment electrical testing, the 2P DC MCB is available in nine current ratings from 6A to 63A – ready for everything from a single residential inverter feed to a parallel battery rack.",
    "features": [
      "Simultaneous 2-pole disconnection – breaks positive and negative lines together for full galvanic isolation.",
      "500V DC rated with 6kA breaking capacity – handles high fault currents from lithium battery banks.",
      "Linked toggle mechanism – both poles always trip together, preventing dangerous single-pole open states.",
      "Ideal for residential solar and ESS – the most popular configuration for home PV inverter protection.",
      "9 current ratings (6A – 63A) – covers single-inverter feeds through parallel battery strings.",
      "100% factory-tested trip accuracy – consistent C-curve performance across every production batch.",
      "OEM/ODM ready – custom branding, bilingual labels, and modified specifications for your market."
    ],
    "specs": [
      [
        "Poles",
        "2P"
      ],
      [
        "Rated Current",
        "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A (DC)"
      ],
      [
        "Rated Voltage",
        "500V DC"
      ],
      [
        "Breaking Capacity",
        "6 kA DC"
      ],
      [
        "Trip Curve",
        "C (DC)"
      ],
      [
        "Housing Material",
        "Flame-Retardant Thermoplastic, UV Resistant"
      ],
      [
        "Mechanical Life",
        "20,000 operations"
      ],
      [
        "Electrical Life",
        "10,000 operations"
      ],
      [
        "Mounting",
        "DIN-rail 35mm"
      ],
      [
        "Certification",
        "CE, RoHS, IEC 60947-2, TÜV (for PV)"
      ],
      [
        "Mounting Method",
        "DIN Rail Mounting (35mm)"
      ],
      [
        "Contact Material",
        "Silver Alloy Contacts"
      ],
      [
        "Application",
        "Solar PV System, DC Power Distribution, Marine Electrical System"
      ],
      [
        "Arc Extinguishing System",
        "Enhanced Magnetic Arc Quenching for DC"
      ],
      [
        "Wiring Method",
        "Screw Terminal, Compatible with Soft Silicone Wire (with Copper Crimp)"
      ],
      [
        "Operating Temperature",
        "-25°C to +70°C"
      ],
      [
        "IP Rating",
        "IP20"
      ]
    ]
  },
  "MCB-DC-3P": {
    "description": "The UPPROCURE 3 Pole DC MCB is purpose-built for commercial and industrial photovoltaic installations where higher system voltages demand multi-pole series protection. By connecting three poles in series, system designers can achieve safe interruption at voltages well beyond the single-pole 500V DC rating – a critical requirement for large rooftop arrays and ground-mount solar farms feeding high-voltage DC buses. Each pole contains an independent enhanced magnetic arc-quenching chamber, ensuring that even at elevated voltages the DC arc is reliably extinguished within milliseconds. The three-pole configuration also suits marine DC power networks and EV charging infrastructure where three-wire DC distribution is used. With 6kA DC breaking capacity, TÜV PV certification, and nine selectable current ratings from 6A to 63A, this breaker gives project engineers the flexibility to standardize on a single product family across diverse commercial DC applications. Every unit is 100% electrically tested in our ISO 9001 facility before shipping worldwide.",
    "features": [
      "3-pole series connection – enables safe switching at system voltages far above single-pole limits.",
      "Independent arc chamber per pole – each pole extinguishes its own DC arc for maximum reliability.",
      "Built for commercial solar – protects high-voltage DC buses on rooftop and ground-mount PV farms.",
      "Marine and EV-ready – suits three-wire DC distribution in vessels and charging stations.",
      "6kA DC breaking capacity – interrupts high fault currents from parallel-connected PV strings.",
      "TÜV PV + IEC 60947-2 certified – meets international standards for photovoltaic DC protection.",
      "Full OEM/ODM customization – voltage markings, trip curve variants, and private-label packaging available."
    ],
    "specs": [
      [
        "Poles",
        "3P"
      ],
      [
        "Rated Current",
        "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A (DC)"
      ],
      [
        "Rated Voltage",
        "500V DC"
      ],
      [
        "Breaking Capacity",
        "6 kA DC"
      ],
      [
        "Trip Curve",
        "C (DC)"
      ],
      [
        "Housing Material",
        "Flame-Retardant Thermoplastic, UV Resistant"
      ],
      [
        "Mechanical Life",
        "20,000 operations"
      ],
      [
        "Electrical Life",
        "10,000 operations"
      ],
      [
        "Mounting",
        "DIN-rail 35mm"
      ],
      [
        "Certification",
        "CE, RoHS, IEC 60947-2, TÜV (for PV)"
      ],
      [
        "Mounting Method",
        "DIN Rail Mounting (35mm)"
      ],
      [
        "Contact Material",
        "Silver Alloy Contacts"
      ],
      [
        "Application",
        "Solar PV System, DC Power Distribution, Marine Electrical System"
      ],
      [
        "Arc Extinguishing System",
        "Enhanced Magnetic Arc Quenching for DC"
      ],
      [
        "Wiring Method",
        "Screw Terminal, Compatible with Soft Silicone Wire (with Copper Crimp)"
      ],
      [
        "Operating Temperature",
        "-25°C to +70°C"
      ],
      [
        "IP Rating",
        "IP20"
      ]
    ]
  },
  "MCB-DC-4P": {
    "description": "The UPPROCURE 4 Pole DC MCB delivers the highest level of DC circuit isolation available in a compact DIN-rail package. Designed for industrial-scale solar plants, utility-grade energy storage, and bipolar DC distribution networks, the four-pole configuration allows engineers to protect both the positive and negative buses of a bipolar system – or to achieve the maximum series voltage rating for extra-high-voltage DC strings. All four poles share a common linked toggle that guarantees simultaneous disconnection, a safety requirement in large installations where maintenance personnel must achieve a verified zero-energy state. With four independent enhanced magnetic arc chambers, the breaker can handle the extreme energy of industrial DC faults at up to 6kA. Each unit carries CE, TÜV PV, and IEC 60947-2 certification and is backed by UPPROCURE's 18-year track record of 100% electrical testing. Available in 6A through 63A with full OEM customization, it is the professional's choice when no compromise on DC safety is acceptable.",
    "features": [
      "4-pole simultaneous disconnection – guarantees verified zero-energy state for safe maintenance lockout.",
      "Bipolar DC network compatible – protects both positive and negative buses in bipolar distribution systems.",
      "Maximum series voltage capability – four poles in series for extra-high-voltage DC string protection.",
      "Industrial-grade 6kA breaking capacity – handles extreme fault energy from large PV arrays and battery farms.",
      "Four independent arc chambers – each pole extinguishes DC arcs independently for redundant safety.",
      "CE + TÜV PV + IEC 60947-2 – fully certified for utility-scale solar and industrial DC applications.",
      "Complete OEM/ODM program – custom ratings, branded enclosures, and project-specific documentation available."
    ],
    "specs": [
      [
        "Poles",
        "4P"
      ],
      [
        "Rated Current",
        "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A (DC)"
      ],
      [
        "Rated Voltage",
        "500V DC"
      ],
      [
        "Breaking Capacity",
        "6 kA DC"
      ],
      [
        "Trip Curve",
        "C (DC)"
      ],
      [
        "Housing Material",
        "Flame-Retardant Thermoplastic, UV Resistant"
      ],
      [
        "Mechanical Life",
        "20,000 operations"
      ],
      [
        "Electrical Life",
        "10,000 operations"
      ],
      [
        "Mounting",
        "DIN-rail 35mm"
      ],
      [
        "Certification",
        "CE, RoHS, IEC 60947-2, TÜV (for PV)"
      ],
      [
        "Mounting Method",
        "DIN Rail Mounting (35mm)"
      ],
      [
        "Contact Material",
        "Silver Alloy Contacts"
      ],
      [
        "Application",
        "Solar PV System, DC Power Distribution, Marine Electrical System"
      ],
      [
        "Arc Extinguishing System",
        "Enhanced Magnetic Arc Quenching for DC"
      ],
      [
        "Wiring Method",
        "Screw Terminal, Compatible with Soft Silicone Wire (with Copper Crimp)"
      ],
      [
        "Operating Temperature",
        "-25°C to +70°C"
      ],
      [
        "IP Rating",
        "IP20"
      ]
    ]
  },
  "SPD-AC-1P-Grey": {
    "description": "The SPD-AC-1P-Grey is a single-pole AC surge protection device designed specifically for neutral-ground (N-PE) protection in TN-S low-voltage distribution systems. It safeguards the neutral line of single-phase systems against surge transients caused by lightning or switching events, with a maximum discharge current of 40kA and a nominal discharge current of 20kA. The voltage protection level of –.0kV ensures downstream equipment is kept within safe limits during transient events. At its core is a metal oxide varistor (MOV) that responds in under 25 nanoseconds – effectively instantaneous suppression. The grey flame-retardant PC housing (UL94 V-0 rated) snaps onto a standard 35mm DIN rail and features a modular, hot-swappable design, allowing replacement under live conditions without rewiring. Suitable for installation in sub-distribution boxes and combined lightning boxes.",
    "features": [
      "1-pole N-PE protection for TN-S low-voltage distribution systems",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level –.0kV – protects neutral line from transient overvoltage",
      "<25ns ultra-fast response time – instantaneous transient suppression",
      "Metal oxide varistor (MOV) core – excellent conductivity and corrosion resistance",
      "Modular hot-swappable design – replace without rewiring",
      "Flame-retardant PC housing (UL94 V-0), grey, 35mm DIN rail mounting",
      "Suitable for sub-distribution boxes and combined lightning boxes"
    ],
    "specs": [
      [
        "Poles",
        "1P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "385V AC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "–.0kV"
      ],
      [
        "System Type",
        "TN-S Low-voltage Distribution System"
      ],
      [
        "Protection Mode",
        "N-PE (Neutral to Ground)"
      ],
      [
        "Wiring",
        "Top: Neutral / Bottom: Ground (PE)"
      ],
      [
        "Core Component",
        "Metal Oxide Varistor (MOV)"
      ],
      [
        "Response Time",
        "<25ns"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0), Grey"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Design",
        "Modular, Hot-swappable"
      ],
      [
        "Applications",
        "Sub-distribution Box, Combined Lightning Box"
      ]
    ]
  },
  "SPD-AC-2P-Grey": {
    "description": "The SPD-AC-2P-Grey is a 2-pole AC surge protection device providing full-mode protection across all three paths – L-N, L-PE, and N-PE – in a single module. This comprehensive coverage ensures that single-phase electrical devices and precision instruments are shielded from surge transients regardless of which conductor the overvoltage appears on. The maximum discharge current is 40kA with a nominal of 20kA, and the voltage protection level is kept at –.0kV. At its core, a metal oxide varistor (MOV) responds in under 25 nanoseconds for instantaneous suppression. Compatible with single-phase AC and IT systems, the SPD-AC-2P connects via L (In/Out) and N (In/Out) terminals and clips onto a standard 35mm DIN rail. The grey flame-retardant PC housing (UL94 V-0) features a modular, hot-swappable design for maintenance without rewiring. Suitable for main distribution boxes, sub-distribution boxes, and small industrial circuit panels.",
    "features": [
      "2-pole full-mode protection: L-N, L-PE and N-PE in a single module",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level –.0kV – protects single-phase devices and precision instruments",
      "<25ns ultra-fast response time – instantaneous transient suppression",
      "Metal oxide varistor (MOV) core – excellent conductivity and corrosion resistance",
      "Compatible with single-phase AC systems and IT systems",
      "Modular hot-swappable design – replace without rewiring",
      "Flame-retardant PC housing (UL94 V-0), grey, 35mm DIN rail mounting"
    ],
    "specs": [
      [
        "Poles",
        "2P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "385V AC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "–.0kV"
      ],
      [
        "System Type",
        "Single-phase AC System, IT System"
      ],
      [
        "Protection Mode",
        "L-N, L-PE, N-PE (Full Mode)"
      ],
      [
        "Wiring",
        "L (In/Out), N (In/Out)"
      ],
      [
        "Core Component",
        "Metal Oxide Varistor (MOV)"
      ],
      [
        "Response Time",
        "<25ns"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0), Grey"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Design",
        "Modular, Hot-swappable"
      ],
      [
        "Applications",
        "Main Distribution Box, Sub-distribution Box, Small Industrial Circuits"
      ]
    ]
  },
  "SPD-AC-3P-Grey": {
    "description": "The SPD-AC-3P-Grey is a 3-pole AC surge protection device for three-phase 3-wire low-voltage systems without neutral. It provides independent phase-to-earth (L-PE) protection on each of the three phases – L1-PE, L2-PE, and L3-PE – shielding industrial power devices and three-phase loads from surge transients caused by lightning strikes or switching events. The maximum discharge current is 40kA with a nominal of 20kA, and the voltage protection level is –.5kV per phase. A metal oxide varistor (MOV) core delivers sub-25ns response for instantaneous transient clamping. The grey flame-retardant PC housing (UL94 V-0) mounts directly on a 35mm DIN rail with a modular, hot-swappable design – modules can be replaced individually during maintenance without full rewiring. Suitable for installation in power distribution cabinets and equipment control boxes serving three-phase industrial loads.",
    "features": [
      "3-pole independent L-PE protection per phase: L1-PE, L2-PE, L3-PE",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level –.5kV per phase – for three-phase industrial loads",
      "<25ns ultra-fast response time – instantaneous transient suppression",
      "Metal oxide varistor (MOV) core – excellent conductivity and corrosion resistance",
      "Three-phase 3-wire system (no neutral) – suitable for industrial installations",
      "Modular hot-swappable design – individual module replacement without rewiring",
      "Flame-retardant PC housing (UL94 V-0), grey, 35mm DIN rail mounting"
    ],
    "specs": [
      [
        "Poles",
        "3P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "385V AC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "–.5kV"
      ],
      [
        "System Type",
        "Three-phase 3-wire Low-voltage System (No Neutral)"
      ],
      [
        "Protection Mode",
        "L1-PE, L2-PE, L3-PE"
      ],
      [
        "Wiring",
        "3 Phase Lines (L1, L2, L3), No Neutral"
      ],
      [
        "Core Component",
        "Metal Oxide Varistor (MOV)"
      ],
      [
        "Response Time",
        "<25ns"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0), Grey"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Design",
        "Modular, Hot-swappable"
      ],
      [
        "Applications",
        "Power Distribution Cabinet, Equipment Control Box"
      ]
    ]
  },
  "SPD-AC-4P-Grey": {
    "description": "The SPD-AC-4P-Grey is a 4-pole AC surge protection device providing complete full-mode protection across all four conductors – L1-PE, L2-PE, L3-PE and N-PE – in three-phase 4-wire TT and TN-S low-voltage systems. By covering all three phases and the neutral line simultaneously, it shields three-phase electrical devices, precision instruments, and the neutral conductor from surge transients caused by lightning or switching events. The maximum discharge current is 40kA with a nominal of 20kA, and the voltage protection level is –.5kV per mode. A metal oxide varistor (MOV) core responds in under 25 nanoseconds for instantaneous clamping of transient overvoltages. The grey flame-retardant PC housing (UL94 V-0) mounts on a standard 35mm DIN rail and features a modular, hot-swappable design for easy on-site maintenance. Designed for the highest level of entry-point protection in factory main distribution cabinets, data centers, and large commercial building entry panels.",
    "features": [
      "4-pole full-mode protection: L1-PE, L2-PE, L3-PE and N-PE in one unit",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level –.5kV – covers all phases and neutral",
      "<25ns ultra-fast response time – instantaneous transient suppression",
      "Metal oxide varistor (MOV) core – excellent conductivity and corrosion resistance",
      "Compatible with TT and TN-S three-phase 4-wire low-voltage systems",
      "Modular hot-swappable design – individual module replacement without rewiring",
      "Flame-retardant PC housing (UL94 V-0), grey, 35mm DIN rail mounting"
    ],
    "specs": [
      [
        "Poles",
        "4P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "385V AC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "–.5kV"
      ],
      [
        "System Type",
        "Three-phase 4-wire Low-voltage System (TT / TN-S)"
      ],
      [
        "Protection Mode",
        "L1-PE, L2-PE, L3-PE, N-PE (Full Mode)"
      ],
      [
        "Wiring",
        "3 Phase Lines (L1, L2, L3) + Neutral (N)"
      ],
      [
        "Core Component",
        "Metal Oxide Varistor (MOV)"
      ],
      [
        "Response Time",
        "<25ns"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0), Grey"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Design",
        "Modular, Hot-swappable"
      ],
      [
        "Applications",
        "Factory Main Cabinet, Data Center, Large Building Entry Panel"
      ]
    ]
  },
  "SPD-DC-1P-White": {
    "description": "The SPD-DC-1P-White is a single-pole DC surge protection device engineered specifically for photovoltaic systems, supporting both 500VDC and 1000VDC operating voltages. It protects solar electrical systems and connected load equipment against lightning-induced surges, switching transients, and overvoltage events, with a maximum discharge current of 40kA and a nominal of 20kA. The voltage protection level is 2.8kV at 500VDC and 3.6kV at 1000VDC, adapting to the system voltage in use. Built with a copper core for excellent conductivity and corrosion resistance, the device is housed in a white flame-retardant PC enclosure (flame-retardant rated) that snaps onto a standard 35mm DIN rail. Compatible with PV systems and circuit breakers, it is designed for installation inside distribution boxes on RV solar setups and residential rooftop solar systems.",
    "features": [
      "1-pole DC surge protection for PV photovoltaic systems",
      "Dual voltage: supports 500VDC and 1000VDC systems",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level: 2.8kV (500VDC) / 3.6kV (1000VDC)",
      "Lightning protection, surge suppression and transient overvoltage clamping",
      "Copper core – excellent conductivity and corrosion resistance",
      "Compatible with PV systems and DC circuit breakers",
      "White flame-retardant PC housing, 35mm DIN rail mounting"
    ],
    "specs": [
      [
        "Poles",
        "1P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "500VDC / 1000VDC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "2.8kV (500VDC) / 3.6kV (1000VDC)"
      ],
      [
        "Application System",
        "Photovoltaic (PV) System"
      ],
      [
        "Protection Function",
        "Lightning Protection, Surge Suppression, Transient Overvoltage"
      ],
      [
        "Core Material",
        "Copper"
      ],
      [
        "Housing Material",
        "Flame-retardant PC, White"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Compatibility",
        "PV Systems, DC Circuit Breakers"
      ],
      [
        "Installation Location",
        "Distribution Box"
      ],
      [
        "Applications",
        "RVs, Residential Solar Systems"
      ]
    ]
  },
  "SPD-DC-2P-White": {
    "description": "The SPD-DC-2P-White is a 2-pole DC surge protection device for photovoltaic systems, supporting both 500VDC and 1000VDC operating voltages. By switching both poles simultaneously, it provides complete protection of both the positive and negative conductors in a DC circuit – shielding solar electrical systems and connected load equipment from lightning-induced surges, switching transients, and overvoltage events. Maximum discharge current is 40kA with a nominal of 20kA, and the voltage protection level is 2.8kV at 500VDC and 3.6kV at 1000VDC. The copper core ensures excellent conductivity and corrosion resistance for reliable long-term outdoor operation. The white flame-retardant PC housing clips onto a standard 35mm DIN rail and is compatible with PV systems and DC circuit breakers. Ideal for distribution boxes in RV solar setups and residential rooftop solar installations.",
    "features": [
      "2-pole DC surge protection – simultaneous positive and negative conductor protection",
      "Dual voltage: supports 500VDC and 1000VDC PV systems",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level: 2.8kV (500VDC) / 3.6kV (1000VDC)",
      "Lightning protection, surge suppression and transient overvoltage clamping",
      "Copper core – excellent conductivity and corrosion resistance",
      "Compatible with PV systems and DC circuit breakers",
      "White flame-retardant PC housing, 35mm DIN rail mounting"
    ],
    "specs": [
      [
        "Poles",
        "2P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "500VDC / 1000VDC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "2.8kV (500VDC) / 3.6kV (1000VDC)"
      ],
      [
        "Application System",
        "Photovoltaic (PV) System"
      ],
      [
        "Protection Function",
        "Lightning Protection, Surge Suppression, Transient Overvoltage"
      ],
      [
        "Core Material",
        "Copper"
      ],
      [
        "Housing Material",
        "Flame-retardant PC, White"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Compatibility",
        "PV Systems, DC Circuit Breakers"
      ],
      [
        "Installation Location",
        "Distribution Box"
      ],
      [
        "Applications",
        "RVs, Residential Solar Systems"
      ]
    ]
  },
  "SPD-DC-3P-White": {
    "description": "The SPD-DC-3P-White is a 3-pole high-voltage DC surge protection device for utility and commercial-scale photovoltaic systems, supporting both 1000VDC and 1500VDC operating voltages. It provides full-mode protection across all three DC protection paths simultaneously – DC+ to PE, DC- to PE, and DC+ to DC- – ensuring that inverters, PV arrays, and DC loads are comprehensively shielded against lightning-induced surges, switching transients, and overvoltage events regardless of which conductor is affected. The maximum discharge current is 40kA with a nominal of 20kA, and the voltage protection level is –.0kV. At its core is a high-energy metal oxide varistor (MOV) that responds in under 25 nanoseconds. The modular, hot-swappable design allows individual modules to be replaced without rewiring, minimizing downtime in live installations. The white flame-retardant PC housing (UL94 V-0) mounts on a standard 35mm DIN rail and is suitable for installation in DC distribution cabinets and PV combiner boxes at solar power stations.",
    "features": [
      "3-pole full-mode DC protection: DC+/PE, DC-/PE and DC+/DC- in one unit",
      "High voltage: supports 1000VDC and 1500VDC PV systems",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level –.0kV – for high-voltage PV arrays and inverters",
      "<25ns ultra-fast response – high-energy MOV core for instantaneous clamping",
      "Protects inverters, PV arrays and DC loads from lightning and transient overvoltage",
      "Modular hot-swappable design – minimize downtime in live solar installations",
      "White flame-retardant PC housing (UL94 V-0), 35mm DIN rail mounting"
    ],
    "specs": [
      [
        "Poles",
        "3P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "1000VDC / 1500VDC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "–.0kV"
      ],
      [
        "Application System",
        "Photovoltaic DC System"
      ],
      [
        "Protection Mode",
        "DC+/PE, DC-/PE, DC+/DC- (Full Mode)"
      ],
      [
        "Wiring",
        "3 Terminals: DC+, DC-, PE"
      ],
      [
        "Core Component",
        "High-energy Metal Oxide Varistor (MOV)"
      ],
      [
        "Response Time",
        "<25ns"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0), White"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Design",
        "Modular, Hot-swappable"
      ],
      [
        "Applications",
        "PV Combiner Box, Inverter DC Side, Solar Power Station"
      ]
    ]
  },
  "SPD-DC-4P-White": {
    "description": "The SPD-DC-4P-White is a 4-pole high-voltage DC surge protection device designed for photovoltaic systems with dual DC inputs, supporting both 1000VDC and 1500VDC. Unlike single-input DC SPDs, it provides two completely independent protection circuits – DC1 (DC1+/PE and DC1-/PE) and DC2 (DC2+/PE and DC2-/PE) – allowing a single unit to simultaneously protect both input channels of a dual MPPT inverter or two separate PV arrays in a combiner box. Maximum discharge current is 40kA with a nominal of 20kA, and the voltage protection level is –.0kV per channel. The high-energy metal oxide varistor (MOV) core responds in under 25 nanoseconds. The modular hot-swappable design allows individual pole modules to be replaced without rewiring. The white flame-retardant PC housing (UL94 V-0) mounts on a standard 35mm DIN rail and is built for installation in DC distribution cabinets and at inverter DC inputs in solar power and energy storage systems.",
    "features": [
      "4-pole dual-input protection: two independent DC circuits in one module",
      "Protects DC1 (DC1+/PE, DC1-/PE) and DC2 (DC2+/PE, DC2-/PE) simultaneously",
      "High voltage: supports 1000VDC and 1500VDC PV systems",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level –.0kV per channel",
      "<25ns ultra-fast response – high-energy MOV core for instantaneous clamping",
      "Ideal for dual MPPT inverters, PV combiner boxes and energy storage systems",
      "Modular hot-swappable design, white flame-retardant PC housing, 35mm DIN rail"
    ],
    "specs": [
      [
        "Poles",
        "4P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "1000VDC / 1500VDC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "–.0kV"
      ],
      [
        "Application System",
        "Photovoltaic DC System (Dual Input)"
      ],
      [
        "Protection Mode",
        "DC1+/PE, DC1-/PE, DC2+/PE, DC2-/PE (Dual Independent)"
      ],
      [
        "Wiring",
        "4 Terminals: DC1+, DC1-, DC2+, DC2-"
      ],
      [
        "Core Component",
        "High-energy Metal Oxide Varistor (MOV)"
      ],
      [
        "Response Time",
        "<25ns"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0), White"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Design",
        "Modular, Hot-swappable"
      ],
      [
        "Applications",
        "Dual MPPT Inverters, PV Combiner Boxes, Energy Storage Systems"
      ]
    ]
  },
  "SPD-DC-1P-Orange": {
    "description": "The SPD-DC-1P-Orange is a single-pole DC surge protection device engineered specifically for photovoltaic systems, supporting both 500VDC and 1000VDC operating voltages. It protects solar electrical systems and connected load equipment against lightning-induced surges, switching transients, and overvoltage events, with a maximum discharge current of 40kA and a nominal of 20kA. The voltage protection level is 2.8kV at 500VDC and 3.6kV at 1000VDC, adapting to the system voltage in use. Built with a copper core for excellent conductivity and corrosion resistance, the device is housed in an orange flame-retardant PC enclosure that snaps onto a standard 35mm DIN rail. Compatible with PV systems and circuit breakers, it is designed for installation inside distribution boxes on RV solar setups and residential rooftop solar systems.",
    "features": [
      "1-pole DC surge protection for PV photovoltaic systems",
      "Dual voltage: supports 500VDC and 1000VDC systems",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level: 2.8kV (500VDC) / 3.6kV (1000VDC)",
      "Lightning protection, surge suppression and transient overvoltage clamping",
      "Copper core – excellent conductivity and corrosion resistance",
      "Compatible with PV systems and DC circuit breakers",
      "Orange flame-retardant PC housing, 35mm DIN rail mounting"
    ],
    "specs": [
      [
        "Poles",
        "1P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "500VDC / 1000VDC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "2.8kV (500VDC) / 3.6kV (1000VDC)"
      ],
      [
        "Application System",
        "Photovoltaic (PV) System"
      ],
      [
        "Protection Function",
        "Lightning Protection, Surge Suppression, Transient Overvoltage"
      ],
      [
        "Core Material",
        "Copper"
      ],
      [
        "Housing Material",
        "Flame-retardant PC, Orange"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Compatibility",
        "PV Systems, DC Circuit Breakers"
      ],
      [
        "Installation Location",
        "Distribution Box"
      ],
      [
        "Applications",
        "RVs, Residential Solar Systems"
      ]
    ]
  },
  "SPD-DC-2P-Orange": {
    "description": "The SPD-DC-2P-Orange is a 2-pole DC surge protection device for photovoltaic systems, supporting both 500VDC and 1000VDC operating voltages. By switching both poles simultaneously, it provides complete protection of both the positive and negative conductors in a DC circuit – shielding solar electrical systems and connected load equipment from lightning-induced surges, switching transients, and overvoltage events. Maximum discharge current is 40kA with a nominal of 20kA, and the voltage protection level is 2.8kV at 500VDC and 3.6kV at 1000VDC. The copper core ensures excellent conductivity and corrosion resistance for reliable long-term outdoor operation. The orange flame-retardant PC housing clips onto a standard 35mm DIN rail and is compatible with PV systems and DC circuit breakers. Ideal for distribution boxes in RV solar setups and residential rooftop solar installations.",
    "features": [
      "2-pole DC surge protection – simultaneous positive and negative conductor protection",
      "Dual voltage: supports 500VDC and 1000VDC PV systems",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level: 2.8kV (500VDC) / 3.6kV (1000VDC)",
      "Lightning protection, surge suppression and transient overvoltage clamping",
      "Copper core – excellent conductivity and corrosion resistance",
      "Compatible with PV systems and DC circuit breakers",
      "Orange flame-retardant PC housing, 35mm DIN rail mounting"
    ],
    "specs": [
      [
        "Poles",
        "2P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "500VDC / 1000VDC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "2.8kV (500VDC) / 3.6kV (1000VDC)"
      ],
      [
        "Application System",
        "Photovoltaic (PV) System"
      ],
      [
        "Protection Function",
        "Lightning Protection, Surge Suppression, Transient Overvoltage"
      ],
      [
        "Core Material",
        "Copper"
      ],
      [
        "Housing Material",
        "Flame-retardant PC, Orange"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Compatibility",
        "PV Systems, DC Circuit Breakers"
      ],
      [
        "Installation Location",
        "Distribution Box"
      ],
      [
        "Applications",
        "RVs, Residential Solar Systems"
      ]
    ]
  },
  "SPD-DC-3P-Orange": {
    "description": "The SPD-DC-3P-Orange is a 3-pole high-voltage DC surge protection device for utility and commercial-scale photovoltaic systems, supporting both 1000VDC and 1500VDC operating voltages. It provides full-mode protection across all three DC protection paths simultaneously – DC+ to PE, DC- to PE, and DC+ to DC- – ensuring that inverters, PV arrays, and DC loads are comprehensively shielded against lightning-induced surges, switching transients, and overvoltage events regardless of which conductor is affected. The maximum discharge current is 40kA with a nominal of 20kA, and the voltage protection level is –.0kV. At its core is a high-energy metal oxide varistor (MOV) that responds in under 25 nanoseconds. The modular, hot-swappable design allows individual modules to be replaced without rewiring, minimizing downtime in live installations. The orange flame-retardant PC housing (UL94 V-0) mounts on a standard 35mm DIN rail and is suitable for installation in DC distribution cabinets and PV combiner boxes at solar power stations.",
    "features": [
      "3-pole full-mode DC protection: DC+/PE, DC-/PE and DC+/DC- in one unit",
      "High voltage: supports 1000VDC and 1500VDC PV systems",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level –.0kV – for high-voltage PV arrays and inverters",
      "<25ns ultra-fast response – high-energy MOV core for instantaneous clamping",
      "Protects inverters, PV arrays and DC loads from lightning and transient overvoltage",
      "Modular hot-swappable design – minimize downtime in live solar installations",
      "Orange flame-retardant PC housing (UL94 V-0), 35mm DIN rail mounting"
    ],
    "specs": [
      [
        "Poles",
        "3P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "1000VDC / 1500VDC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "–.0kV"
      ],
      [
        "Application System",
        "Photovoltaic DC System"
      ],
      [
        "Protection Mode",
        "DC+/PE, DC-/PE, DC+/DC- (Full Mode)"
      ],
      [
        "Wiring",
        "3 Terminals: DC+, DC-, PE"
      ],
      [
        "Core Component",
        "High-energy Metal Oxide Varistor (MOV)"
      ],
      [
        "Response Time",
        "<25ns"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0), Orange"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Design",
        "Modular, Hot-swappable"
      ],
      [
        "Applications",
        "PV Combiner Box, Inverter DC Side, Solar Power Station"
      ]
    ]
  },
  "SPD-DC-4P-Orange": {
    "description": "The SPD-DC-4P-Orange is a 4-pole high-voltage DC surge protection device designed for photovoltaic systems with dual DC inputs, supporting both 1000VDC and 1500VDC. Unlike single-input DC SPDs, it provides two completely independent protection circuits – DC1 (DC1+/PE and DC1-/PE) and DC2 (DC2+/PE and DC2-/PE) – allowing a single unit to simultaneously protect both input channels of a dual MPPT inverter or two separate PV arrays in a combiner box. Maximum discharge current is 40kA with a nominal of 20kA, and the voltage protection level is –.0kV per channel. The high-energy metal oxide varistor (MOV) core responds in under 25 nanoseconds. The modular hot-swappable design allows individual pole modules to be replaced without rewiring. The orange flame-retardant PC housing (UL94 V-0) mounts on a standard 35mm DIN rail and is built for installation in DC distribution cabinets and at inverter DC inputs in solar power and energy storage systems.",
    "features": [
      "4-pole dual-input protection: two independent DC circuits in one module",
      "Protects DC1 (DC1+/PE, DC1-/PE) and DC2 (DC2+/PE, DC2-/PE) simultaneously",
      "High voltage: supports 1000VDC and 1500VDC PV systems",
      "40kA max discharge current (Imax), 20kA nominal discharge current (In)",
      "Voltage protection level –.0kV per channel",
      "<25ns ultra-fast response – high-energy MOV core for instantaneous clamping",
      "Ideal for dual MPPT inverters, PV combiner boxes and energy storage systems",
      "Modular hot-swappable design, orange flame-retardant PC housing, 35mm DIN rail"
    ],
    "specs": [
      [
        "Poles",
        "4P"
      ],
      [
        "Max. Continuous Operating Voltage (Uc)",
        "1000VDC / 1500VDC"
      ],
      [
        "Nominal Discharge Current (In)",
        "20kA"
      ],
      [
        "Max. Discharge Current (Imax)",
        "40kA"
      ],
      [
        "Voltage Protection Level (Up)",
        "–.0kV"
      ],
      [
        "Application System",
        "Photovoltaic DC System (Dual Input)"
      ],
      [
        "Protection Mode",
        "DC1+/PE, DC1-/PE, DC2+/PE, DC2-/PE (Dual Independent)"
      ],
      [
        "Wiring",
        "4 Terminals: DC1+, DC1-, DC2+, DC2-"
      ],
      [
        "Core Component",
        "High-energy Metal Oxide Varistor (MOV)"
      ],
      [
        "Response Time",
        "<25ns"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0), Orange"
      ],
      [
        "Mounting",
        "35mm DIN Rail"
      ],
      [
        "Design",
        "Modular, Hot-swappable"
      ],
      [
        "Applications",
        "Dual MPPT Inverters, PV Combiner Boxes, Energy Storage Systems"
      ]
    ]
  },
  "RT18-32X-1P": {
    "description": "When a single-phase control circuit or lighting branch needs reliable fuse protection without consuming extra rail space, the UPPROCURE RT18-32X 1P is the go-to choice. At just one DIN rail module wide, it is the most space-efficient configuration in the RT18-32X series — fitting tight control cabinets where every millimeter counts. Built with a flame-retardant PVC housing and high-conductivity copper contacts, it ensures minimal contact resistance and stable current transmission under continuous load. Rated at 32A and 500V–690V AC, it accepts standard 10x38mm ceramic fuse links for dependable overload and short-circuit protection. The integrated red LED indicator lights up immediately when the fuse blows, allowing maintenance staff to locate the fault at a glance without probing live terminals. A snap-on 35mm DIN rail design and screw terminals complete a fast, tool-free installation. Note: fuse links are sold separately.",
    "features": [
      "Single-pole 1-module design — most space-efficient RT18-32X option",
      "Rated 32A / 500V–690V AC — suitable for single-phase control and lighting circuits",
      "Compatible with standard 10x38mm ceramic fuse links",
      "Red LED indicator — lights up instantly on fuse blowout for quick fault detection",
      "Flame-retardant PVC housing — safe under fault and overload conditions",
      "High-conductivity copper contacts — stable current transmission, low heat generation",
      "Snap-on 35mm DIN rail mounting — tool-free installation",
      "Screw terminals — secure wiring connections",
      "IP20 finger-safe protection",
      "Compliant with IEC 60269 and GB 13539",
      "CE & RoHS certified",
      "Fuse links sold separately"
    ],
    "specs": [
      [
        "Product Type",
        "Fuse Holder"
      ],
      [
        "Model Number",
        "RT18-32X"
      ],
      [
        "Pole Configuration",
        "1P (Single Pole)"
      ],
      [
        "Rated Current",
        "32A"
      ],
      [
        "Rated Voltage",
        "500V–690V AC"
      ],
      [
        "Compatible Fuse Size",
        "10x38mm"
      ],
      [
        "Mounting Type",
        "35mm DIN Rail"
      ],
      [
        "Housing Material",
        "Flame-retardant PVC (V0 Rating)"
      ],
      [
        "Contact Material",
        "High-conductivity Copper"
      ],
      [
        "Indicator",
        "LED (lights up on fuse blowout)"
      ],
      [
        "Protection Degree",
        "IP20"
      ],
      [
        "Operating Temperature",
        "-25°C to +60°C"
      ],
      [
        "Standards Compliance",
        "IEC 60269, GB 13539"
      ],
      [
        "Application",
        "Single-phase control circuits, lighting distribution boards"
      ],
      [
        "Installation",
        "Snap-on DIN rail"
      ],
      [
        "Weight",
        "Approx. 80g"
      ],
      [
        "Certification",
        "CE, RoHS"
      ],
      [
        "Fuse Inclusion",
        "Fuse links NOT included — sold separately"
      ]
    ]
  },
  "RT18-32X-2P": {
    "description": "DC systems differ from AC in one critical way: both the positive and negative conductors carry fault current, which means single-pole fusing leaves a live conductor unprotected during a fault. The UPPROCURE RT18-32X 2P is designed specifically for two-wire DC circuits — protecting both lines simultaneously in a single compact module. It is widely used in photovoltaic string protection, battery bank feeds, DC power supplies, and DC control panels where safe isolation of both conductors is required. Constructed with flame-retardant PVC housing and high-purity copper contacts, it maintains low contact resistance and stable transmission under continuous DC load. Rated at 32A and 500V DC, it accepts standard 10x38mm fuse links. The built-in red LED indicator lights up the moment a fuse blows, pinpointing the fault without tools. A 35mm DIN rail snap-on design and screw terminals allow fast installation in solar inverter cabinets, energy storage enclosures, and DC distribution panels. Note: fuse links are sold separately.",
    "features": [
      "Double-pole design — simultaneous positive and negative conductor protection in DC circuits",
      "Rated 32A / 500V DC — purpose-built for two-wire direct current systems",
      "Compatible with standard 10x38mm fuse links",
      "Red LED indicator — instant visual fault detection on either pole",
      "Flame-retardant PVC housing — safe under DC arc fault conditions",
      "High-purity copper contacts — low resistance, stable DC transmission",
      "Snap-on 35mm DIN rail mounting — fast installation in PV and battery enclosures",
      "Screw terminal block — secure wiring for DC applications",
      "IP20 touch-safe protection",
      "Suitable for PV arrays, battery storage, and DC power supplies",
      "Compliant with IEC 60269 and GB 13539",
      "Fuse links sold separately"
    ],
    "specs": [
      [
        "Product Type",
        "DC Fuse Holder Base"
      ],
      [
        "Model Number",
        "RT18-32X"
      ],
      [
        "Pole Configuration",
        "2P (Double Pole)"
      ],
      [
        "Rated Current",
        "32A"
      ],
      [
        "Rated Voltage",
        "500V DC"
      ],
      [
        "Compatible Fuse Size",
        "10x38mm"
      ],
      [
        "Mounting Type",
        "35mm DIN Rail (TH35)"
      ],
      [
        "Housing Material",
        "Flame-retardant PVC (V0 Rating)"
      ],
      [
        "Contact Material",
        "High-purity Copper"
      ],
      [
        "Indicator Type",
        "LED Visual Indicator (Red)"
      ],
      [
        "Indicator Function",
        "Lights up when fuse blows"
      ],
      [
        "Connection Type",
        "Screw terminal block"
      ],
      [
        "Wire Capacity",
        "2.5mm² – 10mm²"
      ],
      [
        "Protection Degree",
        "IP20"
      ],
      [
        "Ambient Temperature",
        "-5°C to +40°C"
      ],
      [
        "Standards Compliance",
        "IEC 60269, GB 13539"
      ],
      [
        "Application",
        "PV Systems, Battery Storage, DC Power Supply"
      ],
      [
        "Certification",
        "CE, RoHS"
      ],
      [
        "Fuse Inclusion",
        "Fuse links NOT included — sold separately"
      ]
    ]
  },
  "RT18-32X-3P": {
    "description": "Three-phase motor starters, machinery control panels, and industrial distribution circuits require independent per-phase fuse protection — a blown fuse on one phase without isolation can leave the other two phases energizing a damaged motor. The UPPROCURE RT18-32X 3P addresses this directly: three independent fuse positions in one compact 35mm DIN rail module, each with its own red LED indicator, so maintenance teams can identify exactly which phase has tripped without a multimeter. Rated at 32A and 500V–690V AC, it accepts standard 10x38mm ceramic fuse links suited to smaller three-phase loads, control transformers, and auxiliary circuits in motor control centers. Flame-retardant PVC housing and high-conductivity copper contacts maintain stable performance under continuous load, and the tool-free DIN rail clip allows fast installation in any standard control cabinet. Note: fuse links are sold separately.",
    "features": [
      "Three-pole design — independent per-phase fuse protection for three-phase circuits",
      "Rated 32A / 500V–690V AC — suitable for smaller three-phase loads and control circuits",
      "Compatible with standard 10x38mm ceramic fuse links",
      "Individual LED indicator per phase — instantly identify which phase fuse has blown",
      "Flame-retardant PVC housing — safe under fault conditions",
      "High-conductivity copper contacts — stable three-phase current transmission",
      "Tool-free 35mm DIN rail clip mounting",
      "Compact modular structure — saves panel space in motor control centers",
      "IP20 finger-safe design",
      "Compliant with IEC 60269 and GB 13539",
      "CE & RoHS certified",
      "Fuse links sold separately"
    ],
    "specs": [
      [
        "Product Type",
        "Three-Phase Fuse Holder"
      ],
      [
        "Model Number",
        "RT18-32X"
      ],
      [
        "Pole Configuration",
        "3P (Three Pole)"
      ],
      [
        "Rated Current",
        "32A"
      ],
      [
        "Rated Voltage",
        "500V–690V AC"
      ],
      [
        "Compatible Fuse Size",
        "10x38mm"
      ],
      [
        "Mounting Type",
        "35mm DIN Rail"
      ],
      [
        "Housing Material",
        "Flame-retardant PVC (V0 Grade)"
      ],
      [
        "Contact Material",
        "High-Purity Copper"
      ],
      [
        "Indicator Type",
        "LED Fault Indicator (per phase)"
      ],
      [
        "Operating Temperature",
        "-25°C to +70°C"
      ],
      [
        "Protection Rating",
        "IP20 (Finger-Safe)"
      ],
      [
        "Standards Compliance",
        "IEC 60269, GB 13539"
      ],
      [
        "Application",
        "Three-Phase Motor Circuits, Industrial Control Panels"
      ],
      [
        "Installation",
        "Tool-Free DIN Rail Clip"
      ],
      [
        "Dimensions (per pole)",
        "18mm (W) x 78mm (H) x 65mm (D)"
      ],
      [
        "Weight",
        "Approx. 85g"
      ],
      [
        "Certification",
        "CE, RoHS"
      ],
      [
        "Fuse Inclusion",
        "Fuse links NOT included — sold separately"
      ]
    ]
  },
  "RT18-32X-4P": {
    "description": "In TN-S and TN-C-S wiring systems, complete circuit isolation requires fusing all three phase conductors and the neutral — leaving the neutral unfused creates a voltage shift hazard under unbalanced loads. The UPPROCURE RT18-32X 4P provides full 3P+N fuse protection in a single four-module housing, making it the correct choice for commercial lighting distribution panels, small HVAC control boards, and any four-wire installation where total disconnection is required by local wiring regulations or system design. Each of the four poles has an independent red LED indicator, so a faulty neutral fuse is just as easy to identify as a phase fault. Rated at 32A and 500V–690V AC, it accepts standard 10x38mm ceramic fuse links and installs tool-free on any 35mm DIN rail. Flame-retardant PVC housing and screw terminals ensure safe, vibration-resistant operation. Note: fuse links are sold separately.",
    "features": [
      "Four-pole 3P+N design — complete phase and neutral fuse protection in one module",
      "Rated 32A / 500V–690V AC — suitable for commercial distribution and 4-wire control systems",
      "Compatible with standard 10x38mm ceramic fuse links",
      "Individual LED indicator on each pole — including neutral fault detection",
      "Flame-retardant PVC housing — safe under fault conditions",
      "High-conductivity copper contacts — stable performance on all four poles",
      "Tool-free 35mm DIN rail mounting",
      "Compact 4-module structure — efficient use of panel space",
      "IP20 finger-safe design",
      "Compliant with IEC 60269 and GB 13539",
      "CE & RoHS certified",
      "Fuse links sold separately"
    ],
    "specs": [
      [
        "Product Type",
        "Four-Pole Fuse Holder"
      ],
      [
        "Model Number",
        "RT18-32X"
      ],
      [
        "Pole Configuration",
        "4P (Four Pole / 3P+N)"
      ],
      [
        "Rated Current",
        "32A"
      ],
      [
        "Rated Voltage",
        "500V–690V AC"
      ],
      [
        "Compatible Fuse Size",
        "10x38mm"
      ],
      [
        "Mounting Type",
        "35mm DIN Rail"
      ],
      [
        "Housing Material",
        "Flame-retardant PVC (V0 Grade)"
      ],
      [
        "Contact Material",
        "High-conductivity Copper"
      ],
      [
        "Indicator Type",
        "LED (per pole, including neutral)"
      ],
      [
        "Protection Level",
        "IP20 (Finger-safe)"
      ],
      [
        "Operating Temperature",
        "-5°C to +40°C"
      ],
      [
        "Standards Compliance",
        "IEC 60269, GB 13539"
      ],
      [
        "Application",
        "3P+N Systems, Commercial Distribution Boards, TN-S Installations"
      ],
      [
        "Installation",
        "Tool-free DIN rail clip"
      ],
      [
        "Certification",
        "CE, RoHS"
      ],
      [
        "Fuse Inclusion",
        "Fuse links NOT included — sold separately"
      ]
    ]
  },
  "RT18-63X-1P": {
    "description": "When a single-phase circuit carries heavy loads — main feeder taps, sub-distribution boards, large HVAC units, or high-power machine tools — a 32A fuse holder is not enough. The UPPROCURE RT18-63X 1P is rated at 63A and designed for 14x51mm cylindrical fuse links, making it the right choice for high-current single-phase applications that require robust overload and short-circuit protection. Its flame-retardant PVC housing and high-purity copper contacts ensure low contact resistance, minimal heat generation, and stable performance under continuous heavy load at up to 690V AC. The integrated red LED indicator lights up the moment the fuse blows, so maintenance staff can identify and clear the fault quickly without test equipment. A snap-on 35mm DIN rail design and screw terminals — rated for 4mm²–16mm² wire — allow straightforward installation in main distribution boards and industrial control cabinets. Note: fuse links are sold separately.",
    "features": [
      "Single-pole design for high-current single-phase circuit protection",
      "Rated 63A / 500V–690V AC — handles main circuits and heavy-duty equipment",
      "Compatible with standard 14x51mm cylindrical fuse links",
      "Red LED indicator — instant visual fuse-blow detection",
      "Flame-retardant PVC housing — safe under high-current fault conditions",
      "High-purity copper contacts — low resistance for stable heavy-load transmission",
      "Snap-on 35mm DIN rail mounting",
      "Screw terminals rated for 4mm²–16mm² wire",
      "IP20 finger-safe protection",
      "Compliant with IEC 60269 and GB 13539",
      "CE & RoHS certified",
      "Fuse links sold separately"
    ],
    "specs": [
      [
        "Product Type",
        "High-Current Fuse Holder"
      ],
      [
        "Model Number",
        "RT18-63X"
      ],
      [
        "Pole Configuration",
        "1P (Single Pole)"
      ],
      [
        "Rated Current",
        "63A"
      ],
      [
        "Rated Voltage",
        "500V–690V AC"
      ],
      [
        "Compatible Fuse Size",
        "14x51mm"
      ],
      [
        "Mounting Type",
        "35mm DIN Rail"
      ],
      [
        "Housing Material",
        "Flame-retardant PVC (V0 Rating)"
      ],
      [
        "Contact Material",
        "High-Purity Copper"
      ],
      [
        "Indicator Type",
        "LED Visual Indicator (Red)"
      ],
      [
        "Indicator Function",
        "Illuminates on fuse blowout"
      ],
      [
        "Connection Type",
        "Screw terminals"
      ],
      [
        "Wire Capacity",
        "4mm² – 16mm²"
      ],
      [
        "Protection Degree",
        "IP20"
      ],
      [
        "Operating Temperature",
        "-25°C to +70°C"
      ],
      [
        "Standards Compliance",
        "IEC 60269, GB 13539"
      ],
      [
        "Application",
        "Main circuits, sub-distribution boards, high-power equipment"
      ],
      [
        "Installation",
        "Snap-on DIN rail mounting"
      ],
      [
        "Weight",
        "Approx. 95g"
      ],
      [
        "Certification",
        "CE, RoHS"
      ],
      [
        "Fuse Inclusion",
        "Fuse links NOT included — sold separately"
      ]
    ]
  },
  "RT18-63X-2P": {
    "description": "Large-scale photovoltaic arrays, high-capacity battery storage banks, and heavy-duty dual-line industrial circuits demand a fuse holder that can carry 63A continuously while protecting both conductors simultaneously. The UPPROCURE RT18-63X 2P delivers exactly that: two independent 63A fuse positions in one compact module, rated at 690V AC or 500V DC, accommodating 14x51mm cylindrical fuse links. Compared to the RT18-32X 2P, the larger 14x51mm fuse format allows selection of higher-breaking-capacity fuse elements suited to the elevated fault currents found in large PV string combiners and battery inverter feeds. The reinforced flame-retardant PVC housing handles the thermal demands of high sustained currents, while high-conductivity copper contacts with optional tin plating minimize oxidation and contact resistance over time. A red LED status indicator on each pole gives immediate visual fault confirmation. Snap-on 35mm DIN rail mounting and 4mm²–16mm² screw clamp terminals support both quick installation and robust cable connections. Note: fuse links are sold separately.",
    "features": [
      "Double-pole design — simultaneous high-current protection on both conductors",
      "Rated 63A / 690V AC or 500V DC — suited for large PV arrays and battery storage",
      "Compatible with standard 14x51mm cylindrical fuse links",
      "LED indicator per pole — instant fault detection on either conductor",
      "Reinforced flame-retardant PVC housing — handles high sustained current loads",
      "High-conductivity copper contacts — low oxidation, stable long-term DC performance",
      "Snap-on 35mm DIN rail mounting",
      "Screw clamp terminals for 4mm²–16mm² cables",
      "IP20 touch-safe protection",
      "Suitable for large PV arrays, battery inverter feeds, dual-line AC/DC circuits",
      "Compliant with IEC 60269 and GB/T 13539",
      "Fuse links sold separately"
    ],
    "specs": [
      [
        "Product Type",
        "High-Current Fuse Holder Base"
      ],
      [
        "Model Number",
        "RT18-63X"
      ],
      [
        "Pole Configuration",
        "2P (Double Pole)"
      ],
      [
        "Rated Current",
        "63A"
      ],
      [
        "Rated Voltage",
        "690V AC / 500V DC"
      ],
      [
        "Compatible Fuse Size",
        "14x51mm"
      ],
      [
        "Mounting Type",
        "35mm DIN Rail (Top-hat)"
      ],
      [
        "Housing Material",
        "Flame-retardant PVC (UL94 V-0)"
      ],
      [
        "Contact Material",
        "High-conductivity Copper (Tin-plated optional)"
      ],
      [
        "Indicator Type",
        "LED Status Light (Red, per pole)"
      ],
      [
        "Indicator Logic",
        "Lights up upon fuse failure"
      ],
      [
        "Connection Method",
        "Screw clamp terminals"
      ],
      [
        "Suitable Wire Size",
        "4mm² – 16mm² (AWG 12-6)"
      ],
      [
        "Protection Class",
        "IP20 (Touch-safe)"
      ],
      [
        "Operating Temperature",
        "-25°C to +60°C"
      ],
      [
        "Standards Compliance",
        "IEC 60269, GB/T 13539"
      ],
      [
        "Application",
        "Large PV Arrays, Battery Storage, Heavy-Duty Dual-Line Circuits"
      ],
      [
        "Installation",
        "Snap-on mounting"
      ],
      [
        "Weight",
        "Approx. 160g"
      ],
      [
        "Certification",
        "CE, RoHS"
      ],
      [
        "Fuse Inclusion",
        "Fuse links NOT included — sold separately"
      ]
    ]
  },
  "RT18-63X-3P": {
    "description": "Large industrial motors, air compressors, pump stations, and heavy three-phase machinery draw sustained currents that exceed the capacity of 32A fuse holders. The UPPROCURE RT18-63X 3P is rated at 63A per phase and accepts 14x51mm cylindrical fuse links — the correct fuse format for high-breaking-capacity elements that can safely interrupt the large fault currents generated by big inductive loads. Three independent fuse positions, each with its own red LED indicator, allow maintenance engineers to identify a faulted phase instantly and replace only the blown fuse, minimizing downtime on production equipment. The compact 35mm DIN rail design fits standard motor control center (MCC) panels and industrial distribution boards without requiring a dedicated enclosure. Flame-retardant PVC housing and screw-terminal wiring rated for up to 16mm² cables handle the wiring demands of high-current three-phase circuits. Note: fuse links are sold separately.",
    "features": [
      "Three-pole design — independent high-current protection per phase",
      "Rated 63A / 500V–690V AC — designed for large motors, compressors, and heavy machinery",
      "Compatible with standard 14x51mm cylindrical fuse links",
      "Individual red LED indicator per phase — fast phase-fault identification",
      "Flame-retardant PVC housing — safe under high-current fault conditions",
      "High-conductivity copper contacts — stable performance under heavy three-phase loads",
      "Tool-free 35mm DIN rail clip mounting",
      "Screw-terminal wiring for up to 16mm² cables",
      "IP20 finger-safe design",
      "Compliant with IEC 60269 and GB 13539",
      "CE & RoHS certified",
      "Fuse links sold separately"
    ],
    "specs": [
      [
        "Product Type",
        "Three-Phase High-Current Fuse Holder"
      ],
      [
        "Model Number",
        "RT18-63X"
      ],
      [
        "Pole Configuration",
        "3P (Three Pole)"
      ],
      [
        "Rated Current",
        "63A"
      ],
      [
        "Rated Voltage",
        "500V–690V AC"
      ],
      [
        "Compatible Fuse Size",
        "14x51mm"
      ],
      [
        "Mounting Type",
        "35mm DIN Rail"
      ],
      [
        "Housing Material",
        "Flame-retardant PVC (V0 Grade)"
      ],
      [
        "Contact Material",
        "High-Purity Copper"
      ],
      [
        "Indicator Type",
        "LED Fault Indicator (Red, per phase)"
      ],
      [
        "Operating Temperature",
        "-25°C to +70°C"
      ],
      [
        "Protection Rating",
        "IP20 (Finger-Safe)"
      ],
      [
        "Standards Compliance",
        "IEC 60269, GB 13539"
      ],
      [
        "Application",
        "Large Industrial Motors, Compressors, Heavy Three-Phase Machinery"
      ],
      [
        "Installation",
        "Tool-Free DIN Rail Clip"
      ],
      [
        "Dimensions (Total Width)",
        "Approx. 54mm (3 modules x 18mm)"
      ],
      [
        "Weight",
        "Approx. 240g"
      ],
      [
        "Certification",
        "CE, RoHS"
      ],
      [
        "Fuse Inclusion",
        "Fuse links NOT included — sold separately"
      ]
    ]
  },
  "RT18-63X-4P": {
    "description": "Large commercial buildings, data centers, industrial HVAC systems, and high-power 4-wire distribution panels require complete fuse protection across all three phases and the neutral simultaneously — and at currents that exceed the capacity of standard 32A holders. The UPPROCURE RT18-63X 4P meets this requirement: four independent 63A fuse positions in a single compact housing, rated at 690V AC and accepting 14x51mm high-breaking-capacity cylindrical fuse links. Unlike the RT18-32X 4P, the 63A rating and larger 14x51mm fuse format are suited to main feeder protection, large HVAC main circuits, and heavy industrial four-wire loads where fault currents can be substantial. Each pole has its own red LED indicator, so even a neutral fuse failure is immediately visible without any test equipment. A tool-free 35mm DIN rail design, screw clamp terminals for cables up to 16mm², and IP20 finger-safe protection complete a solution engineered for demanding large-scale electrical installations. Note: fuse links are sold separately.",
    "features": [
      "Four-pole 3P+N design — complete high-current protection across all phases and neutral",
      "Rated 63A / 500V–690V AC — suited for large commercial and industrial 4-wire systems",
      "Compatible with standard 14x51mm high-breaking-capacity cylindrical fuse links",
      "Individual red LED indicator per pole — detects phase and neutral fuse failures",
      "Flame-retardant PVC housing — handles high sustained current loads safely",
      "High-conductivity copper contacts — stable performance on all four poles",
      "Tool-free 35mm DIN rail mounting",
      "Screw clamp terminals for cables up to 16mm²",
      "IP20 finger-safe protection",
      "Ideal for data centers, large HVAC, and industrial 4-wire distribution",
      "Compliant with IEC 60269 and GB 13539",
      "Fuse links sold separately"
    ],
    "specs": [
      [
        "Product Type",
        "Four-Pole High-Current Fuse Holder"
      ],
      [
        "Model Number",
        "RT18-63X"
      ],
      [
        "Pole Configuration",
        "4P (Four Pole / 3P+N)"
      ],
      [
        "Rated Current",
        "63A"
      ],
      [
        "Rated Voltage",
        "500V–690V AC"
      ],
      [
        "Compatible Fuse Size",
        "14x51mm"
      ],
      [
        "Mounting Type",
        "35mm DIN Rail"
      ],
      [
        "Housing Material",
        "Flame-retardant PVC (V0 Grade)"
      ],
      [
        "Contact Material",
        "High-Purity Copper"
      ],
      [
        "Indicator Type",
        "LED (Red, per pole)"
      ],
      [
        "Protection Level",
        "IP20 (Finger-safe)"
      ],
      [
        "Operating Temperature",
        "-25°C to +70°C"
      ],
      [
        "Standards Compliance",
        "IEC 60269, GB 13539"
      ],
      [
        "Application",
        "Large Commercial Buildings, Data Centers, Industrial 4-Wire Distribution"
      ],
      [
        "Installation",
        "Tool-free DIN Rail Clip"
      ],
      [
        "Dimensions (Total Width)",
        "Approx. 72mm (4 modules x 18mm)"
      ],
      [
        "Weight",
        "Approx. 300g"
      ],
      [
        "Certification",
        "CE, RoHS"
      ],
      [
        "Fuse Inclusion",
        "Fuse links NOT included — sold separately"
      ]
    ]
  },
  "RT18-125AM-1P": {
    "description": "When a single-phase circuit needs reliable cylindrical fuse protection without consuming extra rail space, the UPPROCURE RT18-125AM 1P is the go-to choice. At just 35mm wide (one DIN rail module), it is the most space-efficient configuration in the RT18-125AM series — fitting tight control cabinets where every millimeter counts. Typical applications include single-phase lighting distribution boards, individual machine tool circuits, HVAC compressor feeds and any installation where per-circuit fuse isolation on a single live conductor is required. The flame-retardant, high-temperature resistant housing pairs with thickened copper conductors (conductivity >98%) to keep contact resistance below 5mΩ and current transmission efficiency above 99.5%. Rated 125A / 690V, it accepts standard Φ22×58mm cylindrical fuse links (63A / 80A / 100A / 125A, sold separately) and clips onto any 35mm DIN rail in seconds. A yellow fuse status window enables visual fault checks at a glance, and oversized wiring terminals with premium screws lock down vibration-resistant connections. Every unit is 100% electrically tested before leaving our ISO 9001 certified facility. Note: fuse links are NOT included.",
    "features": [
      "Rated 125A / 690V — handles demanding single-phase industrial loads",
      "Fits standard Φ22×58mm cylindrical fuse links — globally sourced spares",
      "Thickened copper conductors, conductivity >98% — efficient power transmission",
      "Contact resistance <5mΩ, current transmission efficiency >99.5% — minimal heat loss",
      "Yellow fuse status indicator window — instant visual fault diagnosis",
      "35mm DIN rail clip mounting — fast deployment in any control cabinet",
      "Flame-retardant, high-temperature resistant insulated housing — safe under fault conditions",
      "Oversized wiring terminals + premium screws — secure, vibration-resistant connections",
      "CE & RoHS certified — accepted in EU, UK, and global markets",
      "OEM / ODM customization available — logo, label, packaging",
      "15-year ISO 9001 certified factory, 200+ projects delivered in 10+ countries"
    ],
    "specs": [
      [
        "Product Model",
        "RT18-125AM"
      ],
      [
        "Pole Configuration",
        "1P (Single Pole)"
      ],
      [
        "Rated Current",
        "125A"
      ],
      [
        "Rated Voltage",
        "690V"
      ],
      [
        "Compatible Fuse Size",
        "Φ22×58mm"
      ],
      [
        "Optional Fuse Ratings",
        "63A / 80A / 100A / 125A (sold separately)"
      ],
      [
        "Fuse Inclusion",
        "Fuse link NOT included — purchased separately"
      ],
      [
        "Housing Material",
        "High Flame-Retardant & High-Temperature Resistant Insulated Material"
      ],
      [
        "Conductor Material",
        "Thickened Copper"
      ],
      [
        "Conductivity",
        ">98%"
      ],
      [
        "Contact Resistance",
        "<5mΩ"
      ],
      [
        "Current Transmission Efficiency",
        ">99.5%"
      ],
      [
        "Mounting Method",
        "35mm Standard DIN Rail"
      ],
      [
        "Product Dimensions",
        "35mm (W) × 127mm (H) × 76mm (D)"
      ],
      [
        "Fuse Indication",
        "Yellow Status Indicator Window"
      ],
      [
        "Wiring Design",
        "Large Wiring Terminals + High-Quality Screws"
      ],
      [
        "Safety Features",
        "Flame Retardant, High-Temperature Resistant, Safe Insulation"
      ],
      [
        "Application",
        "Industrial Control Cabinets, Distribution Boxes, Switchgear"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "RT18-125AM-2P": {
    "description": "Certain installations demand more than single-pole fuse protection — TT earthing systems, bathroom circuits, outdoor distribution boards and any project governed by IEC 60364 or BS 7671 all require double-pole disconnection on the live and neutral conductors simultaneously. The UPPROCURE RT18-125AM 2P is built precisely for these applications. By fusing both line and neutral in a single 70mm-wide (2-module) housing, it satisfies the regulatory requirement for complete single-phase isolation without additional switching components. The flame-retardant housing integrates thickened copper conductors (conductivity >98%), keeping contact resistance below 5mΩ and transmission efficiency above 99.5%. Rated 125A / 690V, it takes standard Φ22×58mm cylindrical fuse links (63A / 80A / 100A / 125A, sold separately) and snaps onto any 35mm DIN rail. A yellow indicator window on each pole gives independent per-conductor status at a glance, while oversized terminals and premium screws ensure vibration-proof connections in demanding environments. Every unit passes 100% electrical testing at our ISO 9001 certified facility before shipment. Note: fuse links are NOT included.",
    "features": [
      "Dual-pole design — simultaneous line + neutral fuse protection in one unit",
      "Complies with IEC 60364 / BS 7671 double-pole protection requirements",
      "Rated 125A / 690V — handles demanding single-phase industrial loads",
      "Fits standard Φ22×58mm cylindrical fuse links — globally sourced spares",
      "Thickened copper conductors, conductivity >98% — efficient power transmission",
      "Contact resistance <5mΩ, current transmission efficiency >99.5% — minimal heat loss",
      "Yellow fuse status indicator window on each pole — instant visual fault diagnosis",
      "2-module 70mm wide, 35mm DIN rail clip mounting — fast deployment",
      "Flame-retardant, high-temperature resistant insulated housing — safe under fault conditions",
      "Oversized wiring terminals + premium screws — secure, vibration-resistant connections",
      "CE & RoHS certified — accepted in EU, UK, and global markets",
      "OEM / ODM customization available — logo, label, packaging",
      "15-year ISO 9001 certified factory, 200+ projects delivered in 10+ countries"
    ],
    "specs": [
      [
        "Product Model",
        "RT18-125AM"
      ],
      [
        "Pole Configuration",
        "2P (Double Pole)"
      ],
      [
        "Rated Current",
        "125A"
      ],
      [
        "Rated Voltage",
        "690V"
      ],
      [
        "Compatible Fuse Size",
        "Φ22×58mm"
      ],
      [
        "Optional Fuse Ratings",
        "63A / 80A / 100A / 125A (sold separately)"
      ],
      [
        "Fuse Inclusion",
        "Fuse link NOT included — purchased separately"
      ],
      [
        "Housing Material",
        "High Flame-Retardant & High-Temperature Resistant Insulated Material"
      ],
      [
        "Conductor Material",
        "Thickened Copper"
      ],
      [
        "Conductivity",
        ">98%"
      ],
      [
        "Contact Resistance",
        "<5mΩ"
      ],
      [
        "Current Transmission Efficiency",
        ">99.5%"
      ],
      [
        "Mounting Method",
        "35mm Standard DIN Rail"
      ],
      [
        "Product Dimensions",
        "70mm (W) × 127mm (H) × 76mm (D)"
      ],
      [
        "Fuse Indication",
        "Yellow Status Indicator Window (per pole)"
      ],
      [
        "Wiring Design",
        "Large Wiring Terminals + High-Quality Screws"
      ],
      [
        "Safety Features",
        "Flame Retardant, High-Temperature Resistant, Safe Insulation"
      ],
      [
        "Application",
        "TT Earthing Systems, Outdoor Circuits, Bathroom Installations, Double-Pole Compliance Boards"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "RT18-125AM-3P": {
    "description": "Three-phase motor starters, industrial machinery feeds and manufacturing plant distribution boards all share a common requirement: per-phase fuse protection that lets maintenance teams pinpoint a blown fuse on one phase without shutting down the entire system. The UPPROCURE RT18-125AM 3P is engineered for exactly this workflow. Three independent fuse positions — each with its own yellow status indicator window — let operators identify a fault phase in seconds, minimizing downtime on production lines and motor control centers. The 105mm-wide (3-module) housing fits standard 35mm DIN rails and accommodates Φ22×58mm cylindrical fuse links at 125A / 690V (fuse links sold separately: 63A / 80A / 100A / 125A). Thickened copper conductors (conductivity >98%) and sub-5mΩ contact resistance maintain over 99.5% transmission efficiency even at sustained high currents typical of motor loads. Flame-retardant housing and large wiring terminals with premium screws complete the assembly for safe, vibration-resistant operation in harsh industrial environments. Every unit is 100% electrically tested in our ISO 9001 certified facility. Note: fuse links are NOT included.",
    "features": [
      "Three-pole design — independent fuse protection for each phase in one unit",
      "Rated 125A / 690V — handles demanding three-phase industrial loads",
      "Fits standard Φ22×58mm cylindrical fuse links — globally sourced spares",
      "Thickened copper conductors, conductivity >98% — efficient power transmission",
      "Contact resistance <5mΩ, current transmission efficiency >99.5% — minimal heat loss",
      "Individual yellow fuse status indicator window per phase — instant per-phase fault diagnosis",
      "3-module 105mm wide, 35mm DIN rail clip mounting — fast deployment",
      "Flame-retardant, high-temperature resistant insulated housing — safe under fault conditions",
      "Large wiring terminals + premium screws — secure, vibration-resistant connections",
      "CE & RoHS certified — accepted in EU, UK, and global markets",
      "OEM / ODM customization available — logo, label, packaging",
      "15-year ISO 9001 certified factory, 200+ projects delivered in 10+ countries"
    ],
    "specs": [
      [
        "Product Model",
        "RT18-125AM"
      ],
      [
        "Pole Configuration",
        "3P (Three Pole)"
      ],
      [
        "Rated Current",
        "125A"
      ],
      [
        "Rated Voltage",
        "690V"
      ],
      [
        "Compatible Fuse Size",
        "Φ22×58mm"
      ],
      [
        "Optional Fuse Ratings",
        "63A / 80A / 100A / 125A (sold separately)"
      ],
      [
        "Fuse Inclusion",
        "Fuse links NOT included — purchased separately"
      ],
      [
        "Housing Material",
        "High Flame-Retardant & High-Temperature Resistant Insulated Material"
      ],
      [
        "Conductor Material",
        "Thickened Copper"
      ],
      [
        "Conductivity",
        ">98%"
      ],
      [
        "Contact Resistance",
        "<5mΩ"
      ],
      [
        "Current Transmission Efficiency",
        ">99.5%"
      ],
      [
        "Mounting Method",
        "35mm Standard DIN Rail"
      ],
      [
        "Product Dimensions",
        "105mm (W) × 127mm (H) × 76mm (D)"
      ],
      [
        "Fuse Indication",
        "Yellow Status Indicator Window (per phase)"
      ],
      [
        "Wiring Design",
        "Large Wiring Terminals + High-Quality Screws"
      ],
      [
        "Safety Features",
        "Flame Retardant, High-Temperature Resistant, Safe Insulation"
      ],
      [
        "Application",
        "Three-Phase Industrial Circuits, Motor Protection, Distribution Boxes"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "RT18-125AM-4P": {
    "description": "In TN-S and TN-C-S distribution systems, complete isolation means disconnecting all three phase conductors and the neutral — leaving any one unfused creates a hazard when the neutral shifts under unbalanced load. The UPPROCURE RT18-125AM 4P solves this with four independent fuse positions in one 140mm-wide (4-module) housing, providing full 3P+N fuse protection in a single DIN rail component. Typical applications include large HVAC system feeds, motor control centers serving unbalanced loads, main distribution boards in commercial buildings and any switchgear where full four-wire fuse isolation is required by the system design or local wiring regulations. Four yellow indicator windows — one per pole — allow maintenance teams to identify a faulty phase or neutral fuse without probing live conductors. Thickened copper conductors (conductivity >98%) hold contact resistance below 5mΩ and transmission efficiency above 99.5% across all four poles simultaneously. Rated 125A / 690V, it accepts Φ22×58mm cylindrical fuse links (63A / 80A / 100A / 125A, sold separately). Large wiring terminals and premium screws provide secure, vibration-resistant connections. Every unit is 100% electrically tested at our ISO 9001 certified facility before shipment. Note: fuse links are NOT included.",
    "features": [
      "Four-pole 3P+N design — independent fuse protection for three phases and neutral in one unit",
      "Rated 125A / 690V — handles demanding three-phase four-wire industrial loads",
      "Fits standard Φ22×58mm cylindrical fuse links — globally sourced spares",
      "Thickened copper conductors, conductivity >98% — efficient power transmission",
      "Contact resistance <5mΩ, current transmission efficiency >99.5% — minimal heat loss",
      "Four independent yellow fuse status indicator windows — instant per-pole fault diagnosis",
      "4-module 140mm wide, 35mm DIN rail clip mounting — fast deployment",
      "Flame-retardant, high-temperature resistant insulated housing — safe under fault conditions",
      "Large wiring terminals + premium screws — secure, vibration-resistant connections",
      "CE & RoHS certified — accepted in EU, UK, and global markets",
      "OEM / ODM customization available — logo, label, packaging",
      "15-year ISO 9001 certified factory, 200+ projects delivered in 10+ countries"
    ],
    "specs": [
      [
        "Product Model",
        "RT18-125AM"
      ],
      [
        "Pole Configuration",
        "4P (Four Pole / 3P+N)"
      ],
      [
        "Rated Current",
        "125A"
      ],
      [
        "Rated Voltage",
        "690V"
      ],
      [
        "Compatible Fuse Size",
        "Φ22×58mm"
      ],
      [
        "Optional Fuse Ratings",
        "63A / 80A / 100A / 125A (sold separately)"
      ],
      [
        "Fuse Inclusion",
        "Fuse links NOT included — purchased separately"
      ],
      [
        "Housing Material",
        "High Flame-Retardant & High-Temperature Resistant Insulated Material"
      ],
      [
        "Conductor Material",
        "Thickened Copper"
      ],
      [
        "Conductivity",
        ">98%"
      ],
      [
        "Contact Resistance",
        "<5mΩ"
      ],
      [
        "Current Transmission Efficiency",
        ">99.5%"
      ],
      [
        "Mounting Method",
        "35mm Standard DIN Rail"
      ],
      [
        "Product Dimensions",
        "140mm (W) × 127mm (H) × 76mm (D)"
      ],
      [
        "Fuse Indication",
        "Yellow Status Indicator Window (per pole, 4 positions)"
      ],
      [
        "Wiring Design",
        "Large Wiring Terminals + High-Quality Screws"
      ],
      [
        "Safety Features",
        "Flame Retardant, High-Temperature Resistant, Safe Insulation"
      ],
      [
        "Application",
        "Three-Phase Four-Wire Systems, Industrial Control Cabinets, Distribution Boxes"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "PN2-VA2": {
    "description": "The UPPROCURE PN2-VA2 is a self-resetting over/under voltage and over-current protector designed for homes, light commercial premises, and distribution boards where continuous protection without manual intervention is essential. When the supply voltage exceeds the user-set over-voltage or under-voltage threshold — or when current surpasses the over-current trip point — the PN2-VA2 disconnects the circuit within 0.5 seconds to prevent damage to appliances and sensitive electronics. Once the supply returns to a stable, safe range, the device automatically restores power after an adjustable reset delay (0–999 seconds, default 60s), eliminating the need for a manual reset call-out. The high-resolution dual-screen digital display shows real-time voltage in red and current in green simultaneously, giving installers and users immediate circuit health information at a glance. All trip thresholds are user-configurable via the front panel: over-voltage from 130V to 300V AC, under-voltage from 80V to 210V AC. A password lock function prevents unauthorized changes to these settings — important in shared or rental properties. Additional features include an energy-saving mode to reduce self-consumption and full support for OEM logo customization. Available in 40A, 63A, and 80A variants; rated supply voltage AC 220V (AC 110V customizable).",
    "features": [
      "Self-resetting — automatically restores power after fault clears, no manual reset required",
      "Dual digital display — real-time voltage (red) and current (green) on separate screens",
      "User-configurable trip points — over-voltage 130–300V, under-voltage 80–210V AC",
      "Over-current protection — adjustable current trip threshold",
      "Fast 0.5-second disconnect on fault detection",
      "Adjustable reset delay 0–999 seconds (default 60s) — prevents rapid cycling",
      "Password lock — prevents unauthorized parameter changes",
      "Energy-saving mode — reduces device self-consumption",
      "Available in 40A / 63A / 80A current ratings",
      "Rated supply voltage AC 220V (AC 110V customizable)",
      "35mm DIN rail mounting — standard distribution board installation",
      "Flame-retardant PC housing (UL94 V-0) — safe under fault conditions",
      "Mechanical life ≥10,000 cycles",
      "OEM logo customization supported",
      "CE & RoHS certified"
    ],
    "specs": [
      [
        "Product Type",
        "Self-Resetting Over/Under Voltage Protector"
      ],
      [
        "Model",
        "PN2-VA2"
      ],
      [
        "Rated Supply Voltage",
        "AC 220V (AC 110V Customizable)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60 / 70Hz"
      ],
      [
        "Over-Voltage Setting Range",
        "AC 130–300V"
      ],
      [
        "Under-Voltage Setting Range",
        "AC 80–210V"
      ],
      [
        "Over-Voltage Trip Delay",
        "0.5 Seconds"
      ],
      [
        "Voltage Accuracy",
        "<1%"
      ],
      [
        "Max. Working Current",
        "40A / 63A / 80A (Optional)"
      ],
      [
        "Reset Delay Time",
        "0–999 Seconds (Adjustable, Default 60s)"
      ],
      [
        "Display Mode",
        "Dual Digital Display — Voltage (Red) + Current (Green)"
      ],
      [
        "Password Protection",
        "Supported — prevents unauthorized parameter changes"
      ],
      [
        "Energy-Saving Mode",
        "Switchable"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0)"
      ],
      [
        "Dimensions",
        "81 × 36 × 66mm"
      ],
      [
        "Installation",
        "35mm DIN Rail"
      ],
      [
        "Ambient Temperature",
        "-25°C to +55°C"
      ],
      [
        "Permitted Relative Humidity",
        "≤50% at 40°C (Non-condensing)"
      ],
      [
        "Mechanical Life",
        "≥10,000 Cycles"
      ],
      [
        "Protection Functions",
        "Over-voltage, Under-voltage, Over-current, Delay Protection"
      ],
      [
        "OEM Customization",
        "Logo customization supported"
      ],
      [
        "Application",
        "Residential Distribution Boards, Light Commercial Premises, Home Appliance Protection"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "PN2-VA3": {
    "description": "Electrical contractors working on commercial distribution boards, office fit-outs, and retail unit power installations need protection devices that are easy to inspect and commission on-site. The UPPROCURE PN2-VA3 is built with professional installers in mind — its dual digital display uses white voltage digits and green current digits, a combination that delivers noticeably sharper contrast under the bright fluorescent lighting found in commercial electrical rooms, switchgear enclosures, and panel inspection environments. Where the PN2-VA2 is specified for residential and home use, the PN2-VA3 is the preferred choice for commercial electrical contractors supplying office buildings and retail chains, panel builders working to professional installation standards, and export projects where CE and RoHS certification is a procurement requirement. The protection platform is fully configurable: over-voltage threshold (130–300V AC), under-voltage threshold (80–210V AC), and over-current trip are all set via the front panel, with 0.5-second automatic disconnect on fault and automatic power restoration once the supply stabilizes. Reset delay is adjustable from 0 to 999 seconds (default 60s) to prevent nuisance tripping in commercial circuits. A password lock prevents unauthorized changes in multi-tenant commercial premises. Available in 40A, 63A, and 80A variants; AC 110V customizable for international export markets. 35mm DIN rail mounting. CE and RoHS certified.",
    "features": [
      "White + green dual digital display — sharper digit contrast in bright commercial enclosures and fluorescent-lit switchrooms",
      "Self-resetting — automatically restores power after fault clears, no manual reset required",
      "User-configurable trip points — over-voltage 130–300V, under-voltage 80–210V AC",
      "Over-current protection — adjustable current trip threshold",
      "Fast 0.5-second disconnect on fault detection",
      "Adjustable reset delay 0–999 seconds (default 60s) — prevents nuisance tripping in commercial circuits",
      "Password lock — prevents unauthorized changes in multi-tenant commercial premises",
      "Energy-saving mode — reduces device self-consumption",
      "Available in 40A / 63A / 80A current ratings",
      "Rated supply voltage AC 220V (AC 110V customizable for international export)",
      "35mm DIN rail mounting — standard commercial distribution board installation",
      "Flame-retardant PC housing (UL94 V-0)",
      "Mechanical life ≥10,000 cycles",
      "CE & RoHS certified — accepted for EU, UK, and international export projects"
    ],
    "specs": [
      [
        "Product Type",
        "Self-Resetting Over/Under Voltage Protector"
      ],
      [
        "Model",
        "PN2-VA3"
      ],
      [
        "Rated Supply Voltage",
        "AC 220V (AC 110V Customizable)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60 / 70Hz"
      ],
      [
        "Over-Voltage Setting Range",
        "AC 130–300V"
      ],
      [
        "Under-Voltage Setting Range",
        "AC 80–210V"
      ],
      [
        "Over-Voltage Trip Delay",
        "0.5 Seconds"
      ],
      [
        "Voltage Accuracy",
        "<1%"
      ],
      [
        "Max. Working Current",
        "40A / 63A / 80A (Optional)"
      ],
      [
        "Reset Delay Time",
        "0–999 Seconds (Adjustable, Default 60s)"
      ],
      [
        "Display Mode",
        "Dual Digital Display — Voltage (White) + Current (Green)"
      ],
      [
        "Password Protection",
        "Supported — prevents unauthorized parameter changes"
      ],
      [
        "Energy-Saving Mode",
        "Switchable"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0)"
      ],
      [
        "Dimensions",
        "81 × 36 × 66mm"
      ],
      [
        "Installation",
        "35mm DIN Rail"
      ],
      [
        "Ambient Temperature",
        "-25°C to +55°C"
      ],
      [
        "Permitted Relative Humidity",
        "≤50% at 40°C (Non-condensing)"
      ],
      [
        "Mechanical Life",
        "≥10,000 Cycles"
      ],
      [
        "Protection Functions",
        "Over-voltage, Under-voltage, Over-current, Delay Protection"
      ],
      [
        "Application",
        "Commercial Electrical Installations, Contractor Panel Builds, Office Buildings, Export Projects"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "PN2-VA4": {
    "description": "The UPPROCURE PN2-VA4 is a self-resetting over/under voltage and over-current protector designed for electrical distributors, panel builders, and OEM customers who require a branded protection device at competitive wholesale quantities. It delivers the same automatic protection performance as the PN2-VA2 — 0.5-second fault disconnect, auto-restore after supply stabilization, and fully configurable trip thresholds — but is specifically offered with factory-level OEM logo customization on the housing and packaging, making it suitable for private-label electrical brands and distributor own-brand programs. The high-resolution dual digital display shows real-time voltage in red and current in green for clear circuit health monitoring. All protection parameters — over-voltage (130–300V AC), under-voltage (80–210V AC), over-current, and reset delay (0–999s, default 60s) — are user-configurable via the front panel, with password lock to prevent unauthorized field changes. Available in 40A, 63A, and 80A variants on a standard 35mm DIN rail footprint. AC 110V customization also available for export markets. Contact us for MOQ, branding specifications, and sample requests.",
    "features": [
      "OEM logo customization — factory branding on housing and packaging for private-label programs",
      "Self-resetting — auto-disconnects on fault, auto-restores when supply stabilizes",
      "Dual digital display — real-time voltage (red) + current (green)",
      "User-configurable trip points — over-voltage 130–300V, under-voltage 80–210V AC",
      "Over-current protection with adjustable trip threshold",
      "Fast 0.5-second disconnect on fault detection",
      "Adjustable reset delay 0–999 seconds (default 60s)",
      "Password lock — prevents unauthorized parameter changes in the field",
      "Energy-saving mode — reduces standby self-consumption",
      "Available in 40A / 63A / 80A current ratings",
      "Rated supply voltage AC 220V (AC 110V customizable for export)",
      "35mm DIN rail mounting",
      "Flame-retardant PC housing (UL94 V-0)",
      "Mechanical life ≥10,000 cycles",
      "CE & RoHS certified — accepted in EU, UK, and global markets"
    ],
    "specs": [
      [
        "Product Type",
        "Self-Resetting Over/Under Voltage Protector"
      ],
      [
        "Model",
        "PN2-VA4"
      ],
      [
        "Rated Supply Voltage",
        "AC 220V (AC 110V Customizable)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60 / 70Hz"
      ],
      [
        "Over-Voltage Setting Range",
        "AC 130–300V"
      ],
      [
        "Under-Voltage Setting Range",
        "AC 80–210V"
      ],
      [
        "Over-Voltage Trip Delay",
        "0.5 Seconds"
      ],
      [
        "Voltage Accuracy",
        "<1%"
      ],
      [
        "Max. Working Current",
        "40A / 63A / 80A (Optional)"
      ],
      [
        "Reset Delay Time",
        "0–999 Seconds (Adjustable, Default 60s)"
      ],
      [
        "Display Mode",
        "Dual Digital Display — Voltage (Red) + Current (Green)"
      ],
      [
        "Password Protection",
        "Supported — prevents unauthorized parameter changes"
      ],
      [
        "Energy-Saving Mode",
        "Switchable"
      ],
      [
        "OEM Customization",
        "Logo customization on housing and packaging supported"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0)"
      ],
      [
        "Dimensions",
        "81 × 36 × 66mm"
      ],
      [
        "Installation",
        "35mm DIN Rail"
      ],
      [
        "Ambient Temperature",
        "-25°C to +55°C"
      ],
      [
        "Permitted Relative Humidity",
        "≤50% at 40°C (Non-condensing)"
      ],
      [
        "Mechanical Life",
        "≥10,000 Cycles"
      ],
      [
        "Protection Functions",
        "Over-voltage, Under-voltage, Over-current, Delay Protection"
      ],
      [
        "Application",
        "Wholesale Distribution Programs, Panel Builder OEM Projects, Private-Label Electrical Brands"
      ],
      [
        "Target Buyer",
        "Electrical Distributors, Panel Builders, OEM Wholesale Customers"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "PN2-VA5": {
    "description": "The UPPROCURE PN2-VA5 stands apart from other models in the PN2 series with one distinctive capability: digital display logo customization. Where the PN2-VA4 supports logo printing on the housing and packaging, the PN2-VA5 allows your brand name or logo to appear directly on the device's digital display screen — a premium branding feature that elevates the perceived quality of finished distribution boards and strengthens brand identity for OEM customers, panel builders, and electrical equipment manufacturers. The core protection functionality is the same proven platform: continuous monitoring of supply voltage and current, 0.5-second disconnect on fault, and automatic power restoration once the supply stabilizes within safe parameters. The high-resolution dual digital display shows real-time voltage in red and current in green. All trip thresholds — over-voltage (130–300V AC), under-voltage (80–210V AC), and over-current — are user-configurable, with a password lock to prevent unauthorized field adjustments. Reset delay is adjustable from 0 to 999 seconds (default 60s). Available in 40A, 63A, and 80A variants; AC 110V customizable for export markets. Contact us for branding specifications and MOQ details.",
    "features": [
      "Digital display logo customization — brand name or logo displayed directly on the device screen",
      "Self-resetting — auto-disconnects on fault, auto-restores when supply stabilizes",
      "Dual digital display — real-time voltage (red) + current (green)",
      "User-configurable trip points — over-voltage 130–300V, under-voltage 80–210V AC",
      "Over-current protection with adjustable trip threshold",
      "Fast 0.5-second disconnect on fault detection",
      "Adjustable reset delay 0–999 seconds (default 60s)",
      "Password lock — prevents unauthorized parameter changes in the field",
      "Energy-saving mode — reduces standby self-consumption",
      "Available in 40A / 63A / 80A current ratings",
      "Rated supply voltage AC 220V (AC 110V customizable for export)",
      "35mm DIN rail mounting",
      "Flame-retardant PC housing (UL94 V-0)",
      "Mechanical life ≥10,000 cycles",
      "CE & RoHS certified"
    ],
    "specs": [
      [
        "Product Type",
        "Self-Resetting Over/Under Voltage Protector"
      ],
      [
        "Model",
        "PN2-VA5"
      ],
      [
        "Rated Supply Voltage",
        "AC 220V (AC 110V Customizable)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60 / 70Hz"
      ],
      [
        "Over-Voltage Setting Range",
        "AC 130–300V"
      ],
      [
        "Under-Voltage Setting Range",
        "AC 80–210V"
      ],
      [
        "Over-Voltage Trip Delay",
        "0.5 Seconds"
      ],
      [
        "Voltage Accuracy",
        "<1%"
      ],
      [
        "Max. Working Current",
        "40A / 63A / 80A (Optional)"
      ],
      [
        "Reset Delay Time",
        "0–999 Seconds (Adjustable, Default 60s)"
      ],
      [
        "Display Mode",
        "Dual Digital Display — Voltage (Red) + Current (Green)"
      ],
      [
        "Password Protection",
        "Supported — prevents unauthorized parameter changes"
      ],
      [
        "Energy-Saving Mode",
        "Switchable"
      ],
      [
        "OEM Customization",
        "Digital display logo customization supported"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0)"
      ],
      [
        "Dimensions",
        "81 × 36 × 66mm"
      ],
      [
        "Installation",
        "35mm DIN Rail"
      ],
      [
        "Ambient Temperature",
        "-25°C to +55°C"
      ],
      [
        "Permitted Relative Humidity",
        "≤50% at 40°C (Non-condensing)"
      ],
      [
        "Mechanical Life",
        "≥10,000 Cycles"
      ],
      [
        "Protection Functions",
        "Over-voltage, Under-voltage, Over-current, Delay Protection"
      ],
      [
        "Application",
        "Premium OEM Electrical Brands, High-End Panel Manufacturing, Branded Distribution Boards"
      ],
      [
        "Target Buyer",
        "Premium OEM Customers, Electrical Equipment Manufacturers, High-End Panel Builders"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "PN2-VAK": {
    "description": "The UPPROCURE PN2-VAK is the most feature-complete model in the PN2 series, combining over/under voltage protection, over-current control, and real-time kWh energy metering into a single compact DIN rail device. While the PN2-VA2 through VA5 models focus purely on protection and automatic restoration, the PN2-VAK adds a built-in kWh meter that tracks cumulative electricity consumption — making it suitable for sub-metering in rental properties, individual tenant circuits, light commercial premises, and any installation where both protection and consumption monitoring are required in one unit. The tri-color digital display provides simultaneous visibility of three metrics: real-time voltage in red, current in green, and total kWh in blue. Current is not displayed below 1A; kWh is not displayed below 0.01 kWh, keeping the display clean during standby. Protection parameters are fully configurable: over-voltage from 240V to 300V AC, under-voltage from 140V to 230V AC, and over-current from 1A up to the rated maximum. A 0.5-second disconnect activates on fault, with automatic power restoration after the adjustable reset delay (0–999 seconds, default 60s). Password lock prevents unauthorized changes. Available in 40A, 63A, and 80A variants; AC 110V customizable for export markets.",
    "features": [
      "Built-in kWh energy meter — cumulative electricity consumption tracking in one device",
      "Tri-color digital display — voltage (red), current (green), kWh (blue) simultaneously",
      "Self-resetting — auto-disconnects on fault, auto-restores when supply stabilizes",
      "Over-voltage protection — configurable 240–300V AC trip threshold",
      "Under-voltage protection — configurable 140–230V AC trip threshold",
      "Over-current protection — adjustable 1A to rated maximum",
      "Fast 0.5-second disconnect on fault detection",
      "Adjustable reset delay 0–999 seconds (default 60s)",
      "Password lock — prevents unauthorized parameter changes",
      "Energy-saving mode — reduces standby self-consumption",
      "Clean display logic — current hidden below 1A, kWh hidden below 0.01 kWh",
      "Available in 40A / 63A / 80A current ratings",
      "Rated supply voltage AC 220V (AC 110V customizable)",
      "35mm DIN rail mounting",
      "Flame-retardant PC housing (UL94 V-0), mechanical life ≥10,000 cycles",
      "CE & RoHS certified"
    ],
    "specs": [
      [
        "Product Type",
        "Self-Resetting Voltage Protector with kWh Energy Meter"
      ],
      [
        "Model",
        "PN2-VAK"
      ],
      [
        "Rated Supply Voltage",
        "AC 220V (AC 110V Customizable)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60 / 70Hz"
      ],
      [
        "Over-Voltage Setting Range",
        "AC 240–300V"
      ],
      [
        "Under-Voltage Setting Range",
        "AC 140–230V"
      ],
      [
        "Over-Current Setting Range",
        "1–40A / 1–63A / 1–80A (per rated model)"
      ],
      [
        "Max. Working Current",
        "40A / 63A / 80A (Optional)"
      ],
      [
        "Trip Delay (Over-Voltage)",
        "0.5 Seconds"
      ],
      [
        "Voltage Accuracy",
        "<1%"
      ],
      [
        "Display Mode",
        "Tri-color — Voltage (Red) + Current (Green) + kWh (Blue)"
      ],
      [
        "Current Display Note",
        "Not displayed when current is below 1A"
      ],
      [
        "kWh Display Note",
        "Cumulative; not displayed below 0.01 kWh"
      ],
      [
        "Reset Delay Time",
        "0–999 Seconds (Adjustable, Default 60s)"
      ],
      [
        "Password Protection",
        "Supported — prevents unauthorized parameter changes"
      ],
      [
        "Energy-Saving Mode",
        "Switchable"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0)"
      ],
      [
        "Dimensions",
        "81 × 36 × 66mm"
      ],
      [
        "Installation",
        "35mm DIN Rail"
      ],
      [
        "Ambient Temperature",
        "-25°C to +55°C"
      ],
      [
        "Permitted Relative Humidity",
        "≤50% at 40°C (Non-condensing)"
      ],
      [
        "Mechanical Life",
        "≥10,000 Cycles"
      ],
      [
        "Protection Functions",
        "Over-voltage, Under-voltage, Over-current, Delay Protection, kWh Metering"
      ],
      [
        "Application",
        "Rental Property Sub-metering, Tenant Electricity Billing, Light Commercial Premises"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "PN2-VAFD": {
    "description": "The UPPROCURE PN2-VAFD is the most advanced model in the PN2 series — a true 5-in-1 device that combines full over/under voltage and over-current protection with a multi-function power meter in a single DIN rail unit. Where the PN2-VAK displays voltage, current, and kWh, the PN2-VAFD adds real-time power (W) and supply frequency (Hz) to the display, giving installers and end users a complete picture of circuit performance without any additional metering hardware. This makes it ideal for light commercial premises, rental properties with sub-metering requirements, home energy monitoring setups, and any installation where a detailed understanding of power quality and consumption is needed alongside automatic fault protection. The multi-color display presents all five metrics simultaneously: voltage, current, active power in watts, supply frequency in hertz, and cumulative energy in kWh. Additional smart features include over-current counting, preset power level alerts, and fast power-off protection. Protection parameters are fully configurable — over-voltage (240–300V AC), under-voltage (140–230V AC), over-current (1A to rated maximum) — with password lock and adjustable reset delay (0–999s, default 60s). Available in 40A, 63A, and 80A variants; AC 110V customizable for export markets.",
    "features": [
      "5-in-1 display — voltage, current, power (W), frequency (Hz), and kWh simultaneously",
      "Self-resetting — auto-disconnects on fault, auto-restores when supply stabilizes",
      "Over-voltage protection — configurable 240–300V AC trip threshold",
      "Under-voltage protection — configurable 140–230V AC trip threshold",
      "Over-current protection — adjustable 1A to rated maximum",
      "Built-in kWh energy meter — cumulative electricity consumption tracking",
      "Real-time power (W) and frequency (Hz) display — no extra metering hardware needed",
      "Over-current counting and preset power level alert functions",
      "Fast 0.5-second disconnect on fault detection",
      "Adjustable reset delay 0–999 seconds (default 60s)",
      "Password lock — prevents unauthorized parameter changes",
      "Energy-saving mode — reduces standby self-consumption",
      "Available in 40A / 63A / 80A current ratings",
      "Rated supply voltage AC 220V (AC 110V customizable)",
      "35mm DIN rail mounting, flame-retardant PC housing (UL94 V-0)",
      "CE & RoHS certified"
    ],
    "specs": [
      [
        "Product Type",
        "5-in-1 Self-Resetting Voltage Protector with Multi-Function Meter"
      ],
      [
        "Model",
        "PN2-VAFD"
      ],
      [
        "Rated Supply Voltage",
        "AC 220V (AC 110V Customizable)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60 / 70Hz"
      ],
      [
        "Over-Voltage Setting Range",
        "AC 240–300V"
      ],
      [
        "Under-Voltage Setting Range",
        "AC 140–230V"
      ],
      [
        "Over-Current Setting Range",
        "1–40A / 1–63A / 1–80A (per rated model)"
      ],
      [
        "Max. Working Current",
        "40A / 63A / 80A (Optional)"
      ],
      [
        "Trip Delay (Over-Voltage)",
        "0.5 Seconds"
      ],
      [
        "Voltage Accuracy",
        "<1%"
      ],
      [
        "Display Mode",
        "Multi-Color — Voltage + Current + Power (W) + Frequency (Hz) + kWh"
      ],
      [
        "Current Display Note",
        "Not displayed when current is below 1A"
      ],
      [
        "kWh Display Note",
        "Cumulative; not displayed below 0.01 kWh"
      ],
      [
        "Additional Functions",
        "Over-current counting, preset power level, fast power-off protection"
      ],
      [
        "Reset Delay Time",
        "0–999 Seconds (Adjustable, Default 60s)"
      ],
      [
        "Password Protection",
        "Supported — prevents unauthorized parameter changes"
      ],
      [
        "Energy-Saving Mode",
        "Switchable"
      ],
      [
        "Housing Material",
        "Flame-retardant PC (UL94 V-0)"
      ],
      [
        "Dimensions",
        "81 × 36 × 66mm"
      ],
      [
        "Installation",
        "35mm DIN Rail"
      ],
      [
        "Ambient Temperature",
        "-25°C to +55°C"
      ],
      [
        "Permitted Relative Humidity",
        "≤50% at 40°C (Non-condensing)"
      ],
      [
        "Mechanical Life",
        "≥10,000 Cycles"
      ],
      [
        "Protection & Measurement Functions",
        "Over-voltage, Under-voltage, Over-current, Delay, kWh, Power (W), Frequency (Hz), Over-current counting, Preset power level"
      ],
      [
        "Application",
        "Home Energy Monitoring, Light Commercial Power Quality Analysis, Solar PV Installations"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "STATS-03": {
    "description": "When uninterrupted power supply depends on multiple sources being healthy and available, the UPPROCURE STATS-03 gives you complete visibility and automatic control. It accepts three independent AC 220V inputs (L1, L2, L3) and continuously monitors the voltage of each source — the triple digital display shows all three input voltages simultaneously, so operators can assess the health of every supply at a glance without additional metering hardware. This makes the STATS-03 the right choice for installations where power source quality monitoring is as important as the switching itself: factory production lines feeding sensitive CNC equipment, retail shops with grid plus generator backup, server rooms requiring zero-interruption failover, and solar-plus-grid hybrid systems where source voltage stability needs constant verification. When the active source falls outside the configured voltage window (over-voltage 130–300V AC, under-voltage 80–210V AC) or exceeds the over-current threshold, the STATS-03 transfers to the next available source in under 0.2 seconds. The priority sequence (default L1→L2→L3) is fully customizable, and both startup delay and auto-recovery delay (each 1–600s) are independently adjustable to prevent nuisance switching during momentary fluctuations. Available in 63A, 80A, and 100A ratings on a standard 35mm DIN rail footprint.",
    "features": [
      "Triple input voltage display — monitor L1/L2/L3 supply health simultaneously without extra metering",
      "3-way automatic transfer switch — L1→L2→L3 priority switching, fully customizable sequence",
      "Sub-0.2s switching response — seamless source transfer protecting sensitive equipment",
      "Over-voltage protection — configurable 130–300V AC, isolates loads from grid spikes",
      "Under-voltage protection — configurable 80–210V AC, prevents brownout damage",
      "Over-current protection — configurable 1A to rated maximum (63A / 80A / 100A)",
      "Adjustable startup delay 1–600s — prevents nuisance switching on momentary dips",
      "Adjustable auto-recovery delay 1–600s — controlled return to primary source",
      "Ideal for CNC machinery, server rooms, generator-backed retail, solar-grid hybrid systems",
      "35mm DIN rail mounting — direct fit in standard distribution boards",
      "Flame-retardant PC housing (UL94 V-0), mechanical life ≥10,000 cycles",
      "Available in 63A / 80A / 100A current ratings",
      "CE & RoHS certified"
    ],
    "specs": [
      [
        "Product Model",
        "STATS-03"
      ],
      [
        "Product Type",
        "3-Input Automatic Transfer Switch with Triple Voltage Display"
      ],
      [
        "Rated Supply Voltage",
        "AC 3×220V (N-L1/L2/L3)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60 / 70Hz"
      ],
      [
        "Over-Voltage Protection Range",
        "AC 130–300V"
      ],
      [
        "Under-Voltage Protection Range",
        "AC 80–210V"
      ],
      [
        "Over-Current Protection Range",
        "1–63A / 1–80A / 1–100A (per rated model)"
      ],
      [
        "Rated Working Current",
        "63A / 80A / 100A (Optional)"
      ],
      [
        "Voltage Accuracy",
        "<1%"
      ],
      [
        "Display Mode",
        "Triple Digital Display — L1 / L2 / L3 Input Voltage only"
      ],
      [
        "Priority Switching Sequence",
        "L1 → L2 → L3 (Customizable)"
      ],
      [
        "Startup Delay Time",
        "1–600s (Adjustable)"
      ],
      [
        "Auto-Recovery Delay Time",
        "1–600s (Adjustable)"
      ],
      [
        "Switching Response Time",
        "<0.2s"
      ],
      [
        "Installation",
        "35mm DIN Rail"
      ],
      [
        "Housing Material",
        "Flame-Retardant PC (UL94 V-0)"
      ],
      [
        "Mechanical Life",
        "≥10,000 Cycles"
      ],
      [
        "Operating Temperature",
        "-25°C to +50°C"
      ],
      [
        "Relative Humidity",
        "≤50% at 40°C (Non-Condensing)"
      ],
      [
        "Core Functions",
        "3-Way Priority Switching, Over/Under Voltage Protection, Over-Current Protection, Triple Input Voltage Monitoring"
      ],
      [
        "Application",
        "CNC Machinery, Server Rooms, Generator-Backed Retail, Solar-Grid Hybrid Systems"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "STATS-04": {
    "description": "The UPPROCURE STATS-04 is designed for engineers and facility managers who need to know not just which power source is active, but how much current their load is actually drawing at any given moment. Its 4-parameter display adds real-time output current to the three input voltage readings, eliminating the need for a separate clamp meter or sub-meter to track load behavior during source transfers and normal operation. This makes the STATS-04 the preferred choice over the STATS-03 in applications where load current data drives decisions: generator sizing verification, electrical contractor commissioning of new panels, rental property sub-metering with ATS, solar storage systems requiring load-vs-generation balance monitoring, and industrial installations where overcurrent trending helps predict maintenance needs before a trip occurs. When a fault is detected on the active source — voltage outside the 130–300V over-voltage or 80–210V under-voltage window, or current exceeding the configured threshold — the STATS-04 switches to the next available source in under 0.2 seconds. Priority sequence is customizable, and startup and recovery delays (each 1–600s) are independently set. Available in 63A, 80A, and 100A ratings on a 35mm DIN rail.",
    "features": [
      "4-parameter display — 3 input voltages (L1/L2/L3) + output current simultaneously",
      "3-way automatic transfer switch — L1→L2→L3 priority switching, customizable sequence",
      "Sub-0.2s switching response — seamless source transfer with minimal downtime",
      "Over-voltage protection — configurable 130–300V AC trip threshold",
      "Under-voltage protection — configurable 80–210V AC trip threshold",
      "Over-current protection — configurable 1A to rated maximum",
      "Adjustable startup delay 1–600s",
      "Adjustable auto-recovery delay 1–600s",
      "Load current monitoring — real-time output current visible without extra metering",
      "35mm DIN rail mounting — fits standard distribution boards",
      "Flame-retardant PC housing (UL94 V-0), mechanical life ≥10,000 cycles",
      "Available in 63A / 80A / 100A current ratings",
      "CE & RoHS certified"
    ],
    "specs": [
      [
        "Product Model",
        "STATS-04"
      ],
      [
        "Product Type",
        "3-Input Automatic Transfer Switch with Current Display"
      ],
      [
        "Rated Supply Voltage",
        "AC 3×220V (N-L1/L2/L3)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60 / 70Hz"
      ],
      [
        "Over-Voltage Protection Range",
        "AC 130–300V"
      ],
      [
        "Under-Voltage Protection Range",
        "AC 80–210V"
      ],
      [
        "Over-Current Protection Range",
        "1–63A / 1–80A / 1–100A (per rated model)"
      ],
      [
        "Rated Working Current",
        "63A / 80A / 100A (Optional)"
      ],
      [
        "Voltage Accuracy",
        "<1%"
      ],
      [
        "Display Mode",
        "4-Parameter Display — L1/L2/L3 Input Voltage + Output Current"
      ],
      [
        "Priority Switching Sequence",
        "L1 → L2 → L3 (Customizable)"
      ],
      [
        "Startup Delay Time",
        "1–600s (Adjustable)"
      ],
      [
        "Auto-Recovery Delay Time",
        "1–600s (Adjustable)"
      ],
      [
        "Switching Response Time",
        "<0.2s"
      ],
      [
        "Installation",
        "35mm DIN Rail"
      ],
      [
        "Housing Material",
        "Flame-Retardant PC (UL94 V-0)"
      ],
      [
        "Mechanical Life",
        "≥10,000 Cycles"
      ],
      [
        "Operating Temperature",
        "-25°C to +50°C"
      ],
      [
        "Relative Humidity",
        "≤50% at 40°C (Non-Condensing)"
      ],
      [
        "Core Functions",
        "3-Way Priority Switching, Over/Under Voltage Protection, Over-Current Protection, Triple Voltage + Output Current Monitoring"
      ],
      [
        "Application",
        "Generator Sizing Verification, Electrical Panel Commissioning, Rental Property Sub-metering, Solar Load Monitoring"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "STATS-05": {
    "description": "When partial monitoring isn't enough, the UPPROCURE STATS-05 gives you the complete picture. Where the STATS-03 shows three input voltages and the STATS-04 adds output current, the STATS-05 goes further — its 5-parameter display shows all three input voltages, the actual output voltage delivered to your load, and the real-time output current, all at once. This matters in applications where you need to verify not just that your power sources are healthy, but that the correct voltage is actually reaching your equipment after switching. A source may appear within range at the input terminals, yet a wiring fault, contact issue, or cable voltage drop could still deliver the wrong voltage to your load. The STATS-05 eliminates that blind spot. Designed for data center infrastructure managers overseeing UPS bypass panels, hospital facility engineers maintaining life-safety power systems, precision manufacturing lines where voltage at the machine matters as much as voltage at the panel, and industrial automation engineers commissioning multi-source control cabinets — the STATS-05 is the right choice where complete electrical visibility is non-negotiable. It carries all the protection and control features of the STATS series: adjustable over-voltage (130–300V) and under-voltage (80–210V) thresholds, configurable over-current protection, sub-0.2s switching response, customizable L1→L2→L3 priority sequence, and 1–600s adjustable startup and auto-recovery delays. CE and RoHS certified, DIN rail mounted, flame-retardant PC housing (UL94 V-0), rated for ≥10,000 mechanical cycles.",
    "features": [
      "5-parameter display — L1/L2/L3 input voltages + output voltage + output current, all simultaneously",
      "Output voltage monitoring — verify correct voltage is actually delivered to the load after switching",
      "3-way automatic transfer switch — L1→L2→L3 priority switching, fully customizable sequence",
      "Sub-0.2s switching response — seamless source transfer with minimal load interruption",
      "Over-voltage protection — configurable 130–300V AC trip threshold",
      "Under-voltage protection — configurable 80–210V AC trip threshold",
      "Over-current protection — adjustable 1–63A / 1–80A / 1–100A trip range",
      "Adjustable startup delay (1–600s) and auto-recovery delay (1–600s)",
      "35mm DIN rail mounting — standard panel installation",
      "Flame-retardant PC housing (UL94 V-0), mechanical life ≥10,000 cycles",
      "Available in 63A / 80A / 100A current ratings",
      "CE & RoHS certified"
    ],
    "specs": [
      [
        "Product Model",
        "STATS-05"
      ],
      [
        "Product Type",
        "3-Input Automatic Transfer Switch with Full Monitoring Display"
      ],
      [
        "Rated Supply Voltage",
        "AC 3×220V (N-L1/L2/L3)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60 / 70Hz"
      ],
      [
        "Over-Voltage Protection Range",
        "AC 130–300V"
      ],
      [
        "Under-Voltage Protection Range",
        "AC 80–210V"
      ],
      [
        "Over-Current Protection Range",
        "1–63A / 1–80A / 1–100A (Optional)"
      ],
      [
        "Rated Working Current",
        "63A / 80A / 100A (Optional)"
      ],
      [
        "Voltage Accuracy",
        "<1%"
      ],
      [
        "Display Mode",
        "5-Parameter Display (3× Input Voltage + Output Voltage + Output Current)"
      ],
      [
        "Priority Switching Sequence",
        "L1 → L2 → L3 (Customizable)"
      ],
      [
        "Startup Delay Time",
        "1–600s (Adjustable)"
      ],
      [
        "Auto-Recovery Delay Time",
        "1–600s (Adjustable)"
      ],
      [
        "Switching Response Time",
        "<0.2s"
      ],
      [
        "Installation",
        "35mm DIN Rail Mounting"
      ],
      [
        "Housing Material",
        "Flame-Retardant PC Material (UL94 V-0)"
      ],
      [
        "Mechanical Life",
        "≥10,000 Cycles"
      ],
      [
        "Operating Temperature",
        "-25℃ to +50℃"
      ],
      [
        "Relative Humidity",
        "≤50% at 40°C (Non-Condensing)"
      ],
      [
        "Core Functions",
        "3-Way Priority Switching, Over/Under Voltage Protection, Over-Current Protection, Full Input/Output Voltage & Output Current Monitoring"
      ],
      [
        "Application",
        "Data Center UPS Bypass Panels, Hospital Life-Safety Power Systems, Precision Manufacturing Lines, Industrial Automation Multi-Source Cabinets"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "STATS-06": {
    "description": "Three-phase systems fail in more ways than single-phase ones, and a single protection function is rarely enough. The UPPROCURE STATS-06 is purpose-built for AC380V 3-phase 4-wire circuits — integrating six protection functions into one DIN rail device: over-voltage, under-voltage, over-current, phase loss, open neutral, phase sequence error, and 3-phase unbalance detection. When any of these faults occur, the STATS-06 trips immediately, disconnecting the load before equipment damage occurs. Once the fault clears, it automatically restores power after the configured recovery delay. The high-definition color display shows real-time voltage and current for all three phases simultaneously — current values below 1A are suppressed to keep the display clean and readable. All protection thresholds are field-configurable: over-voltage from 230–300V (default 270V), under-voltage from 120–210V (default 170V), over-current from 1–63A or 1–100A, plus adjustable action time and recovery delay. A built-in 3-phase voltage and current calibration function corrects measurement errors at installation, ensuring accuracy throughout the device's service life. Widely deployed in photovoltaic energy storage systems where 3-phase unbalance is a common fault mode, industrial distribution panels protecting motor-driven equipment, commercial building power supplies where phase loss could damage HVAC compressors, and any application where a single-function protector leaves too many failure modes uncovered. Available in white or dark gray housing, supports custom LOGO for OEM integration, and backed by a 3-year warranty.",
    "features": [
      "6-in-1 protection — over-voltage, under-voltage, over-current, phase loss, open neutral, phase sequence, and 3-phase unbalance",
      "High-definition color display — real-time L1/L2/L3 voltage and current (current hidden below 1A for clean readout)",
      "Fully configurable thresholds — over-voltage 230–300V, under-voltage 120–210V, over-current 1–63A or 1–100A",
      "Adjustable action time (0.1–10s) and recovery delay (1–600s)",
      "3-phase voltage and current calibration — corrects measurement errors at installation",
      "Continuous over-current protection counter — 0–20 trips before lockout (configurable)",
      "Auto-recovery after fault clearance — restores power without manual reset",
      "35mm DIN rail mounting — standard industrial panel installation",
      "Housing available in white or dark gray, supports custom LOGO for OEM",
      "Rated for AC 380V 3-phase 4-wire systems, 63A or 100A",
      "3-year warranty",
      "CE certified"
    ],
    "specs": [
      [
        "Product Model",
        "STATS-06"
      ],
      [
        "Product Type",
        "3-Phase 4-Wire Over/Under Voltage & Over-Current Protector"
      ],
      [
        "Rated Voltage",
        "AC 380V (N-L1/L2/L3)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60Hz"
      ],
      [
        "Rated Current Options",
        "63A / 100A"
      ],
      [
        "Over-Voltage Protection Range",
        "AC 230–300V (Default: 270V)"
      ],
      [
        "Over-Voltage Recovery Range",
        "AC 225–295V (Default: 265V)"
      ],
      [
        "Under-Voltage Protection Range",
        "AC 120–210V (Default: 170V)"
      ],
      [
        "Under-Voltage Recovery Range",
        "AC 125–215V (Default: 175V)"
      ],
      [
        "Over-Current Protection Range",
        "1–63A / 1–100A (Default: 63A)"
      ],
      [
        "Over-Current Action Time",
        "0.1s–10s (Default: 0.5s)"
      ],
      [
        "Continuous Over-Current Protection Times",
        "0–20 Times (Default: OFF)"
      ],
      [
        "Power-On Delay Time",
        "1–600s (Default: 5s)"
      ],
      [
        "Protection Recovery Delay Time",
        "1–600s (Default: 30s)"
      ],
      [
        "Display Function",
        "Real-Time 3-Phase Voltage & Current Display (Current Not Displayed Below 1A)"
      ],
      [
        "Core Protection Functions",
        "Over/Under Voltage, Over-Current, Phase Loss, Open Neutral, Phase Sequence, 3-Phase Unbalance"
      ],
      [
        "Calibration Function",
        "3-Phase Voltage & Current Calibration"
      ],
      [
        "Installation",
        "35mm DIN Rail Mounting"
      ],
      [
        "Housing Color Options",
        "White / Dark Gray"
      ],
      [
        "Application",
        "Photovoltaic Energy Storage, Industrial Motor Distribution Panels, Commercial HVAC Power Supply, 3-Phase Equipment Protection"
      ],
      [
        "Warranty",
        "3 Years"
      ]
    ]
  },
  "CZVA1": {
    "description": "Unstable grid voltage is one of the most common — and least visible — causes of premature appliance failure. When voltage spikes or sags occur, refrigerator compressors, air conditioner units, and televisions absorb the damage silently until they fail. The UPPROCURE CZVA1 voltage protector socket sits between the wall outlet and your appliance, cutting power the instant voltage moves outside your set range and restoring it automatically once the grid stabilizes. No wiring, no electrician — just plug in, set your thresholds, and your appliance is protected. The built-in digital LED display shows the live voltage reading at all times, so you always know what your grid is delivering. Over-voltage and under-voltage thresholds are independently adjustable: set over-voltage anywhere from 230V to 300V (factory default 260V) and under-voltage from 140V to 210V (factory default 175V). A ±20V voltage correction function lets you fine-tune the displayed reading against a calibrated reference. Recovery delay is configurable from 5 to 999 seconds — set a longer delay to protect compressor-based appliances like refrigerators and air conditioners from rapid cycling after a voltage event. Available in EU Schuko, UK, and South Africa plug formats to cover export markets and international installations. Rated for up to 2300W (10A), suitable for most household appliances including refrigerators, air conditioners, washing machines, and televisions. Operating temperature range -10℃ to +50℃.",
    "features": [
      "Plug-and-play — no installation or wiring required, plugs directly into wall socket",
      "Digital LED display — shows live voltage reading at all times",
      "Adjustable over-voltage protection — 230V–300V, default 260V",
      "Adjustable under-voltage protection — 140V–210V, default 175V",
      "Configurable recovery delay — 5s–999s, prevents rapid cycling for compressor appliances",
      "Voltage correction function — ±20V offset for calibration against reference meter",
      "Automatic power cutoff on fault — instant trip on over or under voltage",
      "Automatic power restore — resumes after set delay once voltage stabilizes",
      "Available in EU (Schuko), UK, and South Africa plug standards",
      "Max load 2300W / 10A — suitable for refrigerators, air conditioners, TVs"
    ],
    "specs": [
      [
        "Product Name",
        "Adjustable Digital Voltage Protector Socket"
      ],
      [
        "Compatible Plug Standards",
        "EU (Schuko) / UK / South Africa"
      ],
      [
        "Rated Input Voltage",
        "AC 140–300V"
      ],
      [
        "Rated Frequency",
        "50Hz / 60Hz"
      ],
      [
        "Max Rated Power",
        "2300W"
      ],
      [
        "Max Rated Current",
        "10(2)A / 16A Max"
      ],
      [
        "Over-Voltage Protection Range",
        "230V–300V (Default: 260V)"
      ],
      [
        "Over-Voltage Recovery Offset",
        "-5V (Default: 255V)"
      ],
      [
        "Under-Voltage Protection Range",
        "140V–210V (Default: 175V)"
      ],
      [
        "Under-Voltage Recovery Offset",
        "+5V (Default: 180V)"
      ],
      [
        "Recovery Delay Time",
        "5s–999s (Default: 10s)"
      ],
      [
        "Voltage Correction Range",
        "-20V ~ +20V (Default: 0V)"
      ],
      [
        "Display Type",
        "Digital LED Display"
      ],
      [
        "Control Buttons",
        "Power / SET / Up / Down"
      ],
      [
        "Automatic Power Cutoff",
        "Yes (On Over/Under Voltage)"
      ],
      [
        "Automatic Power Restore",
        "Yes (After Set Delay)"
      ],
      [
        "Plug & Play Installation",
        "Yes"
      ],
      [
        "Application",
        "Home Appliances, Refrigerators, Air Conditioners, Televisions, Washing Machines"
      ],
      [
        "Operating Temperature",
        "-10℃ ~ +50℃"
      ]
    ]
  },
  "CZVA2": {
    "description": "Not every voltage protection situation calls for adjustable thresholds and a programming menu. Sometimes you just need reliable, zero-configuration protection that works the moment you plug it in. The UPPROCURE CZVA2 is built for exactly that: a fixed-logic voltage protector socket that automatically disconnects your appliance when voltage drops below 165V±5V or rises above 265V±5V, then restores power after a built-in 30-second delay — no buttons to configure, no thresholds to set. Three LED indicators give you an immediate at-a-glance status: green for normal operation, a low-voltage warning when the grid sags, and a high-voltage warning when it spikes. This makes the CZVA2 ideal for users who want hands-off protection: rental property tenants protecting a refrigerator, households in regions with occasional voltage fluctuation, offices keeping computer equipment safe, or travelers carrying it as portable appliance protection across EU, UK, and South African socket types. The optional child safety shutter makes it suitable for homes with young children. Available in 10A (2200W) and 13A (2860W) rated current versions to cover a wider range of appliances — the 13A variant handles higher-draw equipment like large air conditioners and washing machines where the 10A version falls short. CE and RoHS certified, white finish, operating temperature -10℃ to +50℃.",
    "features": [
      "Zero-configuration — fixed protection logic works immediately on plug-in, no setup required",
      "3-LED status indicators — Normal (green) / Low Voltage / High Voltage for instant fault identification",
      "Fixed over-voltage cutoff at 265V±5V — protects against grid spikes",
      "Fixed under-voltage cutoff at 165V±5V — protects against grid sags",
      "30-second auto-recovery delay — prevents rapid cycling after a voltage event",
      "One-button power control for easy on/off",
      "Optional child safety shutter — safe for homes with young children",
      "Available in 10A (2200W) and 13A (2860W) versions",
      "Available in EU Schuko, UK, and South Africa universal socket configurations",
      "Plug-and-play — no installation or wiring required",
      "CE & RoHS certified"
    ],
    "specs": [
      [
        "Product Type",
        "Plug-in Voltage Protector Socket"
      ],
      [
        "Compatible Socket Standards",
        "EU Schuko / UK / South Africa Universal"
      ],
      [
        "Rated Input Voltage",
        "AC 220–240V"
      ],
      [
        "Rated Frequency",
        "50Hz"
      ],
      [
        "Rated Current Options",
        "10(2)A / 13A"
      ],
      [
        "Max Rated Power",
        "2200W (10A) / 2860W (13A)"
      ],
      [
        "Low Voltage Cutoff",
        "165V ±5V"
      ],
      [
        "High Voltage Cutoff",
        "265V ±5V"
      ],
      [
        "Auto Recovery Delay Time",
        "30 Seconds (Fixed)"
      ],
      [
        "Protection Function",
        "Over-Voltage & Under-Voltage Cutoff"
      ],
      [
        "Operating Indicators",
        "3 LED Indicators (Normal / Low Voltage / High Voltage)"
      ],
      [
        "Power Control",
        "One-Button Power Switch"
      ],
      [
        "Child Safety Shutter",
        "Optional (With / Without)"
      ],
      [
        "Socket Type",
        "Universal 3-Pin Socket"
      ],
      [
        "Installation",
        "Plug-and-Play"
      ],
      [
        "Application",
        "Rental Properties, Home Appliances, Office Equipment, Travel Use, Refrigerators, TVs, Air Conditioners"
      ],
      [
        "Operating Temperature",
        "-10℃ ~ +50℃"
      ],
      [
        "Color",
        "White"
      ],
      [
        "Certification",
        "CE, RoHS"
      ]
    ]
  },
  "CZVA3": {
    "description": "Protecting an appliance from voltage anomalies is straightforward. Knowing your circuit's live current draw at the same time, locking your protection settings so no one can change them, and cutting power within half a second of a fault — that requires a more capable device. The UPPROCURE CZVA3 is designed for users who need more than basic voltage protection. Its high-resolution dual-color digital display shows voltage in red and current in green simultaneously, giving you a real-time snapshot of both grid quality and load behavior without switching between screens or menus. Over-voltage and under-voltage trip thresholds are fully adjustable (130–300V and 80–210V respectively), and over-current protection adds a third layer of defense for appliances susceptible to load spikes. The password lock function prevents unauthorized changes to protection settings — critical for shared accommodation, rental properties, or small business environments where multiple people have access to the device. Rated at 16A / 3680W, it handles higher-draw loads that exceed the capacity of standard 10A plug protectors — large washing machines, powerful electric heaters, workshop tools. The wider operating temperature range (-25℃ to +55℃) and multi-frequency support (40/50/60/70Hz) make it suitable for environments beyond the typical household. Flame-retardant UL94 V-0 housing, ≥10,000 mechanical cycle rating, custom LOGO available for OEM orders.",
    "features": [
      "Dual-color digital display — voltage in red and current in green, visible simultaneously",
      "Password lock — prevents unauthorized changes to protection settings",
      "Over-current protection — trips within 0.5s on voltage or current fault",
      "Fully adjustable over-voltage threshold: 130–300V",
      "Fully adjustable under-voltage threshold: 80–210V",
      "Adjustable reset delay: 0–999s (default 60s)",
      "Energy-saving mode — reduces standby self-consumption",
      "16A / 3680W rated — handles high-draw appliances beyond 10A protector limits",
      "Multi-frequency support: 40/50/60/70Hz",
      "Wide operating temperature: -25℃ to +55℃",
      "Flame-retardant PC housing (UL94 V-0), ≥10,000 mechanical cycles",
      "Custom LOGO available for OEM orders",
      "EU Schuko plug, AC 220V (110V customizable)"
    ],
    "specs": [
      [
        "Product Type",
        "Plug-in Self-Resetting Over/Under Voltage & Over-Current Protector Socket"
      ],
      [
        "Plug/Socket Standard",
        "EU Schuko"
      ],
      [
        "Rated Supply Voltage",
        "AC 220V (AC 110V Customizable)"
      ],
      [
        "Rated Frequency",
        "40 / 50 / 60 / 70Hz"
      ],
      [
        "Over-Voltage Setting Range",
        "AC 130–300V"
      ],
      [
        "Under-Voltage Setting Range",
        "AC 80–210V"
      ],
      [
        "Over-Voltage Trip Delay",
        "0.5 Seconds"
      ],
      [
        "Voltage Accuracy",
        "<1%"
      ],
      [
        "Max Working Current",
        "16A"
      ],
      [
        "Max Rated Power",
        "3680W"
      ],
      [
        "Display Mode",
        "Dual Digital Display — Voltage (Red) + Current (Green)"
      ],
      [
        "Password Protection",
        "Yes — supports password locking to prevent unauthorized parameter changes"
      ],
      [
        "Energy-Saving Mode",
        "Yes — switchable to reduce self-consumption"
      ],
      [
        "Reset Delay Time",
        "0–999 Seconds (Adjustable, Default: 60s)"
      ],
      [
        "Protection Functions",
        "Over-Voltage, Under-Voltage, Over-Current, Delay Protection"
      ],
      [
        "Housing Material",
        "Flame-Retardant PC (UL94 V-0)"
      ],
      [
        "Mechanical Life",
        "≥10,000 Cycles"
      ],
      [
        "Permitted Relative Humidity",
        "≤50% at 40°C (Non-Condensing)"
      ],
      [
        "Ambient Temperature",
        "-25℃ to +55℃"
      ],
      [
        "Application",
        "Shared Accommodation, Rental Properties, Small Business, High-Power Appliances, Workshop Equipment"
      ],
      [
        "Customizable LOGO",
        "Yes"
      ]
    ]
  },
  "D52-2066": {
    "description": "Managing a circuit effectively means knowing more than just the voltage. The UPPROCURE D52-2066 is a 6-in-1 multi-function AC power monitor that gives you a complete real-time view of your circuit's electrical performance — voltage, current, active power in watts, power factor, cumulative energy in kWh, and supply frequency — all displayed simultaneously on a high-resolution color screen, without needing separate instruments for each parameter. The D52-2066 supports both single-phase (110V/220V) and three-phase (380V) systems, with two selectable voltage range options: 40–300V for standard single-phase and low-voltage applications, and 250–450V for three-phase and industrial circuits. Current measurement covers 0–100A (0.01A resolution), compatible with both built-in and external current transformers (CT) for flexible installation. Sampling rate is 2 times per second with ±1% ±2-digit accuracy across all parameters. Energy consumption data is stored automatically during power outages — no readings are lost when the circuit is interrupted. The SAM CK button resets the kWh counter when needed (hold 5 seconds). Compact 54×80×64mm footprint installs on standard 35mm DIN rail. Suitable for home energy monitoring, industrial circuit analysis, and photovoltaic system performance tracking. CE certified, flame-retardant PC housing, operating temperature -10℃ to +50℃.",
    "features": [
      "6-in-1 display — voltage, current, power (W), power factor, kWh, and frequency simultaneously",
      "Color multi-parameter digital display — all values visible at a glance on one screen",
      "Dual voltage range — 40–300V (single-phase) or 250–450V (three-phase 380V), selectable",
      "100A current range with 0.01A resolution",
      "Works with built-in or external current transformers (CT)",
      "±1% ±2-digit accuracy across all measured parameters",
      "2 samples per second — responsive real-time monitoring",
      "Auto-saves energy data during power outage — no kWh data loss",
      "SAM CK button for kWh reset (hold 5 seconds)",
      "35mm DIN rail mounting — compact 54×80×64mm footprint",
      "Suitable for single-phase 110V/220V and three-phase 380V systems",
      "CE certified, flame-retardant PC housing"
    ],
    "specs": [
      [
        "Product Model",
        "D52-2066"
      ],
      [
        "Product Type",
        "6-in-1 DIN Rail AC Multi-Function Power Monitor"
      ],
      [
        "Installation Type",
        "35mm DIN Rail Mount"
      ],
      [
        "Supported Systems",
        "Single-Phase 110V/220V, 3-Phase 380V"
      ],
      [
        "Voltage Range Options",
        "40.0–300.0V / 250.0–450.0V (Selectable)"
      ],
      [
        "Current Range",
        "0–100.0A (Resolution: 0.01A)"
      ],
      [
        "Frequency Range",
        "45.0–65.0Hz"
      ],
      [
        "Power Factor Range",
        "0.00–1.00 PF"
      ],
      [
        "Active Power Range",
        "0–450,000W (0–9999.9W: 0.1W resolution; ≥10,000W: 1W resolution)"
      ],
      [
        "Energy Consumption Range",
        "0–99,999 kWh (Resolution: 0.01 / 0.1 / 1 kWh based on value)"
      ],
      [
        "Sampling Speed",
        "2 Times Per Second"
      ],
      [
        "Accuracy",
        "±1% ±2 Digits"
      ],
      [
        "Display Type",
        "Color Multi-Parameter Digital Display"
      ],
      [
        "Reset Function",
        "SAM CK Button for Energy Reset (Hold 5s)"
      ],
      [
        "Data Retention",
        "Auto-Saves Energy Data During Power Outage"
      ],
      [
        "CT Compatibility",
        "Built-In or External Current Transformers"
      ],
      [
        "Application",
        "Home Energy Monitoring, Industrial Circuit Analysis, Photovoltaic Systems"
      ],
      [
        "Operating Temperature",
        "-10℃ ~ +50℃"
      ],
      [
        "Dimensions",
        "54 × 80 × 64mm"
      ],
      [
        "Housing Material",
        "Flame-Retardant PC"
      ],
      [
        "Certification",
        "CE"
      ]
    ]
  },
  "D52-2066-wifi": {
    "description": "Knowing your electricity consumption in real time — from anywhere, without visiting the panel — is what separates a smart energy meter from a standard one. The UPPROCURE D52-2066 WiFi edition adds Tuya 2.4GHz connectivity to the full 6-in-1 measurement platform, letting you monitor AC voltage, current, active power, power factor, frequency, and kWh consumption live through the Tuya mobile app on your phone or tablet. Beyond real-time readings, the app gives you detailed consumption history broken down by day, month, and year — making it practical for rental property owners tracking tenant usage, hotel facility managers reviewing floor-by-floor energy spend, and homeowners keeping tabs on monthly electricity costs without waiting for the utility bill. The high-definition color LED screen displays all six parameters simultaneously at the device for on-site readings, and built-in power-failure memory ensures kWh data is preserved through outages. Supports both built-in and external current transformers (CT) for flexible installation across different panel configurations. Measures up to 100A (0.01A resolution), 40–300V AC, with ±1% ±2-digit accuracy and 2 samples per second. 35mm DIN rail mount, compact 54×80×64mm footprint, 150g. Flame-retardant PC housing.",
    "features": [
      "Tuya WiFi (2.4GHz) — remote monitoring via mobile app from anywhere",
      "6-in-1 color display — voltage, current, power (W), power factor, kWh, and frequency",
      "App consumption history — daily, monthly, and yearly energy usage statistics",
      "Power-failure memory — kWh data preserved through outages",
      "Works with built-in or external current transformers (CT)",
      "100A current range, 0.01A resolution",
      "40–300V AC voltage range",
      "±1% ±2-digit accuracy, 2 samples per second",
      "35mm DIN rail mounting — compact 54×80×64mm, 150g",
      "Flame-retardant PC housing",
      "Suitable for homes, rental properties, hotels, offices, commercial buildings"
    ],
    "specs": [
      [
        "Product Model",
        "D52-2066 (WiFi Edition)"
      ],
      [
        "Product Type",
        "Tuya WiFi Smart 6-in-1 DIN Rail Energy Meter"
      ],
      [
        "Connection Protocol",
        "Tuya 2.4GHz WiFi"
      ],
      [
        "Supported CT Types",
        "Built-in / External (Optional)"
      ],
      [
        "AC Voltage Range",
        "40.0–300.0V"
      ],
      [
        "AC Current Range",
        "0–100.0A (Resolution: 0.01A)"
      ],
      [
        "Frequency Range",
        "45.0–65.0Hz"
      ],
      [
        "Power Factor Range",
        "0.00–1.00 PF"
      ],
      [
        "Active Power Range",
        "0–45,000W (0–9999.9W: 0.1W resolution; ≥10,000W: 1W resolution)"
      ],
      [
        "Energy Consumption Range",
        "0–99,999 kWh (0–999.99 kWh: 0.01 kWh; 1,000–9,999.9 kWh: 0.1 kWh; ≥10,000 kWh: 1 kWh)"
      ],
      [
        "Sampling Speed",
        "2 Times Per Second"
      ],
      [
        "Accuracy",
        "±1% ±2 Digits"
      ],
      [
        "Display",
        "High-Definition Color LED Screen"
      ],
      [
        "Power Failure Memory",
        "Yes — preserves energy consumption data"
      ],
      [
        "Remote Monitoring",
        "Tuya App — real-time data, daily/monthly/yearly history"
      ],
      [
        "Installation",
        "35mm DIN Rail Mount"
      ],
      [
        "Dimensions",
        "54 × 80 × 64mm"
      ],
      [
        "Weight",
        "150g"
      ],
      [
        "Housing Material",
        "Flame-Retardant PC"
      ],
      [
        "Application",
        "Homes, Rental Properties, Hotels, Offices, Commercial Buildings"
      ]
    ]
  },
  "QY2P": {
    "description": "The QY2P series is a range of single-phase DIN rail energy meters built around a shared 0.5% high-accuracy measurement platform, factory calibrated for stable, consistent performance. Three models are available to match different display preferences and monitoring requirements — from full 5-parameter electrical monitoring to streamlined kWh-focused metering. The QY2P-E features a multi-color LED display and is the most feature-rich model in the series, measuring real-time voltage, current, active power, power factor, and total energy consumption simultaneously. It is the right choice for users who need a complete view of their circuit's electrical performance — identifying inefficient loads, checking power factor, and tracking energy costs in one device. The QY2P-UID uses a high-contrast color LCD screen and focuses on the three core metering parameters: voltage, current, and total energy consumption (kWh). Its streamlined display and cost-effective positioning make it well suited for straightforward energy usage tracking in residential sub-metering, rental properties, and light commercial circuits where power factor monitoring is not required. The QY2P-UIDY shares the same V/I/kWh parameter set as the QY2P-UID but features an upgraded color LCD with optimized layout and enhanced readability. It is the premium display option in the series — designed for installations where long-term visibility, clear digit rendering, and panel aesthetics matter. All three models install on standard 35mm DIN rail.",
    "features": [
      "0.5% high accuracy across all models — factory calibrated for reliable, consistent measurements",
      "35mm DIN rail mounting — fits standard distribution boards",
      "QY2P-E: Multi-color LED display — Voltage, Current, Active Power, Power Factor, kWh",
      "QY2P-UID: Color LCD display — Voltage, Current, kWh (streamlined, cost-effective)",
      "QY2P-UIDY: Upgraded color LCD display — Voltage, Current, kWh (premium readout)",
      "QY2P-E — ideal for full electrical parameter monitoring and power quality analysis",
      "QY2P-UID — ideal for straightforward energy consumption tracking in residential and rental circuits",
      "QY2P-UIDY — ideal for installations requiring premium display clarity and long-term readability",
      "Single-phase metering for residential, commercial, and light industrial applications"
    ],
    "specs": [
      [
        "Product Series",
        "QY2P"
      ],
      [
        "Available Models",
        "QY2P-E / QY2P-UID / QY2P-UIDY"
      ],
      [
        "Installation Type",
        "35mm DIN Rail Mount"
      ],
      [
        "Phase",
        "Single-Phase"
      ],
      [
        "Accuracy",
        "0.5% (High Precision, Factory Calibrated)"
      ],
      [
        "QY2P-E Display",
        "Multi-Color LED Display"
      ],
      [
        "QY2P-E Parameters",
        "Voltage, Current, Active Power, Power Factor, Energy (kWh)"
      ],
      [
        "QY2P-UID Display",
        "Advanced Color LCD Display"
      ],
      [
        "QY2P-UID Parameters",
        "Voltage, Current, Energy (kWh)"
      ],
      [
        "QY2P-UIDY Display",
        "Upgraded Color LCD Display (Enhanced Readout)"
      ],
      [
        "QY2P-UIDY Parameters",
        "Voltage, Current, Energy (kWh)"
      ],
      [
        "Application",
        "Residential Sub-metering, Rental Properties, Commercial Circuits, Light Industrial Metering"
      ]
    ]
  },
  "DDS": {
    "description": "The DDS series covers three models of compact single-phase DIN rail energy meters designed for accurate, reliable metering across residential, rental, commercial, and light industrial installations. All models are rated 5(80)A and compatible with both 110V/230V 50/60Hz power systems, making them suitable for domestic and export markets worldwide. The DDS662 is the foundation model — a straightforward, wide-input energy meter with a clear LCD display showing kWh, voltage, current, and power. It supports both 110V and 230V at 50/60Hz and includes a pulse output at 1600 imp/kWh for external data logging and sub-metering systems. Long service life and high reliability make it a proven choice for residential sub-metering and light commercial energy monitoring. The DDS667 adds a backlit LCD for clear reading in low-light conditions such as enclosed distribution cabinets and basement meter rooms. An operation button enables manual data switching and reset, giving users direct control over the displayed parameter and consumption records. Available in 110V/60Hz and 230V/50Hz versions to cover North American and international grid standards. The DDS668 is the most capable model in the series, displaying the full parameter set: kWh, voltage, current, active power, power factor, and frequency. The backlit LCD supports both manual and automatic scrolling display modes, and a reset function allows flexible usage monitoring for rental billing, tenant sub-metering, and energy management applications. Certified for international power distribution systems.",
    "features": [
      "Available in three models: DDS662 (basic), DDS667 (backlit + button), DDS668 (full multi-parameter)",
      "Compatible with 110V/230V 50/60Hz — suitable for global power systems",
      "Rated current: 5(80)A — handles typical residential and light commercial loads",
      "35mm DIN rail mounting — standard distribution board installation",
      "DDS662: Wide-input LCD meter, kWh/V/I/W display, pulse output 1600 imp/kWh",
      "DDS667: Backlit LCD, manual data switching and reset button, 110V/60Hz or 230V/50Hz",
      "DDS668: Full parameter display — kWh, voltage, current, power, power factor, frequency",
      "DDS668: Manual and automatic scrolling display modes",
      "High accuracy, stable long-term performance",
      "Compact size, easy installation in distribution boxes",
      "Ideal for rental billing, tenant sub-metering, and energy management",
      "Meets international safety and performance standards"
    ],
    "specs": [
      [
        "Product Series",
        "DDS"
      ],
      [
        "Available Models",
        "DDS662 / DDS667 / DDS668"
      ],
      [
        "Installation Type",
        "35mm DIN Rail Mount"
      ],
      [
        "Phase",
        "Single-Phase"
      ],
      [
        "Rated Current",
        "5(80)A"
      ],
      [
        "Rated Voltage",
        "110V / 230V (50/60Hz)"
      ],
      [
        "DDS662 Display",
        "LCD — kWh, Voltage, Current, Power"
      ],
      [
        "DDS662 Special Feature",
        "Pulse Output: 1600 imp/kWh"
      ],
      [
        "DDS667 Display",
        "Backlit LCD — kWh, Voltage, Current, Power"
      ],
      [
        "DDS667 Special Feature",
        "Operation Button for Data Switching and Reset"
      ],
      [
        "DDS667 Versions",
        "110V/60Hz or 230V/50Hz"
      ],
      [
        "DDS668 Display",
        "Backlit LCD — kWh, Voltage, Current, Power, Power Factor, Frequency"
      ],
      [
        "DDS668 Special Feature",
        "Manual / Automatic Scrolling Display, Reset Function"
      ],
      [
        "Application",
        "Residential Sub-metering, Rental Billing, Tenant Electricity Monitoring, Light Industrial"
      ],
      [
        "Compliance",
        "Meets International Safety and Performance Standards"
      ]
    ]
  },
  "ADD": {
    "description": "When panel space is limited, every millimeter counts. The UPPROCURE ADD series energy meter fits into a single 18mm DIN rail slot — the same width as a standard 1P circuit breaker — making it the practical choice for dense distribution boards in apartments, rental properties, and small commercial premises where multiple meters need to fit in a compact enclosure. All models are rated 5(60)A, 230V (170–250V), Class 1 accuracy, 50/60Hz, and carry CE certification with flame-retardant high-insulation nylon housing. The Analog Display model uses a mechanical roller counter for kWh readings — no power required for the counting mechanism, ensuring stable, long-lasting performance even in circuits with frequent outages. A pulse constant of 800 imp/kWh makes it compatible with external data logging systems. The mechanical display is highly readable and maintenance-free, favored for long-term installations where simplicity and reliability are priorities. The Digital LCD Display model upgrades to a clear digital screen for precise kWh readings with a higher-resolution 1600 imp/kWh pulse constant. Top and bottom wiring support gives installers flexibility during panel layout. The compact digital format is well suited for residential sub-metering and rental billing where accurate numeric readings matter. The Digital Backlight LCD model adds a blue backlit display for easy reading in low-light conditions such as enclosed meter cabinets and basement distribution rooms. A red reset button allows flexible monitoring cycles for tenant turnover and billing resets. The 1600 imp/kWh pulse constant matches the digital LCD model. High-visibility readout makes it the preferred option where quick at-a-glance checks are routine.",
    "features": [
      "Ultra-narrow 18mm width — fits 1P DIN rail slot, ideal for dense panel layouts",
      "Class 1 accuracy, CE certified — reliable metering for residential and commercial billing",
      "Flame-retardant high-insulation nylon housing",
      "Rated 5(60)A, 230V (170–250V), 50/60Hz",
      "Analog Display: mechanical roller counter, no power needed, 800 imp/kWh pulse",
      "Digital LCD Display: clear digital kWh readout, 1600 imp/kWh, top/bottom wiring support",
      "Backlight LCD Display: blue backlit screen, red reset button, 1600 imp/kWh",
      "35mm DIN rail mounting — standard installation",
      "Suitable for residential, rental property, and small commercial metering"
    ],
    "specs": [
      [
        "Product Series",
        "ADD"
      ],
      [
        "Available Models",
        "Analog Display / Digital LCD / Digital Backlight LCD"
      ],
      [
        "Rated Voltage",
        "AC 230V (170–250V)"
      ],
      [
        "Rated Current",
        "5(60)A"
      ],
      [
        "Accuracy Class",
        "Class 1"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Width",
        "18mm (1P DIN Rail Module)"
      ],
      [
        "Installation",
        "35mm DIN Rail Mount"
      ],
      [
        "Housing Material",
        "Flame-Retardant High-Insulation Nylon"
      ],
      [
        "Analog Display Pulse Constant",
        "800 imp/kWh"
      ],
      [
        "Digital LCD Pulse Constant",
        "1600 imp/kWh"
      ],
      [
        "Backlight LCD Pulse Constant",
        "1600 imp/kWh"
      ],
      [
        "Backlight LCD Special Feature",
        "Blue Backlit Screen, Red Reset Button"
      ],
      [
        "Application",
        "Residential Sub-metering, Rental Property Billing, Small Commercial Premises"
      ],
      [
        "Certification",
        "CE"
      ]
    ]
  },
  "DDR": {
    "description": "Not every metering application requires energy consumption tracking. When the task is real-time monitoring of AC voltage, current, or frequency in a distribution cabinet — without the complexity of a full energy meter — the DDR series delivers exactly that in an ultra-slim 18mm DIN rail footprint. Five functional models let you specify precisely what the panel needs to display, from a 3-in-1 V+A+Hz combined meter to dedicated single-parameter instruments for voltage, current, or frequency. The bright red LED display is the defining feature of the DDR series — high-visibility digital readouts that remain easy to read in dim enclosures, industrial environments, and workshops where ambient light is limited. At 18mm wide and 81×66mm in profile, each unit occupies a single 1P DIN rail slot, making the DDR practical in crowded distribution boards where space is at a premium. The wide measurement range covers AC 80–500V voltage, 0–100A current, and 50/60Hz frequency — spanning single-phase and three-phase system monitoring. Measurement accuracy is ≤2% with a 1-sample-per-second refresh rate for stable real-time readings. The 3-channel current model is particularly useful for three-phase load balancing checks without a dedicated power analyzer. Rated insulation voltage 660V, IP20 protection, operating temperature range -50℃ to +55℃. Flame-retardant nylon housing, CE compliant. Note: not suitable for variable frequency drives, inverters, or high-harmonic environments.",
    "features": [
      "5 functional model configurations — V+A+Hz combined, 3-channel current, V+A, single voltage, single current, single frequency",
      "Bright red LED display — high visibility in dim enclosures and industrial environments",
      "Ultra-slim 18mm width — fits 1P DIN rail slot, saves space in crowded distribution boards",
      "Wide voltage range: AC 80–500V (covers single-phase and three-phase systems)",
      "Current range: 0–100A",
      "Frequency range: 50/60Hz",
      "≤2% measurement accuracy, 1 sample/second refresh rate",
      "Rated insulation voltage 660V, power consumption ≤2VA",
      "IP20 protection, operating temperature -50℃ to +55℃",
      "Flame-retardant nylon housing, CE compliant",
      "Not suitable for VFDs, inverters, or high-harmonic environments"
    ],
    "specs": [
      [
        "Product Series",
        "DDR"
      ],
      [
        "Available Models",
        "V+A+Hz (3-in-1) / 3-Channel Current / V+A / Single Voltage / Single Current / Single Frequency"
      ],
      [
        "Rated Voltage",
        "AC 80V–500V"
      ],
      [
        "Rated Current",
        "AC 0–100A (ammeter models)"
      ],
      [
        "Frequency Range",
        "AC 50–60Hz"
      ],
      [
        "Accuracy",
        "≤2% Error"
      ],
      [
        "Sampling Rate",
        "1 Time/Second"
      ],
      [
        "Display Type",
        "Red LED Digital Display"
      ],
      [
        "Rated Insulation Voltage",
        "660V"
      ],
      [
        "Power Consumption",
        "≤2VA"
      ],
      [
        "Width",
        "18mm (1P DIN Rail Module)"
      ],
      [
        "Dimensions",
        "18 × 81 × 66mm"
      ],
      [
        "Installation",
        "35mm DIN Rail Mount"
      ],
      [
        "Protection Degree",
        "IP20"
      ],
      [
        "Operating Temperature",
        "-50℃ ~ +55℃"
      ],
      [
        "Humidity",
        "1–80% (No Condensation)"
      ],
      [
        "Housing Material",
        "Flame-Retardant Nylon"
      ],
      [
        "Application",
        "Distribution Cabinets, Workshops, Commercial Panels, Three-Phase Load Monitoring"
      ],
      [
        "Certification",
        "CE"
      ]
    ]
  },
  "SOLT": {
    "description": "The UPPROCURE SOLT series brings remote control, energy monitoring, and electrical protection together in a single DIN rail circuit breaker that works with the Tuya and Smart Life app ecosystem. All three models connect to standard 2.4GHz WiFi and are compatible with Amazon Alexa and Google Assistant for voice control — making them a practical upgrade for smart home installations, rental property management, and commercial power automation without replacing existing distribution hardware. The SOLT-OF is the entry-level remote control model, adding WiFi on/off switching, timer scheduling, and relay last-status memory to any circuit. With over 100,000 rated mechanical operations, it is built for long-term, high-cycle applications such as lighting circuits, pump controls, and non-critical load automation where simple remote access is the primary requirement. The SOLT-M adds real-time energy monitoring to the remote control foundation — tracking voltage, current, active power, and cumulative kWh consumption through the app. Historical usage data and smart scheduling make it well suited for home energy management, solar system load control, and rental property sub-metering where understanding consumption patterns is as important as remote switching. The SOLT-MV is the most capable model, combining all SOLT-M metering functions with 4-in-1 electrical protection: over-voltage, under-voltage, over-current, and over-power, each with user-configurable trip thresholds set directly in the app. The auto-trip function protects sensitive electronics and high-power appliances from grid anomalies. Important notes: wiring must use L+N (top entry), not L+L. Not compatible with Home Assistant. 2.4GHz WiFi only; 5GHz not supported.",
    "features": [
      "SOLT-OF: Remote on/off, timer scheduling, relay last-status memory — basic smart control",
      "SOLT-M: All SOLT-OF functions + real-time voltage, current, power, and kWh monitoring",
      "SOLT-MV: All SOLT-M functions + over-voltage, under-voltage, over-current, over-power protection",
      "SOLT-MV: User-configurable protection thresholds via app — tailored safety for each installation",
      "Tuya / Smart Life app — remote control, scheduling, and energy data logging from anywhere",
      "Amazon Alexa and Google Assistant voice control",
      "2.4GHz WiFi connectivity — easy pairing with standard home networks",
      "35mm DIN rail mounting — installs in standard distribution boxes",
      "AC 90–300V, 1A–63A, 50/60Hz",
      "≥100,000 mechanical operations — long service life",
      "IP20 protection, flame-retardant housing",
      "Wiring: L+N top entry only (not L+L). Not compatible with Home Assistant."
    ],
    "specs": [
      [
        "Product Series",
        "SOLT"
      ],
      [
        "Available Models",
        "SOLT-OF (Remote Control) / SOLT-M (Metering) / SOLT-MV (Protection + Metering)"
      ],
      [
        "Rated Voltage",
        "AC 90–300V, 50/60Hz"
      ],
      [
        "Rated Current",
        "1A–63A"
      ],
      [
        "Wireless Standard",
        "WiFi 2.4GHz (5GHz Not Supported)"
      ],
      [
        "Compatible Apps",
        "Smart Life / Tuya"
      ],
      [
        "Voice Control",
        "Amazon Alexa, Google Assistant"
      ],
      [
        "SOLT-OF Functions",
        "Remote On/Off, Timer Scheduling, Last-Status Memory"
      ],
      [
        "SOLT-M Functions",
        "Remote Control + Voltage, Current, Power, kWh Monitoring"
      ],
      [
        "SOLT-MV Functions",
        "Full Metering + Over/Under Voltage, Over-Current, Over-Power Protection"
      ],
      [
        "SOLT-MV Protection Thresholds",
        "User-Configurable via App"
      ],
      [
        "Installation",
        "35mm DIN Rail Mount"
      ],
      [
        "Mechanical Life",
        "≥100,000 Operations"
      ],
      [
        "Protection Degree",
        "IP20"
      ],
      [
        "Application",
        "Smart Home Automation, Rental Property Management, Solar Load Control, Appliance Protection"
      ],
      [
        "Important Note",
        "L+N wiring only (top entry). Not compatible with Home Assistant. 2.4GHz WiFi only."
      ]
    ]
  },
  "SRP": {
    "description": "Standard smart breakers handle switching and basic monitoring. The UPPROCURE SRP goes further — it adds leakage (RCD) protection and auto-reclosing to the full smart circuit breaker feature set, making it the right choice for circuits where earth fault safety is a requirement alongside remote control and energy monitoring. Ten functions are integrated into one compact DIN rail unit: leakage protection, over-voltage, under-voltage, over-current, overload, and delay protection, plus real-time tracking of voltage, current, active power, cumulative kWh, frequency, and power factor. The 1.46\" TFT color display is a key differentiator — a high-definition wide-angle color screen mounted on the device itself shows all key electrical parameters at a glance without opening the app, useful during installation, commissioning, and routine panel inspections in low-light conditions. The auto-reclosing function allows the device to automatically attempt power restoration after a fault trip — configurable for circuits where brief outages are acceptable and manual reset call-outs should be minimized. WiFi connectivity runs on Tuya/Smart Life for remote on/off, timer scheduling, and energy data access from anywhere. Amazon Alexa and Google Assistant voice control is supported. Rated 0.1A–63A adjustable, AC 80–300V (110V/220V) 50/60Hz. Mechanical life of 1,000,000 operations and electrical life of 100,000 operations — significantly higher than standard smart breakers. IP20, operating temperature -10℃ to +60℃, indoor AC use only. Requires 2.4GHz WiFi; 5GHz not supported.",
    "features": [
      "Leakage (RCD) protection — earth fault safety for kitchens, bathrooms, and wet-area circuits",
      "Auto-reclosing — automatically attempts power restoration after fault trip (configurable)",
      "10-in-1: leakage, over/under voltage, over-current, overload, delay protection + V/I/W/kWh/Hz/PF monitoring",
      "1.46\" TFT color display — full parameter readout on-device without opening the app",
      "Tuya / Smart Life app — remote on/off, scheduling, energy data from anywhere",
      "Amazon Alexa and Google Assistant voice control",
      "Adjustable rated current: 0.1A–63A",
      "AC 80–300V (110V/220V), 50/60Hz",
      "Mechanical life: 1,000,000 operations — 10× higher than standard smart breakers",
      "Electrical life: 100,000 operations",
      "35mm DIN rail mounting, IP20, -10℃ to +60℃",
      "2.4GHz WiFi only. Indoor AC use only. L+N wiring, power from top."
    ],
    "specs": [
      [
        "Product Model",
        "SRP"
      ],
      [
        "Product Type",
        "Tuya WiFi Smart Reclosing Leakage Protector with Energy Metering"
      ],
      [
        "Operating Voltage",
        "AC 80–300V (110V/220V)"
      ],
      [
        "Rated Current",
        "0.1A–63A (Adjustable)"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Display",
        "1.46\" TFT Color Screen"
      ],
      [
        "Protection Functions",
        "Leakage, Over-Voltage, Under-Voltage, Over-Current, Overload, Delay"
      ],
      [
        "Monitoring Parameters",
        "Voltage, Current, Power (W), Energy (kWh), Frequency, Power Factor"
      ],
      [
        "Auto-Reclosing",
        "Yes (Configurable)"
      ],
      [
        "Control Methods",
        "WiFi App, Voice Control, Local Button"
      ],
      [
        "Compatible Apps",
        "Smart Life / Tuya"
      ],
      [
        "Voice Control",
        "Amazon Alexa, Google Assistant"
      ],
      [
        "WiFi Standard",
        "2.4GHz Only (5GHz Not Supported)"
      ],
      [
        "Installation",
        "35mm DIN Rail Mount"
      ],
      [
        "Mechanical Life",
        "1,000,000 Operations"
      ],
      [
        "Electrical Life",
        "100,000 Operations"
      ],
      [
        "Protection Level",
        "IP20"
      ],
      [
        "Operating Temperature",
        "-10℃ ~ +60℃"
      ],
      [
        "Application",
        "Homes, Offices, Warehouses, Wet-Area Circuits, Small Industrial Environments"
      ],
      [
        "Important Note",
        "Indoor AC use only. L+N wiring, power from top. 2.4GHz WiFi only."
      ]
    ]
  },
  "SRP-L": {
    "description": "The UPPROCURE SRP-L delivers the same 10-in-1 smart protection and energy metering platform as the SRP series, with one key design difference: a prominent raised physical button built for fast, direct local operation. In workshops, industrial panels, rental property meter rooms, and outdoor distribution cabinets where reaching for a phone is inconvenient — or where a quick manual trip and reset needs to happen immediately — the raised button provides tactile, one-press control that can be operated with work gloves on or in low-visibility conditions. This makes the SRP-L the preferred choice in environments where local hands-on access is part of the daily workflow, rather than installations where all control happens remotely through the app. The WiFi remote control, Tuya/Smart Life app integration, and Alexa/Google Assistant voice commands are all present — the SRP-L simply adds a more physically accessible local override for situations where the app is not the fastest path to control. All protection and monitoring functions are identical: leakage (RCD) protection, over-voltage, under-voltage, over-current, overload, and delay protection, plus real-time tracking of voltage, current, active power, kWh, frequency, and power factor on the 1.46\" TFT color display. Auto-reclosing is configurable. Rated 0.1A–63A adjustable, AC 80–300V (110V/220V) 50/60Hz. Mechanical life 1,000,000 operations. Indoor AC use only, L+N wiring top entry, 2.4GHz WiFi only.",
    "features": [
      "Prominent raised physical button — fast local manual operation without app, works with gloves",
      "Leakage (RCD) protection — earth fault safety for wet-area and industrial circuits",
      "Auto-reclosing — automatically attempts power restoration after fault trip (configurable)",
      "10-in-1: leakage, over/under voltage, over-current, overload, delay + V/I/W/kWh/Hz/PF monitoring",
      "1.46\" TFT color display — full parameter readout on-device",
      "Tuya / Smart Life app — remote on/off, scheduling, energy data from anywhere",
      "Amazon Alexa and Google Assistant voice control",
      "Adjustable rated current: 0.1A–63A",
      "AC 80–300V (110V/220V), 50/60Hz",
      "Mechanical life: 1,000,000 operations",
      "35mm DIN rail mounting, IP20, -10℃ to +60℃",
      "2.4GHz WiFi only. Indoor AC use only. L+N wiring, power from top."
    ],
    "specs": [
      [
        "Product Model",
        "SRP-L"
      ],
      [
        "Product Type",
        "Tuya WiFi Smart Reclosing Leakage Protector with Prominent Physical Button"
      ],
      [
        "Physical Button",
        "Prominent Raised Button — Direct Local Manual Operation"
      ],
      [
        "Operating Voltage",
        "AC 80–300V (110V/220V)"
      ],
      [
        "Rated Current",
        "0.1A–63A (Adjustable)"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Display",
        "1.46\" TFT Color Screen"
      ],
      [
        "Protection Functions",
        "Leakage, Over-Voltage, Under-Voltage, Over-Current, Overload, Delay"
      ],
      [
        "Monitoring Parameters",
        "Voltage, Current, Power (W), Energy (kWh), Frequency, Power Factor"
      ],
      [
        "Auto-Reclosing",
        "Yes (Configurable)"
      ],
      [
        "Control Methods",
        "Raised Physical Button, WiFi App, Voice Control"
      ],
      [
        "Compatible Apps",
        "Smart Life / Tuya"
      ],
      [
        "Voice Control",
        "Amazon Alexa, Google Assistant"
      ],
      [
        "WiFi Standard",
        "2.4GHz Only (5GHz Not Supported)"
      ],
      [
        "Installation",
        "35mm DIN Rail Mount"
      ],
      [
        "Mechanical Life",
        "1,000,000 Operations"
      ],
      [
        "Electrical Life",
        "100,000 Operations"
      ],
      [
        "Protection Level",
        "IP20"
      ],
      [
        "Operating Temperature",
        "-10℃ ~ +60℃"
      ],
      [
        "Application",
        "Workshops, Industrial Panels, Outdoor Cabinets, Rental Property Meter Rooms"
      ],
      [
        "Important Note",
        "Indoor AC use only. L+N wiring, power from top. 2.4GHz WiFi only."
      ]
    ]
  },
  "HT-8Way-2in1out-600VDC": {
    "description": "The HT-8Way-2in1out-600VDC is a 2-string PV combiner box engineered to aggregate and protect solar array outputs before they reach the inverter. It integrates a 63A DC circuit breaker for overload and short-circuit protection, 4×15A PV fuses for independent per-pole string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. Housed in a hard, flame-retardant plastic enclosure with IP65 ingress protection, it is built for outdoor installation on both on-grid and off-grid PV systems – residential rooftops, commercial arrays and small utility sites alike.",
    "features": [
      "2-string PV input, 1 output configuration",
      "63A DC circuit breaker for overload and short-circuit protection",
      "4 × 15A PV fuses for independent per-pole string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HT-8Way-2in1out-600VDC"
      ],
      [
        "PV String Inputs",
        "2"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "Max System Voltage",
        "600V DC"
      ],
      [
        "DC Circuit Breaker",
        "63A"
      ],
      [
        "PV Fuse Rating",
        "15A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HT-8Way-1in1out-600VDC": {
    "description": "The HT-8Way-1in1out-600VDC is a compact 1-string PV combiner box designed to protect and consolidate a single solar string before it reaches the inverter. It integrates a 63A DC circuit breaker for overload and short-circuit protection, 2×15A PV fuses for independent per-pole protection, and a 500V DC surge protection device rated at 40kA max discharge current to shield the system from lightning-induced transients. The hard, flame-retardant plastic housing is rated IP65 – fully sealed against dust and water – making it ideal for outdoor installation on both on-grid and off-grid PV systems.",
    "features": [
      "1-string PV input, 1 output configuration",
      "63A DC circuit breaker for overload and short-circuit protection",
      "2 × 15A PV fuses for independent per-pole protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HT-8Way-1in1out-600VDC"
      ],
      [
        "PV String Inputs",
        "1"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "Max System Voltage",
        "600V DC"
      ],
      [
        "DC Circuit Breaker",
        "63A"
      ],
      [
        "PV Fuse Rating",
        "15A (2 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-8Way-2in1out-500VDC-32A-15AFUSE": {
    "description": "The HA-8Way-2in1out-500VDC-32A-15AFUSE is a 2-string PV combiner box designed to aggregate and protect solar array outputs before they reach the inverter. It integrates a 32A DC circuit breaker for overload and short-circuit protection, 4×15A PV fuses for independent per-pole string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. Housed in a hard, flame-retardant plastic enclosure with IP65 ingress protection, it is built for outdoor installation on both on-grid and off-grid PV systems – residential rooftops, commercial arrays and small utility sites alike.",
    "features": [
      "2-string PV input, 1 output configuration",
      "32A DC circuit breaker for overload and short-circuit protection",
      "4 × 15A PV fuses for individual per-pole string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-8Way-2in1out-500VDC-32A-15AFUSE"
      ],
      [
        "PV String Inputs",
        "2"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "Max System Voltage",
        "500V DC"
      ],
      [
        "DC Circuit Breaker",
        "32A"
      ],
      [
        "PV Fuse Rating",
        "15A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-8Way-2in1out-500VDC-40A-20AFUSE": {
    "description": "The HA-8Way-2in1out-500VDC-40A-20AFUSE is a 2-string PV combiner box designed to aggregate and protect solar array outputs before they reach the inverter. It integrates a 40A DC circuit breaker for overload and short-circuit protection, 4×20A PV fuses for independent per-pole string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. Housed in a hard, flame-retardant plastic enclosure with IP65 ingress protection, it is built for outdoor installation on both on-grid and off-grid PV systems – residential rooftops, commercial arrays and small utility sites alike.",
    "features": [
      "2-string PV input, 1 output configuration",
      "40A DC circuit breaker for overload and short-circuit protection",
      "4 × 20A PV fuses for individual per-pole string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-8Way-2in1out-500VDC-40A-20AFUSE"
      ],
      [
        "PV String Inputs",
        "2"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "Max System Voltage",
        "500V DC"
      ],
      [
        "DC Circuit Breaker",
        "40A"
      ],
      [
        "PV Fuse Rating",
        "20A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-8Way-2in1out-500VDC-63A-30AFUSE": {
    "description": "The HA-8Way-2in1out-500VDC-63A-30AFUSE is a 2-string PV combiner box designed to aggregate and protect solar array outputs before they reach the inverter. It integrates a 63A DC circuit breaker for overload and short-circuit protection, 4×30A PV fuses for independent per-pole string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. Housed in a hard, flame-retardant plastic enclosure with IP65 ingress protection, it is built for outdoor installation on both on-grid and off-grid PV systems – residential rooftops, commercial arrays and small utility sites alike.",
    "features": [
      "2-string PV input, 1 output configuration",
      "63A DC circuit breaker for overload and short-circuit protection",
      "4 × 30A PV fuses for individual per-pole string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-8Way-2in1out-500VDC-63A-30AFUSE"
      ],
      [
        "PV String Inputs",
        "2"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "Max System Voltage",
        "500V DC"
      ],
      [
        "DC Circuit Breaker",
        "63A"
      ],
      [
        "PV Fuse Rating",
        "30A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-12Way-2in2out-500VDC-32A-15AFUSE": {
    "description": "The HA-12Way-2in2out-500VDC-32A-15AFUSE is a 2-string input, 2-output PV combiner box that allows a single combiner to feed two independent inverter channels. It integrates a 32A DC circuit breaker for overload and short-circuit protection, 4×15A PV fuses for independent per-pole string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. Housed in a hard, flame-retardant plastic enclosure with IP65 ingress protection, it is built for outdoor installation on both on-grid and off-grid PV systems.",
    "features": [
      "2-string PV input, 2 output configuration",
      "32A DC circuit breaker for overload and short-circuit protection",
      "4 × 15A PV fuses for individual per-pole string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-12Way-2in2out-500VDC-32A-15AFUSE"
      ],
      [
        "PV String Inputs",
        "2"
      ],
      [
        "Outputs",
        "2"
      ],
      [
        "Max System Voltage",
        "500V DC"
      ],
      [
        "DC Circuit Breaker",
        "32A"
      ],
      [
        "PV Fuse Rating",
        "15A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-12Way-2in2out-500VDC-40A-20AFUSE": {
    "description": "The HA-12Way-2in2out-500VDC-40A-20AFUSE is a 2-string input, 2-output PV combiner box that allows a single combiner to feed two independent inverter channels. It integrates a 40A DC circuit breaker for overload and short-circuit protection, 4×20A PV fuses for independent per-pole string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. Housed in a hard, flame-retardant plastic enclosure with IP65 ingress protection, it is built for outdoor installation on both on-grid and off-grid PV systems.",
    "features": [
      "2-string PV input, 2 output configuration",
      "40A DC circuit breaker for overload and short-circuit protection",
      "4 × 20A PV fuses for individual per-pole string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-12Way-2in2out-500VDC-40A-20AFUSE"
      ],
      [
        "PV String Inputs",
        "2"
      ],
      [
        "Outputs",
        "2"
      ],
      [
        "Max System Voltage",
        "500V DC"
      ],
      [
        "DC Circuit Breaker",
        "40A"
      ],
      [
        "PV Fuse Rating",
        "20A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-12Way-2in2out-500VDC-63A-30AFUSE": {
    "description": "The HA-12Way-2in2out-500VDC-63A-30AFUSE is a 2-string input, 2-output PV combiner box that allows a single combiner to feed two independent inverter channels. It integrates a 63A DC circuit breaker for overload and short-circuit protection, 4×30A PV fuses for independent per-pole string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. Housed in a hard, flame-retardant plastic enclosure with IP65 ingress protection, it is built for outdoor installation on both on-grid and off-grid PV systems.",
    "features": [
      "2-string PV input, 2 output configuration",
      "63A DC circuit breaker for overload and short-circuit protection",
      "4 × 30A PV fuses for individual per-pole string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-12Way-2in2out-500VDC-63A-30AFUSE"
      ],
      [
        "PV String Inputs",
        "2"
      ],
      [
        "Outputs",
        "2"
      ],
      [
        "Max System Voltage",
        "500V DC"
      ],
      [
        "DC Circuit Breaker",
        "63A"
      ],
      [
        "PV Fuse Rating",
        "30A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-4Way-500VDC-32A": {
    "description": "The HA-4Way-500VDC-32A is a compact 1-string PV combiner box designed to protect a single solar string before it reaches the inverter. It integrates a 32A DC circuit breaker for overload and short-circuit protection and a 500V DC surge protection device rated at 40kA max discharge current to shield the system from lightning-induced transients. Housed in a hard, flame-retardant plastic enclosure with IP65 ingress protection, it is built for outdoor installation on both on-grid and off-grid PV systems.",
    "features": [
      "1-string PV input, 1 output configuration",
      "32A DC circuit breaker for overload and short-circuit protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-4Way-500VDC-32A"
      ],
      [
        "PV String Inputs",
        "1"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "Max System Voltage",
        "500V DC"
      ],
      [
        "DC Circuit Breaker",
        "32A"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-4Way-500VDC-40A": {
    "description": "The HA-4Way-500VDC-40A is a compact 1-string PV combiner box designed to protect a single solar string before it reaches the inverter. It integrates a 40A DC circuit breaker for overload and short-circuit protection and a 500V DC surge protection device rated at 40kA max discharge current to shield the system from lightning-induced transients. Housed in a hard, flame-retardant plastic enclosure with IP65 ingress protection, it is built for outdoor installation on both on-grid and off-grid PV systems.",
    "features": [
      "1-string PV input, 1 output configuration",
      "40A DC circuit breaker for overload and short-circuit protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-4Way-500VDC-40A"
      ],
      [
        "PV String Inputs",
        "1"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "Max System Voltage",
        "500V DC"
      ],
      [
        "DC Circuit Breaker",
        "40A"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-8Way-1in1out-1000VDC-DS": {
    "description": "The HA-8Way-1in1out-1000VDC-DS is a 1-string, 1-output PV combiner box built around a 32A / 1200V DC isolator switch, providing safe on-site load-break disconnection for installation and maintenance. It integrates 2×15A PV fuses for independent per-pole protection and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. The hard, flame-retardant plastic enclosure is IP65-rated, making it suitable for outdoor installation on both on-grid and off-grid PV systems rated up to 1000V DC.",
    "features": [
      "1-string PV input, 1 output configuration",
      "32A / 1200V DC isolator switch for safe manual disconnection",
      "2 × 15A PV fuses for individual per-pole protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Supports 1000V DC PV systems (on-grid / off-grid)"
    ],
    "specs": [
      [
        "Model",
        "HA-8Way-1in1out-1000VDC-DS"
      ],
      [
        "PV String Inputs",
        "1"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "Max System Voltage",
        "1000V DC"
      ],
      [
        "DC Isolator Switch",
        "32A, 1200V DC"
      ],
      [
        "PV Fuse Rating",
        "15A (2 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-12way-2in1out-1000VDC-DS": {
    "description": "The HA-12way-2in1out-1000VDC-DS is a 2-string, 1-output PV combiner box built around a 32A / 1200V DC isolator switch, providing safe on-site load-break disconnection for installation and maintenance. It integrates 4×15A PV fuses for independent per-pole string protection and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. The hard, flame-retardant plastic enclosure is IP65-rated, making it suitable for outdoor installation on both on-grid and off-grid PV systems rated up to 1000V DC.",
    "features": [
      "2-string PV input, 1 output configuration",
      "32A / 1200V DC isolator switch for safe manual disconnection",
      "4 × 15A PV fuses for individual per-pole string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Supports 1000V DC PV systems (on-grid / off-grid)"
    ],
    "specs": [
      [
        "Model",
        "HA-12way-2in1out-1000VDC-DS"
      ],
      [
        "PV String Inputs",
        "2"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "Max System Voltage",
        "1000V DC"
      ],
      [
        "DC Isolator Switch",
        "32A, 1200V DC"
      ],
      [
        "PV Fuse Rating",
        "15A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-8Way-2DCB-2SPD": {
    "description": "The HA-8Way-2DCB-2SPD is a 1-string, 1-output PV combiner box engineered with redundant protection. It integrates two 32A DC circuit breakers for overload and short-circuit protection and two 500V DC surge protection devices, each rated at 40kA max discharge current, for enhanced defence against lightning-induced transients. Housed in a hard, flame-retardant plastic enclosure with IP65 ingress protection, it is built for outdoor installation on both on-grid and off-grid PV systems where extra redundancy or bipolar protection is required.",
    "features": [
      "1-string PV input, 1 output configuration",
      "Dual 32A DC circuit breakers for redundant overload and short-circuit protection",
      "Dual 500V DC SPDs, each with 40kA maximum discharge current",
      "Flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-8Way-2DCB-2SPD"
      ],
      [
        "PV String Inputs",
        "1"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "DC Circuit Breaker",
        "32A (2 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA (2 pcs)"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-4Way-1DCB-1SPD-White": {
    "description": "The HA-4Way-1DCB-1SPD-White is a compact 1-string, 1-output PV combiner box finished in a white, flame-retardant plastic enclosure for installations where a clean, low-profile appearance is preferred. It integrates a 40A DC circuit breaker for overload and short-circuit protection and a 500V DC surge protection device rated at 40kA max discharge current to shield the system from lightning-induced transients. Rated IP65 against dust and water, it is built for outdoor installation on both on-grid and off-grid PV systems.",
    "features": [
      "1-string PV input, 1 output configuration",
      "1 × 40A DC circuit breaker for overload and short-circuit protection",
      "1 × 500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "White flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-4Way-1DCB-1SPD-White"
      ],
      [
        "PV String Inputs",
        "1"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "DC Circuit Breaker",
        "40A"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic (white)"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-8Way-2DCB-2SPD-White": {
    "description": "The HA-8Way-2DCB-2SPD-White is a 1-string, 1-output PV combiner box in a white, flame-retardant plastic enclosure, engineered with redundant protection. It integrates two 40A DC circuit breakers for overload and short-circuit protection and two 500V DC surge protection devices, each rated at 40kA max discharge current, for enhanced defence against lightning-induced transients. Rated IP65 against dust and water, it is built for outdoor installation on both on-grid and off-grid PV systems where extra redundancy or bipolar protection is required.",
    "features": [
      "1-string PV input, 1 output configuration",
      "Dual 40A DC circuit breakers for redundant overload and short-circuit protection",
      "Dual 500V DC SPDs, each with 40kA maximum discharge current",
      "White flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-8Way-2DCB-2SPD-White"
      ],
      [
        "PV String Inputs",
        "1"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "DC Circuit Breaker",
        "40A (2 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA (2 pcs)"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic (white)"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "HA-18Way-4DCB-4SPD-White": {
    "description": "The HA-18Way-4DCB-4SPD-White is a 1-string, 1-output PV combiner box in a white, flame-retardant plastic enclosure, built for installations that demand high-redundancy protection. It integrates four 40A DC circuit breakers for overload and short-circuit protection and four 500V DC surge protection devices, each rated at 40kA max discharge current, for multi-stage defence against lightning-induced transients. Rated IP65 against dust and water, it is built for outdoor installation on both on-grid and off-grid PV systems.",
    "features": [
      "1-string PV input, 1 output configuration",
      "4 × 40A DC circuit breakers for high-redundancy overload and short-circuit protection",
      "4 × 500V DC SPDs, each with 40kA maximum discharge current",
      "White flame-retardant hard plastic housing",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "HA-18Way-4DCB-4SPD-White"
      ],
      [
        "PV String Inputs",
        "1"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "DC Circuit Breaker",
        "40A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA (4 pcs)"
      ],
      [
        "Housing Material",
        "Flame-retardant hard plastic (white)"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "PCB-M6in-01": {
    "description": "The PCB-M6in-01 is a 6-input PV combiner box designed for commercial solar arrays where multiple strings must be aggregated into a single feed. It integrates a 100A DC circuit breaker for overload and short-circuit protection, 6×15A PV fuses for independent per-string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. The rugged cold-rolled steel enclosure is rated IP65 against dust and water and is equipped with a built-in radiator for stable operation under continuous load. Suitable for outdoor installation on both on-grid and off-grid PV systems.",
    "features": [
      "6 PV array inputs, 1 output configuration",
      "100A DC circuit breaker for overload and short-circuit protection",
      "6 × 15A PV fuses for independent per-string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Heavy-duty cold-rolled steel enclosure",
      "Built-in radiator for stable thermal performance under continuous load",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both on-grid and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "PCB-M6in-01"
      ],
      [
        "PV Array Inputs",
        "6"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "DC Circuit Breaker",
        "100A"
      ],
      [
        "PV Fuse Rating",
        "15A (6 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Cold-rolled steel"
      ],
      [
        "Cooling",
        "Built-in radiator"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "On-grid / Off-grid PV systems"
      ]
    ]
  },
  "PCB-M4in-02": {
    "description": "The PCB-M4in-02 is a 4-input PV combiner box designed for commercial solar arrays where security and ruggedness are priorities. It integrates a 63A DC circuit breaker for overload and short-circuit protection, 4×20A PV fuses for independent per-string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. The robust steel enclosure offers high impact resistance, is rated IP65 against dust and water, and ships with a safety lock and key to prevent unauthorized access. Suitable for outdoor installation on both grid-tied and off-grid PV systems.",
    "features": [
      "4 PV array inputs, 1 output configuration",
      "63A DC circuit breaker for overload and short-circuit protection",
      "4 × 20A PV fuses for independent per-string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Robust steel enclosure with high impact resistance",
      "Integrated safety lock and key for tamper prevention",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both grid-tied and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "PCB-M4in-02"
      ],
      [
        "PV Array Inputs",
        "4"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "DC Circuit Breaker",
        "63A"
      ],
      [
        "PV Fuse Rating",
        "20A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Robust steel (high impact resistance)"
      ],
      [
        "Security",
        "Safety lock & key"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "Grid-tied / Off-grid PV systems"
      ]
    ]
  },
  "PCB-M6in-03": {
    "description": "The PCB-M6in-03 is a 6-input PV combiner box designed for commercial solar arrays where security and ruggedness are priorities. It integrates a 63A DC circuit breaker for overload and short-circuit protection, 6×20A PV fuses for independent per-string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. The robust steel enclosure offers high impact resistance, is rated IP65 against dust and water, and ships with a safety lock and key to prevent unauthorized access. Suitable for outdoor installation on both grid-tied and off-grid PV systems.",
    "features": [
      "6 PV array inputs, 1 output configuration",
      "63A DC circuit breaker for overload and short-circuit protection",
      "6 × 20A PV fuses for independent per-string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Robust steel enclosure with high impact resistance",
      "Integrated safety lock and key for tamper prevention",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both grid-tied and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "PCB-M6in-03"
      ],
      [
        "PV Array Inputs",
        "6"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "DC Circuit Breaker",
        "63A"
      ],
      [
        "PV Fuse Rating",
        "20A (6 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Robust steel (high impact resistance)"
      ],
      [
        "Security",
        "Safety lock & key"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "Grid-tied / Off-grid PV systems"
      ]
    ]
  },
  "PCB-M4in-04": {
    "description": "The PCB-M4in-04 is a 4-input PV combiner box designed for commercial solar arrays where security and ruggedness are priorities. It integrates a 63A DC circuit breaker for overload and short-circuit protection, 4×15A PV fuses for independent per-string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. The robust steel enclosure offers high impact resistance, is rated IP65 against dust and water, and ships with a safety lock and key to prevent unauthorized access. Suitable for outdoor installation on both grid-tied and off-grid PV systems.",
    "features": [
      "4 PV array inputs, 1 output configuration",
      "63A DC circuit breaker for overload and short-circuit protection",
      "4 × 15A PV fuses for independent per-string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Robust steel enclosure with high impact resistance",
      "Integrated safety lock and key for tamper prevention",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both grid-tied and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "PCB-M4in-04"
      ],
      [
        "PV Array Inputs",
        "4"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "DC Circuit Breaker",
        "63A"
      ],
      [
        "PV Fuse Rating",
        "15A (4 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Robust steel (high impact resistance)"
      ],
      [
        "Security",
        "Safety lock & key"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "Grid-tied / Off-grid PV systems"
      ]
    ]
  },
  "PCB-M6in-05": {
    "description": "The PCB-M6in-05 is a 6-input PV combiner box built for higher-current commercial and small utility solar arrays. It integrates a 125A DC circuit breaker for overload and short-circuit protection, 6×15A PV fuses for independent per-string protection, and a 500V DC surge protection device rated at 40kA max discharge current to defend the system against lightning-induced transients. The robust steel enclosure offers high impact resistance, is rated IP65 against dust and water, and ships with a safety lock and key to prevent unauthorized access. Suitable for outdoor installation on both grid-tied and off-grid PV systems.",
    "features": [
      "6 PV array inputs, 1 output configuration",
      "125A DC circuit breaker for higher-current overload and short-circuit protection",
      "6 × 15A PV fuses for independent per-string protection",
      "500V DC SPD with 40kA maximum discharge current (lightning protection)",
      "Robust steel enclosure with high impact resistance",
      "Integrated safety lock and key for tamper prevention",
      "IP65 waterproof and dustproof – suitable for outdoor installation",
      "Compatible with both grid-tied and off-grid PV systems"
    ],
    "specs": [
      [
        "Model",
        "PCB-M6in-05"
      ],
      [
        "PV Array Inputs",
        "6"
      ],
      [
        "Outputs",
        "1"
      ],
      [
        "DC Circuit Breaker",
        "125A"
      ],
      [
        "PV Fuse Rating",
        "15A (6 pcs)"
      ],
      [
        "Surge Protection (SPD)",
        "500V DC, 40kA max discharge current"
      ],
      [
        "Housing Material",
        "Robust steel (high impact resistance)"
      ],
      [
        "Security",
        "Safety lock & key"
      ],
      [
        "Protection Level",
        "IP65 (waterproof & dustproof)"
      ],
      [
        "Installation",
        "Outdoor"
      ],
      [
        "Applicable Systems",
        "Grid-tied / Off-grid PV systems"
      ]
    ]
  },
  "ATS-ST-2P-63A-220V-110V": {
    "description": "The ATS-ST-2P-63A is a PC class (load level) automatic transfer switch designed for single-phase 110V or 220V AC systems up to 63A. With a rapid 50ms transfer time, it seamlessly switches between mains power and a backup source (inverter or generator) when a fault is detected, keeping connected loads running with minimal interruption. The 2-pole design switches both Live and Neutral simultaneously, ensuring complete isolation of the backup source. Built-in over-voltage and under-voltage protection monitors the supply continuously – for 110V systems the thresholds are 85V – 145V, and for 220V systems 175V – 260V. Supports both automatic and manual switching modes with Source I (Mains) set as the priority, automatically returning to mains once power is restored. The motor-driven mechanism is housed in a PA6 flame-retardant enclosure for reliable long-term operation.",
    "features": [
      "2-pole switching (Live + Neutral) – 2 inputs / 1 output",
      "PC class (load level) – handles full rated load continuously",
      "Fast 50ms (0.05s) transfer time – minimal load interruption",
      "Dual voltage: supports both 110V and 220V AC",
      "Auto & manual transfer modes; returns to mains automatically",
      "Over-voltage & under-voltage protection (110V: 85V – 145V; 220V: 175V – 260V)",
      "Compatible with mains, inverter, and generator sources",
      "PA6 flame-retardant housing with motor-driven mechanism"
    ],
    "specs": [
      [
        "Poles",
        "2P (Live + Neutral)"
      ],
      [
        "Rated Current",
        "63A (Operating Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Single Phase"
      ],
      [
        "Type",
        "PC Class (Load Level)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Source I (Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Inverter, Generator"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Transfer Time",
        "–.05s (50ms)"
      ],
      [
        "Over-voltage Protection",
        "145V (110V mode) / 260V (220V mode)"
      ],
      [
        "Under-voltage Protection",
        "85V (110V mode) / 175V (220V mode)"
      ],
      [
        "Housing",
        "PA6 Flame-retardant"
      ],
      [
        "Applications",
        "Home Emergency Backup, RV"
      ]
    ]
  },
  "ATS-ST-4P-63A-220V-110V": {
    "description": "The ATS-ST-4P-63A is a PC class (load level) automatic transfer switch for three-phase systems with neutral (3L+N), rated at 63A and supporting both 110V and 220V AC. All four poles – three phases and neutral – switch simultaneously in 50ms, ensuring complete source isolation and preventing any backfeed between the two supplies. When mains power fails, the unit instantly transfers the load to the backup source (inverter or generator); once mains is restored, it automatically reverts to Source I priority. Built-in voltage monitoring provides over-voltage and under-voltage protection across both voltage settings: for 110V systems the thresholds are 85V – 145V, and for 220V systems 175V – 260V. The motor-driven switching mechanism enclosed in a PA6 flame-retardant housing ensures reliable and safe operation in demanding commercial environments such as hospitals, cold-storage facilities, and data centers.",
    "features": [
      "4-pole switching (3 Lines + Neutral simultaneously) – 2 inputs / 1 output",
      "PC class (load level) – handles full rated load continuously",
      "Fast 50ms (0.05s) transfer time – critical load interruption under 50ms",
      "Dual voltage: supports both 110V and 220V AC three-phase systems",
      "Auto & manual transfer modes; automatically returns to mains priority",
      "Over-voltage & under-voltage protection (110V: 85V – 145V; 220V: 175V – 260V)",
      "Compatible with mains, inverter, and generator power sources",
      "PA6 flame-retardant housing with motor-driven mechanism for long service life"
    ],
    "specs": [
      [
        "Poles",
        "4P (3 Lines + Neutral)"
      ],
      [
        "Rated Current",
        "63A (Operating Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Three-Phase with Neutral"
      ],
      [
        "Type",
        "PC Class (Load Level)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Source I (Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Inverter, Generator"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Transfer Time",
        "–.05s (50ms)"
      ],
      [
        "Over-voltage Protection",
        "145V (110V mode) / 260V (220V mode)"
      ],
      [
        "Under-voltage Protection",
        "85V (110V mode) / 175V (220V mode)"
      ],
      [
        "Housing",
        "PA6 Flame-retardant"
      ],
      [
        "Applications",
        "Hospitals, Cold Storage, Data Centers"
      ]
    ]
  },
  "ATS-W2R-2P-220V-110V": {
    "description": "The ATS-W2R-2P is a PC class (load level) automatic transfer switch for single-phase 110V or 220V AC systems up to 63A. With a 50ms transfer time, it switches seamlessly between Source A (mains priority) and a backup supply – whether a generator or PV inverter – whenever a mains fault is detected, ensuring connected loads experience less than 50ms of interruption. The 2-pole design switches both Live and Neutral simultaneously, fully isolating the two sources and preventing any backfeed. Once mains power is restored, the unit automatically reverts to Source A priority. Built on a motor-driven mechanism with a PA6 flame-retardant housing, the W2R series delivers reliable automatic transfer performance for home emergency backup systems, RV setups, and off-grid solar PV applications.",
    "features": [
      "2-pole switching (Live + Neutral) – 2 inputs / 1 output",
      "PC class (load level) – handles full rated load continuously",
      "Fast 50ms (0.05s) transfer time – load interruption under 50ms",
      "Dual voltage: supports both 110V and 220V AC single-phase",
      "Auto & manual transfer modes; returns to Source A (mains) automatically",
      "Compatible with mains, generator, and PV inverter sources",
      "PA6 flame-retardant housing with motor-driven mechanism",
      "Suitable for home emergency backup, RV, and off-grid solar systems"
    ],
    "specs": [
      [
        "Poles",
        "2P (Live + Neutral)"
      ],
      [
        "Rated Current",
        "63A (Operating Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Single Phase"
      ],
      [
        "Type",
        "PC Class (Load Level)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Source A (Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Generator, PV Inverter"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Transfer Time",
        "–.05s (50ms)"
      ],
      [
        "Housing",
        "PA6 Flame-retardant"
      ],
      [
        "Applications",
        "Home Emergency Backup, RV"
      ]
    ]
  },
  "ATS-W2R-3P-220V-110V": {
    "description": "The ATS-W2R-3P is a PC class (load level) automatic transfer switch for three-phase systems without neutral (3L only), rated at 63A and supporting both 110V and 220V AC. All three line poles switch simultaneously in 50ms, providing complete source isolation and preventing backfeed between mains and the backup supply. When Source A (mains) fails, the unit instantly transfers the load to a generator or PV inverter; once mains is restored, it automatically reverts to Source A priority without manual intervention. Supports both automatic and manual switching modes to suit different installation requirements. Built on a motor-driven mechanism housed in a PA6 flame-retardant enclosure, the W2R-3P is engineered for reliable continuous operation in demanding commercial environments – hospitals, cold-storage facilities, data centers, and industrial equipment requiring uninterrupted three-phase power.",
    "features": [
      "3-pole switching (3 Lines simultaneously, no neutral) – 2 inputs / 1 output",
      "PC class (load level) – handles full rated load continuously",
      "Fast 50ms (0.05s) transfer time – load interruption under 50ms",
      "Dual voltage: supports both 110V and 220V AC three-phase",
      "Auto & manual transfer modes; returns to Source A (mains) automatically",
      "Compatible with mains, generator, and PV inverter sources",
      "PA6 flame-retardant housing with motor-driven mechanism",
      "Suitable for hospitals, cold storage, data centers, and industrial equipment"
    ],
    "specs": [
      [
        "Poles",
        "3P (3 Lines, No Neutral)"
      ],
      [
        "Rated Current",
        "63A (Operating Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Three-Phase (No Neutral)"
      ],
      [
        "Type",
        "PC Class (Load Level)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Source A (Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Generator, PV Inverter"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Transfer Time",
        "–.05s (50ms)"
      ],
      [
        "Housing",
        "PA6 Flame-retardant"
      ],
      [
        "Applications",
        "Hospitals, Cold Storage, Data Centers"
      ]
    ]
  },
  "ATS-W2R-4P-220V-110V": {
    "description": "The ATS-W2R-4P is a PC class (load level) automatic transfer switch for three-phase systems with neutral (3L+N), rated at 63A and supporting both 110V and 220V AC. All four poles – three phases and neutral – switch simultaneously in 50ms, ensuring complete isolation between sources and eliminating any risk of backfeed. When Source A (mains) fails, the unit instantly transfers the load to a generator or PV inverter; once mains is restored, it automatically reverts to Source A priority without manual intervention. Supports both automatic and manual switching modes to suit diverse installation needs. Built on a motor-driven mechanism housed in a PA6 flame-retardant enclosure, the W2R-4P combines three-phase coverage with neutral switching – essential for balanced load distribution in commercial and medical environments such as hospitals, cold-storage facilities, and data centers.",
    "features": [
      "4-pole switching (3 Lines + Neutral simultaneously) – 2 inputs / 1 output",
      "PC class (load level) – handles full rated load continuously",
      "Fast 50ms (0.05s) transfer time – load interruption under 50ms",
      "Dual voltage: supports both 110V and 220V AC three-phase with neutral",
      "Auto & manual transfer modes; returns to Source A (mains) automatically",
      "Compatible with mains, generator, and PV inverter sources",
      "PA6 flame-retardant housing with motor-driven mechanism",
      "Neutral switching ensures balanced load distribution in commercial installations"
    ],
    "specs": [
      [
        "Poles",
        "4P (3 Lines + Neutral)"
      ],
      [
        "Rated Current",
        "63A (Operating Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Three-Phase with Neutral"
      ],
      [
        "Type",
        "PC Class (Load Level)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Source A (Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Generator, PV Inverter"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Transfer Time",
        "–.05s (50ms)"
      ],
      [
        "Housing",
        "PA6 Flame-retardant"
      ],
      [
        "Applications",
        "Hospitals, Cold Storage, Data Centers"
      ]
    ]
  },
  "STQ1-63-2P-220V-110V": {
    "description": "The STQ1-63-2P is a CB class automatic transfer switch for single-phase 110V or 220V AC systems up to 63A, designed as an economical civilian-grade solution for non-critical backup power applications. Unlike PC class switches, the STQ1-63 uses a circuit breaker with mechanical interlock mechanism – physically preventing both power sources from connecting simultaneously. When Normal Power (N/mains) fails, the unit automatically transfers the load to the backup source (generator or PV inverter) in approximately 2 seconds; a brief 2s power interruption occurs during the switchover, which is acceptable for most residential and light-commercial loads. The unit reverts to Normal Power priority automatically once mains is restored. With a maximum load capacity of approximately 6930W ( –.9kW) and compatibility with mains, generator, and PV inverter sources, the STQ1-63-2P is a cost-effective solution for home emergency backup, RV setups, elevators, and fire-protection panel circuits.",
    "features": [
      "2-pole switching (Live + Neutral) – 2 inputs / 1 output",
      "CB class – circuit breaker with mechanical interlock, prevents dual-power connection",
      "~2s auto transfer time – brief 2s interruption acceptable for most civilian loads",
      "Dual voltage: supports both 110V and 220V AC single-phase",
      "Auto & manual transfer modes; Normal Power (N) priority with auto return",
      "Compatible with mains, generator, and PV inverter sources",
      "Max load capacity: ~6930W ( –.9kW)",
      "Economical civilian-grade ATS – cost-effective alternative to PC class units"
    ],
    "specs": [
      [
        "Poles",
        "2P (Live + Neutral)"
      ],
      [
        "Rated Current",
        "63A (Working Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Single Phase"
      ],
      [
        "Type",
        "CB Class (Circuit Breaker + Mechanical Interlock)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Normal Power (N / Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Generator, PV Inverter"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Auto Transfer Time",
        "~2s"
      ],
      [
        "Power Interruption",
        "Brief ~2s during transfer"
      ],
      [
        "Max Load Power",
        "~6930W ( –.9kW)"
      ],
      [
        "Internal Components",
        "PCB Control Board, Motor, Thermal Relay"
      ],
      [
        "Applications",
        "Home Emergency, Fire Protection, Elevators, RV"
      ]
    ]
  },
  "STQ1-63-3P-220V-110V": {
    "description": "The STQ1-63-3P is a CB class automatic transfer switch for three-phase 110V or 220V AC systems up to 63A, offering a cost-effective industrial solution for non-critical three-phase loads. All three poles switch simultaneously using a circuit breaker with mechanical interlock, physically preventing both power sources from connecting at the same time. When Normal Power (N/mains) fails, the unit automatically transfers to the backup supply (generator or PV inverter) in approximately 2 seconds; a brief ~2s power interruption occurs during switchover, which is acceptable for most industrial and commercial equipment. The unit automatically reverts to Normal Power priority once mains is restored. With a maximum load capacity of approximately 22kW across three phases, the STQ1-63-3P is well suited for powering industrial equipment, commercial elevators, three-phase motors, and other heavy loads where PC class switching speed is not required.",
    "features": [
      "3-pole switching (3 Lines simultaneously, no neutral) – 2 inputs / 1 output",
      "CB class – circuit breaker with mechanical interlock, prevents dual-power connection",
      "~2s auto transfer time – brief 2s interruption acceptable for industrial loads",
      "Dual voltage: supports both 110V and 220V AC three-phase",
      "Auto & manual transfer modes; Normal Power (N) priority with auto return",
      "Compatible with mains, generator, and PV inverter sources",
      "Max load capacity: ~22kW (three-phase)",
      "Cost-effective CB class solution for industrial and commercial applications"
    ],
    "specs": [
      [
        "Poles",
        "3P (Triple-Pole, Simultaneous Switching)"
      ],
      [
        "Rated Current",
        "63A (Working Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Three-Phase"
      ],
      [
        "Type",
        "CB Class (Circuit Breaker + Mechanical Interlock)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Normal Power (N / Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Generator, PV Inverter"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Auto Transfer Time",
        "~2s"
      ],
      [
        "Power Interruption",
        "Brief ~2s during transfer"
      ],
      [
        "Max Load Power",
        "~22kW (Three-Phase)"
      ],
      [
        "Internal Components",
        "PCB Control Board, Motor, Thermal Relay"
      ],
      [
        "Applications",
        "Industrial Equipment, Commercial Elevators, Three-Phase Motors"
      ]
    ]
  },
  "STQ1-63-4P-220V-110V": {
    "description": "The STQ1-63-4P is a CB class automatic transfer switch for three-phase systems with neutral (3L+N), rated at 63A and supporting both 110V and 220V AC. By switching all four poles – three phases and neutral – simultaneously, it enables use with mixed three-phase and single-phase loads in the same installation, making it ideal for facilities such as hospitals, cold-storage plants, and data centers where neutral is essential for balanced distribution. Built-in mechanical interlock physically prevents both power sources from connecting at the same time. Additional over-voltage and under-voltage protection continuously monitors the supply, adding an extra layer of protection not present in the 3P version. When Normal Power (N/mains) fails, the unit transfers to the backup supply (generator or PV inverter) in approximately 2 seconds; a brief ~2s outage occurs during switchover. Once mains is restored, it reverts to Normal Power priority automatically. Maximum load capacity is approximately 13.9kW (13870W).",
    "features": [
      "4-pole switching (3 Lines + Neutral simultaneously) – 2 inputs / 1 output",
      "CB class – circuit breaker with mechanical interlock, prevents dual-power connection",
      "Over-voltage & under-voltage protection – added safety beyond the 3P version",
      "~2s auto transfer time – brief 2s interruption acceptable for commercial loads",
      "Dual voltage: supports both 110V and 220V AC; compatible with 3-phase and single-phase loads",
      "Auto & manual transfer modes; Normal Power (N) priority with auto return",
      "Compatible with mains, generator, and PV inverter sources",
      "Max load capacity: ~13.9kW (13870W)"
    ],
    "specs": [
      [
        "Poles",
        "4P (3 Lines + Neutral)"
      ],
      [
        "Rated Current",
        "63A (Working Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Three-Phase with Neutral (compatible with 3-phase & single-phase loads)"
      ],
      [
        "Type",
        "CB Class (Circuit Breaker + Mechanical Interlock)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Normal Power (N / Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Generator, PV Inverter"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Auto Transfer Time",
        "~2s"
      ],
      [
        "Power Interruption",
        "Brief ~2s during transfer"
      ],
      [
        "Protection",
        "Mechanical Interlock, Over-voltage & Under-voltage"
      ],
      [
        "Max Load Power",
        "~13.9kW (13870W)"
      ],
      [
        "Internal Components",
        "PCB Control Board, Motor, Thermal Relay"
      ],
      [
        "Applications",
        "Hospitals, Cold Storage, Data Centers"
      ]
    ]
  },
  "STQ2-63-2P-220V-110V": {
    "description": "The STQ2-63-2P is a CB class automatic transfer switch for single-phase 110V or 220V AC systems up to 63A, designed as an economical civilian-grade backup power solution. Using a circuit breaker with mechanical interlock mechanism, it physically prevents both power sources from being connected simultaneously. When Normal Power (N/mains) fails, the unit automatically switches to the backup supply (generator or PV inverter) in approximately 2 seconds; a brief ~2s power outage occurs during transfer, which is acceptable for most residential and light-duty loads. Once mains is restored, the unit reverts to Normal Power priority automatically. With a maximum load capacity of approximately 6930W ( –.9kW) and support for both auto and manual switching modes, the STQ2-63-2P is a straightforward, cost-effective choice for home emergency backup, RV power systems, fire-protection panels, elevator circuits, and general backup power applications.",
    "features": [
      "2-pole switching (Live + Neutral) – 2 inputs / 1 output",
      "CB class – circuit breaker with mechanical interlock, prevents dual-power connection",
      "~2s auto transfer time – brief 2s interruption acceptable for civilian loads",
      "Dual voltage: supports both 110V and 220V AC single-phase",
      "Auto & manual transfer modes; Normal Power (N) priority with auto return",
      "Compatible with mains, generator, and PV inverter sources",
      "Max load capacity: ~6930W ( –.9kW)",
      "Economical civilian-grade ATS – cost-effective alternative to PC class units"
    ],
    "specs": [
      [
        "Poles",
        "2P (Live + Neutral)"
      ],
      [
        "Rated Current",
        "63A (Working Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Single Phase"
      ],
      [
        "Type",
        "CB Class (Circuit Breaker + Mechanical Interlock)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Normal Power (N / Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Generator, PV Inverter"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Auto Transfer Time",
        "~2s"
      ],
      [
        "Power Interruption",
        "Brief ~2s during transfer"
      ],
      [
        "Max Load Power",
        "~6930W ( –.9kW)"
      ],
      [
        "Internal Components",
        "PCB Control Board, Motor, Thermal Relay"
      ],
      [
        "Applications",
        "Home Emergency, Fire Protection, Elevators, RV"
      ]
    ]
  },
  "STQ2-63-3P-220V-110V": {
    "description": "The STQ2-63-3P is a CB class automatic transfer switch for three-phase 110V or 220V AC systems up to 63A, offering a cost-effective industrial solution for non-critical three-phase loads. All three poles switch simultaneously using a circuit breaker with mechanical interlock, physically preventing both power sources from connecting at the same time. When Normal Power (N/mains) fails, the unit automatically transfers to the backup supply (generator or PV inverter) in approximately 2 seconds; a brief ~2s power interruption occurs during switchover, which is acceptable for most industrial and commercial equipment. The unit automatically reverts to Normal Power priority once mains is restored. With a maximum load capacity of approximately 22kW across three phases and support for both auto and manual switching modes, the STQ2-63-3P is a straightforward, cost-effective choice for powering industrial equipment, commercial elevators, three-phase motors, and other heavy loads where PC class switching speed is not required.",
    "features": [
      "3-pole switching (3 Lines simultaneously, no neutral) – 2 inputs / 1 output",
      "CB class – circuit breaker with mechanical interlock, prevents dual-power connection",
      "~2s auto transfer time – brief 2s interruption acceptable for industrial loads",
      "Dual voltage: supports both 110V and 220V AC three-phase",
      "Auto & manual transfer modes; Normal Power (N) priority with auto return",
      "Compatible with mains, generator, and PV inverter sources",
      "Max load capacity: ~22kW (three-phase)",
      "Cost-effective CB class solution for industrial and commercial applications"
    ],
    "specs": [
      [
        "Poles",
        "3P (Triple-Pole, Simultaneous Switching)"
      ],
      [
        "Rated Current",
        "63A (Working Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Three-Phase"
      ],
      [
        "Type",
        "CB Class (Circuit Breaker + Mechanical Interlock)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Normal Power (N / Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Generator, PV Inverter"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Auto Transfer Time",
        "~2s"
      ],
      [
        "Power Interruption",
        "Brief ~2s during transfer"
      ],
      [
        "Max Load Power",
        "~22kW (Three-Phase)"
      ],
      [
        "Internal Components",
        "PCB Control Board, Motor, Thermal Relay"
      ],
      [
        "Applications",
        "Industrial Equipment, Commercial Elevators, Three-Phase Motors"
      ]
    ]
  },
  "STQ2-63-4P-220V-110V": {
    "description": "The STQ2-63-4P is a CB class automatic transfer switch for three-phase systems with neutral (3L+N), rated at 63A and supporting both 110V and 220V AC. By switching all four poles – three phases and neutral – simultaneously, it enables use with mixed three-phase and single-phase loads in the same installation, making it well suited for facilities such as hospitals, cold-storage plants, and data centers where neutral is essential for balanced distribution. Built-in mechanical interlock physically prevents both power sources from connecting at the same time. Additional over-voltage and under-voltage protection continuously monitors the supply for an extra layer of safety. When Normal Power (N/mains) fails, the unit transfers to the backup supply (generator or PV inverter) in approximately 2 seconds; a brief ~2s outage occurs during switchover. Once mains is restored, it reverts to Normal Power priority automatically. Maximum load capacity is approximately 13.9kW (13870W).",
    "features": [
      "4-pole switching (3 Lines + Neutral simultaneously) – 2 inputs / 1 output",
      "CB class – circuit breaker with mechanical interlock, prevents dual-power connection",
      "Over-voltage & under-voltage protection – added safety beyond the 3P version",
      "~2s auto transfer time – brief 2s interruption acceptable for commercial loads",
      "Dual voltage: supports both 110V and 220V AC; compatible with 3-phase and single-phase loads",
      "Auto & manual transfer modes; Normal Power (N) priority with auto return",
      "Compatible with mains, generator, and PV inverter sources",
      "Max load capacity: ~13.9kW (13870W)"
    ],
    "specs": [
      [
        "Poles",
        "4P (3 Lines + Neutral)"
      ],
      [
        "Rated Current",
        "63A (Working Range: 6A – 63A)"
      ],
      [
        "Rated Voltage",
        "110V / 220V AC"
      ],
      [
        "Frequency",
        "50/60Hz"
      ],
      [
        "Phase",
        "Three-Phase with Neutral (compatible with 3-phase & single-phase loads)"
      ],
      [
        "Type",
        "CB Class (Circuit Breaker + Mechanical Interlock)"
      ],
      [
        "I/O Configuration",
        "2 Inputs / 1 Output"
      ],
      [
        "Priority Source",
        "Normal Power (N / Mains)"
      ],
      [
        "Compatible Sources",
        "Mains, Generator, PV Inverter"
      ],
      [
        "Switching Mode",
        "Auto & Manual"
      ],
      [
        "Auto Transfer Time",
        "~2s"
      ],
      [
        "Power Interruption",
        "Brief ~2s during transfer"
      ],
      [
        "Protection",
        "Mechanical Interlock, Over-voltage & Under-voltage"
      ],
      [
        "Max Load Power",
        "~13.9kW (13870W)"
      ],
      [
        "Internal Components",
        "PCB Control Board, Motor, Thermal Relay"
      ],
      [
        "Applications",
        "Hospitals, Cold Storage, Data Centers"
      ]
    ]
  },
  "Aerosol-DIN-Rail": {
    "description": "The UPPROCURE DIN Rail Thermal Aerosol Fire Extinguishing Device — also known as an electrical cabinet automatic fire sticker — is purpose-built for closed electrical enclosures such as distribution cabinets, switch cabinets, PV combiner boxes, meter boxes and communication cabinets. Its fully passive heat-sensitive design requires no external power supply and no wiring: once the ambient temperature reaches 170°C or an open flame is detected, the unit self-activates within 6 seconds and rapidly releases thermal aerosol to suppress incipient electrical fires at the source. Dual installation modes — 35mm DIN rail clip and industrial-grade self-adhesive backing — allow fast retrofit into both new and existing cabinets. The pressure-free storage design eliminates leakage and burst risks, while the aerosol agent leaves no residue and causes no corrosion to PCBs, relays or copper busbars. With a -50°C to +90°C operating range, 10-year service life and completely maintenance-free operation, it is the ideal fire safety solution for electrical distribution and new energy equipment. Manufactured in our ISO 9001 certified facility with 15 years of electrical protection expertise and 200+ projects delivered across 10+ countries.",
    "features": [
      "Passive heat activation at 170°C — no power, no wiring, no control panel required",
      "≤6 seconds spray response — suppresses electrical fires at the initial stage",
      "Dual mounting: 35mm DIN rail clip + self-adhesive backing for fast retrofit",
      "Pressure-free storage — no leakage, no burst risk, safe long-term standby",
      "No residue, no corrosion to PCBs, relays and copper busbars after discharge",
      "Wide -50°C to +90°C operating range — suitable for outdoor PV and telecom cabinets",
      "10-year service life, fully maintenance-free — install once and forget",
      "Protects 0.1m³ to 0.3m³ enclosures — covers most combiner boxes and distribution cabinets",
      "Eco-friendly thermal aerosol agent, safe for personnel and equipment",
      "OEM / ODM customization available — logo, label, capacity on request"
    ],
    "specs": [
      [
        "Product Name",
        "DIN Rail Thermal Aerosol Fire Extinguishing Device"
      ],
      [
        "Alias",
        "Electrical Cabinet Automatic Fire Sticker"
      ],
      [
        "Extinguishing Medium",
        "Thermal Aerosol"
      ],
      [
        "Trigger Temperature",
        "170°C Heat-Sensitive Activation"
      ],
      [
        "Activation Mode",
        "Heat Induction / Open Flame Trigger"
      ],
      [
        "Spray Response Time",
        "≤6 Seconds"
      ],
      [
        "Optional Specification",
        "10g, 20g, 30g"
      ],
      [
        "Protected Volume",
        "0.1 m³ ~ 0.3 m³"
      ],
      [
        "Installation Type",
        "DIN Rail (35mm) / Self-adhesive Mounting"
      ],
      [
        "Power Supply",
        "Passive — No External Power Needed"
      ],
      [
        "Storage Condition",
        "Normal Pressure, Pressureless"
      ],
      [
        "Working Temperature",
        "-50°C ~ +90°C"
      ],
      [
        "Relative Humidity",
        "≤95%RH"
      ],
      [
        "Housing Material",
        "Flame-Retardant ABS"
      ],
      [
        "Spray Design",
        "Dual Nozzle Directional Ejection"
      ],
      [
        "Service Life",
        "10 Years"
      ],
      [
        "Maintenance",
        "Maintenance-Free, No Residue"
      ],
      [
        "Application",
        "Distribution Cabinet, PV Combiner Box, Switch Cabinet, Meter Box, Communication Cabinet"
      ],
      [
        "Fire Grade",
        "Special Grade for Electrical Equipment"
      ],
      [
        "Safety Performance",
        "High-Temperature Resistant, Eco-Friendly"
      ]
    ]
  }
} as const satisfies Record<string, ProductDetailContent>
