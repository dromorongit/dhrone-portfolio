const categories = [
  {
    label: 'Languages',
    color: '#6C63FF',
    items: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    label: 'Frontend',
    color: '#FF6B6B',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    label: 'Backend',
    color: '#FFD93D',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    label: 'Databases',
    color: '#6C63FF',
    items: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    label: 'Tools & DevOps',
    color: '#FF6B6B',
    items: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 75 },
      { name: 'Railway', level: 90 },
    ],
  },
  {
    label: 'Desktop & Mobile',
    color: '#FFD93D',
    items: [
      { name: 'Electron', level: 85 },
      { name: 'React Native', level: 80 },
      { name: 'Capacitor', level: 85 },
      { name: 'PWA', level: 90 },
    ],
  },
]

const extras = ['UI/UX Design', 'Figma', 'Adobe Premiere', 'After Effects', 'Agile / Scrum', 'Authentication', 'Payment Integration', 'Cloud Services', 'SEO', 'Accessibility']

const learning = [
  { name: 'Rust', level: 30 },
  { name: 'Go', level: 25 },
  { name: 'AWS Advanced', level: 40 },
  { name: 'Kubernetes', level: 20 },
]

export default function TechStackPage() {
  return (
    <div className="min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Tech Stack</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary mb-4">
            Tools of <span className="text-gradient-violet">the trade</span>
          </h1>
          <p className="text-textMuted max-w-xl">The technologies and tools I use to build modern, high-performance applications.</p>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((cat) => (
            <div key={cat.label} className="card p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                <h2 className="font-bold text-textPrimary text-sm uppercase tracking-wide">{cat.label}</h2>
              </div>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-textPrimary font-medium">{item.name}</span>
                      <span className="text-textMuted text-xs">{item.level}%</span>
                    </div>
                    <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all"
                        style={{ width: `${item.level}%`, backgroundColor: cat.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="mb-16">
          <h2 className="text-lg font-bold text-textPrimary mb-4">Additional Skills</h2>
          <div className="flex flex-wrap gap-2">
            {extras.map((e) => (
              <span key={e} className="px-4 py-2 rounded-full text-sm bg-surface border border-border text-textMuted">{e}</span>
            ))}
          </div>
        </div>

        {/* Currently learning */}
        <div className="card p-8 mb-20">
          <h2 className="text-lg font-bold text-textPrimary mb-6">Currently Learning</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {learning.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-textPrimary font-medium">{item.name}</span>
                  <span className="text-textMuted text-xs">{item.level}%</span>
                </div>
                <div className="h-1.5 bg-surfaceHover rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-yellow" style={{ width: `${item.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}