import { Mail, Phone } from 'lucide-react'
import { company } from '../data/content'

export default function TopBar() {
  return (
    <div className="bg-navy text-white/80 text-xs sm:text-sm">
      <div className="container-x px-5 md:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-1">
        <p className="hidden sm:block">{company.topbarTagline}</p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-solar transition">
            <Mail size={14} /> {company.email}
          </a>
          <a href={company.phoneHref} className="flex items-center gap-1.5 hover:text-solar transition">
            <Phone size={14} /> {company.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
