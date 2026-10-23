'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/videos', label: 'Videos' },
  { href: '/services', label: 'Services' },
  { href: '/tech-stack', label: 'Stack' },
  { href: '/labs', label: 'Labs' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
]

const softwareLinks = [
  { href: '/apps', label: 'All Apps & Systems', desc: 'Everything I have built' },
  { href: '/apps/dhream-pos', label: 'Dhream POS', desc: 'Offline point of sale' },
  { href: '/apps/dhream-finance', label: 'Dhream Finance', desc: 'Income & expense manager' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [softwareOpen, setSoftwareOpen] = useState(false)
  const [mobileSoftwareOpen, setMobileSoftwareOpen] = useState(false)
  const softwareRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const isSoftwareActive = pathname === '/apps' || pathname.startsWith('/apps/')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setSoftwareOpen(false)
    setMobileSoftwareOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSoftwareOpen(false)
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (softwareRef.current && !softwareRef.current.contains(e.target as Node)) {
        setSoftwareOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [softwareOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-violet/20 flex items-center justify-center overflow-hidden relative">
              <Image src="/images/dromorlogo.jpg" alt="Dhrone Logo" fill className="object-contain" priority sizes="28px" />
            </div>
            <span className="text-base font-bold">
              <span className="text-gradient-violet">Dhrone</span>
              <span style={{ color: 'var(--text-muted)' }}>.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                  }`}>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet" />
                  )}
                </Link>
              )
            })}
             {/* Software dropdown */}
             <div className="relative ml-1" ref={softwareRef}>
               <button
                 onClick={() => setSoftwareOpen((prev) => !prev)}
                 onMouseEnter={() => setSoftwareOpen(true)}
                 onMouseLeave={() => setSoftwareOpen(false)}
                 aria-haspopup="menu"
                 aria-expanded={softwareOpen}
                 className={`relative px-3 py-1.5 rounded-lg text-sm font-semibold transition-all border ml-1 ${
                   isSoftwareActive || softwareOpen
                     ? 'bg-coral text-white border-coral'
                     : 'text-coral border-coral/40 hover:bg-coral hover:text-white hover:border-coral'
                 }`}>
                 Software <FiChevronDown size={14} className={`ml-1 transition-transform duration-200 ${softwareOpen ? 'rotate-180' : ''}`} />
               </button>
               {softwareOpen && (
                 <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-xl p-1.5 z-50" role="menu">
                   {softwareLinks.map((item) => {
                     const isActive = pathname === item.href
                     return (
                       <Link key={item.href} href={item.href}
                         onClick={() => setSoftwareOpen(false)}
                         className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${isActive ? 'text-violet font-semibold bg-[var(--surface-hover)]' : 'text-[var(--text-primary)] font-semibold hover:bg-[var(--surface-hover)]'}`}
                         role="menuitem">
                         <div className="flex items-center justify-between">
                           <span>{item.label}</span>
                           {isActive && <span className="w-1 h-1 rounded-full bg-violet" />}
                         </div>
                         <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                       </Link>
                     )
                   })}
                 </div>
               )}
             </div>
             {/* School of DhroneTech — distinct badge style */}
             <Link href="/academy"
               className={`relative ml-1 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all border ${
                 pathname === '/academy'
                   ? 'bg-violet text-white border-violet'
                   : 'text-violet border-violet/40 hover:bg-violet hover:text-white hover:border-violet'
               }`}>
               School of DhroneTech
             </Link>
          </nav>

          {/* Right: Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">Hire Me</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] transition-colors">
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[var(--bg)]/98 backdrop-blur-md border-b border-[var(--border)]">
          <nav className="container mx-auto px-6 py-4 grid grid-cols-2 gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--text-primary)] bg-[var(--surface-hover)] border border-violet/20'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                  }`}>
                  {link.label}
                </Link>
              )
            })}
             {/* Software mobile */}
             <button
               onClick={() => setMobileSoftwareOpen((prev) => !prev)}
               className={`col-span-2 px-4 py-3 rounded-xl text-sm font-semibold text-center transition-colors border ${
                 isSoftwareActive ? 'bg-coral text-white border-coral' : 'text-coral border-coral/40 hover:bg-coral hover:text-white hover:border-coral'
               }`}>
               💻 Software <FiChevronDown size={16} />
             </button>
             {mobileSoftwareOpen && (
               <>
                 {softwareLinks.map((item) => {
                   const isActive = pathname === item.href
                   return (
                     <Link key={item.href} href={item.href}
                       className={`col-span-2 pl-3 border-l border-coral/30 px-1 py-2 block rounded-xl text-sm font-medium transition-colors ${isActive ? 'text-[var(--text-primary)] bg-[var(--surface-hover)] border border-violet/20' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'}`}>
                       {item.label}
                     </Link>
                   )
                 })}
               </>
             )}
             {/* School of DhroneTech mobile */}
             <Link href="/academy"
               className={`col-span-2 px-4 py-3 rounded-xl text-sm font-semibold text-center transition-colors border ${
                 pathname === '/academy'
                   ? 'bg-violet text-white border-violet'
                   : 'text-violet border-violet/40 hover:bg-violet hover:text-white'
               }`}>
               🎓 School of DhroneTech
             </Link>
             <Link href="/contact" className="col-span-2 btn-primary mt-2 justify-center">Hire Me</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
