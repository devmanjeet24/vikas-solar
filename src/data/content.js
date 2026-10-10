// All editable text, images and contact details live here.
import {
  BadgeCheck, Cpu, Wrench, Wallet, ShieldCheck, Headset,
  TrendingDown, LineChart, Landmark, Zap, Settings, Leaf,
  Sun, PlugZap, BatteryCharging, Network,
} from 'lucide-react'

export const company = {
  name: 'Eco Friends Solar Solution',
  legalName: 'Eco Friends Solar Solution',
  tagline: 'Solar Power Brightening Up Your World',
  topbarTagline: 'Empowering your world with clean, sustainable energy solutions',
  email: 'Ecofriendssolarsolution@gmail.com',
  phone: '+91 97173 57457',
  phoneHref: 'tel:+919717357457',
  whatsappHref: 'https://wa.me/919717357457',
  address: 'Your Street, Your City, State – 000000, India',
  social: {
    facebook: 'https://facebook.com/',
    youtube: 'https://bit.ly/4ztQidu',
    instagram: 'https://www.instagram.com/p/DWYLQWgkl5Y/',
  },
}

export const images = {
  hero: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80',
  about: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1200&q=80',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  title: 'Powering Homes & Businesses With Clean, Renewable Energy.',
  subtitle:
    'Cut your electricity bills, secure your energy future and protect the planet with high-efficiency solar systems designed, installed and maintained by experts.',
  stats: [
    { value: '500+', label: 'Installations' },
    { value: '10MW+', label: 'Capacity Installed' },
    { value: '25 Years', label: 'Performance Warranty' },
  ],
}

export const about = {
  eyebrow: 'About Us',
  title: 'Eco Friends Solar Solution',
  paragraphs: [
    'Eco Friends Solar Solution is a leading provider of distributed energy solutions in India, serving residential, commercial and industrial customers with reliable, affordable clean power.',
    'We design and install rooftop and ground-mounted solar systems and support you across the full energy lifecycle — from site survey, engineering and subsidy paperwork to installation, monitoring and long-term maintenance.',
  ],
  points: ['Rooftop & ground-mounted systems', 'Residential, commercial & industrial', 'Full energy lifecycle support'],
}

export const enquiryFields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
  { name: 'pin', label: 'Pin Code', type: 'text', placeholder: '6-digit pin code' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
  { name: 'bill', label: 'Avg. Monthly Bill (₹)', type: 'number', placeholder: 'e.g. 5000' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+91' },
  { name: 'area', label: 'Area (sq. ft.)', type: 'number', placeholder: 'Available roof/land area' },
]

export const services = {
  eyebrow: 'Our Services',
  title: 'Solar Solutions Built Around You',
  items: [
    {
      icon: Sun,
      title: 'Solar Panel',
      text: 'High-efficiency mono PERC panels from top-tier manufacturers for maximum yield and durability.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Network,
      title: 'On Grid System',
      text: 'Grid-connected systems with net metering — slash your bill and export surplus power to the grid.',
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: BatteryCharging,
      title: 'Off Grid System',
      text: 'Battery-backed standalone systems for remote locations and uninterrupted power independence.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: PlugZap,
      title: 'Hybrid Solar System',
      text: 'The best of both worlds: grid connectivity plus battery storage for backup during outages.',
      image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
    },
  ],
}

export const why = {
  eyebrow: 'Why Choose Us',
  title: 'Why Choose Our Solar Agency',
  items: [
    { icon: BadgeCheck, title: 'Certified Experts', text: 'Trained, certified engineers handle every survey, design and installation.' },
    { icon: Cpu, title: 'Quality Components', text: 'Tier-1 panels, inverters and structures built to last for decades.' },
    { icon: Wrench, title: 'End-to-End Service', text: 'Design, approvals, installation, net metering and after-sales — all in one place.' },
    { icon: Wallet, title: 'Best Pricing & Subsidy Help', text: 'Transparent quotes and complete assistance with government subsidies.' },
    { icon: ShieldCheck, title: '25-Year Warranty', text: 'Long-term performance warranty for complete peace of mind.' },
    { icon: Headset, title: '24/7 Support', text: 'Round-the-clock monitoring and responsive service whenever you need us.' },
  ],
}

export const benefits = {
  eyebrow: 'Benefits',
  title: 'Benefits of Solar for Commercial & Industrial',
  items: [
    { icon: TrendingDown, title: 'Lower Electricity Bills', text: 'Cut power costs by up to 90% and hedge against rising tariffs.' },
    { icon: LineChart, title: 'High ROI', text: 'Typical payback in 3–5 years with 25+ years of free power afterwards.' },
    { icon: Landmark, title: 'Tax Benefits & Depreciation', text: 'Claim accelerated depreciation and other available incentives.' },
    { icon: Zap, title: 'Energy Independence', text: 'Reduce grid reliance and stabilise your operating costs.' },
    { icon: Settings, title: 'Low Maintenance', text: 'No moving parts — periodic cleaning and monitoring is all it takes.' },
    { icon: Leaf, title: 'Eco-Friendly', text: 'Lower your carbon footprint and strengthen your ESG credentials.' },
  ],
  cta: { title: 'Get a free energy audit for your business', text: 'Find out how much you can save with solar.', button: 'Request Free Audit' },
}

export const faqs = {
  eyebrow: 'FAQs',
  title: 'Frequently Asked Questions',
  items: [
    { q: 'How much does a solar system cost?', a: 'Cost depends on system size and type. Residential rooftop systems typically cost roughly ₹50,000–₹70,000 per kW before subsidy. Share your monthly bill and roof area for a free, accurate quote.' },
    { q: 'Is there a government subsidy available?', a: 'Yes. Residential customers can avail central and state subsidies under schemes such as PM Surya Ghar. We handle the paperwork end to end. Commercial users can benefit from accelerated depreciation.' },
    { q: 'How much maintenance does solar need?', a: 'Very little. Cleaning the panels every few weeks and an annual check-up is usually enough. We also offer annual maintenance contracts and remote monitoring.' },
    { q: 'What is the payback period?', a: 'Most homes and businesses recover their investment in 3–5 years, after which electricity is practically free for the remaining 20+ years of the system life.' },
    { q: 'What is the difference between on-grid, off-grid and hybrid?', a: 'On-grid connects to the utility and uses net metering, with no batteries. Off-grid runs independently with batteries. Hybrid combines both, giving grid savings plus battery backup during outages.' },
    { q: 'How long does installation take?', a: 'A typical residential installation takes 2–5 days after approvals. Commercial and industrial projects range from a few weeks to a couple of months depending on size.' },
    { q: 'What warranty do I get?', a: 'Panels carry up to a 25-year performance warranty; inverters typically 5–10 years, plus our workmanship warranty and support.' },
  ],
}

export const finalCta = {
  title: 'Ready to go solar?',
  text: 'Talk to our experts today and start saving from the very first month.',
}

export const footer = {
  about: 'Eco Friends Solar Solution delivers premium rooftop and ground-mounted solar solutions for homes, businesses and industries across India.',
  serviceLinks: ['Solar Panel', 'On Grid System', 'Off Grid System', 'Hybrid Solar System'],
}
