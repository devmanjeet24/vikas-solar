import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { why } from '../data/content'

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-pad relative overflow-hidden bg-gradient-to-br from-navy via-navy-800 to-emerald-900">
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-emerald-brand/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-solar/15 blur-3xl" />
      <div className="relative container-x">
        <SectionHeading eyebrow={why.eyebrow} title={why.title} light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {why.items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.1}>
              <div className="glass-dark h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 hover:bg-white/15">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-solar to-amber-300 text-navy mb-5">
                  <Icon size={24} />
                </span>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
