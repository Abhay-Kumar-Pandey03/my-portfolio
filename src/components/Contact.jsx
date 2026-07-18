import { useRef, useState } from 'react'
import { SiGmail } from 'react-icons/si'
import { FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const RECAPTCHA_SITE_KEY  = import.meta.env.VITE_RECAPTCHA_SITE_KEY

const RATE_LIMIT_KEY = 'contact_last_sent_at'
const RATE_LIMIT_MS  = 60_000 // 1 submission per 60s per browser

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

const initialForm = { name: '', email: '', message: '', company: '' } // 'company' = honeypot

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | limited
  const [errorMsg, setErrorMsg] = useState('')
  const [captchaToken, setCaptchaToken] = useState(null)
  const captchaRef = useRef(null)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setErrorMsg('')

    // Honeypot: real users never fill this hidden field. If it's filled, it's a bot.
    if (form.company) {
      setStatus('sent') // fail silently — pretend it worked so bots don't adapt
      return
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in all fields.')
      return
    }

    if (!captchaToken) {
      setErrorMsg('Please complete the "I\'m not a robot" check.')
      return
    }

    // Client-side rate limit: 1 submission per minute per browser
    const lastSent = Number(localStorage.getItem(RATE_LIMIT_KEY) || 0)
    if (Date.now() - lastSent < RATE_LIMIT_MS) {
      setStatus('limited')
      return
    }

    try {
      setStatus('sending')

      // EmailJS verifies this token server-side against your reCAPTCHA secret key
      // (configured once in the EmailJS dashboard under Account > Security) before sending.
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          'g-recaptcha-response': captchaToken,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )

      localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()))
      setForm(initialForm)
      setStatus('sent')
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
      setErrorMsg('Something went wrong sending your message. Please try emailing me directly.')
    } finally {
      captchaRef.current?.reset()
      setCaptchaToken(null)
    }
  }

  const buttonLabel = {
    idle: 'Send Message →',
    sending: 'Sending…',
    sent: "✓ Sent! I'll be in touch soon.",
    limited: 'Please wait a moment before sending again',
    error: 'Send Message →',
  }[status]

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

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#3FA3F5' }}>Your Name</label>
                <input type="text" name="name" placeholder="John Doe"
                  value={form.name} onChange={handleChange} required
                  className="theme-input rounded-xl px-4 py-3 text-sm border transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#3FA3F5' }}>Email Address</label>
                <input type="email" name="email" placeholder="john@example.com"
                  value={form.email} onChange={handleChange} required
                  className="theme-input rounded-xl px-4 py-3 text-sm border transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: '#3FA3F5' }}>Message</label>
              <textarea rows={5} name="message" placeholder="Tell me about the opportunity or just say hi..."
                value={form.message} onChange={handleChange} required
                className="theme-input rounded-xl px-4 py-3 text-sm border
                                   transition-colors resize-none" />
            </div>

            {/* Honeypot — hidden from real users via CSS, bots that auto-fill every field get caught */}
            <input type="text" name="company" value={form.company} onChange={handleChange}
              tabIndex={-1} autoComplete="off"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
              aria-hidden="true" />

            <div>
              <ReCAPTCHA
                ref={captchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={token => setCaptchaToken(token)}
                onExpired={() => setCaptchaToken(null)}
              />
            </div>

            {errorMsg && (
              <p className="text-xs font-medium" style={{ color: '#EF4444' }}>{errorMsg}</p>
            )}

            <button type="submit" disabled={status === 'sending' || status === 'sent'}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white
                               border-0 cursor-pointer transition-all mt-2 disabled:cursor-not-allowed"
              style={{
                background: status === 'sent' ? '#0F6E4A' : status === 'limited' ? '#B45309' : '#2E8FE0',
                boxShadow: status === 'sent' || status === 'limited' ? 'none' : '0 4px 18px rgba(46,143,224,0.38)',
                opacity: status === 'sending' ? 0.7 : 1,
              }}
              onMouseEnter={e => { if (status === 'idle' || status === 'error') e.currentTarget.style.background = '#1467B8' }}
              onMouseLeave={e => { if (status === 'idle' || status === 'error') e.currentTarget.style.background = '#2E8FE0' }}>
              {buttonLabel}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}