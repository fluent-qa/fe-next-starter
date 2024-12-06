import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Your Name
        </Link>
        <ul className="flex items-center space-x-4">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><ModeToggle /></li>
        </ul>
      </nav>
    </header>
  )
}

