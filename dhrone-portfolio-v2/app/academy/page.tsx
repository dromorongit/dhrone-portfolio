import { FiCheckCircle, FiPhone, FiMail, FiClock, FiArrowRight, FiUsers, FiAward, FiMonitor } from 'react-icons/fi'
import { SiWhatsapp, SiInstagram, SiTiktok } from 'react-icons/si'
import PageWrapper from '@/components/PageWrapper'

const courses = [
  {
    icon: FiMonitor,
    color: '#6C63FF',
    title: 'Professional Software Productivity',
    desc: 'Master industry-standard software tools used in modern workplaces. Learn to work efficiently with productivity suites, project management tools, and professional applications.',
    duration: '3 Months',
  },
  {
    icon: FiUsers,
    color: '#FF6B6B',
    title: 'Hardware, Troubleshooting & Maintenance',
    desc: 'Gain hands-on skills in computer hardware, system maintenance, and troubleshooting. Learn to diagnose, repair, and maintain computers and digital devices.',
    duration: '3 Months',
  },
  {
    icon: FiAward,
    color: '#FFD93D',
    title: 'AI Tools & Digital Productivity',
    desc: 'Harness the power of Artificial Intelligence tools for work and business. Learn to use cutting-edge AI applications to boost your productivity and stay ahead in the digital economy.',
    duration: '3 Months',
  },
]

const benefits = [
  'Practical Hands-on Training',
  'Beginner Friendly',
  'Professional Certificate',
  'Industry-Relevant Skills',
]

const contacts = [
  { icon: FiPhone, label: 'Call Us', values: ['059 652 2239', '024 395 0001', '050 854 8181'], href: 'tel:+233596522239', color: '#6C63FF' },
  { icon: SiWhatsapp, label: 'WhatsApp', values: ['+44 7865 840464'], href: 'https://wa.me/447865840464', color: '#25D366' },
  { icon: FiMail, label: 'Email', values: ['hpdnarh@gmail.com'], href: 'mailto:hpdnarh@gmail.com', color: '#FF6B6B' },
]

const socials = [
  { icon: SiInstagram, label: '@dhronetechacademy', href: 'https://www.instagram.com/dhronetechacademy', color: '#FF6B6B' },
  { icon: SiTiktok, label: '@dhronetechacademy', href: 'https://www.tiktok.com/@dhronetechacademy', color: '#FFD93D' },
]

export default function AcademyPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container mx-auto px-6">

          {/* HERO */}
          <div className="relative rounded-2xl overflow-hidden p-10 md:p-16 mb-20"
            style={{ background: 'linear-gradient(135deg, #6C63FF18, #FF6B6B10, #FFD93D08)' }}>
            <div className="absolute inset-0 border border-violet/20 rounded-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-violet/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-coral/10 blur-[60px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 pill border border-violet/30 text-violet mb-6">
                <span className="w-2 h-2 rounded-full bg-violet animate-pulse-slow" />
                Registration Now Open — Limited Slots
              </div>
              <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">DhroneTech Academy</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
                Your future in <span className="text-gradient-violet">tech</span> starts here
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Gain practical, job-ready digital skills through our professional certificate programmes.
                Learn · Build · Innovate · Succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/447865840464" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Enroll Now <FiArrowRight size={16} />
                </a>
                <a href="mailto:hpdnarh@gmail.com" className="btn-outline">
                  Ask a Question
                </a>
              </div>
            </div>
          </div>

          {/* COURSES */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-coral uppercase tracking-widest mb-3">Programmes</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
              Professional Certificate Courses
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {courses.map((course) => (
                <div key={course.title} className="card p-6 group">
                  <div className="h-0.5 w-8 rounded mb-5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: course.color }} />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${course.color}20` }}>
                    <course.icon size={22} style={{ color: course.color }} />
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>{course.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{course.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-semibold"
                    style={{ color: course.color }}>
                    <FiClock size={13} /> {course.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DURATION + BENEFITS */}
          <div className="grid md:grid-cols-2 gap-5 mb-20">
            {/* Duration */}
            <div className="card p-8">
              <p className="text-xs font-semibold text-yellow uppercase tracking-widest mb-3">Programme Duration</p>
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>How long does it take?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--surface-hover)' }}>
                  <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center shrink-0">
                    <FiClock size={18} className="text-violet" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>Individual Certificate Course</p>
                    <p className="text-2xl font-extrabold text-violet">3 Months</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--surface-hover)' }}>
                  <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                    <FiAward size={18} className="text-coral" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>DhroneTech Academy Complete Package</p>
                    <p className="text-2xl font-extrabold text-coral">6 Months</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="card p-8">
              <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Why Choose Us</p>
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Why DhroneTech Academy?</h3>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet/20 flex items-center justify-center shrink-0">
                      <FiCheckCircle size={14} className="text-violet" />
                    </div>
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>Contact & Enroll</h2>
            <div className="grid md:grid-cols-3 gap-5 mb-6">
              {contacts.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="card p-6 group block">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${c.color}20` }}>
                    <c.icon size={20} style={{ color: c.color }} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                  {c.values.map((v) => (
                    <p key={v} className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{v}</p>
                  ))}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-colors card">
                  <s.icon size={16} style={{ color: s.color }} />
                  <span style={{ color: 'var(--text-primary)' }}>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ENROLL CTA */}
          <div className="relative rounded-2xl overflow-hidden p-10 md:p-14 text-center mb-20"
            style={{ background: 'linear-gradient(135deg, #6C63FF18, #FF6B6B10)' }}>
            <div className="absolute inset-0 border border-violet/20 rounded-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 pill border border-coral/30 text-coral mb-6">
                <span className="w-2 h-2 rounded-full bg-coral animate-pulse-slow" />
                Limited Slots Available
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                Ready to start your <span className="text-gradient-violet">tech journey?</span>
              </h2>
              <p className="max-w-lg mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
                Take the first step toward building practical digital skills for work, business, and the future.
                Enroll today before slots fill up.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/447865840464" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <SiWhatsapp size={16} /> Enroll via WhatsApp
                </a>
                <a href="tel:+233596522239" className="btn-outline">
                  <FiPhone size={15} /> Call to Enroll
                </a>
              </div>
              <p className="text-xs mt-6" style={{ color: 'var(--text-muted)' }}>
                A Professional Technology Training Institute by DhroneTech Solutions
              </p>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  )
}