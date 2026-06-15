import Link from 'next/link'
import { Globe, Smartphone, Code2, Monitor, Palette, Video, ArrowRight } from 'lucide-react'

const services = [
  { icon: Code2, color: 'text-violet', bg: 'bg-violet/10', title: 'Software Development', desc: 'Custom software solutions tailored to your business needs. From concept to deployment.', features: ['Custom Applications', 'System Architecture', 'Performance Optimization', 'Maintenance & Support'] },
  { icon: Globe, color: 'text-coral', bg: 'bg-coral/10', title: 'Web Development', desc: 'Modern, responsive websites and web applications built with cutting-edge technologies.', features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'SEO Optimization'] },
  { icon: Smartphone, color: 'text-yellow', bg: 'bg-yellow/10', title: 'Mobile App Development', desc: 'Native and cross-platform mobile applications for iOS and Android devices.', features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'App Store Deployment'] },
  { icon: Monitor, color: 'text-violet', bg: 'bg-violet/10', title: 'Desktop Applications', desc: 'Powerful desktop applications for Windows and macOS platforms.', features: ['Windows Apps', 'macOS Apps', 'Cross-platform Solutions', 'System Integration'] },
  { icon: Palette, color: 'text-coral', bg: 'bg-coral/10', title: 'UI/UX Design', desc: 'User-centered design that combines aesthetics with functionality.', features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'] },
  { icon: Video, color: 'text-yellow', bg: 'bg-yellow/10', title: 'Video Production', desc: 'Professional video content creation from concept to final delivery.', features: ['Music Videos', 'Commercials', 'Documentaries', 'Event Coverage'] },
]

const process = [
  { num: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
  { num: '02', title: 'Design', desc: 'Creating wireframes and visual designs' },
  { num: '03', title: 'Development', desc: 'Building your solution with clean code' },
  { num: '04', title: 'Delivery', desc: 'Testing and deploying your project' },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Services</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary mb-4">
            What I <span className="text-gradient-violet">offer</span>
          </h1>
          <p className="text-textMuted max-w-xl">Comprehensive digital solutions tailored to bring your vision to life.</p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {services.map((s) => (
            <div key={s.title} className="card p-6">
              <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                <s.icon size={20} className={s.color} />
              </div>
              <h3 className="font-bold text-textPrimary mb-2">{s.title}</h3>
              <p className="text-sm text-textMuted mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-textMuted">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <p className="text-xs font-semibold text-coral uppercase tracking-widest mb-3">How I Work</p>
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-10">My process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step) => (
              <div key={step.num} className="card p-6">
                <span className="text-3xl font-extrabold text-gradient-violet block mb-3">{step.num}</span>
                <h3 className="font-bold text-textPrimary mb-1">{step.title}</h3>
                <p className="text-sm text-textMuted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card p-10 text-center mb-20">
          <h2 className="text-2xl font-bold text-textPrimary mb-3">Ready to start your project?</h2>
          <p className="text-textMuted mb-6">Let&apos;s discuss your project and see how I can help bring your ideas to life.</p>
          <Link href="/contact" className="btn-primary inline-flex">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}