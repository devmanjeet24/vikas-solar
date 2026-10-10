import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { benefits } from '../data/content'

export default function Benefits() {
  return (
    <section id="benefits" className="section-pad bg-gradient-to-b from-white to-amber-50/60">
      <div className="container-x">
        <SectionHeading eyebrow={benefits.eyebrow} title={benefits.title} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.1}>
              <div className="glass h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-emerald-brand/10 text-emerald-brand mb-5">
                  <Icon size={24} />
                </span>
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-3xl bg-gradient-to-r from-navy to-emerald-brand p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white">{benefits.cta.title}</h3>
              <p className="text-white/80 mt-2">{benefits.cta.text}</p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">{benefits.cta.button}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
