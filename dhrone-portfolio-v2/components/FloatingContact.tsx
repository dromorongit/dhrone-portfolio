import Link from 'next/link'
import { FiMessageCircle } from 'react-icons/fi'

export default function FloatingContact() {
  return (
    <Link
      href="/contact"
      className="fixed z-40 inline-flex items-center justify-center gap-2.5 text-white transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(124,92,255,0.45)] bg-[linear-gradient(135deg,#6d4aff_0%,#a259ff_55%,#ff5ca8_100%)] bottom-4 right-4 w-10 h-10 rounded-full sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 sm:text-sm sm:font-semibold sm:rounded-full sm:justify-start sm:w-auto sm:h-auto"
      aria-label="Let's Talk"
    >
      <span className="relative inline-flex shrink-0">
        <FiMessageCircle size={18} />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-violet-600" />
      </span>
      <span className="hidden sm:block">Let&apos;s Talk</span>
    </Link>
  )
}
