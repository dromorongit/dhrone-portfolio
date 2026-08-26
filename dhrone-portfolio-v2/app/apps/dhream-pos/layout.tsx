import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dhream POS | Offline-First Point of Sale Desktop App',
  description: 'Dhream POS is a desktop point-of-sale application built for small and growing businesses — retail shops, boutiques, and similar storefronts that need a fast, reliable way to sell, track stock, and manage staff without depending on an internet connection.',
  openGraph: {
    title: 'Dhream POS | Offline-First Point of Sale Desktop App',
    description: 'Dhream POS is a desktop point-of-sale application built for small and growing businesses — retail shops, boutiques, and similar storefronts that need a fast, reliable way to sell, track stock, and manage staff without depending on an internet connection.',
    url: 'https://dromornarh-production.up.railway.app/apps/dhream-pos',
    images: ['/images/dhreampos1.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhream POS | Offline-First Point of Sale Desktop App',
    description: 'Dhream POS is a desktop point-of-sale application built for small and growing businesses — retail shops, boutiques, and similar storefronts that need a fast, reliable way to sell, track stock, and manage staff without depending on an internet connection.',
  },
}

export default function DhreamPosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
