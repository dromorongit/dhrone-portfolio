'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LogoMark({
  className = '',
  size = 'default',
  tone = 'onDark',
}: {
  className?: string
  size?: 'default' | 'sm' | 'lg'
  tone?: 'onLight' | 'onDark'
}) {
  const [logoSrc, setLogoSrc] = useState<string | null>(null)

  useEffect(() => {
    const candidates = ['/images/dhronetech/logo-light.svg', '/images/dhronetech/logo-light.webp', '/images/dhronetech/logo-light.png']
    let cancelled = false
    const tryNext = (i: number) => {
      if (i >= candidates.length) return
      const img = document.createElement('img')
      img.onload = () => {
        if (!cancelled) setLogoSrc(candidates[i])
      }
      img.onerror = () => tryNext(i + 1)
      img.src = candidates[i]
    }
    tryNext(0)
    return () => {
      cancelled = true
    }
  }, [])

  const sizeClasses = {
    default: 'w-8 h-8',
    sm: 'w-6 h-6',
    lg: 'w-10 h-10',
  }

  const textSizeClasses = {
    default: 'text-lg',
    sm: 'text-base',
    lg: 'text-xl',
  }

  if (logoSrc) {
    return (
      <Image
        src={logoSrc}
        alt="DhroneTech Solutions"
        width={size === 'sm' ? 24 : size === 'lg' ? 40 : 32}
        height={size === 'sm' ? 24 : size === 'lg' ? 40 : 32}
        className={className}
        priority
      />
    )
  }

  const wordmarkColor = tone === 'onLight' ? 'text-[var(--dt-navy-900)]' : 'text-white'
  const solutionsColor = tone === 'onLight' ? 'text-[var(--dt-blue-500)]' : 'text-[var(--dt-gold-500)]'

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative flex items-center justify-center ${sizeClasses[size]}`}>
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <circle cx="16" cy="16" r="15" fill="url(#navyGradient)" />
          <defs>
            <linearGradient id="navyGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06122E" />
              <stop offset="100%" stopColor="#0B1F4B" />
            </linearGradient>
          </defs>
          <path
            d="M16 8C11.582 8 8 11.582 8 16C8 20.418 11.582 24 16 24C20.418 24 24 20.418 24 16C24 11.582 20.418 8 16 8Z"
            stroke="#1F5BFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 11V21M11 16H21"
            stroke="#F5B921"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-extrabold tracking-tight ${wordmarkColor} ${textSizeClasses[size]}`}>
          DHRONE TECH
        </span>
        <span className={`font-semibold tracking-wider text-xs ${solutionsColor}`}>
          SOLUTIONS
        </span>
      </div>
      {tone === 'onDark' && (
        <span className="hidden sm:block font-medium tracking-widest text-[var(--dt-gold-400)] text-xs border-l border-[var(--dt-gold-500)]/30 pl-2 ml-1">
          INNOVATE &bull; BUILD &bull; TRANSFORM
        </span>
      )}
    </div>
  )
}
