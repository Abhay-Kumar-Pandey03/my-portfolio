import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { dark, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                    px-[5vw] py-5 transition-colors duration-300"
         style={{ background: 'transparent' }}>

      {/* Logo */}
      <a href="#home"
         className="font-head font-extrabold text-xl tracking-tight flex items-center gap-1"
         style={{ color: 'var(--text-main)' }}>
        <span className="text-blue font-mono">&lt;</span>
        Abhay
        <span className="text-blue font-mono">/&gt;</span>
      </a>
    </nav>
  )
}