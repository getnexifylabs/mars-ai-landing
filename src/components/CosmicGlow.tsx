interface CosmicGlowProps {
  className?: string
  variant?: 'purple' | 'blue' | 'gold' | 'magenta'
}

const variants: Record<string, string> = {
  purple: 'from-[#310AEF] via-[#8133FF]/60 to-transparent',
  blue: 'from-[#5C8DFF] via-[#310AEF]/50 to-transparent',
  gold: 'from-[#FABA0E] via-[#FF9E40]/40 to-transparent',
  magenta: 'from-[#D258BE] via-[#8133FF]/50 to-transparent',
}

/** Soft radial nebula blur used behind section content, echoing the app's "cosmic dust". */
export default function CosmicGlow({ className = '', variant = 'purple' }: CosmicGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-gradient-to-br ${variants[variant]} opacity-40 blur-[90px] ${className}`}
    />
  )
}
