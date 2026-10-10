import { company } from '../data/content'

// Logo mark lives at public/logo.jpeg (full lockup: public/logo-full.jpeg)
export default function Logo({ light = false }) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <img src="/logo.jpeg" alt={`${company.name} logo`} className="h-11 w-11 rounded-full bg-white object-cover shadow-md" />
      <span className={`font-heading font-bold text-base sm:text-lg leading-tight tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        {company.name}
      </span>
    </a>
  )
}
