'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiPhone, FiMail } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { dhronetechContent } from '@/app/data/dhronetech'

export default function FounderSection() {
  const { founder, testimonial, contact, assets } = dhronetechContent
  const [founderCutout, setFounderCutout] = useState(false)

  useEffect(() => {
    const img = new window.Image()
    img.onload = () => setFounderCutout(true)
    img.onerror = () => setFounderCutout(false)
    img.src = '/images/dhronetech/founder.webp'
  }, [])

  const founderSrc = founderCutout ? '/images/dhronetech/founder.webp' : assets.founder
  const founderFit = founderCutout ? 'object-contain object-bottom' : 'object-cover object-top'

  return (
    <section
      id="contact"
      className="dt-section relative"
      style={{ backgroundColor: 'white' }}
      aria-labelledby="founder-title"
    >
      <div className="dt-container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <article className="dt-card-navy relative overflow-hidden rounded-3xl min-h-[340px] p-8 lg:p-10">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[var(--dt-blue-500)]/10 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="relative z-10 max-w-full lg:max-w-[58%]">
              <p className="dt-eyebrow" style={{ color: 'var(--dt-gold-500)' }}>{founder.eyebrow}</p>
              <h2 id="founder-title" className="text-2xl font-bold text-white mb-4">{founder.name}</h2>
              <p className="text-white/85 text-lg leading-relaxed mb-8">{founder.text}</p>
              <Link href={founder.cta.href} className="dt-btn dt-btn-primary">
                {founder.cta.label}
                <FiArrowRight size={18} />
              </Link>
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0 w-[42%] h-[88%]">
              <Image
                src={founderSrc}
                alt=""
                fill
                className={`${founderFit} rounded-tl-[2rem]`}
                style={{ objectPosition: 'top center' }}
              />
            </div>
            <div className="lg:hidden relative mt-6 w-full h-[260px]">
              <Image
                src={founderSrc}
                alt=""
                fill
                className={`${founderFit} rounded-tl-[2rem]`}
                style={{ objectPosition: 'top center' }}
              />
            </div>
          </article>

          <article className="dt-card p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="dt-eyebrow">{testimonial.eyebrow}</p>
              <div className="flex items-start gap-4 mt-6">
                <FaQuoteLeft
                  size={32}
                  className="text-[var(--dt-blue-500)] flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <blockquote className="flex-1">
                  <p className="text-lg lg:text-xl text-[var(--dt-text-dark)] leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <footer className="mt-4 text-[var(--dt-text-muted)]">— {testimonial.attribution}</footer>
                </blockquote>
              </div>
            </div>
            <div className="flex gap-2 mt-8 justify-center" role="tablist" aria-label="Testimonial pagination">
              <button
                role="tab"
                aria-selected={true}
                aria-label="Testimonial 1"
                className="dt-dot dt-dot-active"
                style={{ background: 'var(--dt-blue-500)' }}
              />
            </div>
          </article>

          <article className="dt-card-navy p-8 lg:p-10 relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <Image
                src={assets.contactBg}
                alt=""
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,18,46,0.85), rgba(11,31,75,0.6))' }} />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-[var(--dt-gold-500)] mb-4">{contact.title}</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">{contact.text}</p>
              <div className="space-y-4 mb-8">
                {contact.rows.map((row) => (
                  <a
                    key={row.icon}
                    href={row.href}
                    className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                  >
                    <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[var(--dt-gold-500)]">
                      {row.icon === 'phone' && (
                        <FiPhone size={20} />
                      )}
                      {row.icon === 'mail' && (
                        <FiMail size={20} />
                      )}
                    </span>
                    <span className="text-base font-medium">{row.text}</span>
                  </a>
                ))}
              </div>
              <Link href={contact.cta.href} className="dt-btn dt-btn-primary w-full lg:w-auto justify-center">
                {contact.cta.label}
                <FiArrowRight size={18} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}


