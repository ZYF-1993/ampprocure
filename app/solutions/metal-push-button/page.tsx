import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import InquiryActions from '@/components/InquiryActions'
import InquiryForm from '@/components/InquiryForm'
import OptimizedImage from '@/components/OptimizedImage'
import { absoluteOptimizedSrc } from '@/lib/optimized-image'
import { buildPageMetadata, jsonLdScript } from '@/lib/seo'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, inquiryMailto, inquiryMessage, SITE_NAME, SITE_URL, whatsappHref } from '@/lib/site-config'

const imageBase = '/images/solutions/metal-push-button'
const pagePath = '/solutions/metal-push-button'
const topic = 'metal push button'

export const metadata = buildPageMetadata({
  title: 'Metal Push Buttons',
  description:
    'Anti-vandal metal push buttons in 12–25 mm cutouts. Momentary or latching action, ring or dot illumination, screw or pin terminals. Request a quote.',
  path: pagePath,
  keywords: [
    'metal push button',
    'anti-vandal push button',
    'stainless steel push button',
    '16mm 19mm 22mm metal switch',
    'illuminated metal push button',
    'ring LED push button',
    'IP65 metal push button',
    'latching metal button',
  ],
  ogImage: '/optimized/display/images/solutions/metal-push-button/hero.webp',
})

type SpecRow = readonly [string, string]

type MetalModel = {
  model: string
  photo: string
  drawing?: string
  cells: readonly string[]
}

type Subgroup = {
  id: string
  title: string
  intro?: string
  specCaption: string
  specs: readonly SpecRow[]
  columns: readonly string[]
  models: readonly MetalModel[]
  footnote?: string
}

type Family = {
  id: string
  eyebrow: string
  title: string
  intro: string
  muted: boolean
  subgroups: readonly Subgroup[]
}

const glossary: readonly SpecRow[] = [
  ['高平圆形', 'high flush (high-flat round)'],
  ['平圆形', 'flush (flat-round)'],
  ['球形', 'dome'],
  ['高面', 'high face'],
  ['平面', 'flat'],
  ['平面形', 'flat-shaped'],
  ['自复式', 'momentary (self-resetting)'],
  ['自锁式', 'latching (maintained)'],
  ['接线柱 / ◎', 'screw terminals'],
  ['插脚 / J', 'pin terminals'],
  ['单点', 'dot illumination'],
  ['环形', 'ring illumination'],
  ['高强度抗破坏按钮开关', 'high-strength anti-vandal push-button switch'],
  ['不锈钢', 'stainless steel'],
  ['黄铜镀镍', 'nickel-plated brass'],
  ['黄铜镀铬', 'chrome-plated brass'],
  ['黄铜(镀铬或镀金)', 'brass, chrome- or gold-plated'],
]

const features = [
  {
    title: 'Five standard cutouts',
    text: 'Printed mounting holes are Φ12, Φ16, Φ19, Φ22 and Φ25 mm. No 30 mm model is listed.',
  },
  {
    title: 'Anti-vandal metal housings',
    text: 'Many rows are headed high-strength anti-vandal push-button switch. Housings are printed as stainless steel / nickel-plated brass, stainless steel / brass (chrome- or gold-plated), stainless steel / chrome-plated brass, or stainless steel only on the Φ25 rows.',
  },
  {
    title: 'Momentary or latching',
    text: 'Momentary (自复式) is listed on every row. Latching (自锁式) is listed on selected Φ16 models and on selected MP019-prefix models with a Φ16 mm cutout. Φ22 and Φ25 list momentary in the parameter block. Confirm latching on those two sizes before specifying it.',
  },
  {
    title: 'Dot or ring illumination',
    text: 'Where a lamp style is printed, it is dot (单点) or ring (环形). Power-symbol illumination is not listed. Lamp voltage and colour are the placeholders △ and ▲.',
  },
  {
    title: 'Screw or pin terminals',
    text: 'The catalog footer marks ◎ as the screw terminal (接线柱). Codes that include J are the pin-terminal (插脚) versions.',
  },
  {
    title: 'Ratings as printed',
    text: 'Φ12 is 2 A / 36 V DC. Φ16, including the MP019-prefix models with a printed Φ16 mm cutout, is 3 A / 250 V AC. Φ19, Φ22 and Φ25 are 5 A / 250 V AC.',
  },
  {
    title: 'Protection by model',
    text: 'Printed degrees are IP65, IP40/IP67, or IP68 on selected Φ19 screw-terminal types. One ingress rating does not cover the whole series.',
  },
  {
    title: 'Contacts as printed',
    text: 'Arrangements are 1NO, 1NO (1NC customizable), 1NO1NC, or 1NO1NC / 2NO2NC, depending on the row.',
  },
] as const

