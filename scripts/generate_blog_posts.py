import json
import re
from pathlib import Path
from typing import Dict, List

CATALOG_PATH = Path('lib/catalog-products.ts')
BLOG_OUTPUT = Path('lib/blog-posts.ts')

raw_catalog = CATALOG_PATH.read_text(encoding='utf-8')
match = re.search(r'export const CATALOG_PRODUCTS =\s*(\[.*?\])\s*as const', raw_catalog, re.S)
if not match:
    raise RuntimeError('Could not parse CATALOG_PRODUCTS from lib/catalog-products.ts')

catalog_products = json.loads(match.group(1))


def tokenize(text):
    return [token for token in re.split(r'[^a-z0-9]+', text.lower()) if len(token) >= 2]


def pick_products(query, limit=4):
    query_tokens = set(tokenize(query))
    scored = []
    for product in catalog_products:
        bag = "{} {} {} {}".format(
            product['name'], product['category'], ' '.join(product['models']), product['technicalSummary']
        ).lower()
        score = sum(1 for token in query_tokens if token in bag)
        if score > 0:
            scored.append((score, product))

    scored.sort(key=lambda item: item[0], reverse=True)
    if scored:
        return [item[1] for item in scored[:limit]]
    return catalog_products[:limit]


POST_BLUEPRINTS = [
    {
        'path': '/news/inverter-industry-trends-in-2025.html',
        'slug': 'inverter-industry-trends-in-2025',
        'title': '2026 Inverter Buying Trends: What Importers and Distributors Should Plan Now',
        'description': 'A practical buying guide for importers and distributors planning inverter product lines in 2026.',
        'category': 'Market Insight',
        'tags': ['inverter market trends', 'B2B sourcing', 'power inverter wholesale', 'OEM strategy'],
        'query': 'market trend pure sine wave inverter modified inverter portable power station battery charger',
    },
    {
        'path': '/news/power-inverter-definition-function-working-principle-and-components.html',
        'slug': 'power-inverter-definition-function-working-principle-and-components',
        'title': 'Power Inverter Basics: How to Choose the Right Model for Real Applications',
        'description': 'A customer-oriented guide to inverter function, key components, and selection checkpoints.',
        'category': 'Technical Knowledge',
        'tags': ['power inverter basics', 'inverter architecture', 'B2B technical training', 'procurement checklist'],
        'query': 'power inverter printed circuit board pure sine wave modified sine wave',
    },
    {
        'path': '/news/inverter-board-definition-working-principle-application-scenarios-and-types.html',
        'slug': 'inverter-board-definition-working-principle-application-scenarios-and-types',
        'title': 'Inverter Board Selection Guide for OEM Projects',
        'description': 'A practical guide for choosing board-level inverter modules for custom products.',
        'category': 'Technical Knowledge',
        'tags': ['inverter board', 'OEM integration', 'ODM modules', 'power electronics design'],
        'query': 'power inverter printed circuit board 1000w 1500w 2000w 3000w board',
    },
    {
        'path': '/news/inverter-board-inspection-repair-and-replacement-guide.html',
        'slug': 'inverter-board-inspection-repair-and-replacement-guide',
        'title': 'Inverter Board Troubleshooting: Inspection and Replacement Checklist',
        'description': 'A clear checklist to identify faults quickly and reduce replacement risk.',
        'category': 'Maintenance',
        'tags': ['inverter repair', 'service workflow', 'failure analysis', 'after-sales SOP'],
        'query': 'repair inverter board protection alarm fan cooling fuse',
    },
    {
        'path': '/news/pure-sine-wave-inverter-selection-guides-from-car-to-home.html',
        'slug': 'pure-sine-wave-inverter-selection-guides-from-car-to-home',
        'title': 'Pure Sine Wave Inverter Selection Guide: From Vehicle Use to Home Backup',
        'description': 'A scenario-based guide for selecting pure sine wave models with confidence.',
        'category': 'Selection Guide',
        'tags': ['pure sine wave inverter', 'model selection', 'vehicle inverter', 'home backup power'],
        'query': 'pure sine wave inverter 600w 1000w 2000w 3000w',
    },
    {
        'path': '/news/dealer-guide-modified-sine-wave-vs-pure-sine-wave-inverters.html',
        'slug': 'dealer-guide-modified-sine-wave-vs-pure-sine-wave-inverters',
        'title': 'Modified vs Pure Sine Wave Inverters: Which One Fits Your Customers Best?',
        'description': 'A practical comparison to match waveform type with customer application and budget.',
        'category': 'Selection Guide',
        'tags': ['modified sine wave', 'pure sine wave', 'dealer strategy', 'SKU planning'],
        'query': 'modified sine wave inverter pure sine wave inverter category strategy',
    },
    {
        'path': '/news/using-a-power-inverter-for-rv-and-camping-complete-guide.html',
        'slug': 'using-a-power-inverter-for-rv-and-camping-complete-guide',
        'title': 'RV and Camping Power Guide: How to Choose the Right Inverter Setup',
        'description': 'A practical field guide for selecting inverters for RV and camping scenarios.',
        'category': 'Application',
        'tags': ['RV inverter', 'camping power', 'application guide', 'channel enablement'],
        'query': 'rv camping pure sine inverter portable power station battery charger',
    },
    {
        'path': '/news/what-can-i-run-off-a-600-watt-inverter.html',
        'slug': 'what-can-i-run-off-a-600-watt-inverter',
        'title': 'What Can a 600W Inverter Run? Real-World Appliance Guide',
        'description': 'A practical appliance compatibility guide for customers considering a 600W inverter.',
        'category': 'Application',
        'tags': ['600w inverter', 'load compatibility', 'sales scripts', 'entry-level inverter'],
        'query': '600w inverter pure sine modified sine small electronics',
    },
    {
        'path': '/news/will-a-1000-watt-power-inverter-run-a-refrigerator-complete-guide.html',
        'slug': 'will-a-1000-watt-power-inverter-run-a-refrigerator-complete-guide',
        'title': 'Can a 1000W Inverter Run a Refrigerator? What You Should Check First',
        'description': 'Understand startup surge, runtime behavior, and key configuration checks before purchase.',
        'category': 'Application',
        'tags': ['1000w inverter', 'refrigerator startup current', 'system matching', 'field deployment'],
        'query': '1000w inverter refrigerator startup surge pure sine wave',
    },
    {
        'path': '/news/comprehensive-guide-for-12v-3000w-pure-sine-wave-inverter.html',
        'slug': 'comprehensive-guide-for-12v-3000w-pure-sine-wave-inverter',
        'title': '12V 3000W Pure Sine Wave Inverter: Complete Selection and Setup Guide',
        'description': 'A complete guide to selecting and configuring a 12V 3000W pure sine wave inverter.',
        'category': 'Selection Guide',
        'tags': ['12v 3000w inverter', 'project procurement', 'pure sine wave', 'system design'],
        'query': '3000w pure sine wave inverter 12v 24v 48v',
    },
    {
        'path': '/news/rv-inverter-vs-generator-which-one-makes-sense-for-your-camping-style.html',
        'slug': 'rv-inverter-vs-generator-which-one-makes-sense-for-your-camping-style',
        'title': 'RV Inverter vs Generator: Which Option Is Better for Your Use Case?',
        'description': 'A scenario-based comparison to help buyers choose the right mobile power option.',
        'category': 'Application',
        'tags': ['rv inverter vs generator', 'channel strategy', 'hybrid power package', 'camping power systems'],
        'query': 'rv inverter generator portable power station battery charger',
    },
    {
        'path': '/news/7-different-modified-sine-wave-inverter-vs-pure-sine-wave-inverter.html',
        'slug': '7-different-modified-sine-wave-inverter-vs-pure-sine-wave-inverter',
        'title': '7 Key Differences Between Modified and Pure Sine Wave Inverters',
        'description': 'A clear side-by-side comparison to help customers pick the right inverter type.',
        'category': 'Selection Guide',
        'tags': ['waveform comparison', 'procurement framework', 'compatibility planning', 'service cost control'],
        'query': 'modified sine wave pure sine wave inverter comparison',
    },
    {
        'path': '/news/1000w-inverter-guide-power-solutions-for-your-needs-with-jyins-electric.html',
        'slug': '1000w-inverter-guide-power-solutions-for-your-needs-with-jyins-electric',
        'title': '1000W Inverter Buying Guide: Best-Fit Models by Application',
        'description': 'A practical guide to choosing 1000W inverter models for common use cases.',
        'category': 'Selection Guide',
        'tags': ['1000w inverter supplier', 'inverter selection matrix', 'B2B SKU planning', 'power backup solutions'],
        'query': '1000w pure sine wave inverter modified inverter inverter charger portable power station',
    },
    {
        'path': '/news/what-is-the-life-expectancy-of-a-sine-wave-inverteris-pure-sine-wave-worth-it.html',
        'slug': 'what-is-the-life-expectancy-of-a-sine-wave-inverteris-pure-sine-wave-worth-it',
        'title': 'How Long Does an Inverter Last? Reliability and Maintenance Guide',
        'description': 'A practical guide to inverter lifespan, maintenance planning, and reliability checks.',
        'category': 'Maintenance',
        'tags': ['inverter lifespan', 'reliability checklist', 'after-sales risk control', 'quality validation'],
        'query': 'inverter life expectancy reliability fan cooling overload protection battery charger',
    },
]


