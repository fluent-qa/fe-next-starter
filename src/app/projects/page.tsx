import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music, Podcast, Radio, Plus } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  title: string
  author: string
  image: string
  category: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "React Rendezvous",
    author: "Next.js App",
    image: "/placeholder.svg?height=400&width=600",
    category: "frontend"
  },
  {
    id: "2",
    title: "Async Awakenings",
    author: "Full Stack App",
    image: "/placeholder.svg?height=400&width=600",
    category: "fullstack"
  },
  {
    id: "3",
    title: "The Art of Reusability",
    author: "Component Library",
    image: "/placeholder.svg?height=400&width=600",
    category: "frontend"
  },
  {
    id: "4",
    title: "Stateful Symphony",
    author: "State Management",
    image: "/placeholder.svg?height=400&width=600",
    category: "frontend"
  },
  {
    id: "5",
    title: "Type Tales",
    author: "TypeScript Library",
    image: "/placeholder.svg?height=400&width=600",
    category: "backend"
  },
  {
    id: "6",
    title: "API Aria",
    author: "REST API",
    image: "/placeholder.svg?height=400&width=600",
    category: "backend"
  }
]

export default function ProjectsPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">Projects</h1>
            <p className="text-sm text-muted-foreground">
              Discover my latest work and experiments
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </div>
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-4">
            <Tabs defaultValue="all" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              </TabsList>
            </Tabs>
            <Input 
              placeholder="Search projects..." 
              className="w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="font-semibold leading-tight">{project.title}</h3>
                <p className="text-sm text-white/80">{project.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

