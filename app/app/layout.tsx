
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Everguard Intelligence | Premier Corporate Investigation Services Australia',
  description: 'Leading corporate intelligence and private investigation services across Australia. Specializing in insurance investigations, OSINT, skip tracing, fraud detection, and surveillance. Licensed and professional.',
  keywords: 'corporate intelligence, private investigation, insurance investigations, OSINT, skip tracing, fraud detection, surveillance, background checks, Australia',
  authors: [{ name: 'Everguard Intelligence' }],
  openGraph: {
    title: 'Everguard Intelligence | Premier Corporate Investigation Services Australia',
    description: 'Leading corporate intelligence and private investigation services across Australia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
