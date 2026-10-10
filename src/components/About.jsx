import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { about, enquiryFields, images } from '../data/content'

export default function About() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault() // UI only — wire to a backend later
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="about" className="section-pad bg-gradient-to-b from-white to-emerald-50/60">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="section-title">{about.title}</h2>
          <div className="mt-4 mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-solar to-emerald-brand" />
          {about.paragraphs.map((p) => (
            <p key={p} className="text-slate-600 leading-relaxed mb-4">{p}</p>
          ))}
          <ul className="mt-6 space-y-3">
            {about.points.map((pt) => (
              <li key={pt} className="flex items-center gap-3 font-medium text-navy">
                <CheckCircle2 className="text-emerald-brand shrink-0" size={20} /> {pt}
              </li>
            ))}
          </ul>
          <img src={images.about} alt="Solar installation" loading="lazy" className="mt-8 rounded-3xl shadow-xl h-56 w-full object-cover hidden md:block" />
        </Reveal>

        <Reveal delay={0.15} id="contact" className="scroll-mt-24">
          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-9 relative">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-solar/30 blur-2xl -z-10" />
            <h3 className="text-2xl font-bold text-navy">Enquire Now</h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">Get a free quote within 24 hours.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {enquiryFields.map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs font-semibold text-navy/80">{f.label}</span>
                  <input
                    name={f.name} type={f.type} placeholder={f.placeholder} required
                    className="mt-1 w-full rounded-xl bg-white/70 border border-navy/10 px-4 py-3 text-sm outline-none transition focus:border-emerald-brand focus:ring-2 focus:ring-emerald-brand/30"
                  />
                </label>
              ))}
            </div>
            <button type="submit" className="btn-primary w-full mt-6"><Send size={18} /> Send Query</button>
            {sent && <p className="mt-3 text-center text-sm font-medium text-emerald-brand">Thank you! We'll be in touch shortly.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
