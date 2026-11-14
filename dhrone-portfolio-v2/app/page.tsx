import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiCode, FiSmartphone, FiVideo, FiGlobe, FiStar, FiChevronRight, FiBriefcase } from 'react-icons/fi'
import { featuredProjects } from '@/app/data/projects'
import GitHubStatsSection from '@/components/GitHubStatsSection'
import Testimonials from '@/components/Testimonials'

const techMarquee = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Electron', 'React Native', 'Prisma', 'Redis', 'AWS', 'Express', 'GraphQL', 'SQLite', 'Docker']

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{ backgroundColor: '#0a0a14' }}
      >
        {/* Background glows (CSS gradients, no blur filters) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(700px 500px at 0% 0%, rgba(236,72,153,0.38), transparent 45%), radial-gradient(circle at 0% 100%, rgba(124,58,237,0.45), transparent 55%), radial-gradient(700px 450px at 100% 100%, rgba(236,72,153,0.16), transparent 55%)',
          }}
        />
        {/* Bottom faint purple fill */}
        <div
          className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none hidden md:block z-0"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.06), transparent 60%)',
          }}
          aria-hidden="true"
        />
        {/* Bottom curved gradient arc */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[160px] pointer-events-none hidden md:block z-0"
          style={{ filter: 'drop-shadow(0 0 18px rgba(168,85,247,0.6))' }}
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-bottom-arc" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#7c5cff" />
              <stop offset="1" stopColor="#ff5ca8" />
            </linearGradient>
          </defs>
          <path d="M0,150 Q720,20 1440,150" stroke="url(#hero-bottom-arc)" strokeWidth="2" />
        </svg>
        {/* Curved arc lines */}
        <svg
          className="absolute -bottom-24 -left-24 w-[900px] h-[520px] opacity-[0.12] pointer-events-none"
          viewBox="0 0 900 520"
          fill="none"
          aria-hidden="true"
        >
          <path d="M-20 480C180 260 520 160 920 220" stroke="url(#hero-arc)" strokeWidth="1.2" />
          <path d="M-40 520C170 320 520 230 940 300" stroke="url(#hero-arc)" strokeWidth="1" />
          <defs>
            <linearGradient id="hero-arc" x1="0" y1="500" x2="900" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A78BFA" stopOpacity="0.2" />
              <stop offset="1" stopColor="#EC4899" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

          <div className="container mx-auto px-6 pt-16 pb-16 lg:py-24 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
            {/* Left column */}
            <div className="motion-safe:animate-fade-in">
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-sm mb-8 md:bg-white/[0.03] md:backdrop-blur-sm"
                style={{ borderColor: 'rgba(255,255,255,0.12)', backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span style={{ color: '#E5E7EB' }}>Available for new projects</span>
                <FiChevronRight size={14} className="text-white/50" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4 text-white">
                I build{' '}
                <span className="text-[#a78bfa] bg-[linear-gradient(90deg,#7c5cff,#ff5ca8)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  digital
                </span>
                <br />
                experiences<span className="text-pink-500">.</span>
              </h1>

              <p className="text-base sm:text-lg max-w-[560px] leading-relaxed mb-10 text-gray-300/90">
                Narh H.P Dromor — Software Engineer, App Developer and Creative Director based in{' '}
                <span className="font-bold text-yellow-400">Accra, Ghana.</span>{' '}
                I design and build powerful software, modern platforms, and cinematic visuals.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-[linear-gradient(135deg,#6d4aff_0%,#a259ff_55%,#ff5ca8_100%)] shadow-[0_10px_30px_rgba(124,92,255,0.45)] hover:opacity-95 transition-opacity"
                >
                  View My Work <FiArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:border-white/40 transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  Get in Touch
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x sm:divide-white/10">
                {[
                  { value: '50+', label: 'Projects' },
                  { value: '30+', label: 'Clients' },
                  { value: '5+', label: 'Years' },
                  { value: '12+', label: 'Videos' },
                ].map((s) => (
                  <div key={s.label} className="sm:px-6 first:sm:pl-0">
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#a78bfa] bg-[linear-gradient(90deg,#8b5cff,#c04dff)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      {s.value}
                    </p>
                    <p className="text-xs sm:text-sm mt-1 text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] lg:w-[360px] lg:h-[440px]">
                {/* Layered glass panels (hidden on small screens) */}
                <div
                  className="hidden md:block absolute -inset-4 rounded-3xl -rotate-[4deg] -translate-x-4 -translate-y-1 border"
                  style={{
                    background: 'linear-gradient(145deg,rgba(124,92,255,0.28),rgba(167,92,255,0.08))',
                    borderColor: 'rgba(190,170,255,0.35)',
                  }}
                />
                <div
                  className="hidden md:block absolute -inset-4 rounded-3xl rotate-[6deg] translate-x-4 translate-y-2 border"
                  style={{
                    background: 'linear-gradient(145deg,rgba(124,92,255,0.28),rgba(167,92,255,0.08))',
                    borderColor: 'rgba(190,170,255,0.35)',
                  }}
                />

                {/* Dotted grid */}
                <div
                  className="hidden md:block absolute -top-3 -right-4 w-20 h-20 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)',
                    backgroundSize: '10px 10px',
                  }}
                />

                {/* Photo card */}
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden border shadow-[0_30px_60px_rgba(0,0,0,0.45)] md:rotate-[3deg]"
                  style={{ borderColor: 'rgba(255,255,255,0.12)', backgroundColor: '#111118' }}
                >
                  <Image src="/images/dhrone.jpg" alt="Narh H.P Dromor" fill className="object-cover" priority sizes="320px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/60 via-transparent to-transparent" />
                </div>

                {/* Floating code badge */}
                <div
                  className="absolute -top-3 -left-3 md:-top-4 md:-left-5 w-11 h-11 md:w-12 md:h-12 rounded-2xl border flex items-center justify-center shadow-lg md:backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(20,16,40,0.85)', borderColor: 'rgba(255,255,255,0.12)' }}
                >
                  <FiCode size={24} className="text-[#a78bfa]" />
                </div>

                {/* Role pill */}
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2.5 rounded-2xl border shadow-xl whitespace-nowrap md:bg-[rgba(17,17,24,0.75)] md:backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(17,17,24,0.92)', borderColor: 'rgba(255,255,255,0.12)' }}
                >
                  <span className="w-7 h-7 rounded-xl bg-violet-600/90 flex items-center justify-center shrink-0">
                    <FiBriefcase size={15} className="text-white" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    Software Engineer <span className="text-violet-400">•</span> Creative Director
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
                <div className="h-0.5 w-6 rounded mb-4 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: item.accent }} />
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
              <Link key={project.slug} href={`/projects/${project.slug}`} className="card overflow-hidden group block">
                <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: 'var(--surface-hover)' }}>
                  <Image src={project.image} alt={`${project.title} preview`} fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 60%, ${project.accentColor}25)` }} />
                </div>
                <div className="p-6">
                  <div className="h-0.5 w-8 rounded mb-5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: project.accentColor }} />
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
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/projects" className="btn-outline">All Projects <FiArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* GITHUB STATS — lazy-loaded when scrolled into view */}
      <GitHubStatsSection />

      <Testimonials />

      {/* CTA */}
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