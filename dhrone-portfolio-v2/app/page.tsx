import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiGlobe, FiSmartphone, FiCode, FiVideo, FiStar } from 'react-icons/fi'
import { featuredProjects } from '@/app/data/projects'
import GitHubStats from '@/components/GitHubStats'
import Testimonials from '@/components/Testimonials'

const techMarquee = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Electron', 'React Native', 'Prisma', 'Redis', 'AWS', 'Express', 'GraphQL', 'SQLite', 'Docker']

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-violet/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-coral/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow/5 blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 pill border border-violet/30 text-violet mb-8">
                <span className="w-2 h-2 rounded-full bg-violet animate-pulse-slow" />
                Available for new projects
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
                <span style={{ color: 'var(--text-primary)' }}>I build </span>
                <span className="text-gradient-violet">digital</span>
                <br />
                <span style={{ color: 'var(--text-primary)' }}>experiences</span>
                <span className="text-coral">.</span>
              </h1>
              <p className="text-lg max-w-xl leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
                Narh H.P Dromor — Software Engineer, App Developer & Creative Director based in{' '}
                <span className="text-yellow font-medium">Accra, Ghana</span>.
                I design and build powerful software, modern platforms, and cinematic visuals.
              </p>
              <div className="flex flex-wrap gap-4 mb-14">
                <Link href="/projects" className="btn-primary">View My Work <FiArrowRight size={16} /></Link>
                <Link href="/contact" className="btn-outline">Get in Touch</Link>
              </div>
              <div className="flex flex-wrap gap-8">
                {[
                  { value: '50+', label: 'Projects' },
                  { value: '30+', label: 'Clients' },
                  { value: '5+', label: 'Years' },
                  { value: '12+', label: 'Videos' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-gradient-violet">{s.value}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end relative mt-12 lg:mt-0">
              <div className="relative w-40 h-48 max-w-full">
                <div className="absolute -inset-2 rounded-3xl bg-violet/10 blur-2xl" />
                <div className="absolute inset-0 rounded-2xl border border-coral/20 translate-x-2 translate-y-2" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[var(--border)]">
                  <Image src="/images/dhrone.jpg" alt="Narh H.P Dromor" fill className="object-cover" priority sizes="(max-width: 768px) 160px, 160px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/50 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-3 py-1.5 shadow-xl whitespace-nowrap"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)', fontSize: '0.65rem' }}>
                    Software Engineer <span className="text-violet">·</span> Creative Director
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y py-4 overflow-hidden" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
        <div className="flex gap-8 marquee-track">
          {[...techMarquee, ...techMarquee].map((tech, i) => (
            <span key={i} className="text-xs font-semibold uppercase tracking-widest whitespace-nowrap shrink-0" style={{ color: 'var(--text-muted)' }}>
              {tech} <span className="text-violet ml-8">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* WHAT I DO */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">What I Do</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>Crafting across disciplines</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: FiGlobe, color: 'text-violet', bg: 'bg-violet/10', accent: '#6C63FF', title: 'Web Development', desc: 'Modern, responsive websites and web applications built with cutting-edge technologies.' },
              { icon: FiSmartphone, color: 'text-coral', bg: 'bg-coral/10', accent: '#FF6B6B', title: 'App Development', desc: 'Powerful mobile and desktop applications tailored to your business needs.' },
              { icon: FiCode, color: 'text-yellow', bg: 'bg-yellow/10', accent: '#FFD93D', title: 'Backend Systems', desc: 'Robust APIs, database architecture, and scalable server solutions.' },
              { icon: FiVideo, color: 'text-violet', bg: 'bg-violet/10', accent: '#6C63FF', title: 'Video Production', desc: 'Professional video directing and editing for music videos and commercials.' },
            ].map((item) => (
              <div key={item.title} className="card p-6 group">
                <div className="h-0.5 w-6 rounded mb-4 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: item.accent }} />
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-coral uppercase tracking-widest mb-3">Featured Work</p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>Selected projects</h2>
            </div>
            <Link href="/projects" className="btn-outline text-sm hidden sm:flex">All Projects <FiArrowRight size={15} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="card p-6 group block">
                <div className="h-0.5 w-8 rounded mb-5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: project.accentColor }} />
                <span className="pill text-xs mb-3 block w-fit">{project.category}</span>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{project.shortDescription}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="pill text-xs">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && <span className="pill text-xs">+{project.technologies.length - 3}</span>}
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: project.accentColor }}>
                  View Project <FiArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/projects" className="btn-outline">All Projects <FiArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* GITHUB STATS */}
      <GitHubStats />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA BANNER */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden p-10 md:p-16 text-center"
            style={{ background: 'linear-gradient(135deg, #6C63FF15, #FF6B6B10, #FFD93D08)' }}>
            <div className="absolute inset-0 border border-violet/20 rounded-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <FiStar key={i} size={16} className="text-yellow fill-yellow" />)}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                Let&apos;s build something <span className="text-gradient-full">great together</span>
              </h2>
              <p className="mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
                Whether you need a website, app, or creative video content — I&apos;m ready to bring your vision to life.
              </p>
              <Link href="/contact" className="btn-primary inline-flex">Start a Project <FiArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}