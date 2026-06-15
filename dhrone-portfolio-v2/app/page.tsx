import Link from 'next/link'
import { ArrowRight, Code2, Smartphone, Video, Globe, Star } from 'lucide-react'
import { featuredProjects } from '@/app/data/projects'

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-violet/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-coral/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow/5 blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 pill border border-violet/30 text-violet mb-8">
              <span className="w-2 h-2 rounded-full bg-violet animate-pulse-slow" />
              Available for new projects
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-textPrimary">I build </span>
              <span className="text-gradient-violet">digital</span>
              <br />
              <span className="text-textPrimary">experiences</span>
              <span className="text-coral">.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-textMuted max-w-xl leading-relaxed mb-10">
              Narh H.P Dromor — Software Engineer, App Developer & Creative Director based in{' '}
              <span className="text-yellow font-medium">Accra, Ghana</span>.
              I design and build powerful software, modern platforms, and cinematic visuals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '30+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' },
                { value: '12+', label: 'Videos Directed' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-gradient-violet">{s.value}</p>
                  <p className="text-xs text-textMuted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">What I Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">Crafting across disciplines</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Globe, color: 'text-violet', bg: 'bg-violet/10', title: 'Web Development', desc: 'Modern, responsive websites and web applications built with cutting-edge technologies.' },
              { icon: Smartphone, color: 'text-coral', bg: 'bg-coral/10', title: 'App Development', desc: 'Powerful mobile and desktop applications tailored to your business needs.' },
              { icon: Code2, color: 'text-yellow', bg: 'bg-yellow/10', title: 'Backend Systems', desc: 'Robust APIs, database architecture, and scalable server solutions.' },
              { icon: Video, color: 'text-violet', bg: 'bg-violet/10', title: 'Video Production', desc: 'Professional video directing and editing for music videos and commercials.' },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <h3 className="font-semibold text-textPrimary mb-2">{item.title}</h3>
                <p className="text-sm text-textMuted leading-relaxed">{item.desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">Selected projects</h2>
            </div>
            <Link href="/projects" className="btn-outline text-sm hidden sm:flex">
              All Projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}
                className="card p-6 group block">
                {/* Top accent line */}
                <div className="h-0.5 w-8 rounded mb-5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: project.accentColor }} />

                <span className="pill text-xs mb-3 block w-fit">{project.category}</span>
                <h3 className="text-lg font-bold text-textPrimary mb-2 group-hover:text-gradient-violet transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-textMuted leading-relaxed mb-5">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="pill text-xs">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="pill text-xs">+{project.technologies.length - 3}</span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs font-medium"
                  style={{ color: project.accentColor }}>
                  View Project <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/projects" className="btn-outline">All Projects <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden p-10 md:p-16 text-center"
            style={{ background: 'linear-gradient(135deg, #6C63FF15, #FF6B6B10, #FFD93D08)' }}>
            <div className="absolute inset-0 border border-violet/20 rounded-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow fill-yellow" />)}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-textPrimary mb-4">
                Let&apos;s build something <span className="text-gradient-full">great together</span>
              </h2>
              <p className="text-textMuted mb-8 max-w-lg mx-auto">
                Whether you need a website, app, or creative video content — I&apos;m ready to bring your vision to life.
              </p>
              <Link href="/contact" className="btn-primary inline-flex">
                Start a Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}