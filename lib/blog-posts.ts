export type BlogSection = {
  heading: string
  paragraphs: readonly string[]
  bullets?: readonly string[]
}

export type BlogFaq = {
  question: string
  answer: string
}

export type BlogPost = {
  path: string
  slug: string
  title: string
  description: string
  image: string
  publishedAt: string
  updatedAt: string
  readingMinutes: number
  category: 'Selection Guide' | 'Technical Knowledge' | 'Application' | 'Maintenance' | 'Market Insight'
  tags: readonly string[]
  heroSummary: string
  sections: readonly BlogSection[]
  faq: readonly BlogFaq[]
}

export const BLOG_TAGS = [
  '1500V DC',
  'Aerosol Chemistry',
  'Aerosol Fire Extinguisher',
  'Applications',
  'B2B',
  'B2B Procurement',
  "Buyer's Checklist",
  "Buyer's Guide",
  'CE Marking',
  'Cabinet Protection',
  'Case Study',
  'Certification',
  'Certifications',
  'China Sourcing',
  'Comparison',
  'Compliance',
  'Cost Analysis',
  'DC vs AC',
  'Datasheet Verification',
  'Din Rail Aerosol Fire Extinguisher',
  'Distributor Strategy',
  'EN 15276',
  'EPC',
  'Electrical Cabinet Protection',
  'Enclosure Protection',
  'Engineering',
  'FM-200',
  'Factory Audit',
  'Fire Suppression',
  'IP Rating',
  'Manufacturer Vetting',
  'Market Analysis',
  'Novec 1230',
  'OEM',
  'PV Combiner Box',
  'Pre-PO Verification',
  'Price Guide',
  'Sizing Guide',
  'Solar PV',
  'Sourcing',
  'Sourcing Guide',
  'Specifications',
  'String Count',
  'Supplier Vetting',
  'Switchgear Protection',
  'System Design',
  'TCO Analysis',
  'Technical Guide',
  'UL 2775',
] as const

const categoryByTag: Readonly<Record<string, BlogPost['category']>> = {
  Applications: 'Application',
  "Buyer's Checklist": 'Selection Guide',
  "Buyer's Guide": 'Selection Guide',
  Certification: 'Technical Knowledge',
  'DC vs AC': 'Technical Knowledge',
  'EN 15276': 'Technical Knowledge',
  'Fire Suppression': 'Technical Knowledge',
  'IP Rating': 'Technical Knowledge',
  'Manufacturer Vetting': 'Market Insight',
  'Price Guide': 'Market Insight',
  'Sizing Guide': 'Selection Guide',
  'Solar PV': 'Application',
  Specifications: 'Selection Guide',
  'System Design': 'Selection Guide',
}

function dateFromSource(value: string) {
  return new Date(`${value} UTC`).toISOString().slice(0, 10)
}

function buildSections(title: string, description: string, tags: readonly string[]): readonly BlogSection[] {
  const primaryTopic = tags[0] ?? 'Electrical Protection'
  const secondaryTopic = tags[1] ?? 'Selection Guide'

  return [
    {
      heading: `Why ${primaryTopic} Matters`,
      paragraphs: [
        description,
        `${title} focuses on the practical checks that procurement teams, EPC engineers, and distributors should confirm before a project moves from specification to purchase order.`,
      ],
    },
    {
      heading: 'Key Technical Checks',
      paragraphs: [
        `For ${secondaryTopic.toLowerCase()} decisions, buyers should verify the application environment, product rating, certification scope, documentation quality, and supplier production capability together.`,
      ],
      bullets: [
        'Confirm rated voltage, current, enclosure or module format, and environmental limits.',
        'Match the certification documents to the exact model number being quoted.',
        'Ask for test reports, datasheets, installation instructions, and packaging details before issuing a PO.',
        'Compare total landed cost instead of only the lowest FOB unit price.',
      ],
    },
    {
      heading: 'Procurement Takeaway',
      paragraphs: [
        'A reliable sourcing decision combines technical fit, verified compliance, factory capability, and after-sales support. Treat each quotation as a complete engineering package, not only a price line.',
      ],
    },
  ]
}

function buildFaq(tags: readonly string[]): readonly BlogFaq[] {
  const topic = tags[0] ?? 'this product category'

  return [
    {
      question: `Who should use this ${topic} guide?`,
      answer: 'It is written for importers, distributors, EPC contractors, and engineering buyers who need to compare specifications before ordering.',
    },
    {
      question: 'What should be checked before placing an order?',
      answer: 'Check ratings, application conditions, certification validity, supplier test capability, MOQ, lead time, warranty terms, and documentation availability.',
    },
  ]
}

