import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DhroneTech Academy | Professional Tech Certificate Programmes in Ghana',
  description: 'Gain practical, job-ready digital skills through DhroneTech Academy professional certificate programmes. Courses in Software Productivity, Hardware & Troubleshooting, and AI Tools. Based in Accra, Ghana.',
  keywords: ['DhroneTech Academy', 'tech courses Ghana', 'IT training Accra', 'professional certificate Ghana', 'software training', 'AI tools course', 'hardware troubleshooting course'],
  openGraph: {
    title: 'DhroneTech Academy | Professional Tech Certificate Programmes',
    description: 'Learn practical, job-ready digital skills with DhroneTech Academy. Certificate courses in Software Productivity, Hardware & Troubleshooting, and AI Tools.',
    type: 'website',
    url: 'https://www.dromornarh.com/academy',
  },
}

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}