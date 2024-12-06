import Link from 'next/link'

interface Post {
  year: number
  date: string
  title: string
  views: number
  slug: string
}

const posts: Post[] = [
  {
    year: 2024,
    date: '21/05',
    title: 'Building a Mini-ITX PC with Teenage Engineering Computer-1 and Apple Studio Display',
    views: 4560,
    slug: 'building-mini-itx-pc'
  },
  {
    year: 2023,
    date: '06/10',
    title: 'Optimizing Website Speed with Preload, Prefetch, Preconnect, and DNS Prefetch',
    views: 52707,
    slug: 'optimizing-website-speed'
  },
  // Add more posts as needed
]

export function WritingSection() {
  return (
    <section>
      <h2 className="text-xl font-medium mb-6">Writing</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-[80px_80px_1fr_80px] gap-4 text-sm text-neutral-600">
          <div>Year</div>
          <div>Date</div>
          <div>Title</div>
          <div className="text-right">Views</div>
        </div>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="grid grid-cols-[80px_80px_1fr_80px] gap-4 text-sm hover:bg-neutral-50 -mx-4 px-4 py-2 rounded-md"
          >
            <div>{post.year}</div>
            <div>{post.date}</div>
            <div className="text-neutral-900">{post.title}</div>
            <div className="text-right">{post.views.toLocaleString()}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

