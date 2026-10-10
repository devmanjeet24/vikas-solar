import { Phone } from 'lucide-react'
import { FacebookIcon, YoutubeIcon, InstagramIcon, WhatsAppIcon } from './Icons'
import { company } from '../data/content'

const social = [
  { Icon: FacebookIcon, href: company.social.facebook, label: 'Facebook', cls: 'bg-[#1877F2]' },
  { Icon: YoutubeIcon, href: company.social.youtube, label: 'YouTube', cls: 'bg-[#FF0000]' },
  { Icon: InstagramIcon, href: company.social.instagram, label: 'Instagram', cls: 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45]' },
]

const round = 'fixed bottom-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-emerald-brand text-white shadow-lg animate-pulse-ring transition hover:scale-110'

export default function FloatingElements() {
  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col overflow-hidden rounded-l-xl shadow-xl">
        {social.map(({ Icon, href, label, cls }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className={`${cls} grid place-items-center h-11 w-11 text-white transition-all hover:w-14`}>
            <Icon />
          </a>
        ))}
      </div>
      <a href={company.phoneHref} aria-label="Call us" className={`${round} left-5`}><Phone size={24} /></a>
      <a href={company.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" className={`${round} right-5 sm:right-16`}>
        <WhatsAppIcon width={26} height={26} />
      </a>
    </>
  )
}
