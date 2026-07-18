import { RESUME_VIEW_URL } from '../utils/constants'

const info = [
    { label: 'Name', value: 'Abhay Kumar Pandey', color: '' },
    { label: 'Preferred Stack', value: 'MERN Stack', color: '' },
]

export default function About() {
    return (
        <section id="about" className="reveal-left px-[5vw] py-24 transition-colors duration-300"
            style={{ background: 'var(--bg-section)' }}>

            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[3px]
                 uppercase px-5 py-2 mb-4 rounded-full border transition-all"
                style={{
                    color: '#3FA3F5',
                    background: 'rgba(46,143,224,0.08)',
                    borderColor: 'rgba(46,143,224,0.25)',
                    boxShadow: '0 0 18px rgba(46,143,224,0.15)',
                }}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
                About Me
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center mt-14">

                {/* Text */}
                <div>
                    <p className="text-xl leading-relaxed mb-4 font-light"
                        style={{ color: 'var(--text-muted)' }}>
                        I'm an aspiring Full Stack Developer currently pursuing B.E. in Computer Engineering,
                        passionate about building real-world web applications. I enjoy working across
                        the entire stack — from designing scalable APIs and databases to building
                        functional, clean interfaces.
                    </p>
                    <p className="text-xl leading-relaxed mb-6 font-light"
                        style={{ color: 'var(--text-muted)' }}>
                        I believe in learning by building. Every project I take on teaches me something
                        new — whether it's optimising a database query, debugging an API, or picking up
                        a new technology. I'm always looking to improve my craft.
                    </p>

                    {/* Info grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6 w-full">
                        {info.map(({ label, value, color }) => (
                            <div key={label} className="rounded-xl px-4 py-3 border"
                                style={{ background: 'var(--bg-alt)', borderColor: 'var(--border-col)' }}>
                                <p className="text-[10px] font-semibold uppercase tracking-wide"
                                    style={{ color: 'var(--text-muted)' }}>{label}</p>
                                <p className={`text-sm font-semibold mt-0.5 ${color || ''}`}
                                    style={!color ? { color: 'var(--text-main)' } : {}}>{value}</p>
                            </div>
                        ))}
                    </div>

                    <a href={RESUME_VIEW_URL} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3 rounded-full
                        text-sm font-semibold hover:bg-navy-2 hover:-translate-y-0.5 transition-all">
                        View Resume
                    </a>
                </div>

                {/* Avatar */}
                <div className="flex justify-center items-center">
                    <div className="relative">
                        <img
                            src="/img.jpg"
                            alt="Abhay Kumar Pandey"
                            className="w-64 h-auto object-cover object-top rounded-2xl shadow-md"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}