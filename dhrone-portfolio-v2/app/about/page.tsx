import Image from 'next/image'
import Link from 'next/link'
import { FiCode, FiSmartphone, FiVideo, FiArrowRight, FiMapPin, FiCalendar } from 'react-icons/fi'
import AnimatedCounter from '@/components/AnimatedCounter'

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
  { icon: FiCode, color: 'text-violet', bg: 'bg-violet/10', accent: '#6C63FF', title: 'Software Engineering', items: ['Web Applications', 'Backend Systems', 'API Development', 'Database Architecture'] },
  { icon: FiSmartphone, color: 'text-coral', bg: 'bg-coral/10', accent: '#FF6B6B', title: 'App Development', items: ['Mobile Applications', 'Desktop Applications', 'SaaS Platforms', 'Cross-platform Apps'] },
  { icon: FiVideo, color: 'text-yellow', bg: 'bg-yellow/10', accent: '#FFD93D', title: 'Creative Production', items: ['Video Directing', 'Video Editing', 'Commercial Production', 'Visual Effects'] },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">

        {/* Hero: Two-column with photo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Text */}
          <div>
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">About Me</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary leading-tight mb-6">
              The person <span className="text-gradient-violet">behind the code</span>
            </h1>
            <p className="text-textMuted leading-relaxed mb-4">
              Narh H.P Dromor is a software engineer, developer, and creative technologist based in Accra, Ghana.
              He specializes in high-performance web platforms, APIs, mobile applications, and desktop systems.
            </p>
            <p className="text-textMuted leading-relaxed mb-8">
              Alongside software engineering, he is also a video director and editor producing music videos and
              commercial visual content. With a passion for innovation and attention to detail, he delivers
              exceptional digital solutions that meet client needs.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-1.5 pill border border-violet/20 text-violet text-xs">
                <FiMapPin size={12} /> Accra, Ghana
              </span>
              <span className="flex items-center gap-1.5 pill border border-coral/20 text-coral text-xs">
                <FiCalendar size={12} /> 5+ Years Experience
              </span>
            </div>
            <Link href="/contact" className="btn-primary inline-flex">
              Work With Me <FiArrowRight size={16} />
            </Link>
          </div>

          {/* Right: Photo */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow blobs behind photo */}
            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-violet/15 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-coral/10 blur-[60px] pointer-events-none" />

            {/* Photo frame */}
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              {/* Decorative border offset */}
              <div className="absolute inset-0 rounded-2xl border border-violet/30 translate-x-3 translate-y-3" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/dhrone.jpg"
                  alt="Narh H.P Dromor — Software Engineer & Creative Director"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-surface border border-border rounded-xl px-4 py-2.5 shadow-xl">
                <p className="text-xs text-textMuted">Based in</p>
                <p className="text-sm font-bold text-textPrimary">Accra, Ghana 🇬🇭</p>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -top-4 -right-4 bg-surface border border-violet/30 rounded-xl px-4 py-2.5 shadow-xl">
                <p className="text-xs text-textMuted">Available for</p>
                <p className="text-sm font-bold text-violet">Freelance Work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
{[
             { value: '50+', label: 'Projects Completed', color: '#6C63FF' },
             { value: '30+', label: 'Happy Clients', color: '#FF6B6B' },
             { value: '5+', label: 'Years Experience', color: '#FFD93D' },
             { value: '100%', label: 'Satisfaction Rate', color: '#6C63FF' },
           ].map((s) => (
             <div key={s.label} className="card p-6 text-center group hover:border-violet/30">
               <p className="text-3xl font-extrabold mb-1" style={{ color: s.color }}><AnimatedCounter value={s.value} /></p>
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
              <div key={skill.title} className="card p-6 group">
                <div className="h-0.5 w-8 rounded mb-5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: skill.accent }} />
                <div className={`w-10 h-10 rounded-xl ${skill.bg} flex items-center justify-center mb-4`}>
                  <skill.icon size={20} className={skill.color} />
                </div>
                <h3 className="font-bold text-textPrimary mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-textMuted">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: skill.accent }} />
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
                  <div className="card p-5 flex-1">
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
        <div className="relative rounded-2xl overflow-hidden p-10 text-center mb-20"
          style={{ background: 'linear-gradient(135deg, #6C63FF12, #FF6B6B08)' }}>
          <div className="absolute inset-0 border border-violet/20 rounded-2xl pointer-events-none" />
          <h2 className="text-2xl font-bold text-textPrimary mb-3 relative z-10">Want to work together?</h2>
          <p className="text-textMuted mb-6 relative z-10">I&apos;m always open to exciting new projects and opportunities.</p>
          <Link href="/contact" className="btn-primary inline-flex relative z-10">
            Get in Touch <FiArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  )
}