const families: readonly Family[] = [
  {
    id: 'phi-12',
    eyebrow: 'Φ12 mm',
    title: 'Φ12 mm metal push buttons',
    intro: 'Compact anti-vandal buttons, 2 A / 36 V DC, 1NO, momentary, IP65. No head-shape line is printed on these rows.',
    muted: false,
    subgroups: [
      {
        id: 'phi-12-mp12s',
        title: 'MP12S, screw and pin terminals',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', '高强度抗破坏按钮开关 (high-strength anti-vandal push-button switch)'],
          ['Mounting hole', 'Φ12 mm'],
          ['Rating', '2 A / 36 V DC'],
          ['Contacts', '1NO'],
          ['Operation', 'Momentary (自复式)'],
          ['Housing', 'Stainless steel / nickel-plated brass (不锈钢 / 黄铜镀镍)'],
          ['Protection', 'IP65'],
          ['Head shape', 'Not listed'],
        ],
        columns: ['Terminals', 'Notes'],
        models: [
          {
            model: 'MP12S/B-2◎',
            photo: 'mp12s-b-2-screw-photo.jpg',
            drawing: 'mp12s-b-2-screw-dimensions.jpg',
            cells: ['Screw (◎)', 'Outline drawing shows M12×1'],
          },
          {
            model: 'MP12S/B-2J',
            photo: 'mp12s-b-2j-photo.jpg',
            drawing: 'mp12s-b-2j-dimensions.jpg',
            cells: ['Pin (J)', 'Same electrical data as the screw type'],
          },
        ],
      },
    ],
  },
  {
    id: 'mp012h11z',
    eyebrow: 'Confirm on request',
    title: 'MP012H11Z',
    intro: 'Listed in this series with the same rating, contacts, operation, housing and IP65 as the Φ12 models above. The mounting hole and thread are not specified here.',
    muted: true,
    subgroups: [
      {
        id: 'mp012h11z-model',
        title: 'Published values',
        specCaption: 'Published values',
        specs: [
          ['Catalog title', '高强度抗破坏按钮开关 (high-strength anti-vandal push-button switch)'],
          ['Model', 'MP012H11Z'],
          ['Rating', '2 A / 36 V DC'],
          ['Contacts', '1NO'],
          ['Operation', 'Momentary (自复式)'],
          ['Housing', 'Stainless steel / nickel-plated brass (不锈钢 / 黄铜镀镍)'],
          ['Protection', 'IP65'],
          ['Terminals', 'Pin'],
          ['Mounting hole', 'Confirm on request'],
          ['Thread', 'Confirm on request'],
          ['Head shape', 'Not listed'],
        ],
        columns: ['Terminals', 'Mounting hole and thread'],
        models: [
          {
            model: 'MP012H11Z',
            photo: 'mp012h11z-photo.jpg',
            cells: ['Pin', 'Confirm on request'],
          },
        ],
      },
    ],
  },
  {
    id: 'phi-16',
    eyebrow: 'Φ16 mm',
    title: 'Φ16 mm metal push buttons',
    intro: 'The widest assortment: non-illuminated screw and pin types, plus illuminated and combination types. Ratings and protection vary by subgroup. Four models with an MP019 prefix and a printed Φ16 mm cutout are in a separate section.',
    muted: false,
    subgroups: [
      {
        id: 'phi-16-screw',
        title: 'Non-illuminated, screw terminals',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', '高强度抗破坏按钮开关 (high-strength anti-vandal push-button switch)'],
          ['Mounting hole', 'Φ16 mm'],
          ['Rating', '3 A / 250 V AC'],
          ['Contacts', '1NO (1NC customizable)'],
          ['Operation', 'Momentary (自复式)'],
          ['Housing', 'Stainless steel / brass, chrome- or gold-plated (不锈钢 / 黄铜(镀铬或镀金))'],
          ['Protection', 'IP65'],
        ],
        columns: ['Head shape', 'Terminals', 'Notes'],
        models: [
          {
            model: 'MP16S/H-2◎',
            photo: 'mp16s-h-2-screw-photo.jpg',
            drawing: 'mp16s-h-2-screw-dimensions.jpg',
            cells: ['高平圆形 (high flush)', 'Screw (◎)', 'Outline drawing shows M16×1'],
          },
          {
            model: 'MP16S/B-2◎',
            photo: 'mp16s-b-2-screw-photo.jpg',
            drawing: 'mp16s-b-2-screw-dimensions.jpg',
            cells: ['球形 (dome)', 'Screw (◎)', '—'],
          },
          {
            model: 'MP165/F-2◎',
            photo: 'mp165-f-2-screw-photo.jpg',
            drawing: 'mp165-f-2-screw-dimensions.jpg',
            cells: ['平圆形 (flush)', 'Screw (◎)', '—'],
          },
        ],
      },
      {
        id: 'phi-16-pin',
        title: 'Non-illuminated, pin terminals',
        intro: 'Same electrical data, housing, protection and head-shape wording as the matching screw-terminal rows. Terminals are pin (J).',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', '高强度抗破坏按钮开关 (high-strength anti-vandal push-button switch)'],
          ['Mounting hole', 'Φ16 mm'],
          ['Rating', '3 A / 250 V AC'],
          ['Contacts', '1NO (1NC customizable)'],
          ['Operation', 'Momentary (自复式)'],
          ['Housing', 'Stainless steel / brass, chrome- or gold-plated (不锈钢 / 黄铜(镀铬或镀金))'],
          ['Protection', 'IP65'],
          ['Terminals', 'Pin (J)'],
        ],
        columns: ['Head shape'],
        models: [
          {
            model: 'MP16S/H-2J',
            photo: 'mp16s-h-2j-photo.jpg',
            drawing: 'mp16s-h-2j-dimensions.jpg',
            cells: ['高平圆形 (high flush)'],
          },
          {
            model: 'MP16S/B-2J',
            photo: 'mp16s-b-2j-photo.jpg',
            drawing: 'mp16s-b-2j-dimensions.jpg',
            cells: ['球形 (dome)'],
          },
          {
            model: 'MP16S/F-2J',
            photo: 'mp16s-f-2j-photo.jpg',
            drawing: 'mp16s-f-2j-dimensions.jpg',
            cells: ['平圆形 (flush)'],
          },
        ],
      },
      {
        id: 'phi-16-illuminated',
        title: 'Illuminated, 1NO1NC / 2NO2NC',
        intro: 'Lamp voltage and colour use the placeholders △ and ▲. The catalog title and the lamp-style line are both shown as printed.',
        specCaption: 'Shared published values',
        specs: [
          ['Rating', '3 A / 250 V AC'],
          ['Contacts', '1NO1NC / 2NO2NC'],
          ['Operation', 'Momentary or latching (自复式/自锁式)'],
          ['Housing', 'Stainless steel / nickel-plated brass (不锈钢 / 黄铜镀镍)'],
          ['Protection', 'IP40/IP67'],
          ['Lamp voltage and colour', '△ and ▲. Confirm the required voltage and colour on request'],
        ],
        columns: ['Catalog title', 'Head shape', 'Illumination'],
        models: [
          {
            model: 'MP016S/H11-△▲D',
            photo: 'mp016s-h11-d-photo.jpg',
            drawing: 'mp016s-h11-d-dimensions.jpg',
            cells: ['金属单点带灯按钮开关 (metal dot-illuminated push-button switch)', '高平圆形 (high flush)', '单点 (dot)'],
          },
          {
            model: 'MP016S/H11-△▲E',
            photo: 'mp016s-h11-e-photo.jpg',
            drawing: 'mp016s-h11-e-dimensions.jpg',
            cells: ['金属单点带灯按钮开关 (metal dot-illuminated push-button switch)', '高平圆形 (high flush)', '环形 (ring)'],
          },
          {
            model: 'MP016S/F11-△▲D',
            photo: 'mp016s-f11-d-photo.jpg',
            drawing: 'mp016s-f11-d-dimensions.jpg',
            cells: ['金属单点带灯按钮开关 (metal dot-illuminated push-button switch)', '平圆形 (flush)', '单点 (dot)'],
          },
          {
            model: 'MP016S/F11-△▲E',
            photo: 'mp016s-f11-e-photo.jpg',
            drawing: 'mp016s-f11-e-dimensions.jpg',
            cells: ['16mm环形带灯按钮开关 (16 mm ring-illuminated push-button switch)', '高平圆形 (high flush)', '环形 (ring)'],
          },
        ],
      },
      {
        id: 'phi-16-combination',
        title: 'Combination types',
        intro: 'No lamp-style line is printed on these two rows.',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', '金属按钮开关 (metal push-button switch)'],
          ['Mounting hole', 'Φ16 mm'],
          ['Rating', '3 A / 250 V AC'],
          ['Contacts', '1NO1NC / 2NO2NC'],
          ['Operation', 'Momentary or latching (自复式/自锁式)'],
          ['Housing', 'Stainless steel / chrome-plated brass (不锈钢 / 黄铜镀铬)'],
          ['Protection', 'IP40/IP67'],
          ['Illumination', 'Not listed'],
        ],
        columns: ['Head shape'],
        models: [
          {
            model: 'MP016S/F11Z',
            photo: 'mp016s-f11z-photo.jpg',
            drawing: 'mp016s-f11z-dimensions.jpg',
            cells: ['平圆形 (flush)'],
          },
          {
            model: 'MP016S/H11Z',
            photo: 'mp016s-h11z-photo.jpg',
            drawing: 'mp016s-h11z-dimensions.jpg',
            cells: ['高平圆形 (high flush)'],
          },
        ],
      },
      {
        id: 'phi-16-pin-illuminated',
        title: 'Pin-terminal illuminated',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', 'Φ16插脚金属带灯按钮开关 (Φ16 pin-terminal metal illuminated push-button switch)'],
          ['Mounting hole', 'Φ16 mm'],
          ['Rating', '3 A / 250 V AC'],
          ['Contacts', '1NO'],
          ['Operation', 'Momentary (自复式)'],
          ['Housing', 'Stainless steel / chrome-plated brass (不锈钢 / 黄铜镀铬)'],
          ['Protection', 'IP65'],
          ['Head shape', 'Not listed'],
          ['Lamp voltage and colour', '△ and ▲. Confirm the required voltage and colour on request'],
        ],
        columns: ['Illumination'],
        models: [
          {
            model: 'MP016S/F2J-△▲D',
            photo: 'mp016s-f2j-d-photo.jpg',
            drawing: 'mp016s-f2j-d-dimensions.jpg',
            cells: ['单点 (dot)'],
          },
          {
            model: 'MP016S/F2J-△▲E',
            photo: 'mp016s-f2j-e-photo.jpg',
            drawing: 'mp016s-f2j-e-dimensions.jpg',
            cells: ['单点 (dot)'],
          },
        ],
      },
    ],
  },
  {
    id: 'phi-19',
    eyebrow: 'Φ19 mm',
    title: 'Φ19 mm metal push buttons',
    intro: '5 A / 250 V AC anti-vandal buttons, screw or pin. IP68 on three MP019S screw types, IP65 on the others. Head-shape wording is quoted as printed.',
    muted: true,
    subgroups: [
      {
        id: 'phi-19-screw',
        title: 'Screw terminals',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', '高强度抗破坏按钮开关 (high-strength anti-vandal push-button switch)'],
          ['Mounting hole', 'Φ19 mm'],
          ['Rating', '5 A / 250 V AC'],
          ['Contacts', '1NO (1NC customizable)'],
          ['Operation', 'Momentary (自复式)'],
          ['Housing', 'Stainless steel / brass, chrome- or gold-plated (不锈钢 / 黄铜(镀铬或镀金))'],
          ['Terminals', 'Screw (◎)'],
        ],
        columns: ['Head shape', 'Protection'],
        models: [
          {
            model: 'MP019S/H-2◎',
            photo: 'mp019s-h-2-screw-photo.jpg',
            drawing: 'mp019s-h-2-screw-dimensions.jpg',
            cells: ['高面 (high face)', 'IP68'],
          },
          {
            model: 'MP019S/F-2◎',
            photo: 'mp019s-f-2-screw-photo.jpg',
            drawing: 'mp019s-f-2-screw-dimensions.jpg',
            cells: ['平面 (flat)', 'IP68'],
          },
          {
            model: 'MP019S/B-2◎',
            photo: 'mp019s-b-2-screw-photo.jpg',
            drawing: 'mp019s-b-2-screw-dimensions.jpg',
            cells: ['球形 (dome)', 'IP68'],
          },
          {
            model: 'MP019B/10-◎',
            photo: 'mp019b-10-screw-photo.jpg',
            drawing: 'mp019b-10-screw-dimensions.jpg',
            cells: ['球形 (dome)', 'IP65'],
          },
          {
            model: 'MP019F/10-◎',
            photo: 'mp019f-10-screw-photo.jpg',
            drawing: 'mp019f-10-screw-dimensions.jpg',
            cells: ['平圆形 (flush)', 'IP65'],
          },
          {
            model: 'MP019H/10-◎',
            photo: 'mp019h-10-screw-photo.jpg',
            drawing: 'mp019h-10-screw-dimensions.jpg',
            cells: ['高平圆形 (high flush)', 'IP65'],
          },
        ],
      },
      {
        id: 'phi-19-pin',
        title: 'Pin terminals',
        intro: 'The prefix on these three rows is MP19S.',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', '高强度抗破坏按钮开关 (high-strength anti-vandal push-button switch)'],
          ['Mounting hole', 'Φ19 mm'],
          ['Rating', '5 A / 250 V AC'],
          ['Contacts', '1NO (1NC customizable)'],
          ['Operation', 'Momentary (自复式)'],
          ['Housing', 'Stainless steel / brass, chrome- or gold-plated (不锈钢 / 黄铜(镀铬或镀金))'],
          ['Protection', 'IP65'],
          ['Terminals', 'Pin (J)'],
        ],
        columns: ['Head shape'],
        models: [
          {
            model: 'MP19S/F-2J',
            photo: 'mp19s-f-2j-photo.jpg',
            drawing: 'mp19s-f-2j-dimensions.jpg',
            cells: ['平面形 (flat-shaped)'],
          },
          {
            model: 'MP19S/B-2J',
            photo: 'mp19s-b-2j-photo.jpg',
            drawing: 'mp19s-b-2j-dimensions.jpg',
            cells: ['球形 (dome)'],
          },
          {
            model: 'MP19S/H-2J',
            photo: 'mp19s-h-2j-photo.jpg',
            drawing: 'mp19s-h-2j-dimensions.jpg',
            cells: ['高平圆形 (high flush)'],
          },
        ],
      },
    ],
  },
  {
    id: 'mp019-phi-16',
    eyebrow: 'Printed cutout Φ16 mm',
    title: 'MP019 prefix, Φ16 mm cutout',
    intro: 'These four models are printed with an MP019 prefix and a mounting hole of Φ16 mm. They are listed here, not with the Φ19 models. Confirm the mounting hole when specifying these codes.',
    muted: false,
    subgroups: [
      {
        id: 'mp019-phi-16-combination',
        title: 'MP019S/F22Z and MP019S/F22Z-△▲E',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', '金属按钮开关 (metal push-button switch)'],
          ['Mounting hole', 'Φ16 mm'],
          ['Rating', '3 A / 250 V AC'],
          ['Contacts', '1NO1NC / 2NO2NC'],
          ['Operation', 'Momentary or latching (自复式/自锁式)'],
          ['Housing', 'Stainless steel / chrome-plated brass (不锈钢 / 黄铜镀铬)'],
          ['Protection', 'IP40/IP67'],
        ],
        columns: ['Head shape', 'Illumination'],
        models: [
          {
            model: 'MP019S/F22Z',
            photo: 'mp019s-f22z-photo.jpg',
            drawing: 'mp019s-f22z-dimensions.jpg',
            cells: ['平圆形 (flush)', 'Not listed'],
          },
          {
            model: 'MP019S/F22Z-△▲E',
            photo: 'mp019s-f22z-e-photo.jpg',
            drawing: 'mp019s-f22z-e-dimensions.jpg',
            cells: ['高平圆形 (high flush)', 'Not listed. Confirm on request'],
          },
        ],
      },
      {
        id: 'mp019-phi-16-pin',
        title: 'Pin-terminal illuminated',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', 'Φ16插脚金属带灯按钮开关 (Φ16 pin-terminal metal illuminated push-button switch)'],
          ['Mounting hole', 'Φ16 mm'],
          ['Rating', '3 A / 250 V AC'],
          ['Contacts', '1NO'],
          ['Operation', 'Momentary (自复式)'],
          ['Housing', 'Stainless steel / chrome-plated brass (不锈钢 / 黄铜镀铬)'],
          ['Protection', 'IP65'],
          ['Head shape', 'Not listed'],
          ['Lamp voltage and colour', '△ and ▲. Confirm the required voltage and colour on request'],
        ],
        columns: ['Illumination'],
        models: [
          {
            model: 'MP019S/F11Z-△▲D',
            photo: 'mp019s-f11z-d-photo.jpg',
            drawing: 'mp019s-f11z-d-dimensions.jpg',
            cells: ['单点 (dot)'],
          },
          {
            model: 'MP019S/B11Z-△▲E',
            photo: 'mp019s-b11z-e-photo.jpg',
            drawing: 'mp019s-b11z-e-dimensions.jpg',
            cells: ['单点 (dot)'],
          },
        ],
      },
    ],
  },
  {
    id: 'phi-22',
    eyebrow: 'Φ22 mm',
    title: 'Φ22 mm metal push buttons',
    intro: '5 A / 250 V AC, 1NO1NC, IP65, with ring or dot illumination on the rows that list a lamp style. No head-shape line is printed. The mid-code letter is not treated as a head shape.',
    muted: true,
    subgroups: [
      {
        id: 'phi-22-models',
        title: 'Models',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', '高强度抗破坏按钮开关 (high-strength anti-vandal push-button switch). Illuminated rows keep this title and add a lamp-style line.'],
          ['Mounting hole', 'Φ22 mm'],
          ['Rating', '5 A / 250 V AC'],
          ['Contacts', '1NO1NC'],
          ['Operation', 'Momentary (自复式)'],
          ['Housing', 'Stainless steel / chrome-plated brass (不锈钢 / 黄铜镀铬)'],
          ['Protection', 'IP65'],
          ['Head shape', 'Not listed'],
          ['Outline length (L)', 'Momentary 35.8 mm, as printed on the drawing'],
        ],
        columns: ['Illumination'],
        footnote: 'The outline drawing also prints a latching length of 40.8 mm. Confirm latching availability on request.',
        models: [
          {
            model: 'MP022/B11',
            photo: 'mp022-b11-photo.jpg',
            drawing: 'mp022-b11-dimensions.jpg',
            cells: ['None listed'],
          },
          {
            model: 'MP022/F11',
            photo: 'mp022-f11-photo.jpg',
            drawing: 'mp022-f11-dimensions.jpg',
            cells: ['None listed'],
          },
          {
            model: 'MP022/H11',
            photo: 'mp022-h11-photo.jpg',
            drawing: 'mp022-h11-dimensions.jpg',
            cells: ['None listed'],
          },
          {
            model: 'MP022/F11-△▲E',
            photo: 'mp022-f11-e-photo.jpg',
            drawing: 'mp022-f11-e-dimensions.jpg',
            cells: ['环形 (ring)'],
          },
          {
            model: 'MP022/F11-△▲D',
            photo: 'mp022-f11-d-photo.jpg',
            drawing: 'mp022-f11-d-dimensions.jpg',
            cells: ['单点 (dot)'],
          },
        ],
      },
    ],
  },
  {
    id: 'phi-25',
    eyebrow: 'Φ25 mm',
    title: 'Φ25 mm metal push buttons',
    intro: '5 A / 250 V AC, stainless-steel housing, IP65. The catalog title on these rows is the ring-illuminated title. The lamp-style line is quoted per model.',
    muted: false,
    subgroups: [
      {
        id: 'phi-25-models',
        title: 'Models',
        specCaption: 'Shared published values',
        specs: [
          ['Catalog title', '高强度抗破坏环形带灯按钮开关 (high-strength anti-vandal ring-illuminated push-button switch)'],
          ['Mounting hole', 'Φ25 mm'],
          ['Rating', '5 A / 250 V AC'],
          ['Contacts', '1NO1NC / 2NO2NC'],
          ['Operation', 'Momentary (自复式)'],
          ['Housing', 'Stainless steel (不锈钢)'],
          ['Protection', 'IP65'],
          ['Outline length (L)', 'Momentary 38.4 mm, as printed on the drawing'],
        ],
        columns: ['Illumination'],
        footnote: 'Where no lamp-style line is printed, illumination is not specified on this page. The outline drawing also prints a latching length of 41.4 mm. Confirm latching availability on request.',
        models: [
          {
            model: 'MP025S/F22',
            photo: 'mp025s-f22-photo.jpg',
            drawing: 'mp025s-f22-dimensions.jpg',
            cells: ['Not listed. Confirm on request'],
          },
          {
            model: 'MP025S/F22Z-△▲E',
            photo: 'mp025s-f22z-e-photo.jpg',
            drawing: 'mp025s-f22z-e-dimensions.jpg',
            cells: ['环形 (ring)'],
          },
          {
            model: 'MP025S/F22-△▲',
            photo: 'mp025s-f22-vc-photo.jpg',
            drawing: 'mp025s-f22-vc-dimensions.jpg',
            cells: ['单点 (dot)'],
          },
        ],
      },
    ],
  },
]

