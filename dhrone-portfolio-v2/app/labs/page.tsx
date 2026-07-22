import { FiZap, FiClock } from 'react-icons/fi'
import { labProjects } from '@/app/data/labs'
import PageWrapper from '@/components/PageWrapper'

const statusColor = (status: string) =>
  status === 'Live' ? '#22C55E' : status === 'Prototype' ? '#FFD93D' : '#6C63FF'

const statusBg = (status: string) =>
  status === 'Live' ? '#22C55E20' : status === 'Prototype' ? '#FFD93D20' : '#6C63FF20'

export default function LabsPage() {
  const inProgress = labProjects.filter((p) => p.status === 'In Progress')
  const others = labProjects.filter((p) => p.status !== 'In Progress')

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-coral uppercase tracking-widest mb-3">Experiments & Products</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
              The <span className="text-gradient-violet">lab</span>
            </h1>
            <p className="max-w-xl" style={{ color: 'var(--text-muted)' }}>
              Active products in development, experimental tools, and proof-of-concepts I build alongside client work.
            </p>
          </div>

          {/* In Progress — Active Products */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-6 rounded-full bg-violet" />
              <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Active Products in Development</h2>
              <span className="flex items-center gap-1.5 text-xs font-medium text-violet pill border border-violet/20">
                <FiClock size={11} /> {inProgress.length} In Progress
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {inProgress.map((lab) => (
                <div key={lab.id} className="card p-6 group">
                  <div className="h-0.5 w-8 rounded mb-5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: lab.accentColor }} />
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${lab.accentColor}20` }}>
                      <FiZap size={18} style={{ color: lab.accentColor }} />
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ color: statusColor(lab.status), backgroundColor: statusBg(lab.status) }}>
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
          </div>

          {/* Other experiments */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-6 rounded-full bg-coral" />
              <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Experiments & Mini Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((lab) => (
                <div key={lab.id} className="card p-6 group">
                  <div className="h-0.5 w-8 rounded mb-5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: lab.accentColor }} />
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${lab.accentColor}20` }}>
                      <FiZap size={18} style={{ color: lab.accentColor }} />
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ color: statusColor(lab.status), backgroundColor: statusBg(lab.status) }}>
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
          </div>

          {/* CTA */}
          <div className="card p-10 text-center mb-20">
            <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Got an idea for a collaboration?</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>I&apos;m always tinkering with new tools and concepts. Reach out if you&apos;d like to build something together.</p>
          </div>

        </div>
      </div>
    </PageWrapper>
  )
}
