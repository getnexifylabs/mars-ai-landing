import { motion, type Variants } from 'framer-motion'
import { Apple, ArrowRight, Sparkles } from 'lucide-react'
import PhoneMockup from './PhoneMockup'
import CosmicGlow from './CosmicGlow'
import planet1 from '../assets/images/planet-1.png'
import planetOrange from '../assets/images/planet-orange.png'
import planetMix from '../assets/images/planet-mix.png'
import star from '../assets/images/star.png'

const easeOutSmooth = [0.22, 0.61, 0.36, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: easeOutSmooth },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <CosmicGlow variant="purple" className="-top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2" />
      <CosmicGlow variant="blue" className="top-40 -right-40 h-[380px] w-[380px]" />

      <motion.img
        src={planetMix}
        alt=""
        aria-hidden="true"
        className="animate-float-slower pointer-events-none absolute -left-6 top-28 w-20 opacity-80 sm:w-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.img
        src={planetOrange}
        alt=""
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute right-2 top-56 w-14 opacity-70 sm:right-10 sm:w-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.img
        src={star}
        alt=""
        aria-hidden="true"
        className="animate-twinkle pointer-events-none absolute left-[12%] top-16 w-6 opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
      />
      <motion.img
        src={planet1}
        alt=""
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute left-[8%] bottom-0 w-16 opacity-60 sm:w-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8133FF]/40 bg-[#8133FF]/10 px-4 py-1.5"
        >
          <Sparkles size={14} className="text-[#c9a6ff]" />
          <span className="font-body text-xs font-medium tracking-wide text-[#e6d9ff]">
            Your AI study companion from Mars
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="font-heading max-w-4xl text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-[4.2rem]"
        >
          Studying shouldn't feel
          <br />
          like a <span className="text-gradient">second job.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-2xl font-body text-base leading-relaxed text-white/60 sm:text-lg"
        >
          Drop in a lecture, a PDF, or a link. Mars AI turns it into notes, flashcards, transcripts, and
          gamified quizzes — in seconds. Less prep. Less panic. More actually learning it.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#download"
            className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-body text-[15px] font-semibold text-black shadow-[0_10px_40px_-8px_rgba(255,255,255,0.35)] transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Apple size={18} className="fill-black" />
            Download for iOS
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-white/15 px-7 py-3.5 font-body text-[15px] font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            See how it works
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-5 font-body text-xs text-white/35"
        >
          Free to start · No credit card required · Built for iPhone
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-16"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}
