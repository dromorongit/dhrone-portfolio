import { FiMessageSquare } from 'react-icons/fi'
import { testimonials } from '@/app/data/testimonials'

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold text-yellow uppercase tracking-widest mb-3">Client Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>What clients say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.id} className="card p-6 flex flex-col">
              {/* Quote icon */}
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${t.accentColor}20` }}>
                <FiMessageSquare size={14} style={{ color: t.accentColor }} />
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--text-muted)' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.accentColor}, ${t.accentColor}99)` }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}