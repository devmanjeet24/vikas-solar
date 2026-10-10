import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { hero, images, company } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-6.5rem)] flex items-center overflow-hidden">
      <img src={images.hero} alt="Solar panels under a clear sky" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-emerald-brand/40" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-solar/20 blur-3xl" />

      <div className="relative container-x px-5 md:px-8 py-16 md:py-24 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-block glass-dark rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-solar mb-6">
            {company.tagline}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">{hero.title}</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">{hero.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Get Free Quote <ArrowRight size={18} /></a>
            <a href={company.phoneHref} className="btn-ghost"><Phone size={18} /> Call Now</a>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          {hero.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass-dark rounded-2xl p-5 text-center"
            >
              <div className="font-heading text-3xl font-bold text-solar">{s.value}</div>
              <div className="text-sm text-white/80 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
