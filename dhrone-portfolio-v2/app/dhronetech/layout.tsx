import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'
import '@/app/dhronetech/dhronetech.css'
import DhronetechHeader from '@/app/dhronetech/_components/DhronetechHeader'
import DhronetechFooter from '@/app/dhronetech/_components/DhronetechFooter'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: 'DhroneTech Solutions | Your Vision. Our Technology.',
  description: 'DhroneTech Solutions builds, manages and grows digital solutions that help businesses operate smarter, compete better and achieve more.',
  keywords: ['technology solutions', 'web development', 'mobile apps', 'backend systems', 'software development', 'Ghana', 'DhroneTech'],
  authors: [{ name: 'DhroneTech Solutions' }],
  metadataBase: new URL('https://www.dromornarh.com'),
  alternates: {
    canonical: 'https://www.dromornarh.com/dhronetech',
  },
  openGraph: {
    title: 'DhroneTech Solutions | Your Vision. Our Technology.',
    description: 'We build, manage and grow digital solutions that help businesses operate smarter, compete better and achieve more.',
    type: 'website',
    url: 'https://www.dromornarh.com/dhronetech',
    siteName: 'DhroneTech Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DhroneTech Solutions | Your Vision. Our Technology.',
    description: 'We build, manage and grow digital solutions that help businesses operate smarter, compete better and achieve more.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DhronetechLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${caveat.variable} dt`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="dt">
          <DhronetechHeader />
          <main>{children}</main>
          <DhronetechFooter />
        </div>
      </body>
    </html>
  )
}