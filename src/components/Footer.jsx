import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from '../utils/constants'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="px-[5vw] py-6 flex items-center justify-between
                   border-t transition-colors duration-300"
            style={{
                background: 'var(--bg-section)',
                borderColor: 'var(--border-col)',
            }}>

            {/* Logo — left */}
            <div className="font-head font-extrabold text-lg"
                style={{ color: 'var(--text-main)' }}>
                &lt;Abhay<span className="text-blue">/</span>&gt;
            </div>

            {/* Copyright — center */}
            <p className="text-s text-center" style={{ color: 'var(--text-muted)' }}>
                © 2026 Abhay Kumar Pandey. Built with React + Tailwind CSS.
            </p>

            {/* Empty div to balance the flex layout */}
            <div className="w-20" />

<div className="flex gap-5 justify-center">
  <a href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer"
     className="flex items-center gap-2 text-sm hover:text-blue transition-colors"
     style={{ color: 'var(--text-muted)' }}>
    <FaGithub size={16} /> GitHub
  </a>
  <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer"
     className="flex items-center gap-2 text-sm hover:text-blue transition-colors"
     style={{ color: 'var(--text-muted)' }}>
    <FaLinkedin size={16} /> LinkedIn
  </a>
</div>

        </footer>
    )
}