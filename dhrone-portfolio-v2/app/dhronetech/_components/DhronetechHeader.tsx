'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX, FiChevronDown, FiSend } from 'react-icons/fi'
import LogoMark from '@/app/dhronetech/_components/LogoMark'
import { dhronetechContent } from '@/app/data/dhronetech'

const serviceItems = dhronetechContent.services.tiles.map((tile) => ({
  label: tile.title,
  href: tile.href || '#services',
}))

type NavKey = 'home' | 'about' | 'services' | 'projects' | 'school' | 'contact'

export default function DhronetechHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isXl, setIsXl] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [active, setActive] = useState<NavKey>('home')
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    setIsXl(mq.matches)
    const handleResize = () => setIsXl(mq.matches)
    mq.addEventListener('change', handleResize)

    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      mq.removeEventListener('change', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
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
  }, [])

  useEffect(() => {
    const ids: Array<'services' | 'about' | 'projects' | 'contact'> = ['services', 'about', 'projects', 'contact']
    const ratios = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })
        let best: string | null = null
        let bestRatio = 0
        ids.forEach((id) => {
          const r = ratios.get(id) || 0
          if (r > bestRatio) {
            bestRatio = r
            best = id
          }
        })
        if (best && bestRatio > 0) {
          setActive(best as NavKey)
        } else {
          setActive('home')
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const linkClass = (key: NavKey) =>
    `whitespace-nowrap font-medium no-underline transition-colors ${
      active === key ? 'text-[var(--dt-blue-500)] dt-nav-link-active' : 'text-[var(--dt-text-dark)] hover:text-[var(--dt-blue-500)]'
    }`

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-[var(--dt-header-h)] transition-all duration-300 ${
          !scrolled && isXl
            ? 'bg-[linear-gradient(90deg,#fff_0%,#fff_58%,rgba(255,255,255,.88)_68%,rgba(255,255,255,.35)_82%,rgba(255,255,255,0)_100%)]'
            : 'bg-white shadow-md'
        }`}
      >
        <div
          className="flex items-center w-full"
          style={{
            height: '100%',
            maxWidth: '1600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'var(--dt-gutter)',
            paddingRight: 'clamp(20px, 3vw, 48px)',
          }}
        >
          <Link
            href="/dhronetech"
            className="flex items-center gap-2 max-w-[220px]"
            aria-label="DhroneTech Solutions Home"
          >
            <Image
              src="/images/dhronetech/logo.jpg"
              alt="DhroneTech Solutions"
              width={100}
              height={94}
              priority
              className="dt-header-logo flex-shrink-0"
            />
          </Link>

          <nav
            className="hidden xl:flex items-center"
            role="navigation"
            aria-label="Main navigation"
            style={{
              marginLeft: 'clamp(40px, 6vw, 96px)',
              gap: 'clamp(16px, 1.7vw, 24px)',
              fontSize: 'clamp(13px, 1.1vw, 16px)',
            }}
          >
            <Link href="/dhronetech" className={linkClass('home')} aria-current={active === 'home' ? 'page' : undefined}>
              Home
            </Link>
            <Link href="#about" className={linkClass('about')} aria-current={active === 'about' ? 'page' : undefined}>
              About
            </Link>
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                className={`whitespace-nowrap font-medium no-underline inline-flex items-center gap-1 transition-colors ${
                  active === 'services' || servicesOpen
                    ? 'text-[var(--dt-blue-500)]'
                    : 'text-[var(--dt-text-dark)] hover:text-[var(--dt-blue-500)]'
                }`}
              >
                Services <FiChevronDown size={14} className={`inline-block transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-[#E2E2EE] bg-white shadow-xl p-2 z-50"
                  role="menu"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
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
            <Link href="#projects" className={linkClass('projects')} aria-current={active === 'projects' ? 'page' : undefined}>
              Our Work
            </Link>
            <Link href="/academy" className={linkClass('school')}>
              The School of DhroneTech
            </Link>
            <Link href="#contact" className={linkClass('contact')} aria-current={active === 'contact' ? 'page' : undefined}>
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="whitespace-nowrap font-medium no-underline inline-flex items-center gap-2"
            style={{
              marginLeft: 'auto',
              height: 'clamp(40px, 3.3vw, 48px)',
              paddingInline: '24px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #2A6BFF, #1747D6)',
              color: '#fff',
              fontSize: '15px',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(31, 91, 255, 0.35)',
            }}
          >
            <span>Let&apos;s Talk</span>
            <FiSend size={16} />
          </Link>

          <div className="flex xl:hidden items-center gap-2">
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
      </header>

      {open && (
        <div
          className="xl:hidden fixed inset-0 z-40 bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-[#E2E2EE] flex items-center justify-between">
              <Link href="/dhronetech" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <LogoMark size="lg" tone="onLight" />
              </Link>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg" aria-label="Close menu">
                <FiX size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-6" role="navigation" aria-label="Mobile navigation">
              <div className="space-y-2">
                <Link
                  href="/dhronetech"
                  className="dt-mobile-menu-link"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="dt-mobile-menu-link"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                <button
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className={`dt-mobile-menu-link flex items-center justify-between w-full ${mobileServicesOpen ? 'dt-mobile-menu-link-active' : ''}`}
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
                        onClick={() => {
                          setOpen(false)
                          setMobileServicesOpen(false)
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="#projects"
                  className="dt-mobile-menu-link"
                  onClick={() => setOpen(false)}
                >
                  Our Work
                </Link>
                <Link
                  href="/academy"
                  className="dt-mobile-menu-link"
                  onClick={() => setOpen(false)}
                >
                  The School of DhroneTech
                </Link>
                <Link
                  href="#contact"
                  className="dt-mobile-menu-link"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="dt-btn dt-btn-navy mt-4 w-full justify-center px-5 py-2.5"
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
