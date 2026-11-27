import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dhream Finance | Offline-First Income & Expense Management Software',
  description: 'Dhream Finance is a desktop app for tracking income and expenses, sending invoices, setting budgets and producing reports — built for retailers, freelancers, schools, NGOs and small businesses, and it works without an internet connection.',
  openGraph: {
    title: 'Dhream Finance | Offline-First Income & Expense Management Software',
    description: 'Dhream Finance is a desktop app for tracking income and expenses, sending invoices, setting budgets and producing reports — built for retailers, freelancers, schools, NGOs and small businesses, and it works without an internet connection.',
    url: 'https://dromornarh-production.up.railway.app/apps/dhream-finance',
    images: ['/images/dhreamfinance1.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhream Finance | Offline-First Income & Expense Management Software',
    description: 'Dhream Finance is a desktop app for tracking income and expenses, sending invoices, setting budgets and producing reports — built for retailers, freelancers, schools, NGOs and small businesses, and it works without an internet connection.',
  },
}

export default function DhreamFinanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
