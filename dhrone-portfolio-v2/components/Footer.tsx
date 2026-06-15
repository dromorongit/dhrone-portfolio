import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3">
              <span className="text-gradient-violet">Dhrone</span><span className="text-textMuted">.</span>
            </div>
            <p className="text-textMuted text-sm leading-relaxed max-w-xs">
              Designing powerful software, modern digital platforms and cinematic visual experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold text-textMuted uppercase tracking-widest mb-4">Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              {['Projects', 'Apps', 'Videos', 'Services', 'Tech Stack', 'Contact'].map((l) => (
                <Link key={l} href={`/${l.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-textMuted hover:text-textPrimary transition-colors py-1">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-textMuted uppercase tracking-widest mb-4">Contact</p>
            <div className="space-y-3">
              <a href="mailto:iamdhrone@gmail.com"
                className="flex items-center gap-2 text-sm text-textMuted hover:text-textPrimary transition-colors">
                <Mail size={15} />
                iamdhrone@gmail.com
              </a>
              <a href="tel:+233538284952"
                className="flex items-center gap-2 text-sm text-textMuted hover:text-textPrimary transition-colors">
                <Phone size={15} />
                +233 53 828 4952
              </a>
              <div className="flex items-start gap-2 text-sm text-textMuted">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                Dhrone Creative Gallery, Santa Maria, Accra
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-textMuted">© {new Date().getFullYear()} Narh H.P Dromor. All rights reserved.</p>
          <p className="text-xs text-textMuted">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}