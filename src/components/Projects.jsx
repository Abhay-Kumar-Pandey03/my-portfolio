import { GITHUB_PROFILE_URL } from '../utils/constants'
import projectsData from '../data/projects.json'

const repoUrl = (owner, repo) => `https://github.com/${owner}/${repo}`

const projects = projectsData.map(p => {
    const primary = p.repos.find(r => r.role === 'primary') || p.repos[0]
    const secondary = p.repos.find(r => r.role === 'secondary')
    return {
        ...p,
        code: primary ? repoUrl(primary.owner, primary.repo) : null,
        code2: secondary ? repoUrl(secondary.owner, secondary.repo) : null,
        code2Label: secondary?.label || 'Related Repo',
    }
})

export default function Projects() {
    return (
        <section id="projects" className="reveal-left px-[5vw] py-24 transition-colors duration-300"
            style={{ background: 'var(--bg-alt)' }}>

            <div className="flex justify-between items-end flex-wrap gap-5 mb-12">
                <div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[3px]
                 uppercase px-5 py-2 mb-4 rounded-full border transition-all"
                        style={{
                            color: '#3FA3F5',
                            background: 'rgba(46,143,224,0.08)',
                            borderColor: 'rgba(46,143,224,0.25)',
                            boxShadow: '0 0 18px rgba(46,143,224,0.15)',
                        }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
                        My Work
                    </span>
                    <h2 className="font-head font-extrabold tracking-tight mb-2"
                        style={{ fontSize: 'clamp(26px,3vw,40px)', color: 'var(--text-main)' }}>
                        Featured Projects
                    </h2>
                    <p className="text-sm font-light max-w-md" style={{ color: 'var(--text-muted)' }}>
                        Real-world applications I've built from scratch.
                    </p>
                </div>
                <a href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer"
                    className="px-6 py-2.5 rounded-full text-sm font-medium border
                      hover:border-blue hover:text-blue transition-all whitespace-nowrap"
                    style={{
                        background: 'var(--bg-section)',
                        color: 'var(--text-main)',
                        borderColor: 'var(--border-col)',
                    }}>
                    GitHub Profile →
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map((p) => (
                    <div key={p.name}
                        className="rounded-2xl overflow-hidden hover:-translate-y-2
           transition-all flex flex-col h-full"
                        style={{
                            background: 'rgba(15,40,70,0.85)',
                            border: '1px solid rgba(46,143,224,0.2)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(46,143,224,0.05)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.border = '1px solid rgba(46,143,224,0.5)'
                            e.currentTarget.style.boxShadow = '0 8px 40px rgba(46,143,224,0.2), 0 0 0 1px rgba(46,143,224,0.1)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.border = '1px solid rgba(46,143,224,0.2)'
                            e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(46,143,224,0.05)'
                        }}>

                        <div className={`h-44 flex items-center justify-center text-6xl relative bg-gradient-to-br ${p.bg}`}>
                            <span className="absolute top-3 right-3 bg-white/85 backdrop-blur text-[11px]
                               font-bold text-navy-2 px-3 py-1 rounded-full border border-white/60">
                                {p.badge}
                            </span>
                            {p.emoji}
                        </div>

                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-[11px] font-bold uppercase tracking-wider text-blue">{p.type}</p>
                                {p.lastRepoUpdate && (
                                    <p className="text-[10px] font-medium" style={{ color: 'var(--text-muted)' }}>
                                        Updated {new Date(p.lastRepoUpdate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </p>
                                )}
                            </div>
                            <p className="font-head font-bold text-base mb-2"
                                style={{ color: 'var(--text-main)' }}>{p.name}</p>
                            <p className="text-xs leading-relaxed flex-1"
                                style={{ color: 'var(--text-muted)' }}>{p.desc}</p>

                            <div className="mt-auto pt-4 border-t"
                                style={{ borderColor: 'rgba(46,143,224,0.15)' }}>
                                <div className="flex gap-3">
                                    {p.demo && (
                                        <a href={p.demo} target="_blank" rel="noreferrer"
                                            className="flex-1 text-sm font-semibold px-4 py-2.5 rounded-full
                    border transition-all text-center"
                                            style={{ color: '#ffffff', borderColor: 'rgba(46,143,224,0.5)', background: 'rgba(46,143,224,0.2)' }}
                                            onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#0B2541'; e.currentTarget.style.borderColor = '#ffffff' }}
                                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(46,143,224,0.2)'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = 'rgba(46,143,224,0.5)' }}>
                                            Live Demo ↗
                                        </a>
                                    )}
                                    {p.code && (
                                        <a href={p.code} target="_blank" rel="noreferrer"
                                            className="flex-1 text-sm font-semibold px-4 py-2.5 rounded-md
                    border transition-all text-center"
                                            style={{ color: '#ffffff', borderColor: 'rgba(46,143,224,0.5)', background: 'rgba(46,143,224,0.2)' }}
                                            onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#0B2541'; e.currentTarget.style.borderColor = '#ffffff' }}
                                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(46,143,224,0.2)'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = 'rgba(46,143,224,0.5)' }}>
                                            View Project ↗
                                        </a>
                                    )}
                                </div>
                                {p.code2 && (
                                    <a href={p.code2} target="_blank" rel="noreferrer"
                                        className="block mt-2 text-center text-[11px] font-medium underline decoration-dotted
                    transition-colors"
                                        style={{ color: 'var(--text-muted)' }}
                                        onMouseEnter={e => { e.currentTarget.style.color = '#3FA3F5' }}
                                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}>
                                        {p.code2Label || 'Related Repo'} ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}