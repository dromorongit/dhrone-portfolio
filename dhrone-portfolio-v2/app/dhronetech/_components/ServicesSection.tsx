import Link from 'next/link'
import { FiArrowRight, FiCode, FiSmartphone, FiMonitor, FiDatabase, FiMessageSquare, FiVideo, FiAward } from 'react-icons/fi'
import { dhronetechContent } from '@/app/data/dhronetech'

const serviceIcons = {
  code: FiCode,
  smartphone: FiSmartphone,
  laptop: FiMonitor,
  'bar-chart': FiDatabase,
  megaphone: FiMessageSquare,
  video: FiVideo,
  'graduation-cap': FiAward,
}

const iconColorClasses = {
  blue: 'dt-icon-circle-blue',
  purple: 'dt-icon-circle-purple',
  green: 'dt-icon-circle-green',
  pink: 'dt-icon-circle-pink',
  orange: 'dt-icon-circle-orange',
}

export default function ServicesSection() {
  const { services } = dhronetechContent

  return (
    <section
      id="services"
      className="dt-section relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--dt-surface-light) 0%, white 50%, white 100%)' }}
      aria-labelledby="services-title"
    >
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(31, 91, 255, 0.08)' }}
        aria-hidden="true"
      />
      <div className="dt-container-lg relative">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          <div className="max-w-lg">
            <p className="dt-eyebrow" style={{ color: 'var(--dt-gold-500)' }}>
              <span style={{ display: 'inline-block', width: '3rem', height: '2px', background: 'var(--dt-gold-500)', marginRight: '0.5rem' }} />
              {services.eyebrow}
            </p>
            <h2 id="services-title" className="dt-h2 mb-6">{services.h2}</h2>
            <p className="dt-p mb-8">{services.paragraph}</p>
            <Link href={services.cta.href} className="dt-btn dt-btn-navy">
              {services.cta.label}
              <FiArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {services.tiles.map((tile, index) => {
              const Icon = serviceIcons[tile.icon as keyof typeof serviceIcons]
              const isLast = index === services.tiles.length - 1
              const href = tile.href || '#services'

              if (isLast) {
                return (
                  <div
                    key={tile.title}
                    className="dt-card dt-service-tile flex flex-col items-center justify-center p-6 relative"
                    style={{ minHeight: '280px' }}
                  >
                    <div className="dt-tagline" style={{ transform: 'rotate(-3deg)' }}>
                      Innovate. Build. Transform.
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={tile.title}
                  href={href}
                  className="dt-card dt-service-tile group"
                >
                  <div className={`dt-icon-circle ${iconColorClasses[tile.iconColor as keyof typeof iconColorClasses]} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <h3>{tile.title}</h3>
                  <p>{tile.text}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}