const omittedFromCatalog = [
  'Lamp voltage, other than the placeholder △, and lamp colour, other than the placeholder ▲.',
  'Electrical life and mechanical life.',
  'Lamp type, lamp current, and whether the lamp supply is separate from the switch rating.',
  'Operating temperature, humidity, pollution degree, and installation category.',
  'A product standard or certificate number for this series.',
  'Price, minimum order, lead time, and sample policy.',
  'A 30 mm mounting hole.',
  'Power-symbol illumination.',
] as const

const selectionSteps = [
  'Choose the mounting hole: Φ12, Φ16, Φ19, Φ22 or Φ25 mm. Four models are printed with an MP019 prefix and a Φ16 mm cutout. Confirm that cutout when those codes are specified. MP012H11Z also needs the mounting hole and thread confirmed.',
  'Choose the action. Momentary (自复式) is listed on every row. Latching (自锁式) is listed on selected Φ16 models and on selected MP019-prefix models with a Φ16 mm cutout. For Φ22 and Φ25, confirm latching availability before specifying it.',
  'Choose illumination: none, dot (单点), or ring (环形). Then give the lamp voltage and colour in the enquiry. The catalog shows only the placeholders △ and ▲. Power-symbol illumination is not listed.',
  'Choose terminals: screw (◎) or pin (J), where both exist.',
  'Choose the contact arrangement printed for that row: 1NO, 1NO (1NC customizable), 1NO1NC, or 1NO1NC / 2NO2NC.',
  'Match the printed protection to the installation: IP65, IP40/IP67, or IP68. Do not treat one figure as the series rating.',
  'In the enquiry, include the model as printed, cutout, momentary or latching action, illumination style, lamp voltage and colour if the button is illuminated, terminal type, contact arrangement, quantity, and destination.',
] as const

