import Link from 'next/link'
import { FaLinkedin, FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import LogoMark from '@/app/dhronetech/_components/LogoMark'
import { dhronetechContent } from '@/app/data/dhronetech'

const socialIcons = {
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  facebook: FaFacebook,
  x: FaTwitter,
  instagram: FaInstagram,
}

export default function DhronetechFooter() {
  const validSocialLinks = dhronetechContent.footer.socialLinks.filter((s) => s.href && s.href.length > 0)

  return (
    <footer className="bg-[var(--dt-navy-900)] text-white">
      <div className="dt-container-lg py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-4">
            <Link href="/dhronetech" className="flex items-center gap-2 mb-8" aria-label="DhroneTech Solutions Home">
              <LogoMark size="lg" tone="onDark" />
            </Link>
            <p className="text-[var(--dt-text-muted)] text-base leading-relaxed max-w-xs">
              We build, manage and grow digital solutions that help businesses operate smarter, compete better and achieve more.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-4">
            <nav aria-label="Footer navigation">
              <p className="text-[11px] font-bold text-[var(--dt-gold-500)] uppercase tracking-widest mb-6">Navigation</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {dhronetechContent.footer.centerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[var(--dt-text-muted)] hover:text-white transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="md:col-span-3 md:col-start-9">
            <p className="text-[11px] font-bold text-[var(--dt-gold-500)] uppercase tracking-widest mb-6">Connect</p>
            {validSocialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {validSocialLinks.map(({ icon, href, label }) => {
                  const Icon = socialIcons[icon as keyof typeof socialIcons]
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dt-social-link"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--dt-text-muted)]">
            &copy; {new Date().getFullYear()} DhroneTech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
