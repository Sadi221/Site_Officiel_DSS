export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/88 via-black/70 to-black/40" />
      <div className="absolute bottom-0 left-0 w-2/5 h-1 bg-gradient-to-r from-dss-green to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl">

          {/* Logo + name */}
          <div className="flex items-center gap-4 mb-10">
            <img src="/Logo_DSS.png" alt="DSS" className="w-16 h-16 object-contain" />
            <div>
              <div className="text-sm font-extrabold text-white tracking-widest uppercase">
                Développement Solidaire & Santé
              </div>
              <div className="text-[11px] text-white/45 tracking-[3px] mt-1 uppercase">DSS — Paris, France</div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-dss-green/35 backdrop-blur-sm border border-green-300/30 rounded-full px-4 py-2 mb-7">
            <span className="text-sm">🌍</span>
            <span className="text-[#A8E6C3] text-xs font-bold tracking-widest uppercase">
              ONG française · Sénégal & Afrique
            </span>
          </div>

          <h1 className="font-serif font-black text-white mb-6 leading-[1.05]" style={{ fontSize: 'clamp(38px,6vw,72px)' }}>
            Développement<br />
            <span className="text-[#A8E6C3]">Solidaire</span><br />
            & Santé
          </h1>

          <p className="text-lg text-white/72 leading-[1.8] mb-10 max-w-lg">
            Améliorer le bien-être des populations vulnérables à travers la santé,
            le développement durable et la lutte contre le changement climatique.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a href="#mission"
              className="bg-white text-dss-green px-8 py-4 rounded-xl text-sm font-extrabold shadow-xl hover:shadow-2xl transition-shadow">
              Découvrir notre mission
            </a>
            <a href="https://www.jappoo-faju.org" target="_blank" rel="noreferrer"
              className="bg-dss-coral text-white px-8 py-4 rounded-xl text-sm font-extrabold shadow-xl shadow-dss-coral/40 hover:bg-orange-700 transition-colors">
              Soutenir Jappoo Faju →
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { value: '2019',  label: 'Fondée à Paris' },
              { value: '2',     label: 'Hôpitaux partenaires' },
              { value: '3',     label: 'Piliers d\'action' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#A8E6C3] font-serif">{s.value}</div>
                <div className="text-xs text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