const relatedLinks = [
  { href: '/solutions', label: 'Solutions', text: 'All application pages on this site.' },
  { href: '/solutions/22mm-digital-display-indicator', label: '22mm digital display indicators', text: 'Panel meters for voltage, current, frequency, and temperature in a 22 mm cutout.' },
  { href: '/categories/circuit-breaker', label: 'Circuit breakers', text: 'Miniature circuit breakers for distribution and machine panels.' },
  { href: '/products/MCB-AC-1P', label: 'MCB 1P AC circuit breaker', text: 'A single-pole AC miniature circuit breaker already listed on this site.' },
  { href: '/categories/ats-dual-power-switch', label: 'ATS dual power switches', text: 'Automatic transfer switches for mains and generator panels.' },
  { href: '/products/ATS-ST-2P-63A-220V-110V', label: '63A 2P automatic transfer switch', text: 'A 2-pole 63 A transfer switch already listed on this site.' },
  { href: '/categories/over-voltage-protector', label: 'Over-voltage protectors', text: 'Self-resetting over/under-voltage protection for the same cabinets.' },
  { href: '/products/PN2-VA4', label: 'PN2-VA4 voltage protector', text: 'A self-resetting voltage protector already listed on this site.' },
  { href: '/categories/power-meter', label: 'Power meters', text: 'DIN-rail energy and multi-parameter meters for panel monitoring.' },
  { href: '/products/D52-2066', label: 'D52-2066 power meter', text: 'A DIN-rail 6-in-1 AC power monitor already listed on this site.' },
  { href: '/solutions/aerosol-fire-extinguisher', label: 'Aerosol fire extinguisher solutions', text: 'Cabinet fire suppression, listed as a separate solution.' },
  { href: '/contact', label: 'Contact / RFQ', text: 'Send a quotation request from the contact page.' },
] as const

