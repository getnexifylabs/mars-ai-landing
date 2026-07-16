import { motion } from 'framer-motion'
import { FileUp, Rocket, Sparkles } from 'lucide-react'
import CosmicGlow from './CosmicGlow'

const steps = [
  {
    icon: FileUp,
    number: '01',
    title: 'Drop in anything',
    desc: 'Record a lecture, upload a PDF or audio file, paste your notes, or drop a link. Mars takes it from there.',
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'AI does the heavy lifting',
    desc: 'In seconds, Mars generates notes, a full transcript, flashcards, and a quiz — tailored to your material.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Study like it\u2019s a game',
    desc: 'Work through gamified Learning Journeys, earn Light Points, keep your streak alive, and actually retain it.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24 sm:py-32">
      <CosmicGlow variant="blue" className="right-1/2 top-10 h-[400px] w-[400px] translate-x-1/2 opacity-25" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a6ff]">
            From chaos to clarity
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-5xl">
            Liftoff in three steps
          </h2>
        </motion.div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent sm:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#8133FF]/40 bg-gradient-to-br from-[#1a1030] to-[#0c0714] shadow-[0_0_40px_-8px_rgba(129,51,255,0.6)]">
                <step.icon size={26} className="text-[#c9a6ff]" />
              </div>
              <span className="mt-5 font-heading text-xs font-bold tracking-widest text-white/30">
                STEP {step.number}
              </span>
              <h3 className="font-heading mt-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-white/55">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
