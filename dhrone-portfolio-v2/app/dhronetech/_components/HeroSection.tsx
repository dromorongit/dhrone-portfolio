'use client'

import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { FaPlay } from 'react-icons/fa'
import { LuRocket, LuShieldCheck, LuUsers, LuChartColumnIncreasing } from 'react-icons/lu'
import { dhronetechContent } from '@/app/data/dhronetech'

const badgeIcons: Record<string, React.ElementType> = {
  rocket: LuRocket,
  'shield-check': LuShieldCheck,
  users: LuUsers,
  'bar-chart': LuChartColumnIncreasing,
}

export default function HeroSection() {
  const { hero, assets } = dhronetechContent

  return (
    <section
      id="hero"
      className="relative overflow-hidden hero-section"
      style={{
        paddingTop: 'var(--dt-header-h)',
        paddingBottom: '32px',
        minHeight: 'clamp(560px, 45.2vw, 760px)',
        backgroundColor: 'var(--dt-navy-900)',
      }}
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
          className="object-cover hero-image"
        />
        <div
          className="absolute inset-0 hidden xl:block"
          style={{ background: 'linear-gradient(90deg, rgba(6,18,46,0.92) 0%, rgba(6,18,46,0.75) 40%, rgba(6,18,46,0.15) 70%, transparent 100%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 xl:hidden"
          style={{ background: 'linear-gradient(180deg, rgba(6,18,46,0.85) 0%, rgba(6,18,46,0.55) 100%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="dt-container-lg relative z-10 w-full">
        <div className="w-full min-w-0" style={{ marginTop: '46px' }}>
          <p className="dt-hero-eyebrow">
            {hero.eyebrow}
            <span className="dt-hero-eyebrow-line" aria-hidden="true" />
          </p>

          <h1 id="hero-title" className="dt-hero-h1">
            {hero.h1[0]} <br />
            Our <span className="dt-hero-h1-gold">{hero.h1[1]}</span>
          </h1>

          <p className="dt-hero-p" style={{ maxWidth: '28.5rem' }}>
            {hero.paragraph}
          </p>

          <div
            className="flex flex-col sm:flex-row items-center"
            style={{ gap: 'clamp(16px, 2.7vw, 40px)', marginBottom: '28px' }}
          >
            <a
              href={hero.primaryCta.href}
              className="dt-hero-btn dt-hero-btn-explore"
              style={{ height: 'clamp(46px, 3.7vw, 54px)' }}
            >
              {hero.primaryCta.label}
              <FiArrowRight size={18} />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="dt-hero-btn dt-hero-btn-about"
              style={{ height: 'clamp(46px, 3.7vw, 54px)', width: 'clamp(140px, 12vw, 175px)' }}
            >
              {hero.secondaryCta.label}
              <span className="dt-hero-play-circle">
                <FaPlay size={10} style={{ color: '#0B1530', position: 'relative', left: '1px' }} />
              </span>
            </a>
          </div>

          <div className="dt-badges" role="list" aria-label="Trust badges">
            {hero.trustBadges.map((badge, index) => (
              <div key={index} className="dt-badge-item" role="listitem">
                <BadgeIcon icon={badge.icon} size={24} className="dt-badge-icon" aria-hidden="true" />
                <div className={`dt-badge-label${badge.label.length === 1 ? ' single' : ''}`}>
                  {badge.label.map((line, lineIndex) => (
                    <span key={lineIndex}>{line}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BadgeIcon({ icon, size, className }: { icon: string; size: number; className?: string }) {
  const Icon = badgeIcons[icon]
  if (!Icon) return null
  return <Icon size={size} className={className} />
}
