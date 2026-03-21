const skillGroups = [
  {
    icon: '💻', title: 'Languages',
    skills: [
      { name: 'JavaScript', pct: 70 },
      { name: 'C++',        pct: 85 },
      { name: 'SQL',        pct: 83 },
    ],
  },
  {
    icon: '🌐', title: 'Web Development',
    skills: [
      { name: 'React.js',      pct: 67 },
      { name: 'Node.js',       pct: 78 },
      { name: 'Express.js',    pct: 75 },
      { name: 'REST APIs',     pct: 75 },
      { name: 'Redux Toolkit', pct: 60 },
    ],
  },
  {
    icon: '🗄️', title: 'Database',
    skills: [
      { name: 'MongoDB', pct: 72 },
      { name: 'MySQL',   pct: 83 },
    ],
  },
  {
    icon: '☁️', title: 'Platforms & Tools',
    skills: [
      { name: 'GitHub',  pct: 80 },
      { name: 'AWS EC2', pct: 60 },
      { name: 'Postman', pct: 86 },
      { name: 'Jest',    pct: 60 },
    ],
  },
]

const tools = [
  { icon: '🧩', name: 'VS Code' },
  { icon: '🐙', name: 'GitHub' },
  { icon: '📬', name: 'Postman' },
  { icon: '🧪', name: 'Jest' },
  { icon: '☁️', name: 'AWS EC2' },
  { icon: '🗄️', name: 'MySQL' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '⚛️', name: 'React' },
]

function SkillBar({ name, pct }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>{name}</span>
        <span className="text-xs font-mono font-semibold" style={{ color: '#3FA3F5' }}>{pct}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden"
           style={{ background: 'rgba(46,143,224,0.1)' }}>
        <div className="h-full rounded-full skill-fill transition-all duration-1000"
             style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="reveal-left px-[5vw] py-24 transition-colors duration-300"
             style={{ background: 'var(--bg-section)' }}>

      {/* Header */}
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[3px]
                       uppercase px-5 py-2 mb-4 rounded-full border"
            style={{
              color: '#3FA3F5',
              background: 'rgba(46,143,224,0.08)',
              borderColor: 'rgba(46,143,224,0.25)',
              boxShadow: '0 0 18px rgba(46,143,224,0.15)',
            }}>
        <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
        What I Know
      </span>

      <h2 className="font-head font-extrabold tracking-tight mb-2"
          style={{ fontSize: 'clamp(26px,3vw,40px)', color: 'var(--text-main)' }}>
        Skills & Technologies
      </h2>
      <p className="text-sm font-light max-w-md mb-14"
         style={{ color: 'var(--text-muted)' }}>
        My technical toolkit across the full stack.
      </p>

      {/* Skill groups — cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {skillGroups.map(group => (
          <div key={group.title}
               className="rounded-2xl p-6 border transition-all"
               style={{
                 background: 'rgba(15,40,70,0.6)',
                 border: '1px solid rgba(46,143,224,0.15)',
                 boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
               }}
               onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(46,143,224,0.4)'}
               onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(46,143,224,0.15)'}>

            {/* Card header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                   style={{ background: 'rgba(46,143,224,0.12)', border: '1px solid rgba(46,143,224,0.2)' }}>
                {group.icon}
              </div>
              <h4 className="font-head font-bold text-base"
                  style={{ color: 'var(--text-main)' }}>
                {group.title}
              </h4>
            </div>

            {/* Skill bars */}
            {group.skills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        ))}
      </div>

      {/* Tools grid */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-5"
           style={{ color: 'var(--text-muted)' }}>
          Tools I Use
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {tools.map(({ icon, name }) => (
            <div key={name}
                 className="rounded-xl p-4 text-center border transition-all cursor-default"
                 style={{
                   background: 'rgba(15,40,70,0.6)',
                   border: '1px solid rgba(46,143,224,0.15)',
                 }}
                 onMouseEnter={e => {
                   e.currentTarget.style.border = '1px solid rgba(46,143,224,0.45)'
                   e.currentTarget.style.background = 'rgba(46,143,224,0.1)'
                   e.currentTarget.style.transform = 'translateY(-4px)'
                 }}
                 onMouseLeave={e => {
                   e.currentTarget.style.border = '1px solid rgba(46,143,224,0.15)'
                   e.currentTarget.style.background = 'rgba(15,40,70,0.6)'
                   e.currentTarget.style.transform = 'translateY(0)'
                 }}>
              <div className="text-2xl mb-2">{icon}</div>
              <p className="text-[11px] font-semibold"
                 style={{ color: 'var(--text-main)' }}>{name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}