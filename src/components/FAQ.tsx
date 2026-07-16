import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'What can I actually upload?',
    a: 'Pretty much anything you study from — recorded or live lectures, audio files, PDFs and documents, pasted notes, and web links. Mars turns all of it into structured study material.',
  },
  {
    q: 'Is Mars AI free?',
    a: 'Yes — download it and start creating study sets for free. Mars AI Pro unlocks unlimited generations and advanced features if you want to go further.',
  },
  {
    q: 'Will this actually help me remember more, or just save time?',
    a: 'Both. The gamified quizzes and Learning Journeys are built around spaced repetition and active recall — the same principles behind real memory retention, just less boring.',
  },
  {
    q: 'Is it ok to use for class?',
    a: 'Mars AI helps you learn and capture key details faster — it\u2019s not a shortcut around doing the work. As long as your school allows recording lectures, you\u2019re good to go.',
  },
  {
    q: 'What devices does it work on?',
    a: 'Mars AI is currently built for iPhone, with your study sets synced securely to your account.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a6ff]">
            Questions
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-5xl">
            Frequently asked
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-[15px] font-semibold text-white">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8"
                  >
                    <Plus size={15} className="text-white" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 font-body text-sm leading-relaxed text-white/55">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
