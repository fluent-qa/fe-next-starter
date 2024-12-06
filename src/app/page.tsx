import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Post {
  year: number
  date: string
  title: string
  views: number
  slug: string
  tags: string[]
}

const posts: Post[] = [
  {
    year: 2024,
    date: '21/05',
    title: 'Building a Mini-ITX PC with Teenage Engineering Computer-1',
    views: 4560,
    slug: 'building-mini-itx-pc',
    tags: ['hardware', 'setup']
  },
  {
    year: 2023,
    date: '06/10',
    title: 'Optimizing Website Speed with Preload and Prefetch',
    views: 52707,
    slug: 'optimizing-website-speed',
    tags: ['performance', 'web']
  },
  // Add more posts as needed
]

export default function Home() {
  return (
    <div className="max-w-[800px] mx-auto space-y-8">
      <Card className="p-6">
        <div className="prose dark:prose-invert">
          <p className="text-xl">
            Hi 👋 I'm Your Name (meaning "Your Name" in English), a software engineer, developer, writer, and minimalist based in Your City, Country.
          </p>
          <p className="text-muted-foreground">
            I develop things as a Senior Frontend Software Engineer at Company Name. Previously, I worked as a Senior Frontend Software Engineer at Previous Company, Frontend Software Engineer at Another Company, and various other roles.
          </p>
        </div>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Writing</h2>
        <Card>
          <div className="divide-y">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="hidden sm:block w-[100px] text-sm text-muted-foreground">
                  {post.year}
                </div>
                <div className="hidden sm:block w-[100px] text-sm text-muted-foreground">
                  {post.date}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-1">
                    <div className="font-medium truncate">{post.title}</div>
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {post.views.toLocaleString()} views
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

