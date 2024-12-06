import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Inbox, Archive, Trash2, Clock, MoreVertical, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface Post {
  id: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content: string
  views: number
}

const posts: Post[] = [
  {
    id: "1",
    title: "Building a Mini-ITX PC with Teenage Engineering Computer-1",
    excerpt: "A detailed guide on building a compact PC using the stylish Computer-1 case...",
    date: "about 1 month ago",
    tags: ["hardware", "setup"],
    content: "Full article content here...",
    views: 4560
  },
  {
    id: "2",
    title: "Optimizing Website Speed with Preload and Prefetch",
    excerpt: "Learn how to improve your website's performance using preload and prefetch techniques...",
    date: "about 1 year ago",
    tags: ["performance", "web"],
    content: "Full article content here...",
    views: 52707
  },
  // Add more posts as needed
]

export default function WritingPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">Writing</h1>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">All posts</Button>
              <Button variant="ghost" size="sm">Popular</Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Inbox className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Clock className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="px-4 pb-4">
          <Input 
            placeholder="Search articles..." 
            className="max-w-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-[400px_1fr] flex-1 overflow-hidden">
        <div className="border-r overflow-y-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border-b p-4 hover:bg-muted/50 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-1">
                <h2 className="font-medium">{post.title}</h2>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                  {post.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {post.excerpt}
              </p>
              <div className="flex items-center space-x-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                <span className="text-xs text-muted-foreground ml-auto">
                  {post.views.toLocaleString()} views
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <article className="prose dark:prose-invert max-w-none">
              <h1>{posts[0].title}</h1>
              <p className="lead">{posts[0].excerpt}</p>
              <p>{posts[0].content}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

