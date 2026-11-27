'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiPhone, FiMail } from 'react-icons/fi'
import { dhronetechContent } from '@/app/data/dhronetech'

export default function FounderSection() {
  const { founder, testimonial, contact, assets } = dhronetechContent

  return (
    <section
      id="contact"
      className="dt-section relative"
      style={{ backgroundColor: 'white' }}
      aria-labelledby="founder-title"
    >
      <div className="dt-container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <article className="dt-card-navy p-8 lg:p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[var(--dt-blue-500)]/10 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <p className="dt-eyebrow" style={{ color: 'var(--dt-gold-500)' }}>{founder.eyebrow}</p>
              <h2 id="founder-title" className="text-2xl font-bold text-white mb-4">{founder.name}</h2>
              <p className="text-[var(--dt-text-muted)] text-lg leading-relaxed mb-8">{founder.text}</p>
              <Link href={founder.cta.href} className="dt-btn dt-btn-navy">
                {founder.cta.label}
                <FiArrowRight size={18} />
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] -translate-y-1/4 -translate-x-1/4 opacity-50" aria-hidden="true">
              <Image
                src={assets.founder}
                alt=""
                fill
                className="object-cover rounded-full"
                style={{ objectPosition: 'top center' }}
              />
            </div>
          </article>

          <article className="dt-card p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="dt-eyebrow">{testimonial.eyebrow}</p>
              <div className="flex items-start gap-4 mt-6">
                <svg
                  className="w-12 h-12 text-[var(--dt-blue-500)]/30 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.433.917-3.995 3.638-3.995 5.849h4v7.051h-6.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.995 3.638-3.995 5.849h3.983v7.051h-6.983z" />
                </svg>
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