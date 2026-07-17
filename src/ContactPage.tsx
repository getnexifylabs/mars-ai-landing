import appIcon from './assets/images/AppIcon.png'
import Starfield from './components/Starfield'
import { SUPPORT_EMAIL } from './links'

const EMAIL = 'getmarsai@gmail.com'

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <Starfield />
      <div className="relative z-10">
        <header className="border-b border-white/8">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
            <a href="../" className="flex items-center gap-2">
              <img src={appIcon} alt="Mars AI" className="h-7 w-7 rounded-[8px]" />
              <span className="font-heading text-sm font-bold tracking-wide text-white">MARS AI</span>
            </a>
            <a href="../" className="font-body text-sm text-white/50 transition-colors hover:text-white">
              Back to home
            </a>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
          <p className="font-body text-xs font-medium tracking-[0.14em] text-mars-blue uppercase">
            Get in touch
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact
          </h1>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-white/55">
            Need help with the app, found a bug, or have an idea for a feature? We read every
            message — drop us a line and we’ll get back to you as soon as we can.
          </p>

          <ul className="mt-10 space-y-3 font-body text-[15px] leading-relaxed text-white/65">
            <li>Support & troubleshooting</li>
            <li>Feature suggestions</li>
            <li>Privacy or account requests</li>
            <li>Partnerships & press</li>
          </ul>

          <p className="mt-10 font-body text-sm text-white/40">
            Email us at{' '}
            <a href={SUPPORT_EMAIL} className="text-mars-blue hover:underline">
              {EMAIL}
            </a>
          </p>

          <a
            href={SUPPORT_EMAIL}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-body text-sm font-semibold text-black transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Send us an email
          </a>
        </main>

        <footer className="border-t border-white/8 py-10">
          <p className="text-center font-body text-xs text-white/35">
            © {new Date().getFullYear()} Mars AI
          </p>
        </footer>
      </div>
    </div>
  )
}
