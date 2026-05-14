import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight, fadeInUp, stagger, viewport } from '../utils/animations'

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

          {/* Left — text */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.span variants={fadeInLeft} className="inline-block bg-dss-coral/20 text-dss-coral px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Projet phare
            </motion.span>
            <motion.h2 variants={fadeInLeft} className="font-serif text-white mb-6" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
              Jappoo Faju —<br />
              <span className="text-[#A8E6C3]">Aide-moi à guérir</span>
            </motion.h2>
            <motion.p variants={fadeInLeft} className="text-lg text-white/70 leading-[1.8] mb-4">
              Jappoo Faju (« aide-moi à guérir » en wolof) est notre plateforme numérique
              de solidarité médicale dédiée aux patients sénégalais dans le besoin.
            </motion.p>
            <motion.p variants={fadeInLeft} className="text-lg text-white/70 leading-[1.8] mb-8">
              Les hôpitaux partenaires soumettent des demandes validées par notre équipe.
              Chaque don est tracé en temps réel pour une transparence totale.
            </motion.p>
            <motion.div variants={fadeInLeft} className="flex flex-wrap gap-3">
              <motion.a
                href="https://www.jappoo-faju.org"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-dss-coral text-white px-7 py-3.5 rounded-xl text-sm font-extrabold hover:bg-orange-700 transition-colors"
              >
                Faire un don →
              </motion.a>
              <motion.a
                href="https://www.jappoo-faju.org"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/10 text-white px-7 py-3.5 rounded-xl text-sm font-bold border border-white/20 hover:bg-white/20 transition-colors"
              >
                Voir les cas
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — Features */}
          <motion.div
            className="flex flex-col gap-4"
            variants={stagger(0.13, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {features.map(f => (
              <motion.div
                key={f.title}
                variants={fadeInRight}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 cursor-default"
              >
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <div className="text-white font-bold text-sm">{f.title}</div>
                  <div className="text-white/50 text-xs mt-0.5">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
