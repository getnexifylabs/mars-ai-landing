import { motion } from 'framer-motion'
import { Apple } from 'lucide-react'
import CosmicGlow from './CosmicGlow'
import planetPurple from '../assets/images/planet-purple.png'
import star from '../assets/images/star.png'
import { APP_STORE_URL } from '../links'

export default function FinalCTA() {
  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-32">
      <CosmicGlow variant="purple" className="left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.img
          src={planetPurple}
          alt=""
          aria-hidden="true"
          className="animate-float-slow mx-auto mb-8 w-20"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        <motion.img
          src={star}
          alt=""
          aria-hidden="true"
          className="animate-twinkle absolute left-[18%] top-6 w-5"
        />
        <motion.img
          src={star}
          alt=""
          aria-hidden="true"
          className="animate-twinkle absolute right-[16%] top-16 w-4"
          style={{ animationDelay: '1s' }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl font-bold text-white sm:text-5xl"
        >
          You're ready for <span className="text-gradient">liftoff.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-md font-body text-white/55"
        >
          The next study session doesn't have to feel like the last one. Download Mars AI and let the AI
          handle the busywork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex justify-center"
        >
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-base font-semibold text-black shadow-[0_10px_50px_-8px_rgba(255,255,255,0.4)] transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Apple size={20} className="fill-black" />
            Download on the App Store
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 font-body text-xs text-white/35"
        >
          🪐 Free to download · No credit card required
        </motion.p>
      </div>
    </section>
  )
}
