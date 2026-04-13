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
  publishedAt: string
  updatedAt: string
  readingMinutes: number
  category: 'Selection Guide' | 'Technical Knowledge' | 'Application' | 'Maintenance' | 'Market Insight'
  tags: readonly string[]
  heroSummary: string
  sections: readonly BlogSection[]
  faq: readonly BlogFaq[]
}

const PLACEHOLDER_SEEDS: readonly {
  slug: string
  category: BlogPost['category']
}[] = [
  { slug: 'placeholder-blog-post-01', category: 'Market Insight' },
  { slug: 'placeholder-blog-post-02', category: 'Selection Guide' },
  { slug: 'placeholder-blog-post-03', category: 'Technical Knowledge' },
  { slug: 'placeholder-blog-post-04', category: 'Application' },
  { slug: 'placeholder-blog-post-05', category: 'Maintenance' },
  { slug: 'placeholder-blog-post-06', category: 'Selection Guide' },
  { slug: 'placeholder-blog-post-07', category: 'Market Insight' },
  { slug: 'placeholder-blog-post-08', category: 'Technical Knowledge' },
]

export const BLOG_POSTS: readonly BlogPost[] = PLACEHOLDER_SEEDS.map((seed, index) => {
  const postNo = String(index + 1).padStart(2, '0')
  const date = `2026-04-${String(Math.min(12 + index, 28)).padStart(2, '0')}`

  return {
    path: `/blog/${seed.slug}`,
    slug: seed.slug,
    title: `Placeholder Blog Title ${postNo}`,
    description: `Placeholder blog description ${postNo}. Replace with your target keyword summary and customer-facing teaser copy.`,
    category: seed.category,
    tags: [`placeholder-tag-${postNo}`, 'placeholder-keyword', 'placeholder-topic'],
    publishedAt: date,
    updatedAt: date,
    readingMinutes: 6 + (index % 4),
    heroSummary: `Placeholder hero summary ${postNo}. Explain what the reader will learn and what decision this article supports.`,
    sections: [
      {
        heading: 'Placeholder Section One',
        paragraphs: [
          'Placeholder paragraph for section one. Replace this with customer-facing educational content.',
          'Use this section to describe context, use cases, and decision factors for your audience.',
        ],
        bullets: ['Placeholder bullet item A', 'Placeholder bullet item B', 'Placeholder bullet item C'],
      },
      {
        heading: 'Placeholder Section Two',
        paragraphs: [
          'Placeholder paragraph for section two. Add your technical details or business comparison points.',
          'Include practical values, ranges, and scenarios based on your own product data.',
        ],
      },
      {
        heading: 'Placeholder Section Three',
        paragraphs: [
          'Placeholder paragraph for section three. Add implementation guidance and next-step recommendations.',
        ],
        bullets: ['Placeholder action step 1', 'Placeholder action step 2', 'Placeholder action step 3'],
      },
    ],
    faq: [
      {
        question: 'Placeholder FAQ Question 1?',
        answer: 'Placeholder FAQ answer 1. Replace with concise, conversion-oriented response.',
      },
      {
        question: 'Placeholder FAQ Question 2?',
        answer: 'Placeholder FAQ answer 2. Replace with practical criteria or parameter guidance.',
      },
    ],
  }
})

export const BLOG_POST_COUNT = BLOG_POSTS.length

export const BLOG_POSTS_BY_PATH: Readonly<Record<string, BlogPost>> = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.path, post])
)

export function getBlogPostByPath(path: string): BlogPost | null {
  return BLOG_POSTS_BY_PATH[path] ?? null
}
