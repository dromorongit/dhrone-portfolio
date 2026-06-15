import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Narh H.P Dromor | Software Engineer & Creative Technologist',
  description: 'Official portfolio of Narh H.P Dromor — Software Engineer, App Developer & Creative Director based in Accra, Ghana.',
  keywords: ['software engineer', 'web developer', 'app developer', 'video director', 'developer portfolio', 'Ghana developer', 'DhroneTech'],
  authors: [{ name: 'Narh H.P Dromor' }],
  metadataBase: new URL('https://dromornarh-production.up.railway.app'),
  openGraph: {
    title: 'Narh H.P Dromor | Software Engineer & Creative Technologist',
    description: 'Designing powerful software, modern digital platforms and cinematic visual experiences.',
    type: 'website',
    url: 'https://dromornarh-production.up.railway.app',
    siteName: 'Narh H.P Dromor Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narh H.P Dromor | Software Engineer & Creative Technologist',
    description: 'Designing powerful software, modern digital platforms and cinematic visual experiences.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  )
}