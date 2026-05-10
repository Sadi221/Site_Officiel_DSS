import { useState, useEffect } from 'react'

const links = [
  { label: 'Notre mission',  href: '#mission' },
  { label: 'Impact',         href: '#impact' },
  { label: 'Projets',        href: '#projets' },
  { label: 'Jappoo Faju',   href: '#jappoo' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/Logo_DSS.png" alt="DSS" className="w-9 h-9 object-contain" />
          <div>
            <div className={`text-sm font-extrabold tracking-wide transition-colors ${scrolled ? 'text-dss-green' : 'text-white'}`}>
              DSS
            </div>
            <div className={`text-[9px] tracking-widest uppercase transition-colors ${scrolled ? 'text-slate-400' : 'text-white/50'}`}>
              Développement Solidaire & Santé
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`text-sm font-semibold transition-colors hover:text-dss-green ${
                scrolled ? 'text-slate-500' : 'text-white/85'
              }`}>
              {l.label}
            </a>
          ))}
          <a href="https://buy.stripe.com/test_6oU7sL7LN3yT3Tt4ko9MY00" target="_blank" rel="noreferrer"
            className="bg-dss-coral text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-dss-coral/30 hover:bg-orange-700 transition-colors">
            Faire un don →
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-dss-navy' : 'bg-white'} ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-dss-navy' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-dss-navy' : 'bg-white'} ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-dss-green transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://buy.stripe.com/test_6oU7sL7LN3yT3Tt4ko9MY00" target="_blank" rel="noreferrer"
            className="bg-dss-coral text-white px-5 py-3 rounded-xl text-sm font-bold text-center mt-1">
            Faire un don →
          </a>
        </div>
      </div>
    </nav>
  )
}
