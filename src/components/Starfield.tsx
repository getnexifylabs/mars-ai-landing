import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  r: number
  speed: number
  twinklePhase: number
}

/**
 * Canvas starfield with a slow parallax drift + twinkle, matching the
 * cosmic-dust look used throughout the Mars AI app's onboarding screens.
 */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let stars: Star[] = []
    let width = 0
    let height = 0
    let raf = 0
    let t = 0

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)

      const count = Math.round((width * height) / 6000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        speed: Math.random() * 0.015 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
      }))
    }

    const draw = () => {
      t += 1
      ctx.clearRect(0, 0, width, height)
      for (const star of stars) {
        star.y += star.speed
        if (star.y > height) star.y = 0
        const twinkle = 0.5 + 0.5 * Math.sin(t * 0.02 + star.twinklePhase)
        ctx.globalAlpha = 0.25 + twinkle * 0.75
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  )
}
