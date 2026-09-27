/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiCheckCircle, FiPhone, FiMail, FiDownload, FiShare2, FiChevronLeft, FiChevronRight, FiAlertTriangle, FiMonitor } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import PageWrapper from '@/components/PageWrapper'

const screenshots = [
  '/images/dhreampos1.webp',
  '/images/dhreampos2.webp',
  '/images/dhreampos3.webp',
  '/images/dhreampos4.webp',
  '/images/dhreampos5.webp',
  '/images/dhreampos6.webp',
  '/images/dhreampos7.webp',
]

export default function DhreamPosPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Dhream POS', url })
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(url)
        alert('Link copied to clipboard')
      } catch {}
    }
  }

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container mx-auto px-6">

          <div className="flex justify-end mb-6">
            <button onClick={handleShare} className="btn-outline text-sm py-2 px-4">
              <FiShare2 size={16} /> Share
            </button>
          </div>

          {/* HERO */}
          <div className="relative rounded-2xl overflow-hidden p-10 md:p-16 mb-20"
            style={{ background: 'linear-gradient(135deg, #6C63FF18, #FF6B6B10, #FFD93D08)' }}>
            <div className="absolute inset-0 border border-violet/20 rounded-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-violet/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-coral/10 blur-[60px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Dhream POS</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
                Dhream POS
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                The offline-first point-of-sale app built for small and growing businesses.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Dhream POS is a desktop point-of-sale application built for small and growing businesses — retail shops, boutiques, and similar storefronts that need a fast, reliable way to sell, track stock, and manage staff without depending on an internet connection.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://bit.ly/4xPyEzD" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FiDownload size={16} /> Download for Windows
                </a>
              </div>
              <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
                Free to download. A license is required to activate — see Licensing & Pricing below.
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-coral uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
              What it does
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: 'Checkout & Sales',
                  description: 'Fast product search and barcode scanning, cart management, cash/card/mobile money payments, discounts, tax calculation, and printable receipts.',
                },
                {
                  title: 'Inventory & Products',
                  description: 'Full product and category management, low-stock alerts, image uploads, and built-in barcode/QR code generation and printing.',
                },
                {
                  title: 'Customers & Loyalty',
                  description: 'Customer profiles, purchase history, and an automatic loyalty points system.',
                },
                {
                  title: 'Staff & Roles',
                  description: 'Multiple staff accounts with Admin, Manager, and Cashier roles, PIN or password login, and an activity log for accountability.',
                },
                {
                  title: 'Reports & Dashboard',
                  description: 'Real-time sales, inventory, and profit/loss reports, exportable to PDF and Excel, plus a live dashboard overview.',
                },
                {
                  title: 'Multi-Currency Support',
                  description: 'Works with GHS, USD, GBP, EUR, NGN, KES, and ZAR.',
                },
                {
                  title: 'Backup & Restore',
                  description: 'One-click database backup and restore, plus full data export.',
                },
              ].map((feature) => (
                <div key={feature.title} className="card p-6">
                  <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT USERS SHOULD KNOW */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
              What users should know
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Works fully offline',
                  description: 'Dhream POS runs entirely on your computer — all your data is stored locally, so you can sell and manage your business with or without internet.',
                },
                {
                  title: 'Windows desktop app',
                  description: 'Installed like any normal Windows program. Runs on Windows 10 and Windows 11.',
                },
                {
                  title: 'One-time license activation',
                  description: 'Each purchase is licensed to a specific computer. After installing, you\'ll get a Hardware ID to send in, and you\'ll receive a license key to activate your copy.',
                },
                {
                  title: 'You set up your own admin account',
                  description: 'After activation, you create your own login — no shared or default credentials.',
                },
                {
                  title: 'Unsigned installer notice',
                  description: 'Windows may show an "Unknown Publisher" warning on first install (normal for independently distributed software) — click "More info" → "Run anyway" to proceed.',
                },
              ].map((item) => (
                <div key={item.title} className="card p-6 flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-violet/20 flex items-center justify-center shrink-0 mt-0.5">
                    <FiCheckCircle size={14} className="text-violet" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIVATION STEPS */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-yellow uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
              How activation works
            </h2>
            <div className="grid md:grid-cols-5 gap-5">
              {[
                { step: 1, title: 'Download & install', description: 'Download the installer above and run it on the Windows computer where you\'ll be using Dhream POS.' },
                { step: 2, title: 'Get your Hardware ID', description: 'Open the app after installing — it will display a unique Hardware ID for your computer.' },
                { step: 3, title: 'Choose a plan and reach out', description: 'Contact us with your Hardware ID and choose either the one-time license or the monthly plan (see pricing below).' },
                { step: 4, title: 'Receive your license key', description: 'We\'ll send you a license key generated for your specific Hardware ID.' },
                { step: 5, title: 'Activate', description: 'Enter your license key in the app to activate your copy and set up your own admin account.' },
              ].map((item) => (
                <div key={item.step} className="card p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-violet/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-violet font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* GALLERY */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Screenshots</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
              Gallery
            </h2>
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)]" style={{ backgroundColor: 'var(--surface)' }}>
              <div className="relative aspect-video">
                <Image
                  src={screenshots[currentSlide]}
                  alt={`Dhream POS screenshot ${currentSlide + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority={currentSlide === 0}
                />
              </div>
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
                <FiChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
                <FiChevronRight size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentSlide ? 'bg-white' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* PRICING */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-coral uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Licensing & Pricing
            </h2>
            <p className="mb-8 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
              Dhream POS is free to download. A license is required to activate and use the app.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <div className="card p-8 text-center">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>One-time license</h3>
                <p className="text-3xl font-extrabold text-violet mb-2">GHS 3,000</p>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>Pay once, use indefinitely on your licensed device.</p>
                <a href="https://www.dhreamarket.com/marketplace/product/dhreampos-software" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">
                  Buy on Dhream Market
                </a>
                <p className="text-xs mt-3 font-semibold" style={{ color: 'var(--text-muted)' }}>
                  Save GHS 2,000 — get the lifetime license for GHS 1,000 on Dhream Market
                </p>
              </div>
              <div className="card p-8 text-center">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Monthly license</h3>
                <p className="text-3xl font-extrabold text-coral mb-2">GHS 250 / month</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Pay monthly to keep your license active.</p>
              </div>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              To acquire a license, reach out via phone call on 0596522239 or on WhatsApp: https://wa.me/447869840464
            </p>
          </div>

          {/* LICENSE LOSS */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-yellow uppercase tracking-widest mb-3">Important</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              How you could lose your license
            </h2>
            <p className="mb-6 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
              Your license is tied to your specific computer. You could lose access to your license if:
            </p>
            <div className="card p-8 mb-6">
              <ul className="space-y-3">
                {[
                  'You reinstall Dhream POS on a new or different computer.',
                  'You reinstall the Windows operating system on your computer.',
                  'Your subscription period lapses without renewal (monthly plan only).',
                ].map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                    <FiAlertTriangle size={16} className="text-yellow mt-0.5 shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              If you're planning to reinstall Windows or switch to a new computer, reach out to support beforehand — they may be able to help.
            </p>
          </div>

          {/* SYSTEM REQUIREMENTS */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
              System Requirements
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {['Windows 10', 'Windows 11'].map((req) => (
                <div key={req} className="card p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center shrink-0">
                    <FiMonitor size={20} className="text-violet" />
                  </div>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
              Contact & Support
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              <a href="tel:+233596522239" className="card p-6 group block">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-violet/10">
                  <FiPhone size={20} className="text-violet" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Phone / WhatsApp</p>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>+233 (0)596522239</p>
              </a>
              <a href="https://wa.me/447869840464" target="_blank" rel="noopener noreferrer" className="card p-6 group block">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#25D36620' }}>
                  <SiWhatsapp size={20} style={{ color: '#25D366' }} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>WhatsApp</p>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>https://wa.me/447869840464</p>
              </a>
              <a href="mailto:business.dhrone@gmail.com" className="card p-6 group block">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-coral/10">
                  <FiMail size={20} className="text-coral" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Email</p>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>business.dhrone@gmail.com</p>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="relative rounded-2xl overflow-hidden p-10 md:p-14 text-center mb-20"
            style={{ background: 'linear-gradient(135deg, #6C63FF18, #FF6B6B10)' }}>
            <div className="absolute inset-0 border border-violet/20 rounded-2xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                Ready to get started?
              </h2>
              <p className="max-w-lg mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
                Download Dhream POS and reach out to activate your license.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://bit.ly/4xPyEzD" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FiDownload size={16} /> Download for Windows
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  )
}
