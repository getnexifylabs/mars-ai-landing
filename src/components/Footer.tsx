import appIcon from '../assets/images/AppIcon.png'
import { PRIVACY_URL, SUPPORT_EMAIL, TERMS_URL } from '../links'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <img src={appIcon} alt="Mars AI" className="h-7 w-7 rounded-[8px]" />
          <span className="font-heading text-sm font-bold tracking-wide text-white">MARS AI</span>
        </div>

        <p className="font-body text-xs text-white/35">
          © {new Date().getFullYear()} Mars AI. Built for students who are done falling behind.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 font-body text-xs text-white/45">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <a href={PRIVACY_URL} target="_blank" rel="noreferrer" className="hover:text-white">
            Privacy
          </a>
          <a href={TERMS_URL} target="_blank" rel="noreferrer" className="hover:text-white">
            Terms
          </a>
          <a href={SUPPORT_EMAIL} className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
