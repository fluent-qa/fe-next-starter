'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const menuItems = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Writing', path: '/writing' },
  { id: 3, name: 'projects', path: '/projects' },
  { id: 4, name: 'Stack', path: '/stack' },
  { id: 5, name: 'Workspace', path: '/workspace' },
  { id: 6, name: 'Bookmarks', path: '/bookmarks' },
]

export default function NavigationMenu() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={cn(
                'flex items-center text-sm group',
                pathname === item.path
                  ? 'text-neutral-900 bg-neutral-900/5 rounded-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              )}
            >
              <span className="w-6 text-xs text-neutral-400 group-hover:text-neutral-500">
                {item.id}
              </span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

