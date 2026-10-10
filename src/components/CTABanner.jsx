import { Phone } from 'lucide-react'
import Reveal from './Reveal'
import { WhatsAppIcon } from './Icons'
import { finalCta, company } from '../data/content'

export default function CTABanner() {
  return (
    <section className="px-5 md:px-8 pb-20 md:pb-28">
      <Reveal className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-700 to-emerald-brand p-10 md:p-16 text-center shadow-2xl">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-solar/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-emerald-brand/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">{finalCta.title}</h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">{finalCta.text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={company.phoneHref} className="btn-primary"><Phone size={18} /> Call Now</a>
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="btn-ghost"><WhatsAppIcon /> WhatsApp Us</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
