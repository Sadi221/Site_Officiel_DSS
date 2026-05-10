import DonationWidget from './DonationWidget'

export default function Donation() {
  return (
    <section id="don" className="py-14 md:py-20 bg-dss-green">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <span className="inline-block bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
          Faire un don
        </span>

        <h2 className="font-serif text-white mb-4" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
          Soutenez nos actions
        </h2>

        <p className="text-white/75 leading-[1.8] mb-10 max-w-xl mx-auto">
          Chaque don finance directement nos programmes de santé et de développement
          durable au Sénégal. Choisissez votre montant ci-dessous.
        </p>

        <DonationWidget dark />
      </div>
    </section>
  )
}
