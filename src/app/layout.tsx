import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/lib/utils'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/base/app-sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Revisited',
  description: 'Revisited Software in AI age',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const defaultOpen=false
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={cn(
      "min-h-screen bg-background font-sans antialiased",
      inter.className
    )}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider  style={
          {
            "--sidebar-width": "10rem",
            "--sidebar-width-mobile": "20rem",
          } as React.CSSProperties
        } defaultOpen={defaultOpen}>
          <div className="flex h-screen overflow-hidden">
            <AppSidebar />
            <main className="flex-1 overflow-auto">
              <div className="h-full p-8">
                {children}
              </div>
            </main>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </body>
  </html>
  )
}

