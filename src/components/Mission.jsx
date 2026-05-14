import { motion } from 'framer-motion'
import { fadeInUp, stagger, viewport } from '../utils/animations'

const pillars = [
  {
    icon: '🏥',
    title: 'Santé & Soins',
    desc: "Mise en place d'activités de prévention et de soins médicaux pour les populations vulnérables. Accès aux soins essentiels et accompagnement médical.",
    bg: 'bg-dss-light',
    border: 'border-dss-green/20',
    overlay: 'bg-dss-green/50',
    img: '/images/mission-sante.jpeg',
  },
  {
    icon: '🌱',
    title: 'Développement Durable',
    desc: "Projets d'agriculture durable et de protection de l'environnement. Soutien aux communautés pour un avenir résilient face aux défis climatiques.",
    bg: 'bg-[#D8F3DC]',
    border: 'border-[#2D6A4F]/20',
    overlay: 'bg-[#2D6A4F]/45',
    img: '/images/mission-agriculture.jpg',
  },
  {
    icon: '🌍',
    title: 'Lutte contre le Changement Climatique',
    desc: "Promotion de la participation active des individus et communautés dans la lutte contre le changement climatique en Afrique de l'Ouest.",
    bg: 'bg-[#FEF0EB]',
    border: 'border-dss-coral/20',
    overlay: 'bg-dss-coral/40',
    img: '/images/mission-climat.jpg',
  },
]

export default function Mission() {
  return (
    <section id="mission" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span variants={fadeInUp} className="inline-block bg-dss-light text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Notre mission
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-dss-navy mb-4" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Agir pour les populations<br />les plus vulnérables
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-dss-gray max-w-xl mx-auto leading-[1.8]">
            Fondée en 2019 à Paris, DSS œuvre pour améliorer le bien-être général
            des communautés à travers trois piliers d'action complémentaires.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {pillars.map(p => (
            <motion.div
              key={p.title}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`rounded-2xl overflow-hidden border ${p.border} shadow-md shadow-black/5 cursor-default`}
            >
              <div className="h-52 relative overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover object-center" />
                <div className={`absolute inset-0 ${p.overlay}`} />
                <span className="absolute top-4 left-4 text-3xl drop-shadow">{p.icon}</span>
              </div>
              <div className={`${p.bg} p-6`}>
                <h3 className="text-lg font-bold text-dss-navy mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-[1.8]">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
