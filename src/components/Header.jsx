import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import { navLinks } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 glass !bg-white/70 !rounded-none border-x-0 border-t-0">
      <div className="container-x px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="relative text-sm font-medium text-navy/80 hover:text-emerald-brand transition group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-solar transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-sm">Get Free Quote</a>
        <button className="lg:hidden p-2 text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/60"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 font-medium text-navy border-b border-navy/5">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3">Get Free Quote</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
