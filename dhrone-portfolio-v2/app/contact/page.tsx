'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import PageWrapper from '@/components/PageWrapper'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Contact</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
              Let&apos;s <span className="text-gradient-violet">talk</span>
            </h1>
            <p className="max-w-xl" style={{ color: 'var(--text-muted)' }}>Have a project in mind? I&apos;d love to hear about it.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Form */}
            <div className="card p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-violet/20 flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle size={28} className="text-violet" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline mt-6 text-sm">Send Another</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: 'var(--text-muted)' }}>Your Name *</label>
                      <input name="from_name" required placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                        style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                        onFocus={(e) => e.target.style.borderColor = '#6C63FF'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border)'} />
                    </div>
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: 'var(--text-muted)' }}>Email Address *</label>
                      <input name="from_email" type="email" required placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                        style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                        onFocus={(e) => e.target.style.borderColor = '#6C63FF'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border)'} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: 'var(--text-muted)' }}>Subject *</label>
                    <input name="subject" required placeholder="Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                      onFocus={(e) => e.target.style.borderColor = '#6C63FF'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: 'var(--text-muted)' }}>Message *</label>
                    <textarea name="message" required placeholder="Tell me about your project..." rows={5}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none"
                      style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                      onFocus={(e) => e.target.style.borderColor = '#6C63FF'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'} />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-coral p-3 rounded-xl bg-coral/10 border border-coral/20">
                      <FiAlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
                    {status === 'sending' ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><FiSend size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-4">
              {[
                { icon: FiMail, label: 'Email', value: 'iamdhrone@gmail.com', href: 'mailto:iamdhrone@gmail.com', color: '#6C63FF' },
                { icon: FiPhone, label: 'Phone / WhatsApp', value: '+233 53 828 4952', href: 'tel:+233538284952', color: '#FF6B6B' },
                { icon: FiMapPin, label: 'Location', value: 'Dhrone Creative Gallery, Santa Maria, Accra, Ghana', href: null, color: '#FFD93D' },
              ].map((item) => (
                <div key={item.label} className="card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}20` }}>
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:text-violet transition-colors"
                        style={{ color: 'var(--text-primary)' }}>{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="card p-5">
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>Follow Me</p>
                <div className="flex gap-3">
                  {[
                    { href: 'https://github.com/dromorongit', label: 'GitHub' },
                    { href: 'https://www.instagram.com/iamdhrone', label: 'Instagram' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors"
                      style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div className="card p-5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Quick Response</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Typically replies within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}