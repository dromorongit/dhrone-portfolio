import Link from 'next/link'
import { FiMessageCircle } from 'react-icons/fi'

export default function FloatingContact() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2.5 px-5 py-3 rounded-full shadow-[0_12px_30px_rgba(124,58,237,0.35)] text-white text-sm font-semibold transition-transform hover:scale-105 bg-gradient-to-r from-violet-600 to-fuchsia-600"
      aria-label="Let's Talk"
    >
      <span className="relative inline-flex">
        <FiMessageCircle size={18} />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-violet-600" />
      </span>
      <span>Let&apos;s Talk</span>
    </Link>
  )
}