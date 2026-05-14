import { motion } from 'framer-motion'
import { fadeInUp, stagger, viewport } from '../utils/animations'

const projects = [
  {
    tag: 'Santé numérique',
    title: 'Jappoo Faju',
    desc: 'Plateforme de solidarité médicale connectant donateurs et patients sénégalais en besoin urgent. Dons via Wave, Orange Money et carte bancaire.',
    statusLabel: 'Actif',
    statusClass: 'bg-green-100 text-green-700',
    icon: '💊',
    link: 'https://www.jappoo-faju.org',
  },
  {
    tag: 'Agriculture',
    title: 'Jardins Solidaires',
    desc: "Soutien aux agricultures familiales au Sénégal avec des techniques durables et résistantes aux aléas climatiques.",
    statusLabel: 'En développement',
    statusClass: 'bg-amber-100 text-amber-700',
    icon: '🌾',
    link: null,
  },
  {
    tag: 'Environnement',
    title: 'Reforestation Communautaire',
    desc: 'Programme de reforestation impliquant les communautés locales dans la protection de leur environnement naturel.',
    statusLabel: 'En développement',
    statusClass: 'bg-amber-100 text-amber-700',
    icon: '🌳',
    link: null,
  },
]

export default function Projects() {
  return (
    <section id="projets" className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span variants={fadeInUp} className="inline-block bg-dss-light text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Nos projets
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-dss-navy mb-4" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Des initiatives concrètes<br />pour un impact durable
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map(p => (
            <motion.div
              key={p.title}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="bg-white rounded-2xl p-8 shadow-md shadow-black/5 flex flex-col"
            >
              <div className="flex justify-between items-start mb-5">
                <motion.span
                  className="text-4xl"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                >{p.icon}</motion.span>
                <span className={`${p.statusClass} px-3 py-1 rounded-full text-xs font-bold`}>{p.statusLabel}</span>
              </div>
              <span className="text-xs font-bold text-dss-green uppercase tracking-widest mb-2">{p.tag}</span>
              <h3 className="text-xl font-bold text-dss-navy mb-3">{p.title}</h3>
              <p className="text-sm text-dss-gray leading-[1.8] flex-1">{p.desc}</p>
              {p.link && (
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 bg-dss-green text-white px-6 py-3 rounded-xl text-sm font-bold text-center hover:bg-dss-dark transition-colors"
                >
                  Visiter le site →
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
