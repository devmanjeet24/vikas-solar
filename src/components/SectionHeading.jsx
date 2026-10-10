import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, center = true, light = false }) {
  return (
    <Reveal className={center ? 'text-center max-w-3xl mx-auto mb-12 md:mb-16' : 'mb-8'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`section-title ${light ? '!text-white' : ''}`}>{title}</h2>
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-solar to-emerald-brand ${center ? 'mx-auto' : ''}`} />
    </Reveal>
  )
}
