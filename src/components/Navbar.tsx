import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import appIcon from '../assets/images/AppIcon.png'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          scrolled
            ? 'border-white/10 bg-black/70 shadow-[0_8px_30px_rgba(129,51,255,0.15)]'
            : 'border-white/5 bg-black/30'
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <img src={appIcon} alt="Mars AI" className="h-8 w-8 rounded-[10px]" />
          <span className="font-heading text-lg font-bold tracking-wide text-white">MARS AI</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#download"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          Get the App
        </a>
      </nav>
    </motion.header>
  )
}
