import { Code, Smartphone, Video, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const timeline = [
  { year: '2020', title: 'Video Editing Beginnings', desc: 'Started with basic video editing and slideshow production.' },
  { year: '2021', title: 'First Music Video', desc: 'Shot first music video for BlaqMili — KaakaaMotobi Official Video.' },
  { year: '2022', title: 'Professional Video Production', desc: 'Professional video directing/editing — Lipssy J music video and Netyark Mall marketing videos.' },
  { year: '2023', title: 'Web Development Start', desc: 'Began developing demo websites and learning production-ready development.' },
  { year: '2024', title: 'UI/UX Expert', desc: 'Delivered 13+ video projects, many photoshoots, mastered UI/UX web design.' },
  { year: '2025', title: 'First Live Web Projects', desc: 'Developed first 3 full web projects that went live in production.' },
  { year: '2026', title: 'Multiple Projects at Scale', desc: '20+ videos, 30+ photos, 11+ websites, 2+ desktop applications delivered.' },
]

const skills = [
  { icon: Code, color: 'text-violet', bg: 'bg-violet/10', title: 'Software Engineering', items: ['Web Applications', 'Backend Systems', 'API Development', 'Database Architecture'] },
  { icon: Smartphone, color: 'text-coral', bg: 'bg-coral/10', title: 'App Development', items: ['Mobile Applications', 'Desktop Applications', 'SaaS Platforms', 'Cross-platform Apps'] },
  { icon: Video, color: 'text-yellow', bg: 'bg-yellow/10', title: 'Creative Production', items: ['Video Directing', 'Video Editing', 'Commercial Production', 'Visual Effects'] },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">About Me</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary mb-6">
            The person <span className="text-gradient-violet">behind the code</span>
          </h1>
          <p className="text-textMuted text-lg max-w-2xl leading-relaxed">
            Narh H.P Dromor is a software engineer, developer, and creative technologist based in Accra, Ghana.
            He specializes in high-performance web platforms, APIs, mobile applications, desktop systems — and cinematic video production.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: '50+', label: 'Projects', color: 'border-violet/30' },
            { value: '30+', label: 'Clients', color: 'border-coral/30' },
            { value: '5+', label: 'Years', color: 'border-yellow/30' },
            { value: '100%', label: 'Satisfaction', color: 'border-violet/30' },
          ].map((s) => (
            <div key={s.label} className={`card p-6 text-center border ${s.color}`}>
              <p className="text-3xl font-extrabold text-gradient-violet mb-1">{s.value}</p>
              <p className="text-xs text-textMuted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-20">
          <p className="text-xs font-semibold text-coral uppercase tracking-widest mb-3">Skills & Expertise</p>
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8">What I bring to the table</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {skills.map((skill) => (
              <div key={skill.title} className="card p-6">
                <div className={`w-10 h-10 rounded-xl ${skill.bg} flex items-center justify-center mb-4`}>
                  <skill.icon size={20} className={skill.color} />
                </div>
                <h3 className="font-bold text-textPrimary mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-textMuted">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <p className="text-xs font-semibold text-yellow uppercase tracking-widest mb-3">My Journey</p>
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-10">How I got here</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8 pl-12 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-violet" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-violet">{item.year}</span>
                    <h3 className="font-semibold text-textPrimary mt-0.5 mb-1">{item.title}</h3>
                    <p className="text-sm text-textMuted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card p-10 text-center mb-20">
          <h2 className="text-2xl font-bold text-textPrimary mb-3">Want to work together?</h2>
          <p className="text-textMuted mb-6">I&apos;m always open to exciting new projects and opportunities.</p>
          <Link href="/contact" className="btn-primary inline-flex">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}