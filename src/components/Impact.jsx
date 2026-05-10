const stats = [
  { value: '2019', label: 'Fondée à Paris',         icon: '📅', desc: 'Association loi 1901' },
  { value: '3',    label: 'Piliers d\'action',       icon: '🎯', desc: 'Santé, Agriculture, Climat' },
  { value: '2',    label: 'Hôpitaux partenaires',    icon: '🏥', desc: 'Fann & Dalal Jamm, Dakar' },
  { value: '100%', label: 'Transparence',            icon: '🔍', desc: 'Chaque don tracé en temps réel' },
]

export default function Impact() {
  return (
    <section id="impact" className="py-14 md:py-20 bg-dss-sand">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="inline-block bg-white text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Notre impact
          </span>
          <h2 className="text-dss-navy" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
            Des actions concrètes,<br />des résultats mesurables
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100">
              <span className="text-3xl block mb-3">{s.icon}</span>
              <div className="font-serif font-black text-dss-green mb-1" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
                {s.value}
              </div>
              <div className="text-sm font-bold text-dss-navy mb-1">{s.label}</div>
              <div className="text-xs text-dss-gray">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
