const partners = [
  {
    name: 'Hôpital Fann',
    location: 'Dakar, Sénégal',
    type: 'Partenaire médical',
    desc: 'Centre hospitalier universitaire de référence nationale, pionnier dans l\'accueil et le traitement des patients vulnérables.',
    icon: '🏥',
  },
  {
    name: 'Dalal Jamm',
    location: 'Dakar, Sénégal',
    type: 'Partenaire médical',
    desc: 'Établissement de santé engagé dans l\'accès aux soins pour tous, partenaire clé de l\'initiative Jappoo Faju.',
    icon: '🏨',
  },
]

export default function Partners() {
  return (
    <section id="partenaires" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-block bg-dss-light text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Nos partenaires
          </span>
          <h2 className="text-dss-navy mb-4" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
            Des hôpitaux de confiance<br />à nos côtés
          </h2>
          <p className="text-lg text-dss-gray max-w-xl mx-auto leading-[1.8]">
            Nos hôpitaux partenaires sont rigoureusement sélectionnés pour garantir
            la qualité et la traçabilité de chaque intervention financée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {partners.map(p => (
            <div key={p.name} className="bg-dss-light rounded-2xl p-8 border border-dss-green/15">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-dss-green rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  {p.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-dss-green uppercase tracking-widest">{p.type}</span>
                  <h3 className="text-xl font-bold text-dss-navy mt-1 mb-1">{p.name}</h3>
                  <div className="text-xs text-dss-gray mb-3">📍 {p.location}</div>
                  <p className="text-sm text-slate-600 leading-[1.8]">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-dss-green rounded-3xl p-10 md:p-14 text-center">
          <h3 className="font-serif text-2xl font-bold text-white mb-3">
            Vous êtes un établissement de santé ?
          </h3>
          <p className="text-white/70 mb-8 max-w-lg mx-auto leading-[1.8]">
            Rejoignez le réseau DSS et permettez à vos patients d'accéder aux dons de solidarité médicale.
          </p>
          <a href="#contact"
            className="inline-block bg-white text-dss-green px-8 py-3.5 rounded-xl font-bold text-sm hover:shadow-xl transition-shadow">
            Devenir partenaire →
          </a>
        </div>
      </div>
    </section>
  )
}
