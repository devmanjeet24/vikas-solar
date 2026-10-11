import { useState } from 'react'
import { CheckCircle2, Send, Loader2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { about, enquiryFields, images } from '../data/content'

const SHEET_URL = import.meta.env.VITE_SHEET_URL

function validate(v) {
  const e = {}
  if (!v.name?.trim()) e.name = 'Please enter your name'
  if (!/^\d{6}$/.test(v.pin || '')) e.pin = 'Enter a valid 6-digit pin code'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email || '')) e.email = 'Enter a valid email'
  if (!(Number(v.bill) > 0)) e.bill = 'Enter your monthly bill'
  if (!/^\d{10}$/.test(v.phone || '')) e.phone = 'Enter a 10-digit phone number'
  if (!(Number(v.area) > 0)) e.area = 'Enter the area in sq. ft.'
  return e
}

export default function About() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const values = Object.fromEntries(new FormData(form))
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return

    if (!SHEET_URL) {
      console.error('VITE_SHEET_URL is not set')
      setStatus('error')
      return
    }

    setStatus('loading')
    try {
      // text/plain keeps this a "simple" request, so no CORS preflight is needed
      const res = await fetch(SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(values),
      })
      const out = await res.json()
      if (!out.ok) throw new Error(out.error || 'Failed')
      form.reset()
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
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
          <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-9 relative">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-solar/30 blur-2xl -z-10" />
            <h3 className="text-2xl font-bold text-navy">Enquire Now</h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">Get a free quote within 24 hours.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {enquiryFields.map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs font-semibold text-navy/80">{f.label}</span>
                  <input
                    name={f.name} type={f.type} placeholder={f.placeholder}
                    inputMode={['pin', 'phone', 'bill', 'area'].includes(f.name) ? 'numeric' : undefined}
                    aria-invalid={!!errors[f.name]}
                    className={`mt-1 w-full rounded-xl bg-white/70 border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
                      errors[f.name] ? 'border-red-400 focus:ring-red-300/40' : 'border-navy/10 focus:border-emerald-brand focus:ring-emerald-brand/30'
                    }`}
                  />
                  {errors[f.name] && <span className="mt-1 block text-xs text-red-500">{errors[f.name]}</span>}
                </label>
              ))}
            </div>
            {/* Honeypot: hidden from people, bots fill it */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full mt-6 disabled:opacity-70 disabled:cursor-not-allowed">
              {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={18} /> Send Query</>}
            </button>
            {status === 'success' && <p role="status" className="mt-3 text-center text-sm font-medium text-emerald-brand">Thank you! We'll be in touch shortly.</p>}
            {status === 'error' && <p role="alert" className="mt-3 text-center text-sm font-medium text-red-500">Something went wrong. Please try again or call us.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