const faqs = [
  [
    'What sizes of metal push button do you offer?',
    'This series is listed with five mounting holes: Φ12, Φ16, Φ19, Φ22 and Φ25 mm. There is no 30 mm metal push button in the catalog we are working from. Four models are printed with an MP019 prefix and a Φ16 mm cutout; we will confirm the correct cutout with the supplier if you are specifying those codes.',
  ],
  [
    'What is the difference between momentary and latching?',
    'Momentary (自复式) returns when released; latching (自锁式) stays in position until it is pressed again. Many Φ16 illuminated and combination models list both. Φ12 and the standard Φ19 rows list momentary only. Φ22 and Φ25 list momentary in the parameter block, but their outline drawings also give a latching body length (Φ22: 35.8 mm momentary, 40.8 mm latching; Φ25: 38.4 mm / 41.4 mm). Please confirm latching availability on Φ22 and Φ25 when you enquire.',
  ],
  [
    'Can the button be illuminated? Which voltages and colours are available?',
    'Selected models are listed with dot (单点) or ring (环形) illumination. A power-symbol lamp is not listed in this catalog. Lamp voltage and colour are shown only as the placeholders △ and ▲. The catalog does not print a voltage or colour table. Tell us the voltage and colour you need and we will confirm them with the supplier.',
  ],
  [
    'What electrical ratings and IP ratings are published?',
    'As printed: Φ12 is 2 A / 36 V DC, IP65. Most Φ16 types are 3 A / 250 V AC, with IP65 or IP40/IP67 depending on the row. Standard Φ19 types are 5 A / 250 V AC, with IP68 on the MP019S/H-2◎, F-2◎ and B-2◎ screw types and IP65 on the others. Φ22 and Φ25 are 5 A / 250 V AC, IP65. Do not assume one IP rating covers the whole series.',
  ],
  [
    'Screw terminals or pin terminals — how do I tell them apart?',
    'The catalog footer marks ◎ as the screw terminal (接线柱). Model codes that include J are the pin-terminal (插脚) versions, and several titles are explicitly pin-terminal metal illuminated switches. Choose the terminal style that matches your wiring practice, and we can confirm the pin arrangement from the outline drawing of the model you select.',
  ],
  [
    'Which certificates can you provide?',
    'Product-level certificates are not printed on the metal push-button catalog pages. We will confirm the applicable documents for your destination market on request.',
  ],
] as const

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${pagePath}#webpage`,
      url: `${SITE_URL}${pagePath}`,
      name: 'Metal Push Button Solutions',
      description:
        'Anti-vandal metal push buttons in 12–25 mm cutouts. Momentary or latching action, ring or dot illumination, screw or pin terminals. Request a quote.',
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    },
    {
      '@type': 'ItemList',
      name: 'Metal push buttons',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Φ12 Metal Push Button',
          url: `${SITE_URL}${pagePath}#phi-12`,
          image: absoluteOptimizedSrc(`${imageBase}/mp12s-b-2-screw-photo.jpg`),
          description: '12 mm-cutout anti-vandal metal push buttons, 2 A / 36 V DC, 1NO, momentary, IP65, screw or pin terminals.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Φ16 Metal Push Button',
          url: `${SITE_URL}${pagePath}#phi-16`,
          image: absoluteOptimizedSrc(`${imageBase}/mp16s-h-2-screw-photo.jpg`),
          description: '16 mm-cutout metal push buttons, 3 A / 250 V AC, momentary or latching on selected models, optional dot or ring illumination, IP65 or IP40/IP67. Includes models printed with an MP019 prefix and a Φ16 mm cutout.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Φ19 Metal Push Button',
          url: `${SITE_URL}${pagePath}#phi-19`,
          image: absoluteOptimizedSrc(`${imageBase}/mp019s-h-2-screw-photo.jpg`),
          description: '19 mm-cutout anti-vandal metal push buttons, 5 A / 250 V AC, 1NO (1NC customizable), IP68 or IP65 depending on the model.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Φ22 Metal Push Button',
          url: `${SITE_URL}${pagePath}#phi-22`,
          image: absoluteOptimizedSrc(`${imageBase}/mp022-b11-photo.jpg`),
          description: '22 mm-cutout anti-vandal metal push buttons, 5 A / 250 V AC, 1NO1NC, IP65, with optional ring or dot illumination.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Φ25 Metal Push Button',
          url: `${SITE_URL}${pagePath}#phi-25`,
          image: absoluteOptimizedSrc(`${imageBase}/mp025s-f22z-e-photo.jpg`),
          description: '25 mm-cutout metal push buttons in a stainless-steel housing, 5 A / 250 V AC, 1NO1NC / 2NO2NC, IP65, with ring or dot options.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">{title}</h2>
      {text ? <p className="mt-3 text-base leading-7 text-gray-500">{text}</p> : null}
      <div className="mx-auto mt-4 h-0.5 w-12 rounded bg-green-600" />
    </div>
  )
}

