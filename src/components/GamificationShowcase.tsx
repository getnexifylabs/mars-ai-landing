import { motion } from 'framer-motion'
import { Flame, Trophy, Zap } from 'lucide-react'
import CountUp from './CountUp'
import CosmicGlow from './CosmicGlow'
import planetPurple from '../assets/images/planet-purple.png'
import planetYellow from '../assets/images/planet-yellow.png'
import planetMix from '../assets/images/planet-mix.png'
import badge2 from '../assets/images/badge-2.png'
import badge3 from '../assets/images/badge-3.png'
import badge4 from '../assets/images/badge-4.png'
import star from '../assets/images/star.png'

const perks = [
  {
    icon: Flame,
    title: 'Streaks that stick',
    desc: 'Show up daily and watch your streak grow. Momentum is the whole game.',
  },
  {
    icon: Zap,
    title: 'Light Points for progress',
    desc: 'Every note, flashcard, and quiz earns points — turning studying into a habit you want to keep.',
  },
  {
    icon: Trophy,
    title: 'Badges & achievements',
    desc: 'Unlock milestones as you go. Small wins that make studying feel like leveling up.',
  },
]

export default function GamificationShowcase() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <CosmicGlow variant="gold" className="left-0 top-20 h-[380px] w-[380px] opacity-25" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#FABA0E]">
            Studying, gamified
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-5xl">
            Made to keep you
            <br /> coming back.
          </h2>
          <p className="mt-5 max-w-md font-body text-white/55">
            Reminders make you 3× more likely to actually show up. Mars turns every study session into a
            small win — so the streak, not the syllabus, is what keeps you going.
          </p>

          <div className="mt-10 space-y-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FABA0E]/20 to-transparent border border-[#FABA0E]/25">
                  <perk.icon size={18} className="text-[#FABA0E]" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white">{perk.title}</h3>
                  <p className="mt-1 font-body text-sm text-white/50">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#120a1f] to-[#050308] p-8 shadow-[0_40px_100px_-30px_rgba(129,51,255,0.5)] sm:p-10">
            <img src={star} alt="" className="animate-twinkle absolute right-8 top-8 w-4 opacity-80" />
            <img src={star} alt="" className="animate-twinkle absolute left-10 top-16 w-3 opacity-60" style={{ animationDelay: '1.2s' }} />

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-heading text-3xl font-bold text-white sm:text-4xl">
                  <CountUp to={21} />
                </p>
                <p className="mt-1 font-body text-xs text-white/45">day journeys</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-white sm:text-4xl">
                  <CountUp to={8} />
                </p>
                <p className="mt-1 font-body text-xs text-white/45">study tools</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-white sm:text-4xl">
                  <CountUp to={3} suffix="×" />
                </p>
                <p className="mt-1 font-body text-xs text-white/45">more consistent</p>
              </div>
            </div>

            <div className="relative mt-10 flex h-40 items-center justify-between px-2">
              <div className="absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 bg-white/10" />
              {[planetPurple, planetYellow, planetMix].map((p, i) => (
                <motion.img
                  key={i}
                  src={p}
                  alt=""
                  className="relative z-10 w-14 sm:w-16"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              {[badge2, badge3, badge4].map((b, i) => (
                <motion.img
                  key={i}
                  src={b}
                  alt="Achievement badge"
                  className="w-11 opacity-90 sm:w-12"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
