const infos = [
  { label: 'Numéro d\'enregistrement', value: 'W751251475',                          icon: '📋' },
  { label: 'Date de déclaration',      value: '11 mars 2019',                         icon: '📅' },
  { label: 'Siège social',             value: '9 rue du Cirque\n75008 Paris',          icon: '📍' },
  { label: 'Statut juridique',         value: 'Association loi 1901\nà but non lucratif', icon: '⚖️' },
]

export default function Team() {
  return (
    <section id="association" className="py-14 md:py-20 bg-dss-sand">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-block bg-white text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            L'association
          </span>
          <h2 className="text-dss-navy mb-4" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Une organisation reconnue
          </h2>
          <p className="text-lg text-dss-gray max-w-xl mx-auto leading-[1.8]">
            DSS est une association loi 1901 déclarée à la Préfecture de Police de Paris,
            enregistrée sous le numéro W751251475.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {infos.map(i => (
            <div key={i.label} className="bg-white rounded-2xl p-7 border border-slate-100 text-center shadow-sm">
              <span className="text-4xl block mb-3">{i.icon}</span>
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-2">{i.label}</div>
              <div className="text-base font-bold text-dss-navy whitespace-pre-line">{i.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
