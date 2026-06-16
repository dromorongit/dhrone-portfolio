import { FiZap } from 'react-icons/fi'
import { labProjects } from '@/app/data/labs'
import PageWrapper from '@/components/PageWrapper'

const statusColor = (status: string) =>
  status === 'Live' ? '#22C55E' : status === 'Prototype' ? '#FFD93D' : '#6C63FF'

export default function LabsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold text-coral uppercase tracking-widest mb-3">Experiments</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
              The <span className="text-gradient-violet">lab</span>
            </h1>
            <p className="max-w-xl" style={{ color: 'var(--text-muted)' }}>
              Small experimental projects, fun tools, and proof-of-concepts I build outside of client work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {labProjects.map((lab) => (
              <div key={lab.id} className="card p-6 group">
                <div className="h-0.5 w-8 rounded mb-5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: lab.accentColor }} />
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${lab.accentColor}20` }}>
                    <FiZap size={18} style={{ color: lab.accentColor }} />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: statusColor(lab.status) }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusColor(lab.status) }} />
                    {lab.status}
                  </span>
                </div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{lab.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{lab.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {lab.tech.map((t) => (
                    <span key={t} className="pill text-xs">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card p-10 text-center mb-20">
            <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Got an idea for a fun experiment?</h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>I&apos;m always tinkering with new tools and concepts. Reach out if you&apos;d like to collaborate.</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}