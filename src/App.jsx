import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Projects from './components/Projects'
import Skills   from './components/Skills'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

function Portfolio() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('show')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="overflow-x-hidden transition-colors duration-300"
         style={{ background: 'var(--bg-page)', color: 'var(--text-main)' }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}