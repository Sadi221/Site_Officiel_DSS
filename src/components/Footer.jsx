const navLinks = [
  { label: 'Notre mission',  href: '#mission' },
  { label: 'Notre impact',   href: '#impact' },
  { label: 'Nos projets',    href: '#projets' },
  { label: 'Jappoo Faju',   href: '#jappoo' },
  { label: 'Faire un don',   href: '#don' },
  { label: 'Partenaires',    href: '#partenaires' },
  { label: 'L\'association', href: '#association' },
  { label: 'Contact',        href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dss-dark pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl font-black text-white mb-1">DSS</div>
            <div className="text-[11px] text-white/50 tracking-[2px] uppercase mb-4">
              Développement Solidaire & Santé
            </div>
            <p className="text-sm text-white/60 leading-[1.8] max-w-xs">
              Association loi 1901 fondée en 2019.<br />
              N° W751251475 — Paris, France.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Navigation</div>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(l => (
                <a key={l.href} href={l.href}
                  className="text-sm text-white/60 hover:text-[#A8E6C3] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Project */}
          <div>
            <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Projet santé</div>
            <a href="https://www.jappoo-faju.org" target="_blank" rel="noreferrer"
              className="inline-block bg-dss-coral text-white px-5 py-2.5 rounded-xl text-sm font-bold mb-4 hover:bg-orange-700 transition-colors">
              jappoo-faju.org →
            </a>
            <p className="text-xs text-white/50 leading-[1.7]">
              Solidarité médicale<br />au Sénégal
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Développement Solidaire & Santé. Tous droits réservés.
          </p>
          <a href="https://www.jappoo-faju.org/privacy-policy"
            className="text-xs text-white/40 hover:text-white/70 transition-colors">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  )
}
