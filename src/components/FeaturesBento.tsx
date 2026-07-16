import { motion } from 'framer-motion'
import { AudioLines, BookOpen, Gamepad2, Layers, MessageCircle, Mic, ScrollText, Target } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Record lectures',
    desc: 'One tap and Mars is listening. No more scrambling to keep up with what\u2019s being said.',
    span: 'sm:col-span-2',
    accent: 'from-[#5C8DFF]/20 to-transparent',
  },
  {
    icon: ScrollText,
    title: 'Instant notes',
    desc: 'Clean, structured notes generated the moment you upload — organized the way you\u2019d wish you had time to.',
    span: '',
    accent: 'from-[#8133FF]/25 to-transparent',
  },
  {
    icon: Layers,
    title: 'Smart flashcards',
    desc: 'Auto-built decks that target what you\u2019re actually going to be tested on.',
    span: '',
    accent: 'from-[#D258BE]/20 to-transparent',
  },
  {
    icon: AudioLines,
    title: 'Transcripts',
    desc: 'Every word, searchable. Jump straight to the part of the lecture that matters.',
    span: '',
    accent: 'from-[#48FF76]/15 to-transparent',
  },
  {
    icon: Gamepad2,
    title: 'Gamified quizzes',
    desc: 'Bite-size Learning Journeys that turn review sessions into something you actually want to finish.',
    span: 'sm:col-span-2',
    accent: 'from-[#FABA0E]/20 to-transparent',
  },
  {
    icon: Target,
    title: 'Test Mode',
    desc: 'Simulate the real exam before it happens, so test day feels like déjà vu.',
    span: '',
    accent: 'from-[#FF9E40]/20 to-transparent',
  },
  {
    icon: MessageCircle,
    title: 'Chat with your lectures',
    desc: 'Ask a question, get an answer pulled straight from your own material — like a tutor that read everything.',
    span: '',
    accent: 'from-[#5C8DFF]/20 to-transparent',
  },
  {
    icon: BookOpen,
    title: 'Learning Journeys',
    desc: 'Long lectures broken into a map of small wins, so progress always feels visible.',
    span: 'sm:col-span-2',
    accent: 'from-[#8133FF]/25 to-transparent',
  },
]

export default function FeaturesBento() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a6ff]">
            Everything, in one place
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-5xl">
            Instant study tools for
            <br className="hidden sm:block" /> whatever gets thrown at you.
          </h2>
          <p className="mt-4 font-body text-white/55">
            Turn any lecture, PDF, or video into the exact study materials you need — no manual work, no
            missed deadlines.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0c0c0e] p-6 transition-colors duration-300 hover:border-white/20 ${f.span}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <f.icon size={20} className="text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-white/50">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