const postData = [
  {
    slug: 'what-is-din-rail-aerosol-fire-extinguisher-technical-guide',
    title: 'What Is a Din Rail Aerosol Fire Extinguisher? A Complete Technical Guide',
    description:
      "A technical guide to din rail aerosol fire extinguishers — how they work, what's inside, where they fit, and the specifications and certifications that separate B2B-grade units from low-tier alternatives.",
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Fire Suppression'],
    image: '/images/blog/what-is-din-rail-aerosol-fire-extinguisher.jpg',
    publishedAt: 'Apr 27, 2026',
    readingMinutes: 9,
  },
  {
    slug: 'din-rail-aerosol-fire-extinguisher-price-guide-2026',
    title: 'Din Rail Aerosol Fire Extinguisher Price Guide 2026: Cost Breakdown & FOB Pricing',
    description:
      '2026 FOB China price ranges, MOQ-tier pricing, the seven cost factors that move a quote, hidden import-side costs, and a 10-year TCO comparison vs. FM-200 and Novec 1230 — the pricing playbook for B2B buyers and EPC contractors.',
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Price Guide'],
    image: '/images/blog/din-rail-aerosol-fire-extinguisher-price-guide-2026.jpg',
    publishedAt: 'Apr 27, 2026',
    readingMinutes: 10,
  },
  {
    slug: 'how-does-aerosol-fire-extinguisher-work-electrical-cabinets',
    title: 'How Does an Aerosol Fire Extinguisher Work in Electrical Cabinets?',
    description:
      'How a DIN-rail aerosol fire extinguisher actually stops an electrical-cabinet fire — the suppression mechanism, dual activation logic, three documented field cases, and why the technology has become a default specification in 2026.',
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Fire Suppression'],
    image: '/images/blog/how-aerosol-fire-extinguisher-works-electrical-cabinets.jpg',
    publishedAt: 'Apr 27, 2026',
    readingMinutes: 9,
  },
  {
    slug: 'top-8-applications-din-rail-aerosol-fire-extinguishers-2026',
    title: 'Top 8 Applications of Din Rail Aerosol Fire Extinguishers in 2026',
    description:
      'The 8 industrial applications driving 2026 demand for din rail aerosol fire extinguishers — market size, CAGR, distributor margins, and a phased market-entry framework for B2B sales teams and importers.',
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Applications'],
    image: '/images/blog/top-8-applications-din-rail-aerosol-fire-extinguisher.jpg',
    publishedAt: 'Apr 27, 2026',
    readingMinutes: 11,
  },
  {
    slug: 'aerosol-vs-fm200-vs-co2-vs-novec-1230-switchgear-fire-suppression',
    title: 'Aerosol vs FM-200 vs CO2 vs Novec 1230: Switchgear Fire Suppression Compared',
    description:
      'Side-by-side comparison of aerosol, FM-200, CO2, and Novec 1230 fire suppression for switchgear and electrical cabinets — 12-dimension technical comparison, 10-year TCO modelling, and a per-scenario decision framework.',
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Fire Suppression'],
    image: '/images/blog/aerosol-vs-fm200-vs-co2-vs-novec-1230-switchgear.jpg',
    publishedAt: 'Apr 27, 2026',
    readingMinutes: 12,
  },
  {
    slug: 'how-to-size-din-rail-aerosol-fire-extinguisher-calculation-guide',
    title: 'How to Size a Din Rail Aerosol Fire Extinguisher: A Step-by-Step Calculation Guide',
    description:
      'The complete sizing methodology for din rail aerosol fire extinguishers — the EN 15276 formula, a 5-step calculation process, two fully-worked examples, and the most common errors specifiers make.',
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Sizing Guide'],
    image: '/images/blog/how-to-size-din-rail-aerosol-fire-extinguisher.jpg',
    publishedAt: 'Apr 27, 2026',
    readingMinutes: 12,
  },
  {
    slug: 'din-rail-aerosol-fire-extinguisher-specifications',
    title: 'Din Rail Aerosol Fire Extinguisher Specifications: What Buyers Must Check',
    description:
      'The 18 spec parameters every B2B buyer must verify on a din rail aerosol fire extinguisher datasheet, the 7 fraud patterns we see most often, a step-by-step EN 15276 certificate verification process, and a printable inspection checklist for importers, distributors, and EPC procurement teams.',
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Specifications'],
    image: '/images/blog/din-rail-aerosol-fire-extinguisher-specifications.jpg',
    publishedAt: 'Apr 27, 2026',
    readingMinutes: 12,
  },
  {
    slug: 'aerosol-fire-extinguisher-certifications-ce-en-15276-ul-ccc',
    title: 'CE, UL, EN 15276 & CCC: Fire Extinguisher Certifications Explained for Importers',
    description:
      "An importer's verification framework for aerosol fire extinguisher certifications — what CE marking actually means, how EN 15276 differs from it, where UL 2775 and CCC fit, 5 documented fraud cases (€1.2M in losses), and the 30-minute verification process every PO should run through.",
    tags: ['Aerosol Fire Extinguisher', 'EN 15276'],
    image: '/images/blog/aerosol-fire-extinguisher-certifications-ce-en-15276-ul-ccc.jpg',
    publishedAt: 'Apr 27, 2026',
    readingMinutes: 12,
  },
  {
    slug: 'din-rail-aerosol-fire-extinguisher-buyers-checklist-2026',
    title: "The Ultimate Buyer's Checklist for Din Rail Aerosol Fire Extinguishers (2026)",
    description:
      'The complete pre-PO checklist for buying din rail aerosol fire extinguishers in 2026. 80+ verification points across product quality, certification, pricing, supplier capability, logistics, after-sales, documentation and risk — the working framework experienced importers and EPC procurement teams use before issuing a PO.',
    tags: ['Aerosol Fire Extinguisher', "Buyer's Checklist"],
    image: '/images/blog/The-Ultimate-Buyer-Checklist-for-Din-Rail-Aerosol-Fire-Extinguishers.jpg',
    publishedAt: 'Apr 27, 2026',
    readingMinutes: 13,
  },
  {
    slug: 'din-rail-aerosol-fire-extinguisher-china-sourcing-guide',
    title: 'Din Rail Aerosol Fire Extinguisher: 2026 China Sourcing Guide for B2B Buyers',
    description:
      "The complete B2B buyer's guide to sourcing din rail aerosol fire extinguishers from China in 2026. Specifications, certifications, supplier vetting, pricing, MOQ and shipping logistics — everything importers, distributors and EPC procurement teams need to source confidently.",
    tags: ['Din Rail Aerosol Fire Extinguisher', 'Fire Suppression'],
    image: '/images/blog/din-rail-aerosol-pillar-hero.jpg',
    publishedAt: 'Apr 25, 2026',
    readingMinutes: 25,
  },
  {
    slug: 'how-to-vet-pv-combiner-box-manufacturer',
    title: 'How to Vet a PV Combiner Box Manufacturer: A Sourcing Checklist for Global Buyers',
    description:
      "The single most important B2B sourcing decision is not the spec — it's the supplier. This is the same 7-point factory audit SOP, certification verification method, and red-flag checklist our engineering team uses before clearing any new PV combiner box manufacturer for a PO.",
    tags: ['PV Combiner Box', 'Manufacturer Vetting'],
    image: '/images/blog/How-to-Vet-a-PV-Combiner-Box-Manufacturer.jpg',
    publishedAt: 'Apr 24, 2026',
    readingMinutes: 10,
  },
  {
    slug: 'pv-combiner-box-price-guide-2026',
    title: 'PV Combiner Box Price Guide: What Drives the Cost and How to Get Real Value',
    description:
      'Quotes for the same PV combiner box can span a 6x price spread. This guide breaks down real 2026 FOB China price ranges by configuration, the cost structure behind every unit, and the traps at both ends — too cheap and too expensive.',
    tags: ['PV Combiner Box', 'Price Guide'],
    image: '/images/blog/pv-combiner-box-price-guide-2026.jpg',
    publishedAt: 'Apr 24, 2026',
    readingMinutes: 10,
  },
  {
    slug: 'how-to-choose-pv-combiner-box-string-count',
    title: 'How to Choose the Right Number of Strings: 4-in-1, 8-in-1, 16-in-1 PV Combiner Box Explained',
    description:
      'String count is not a preference — it is an output calculated from your array geometry and inverter topology. This guide shows procurement managers and EPC designers how to match 4-in-1, 6-in-1, 8-in-1, 12-in-1, 16-in-1, and 24-in-1 PV combiner boxes to project scale without over- or under-specifying.',
    tags: ['PV Combiner Box', 'System Design'],
    image: '/images/blog/how-to-choose-pv-combiner-box-string-count.jpg',
    publishedAt: 'Apr 24, 2026',
    readingMinutes: 10,
  },
  {
    slug: 'ip65-vs-ip66-vs-ip67-pv-combiner-box',
    title: 'IP65 vs IP66 vs IP67 PV Combiner Box: Which Protection Level Fits Your Project?',
    description:
      'More IP is not always better. Over-specifying wastes 15-20% of BOM; under-specifying kills the box in 2 years. This guide shows how to match IP65, IP66, or IP67 to your actual installation environment — climate, coastline, altitude, and condensation risk.',
    tags: ['PV Combiner Box', 'IP Rating'],
    image: '/images/blog/ip65-vs-ip66-vs-ip67-pv-combiner-box.jpg',
    publishedAt: 'Apr 24, 2026',
    readingMinutes: 9,
  },
  {
    slug: 'pv-combiner-box-certifications-iec-ce-tuv-ul',
    title: 'Must-Have Certifications for PV Combiner Boxes: IEC 61439, TÜV, CE, UL Explained',
    description:
      'Wrong certification at the port = 11 days of demurrage and a refused container. This guide explains the six PV combiner box certifications that actually matter for B2B import, which market each unlocks, and how to verify every certificate before you sign the PO.',
    tags: ['PV Combiner Box', 'Certification'],
    image: '/images/blog/pv-combiner-box-certifications-iec-ce-tuv-ul.jpg',
    publishedAt: 'Apr 24, 2026',
    readingMinutes: 10,
  },
  {
    slug: 'dc-vs-ac-pv-combiner-box',
    title: 'DC vs AC PV Combiner Box: Which One Do You Need?',
    description:
      'DC and AC combiner boxes sit on opposite sides of the inverter and solve different problems. This guide helps EPC engineers and buyers pick the right one — and avoid the costly mistake of ordering the wrong type.',
    tags: ['PV Combiner Box', 'DC vs AC'],
    image: '/images/blog/DC-vs-AC-PV-Combiner-Box.jpg',
    publishedAt: 'Apr 15, 2026',
    readingMinutes: 10,
  },
  {
    slug: 'pv-combiner-box-buyers-checklist',
    title: "PV Combiner Box Buyer's Checklist: 12 Specs You Must Verify Before Ordering",
    description:
      'The 12 technical and commercial specs every solar distributor and EPC buyer should verify before placing a PV combiner box PO — the same list our engineers use when auditing a design.',
    tags: ['PV Combiner Box', "Buyer's Guide"],
    image: '/images/blog/pv-combiner-box-buyers-checklist.jpg',
    publishedAt: 'Apr 14, 2026',
    readingMinutes: 10,
  },
  {
    slug: 'pv-combiner-box-sourcing-china-2026',
    title: 'PV Combiner Box Sourcing from China in 2026: The Complete Guide for Solar Distributors',
    description:
      'A strategic procurement guide for solar distributors sourcing PV combiner boxes from China in 2026. Learn how to evaluate DC components, avoid costly RMA failures, and leverage OEM customization to build a profitable brand.',
    tags: ['PV Combiner Box', 'Solar PV'],
    image: '/images/blog/PV-Combiner-Box-Cost-and-Quality.jpg',
    publishedAt: 'Apr 13, 2026',
    readingMinutes: 6,
  },
  {
    slug: 'what-is-solar-pv-combiner-box-photovoltaic-designs',
    title: 'What is a Solar PV Combiner Box and Why is it Used in Photovoltaic Designs?',
    description:
      'A technical deep-dive for EPC contractors and system designers on how commercial-grade solar PV combiner boxes work, why they are mandatory for 4+ string systems, and how IEC 61439-2 compliance protects your megawatt-scale solar investment.',
    tags: ['PV Combiner Box', 'Solar PV'],
    image: '/images/blog/solar-pv-combiner-box.jpg',
    publishedAt: 'Apr 13, 2026',
    readingMinutes: 8,
  },
] as const

export const BLOG_POSTS: readonly BlogPost[] = postData.map((post) => {
  const publishedAt = dateFromSource(post.publishedAt)
  const category = categoryByTag[post.tags[1]] ?? categoryByTag[post.tags[0]] ?? 'Technical Knowledge'

  return {
    path: `/blog/${post.slug}`,
    slug: post.slug,
    title: post.title,
    description: post.description,
    image: post.image,
    category,
    tags: post.tags,
    publishedAt,
    updatedAt: publishedAt,
    readingMinutes: post.readingMinutes,
    heroSummary: post.description,
    sections: buildSections(post.title, post.description, post.tags),
    faq: buildFaq(post.tags),
  }
})

export const BLOG_POST_COUNT = BLOG_POSTS.length

export const BLOG_POSTS_BY_PATH: Readonly<Record<string, BlogPost>> = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.path, post])
)

export function getBlogPostByPath(path: string): BlogPost | null {
  return BLOG_POSTS_BY_PATH[path] ?? null
}
