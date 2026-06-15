import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Narh H.P Dromor | Software Engineer & Creative Technologist',
  description: 'Official portfolio of Narh H.P Dromor — Software Engineer, App Developer & Creative Director based in Accra, Ghana.',
  keywords: ['software engineer', 'web developer', 'app developer', 'video director', 'developer portfolio', 'Ghana developer', 'DhroneTech'],
  authors: [{ name: 'Narh H.P Dromor' }],
  openGraph: {
    title: 'Narh H.P Dromor | Software Engineer & Creative Technologist',
    description: 'Designing powerful software, modern digital platforms and cinematic visual experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narh H.P Dromor | Software Engineer & Creative Technologist',
    description: 'Designing powerful software, modern digital platforms and cinematic visual experiences.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}