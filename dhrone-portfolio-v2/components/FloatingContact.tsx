import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function FloatingContact() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl text-white text-sm font-semibold transition-transform hover:scale-105"
      style={{ background: 'linear-gradient(135deg, #6C63FF, #FF6B6B)' }}
      aria-label="Contact me"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Let&apos;s Talk</span>
    </Link>
  )
}