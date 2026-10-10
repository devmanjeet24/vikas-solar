import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { faqs } from '../data/content'

export default function FAQs() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faqs" className="section-pad bg-gradient-to-b from-amber-50/60 to-white">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow={faqs.eyebrow} title={faqs.title} />
        <div className="space-y-4">
          {faqs.items.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={`glass rounded-2xl transition ${isOpen ? 'ring-2 ring-emerald-brand/40' : ''}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  >
                    <span className="font-heading font-semibold text-navy">{f.q}</span>
                    <ChevronDown className={`shrink-0 text-emerald-brand transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-slate-600 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
