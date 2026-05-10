const features = [
  { icon: '📱', title: 'Application mobile Android', desc: 'Disponible sur Google Play' },
  { icon: '💳', title: 'Paiement sécurisé',           desc: 'Wave, Orange Money, Visa/Mastercard' },
  { icon: '🏥', title: 'Hôpitaux validés',             desc: 'Partenaires certifiés au Sénégal' },
  { icon: '🔒', title: '100% transparent',             desc: 'Chaque don tracé en temps réel' },
]

export default function JappooFaju() {
  return (
    <section id="jappoo" className="py-14 md:py-20 bg-dss-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-block bg-dss-coral/20 text-dss-coral px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Projet phare
            </span>
            <h2 className="font-serif text-white mb-6" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
              Jappoo Faju —<br />
              <span className="text-[#A8E6C3]">Aide-moi à guérir</span>
            </h2>
            <p className="text-lg text-white/70 leading-[1.8] mb-4">
              Jappoo Faju (« aide-moi à guérir » en wolof) est notre plateforme numérique
              de solidarité médicale dédiée aux patients sénégalais dans le besoin.
            </p>
            <p className="text-lg text-white/70 leading-[1.8] mb-8">
              Les hôpitaux partenaires soumettent des demandes validées par notre équipe.
              Chaque don est tracé en temps réel pour une transparence totale.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.jappoo-faju.org" target="_blank" rel="noreferrer"
                className="bg-dss-coral text-white px-7 py-3.5 rounded-xl text-sm font-extrabold hover:bg-orange-700 transition-colors">
                Faire un don →
              </a>
              <a href="https://www.jappoo-faju.org" target="_blank" rel="noreferrer"
                className="bg-white/10 text-white px-7 py-3.5 rounded-xl text-sm font-bold border border-white/20 hover:bg-white/20 transition-colors">
                Voir les cas
              </a>
            </div>
          </div>

          {/* Right — Features */}
          <div className="flex flex-col gap-4">
            {features.map(f => (
              <div key={f.title} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <div className="text-white font-bold text-sm">{f.title}</div>
                  <div className="text-white/50 text-xs mt-0.5">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
