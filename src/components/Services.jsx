import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section-pad bg-gradient-to-b from-emerald-50/60 to-white">
      <div className="container-x">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.items.map(({ icon: Icon, title, text, image }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <article className="glass group h-full rounded-3xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-44 overflow-hidden">
                  <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 grid place-items-center h-11 w-11 rounded-xl glass-dark text-solar">
                    <Icon size={22} />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
