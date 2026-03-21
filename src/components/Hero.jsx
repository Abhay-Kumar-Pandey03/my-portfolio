import { useState, useEffect } from 'react'

const navLinks = ['about', 'projects', 'skills', 'contact']

const techPills = [
  { label: 'React', color: 'bg-blue-500' },
  { label: 'Node.js', color: 'bg-green-500' },
  { label: 'Express.js', color: 'bg-gray-500' },
  { label: 'MongoDB', color: 'bg-green-700' },
  { label: 'JavaScript', color: 'bg-yellow-400' },
  { label: 'AWS EC2', color: 'bg-orange-400' },
]

const stats = [
  { num: '3', label: 'Projects Built' },
  { num: '10+', label: 'Technologies' },
  { num: 'CSE', label: 'B.E. Pursuing' },
  { num: '∞', label: 'Eager to Learn' },
]

const FULL_TEXT = "Hi, I'm Abhay Kumar Pandey 👋"

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const [active, setActive] = useState('home')

  // Typing animation
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setDisplayed(FULL_TEXT.slice(0, i + 1))
      i++
      if (i >= FULL_TEXT.length) { clearInterval(timer); setDone(true) }
    }, 60)
    return () => clearInterval(timer)
  }, [])

  // Active link tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <section id="home" className="min-h-screen flex px-[5vw] pt-24 pb-16 relative overflow-hidden">

      {/* Background blobs */}
      <div className="hero-blob-r absolute w-[600px] h-[600px] rounded-full -top-24 -right-24 pointer-events-none" />
      <div className="hero-blob-l absolute w-[400px] h-[400px] rounded-full bottom-0 -left-16 pointer-events-none" />

      <div className="relative z-10 w-full flex items-center gap-16">

        {/* ── LEFT — Nav links ── */}
        <div className="hidden lg:flex flex-col justify-center gap-4 w-84 flex-shrink-0">
          {navLinks.map(link => (
            <a key={link} href={`#${link}`}
              className="px-5 py-2.5 rounded-full text-lg font-semibold
                capitalize transition-all duration-200 text-center border"
              style={{
                color: active === link ? '#ffffff' : 'var(--text-muted)',
                background: active === link ? '#2E8FE0' : 'transparent',
                borderColor: active === link ? '#2E8FE0' : 'rgba(46,143,224,0.3)',
                boxShadow: active === link ? '0 4px 18px rgba(46,143,224,0.38)' : 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ffffff'
                e.currentTarget.style.color = '#0B2541'
                e.currentTarget.style.borderColor = '#ffffff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = active === link ? '#2E8FE0' : 'transparent'
                e.currentTarget.style.color = active === link ? '#ffffff' : 'var(--text-muted)'
                e.currentTarget.style.borderColor = active === link ? '#2E8FE0' : 'rgba(46,143,224,0.3)'
              }}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

        </div>

        {/* Vertical divider */}
        <div className="hidden lg:block w-px h-64 flex-shrink-0 mx-4"
          style={{ background: 'rgba(46,143,224,0.15)' }} />

        {/* ── RIGHT — Hero content ── */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Typing greeting */}
          <div className="mb-3 min-h-[48px] flex items-center">
            <span className="font-head font-bold"
              style={{ fontSize: 'clamp(22px,2.8vw,38px)', color: 'var(--text-main)' }}>
              {displayed}
              {!done && <span className="typing-cursor" />}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-head font-extrabold leading-[1.1] tracking-[-2px] mb-5"
            style={{ fontSize: 'clamp(18px,2.8vw,38px)', color: 'var(--text-main)' }}>
            Aspiring <span className="text-blue">Full Stack</span>{' '}
            <span className="text-blue">Developer</span>
          </h1>

          {/* Code comment */}
          <p className="font-mono text-sm mb-6 flex items-center gap-2">
            <span style={{ color: 'var(--text-muted)' }}>//</span>
            <span className="text-blue">open to new opportunities</span>
          </p>

          {/* Description */}
          <p className="text-base leading-relaxed max-w-lg mb-8 font-light"
            style={{ color: 'var(--text-muted)' }}>
            I build full-stack web applications using the MERN stack — from designing
            scalable REST APIs and databases to building functional, clean interfaces.
            Passionate about backend development and eager to learn new technologies.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap mb-8">
            <a href="#projects"
              className="bg-blue text-white px-8 py-3 rounded-full text-sm font-semibold
                          shadow-blue hover:bg-blue-dk hover:-translate-y-0.5 transition-all">
              View Projects
            </a>
            <a href="#contact"
              className="bg-blue text-white px-8 py-3 rounded-full text-sm font-semibold
                          shadow-blue hover:bg-blue-dk hover:-translate-y-0.5 transition-all">
              Let's talk
            </a>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {techPills.map(({ label, color }) => (
              <span key={label}
                className="flex items-center gap-2 rounded-full px-4 py-1.5
                               text-sm font-medium border"
                style={{
                  background: 'var(--card-bg)',
                  borderColor: 'rgba(46,143,224,0.2)',
                  color: 'var(--text-main)',
                }}>
                <span className={`w-1.5 h-1.5 rounded-full ${color} inline-block`} />
                {label}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-6 border-t"
            style={{ borderColor: 'rgba(46,143,224,0.15)' }}>
            {stats.map(({ num, label }) => (
              <div key={label}>
                <p className="font-head font-extrabold text-3xl tracking-tight"
                  style={{ color: 'var(--text-main)' }}>{num}</p>
                <p className="text-m mt-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}