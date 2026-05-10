const pillars = [
  {
    icon: '🏥',
    title: 'Santé & Soins',
    desc: 'Mise en place d\'activités de prévention et de soins médicaux pour les populations vulnérables. Accès aux soins essentiels et accompagnement médical.',
    bg: 'bg-dss-light',
    border: 'border-dss-green/20',
    overlay: 'bg-dss-green/40',
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80',
  },
  {
    icon: '🌱',
    title: 'Développement Durable',
    desc: 'Projets d\'agriculture durable et de protection de l\'environnement. Soutien aux communautés pour un avenir résilient face aux défis climatiques.',
    bg: 'bg-[#D8F3DC]',
    border: 'border-[#2D6A4F]/20',
    overlay: 'bg-[#2D6A4F]/40',
    img: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e7?w=400&q=80',
  },
  {
    icon: '🌍',
    title: 'Lutte contre le Changement Climatique',
    desc: 'Promotion de la participation active des individus et communautés dans la lutte contre le changement climatique en Afrique de l\'Ouest.',
    bg: 'bg-[#FEF0EB]',
    border: 'border-dss-coral/20',
    overlay: 'bg-dss-coral/40',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80',
  },
]

export default function Mission() {
  return (
    <section id="mission" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-dss-light text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Notre mission
          </span>
          <h2 className="text-dss-navy mb-4" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Agir pour les populations<br />les plus vulnérables
          </h2>
          <p className="text-lg text-dss-gray max-w-xl mx-auto leading-[1.8]">
            Fondée en 2019 à Paris, DSS œuvre pour améliorer le bien-être général
            des communautés à travers trois piliers d'action complémentaires.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(p => (
            <div key={p.title} className={`rounded-2xl overflow-hidden border ${p.border} shadow-md shadow-black/5`}>
              <div className="h-44 relative overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 ${p.overlay}`} />
                <span className="absolute top-4 left-4 text-3xl">{p.icon}</span>
              </div>
              <div className={`${p.bg} p-6`}>
                <h3 className="text-lg font-bold text-dss-navy mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-[1.8]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div className="mt-16 rounded-3xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1200&q=80"
            alt="Communauté"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dss-dark/92 to-dss-green/85 flex items-center justify-center p-10">
            <div className="text-center max-w-2xl">
              <p className="font-serif text-white leading-[1.6] italic" style={{ fontSize: 'clamp(18px,2.5vw,28px)' }}>
                "Améliorer le bien-être général des populations et des communautés vulnérables,
                avec un accent particulier sur la santé, l'agriculture et l'environnement."
              </p>
              <p className="text-white/60 mt-4 text-sm tracking-wide">
                — Objet social de DSS, déclaration du 11 mars 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