function SpecTable({ caption, rows }: { caption: string; rows: readonly SpecRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="min-w-full text-left text-sm">
        <caption className="border-b border-gray-100 px-5 py-4 text-left text-base font-semibold text-gray-950">{caption}</caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-gray-100 last:border-0">
              <th scope="row" className="w-2/5 px-5 py-3 align-top font-medium text-gray-900">{label}</th>
              <td className="px-5 py-3 text-gray-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ModelTable({ columns, models }: { columns: readonly string[]; models: readonly MetalModel[] }) {
  return (
    <div className="mt-6 max-w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full min-w-[720px] text-left text-sm">
        <caption className="sr-only">Model list</caption>
        <thead className="bg-gray-50 text-gray-900">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold">Model</th>
            {columns.map((column) => (
              <th key={column} scope="col" className="px-4 py-3 font-semibold">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {models.map((item) => (
            <tr key={item.model} className="border-t border-gray-100">
              <th scope="row" className="px-4 py-3 align-top font-semibold text-gray-950">{item.model}</th>
              {item.cells.map((cell, index) => (
                <td key={`${item.model}-${columns[index] ?? index}`} className="px-4 py-3 align-top text-gray-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ModelCards({ columns, models }: { columns: readonly string[]; models: readonly MetalModel[] }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {models.map((item) => (
        <article key={item.model} className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="relative h-52 bg-white">
            <OptimizedImage
              src={`${imageBase}/${item.photo}`}
              alt={`${item.model} metal push button`}
              fill
              className="object-contain p-4"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-1 flex-col border-t border-gray-100 p-5">
            <h4 className="text-base font-bold text-gray-950">{item.model}</h4>
            <dl className="mt-3 space-y-2">
              {columns.map((column, index) => (
                <div key={`${item.model}-${column}`}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">{column}</dt>
                  <dd className="text-sm text-gray-700">{item.cells[index]}</dd>
                </div>
              ))}
            </dl>
            {item.drawing ? (
              <div className="relative mt-4 h-40 rounded-xl bg-gray-50">
                <OptimizedImage
                  src={`${imageBase}/${item.drawing}`}
                  alt={`${item.model} outline drawing`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>
            ) : (
              <p className="mt-4 rounded-xl bg-gray-50 px-3 py-4 text-sm leading-6 text-gray-600">Outline dimensions: confirm on request.</p>
            )}
            <Link href="#contact-form" className="mt-5 inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800">
              Get Quote
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

function FamilySection({ family }: { family: Family }) {
  return (
    <section id={family.id} className={`scroll-mt-24 overflow-x-hidden ${family.muted ? 'bg-gray-50' : 'bg-white'} py-16 sm:py-20`}>
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={family.eyebrow} title={family.title} text={family.intro} />
        <div className="mt-12 space-y-16">
          {family.subgroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <h3 className="text-xl font-bold text-gray-950">{group.title}</h3>
              {group.intro ? <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">{group.intro}</p> : null}
              <div className="mt-6 max-w-3xl">
                <SpecTable caption={group.specCaption} rows={group.specs} />
              </div>
              <ModelTable columns={group.columns} models={group.models} />
              {group.footnote ? <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600">{group.footnote}</p> : null}
              <ModelCards columns={group.columns} models={group.models} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function MetalPushButtonSolutionPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(pageJsonLd) }} />

      <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-24">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            tone="inverse"
            items={[
              { name: 'Home', href: '/', path: '/' },
              { name: 'Solutions', href: '/solutions', path: '/solutions' },
              { name: 'Metal Push Buttons', path: pagePath },
            ]}
          />
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-xl flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-400">Panel Control Components</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">Metal Push Button Solutions</h1>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                Anti-vandal metal push buttons for control panels and equipment. The range covers 12, 16, 19, 22 and 25 mm mounting holes, in momentary or latching action, with optional ring or dot illumination and a choice of screw or pin terminals. Housings are listed as stainless steel or stainless steel with plated brass, and protection degrees include IP65, IP40/IP67 or IP68 depending on the model.
              </p>
              <div className="mt-8">
                <InquiryActions topic={topic} formHref="#contact-form" tone="dark" />
              </div>
            </div>
            <div className="w-full shrink-0 lg:w-[460px] xl:w-[540px]">
              <div className="relative h-[300px] overflow-hidden rounded-3xl bg-white shadow-2xl sm:h-[340px]">
                <OptimizedImage
                  src={`${imageBase}/hero.jpg`}
                  alt="Metal push buttons in 12, 16, 19, 22 and 25 mm cutouts"
                  fill
                  priority
                  className="object-contain p-3"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                Family photograph across the listed cutouts. Order from the model tables below. Marks visible on some product photographs are not published certificates for this series.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Applications"
            title="When the panel needs a metal operator"
            text="A compact, vandal-resistant push button for a round cutout that is already specified."
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-gray-950">The panel requirement</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Panel builders often need a compact, vandal-resistant operator for a standard round cutout — sometimes with a status lamp in the same device, and sometimes with a higher ingress rating than a general-purpose plastic head. A metal anti-vandal button is the usual choice when the front of the panel may see frequent use, moisture, or mechanical abuse, and the cutout is already specified as 12, 16, 19, 22 or 25 mm.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-950">No catalog application list</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                The metal push-button pages do not print an industry list. Choose the model from the mounting hole, action, illumination, terminals, contacts, and protection printed below. These operators can be specified in the same control cabinet as UPprocure circuit breakers, ATS units, over/under-voltage protectors, and the 22mm digital display indicators.
              </p>
              <Link href="/solutions/22mm-digital-display-indicator" className="mt-4 inline-flex text-sm font-semibold text-green-700 hover:text-green-800">
                22mm digital display indicators
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Overview"
            title="One series, five mounting holes"
            text="This page lists 38 models. Select the cutout first, then the terminal style and illumination."
          />
          <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-gray-600">
            The metal push-button series is a family of panel-mounted, metal-bodied push-button switches. Many rows are titled high-strength anti-vandal push-button switch. Other rows are titled as metal illuminated switches, dot or ring, or simply as metal push-button switches. Catalog legend: △ is voltage, ▲ is colour, and ◎ is the screw terminal.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold text-gray-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['#phi-12', 'Φ12 mm', '2 A / 36 V DC, 1NO, momentary, IP65, screw or pin.'],
              ['#phi-16', 'Φ16 mm', 'Non-illuminated, illuminated, and combination types. 3 A / 250 V AC. IP65 or IP40/IP67.'],
              ['#phi-19', 'Φ19 mm', '5 A / 250 V AC, 1NO (1NC customizable), screw or pin, IP68 or IP65.'],
              ['#phi-22', 'Φ22 mm', '5 A / 250 V AC, 1NO1NC, IP65, with ring or dot illumination where listed.'],
              ['#phi-25', 'Φ25 mm', '5 A / 250 V AC, stainless-steel housing, IP65, with ring or dot where a lamp style is listed.'],
              ['#mp019-phi-16', 'MP019 prefix, Φ16 mm', 'Four models printed with an MP019 prefix and a Φ16 mm cutout. Not filed under Φ19.'],
            ].map(([href, title, text]) => (
              <Link key={href} href={href} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-green-600">
                <h3 className="text-base font-bold text-gray-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="glossary" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Glossary" title="Terms as printed" text="Chinese catalog terms are kept as printed, with the English gloss used on this page." />
          <div className="mx-auto mt-10 max-w-3xl">
            <SpecTable caption="Catalog terms" rows={glossary} />
          </div>
        </div>
      </section>

      <div id="specifications">
        {families.map((family) => (
          <FamilySection key={family.id} family={family} />
        ))}
      </div>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Specifications" title="Not stated for this series" text="These items are not printed for the metal push-button series, so they are not listed above." />
          <ul className="mx-auto mt-10 max-w-3xl space-y-3">
            {omittedFromCatalog.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm leading-6 text-gray-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="selection" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Selection" title="Model selection guide" />
          <ol className="mx-auto mt-10 max-w-3xl list-decimal space-y-3 pl-5 text-sm leading-7 text-gray-600">
            {selectionSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Related equipment"
            title="Works alongside other cabinet products"
            text="The list below is UPprocure site context. It is not a catalog application claim for this push-button family."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-green-600">
                <h3 className="text-sm font-bold text-gray-950">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">Documents</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Certificates on request</h2>
          <p className="mt-4 text-base leading-8 text-gray-600">
            Product-level certificates for the metal push-button series are available on request. Share your target market and we will confirm the applicable documents before order.
          </p>
        </div>
      </section>

      <section className="bg-gray-700 py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Request a quote for metal push buttons</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-gray-300">
            Send the model as printed (for example MP16S/H-2◎, MP016S/H11-△▲E or MP022/F11-△▲D), cutout, quantity, destination, whether you need momentary or latching action, and the lamp voltage and colour if the button is illuminated. The same request can go by email, the form, or WhatsApp.
          </p>
          <div className="mx-auto mt-8 max-w-4xl">
            <InquiryActions topic={topic} formHref="#contact-form" tone="dark" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Questions about metal push buttons</h2>
            <div className="mx-auto mt-3 h-0.5 w-12 rounded bg-green-600" />
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-700">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">Contact Us</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">Send the model, quantity, and destination. The form, email, and WhatsApp all reach the same sales desk.</p>
            <div className="mt-7 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Address</p>
                <p className="mt-1 text-sm text-gray-700">No. 24, Lane 3, Ouchao South Road, Huanghua Village, Liushi Town, Yueqing City, Wenzhou, Zhejiang Province, China</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email</p>
                <a href={inquiryMailto('RFQ: metal push button')} className="mt-1 block text-sm text-gray-800 hover:text-green-700">{CONTACT_EMAIL}</a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Phone</p>
                <a href="tel:+8613552727303" className="mt-1 block text-sm text-gray-800 hover:text-green-700">{CONTACT_PHONE_DISPLAY}</a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">WhatsApp</p>
                <a href={whatsappHref(inquiryMessage(topic))} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-gray-800 hover:text-green-700">{CONTACT_PHONE_DISPLAY}</a>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Business Hours</h3>
                <dl className="mt-3 space-y-1.5 text-xs">
                  {['Monday – Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div key={day} className="flex justify-between">
                      <dt className="text-gray-500">{day}</dt>
                      <dd className="font-medium text-gray-800">09:00 – 22:00 CST</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-gray-400">Emails are monitored outside hours. We aim to respond within 24 hours on business days.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">Send an Enquiry</h2>
              <p className="mt-1 text-xs text-gray-500">All fields marked * are required.</p>
              <InquiryForm source="metal-push-button-solution" defaultProduct="Metal Push Button" submitLabel="Send Now" twoColumnOnDesktop showInquiryType />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
