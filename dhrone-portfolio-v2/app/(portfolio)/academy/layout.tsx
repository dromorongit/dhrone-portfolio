import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School of DhroneTech | Professional Tech Certificate Programmes in Ghana',
  description: 'Gain practical, job-ready digital skills through School of DhroneTech professional certificate programmes. Courses in Software Productivity, Hardware & Troubleshooting, AI Tools, Software Engineering Basics, Videography and Script Writing. Based in Accra, Ghana.',
  keywords: ['School of DhroneTech', 'DhroneTech Academy', 'tech courses Ghana', 'IT training Accra', 'professional certificate Ghana', 'software training', 'AI tools course', 'hardware troubleshooting course', 'videography course Ghana', 'script writing course', 'software engineering basics'],
  openGraph: {
    title: 'School of DhroneTech | Professional Tech Certificate Programmes',
    description: 'Learn practical, job-ready digital skills with School of DhroneTech. Certificate courses in Software Productivity, Hardware & Troubleshooting, AI Tools, Software Engineering Basics, Videography and Script Writing.',
    type: 'website',
    url: 'https://www.dromornarh.com/academy',
  },
}

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}