def format_product_line(product):
    highlights = product.get('highlights', [])
    main_specs = []
    for item in highlights[:2]:
        value = re.sub(r'\s+', ' ', item.get('value', '').replace('Single Choice)', '')).strip()
        main_specs.append('{}: {}'.format(item.get('label'), value))

    details = '; '.join(main_specs) if main_specs else 'Key specs available in catalog'
    return '{} (Catalog Page {}) - {}.'.format(product['name'], product['catalogPage'], details)


def build_sections(post, products):
    product_names = ', '.join(product['name'] for product in products[:3])

    section_1 = {
        'heading': 'What This Guide Helps You Decide',
        'paragraphs': [
            'If you are evaluating {}, start with your real application instead of comparing price alone.'.format(post['title']),
            'Popular options for this scenario include {}, each suited for different loads and operating conditions.'.format(product_names),
            'A clear power target, voltage platform, and runtime expectation will help you choose the right model faster.',
        ],
        'bullets': [
            'List the appliances or equipment you need to run',
            'Confirm rated power, surge power, and input voltage',
            'Check cooling method, protection functions, and installation environment',
        ],
    }

    section_2 = {
        'heading': 'Recommended Models and Catalog Page References',
        'paragraphs': [
            'The following models are commonly selected for this scenario.',
            'You can open the exact catalog page for each option and review technical details immediately.',
        ],
        'bullets': [format_product_line(product) for product in products[:4]],
    }

    section_3 = {
        'heading': 'How to Confirm the Right Specifications',
        'paragraphs': [
            'Before placing an order, confirm critical specifications in one checklist to avoid mismatches.',
            'This step helps you receive an accurate quotation and reduces revision rounds.',
        ],
        'bullets': [
            'Share your destination market, voltage standard, and quantity plan',
            'Confirm battery type, charging profile, and expected working temperature',
            'Request packaging, labeling, and manual requirements in advance',
        ],
    }

    section_4 = {
        'heading': 'Next Step: Request a Tailored Quotation',
        'paragraphs': [
            'After you shortlist a few models, submit your requirement so we can recommend the best-fit configuration.',
            'If needed, we can also support private labeling, packaging customization, and OEM/ODM project alignment.',
        ],
        'bullets': [
            'Send your power range, voltage, and application scenario',
            'Get model comparison with key technical differences',
            'Move forward with sample validation and production planning',
        ],
    }

    return [section_1, section_2, section_3, section_4]


