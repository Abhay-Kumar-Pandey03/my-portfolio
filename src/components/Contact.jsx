import { useState } from 'react'
import { SiGmail } from 'react-icons/si'
import { FaPhone } from 'react-icons/fa'

const contactLinks = [
  {
    icon: <SiGmail size={20} color="#EA4335" />,
    label: 'Email', value: 'abhaypandey7067@gmail.com',
    href: 'mailto:abhaypandey7067@gmail.com',
  },
  {
    icon: <FaPhone size={18} color="#22C55E" />,
    label: 'Phone', value: '+91 7067965169',
    href: 'tel:+917067965169',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="reveal-left px-[5vw] py-24 relative overflow-hidden
                                      transition-colors duration-300"
      style={{ background: 'var(--bg-alt)' }}>

      {/* Blobs */}
      <div className="contact-blob-r absolute w-[500px] h-[500px] rounded-full
                      -top-36 -right-24 pointer-events-none" />
      <div className="contact-blob-l absolute w-[350px] h-[350px] rounded-full
                      -bottom-20 -left-16 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

        {/* ── LEFT ── */}
        <div>
          {/* Tag */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[3px]
                           uppercase px-5 py-2 mb-6 rounded-full border"
            style={{
              color: '#3FA3F5',
              background: 'rgba(46,143,224,0.08)',
              borderColor: 'rgba(46,143,224,0.25)',
              boxShadow: '0 0 18px rgba(46,143,224,0.15)',
            }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            Get In Touch
          </span>

          <h2 className="font-head font-extrabold tracking-tight mb-4 leading-tight"
            style={{ fontSize: 'clamp(26px,3vw,42px)', color: 'var(--text-main)' }}>
            Let's work <span className="text-blue">together</span>
          </h2>
          <p className="text-sm leading-relaxed mb-10 font-light max-w-sm"
            style={{ color: 'var(--text-muted)' }}>
            I'm currently open to full-time roles and internship opportunities.
            Whether you have a project, a job opening, or just want to connect —
            feel free to reach out!
          </p>

          {/* Contact cards */}
          <div className="space-y-3">
            {contactLinks.map(({ icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl px-5 py-4 border
                            no-underline transition-all duration-200"
                style={{
                  background: 'rgba(15,40,70,0.6)',
                  borderColor: 'rgba(46,143,224,0.15)',
                  color: 'var(--text-main)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(46,143,224,0.45)'
                  e.currentTarget.style.background = 'rgba(46,143,224,0.08)'
                  e.currentTarget.style.transform = 'translateX(6px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(46,143,224,0.15)'
                  e.currentTarget.style.background = 'rgba(15,40,70,0.6)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center
                                text-xl flex-shrink-0"
                  style={{ background: 'rgba(46,143,224,0.1)', border: '1px solid rgba(46,143,224,0.2)' }}>
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
                    style={{ color: '#3FA3F5' }}>{label}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>{value}</p>
                </div>
                <span className="ml-auto text-lg" style={{ color: 'rgba(46,143,224,0.4)' }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Form ── */}
        <div className="rounded-2xl p-8 border"
          style={{
            background: 'rgba(15,40,70,0.6)',
            borderColor: 'rgba(46,143,224,0.15)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          }}>

          <h3 className="font-head font-bold text-xl mb-6"
            style={{ color: 'var(--text-main)' }}>
            Send a Message
          </h3>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#3FA3F5' }}>Your Name</label>
                <input type="text" placeholder="John Doe"
                  className="theme-input rounded-xl px-4 py-3 text-sm border transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#3FA3F5' }}>Email Address</label>
                <input type="email" placeholder="john@example.com"
                  className="theme-input rounded-xl px-4 py-3 text-sm border transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: '#3FA3F5' }}>Message</label>
              <textarea rows={5} placeholder="Tell me about the opportunity or just say hi..."
                className="theme-input rounded-xl px-4 py-3 text-sm border
                                   transition-colors resize-none" />
            </div>

            <button onClick={() => setSent(true)}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white
                               border-0 cursor-pointer transition-all mt-2"
              style={{
                background: sent ? '#0F6E4A' : '#2E8FE0',
                boxShadow: sent ? 'none' : '0 4px 18px rgba(46,143,224,0.38)',
              }}
              onMouseEnter={e => { if (!sent) e.currentTarget.style.background = '#1467B8' }}
              onMouseLeave={e => { if (!sent) e.currentTarget.style.background = '#2E8FE0' }}>
              {sent ? '✓ Sent! I\'ll be in touch soon.' : 'Send Message →'}
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}