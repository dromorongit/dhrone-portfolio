'use client'

import Image from 'next/image'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import { dhronetechContent } from '@/app/data/dhronetech'

export default function HeroSection() {
  const { hero, assets } = dhronetechContent

  return (
    <section
      id="hero"
      className="relative min-h-[560px] lg:min-h-[640px] flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--dt-navy-900)' }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.hero}
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: '70% center',
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: 'linear-gradient(90deg, rgba(6,18,46,0.92) 0%, rgba(6,18,46,0.75) 40%, rgba(6,18,46,0.15) 70%, transparent 100%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: 'linear-gradient(180deg, rgba(6,18,46,0.85) 0%, rgba(6,18,46,0.55) 100%)' }}
          aria-hidden="true"
        />
        <div className="dt-swoosh" aria-hidden="true" />
      </div>

      <div className="dt-container-lg relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <p className="dt-eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title" className="dt-h1 mb-6">
              {hero.h1[0]} <br />
              <span className="dt-h1-gold">{hero.h1[1]}</span>
            </h1>
            <p className="dt-p-light mb-8 max-w-xl">{hero.paragraph}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={hero.primaryCta.href}
                className="dt-btn dt-btn-primary"
              >
                {hero.primaryCta.label}
                <FiArrowRight size={18} />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="dt-btn dt-btn-secondary flex items-center gap-2"
              >
                <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/30">
                  <FiPlay size={16} className="ml-1" />
                </span>
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="flex flex-wrap gap-3" role="list" aria-label="Trust badges">
              {hero.trustBadges.map((badge) => (
                <div key={badge.label} className="dt-trust-badge" role="listitem">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {badge.icon === 'rocket' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.493 19.944A10.01 10.01 0 018.38 14l-2.78-2.77a6.315 6.315 0 010-8.943A6.315 6.315 0 0116.38 4.06l2.78 2.78a10.01 10.01 0 015.9 5.62l.92.92a1.002 1.002 0 01-.01 1.42l-1.58 1.58a1.002 1.002 0 01-1.42 0l-.93-.92a8.04 8.04 0 00-4.72-4.49l-.92-.92a1.002 1.002 0 010-1.42l1.58-1.58a1.002 1.002 0 011.42 0l.93.92c.86.86 1.76 1.67 2.67 2.53 2.27 2.16 3.61 5 3.61 8.13 0 5.734-4.666 10.4-10.4 10.4-2.378 0-4.59-.789-6.34-2.123l-1.17-.82-.83-1.17A10.034 10.034 0 014.493 19.944z" />
                    )}
                    {badge.icon === 'shield-check' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {badge.icon === 'users' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    )}
                    {badge.icon === 'bar-chart' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    )}
                  </svg>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="aspect-[4/3] max-w-[480px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--dt-blue-500)]/20 via-transparent to-transparent rounded-[2rem] blur-3xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}