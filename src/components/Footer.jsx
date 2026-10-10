import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'
import { FacebookIcon, YoutubeIcon, InstagramIcon } from './Icons'
import { company, footer, navLinks } from '../data/content'

const socials = [
  { Icon: FacebookIcon, href: company.social.facebook, label: 'Facebook' },
  { Icon: YoutubeIcon, href: company.social.youtube, label: 'YouTube' },
  { Icon: InstagramIcon, href: company.social.instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="container-x px-5 md:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed">{footer.about}</p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-solar hover:text-navy transition">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-solar transition">{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {footer.serviceLinks.map((s) => <li key={s}><a href="#services" className="hover:text-solar transition">{s}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><MapPin size={18} className="text-solar shrink-0" /> {company.address}</li>
              <li><a href={`mailto:${company.email}`} className="flex gap-3 hover:text-solar transition"><Mail size={18} className="text-solar shrink-0" /> {company.email}</a></li>
              <li><a href={company.phoneHref} className="flex gap-3 hover:text-solar transition"><Phone size={18} className="text-solar shrink-0" /> {company.phone}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
