import { EB2M_ARTICLES } from '@/lib/eb2m-blog-articles'
import { EB2M_PROCUREMENT_ARTICLES } from '@/lib/eb2m-procurement-blog-articles'

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
  imageAlt?: string
  imageFit?: 'contain'
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
  '22mm Emergency Stop Button',
  '22mm Push Button Switch',
  '22mm Push Buttons',
  '22mm Selector Switch',
  'Aerosol Chemistry',
  'Aerosol Fire Extinguisher',
  'Applications',
  'Applications & IP',
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
  'Illuminated Controls',
  'Industrial Panels',
  'Manufacturer Vetting',
  'Market Analysis',
  'Novec 1230',
  'OEM',
  'Panel Design',
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
  'Wiring & Installation',
] as const

const categoryByTag: Readonly<Record<string, BlogPost['category']>> = {
  Applications: 'Application',
  'Applications & IP': 'Application',
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

type BlogPostSource = {
  slug: string
  title: string
  description: string
  tags: readonly string[]
  image: string
  imageAlt?: string
  imageFit?: 'contain'
  publishedAt: string
  updatedAt?: string
  readingMinutes: number
  heroSummary?: string
  sections?: readonly BlogSection[]
  faq?: readonly BlogFaq[]
}

const eb2mPostData: readonly BlogPostSource[] = [
  {
    slug: 'how-to-choose-22mm-push-button-switch',
    title: 'How to Choose a 22mm Push Button Switch: Operator, Contacts, Lamp Voltage and IP Rating',
    description:
      'Choose a 22mm push button switch by operator, NO/NC contacts, lamp voltage, IP rating and body size. A practical guide for panel builders.',
    tags: ['22mm Push Button Switch', "Buyer's Guide"],
    image: '/images/blog/how-to-choose-22mm-push-button-switch.jpg',
    imageAlt: 'I/O double push button, lever selector, twist-release emergency stop, and red flush push button.',
    publishedAt: 'Nov 13, 2026',
    readingMinutes: 10,
    heroSummary:
      'A 22mm push button switch looks simple, but common ordering errors come from a handful of details: operator type, momentary or latching action, the contact code, lamp voltage and body size. This guide walks through each one, using the EB2M series as a worked example, so your inquiry describes exactly the part your panel needs.',
    sections: [
      {
        heading: 'Why Small Details Decide the Right Part',
        paragraphs: [
          'On a control panel, the 22mm push button switch is the part operators use every shift. It is also easy to misorder when key details are left out of the inquiry. A request for "red 22mm button, NC" can match many different products: flush or mushroom head, momentary or latching, with or without a lamp, in a standard or a compact body. Each choice changes how the panel behaves or whether the part fits.',
          'This guide follows the order an engineer normally works through. As a worked example we use the EB2M series, a Φ22 mm range with two body types and a model code that states the contacts and the action. Full model tables are on our 22mm push button switch solutions page.',
        ],
      },
      {
        heading: 'Choose the Operator Head',
        paragraphs: [
          'The operator defines how a person interacts with the circuit, so choose it first. Common Φ22 operator families, with EB2M codes as printed:',
          'A practical rule: flush for frequent use, mushroom head where it must be found quickly, key or selector where it must not be changed by accident. Emergency stop functions have their own requirements, covered in our guide to 22mm emergency stop buttons.',
        ],
        bullets: [
          'Flush push buttons: the general-purpose head for start, reset and jog functions. Momentary -10, maintained -10T, illuminated -10D and -10DT. Symbol versions (/FH) carry one of 12 printed symbols, and custom marking is listed as available.',
          'Mushroom head push buttons: a larger head that is easy to press with the palm or a gloved hand. -10M, -10MT, illuminated -10MD and -10MTD.',
          'Emergency stop, twist release: red head, nominal -01 (1NC) code. -01ZS, -01ZS/A and -01ZS/B; illuminated -01DZS and -01DZS/A.',
          'Key switches: 2-position (-10Y, -10CY, -10CY/fu) and 3-position (-20YS, -20CYS, -20CYS/f.fu), for functions only authorized staff should change.',
          'Selector switches: short lever or long lever, 2- or 3-position, with illuminated versions, for mode selection such as Hand-Off-Auto or local/remote.',
          'Double push buttons: two buttons in one nominal Φ22 mm hole with nominal 1NO1NC contacts, in flat (-11PRG), extended (-11HRG) or oval (-11RG) styles, plus illuminated versions. In the catalog, flat and extended groups list R1/R5 (I/O), while the oval group lists R and R1–R7 (blank, I/O, ON/OFF, and START/STOP—printed legend wording only).',
        ],
      },
      {
        heading: 'Momentary vs Latching (Maintained): Get the Action Right',
        paragraphs: [
          'The second decision is how the button behaves after it is pressed. A momentary push button, also called spring return, changes its contacts only while it is held down. A maintained push button, also called latching, stays in the pressed state until it is pressed again.',
          'Momentary action suits start, stop, jog and reset functions, where a self-hold circuit, relay or PLC remembers the state. Maintained action suits simple on/off functions where the button itself holds the state. A latching button wired into a start circuit by mistake can leave a machine in a state nobody intended.',
          'In the EB2M code the action is visible in the suffix. A flush button -10 is momentary and -10T is maintained; the same T marks the maintained mushroom head, -10MT. Selector and key switches describe their action with the spring-return codes f, fu and f.fu, explained in our guide to 22mm selector and key switches.',
        ],
      },
      {
        heading: 'Read the NO/NC Contact Code',
        paragraphs: [
          'A normally open (NO) contact is open at rest and closes when the operator is actuated. A normally closed (NC) contact is closed at rest and opens when actuated. Start functions are usually wired through NO contacts. Stop functions are usually wired through NC contacts, so that an open-circuit fault, such as a broken wire or loose terminal, interrupts the control path in the same way as pressing stop.',
          'In the EB2M series the contacts are part of the model code: the first digit is the number of NO contacts and the second digit is the number of NC contacts.',
          'EB2M-A-10D is listed as an illuminated flush button with nominal 1NO, and EB2M-B-01ZS as a twist-release model with nominal 1NC. The Type A photo adjacent to -01ZS/-01DZS shows 13–14 (NO). Confirm the exact model\'s controlled wiring diagram and terminal table and verify delivered units de-energized. If you need more contacts than the code lists, ask before ordering; stacking blocks beyond what the supplier specifies can make any button stick.',
        ],
        bullets: [
          '-10 = nominal 1NO',
          '-01 = nominal 1NC',
          '-11 = nominal 1NO1NC',
          '-20 = nominal 2NO',
        ],
      },
      {
        heading: 'Check Current, Not Just Voltage',
        paragraphs: [
          'A frequent mistake is to check only the control voltage. Contacts that switch a coil see an inductive load, and the current a contact can switch drops as voltage rises. A contact that is comfortable at 110 V AC can be overloaded at 380 V AC, and DC loads are harder to break than AC loads at the same voltage. Overloaded contacts pit and can weld.',
          'That is why ratings should be read by utilization category. The EB2M series catalog prints series-level ratings under utilization categories AC-15 and DC-13:',
          'Read the table against your actual circuit. At 220 V AC the rating is 5 A, but at 220 V DC it is 1 A. If a DC coil draws more than the listed value, switch it through an interposing relay instead of directly. Ith 10 A is the catalog\'s conventional thermal current; it is not a switching rating for inductive loads.',
        ],
        bullets: [
          'AC-15: 36 V / 10 A, 110 V / 10 A, 220 V / 5 A, 380 V / 2.7 A, 660 V / 1.8 A',
          'DC-13: 24 V / 4 A, 48 V / 4 A, 110 V / 2 A, 220 V / 1 A, 440 V / 0.6 A',
          'Conventional thermal current Ith: 10 A',
        ],
      },
      {
        heading: '22mm Illuminated Push Button: Specify the Lamp Voltage Separately',
        paragraphs: [
          'On a 22mm illuminated push button, you must specify the ordering lamp voltage separately from the contact switching ratings. Match the lamp\'s rated voltage and supply type to the intended supply. Because the EB2M catalog does not publish internal lamp wiring diagrams, shared-terminal details, or lamp-to-contact isolation ratings, do not assume the lamp and contacts are electrically independent—confirm internal topology, lamp type, current draw, and DC polarity from the supplier\'s model wiring diagram.',
          'Treat the lamp voltage as its own line item. The EB2M lamp voltages printed in the catalog are:',
          'If your design depends on lamp current or lamp type, confirm those values with the supplier before you finalize the drawing.',
        ],
        bullets: [
          '6, 12, 24, 36, 48, 110 and 127 V AC/DC',
          '220 V DC',
          '220 V and 380 V AC',
        ],
      },
      {
        heading: 'IP Rating: What It Covers and What Installation Can Undo',
        paragraphs: [
          'The EB2M catalog lists IP40 / IP65 side by side as series-level data without assigning IP40 or IP65 to individual models or documenting per-model sealing hardware. If the panel front will see dust or splashing, make IP65 an explicit project target in your inquiry and confirm the exact model\'s IP rating, required sealing components, and installation conditions with the supplier.',
          'Where a verified IP65 model is supplied, maintaining ingress protection in service depends on correct cutout preparation and mounting. Common installation causes of leaks include:',
          "The operator's IP rating is not the panel's IP rating; the enclosure, door seals and cable entries need to reach the same level.",
        ],
        bullets: [
          'Burrs or a rough edge around the Φ22 mm cutout that stop a supplied sealing gasket from seating flat. Deburr every hole.',
          'An oversized or out-of-round cutout. Use a proper panel punch matching the supplier\'s machining drawing where possible.',
          'A missing, twisted or crushed sealing gasket (where supplied with the model).',
          "A mounting nut left loose or overtightened. Tighten it evenly according to the supplier's model installation instructions.",
        ],
      },
      {
        heading: 'Type A vs Type B: Body Size, Spacing and Depth',
        paragraphs: [
          'The EB2M catalog shows two body ranges and shared series-level data. Confirm the exact operator and color by model.',
          'Because the catalog does not publish minimum hole center-to-center spacing or tight-spacing rules, compare exact head-type outline drawings, panel-thickness callouts, and rear wiring/tool clearances before choosing between Type A and Type B for tight panel layouts. Series-level electrical data are shared across both ranges, but always verify the outline drawing and specifications of the exact model you order.',
        ],
        bullets: [
          'Type A (EB2M-A): standard modular body. On the EB2M-A-10 flush button outline drawing, the end-view outline is 52 × 30 mm (with an additional 43 mm drawing dimension), 50 mm behind the panel, and 11 mm above the panel.',
          'Type B (EB2M-B): compact body. On the EB2M-B-10 flush button outline drawing, the end-view outline is 40 × 30 mm, 33.5 mm side-view width, and 60 mm overall height including 11 mm above the panel.',
        ],
      },
      {
        heading: 'Colors and Markings Across One Panel',
        paragraphs: [
          'When buttons on one panel come from several suppliers, the reds, greens and yellows often do not match, and bezels differ. Sourcing the operators from one series keeps the panel consistent and gives you one part-numbering logic for spares.',
          'The EB2M series field key lists six color codes: red, green, yellow, blue, white and black (R, G, Y, B, W, K), though exact orderable colors vary by operator row (shown illuminated flush and illuminated selector rows display five-color margin dots). Flush /FH buttons list 12 printed symbols plus a customizable option; for double push buttons, the catalog prints R1/R5 (I/O) beside flat and extended groups and R, R1–R7 (blank, I/O, ON/OFF, and START/STOP—printed legend text only) beside the oval group. State the required color and confirm availability on every order line.',
        ],
      },
      {
        heading: 'Operating Environment and Mechanical Life',
        paragraphs: [
          'Series data: ambient −25 °C to +40 °C, altitude ≤2000 m, relative humidity ≤90% and pollution degree 3. Mechanical life is listed as ≥1,000,000 operations for push buttons, ≥300,000 for selector switches and ≥50,000 for key switches and emergency-stop buttons. If your project requires specific compliance documentation, state those requirements in your inquiry so issuing entity, validity, covered models, and target-market scope can be verified before ordering.',
        ],
      },
      {
        heading: 'What to Put in Your Inquiry',
        paragraphs: [
          'For each position on the panel, include:',
          'For replacements in an existing panel, add photos and the old part number. All operator families and model tables are on the 22mm push button switch page, and you can send your list through the quote form.',
        ],
        bullets: [
          'The model code as printed, with the body prefix, for example EB2M-A-10D or EB2M-B-01ZS',
          'The color code',
          'The lamp voltage, if the button is illuminated',
          'Any symbol or marking required',
          'Quantity and destination',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the difference between a momentary and a latching 22mm push button?',
        answer: 'A momentary (spring return) button acts only while held down; a latching (maintained) button stays pressed until pressed again. In the EB2M series, flush -10 is momentary and -10T is maintained.',
      },
      {
        question: 'How do I read the contact code on an EB2M push button?',
        answer: 'In the catalog code, the first digit indicates the nominal NO count and the second indicates the nominal NC count: -10 is nominal 1NO, -01 is nominal 1NC, -11 is nominal 1NO1NC, and -20 is nominal 2NO. These are nominal printed meanings, not a verified terminal map—confirm the supplier\'s controlled wiring diagram and terminal table for the exact model and verify delivered units de-energized.',
      },
      {
        question: 'Can I use a 24 V lamp on a panel with a 220 V AC indicator supply?',
        answer: 'No. The lamp voltage must match the supply that feeds the lamp. The EB2M list includes 220 V DC and 220 V AC options, among others.',
      },
      {
        question: 'Is every EB2M operator IP65?',
        answer: 'No. The catalog lists IP40 / IP65 side by side as series-level data without allocating IP ratings to individual models. Confirm the exact IP rating, sealing hardware, and mounting requirements for each model on your quote.',
      },
      {
        question: 'When should I choose Type B instead of Type A?',
        answer: 'Type B (EB2M-B) uses a compact body (40 × 30 mm end-view outline on the -10 flush drawing), while Type A (EB2M-A) uses a standard modular body (52 × 30 mm end-view outline on the -10 flush drawing). Both mount in a nominal Φ22 mm hole and share series-level electrical data; because the catalog does not publish minimum hole spacing, compare exact head-type outline drawings and rear wiring clearance before choosing.',
      },
    ],
  },
  {
    slug: '22mm-emergency-stop-button-twist-release-guide',
    title: '22mm Emergency Stop Buttons: Twist Release, NC Contacts and What to Check Before You Order',
    description:
      'How a 22mm emergency stop button works: red head, twist release, NC contacts, plus a pre-order checklist for panel builders and OEM buyers.',
    tags: ['22mm Emergency Stop Button', 'Technical Guide'],
    image: '/images/blog/22mm-emergency-stop-button-twist-release.jpg',
    imageAlt: 'Twist-release emergency-stop sample showing the head, arrows, and collar',
    publishedAt: 'Nov 13, 2026',
    readingMinutes: 8,
    heroSummary:
      'An emergency stop button is the manual control an operator uses to initiate an emergency stop. This guide explains what defines a 22mm emergency stop button, why it uses a normally closed contact and a twist-release reset, and what panel builders and OEM buyers should confirm before they place an order.',
    sections: [
      {
        heading: 'What an Emergency Stop Button Is For',
        paragraphs: [
          'An emergency stop is a manual command a person uses to stop a machine or process when something goes wrong. It is not the normal stop button, and it does not replace guards, interlocks or other safeguards. In most control panels the emergency stop is wired into the stop or safety circuit, so that pressing it removes the command to run.',
          'Because it is used under stress, the device has a recognizable shape and behavior: a red head that is easy to strike, typically mushroom-shaped, a contact that opens when the head is pressed, and a head that stays down until someone deliberately resets it. A 22mm emergency stop button brings these features into the same Φ22 mm cutout as the other pilot devices on the panel, so it can sit in the same row of operators and use the same mounting method.',
          'Machine safety design, including how the emergency stop circuit is built and which standards and regulations apply, must be verified by the machine builder. This article covers device selection and ordering; it does not replace that assessment.',
        ],
      },
      {
        heading: 'Why the Contact Is Normally Closed',
        paragraphs: [
          'The emergency stop contact is normally closed (NC). At rest the contact is closed and the stop circuit is complete; pressing the head opens the contact and breaks the circuit. The reason is fault behavior. If a wire breaks, a terminal works loose or a connector is unplugged, an NC contact path opens just as it would when the button is pressed, removing the continuity the run circuit depends on. In an unmonitored normally open path, a broken wire could go undetected until the button is needed.',
          'This is why emergency stops are normally specified with NC contacts, and why the EB2M emergency stop models are printed as -01, denoting nominal 1NC. However, reading the catalog code alone is not enough to confirm actual terminals: in the Type A catalog section, the sample photo beside -01ZS/-01DZS visibly shows 13–14 (NO), conflicting with the -01 code. Always request the supplier\'s controlled wiring diagram and terminal table for the exact ordered model and verify delivered units while de-energized.',
          'If you also want a status signal to a PLC, raise that in the inquiry rather than assuming an additional contact can be added to the printed configuration. Adding contact blocks beyond what the supplier specifies can slow the actuator or cause binding, which can interfere with emergency stop operation.',
        ],
      },
      {
        heading: 'Twist Release: Why the Button Stays Down',
        paragraphs: [
          'A twist-release emergency stop latches in the pressed position. The contact stays open until someone turns the head to release it. This has two practical effects. The switch contact does not reclose simply because the operator lets go of the button, and resetting the head requires a deliberate manual action.',
          'Releasing the head should not restart the machine on its own. In a typical control circuit, releasing the emergency stop only allows the machine to be restarted; a separate start or reset command is still needed. That logic lives in the control circuit, not in the button, so it has to be designed and checked by the machine builder.',
          'Other reset styles exist in the market, such as key release or pull release. Your customer or end user may have a preference, so confirm it early. The EB2M range lists twist release.',
        ],
      },
      {
        heading: 'EB2M Emergency Stop Models',
        paragraphs: [
          'The EB2M series lists the following twist-release emergency stop codes. Each code is listed in both the Type A (EB2M-A) and Type B (EB2M-B) body:',
          'The series data apply to the emergency stops as well. Series-level ratings are printed for utilization categories AC-15 and DC-13, including AC-15 220 V / 5 A and DC-13 24 V / 4 A, with Ith 10 A. Series ambient temperature is −25 °C to +40 °C, and series-level protection is listed as IP40 / IP65 (not allocated by individual model in the catalog), so confirm the exact model\'s IP rating and sealing requirements on your quote. Mechanical life for emergency-stop buttons is listed as ≥50,000 mechanical operations (electrical life is not published). Series overview and model tables are on our 22mm push button switch page; request order-level outline drawings from the supplier for each emergency stop variant (noting that /A has no separate catalog outline drawing).',
        ],
        bullets: [
          '-01ZS: twist-release emergency stop, red head, nominal 1NC per the -01 code; confirm actual terminals on the supplier\'s wiring diagram before ordering',
          '-01ZS/A and -01ZS/B: listed twist-release variants. Request the exact-model outline drawing from the supplier.',
          '-01DZS and -01DZS/A: illuminated versions',
        ],
      },
      {
        heading: 'Illuminated Emergency Stops: When They Help',
        paragraphs: [
          'An illuminated head can provide a status indication if the verified exact-model wiring and project design support it. Specify the ordering lamp voltage separately from the printed catalog list (6, 12, 24, 36, 48, 110 and 127 V AC/DC; 220 V DC; 220 V and 380 V AC) so it matches the intended supply rail. Because the EB2M catalog does not publish lamp terminal diagrams, shared-terminal details, lamp type/current, DC polarity, or lamp-to-contact isolation ratings, do not assume the lamp is electrically isolated from the contact—confirm the internal wiring topology and lamp specifications from the supplier\'s model wiring diagram.',
          'What the light means is a design decision. Agree on it with the end user and document it, so operators read it the same way on every machine in the plant.',
        ],
      },
      {
        heading: 'Placement and Installation',
        paragraphs: [
          'Selecting the right device is only half the job. Where and how it is mounted matters just as much:',
        ],
        bullets: [
          'Place the emergency stop where operators can reach it quickly from their working position, and where it is unlikely to be pressed by accident during normal work.',
          'On long conveyors and packaging lines, plan several emergency stop stations rather than one central button.',
          'Keep the area around the head clear. A crowded row of buttons makes the emergency stop harder to find. Compare Type A and Type B head-specific outline drawings and rear clearances when laying out the door, and keep the emergency stop clearly separated so it stands out.',
          "Prepare the nominal Φ22 mm cutout cleanly per the supplier's machining drawing: deburr it, keep it round, seat any supplied sealing gasket flat (confirming sealing hardware with the supplier), and tighten the mounting nut evenly according to the supplier's model installation instructions.",
          'Many panels place a yellow background label behind the red head. Check what your customer and market expect, and source the label separately if needed.',
          'Test the function after installation and at regular intervals as part of maintenance, including the reset.',
        ],
      },
      {
        heading: 'Standards and Responsibility',
        paragraphs: [
          'Emergency stop devices fall under machinery safety rules in many markets, and the requirements depend on the machine, the risk assessment and the destination country. Check which standards and regulations your machine has to meet, and confirm with the supplier which documents are available for the exact model you order. State any compliance documentation required for your project and destination market in your inquiry so the supplier can confirm issuing entity, validity, covered models, and scope before you order.',
          'A device on its own does not make a machine safe. Machine safety design must be verified by the machine builder, including the choice of device, the circuit that it switches and the way the machine is restarted.',
        ],
      },
      {
        heading: 'Pre-Order Checklist for a 22mm Emergency Stop Button',
        paragraphs: [
          'Use this list before you send the inquiry:',
          'Send the model as printed, for example EB2M-A-01ZS or EB2M-B-01DZS, with the lamp voltage if illuminated, quantity and destination. The rest of the series, including push buttons, selectors and key switches for the same panel, is on the 22mm push button switch solutions page.',
        ],
        bullets: [
          'Function: the device is used as an emergency stop and the circuit design has been reviewed by the machine builder.',
          'Contact: NC for the stop circuit (-01 denotes nominal 1NC on EB2M, but confirm the exact model\'s controlled wiring diagram and terminal table with the supplier and verify delivered units while de-energized). Identify any additional signals you need and raise them in the inquiry.',
          'Reset: twist release, and confirm it matches what your customer expects.',
          'Head and illumination: plain head (-01ZS and its listed variants) or illuminated (-01DZS, -01DZS/A); if illuminated, the lamp voltage.',
          'Body: Type A or Type B, based on depth and spacing behind the door.',
          'Electrical rating: the switched current checked against the AC-15/DC-13 table at your actual control voltage, not just the voltage itself.',
          'Protection: IP40 or IP65 as required, confirmed for the exact model on the quote.',
          'Documents: controlled wiring diagram, terminal table, outline drawing, and any project-required compliance documentation, verified for exact model coverage together with the quote.',
          'Labels and placement: any background label or legend your customer requires.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why does an emergency stop use an NC contact instead of an NO contact?',
        answer: 'With an NC contact, a broken wire or loose terminal opens the circuit just like pressing the button, so a properly designed control circuit can detect the open state and stop. On EB2M emergency stops, the printed -01 code denotes nominal 1NC, not a verified terminal map: in the Type A catalog section, a sample photo beside -01ZS/-01DZS visibly shows 13–14 (NO), which conflicts with the -01 code and cannot be used to define the rated contact arrangement. Always confirm the exact ordered model against the supplier\'s controlled wiring diagram and terminal table, and verify delivered units while de-energized.',
      },
      {
        question: 'What does twist release mean on an emergency stop button?',
        answer: 'The head latches down when pressed and stays down until it is turned to release it. This keeps the stop command active until someone deliberately resets the button.',
      },
      {
        question: 'Which EB2M models are emergency stop buttons?',
        answer: '-01ZS, -01ZS/A and -01ZS/B, plus the illuminated -01DZS and -01DZS/A. Each is listed in both EB2M-A and EB2M-B bodies.',
      },
      {
        question: 'Does releasing the emergency stop restart the machine?',
        answer: 'It should not. In a typical design, releasing the button only allows a restart, and a separate start or reset command is required. That behavior is set by the control circuit and must be verified by the machine builder.',
      },
      {
        question: 'Which documents are available for the EB2M emergency stops?',
        answer: 'Specify any compliance documentation required for your project alongside the controlled wiring diagram, terminal table, and outline drawing for the exact ordered model so the supplier can confirm validity, issuing entity, and covered model scope before ordering. Check which standards and regulations your machine must meet; machine safety design must be verified by a qualified engineer or machine builder.',
      },
    ],
  },
  {
    slug: '22mm-selector-switch-key-switch-spring-return-hand-off-auto',
    title: '22mm Selector and Key Switches: 2- vs 3-Position, Spring Return and Hand-Off-Auto Explained',
    description:
      'Specify 2- or 3-position 22mm selector and key switches, maintained or spring-return action, and Hand-Off-Auto operation.',
    tags: ['22mm Selector Switch', 'Applications'],
    image: '/images/blog/22mm-selector-switch-key-switch.jpg',
    imageAlt: 'Black lever selector beside a key switch with an inserted key and a hanging spare key.',
    publishedAt: 'Nov 13, 2026',
    readingMinutes: 8,
    heroSummary:
      'Selector and key switches set the operating mode of a machine, so an ordering mistake shows up as a machine that behaves differently from its drawing. This guide explains positions, maintained versus spring return action, the f, fu and f.fu codes, and typical uses such as Hand-Off-Auto, local/remote and forward-off-reverse.',
    sections: [
      {
        heading: 'Why Selector Switch Orders Go Wrong',
        paragraphs: [
          '"A three-position selector switch" is not a complete specification. It does not say whether the lever stays where it is turned or springs back, which side springs back, how many contacts it has, or whether it needs a key. Each of those details changes how a pump, conveyor or fan will run. A frequent complaint with selector and key switch orders is a part that is correct in size and color but wrong in action.',
          'This guide breaks the specification into four decisions: positions, action, contacts and operator style. It uses the EB2M Φ22 mm series to show how each decision appears in a model code. Full model tables are on our 22mm push button switch solutions page.',
        ],
      },
      {
        heading: 'Positions: 2-Position or 3-Position',
        paragraphs: [
          'A 2-position 22mm selector switch has two states, for example OFF/ON or LOCAL/REMOTE. A 3-position switch adds a third, usually in the center, for functions such as HAND-OFF-AUTO or FORWARD-OFF-REVERSE.',
          'In the EB2M series, the 2-position models carry the contact code -10 (1NO) and the 3-position models carry -20 (2NO). The key switches are printed this way explicitly, and the selector codes follow the same pattern. Confirm the positions on the catalog drawing of the exact model before you finalize the order:',
          'Each code is listed in both the Type A (EB2M-A) and Type B (EB2M-B) body.',
        ],
        bullets: [
          'Short lever, 2-position: -10X, -10X/fu; illuminated -10XD, -10XD/fu',
          'Short lever, 3-position: -20XS, -20XS/f.fu; illuminated -20XSD, -20XSD/f.fu',
          'Long lever, 2-position: -10CX, -10CX/fu; illuminated -10CXD, -10CXD/fu',
          'Long lever, 3-position: -20CXS, -20CXS/f.fu; illuminated -20CXSD, -20CXSD/f.fu',
          'Key switch, 2-position: -10Y, -10CY, -10CY/fu',
          'Key switch, 3-position: -20YS, -20CYS, -20CYS/f.fu',
        ],
      },
      {
        heading: 'Maintained or Spring Return: The f, fu and f.fu Codes',
        paragraphs: [
          'The second decision is whether the lever stays in position. A maintained selector stays where it is turned. A spring return selector goes back to its rest position when released, so it behaves like a momentary push button in the returning direction. Confirm the exact model\'s rest position and return direction against the supplier\'s controlled action diagram.` |',
          'In the EB2M catalog field key, spring-return entries are printed as f (left to center), fu (right to center), and ffu (both sides to center), while the printed model tables use a slash (/) between Field 3 and Field 4 and print /fu on 2-position rows and /f.fu on 3-position rows:',
          'Examples: EB2M-A-20XS is a 3-position short-lever selector that stays in each position. EB2M-B-20XS/f.fu is printed with a spring-return suffix. Confirm the exact return direction and suitability for the intended operation against the supplier\'s controlled action diagram.` | EB2M-A-10CY/fu is a 2-position key switch with the fu spring-return option.',
          'Write the suffix exactly as printed. "Spring return" without a direction is a common gap in selector and key switch inquiries, and it often leads to the wrong variant being delivered.',
        ],
        bullets: [
          'f: general-key entry for spring return from left to center',
          '/fu: printed on 2-position spring-return model rows (general key lists fu as right to center; confirm exact 2-position return direction on the model drawing)',
          '/f.fu: printed on 3-position model rows. Keep the dot verbatim and confirm the exact return direction against the supplier\'s controlled action diagram.` |',
          'No suffix: maintained',
        ],
      },
      {
        heading: 'Contacts: How Positions Map to NO Contacts',
        paragraphs: [
          'In a typical 3-position selector with two NO contacts, the center position leaves both contacts open and each side position closes one of them. That is what a Hand-Off-Auto or forward-off-reverse circuit needs: one contact for each active mode and nothing in the middle. A 2-position selector with one NO contact closes that contact in one position and leaves it open in the other.',
          'The switching diagram is what counts, not the typical pattern. Before wiring, confirm the position-to-contact map from the supplier\'s controlled switching diagram for the exact model and verify delivered units de-energized, then mark the verified map on your schematic.',
          'Series-level electrical ratings are printed under utilization categories AC-15 and DC-13, including AC-15 220 V / 5 A and DC-13 24 V / 4 A, with Ith 10 A. Confirm model-specific ratings and note that -20 (2NO) does not confirm electrical independence between contacts without the model wiring diagram. If the selector switches a contactor coil directly, check the coil current against the rating at your control voltage, not just the voltage.',
        ],
      },
      {
        heading: 'Hand-Off-Auto Selector Switch: A Worked Example',
        paragraphs: [
          'Hand-Off-Auto (HOA) is common on pumps, fans, HVAC and air-handling units, and conveyors. In HAND, the motor runs on the local command. In OFF, it does not run. In AUTO, it runs when an external signal calls for it, such as a PLC output, a level switch or a building management system.',
          'A typical way to build HOA with a 3-position, 2NO selector:',
          'For a generic HOA example, the lever normally stays in position, so a maintained selector such as -20XS or -20CXS may fit if the supplier confirms the exact model\'s availability, position assignment, and switching diagram. If the exact spring-return model returns to the verified center-OFF state, it will return there on release; that suits jog functions but not mode selection. Which side is HAND and which is AUTO is a convention, so follow your drawing and label the positions clearly on the panel. Also make sure the control logic handles the change from AUTO to HAND in a controlled way.',
        ],
        bullets: [
          'HAND position: one NO contact energizes the contactor coil through the local stop and overload circuit.',
          'OFF (center): both selector contacts are open, so neither the HAND nor the AUTO branch can energize the contactor coil through the switch.',
          'AUTO position: the second NO contact connects the external run signal to the contactor coil.',
          'Status: an illuminated selector such as -20XSD, or a separate pilot light, can provide visual status—confirm ordering lamp voltage, lamp type/current, DC polarity, and lamp-to-contact wiring topology on the supplier\'s model wiring diagram before wiring.',
        ],
      },
      {
        heading: 'Other Common Uses',
        paragraphs: [
          'Selectors and key switches cover far more than HOA. Typical pairings:',
        ],
        bullets: [
          'Local/remote selection in distribution and switchgear panels: a 2-position maintained selector (-10X or -10CX), or a key switch if only authorized staff should change it.',
          'Forward-off-reverse on motor starters: a 3-position maintained selector, with the two directions interlocked in the control circuit.',
          'Jog left/jog right or raise/lower: specify a 3-position selector with return from both sides to center if the application requires it. Confirm the exact model and return action against the supplier\'s controlled action diagram.` |',
          'Maintenance or setup mode: a key switch, so the mode cannot be changed without the key.',
          'Momentary test commands: a 2-position spring-return selector (confirm the exact model suffix, return direction, and switching diagram with the supplier), so it returns on release.',
        ],
      },
      {
        heading: 'Short Lever, Long Lever or Key',
        paragraphs: [
          'Short-lever selectors keep a low profile on the panel. Long-lever selectors are easier to turn with gloves and show their position from a distance. A 22mm key switch limits who can change the mode.',
          'Mechanical life is part of the choice. It is listed as ≥300,000 operations for selector switches and ≥50,000 for key switches. For a mode that is changed many times per shift, a 22mm selector switch has the higher listed mechanical life. For a mode changed rarely and only by authorized staff, a 22mm key switch fits. The catalog does not state in which positions the key can be removed, so if that matters for your procedure, confirm it before ordering.',
        ],
      },
      {
        heading: 'Body, Color and Panel Fit',
        paragraphs: [
          'Like the rest of the series, selectors and key switches are offered in Type A (EB2M-A, standard modular body) and Type B (EB2M-B, compact body), both mounting in a nominal Φ22 mm cutout and sharing series-level electrical data. Note that the commonly cited 52 × 30 mm (Type A) and 40 × 30 mm (Type B) figures are end-view outlines from the -10 flush push button drawings—not selector or key-switch dimensions—and the catalog does not publish minimum hole spacing or complete Type B panel-thickness callouts for lever selectors and -10CY/-20CYS key switches. Request exact head-type outline drawings and panel-thickness limits from the supplier before finalizing door layouts. The series color key lists red, green, yellow, blue, white, and black (R, G, Y, B, W, K); because illuminated selector rows show five-color margin dots while non-illuminated selector rows show a six-color example, confirm exact orderable colors by model.',
          'Using one series across a door helps keep bezels, colors, and part-numbering logic consistent. Series-level protection is listed as IP40 / IP65 (not allocated by individual model in the catalog), so confirm the exact model\'s IP rating and sealing requirements on your quote.',
        ],
      },
      {
        heading: 'Ordering Checklist',
        paragraphs: [
          'Before you send the inquiry, make sure each selector or key switch line states:',
          'A complete line looks like "EB2M-B-20XS/f.fu, color, quantity, destination". You can find every selector and key switch code on the 22mm push button switch page and send your list through the quote form.',
        ],
        bullets: [
          'Operator style: short lever, long lever or key',
          'Positions: 2 or 3',
          'Action: maintained or spring return. State the required direction and confirm the printed suffix and exact action with the supplier.',
          'Contacts: from the code, -10 or -20',
          'Illumination: if required, the lamp voltage from the printed list',
          'Body: EB2M-A or EB2M-B',
          'Color code',
          'Switching diagram confirmed against your schematic',
          'Quantity and destination',
        ],
      },
    ],
    faq: [
      {
        question: 'What do f, fu and f.fu mean on a selector switch?',
        answer: 'They denote spring-return options. In the catalog field key, f is listed as left to center, fu as right to center, and ffu as both sides to center; in the printed model tables, 2-position spring-return rows use /fu and 3-position rows use /f.fu. A code without these suffixes is maintained. Always confirm exact return behavior on the model drawing.',
      },
      {
        question: 'Which selector switch do I need for Hand-Off-Auto?',
        answer: 'In a generic Hand-Off-Auto (HOA) setup, a 3-position maintained selector (such as EB2M -20XS with a short lever or -20CXS with a long lever, where available and suitable for the control circuit) is typically considered, depending on the required contact arrangement. Before wiring, confirm the position-to-contact map and position assignment from the supplier\'s controlled switching diagram for the exact model and verify delivered units de-energized.',
      },
      {
        question: 'What is the difference between a selector switch and a key switch?',
        answer: 'Both select a mode. A key switch needs a key to turn, which helps restrict mode changes to the people who hold the key. Listed mechanical life is ≥300,000 operations for selector switches and ≥50,000 for key switches.',
      },
      {
        question: 'Can a 2-position selector be spring return?',
        answer: 'Yes. The EB2M series lists 2-position models with the fu option, for example -10X/fu, -10CX/fu and the key switch -10CY/fu.',
      },
      {
        question: 'Are selector switch ratings different from push button ratings?',
        answer: 'The catalog publishes shared series-level ratings under utilization categories AC-15 and DC-13, including AC-15 220 V / 5 A and Ith 10 A. Confirm model-specific ratings and electrical endurance with the supplier for your load.',
      },
    ],
  },
]

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
    slug: 'pv-combiner-box-certifications-iec-ce-ul',
    title: 'Must-Have Certifications for PV Combiner Boxes: IEC 61439, CE, UL Explained',
    description:
      'Wrong certification at the port = 11 days of demurrage and a refused container. This guide explains the five PV combiner box certifications that actually matter for B2B import, which market each unlocks, and how to verify every certificate before you sign the PO.',
    tags: ['PV Combiner Box', 'Certification'],
    image: '/images/blog/pv-combiner-box-certifications-iec-ce-ul.jpg',
    publishedAt: 'Apr 24, 2026',
    updatedAt: 'Nov 13, 2026',
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

const allPostData: readonly BlogPostSource[] = [
  ...EB2M_PROCUREMENT_ARTICLES.map(({ post, detail }) => ({ ...post, faq: detail.faq })),
  ...EB2M_ARTICLES.map(({ post, detail }) => ({ ...post, faq: detail.faq })),
  ...eb2mPostData,
  ...postData,
]

export const BLOG_POSTS: readonly BlogPost[] = allPostData.map((post) => {
  const publishedAt = dateFromSource(post.publishedAt)
  const category = categoryByTag[post.tags[1]] ?? categoryByTag[post.tags[0]] ?? 'Technical Knowledge'

  return {
    path: `/blog/${post.slug}`,
    slug: post.slug,
    title: post.title,
    description: post.description,
    image: post.image,
    imageAlt: post.imageAlt,
    imageFit: post.imageFit,
    category,
    tags: post.tags,
    publishedAt,
    updatedAt: post.updatedAt ? dateFromSource(post.updatedAt) : publishedAt,
    readingMinutes: post.readingMinutes,
    heroSummary: post.heroSummary ?? post.description,
    sections: post.sections ?? buildSections(post.title, post.description, post.tags),
    faq: post.faq ?? buildFaq(post.tags),
  }
})

export const BLOG_POST_COUNT = BLOG_POSTS.length

export const BLOG_POSTS_BY_PATH: Readonly<Record<string, BlogPost>> = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.path, post])
)

export function getBlogPostByPath(path: string): BlogPost | null {
  return BLOG_POSTS_BY_PATH[path] ?? null
}
