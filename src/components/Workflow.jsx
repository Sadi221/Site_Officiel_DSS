import { motion } from 'framer-motion'
import { fadeInUp, stagger, viewport } from '../utils/animations'

const steps = [
  {
    num: '01',
    icon: '🏥',
    title: 'Demande médicale',
    desc: "Un patient hospitalisé a besoin d'aide financière pour ses soins. L'hôpital partenaire identifie le besoin.",
  },
  {
    num: '02',
    icon: '✅',
    title: 'Validation DSS',
    desc: "Notre équipe examine chaque dossier : urgence médicale, situation financière, structure partenaire agréée.",
  },
  {
    num: '03',
    icon: '📢',
    title: 'Publication',
    desc: "La demande validée est publiée sur Jappoo Faju avec le pseudonyme du patient et les détails médicaux.",
  },
  {
    num: '04',
    icon: '❤️',
    title: 'Mobilisation',
    desc: "Les donateurs choisissent le patient qu'ils souhaitent aider et effectuent un don sécurisé en ligne.",
  },
  {
    num: '05',
    icon: '💊',
    title: 'Soins',
    desc: "Le financement est versé directement à l'hôpital. Le patient reçoit les soins dont il a besoin.",
  },
  {
    num: '06',
    icon: '📊',
    title: 'Traçabilité',
    desc: "Chaque don est documenté et rapporté. Transparence totale pour les donateurs et les partenaires.",
  },
]

const lineVariant = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Workflow() {
  return (
    <section id="comment-ca-marche" className="py-14 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span variants={fadeInUp} className="inline-block bg-dss-light text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Comment ça marche
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-dss-navy mb-4" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Du patient au donateur —<br />un processus transparent
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-dss-gray max-w-xl mx-auto leading-[1.8]">
            Chaque euro donné est tracé de bout en bout. Voici comment fonctionne
            la chaîne de solidarité médicale Jappoo Faju.
          </motion.p>
        </motion.div>

        {/* Desktop: 3 columns × 2 rows */}
        <motion.div
          className="grid md:grid-cols-3 gap-x-8 gap-y-10"
          variants={stagger(0.13, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {steps.map((step, i) => (
            <motion.div key={step.num} variants={fadeInUp} className="relative">
              {/* Connector line (desktop only, not on last in each row) */}
              {i % 3 !== 2 && (
                <motion.div
                  className="hidden md:block absolute top-8 left-[calc(100%-16px)] w-8 h-0.5 bg-dss-green/30 origin-left"
                  variants={lineVariant}
                />
              )}

              {/* Step card */}
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="bg-dss-sand rounded-2xl p-7 h-full border border-dss-green/10 cursor-default relative"
              >
                {/* Number badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-dss-green text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                    {step.num}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-base font-bold text-dss-navy mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-[1.8]">{step.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={viewport}
        >
          <p className="text-dss-gray mb-5 text-sm">
            Prêt à aider un patient sénégalais aujourd'hui ?
          </p>
          <motion.a
            href="https://www.jappoo-faju.org"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-dss-green text-white px-9 py-4 rounded-xl font-extrabold text-sm shadow-lg hover:bg-dss-dark transition-colors"
          >
            Voir les demandes en cours →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
