import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet/20 flex items-center justify-center overflow-hidden">
                <Image src="/images/dromorlogo.jpg" alt="Dhrone Logo" fill className="object-contain" sizes="32px" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-gradient-violet">Dhrone</span>
                <span className="text-textMuted">.</span>
              </span>
            </Link>
            <p className="text-textMuted text-sm leading-relaxed max-w-xs mb-6">
              Designing powerful software, modern digital platforms and cinematic visual experiences from Accra, Ghana.
            </p>
            <a href="https://github.com/dromorongit" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surfaceHover border border-border text-sm text-textMuted hover:text-textPrimary transition-colors">
              GitHub
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold text-textMuted uppercase tracking-widest mb-5">Navigation</p>
            <div className="space-y-2.5">
              {['Projects', 'Apps', 'Videos', 'Services', 'Tech Stack', 'Contact'].map((l) => (
                <Link key={l} href={`/${l.toLowerCase().replace(' ', '-')}`}
                  className="block text-sm text-textMuted hover:text-textPrimary transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-textMuted uppercase tracking-widest mb-5">Get in Touch</p>
            <div className="space-y-3">
              <a href="mailto:iamdhrone@gmail.com"
                className="flex items-center gap-2.5 text-sm text-textMuted hover:text-textPrimary transition-colors">
                <FiMail size={14} className="text-violet shrink-0" />
                iamdhrone@gmail.com
              </a>
              <a href="tel:+233538284952"
                className="flex items-center gap-2.5 text-sm text-textMuted hover:text-textPrimary transition-colors">
                <FiPhone size={14} className="text-coral shrink-0" />
                +233 53 828 4952
              </a>
              <div className="flex items-start gap-2.5 text-sm text-textMuted">
                <FiMapPin size={14} className="text-yellow shrink-0 mt-0.5" />
                Dhrone Creative Gallery,<br />Santa Maria, Accra, Ghana
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-textMuted">© {new Date().getFullYear()} Narh H.P Dromor. All rights reserved.</p>
          <p className="text-xs text-textMuted">Built with <span className="text-violet">Next.js</span> & <span className="text-coral">Tailwind CSS</span></p>
        </div>
      </div>
    </footer>
  )
}