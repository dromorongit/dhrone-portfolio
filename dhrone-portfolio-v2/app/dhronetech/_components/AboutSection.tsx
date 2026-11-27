import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { dhronetechContent } from '@/app/data/dhronetech'

export default function AboutSection() {
  const { about, assets } = dhronetechContent

  return (
    <section
      id="about"
      className="dt-section relative"
      style={{ background: 'white' }}
      aria-labelledby="about-title"
    >
      <div className="dt-container-lg">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3.5] min-h-[320px] rounded-r-3xl overflow-hidden lg:rounded-r-3xl lg:rounded-l-none">
              <Image
                src={assets.building}
                alt="DhroneTech Solutions headquarters building"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-6 pt-8 lg:pt-0">
            <p className="dt-eyebrow">{about.eyebrow}</p>
            <h2 id="about-title" className="dt-h2 mb-6">{about.h2}</h2>
            <p className="dt-p mb-8">{about.paragraph}</p>
            <Link
              href={about.link.href}
              className="inline-flex items-center gap-2 text-[var(--dt-blue-500)] font-semibold hover:underline"
            >
              {about.link.label}
              <FiArrowRight size={18} />
            </Link>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <div className="dt-card p-8 lg:p-10 bg-[var(--dt-surface-light)] border-blue-500/10 sticky top-24" style={{ maxHeight: 'fit-content' }}>
              <h3 className="text-xl font-bold text-[var(--dt-text-dark)] mb-8">{about.whyChoose.title}</h3>
              <div className="space-y-2">
                {about.whyChoose.items.map((item) => (
                  <div key={item} className="dt-why-choose-item">
                    <FiCheckCircle size={20} className="text-[var(--dt-blue-500)]" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 w-16 h-16 opacity-5" aria-hidden="true">
                <svg viewBox="0 0 100 100" fill="none">
                  <rect x="10" y="10" width="20" height="20" rx="4" fill="var(--dt-blue-500)" opacity="0.3" />
                  <rect x="70" y="70" width="20" height="20" rx="4" fill="var(--dt-blue-500)" opacity="0.3" />
                  <rect x="70" y="10" width="20" height="20" rx="4" fill="var(--dt-gold-500)" opacity="0.3" />
                  <rect x="10" y="70" width="20" height="20" rx="4" fill="var(--dt-gold-500)" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}