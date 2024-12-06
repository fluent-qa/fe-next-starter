import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/lib/utils'
import { Sidebar } from '@/components/site/site-sidebar'
import '@/styles/globals.css'
import Header from '@/components/site/simple-header'
import Footer from '@/components/site/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Software Engineer',
  description: 'Personal website and blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <div className="grid grid-cols-[48px_1fr] h-screen">
            <Sidebar />
            <main className="overflow-auto">
              <div className="h-full p-8">
                {children}
              </div>
            </main>
          </div>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}

