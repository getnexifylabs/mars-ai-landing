import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const reviews = [
  {
    quote:
      'Mars turned my lecture notes into flashcards in minutes. I actually look forward to studying now.',
    name: 'Jordan M.',
    detail: 'Biology major',
  },
  {
    quote:
      'As someone with ADHD, the gamified quizzes keep me locked in without feeling overwhelming. Bubu makes it fun.',
    name: 'Maya R.',
    detail: 'Design student',
  },
  {
    quote: 'Recording lectures and getting instant transcripts honestly saved my GPA this semester.',
    name: 'Chris L.',
    detail: 'Business sophomore',
  },
  {
    quote:
      'I used to dread study sessions. Mars breaks everything into bite-size wins that work with my brain, not against it.',
    name: 'Sam T.',
    detail: 'Computer science',
  },
  {
    quote: 'The AI chat with my notes feels like having a tutor on demand. Easily one of my most-used apps.',
    name: 'Priya K.',
    detail: 'Pre-law junior',
  },
]

function Card({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="mx-3 flex w-[300px] shrink-0 flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6">
      <Quote size={20} className="mb-3 text-[#8133FF]" />
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} className="fill-[#FABA0E] text-[#FABA0E]" />
        ))}
      </div>
      <p className="font-body text-sm leading-relaxed text-white/75">{review.quote}</p>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#8133FF] to-[#310AEF] font-heading text-xs font-bold text-white">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-body text-xs font-semibold text-white">{review.name}</p>
          <p className="font-body text-[11px] text-white/40">{review.detail}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const loop = [...reviews, ...reviews]

  return (
    <section id="reviews" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a6ff]">
            Loved by students
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-5xl">
            Studying smarter, not harder
          </h2>
        </motion.div>
      </div>

      <div className="mask-fade-x relative mt-14 flex overflow-hidden">
        <div className="animate-marquee flex w-max">
          {loop.map((r, i) => (
            <Card key={`${r.name}-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