def build_faq(products):
    first_product = products[0]
    second_product = products[1] if len(products) > 1 else products[0]

    return [
        {
            'question': 'How do we shortlist models quickly for this requirement?',
            'answer': (
                'Start from your real load profile and input voltage, then compare {} and {} by surge performance, '
                'waveform compatibility, and runtime stability.'.format(first_product['name'], second_product['name'])
            ),
        },
        {
            'question': 'What information should we send for a fast quotation?',
            'answer': (
                'Please include destination market, compliance requirements, target quantity, battery type, and your preferred models or catalog pages.'
            ),
        },
    ]


posts = []
for blueprint in POST_BLUEPRINTS:
    matched_products = pick_products(blueprint['query'], limit=4)

    post = {
        'path': blueprint['path'],
        'slug': blueprint['slug'],
        'title': blueprint['title'],
        'description': blueprint['description'],
        'category': blueprint['category'],
        'tags': blueprint['tags'],
        'publishedAt': '2026-04-11',
        'updatedAt': '2026-04-11',
        'readingMinutes': 9,
        'heroSummary': (
            'This guide is written for business buyers who need clear model recommendations, visible technical parameters, and fast quotation support.'
        ),
        'sections': build_sections(blueprint, matched_products),
        'faq': build_faq(matched_products),
    }
    posts.append(post)

text = []
text.append('export type BlogSection = {')
text.append('  heading: string')
text.append('  paragraphs: readonly string[]')
text.append('  bullets?: readonly string[]')
text.append('}')
text.append('')
text.append('export type BlogFaq = {')
text.append('  question: string')
text.append('  answer: string')
text.append('}')
text.append('')
text.append('export type BlogPost = {')
text.append('  path: string')
text.append('  slug: string')
text.append('  title: string')
text.append('  description: string')
text.append('  publishedAt: string')
text.append('  updatedAt: string')
text.append('  readingMinutes: number')
text.append("  category: 'Selection Guide' | 'Technical Knowledge' | 'Application' | 'Maintenance' | 'Market Insight'")
text.append('  tags: readonly string[]')
text.append('  heroSummary: string')
text.append('  sections: readonly BlogSection[]')
text.append('  faq: readonly BlogFaq[]')
text.append('}')
text.append('')
text.append('export const BLOG_POSTS = ' + json.dumps(posts, ensure_ascii=True, indent=2) + ' as const satisfies readonly BlogPost[]')
text.append('')
text.append('export const BLOG_POST_COUNT = BLOG_POSTS.length')
text.append('')
text.append('export const BLOG_POSTS_BY_PATH: Readonly<Record<string, BlogPost>> = Object.fromEntries(')
text.append('  BLOG_POSTS.map((post) => [post.path, post])')
text.append(')')
text.append('')
text.append('export function getBlogPostByPath(path: string): BlogPost | null {')
text.append('  return BLOG_POSTS_BY_PATH[path] ?? null')
text.append('}')

BLOG_OUTPUT.write_text('\n'.join(text), encoding='utf-8')
print('Generated {} blog posts'.format(len(posts)))
