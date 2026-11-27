import Link from 'next/link'
import { FiArrowRight, FiCode, FiSmartphone, FiMonitor, FiDatabase, FiVideo } from 'react-icons/fi'
import { FaBullhorn, FaGraduationCap } from 'react-icons/fa'
import { dhronetechContent } from '@/app/data/dhronetech'

const serviceIcons = {
  code: FiCode,
  smartphone: FiSmartphone,
  laptop: FiMonitor,
  'bar-chart': FiDatabase,
  megaphone: FaBullhorn,
  video: FiVideo,
  'graduation-cap': FaGraduationCap,
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
        <div className="grid lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
          <div className="w-full max-w-lg min-w-0">
            <p className="dt-eyebrow" style={{ color: 'var(--dt-gold-500)' }}>
              <span style={{ display: 'inline-block', width: '3rem', height: '2px', background: 'var(--dt-gold-500)', marginRight: '0.5rem' }} />
              {services.eyebrow}
            </p>
            <h2
              id="services-title"
              className="dt-h2 mb-6"
              style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)' }}
            >
              {services.h2}
            </h2>
            <p className="dt-p mb-8">{services.paragraph}</p>
            <Link href={services.cta.href} className="dt-btn dt-btn-navy">
              {services.cta.label}
              <FiArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 min-w-0 w-full">
            {services.tiles.map((tile, index) => {
              const Icon = serviceIcons[tile.icon as keyof typeof serviceIcons]
              const isLast = index === services.tiles.length - 1
              const href = tile.href || '#services'

              if (isLast) {
                return (
                  <div
                    key={tile.title}
                    className="col-span-2 md:col-span-2 xl:col-span-1 flex items-center justify-center min-w-0"
                  >
                    <div
                      className="dt-tagline"
                      style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)' }}
                    >
                      <span style={{ display: 'inline-block', transform: 'rotate(-6deg)' }}>
                        Innovate.
                        <br />
                        Build.
                        <br />
                        Transform.
                      </span>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={tile.title}
                  href={href}
                  className="dt-card group flex flex-col items-center text-center p-5 min-w-0 h-full"
                >
                  <div
                    className={`${iconColorClasses[tile.iconColor as keyof typeof iconColorClasses]} w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-[15px] font-semibold leading-snug text-balance text-[var(--dt-text-dark)]">
                    {tile.title}
                  </h3>
                  <p className="text-[13px] leading-snug text-[var(--dt-text-muted)] mt-2">
                    {tile.text}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


