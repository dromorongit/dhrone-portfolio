'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async () => {
    setSending(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary mb-4">
            Let&apos;s <span className="text-gradient-violet">talk</span>
          </h1>
          <p className="text-textMuted max-w-xl">Have a project in mind? I&apos;d love to hear about it.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Form */}
          <div className="card p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-violet/20 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-violet" />
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">Message Sent!</h3>
                <p className="text-textMuted">I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-textMuted mb-1.5 block">Your Name</label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-surfaceHover border border-border text-textPrimary text-sm placeholder:text-textMuted/50 outline-none focus:border-violet transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-textMuted mb-1.5 block">Email Address</label>
                    <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-surfaceHover border border-border text-textPrimary text-sm placeholder:text-textMuted/50 outline-none focus:border-violet transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-textMuted mb-1.5 block">Subject</label>
                  <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project Inquiry" className="w-full px-4 py-3 rounded-xl bg-surfaceHover border border-border text-textPrimary text-sm placeholder:text-textMuted/50 outline-none focus:border-violet transition-colors" />
                </div>
                <div>
                  <label className="text-xs text-textMuted mb-1.5 block">Message</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..." rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-surfaceHover border border-border text-textPrimary text-sm placeholder:text-textMuted/50 outline-none focus:border-violet transition-colors resize-none" />
                </div>
                <button onClick={handleSubmit} disabled={sending}
                  className="btn-primary w-full justify-center">
                  {sending ? 'Sending...' : <><Send size={15} /> Send Message</>}
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'iamdhrone@gmail.com', href: 'mailto:iamdhrone@gmail.com', color: '#6C63FF' },
              { icon: Phone, label: 'Phone', value: '+233 53 828 4952', href: 'tel:+233538284952', color: '#FF6B6B' },
              { icon: MapPin, label: 'Location', value: 'Dhrone Creative Gallery, Santa Maria, Accra, Ghana', href: null, color: '#FFD93D' },
            ].map((item) => (
              <div key={item.label} className="card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${item.color}20` }}>
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-xs text-textMuted mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-textPrimary hover:text-violet transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm font-medium text-textPrimary">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="card p-5">
              <p className="text-xs text-textMuted uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/dromorongit', label: 'GitHub' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surfaceHover border border-border text-sm text-textMuted hover:text-textPrimary transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}