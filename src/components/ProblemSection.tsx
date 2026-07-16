import { motion } from 'framer-motion'
import { Brain, Clock3, FileWarning, Moon } from 'lucide-react'
import CosmicGlow from './CosmicGlow'

const feelings = [
  {
    icon: FileWarning,
    title: 'Overwhelmed by material',
    desc: '200 slides. 3 chapters. One brain. It never feels like enough time to get through it all.',
  },
  {
    icon: Clock3,
    title: 'Hours lost to summarizing',
    desc: 'You spend more time rewriting notes than actually studying them. That math doesn\u2019t work.',
  },
  {
    icon: Moon,
    title: 'Forgetting it by test day',
    desc: 'You read it once, it felt familiar, and then it evaporated the second the exam started.',
  },
  {
    icon: Brain,
    title: 'Wanting the heavy lifting done',
    desc: 'You don\u2019t need another app to manage. You need one that actually does the work with you.',
  },
]

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <CosmicGlow variant="magenta" className="left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 opacity-25" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a6ff]">
            Sound familiar?
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-5xl">
            Yep. You are not alone.
          </h2>
          <p className="mt-4 font-body text-white/55">
            Every student ends up here eventually. The material piles up faster than any human can process
            it. Mars AI was built for exactly this.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {feelings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-[#8133FF]/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8133FF]/25 to-[#310AEF]/15">
                <item.icon size={20} className="text-[#c9a6ff]" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-white/55">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
