import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import recordLecture from '../assets/screenshots/record-lecture.png'
import lectureOutput from '../assets/screenshots/lecture-output.png'
import flashcards from '../assets/screenshots/flashcards.png'
import quiz from '../assets/screenshots/quiz.png'
import achievements from '../assets/screenshots/achievements.png'

const screens = [
  { key: 'record', src: recordLecture, label: 'Record lectures' },
  { key: 'output', src: lectureOutput, label: 'Instant notes & journeys' },
  { key: 'flashcards', src: flashcards, label: 'Smart flashcards' },
  { key: 'quiz', src: quiz, label: 'Gamified quizzes' },
  { key: 'achievements', src: achievements, label: 'Streaks & rewards' },
]

export default function PhoneMockup() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % screens.length), 3800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      <div className="relative rounded-[42px] border-[6px] border-[#1c1c22] bg-[#050505] p-2 shadow-[0_40px_100px_-20px_rgba(129,51,255,0.45)]">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#050505]" />
        <div className="relative h-[540px] overflow-hidden rounded-[34px] bg-black sm:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={screens[index].key}
              src={screens[index].src}
              alt={screens[index].label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        {screens.map((s, i) => (
          <button
            key={s.key}
            aria-label={s.label}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/25'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
