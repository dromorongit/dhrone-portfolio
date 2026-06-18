import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/dromorongit', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-coral/5 pointer-events-none" />
      <div className="noise relative border-t border-border/50 bg-gradient-to-b from-surface/80 to-surface backdrop-blur-xl">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet/30 to-coral/30 flex items-center justify-center overflow-hidden relative border border-white/10 shadow-lg shadow-violet/10">
                  <Image src="/images/dromorlogo.jpg" alt="Dhrone Logo" fill className="object-contain p-1.5" sizes="44px" />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-2xl font-extrabold">
                  <span className="text-gradient-violet">Dhrone</span>
                  <span className="text-textMuted">.Creative</span>
                </span>
              </Link>
              <p className="text-textMuted text-sm leading-relaxed max-w-sm mb-8">
                Architecting premium digital experiences, sophisticated software solutions, and cinematic visual storytelling from Accra to the world.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surfaceHover flex items-center justify-center text-textMuted hover:text-violet border border-border hover:border-violet/50 transition-all duration-300 hover:scale-105"
                    aria-label={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <p className="text-[11px] font-bold text-violet uppercase tracking-widest mb-6">Navigation</p>
              <div className="space-y-3">
                {['Projects', 'Apps', 'Videos', 'Services', 'Tech Stack', 'Contact'].map((l) => (
                  <Link key={l} href={`/${l.toLowerCase().replace(' ', '-')}`}
                    className="block text-sm text-textMuted hover:text-textPrimary transition-colors hover:translate-x-1 transform duration-200">
                    {l}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              <p className="text-[11px] font-bold text-violet uppercase tracking-widest mb-6">Connect</p>
              <div className="space-y-4">
                <a href="mailto:iamdhrone@gmail.com"
                  className="flex items-center gap-3 text-sm text-textMuted hover:text-textPrimary transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-violet/15 flex items-center justify-center shrink-0 group-hover:bg-violet/25 transition-colors">
                    <FiMail size={16} className="text-violet" />
                  </div>
                  <span>iamdhrone@gmail.com</span>
                </a>
                <a href="tel:+233538284952"
                  className="flex items-center gap-3 text-sm text-textMuted hover:text-textPrimary transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-coral/15 flex items-center justify-center shrink-0 group-hover:bg-coral/25 transition-colors">
                    <FiPhone size={16} className="text-coral" />
                  </div>
                  <span>+233 53 828 4952</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-textMuted">
                  <div className="w-9 h-9 rounded-lg bg-yellow/15 flex items-center justify-center shrink-0 mt-0.5">
                    <FiMapPin size={16} className="text-yellow" />
                  </div>
                  <div>Dhrone Creative Gallery<br />Santa Maria, Accra, Ghana</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 text-xs">
              <span className="text-textMuted">© {new Date().getFullYear()} Narh H.P Dromor. All rights reserved.</span>
              <div className="hidden sm:flex items-center gap-2 text-textMuted/60">
                <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
                <span>Available for select projects</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-textMuted">Crafted with</span>
              <span className="text-violet font-medium">Next.js</span>
              <span className="text-textMuted/40">+</span>
              <span className="text-coral font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet/15 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-coral/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      </div>
    </footer>
  )
}