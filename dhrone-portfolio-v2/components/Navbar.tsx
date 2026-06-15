'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/apps', label: 'Apps' },
  { href: '/videos', label: 'Videos' },
  { href: '/services', label: 'Services' },
  { href: '/tech-stack', label: 'Stack' },
  { href: '/labs', label: 'Labs' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-violet/20 flex items-center justify-center">
              <Code2 size={14} className="text-violet" />
            </div>
            <span className="text-base font-bold">
              <span className="text-gradient-violet">Dhrone</span>
              <span className="text-textMuted">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'text-textPrimary' : 'text-textMuted hover:text-textPrimary hover:bg-surfaceHover'
                  }`}>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <Link href="/contact" className="hidden lg:flex btn-primary text-sm py-2 px-4">
            Hire Me
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-textMuted hover:text-textPrimary hover:bg-surfaceHover transition-colors">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-bg/98 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-6 py-4 grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-textPrimary bg-surfaceHover border border-violet/20'
                    : 'text-textMuted hover:text-textPrimary hover:bg-surfaceHover'
                }`}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="col-span-2 btn-primary mt-2 justify-center">
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}