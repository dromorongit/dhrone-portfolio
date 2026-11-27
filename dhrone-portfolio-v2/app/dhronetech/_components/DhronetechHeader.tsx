'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiChevronDown, FiSend } from 'react-icons/fi'
import LogoMark from '@/app/dhronetech/_components/LogoMark'
import { dhronetechContent } from '@/app/data/dhronetech'

const navLinks = [
  { href: '/dhronetech', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Our Work' },
  { href: '/academy', label: 'The School of DhroneTech' },
  { href: '#contact', label: 'Contact' },
]

const serviceItems = dhronetechContent.services.tiles.map((tile) => ({
  label: tile.title,
  href: tile.href || '#services',
}))

export default function DhronetechHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [servicesOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
        <div className="dt-container-lg">
          <div className="relative flex items-center justify-between h-16 lg:h-20">
            <div className="relative flex items-center justify-between h-full w-full z-10">
              <Link href="/dhronetech" className="flex items-center gap-2" aria-label="DhroneTech Solutions Home">
                <LogoMark size="lg" />
              </Link>

              <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
                {navLinks.map((link) => {
                  const isActive = link.href === '/dhronetech' || link.href.startsWith('#')
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`dt-nav-link ${isActive && link.href !== '/academy' ? 'dt-nav-link-active' : ''}`}
                      aria-current={isActive && link.href !== '/academy' ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="relative ml-2" ref={servicesRef}>
                  <button
                    onClick={() => setServicesOpen((prev) => !prev)}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    className={`dt-nav-link ${servicesOpen ? 'dt-nav-link-active' : ''} pr-8`}
                  >
                    Services <FiChevronDown size={14} className={`ml-1 inline-block transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-[var(--dt-border, #E2E2EE)] bg-white shadow-xl p-2 z-50" role="menu">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="dt-dropdown-link"
                          role="menuitem"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link href="/academy" className="dt-btn dt-btn-primary text-sm py-2 px-4 ml-2">
                  The School of DhroneTech
                </Link>
              </nav>

              <div className="hidden lg:flex items-center gap-3">
                <Link href="/contact" className="dt-btn dt-btn-navy">
                  <span>Let&apos;s Talk</span>
                  <FiSend size={16} />
                </Link>
              </div>

              <div className="flex lg:hidden items-center gap-2">
                <button
                  onClick={() => setOpen(!open)}
                  className="p-2 rounded-lg text-[var(--dt-text-muted)] hover:text-[var(--dt-text-dark)] hover:bg-[var(--dt-surface-light)] transition-colors"
                  aria-label={open ? 'Close menu' : 'Open menu'}
                  aria-expanded={open}
                >
                  {open ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-[var(--dt-border, #E2E2EE)]">
              <Link href="/dhronetech" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <LogoMark size="lg" />
              </Link>
            </div>
            <nav className="flex-1 overflow-y-auto p-6" role="navigation" aria-label="Mobile navigation">
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const isActive = link.href === '/dhronetech' || link.href.startsWith('#')
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`dt-mobile-menu-link ${isActive && link.href !== '/academy' ? 'dt-mobile-menu-link-active' : ''}`}
                      onClick={() => link.href.startsWith('#') && setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <button
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className={`dt-mobile-menu-link flex items-center justify-between ${mobileServicesOpen ? 'dt-mobile-menu-link-active' : ''}`}
                >
                  Services <FiChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 space-y-1 border-l-2 border-[var(--dt-blue-500)]/30">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="dt-dropdown-link pl-2"
                        onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/academy"
                  className="dt-btn dt-btn-primary mt-4 w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  The School of DhroneTech
                </Link>
                <Link
                  href="/contact"
                  className="dt-btn dt-btn-navy mt-3 w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  <span>Let&apos;s Talk</span>
                  <FiSend size={16} />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

import { useRef } from 'react'