import { motion } from 'framer-motion'

// Fade + slide-in on scroll
export default function Reveal({ children, delay = 0, y = 24, className = '', ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
