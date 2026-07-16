import type { ReactNode } from 'react'
import appIcon from './assets/images/AppIcon.png'
import Starfield from './components/Starfield'

const SUPPORT = 'getmarsai@gmail.com'
const MAILTO = `mailto:${SUPPORT}`

export default function TermsPage() {
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
            Legal
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-white/55">
            These Terms of Service (“Terms”) govern your access to and use of the Mars AI mobile
            application, website, related products, features, content, and services (collectively,
            the “Service”).
          </p>
          <p className="mt-6 font-body text-sm text-white/40">
            Last updated: July 16, 2026 · Effective: July 16, 2026 · Contact:{' '}
            <a href={MAILTO} className="text-mars-blue hover:underline">
              {SUPPORT}
            </a>
          </p>

          <div className="mt-8 space-y-2 font-body text-sm leading-relaxed text-white/50">
            <p>
              <strong className="text-white/70">Operator:</strong> Nexify Labs LLC, doing business as
              “Mars AI” / “Mars” (“Company,” “we,” “us,” or “our”)
            </p>
            <p>
              <strong className="text-white/70">Address:</strong> 8401 Mayland Dr Ste A, Richmond, VA
              23294-4648, USA
            </p>
            <p>
              <strong className="text-white/70">Website:</strong>{' '}
              <a href="https://getmars.app" className="text-mars-blue hover:underline">
                https://getmars.app
              </a>
            </p>
            <p>
              <strong className="text-white/70">App:</strong> Mars AI (iOS), available via the Apple
              App Store
            </p>
          </div>

          <p className="mt-8 rounded-lg border-l-2 border-mars-accent/60 bg-white/[0.03] py-3 pl-4 font-body text-sm leading-relaxed text-white/60">
            BY DOWNLOADING, ACCESSING, CREATING AN ACCOUNT FOR, OR USING THE SERVICE, YOU AGREE TO
            BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE, DO NOT USE THE SERVICE.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-white/55">
            If you are accepting these Terms on behalf of another person (including a minor for whom
            you are a parent or legal guardian), you represent that you have authority to bind that
            person, and “you” includes that person.
          </p>

          <div className="mt-14 space-y-12 font-body text-[15px] leading-relaxed text-white/65">
            <Section title="1. Agreement to Terms; Related Policies">
              <p>1.1 These Terms form a legally binding agreement between you and the Company.</p>
              <p>
                1.2 Our Privacy Policy at{' '}
                <a href="../privacy/" className="text-mars-blue hover:underline">
                  https://getmars.app/privacy
                </a>{' '}
                is incorporated by reference. If there is a conflict between these Terms and the
                Privacy Policy regarding personal data processing, the Privacy Policy controls for
                privacy matters; these Terms control for all other matters.
              </p>
              <p>
                1.3 Additional terms may apply to specific features (promotions, referral codes, beta
                features). Those terms are incorporated by reference when presented.
              </p>
              <p>
                1.4 Clickwrap / Assent. Creating an account, tapping “Continue,” “Sign in,” “Get
                Started,” “Subscribe,” “I Agree,” or similarly using the Service after notice of
                these Terms constitutes acceptance.
              </p>
            </Section>

            <Section title="2. Eligibility; Age; Parental Consent">
              <p>
                2.1 Minimum Age. You must be at least 13 years of age (or the higher age of digital
                consent in your country, if applicable) to create an account or use the Service.
              </p>
              <p>
                2.2 Under 18 / Minors. If you are under 18 (or the age of majority where you live),
                you may use the Service only with the consent and supervision of a parent or legal
                guardian who agrees to these Terms on your behalf and is responsible for your use,
                including any purchases.
              </p>
              <p>
                2.3 Parental Responsibility. Parents/guardians who allow a minor to use the Service:
                (a) consent to the minor’s use; (b) accept these Terms; (c) are responsible for the
                minor’s activity, User Content, and fees; and (d) agree to supervise use of
                recording, uploads, AI features, and subscriptions.
              </p>
              <p>
                2.4 Not Directed to Children Under 13. The Service is not intended for children under
                13. We do not knowingly collect personal information from children under 13. If we
                learn we have, we will delete it as required by law (including COPPA in the United
                States). Contact{' '}
                <a href={MAILTO} className="text-mars-blue hover:underline">
                  {SUPPORT}
                </a>{' '}
                to report such collection.
              </p>
              <p>
                2.5 Student Use. The Service is designed for students (including high school). You
                remain solely responsible for complying with your school’s policies, academic
                integrity rules, and applicable laws when using the Service for coursework.
              </p>
              <p>
                2.6 We may refuse, suspend, or terminate access if we believe age, consent, or
                eligibility requirements are not met.
              </p>
            </Section>

            <Section title="3. The Service; Nature of the Product">
              <p>
                3.1 Mars AI is an AI-assisted study tool. Features may include (and may change over
                time):
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Recording or uploading audio (e.g., lectures)</li>
                <li>Uploading or providing documents (e.g., PDFs), text, and web links</li>
                <li>
                  Transcription, note generation, flashcards, quizzes / “Learning Journeys,” test
                  modes, and chat with an AI tutor persona (“Bubu”)
                </li>
                <li>
                  Study sets, progress tracking, streaks, points, badges, reminders, and related
                  gamification
                </li>
                <li>Account sync of certain study data across devices</li>
                <li>Subscriptions, promotional access, and related account features</li>
              </ul>
              <p>
                3.2 Not Educational Institution / Not Accredited. We are not a school, university,
                exam board, or accredited educational institution. Use of the Service does not confer
                credit, degrees, certifications, or academic standing.
              </p>
              <p>
                3.3 No Academic Advice Guarantee. The Service does not guarantee improved grades,
                exam results, admissions outcomes, or learning outcomes.
              </p>
              <p>
                3.4 We may modify, suspend, or discontinue any feature at any time, with or without
                notice, to the extent permitted by law. We have no obligation to provide any
                particular feature indefinitely.
              </p>
              <p>
                3.5 Beta / Experimental Features. Some features may be labeled beta, preview, or
                experimental and may be unstable, incomplete, or withdrawn without liability.
              </p>
            </Section>

            <Section title="4. Accounts; Authentication; Security">
              <p>
                4.1 You may need an account to use core features. Authentication may include Sign in
                with Apple, Google Sign-In, or other methods we offer.
              </p>
              <p>4.2 You agree to provide accurate information and keep it updated.</p>
              <p>
                4.3 You are responsible for activity under your account and for safeguarding
                credentials and devices. Notify us promptly at{' '}
                <a href={MAILTO} className="text-mars-blue hover:underline">
                  {SUPPORT}
                </a>{' '}
                of unauthorized access.
              </p>
              <p>
                4.4 You may not: (a) share accounts except as expressly allowed (e.g., Apple Family
                Sharing where applicable to App Store purchases); (b) create accounts by automated
                means; (c) impersonate others; or (d) use another person’s account without
                permission.
              </p>
              <p>
                4.5 Account Deletion. You may delete your account through in-app settings (where
                available) or by contacting{' '}
                <a href={MAILTO} className="text-mars-blue hover:underline">
                  {SUPPORT}
                </a>
                . Deletion may remove synced study data associated with your account, subject to
                legal retention needs, backups, and our Privacy Policy. Local files on your device
                may need to be deleted by you.
              </p>
              <p>
                4.6 We may reclaim usernames, disable accounts, or require re-verification for
                security, abuse prevention, or legal compliance.
              </p>
            </Section>

            <Section title="5. User Content; License to Us; Your Responsibilities">
              <p>
                5.1 “User Content” means anything you submit, upload, record, paste, link to, or
                otherwise provide to the Service, including audio recordings, transcripts you cause
                to be created, PDFs, text, URLs/web content you fetch, chat messages,
                profile/onboarding information, and feedback.
              </p>
              <p>
                5.2 Your Ownership. As between you and us, you retain ownership of your User Content,
                subject to the licenses below and rights of third parties (e.g., copyrighted lecture
                materials, textbooks, professors’ slides).
              </p>
              <p>
                5.3 License You Grant Us. You grant the Company a worldwide, non-exclusive,
                royalty-free, transferable, sublicensable license to host, store, reproduce,
                process, adapt, modify, create derivative works from (including AI outputs based on
                your inputs), transmit, display, and otherwise use User Content solely as needed to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>provide, maintain, secure, and improve the Service;</li>
                <li>generate AI Outputs (defined below);</li>
                <li>sync and back up account data;</li>
                <li>prevent abuse, enforce these Terms, and comply with law;</li>
                <li>as otherwise described in the Privacy Policy.</li>
              </ul>
              <p>5.4 Your Representations. You represent and warrant that:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  you own or have all rights and permissions necessary to provide User Content and
                  grant the licenses herein;
                </li>
                <li>
                  your User Content and use of the Service do not violate law, third-party rights
                  (including privacy, publicity, copyright, trademark), school policies, or these
                  Terms;
                </li>
                <li>
                  if User Content includes others’ personal data or recordings of others, you have
                  obtained all required consents (and, where required, parental consents);
                </li>
                <li>
                  you will not upload content you are not authorized to process with third-party AI
                  providers.
                </li>
              </ul>
              <p>
                5.5 Recording Consent. You are solely responsible for complying with all recording
                and wiretapping laws (one-party vs. all-party consent jurisdictions). Do not record
                classes, conversations, or individuals without required consent. We are not liable
                for your unlawful recordings.
              </p>
              <p>
                5.6 Academic Integrity. You are solely responsible for using the Service in
                accordance with academic honesty rules. Do not use the Service to cheat on exams,
                submit AI-generated work as your own where prohibited, or otherwise commit academic
                misconduct.
              </p>
              <p>
                5.7 We do not claim ownership of your original course materials; however, you are
                responsible for any infringement claims arising from User Content you provide.
              </p>
              <p>
                5.8 We may remove or disable User Content that we believe violates these Terms or
                law, without liability.
              </p>
            </Section>

            <Section title="6. AI Features; AI Outputs; Critical Disclaimers">
              <p>
                6.1 AI Processing. The Service uses artificial intelligence and machine learning
                systems, which may include third-party providers (for example, transcription and
                large language model providers). User Content you submit for AI features may be
                transmitted to such providers to generate results. See our Privacy Policy for
                details.
              </p>
              <p>
                6.2 “AI Outputs” means notes, transcripts, summaries, flashcards, quiz questions,
                chat responses, recommendations, and any other content generated by or with AI
                features.
              </p>
              <p>
                6.3 AI IS IMPERFECT. AI Outputs may be inaccurate, incomplete, outdated, biased,
                offensive, plagiarized-looking, hallucinated, or otherwise unreliable. You must
                independently verify all AI Outputs before relying on them for studying, exams,
                professional decisions, or any other purpose.
              </p>
              <p>
                6.4 NO PROFESSIONAL ADVICE. The Service and AI Outputs are for general informational
                and study-assistance purposes only. They do not constitute educational counseling,
                legal, medical, mental health, financial, or other professional advice.
              </p>
              <p>
                6.5 NO LIABILITY FOR RELIANCE. To the maximum extent permitted by law, you assume all
                risk arising from your use of or reliance on AI Outputs. We disclaim liability for
                grades, exam performance, academic discipline, lost opportunities, or other
                consequences of reliance on AI Outputs.
              </p>
              <p>
                6.6 Similarity of Outputs. AI Outputs generated for you may be similar or identical
                to outputs generated for other users. We do not guarantee uniqueness or exclusivity
                of AI Outputs.
              </p>
              <p>
                6.7 Model Training. Unless we state otherwise in the Privacy Policy or obtain
                separate consent required by law, we do not claim a right under these Terms to use
                your User Content to train our own foundation models. Third-party AI providers
                process data under their own terms and policies; we do not control those providers’
                independent practices beyond our contractual arrangements with them. Review the
                Privacy Policy for current practices.
              </p>
              <p>
                6.8 EU AI Act / Transparency. Where required by applicable law, we disclose that you
                are interacting with an AI system. AI Outputs are machine-generated and may require
                human review.
              </p>
              <p>
                6.9 Export / Portability of Study Materials. You may export certain notes or
                flashcards where the product allows. We do not guarantee perpetual export formats or
                uninterrupted access after account closure, except as required by law.
              </p>
            </Section>

            <Section title="7. Intellectual Property; License to Use the App">
              <p>
                7.1 Our IP. The Service, including software, UI, branding, logos, mascots (including
                “Bubu”), designs, text, graphics, gamification systems, prompts, templates, and
                documentation (excluding User Content and excluding third-party materials), are owned
                by the Company or its licensors and protected by intellectual property laws.
              </p>
              <p>
                7.2 Limited License. Subject to these Terms, we grant you a limited, revocable,
                non-exclusive, non-transferable, non-sublicensable license to download and use the
                Mars AI app on Apple-branded products you own or control, as permitted by the Apple
                Media Services Terms and Conditions and any applicable Family Sharing or volume
                purchasing rules.
              </p>
              <p>7.3 You may not (except as allowed by law that cannot be waived):</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  copy, modify, distribute, sell, lease, reverse engineer, decompile, or create
                  derivative works of the Service;
                </li>
                <li>remove proprietary notices;</li>
                <li>use our trademarks without prior written consent;</li>
                <li>
                  scrape, crawl, or systematically extract data except via features we expressly
                  provide;
                </li>
                <li>
                  use the Service to build a competing product using our non-public materials or
                  proprietary prompts at scale.
                </li>
              </ul>
              <p>
                7.4 Feedback. If you send ideas, suggestions, or feedback, you grant us a perpetual,
                irrevocable, worldwide, royalty-free license to use them without restriction or
                compensation.
              </p>
            </Section>

            <Section title="8. Subscriptions; In-App Purchases; Billing (Apple)">
              <p>
                8.1 Certain features require a paid subscription (e.g., “Mars AI Pro” / “Mars Pro”) or
                other in-app purchase (“Paid Features”).
              </p>
              <p>
                8.2 Apple Billing. Purchases made through the Apple App Store are processed by Apple.
                Payment will be charged to your Apple ID account. Your relationship regarding payment
                processing, taxes charged by Apple, refunds processed by Apple, and App Store account
                settings is also governed by Apple’s terms.
              </p>
              <p>
                8.3 Auto-Renewal. Subscriptions automatically renew unless canceled at least 24 hours
                before the end of the current period (or as otherwise required by Apple/local law).
                Your account will be charged for renewal within 24 hours prior to the end of the
                current period.
              </p>
              <p>
                8.4 Trials. If a free trial is offered, unused trial time may be forfeited when you
                purchase a subscription, as disclosed at purchase. Trial eligibility may be limited
                (e.g., one trial per Apple ID).
              </p>
              <p>
                8.5 Pricing. Prices are shown in-app / App Store listing and may vary by region,
                currency, taxes, promotions, and over time. We may change prices prospectively as
                permitted by Apple and law.
              </p>
              <p>
                8.6 Manage / Cancel. Manage or cancel subscriptions in your Apple ID account
                settings: Settings → [Your Name] → Subscriptions (or the then-current Apple path).
                Deleting the app does not cancel a subscription.
              </p>
              <p>
                8.7 Restore Purchases. Use in-app “Restore Purchases” where available. Restores
                depend on your Apple ID and Apple’s systems.
              </p>
              <p>
                8.8 Refunds. For App Store purchases, refund requests are generally handled by Apple
                under Apple’s refund policies. We do not control Apple’s refund decisions. Where
                local consumer law requires us to provide a refund or withdrawal right independently,
                that law prevails.
              </p>
              <p>
                8.9 No Family Sharing of Subscription Entitlement (unless enabled). Unless Apple
                Family Sharing is enabled for a specific product, Paid Features may not be shared
                across family members.
              </p>
              <p>
                8.10 Promotional / Referral Access. We may offer complimentary or promotional access
                via referral/promo codes (e.g., codes that unlock access without an active StoreKit
                subscription). Such access is discretionary, may be revoked for abuse or error, is
                non-transferable, has no cash value, and does not create ongoing entitlement beyond
                what we expressly grant.
              </p>
              <p>
                8.11 Taxes. You are responsible for any taxes not collected by Apple or us, to the
                extent allowed by law.
              </p>
              <p>8.12 Failure to pay may result in suspension of Paid Features.</p>
            </Section>

            <Section title="9. Acceptable Use">
              <p>You agree not to, and not to assist others to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>9.1 Violate any law, regulation, or third-party right;</li>
                <li>
                  9.2 Upload malware, attempt unauthorized access, probe, scan, or disrupt the
                  Service or related systems;
                </li>
                <li>
                  9.3 Bypass technical or paywall restrictions, abuse promo codes, or exploit bugs
                  for unauthorized free access;
                </li>
                <li>
                  9.4 Use the Service to generate or distribute illegal, harmful, hateful,
                  harassing, exploitative, or sexually explicit content involving minors, or any
                  content that facilitates wrongdoing;
                </li>
                <li>9.5 Impersonate any person or misrepresent affiliation;</li>
                <li>
                  9.6 Use automated bots/scripts to access the Service except ordinary browser/OS
                  accessibility tools;
                </li>
                <li>9.7 Overload infrastructure or engage in denial-of-service activity;</li>
                <li>
                  9.8 Use the Service to infringe copyright or other IP (including uploading
                  copyrighted course materials you lack rights to process);
                </li>
                <li>9.9 Harvest personal data of others without legal basis/consent;</li>
                <li>
                  9.10 Use AI Outputs to provide regulated professional services without required
                  qualifications and disclaimers;
                </li>
                <li>
                  9.11 Misuse notifications, spam invites, or engage in fraudulent referral
                  activity;
                </li>
                <li>
                  9.12 Use the Service if you are prohibited under export/sanctions laws (see Section
                  19).
                </li>
              </ul>
              <p>We may investigate violations and cooperate with law enforcement.</p>
            </Section>

            <Section title="10. Third-Party Services and Links">
              <p>
                10.1 The Service depends on third parties, which may include (without limitation):
                Apple, Google (identity), cloud/backend providers, analytics providers, paywall
                providers, and AI/transcription providers. Their terms and privacy policies apply to
                their services.
              </p>
              <p>
                10.2 We are not responsible for third-party websites, SDKs, outages, policy changes,
                or data handling beyond our contractual and legal obligations.
              </p>
              <p>
                10.3 You must comply with applicable third-party terms when using the Service
                (including wireless carrier terms and Apple/Google account terms).
              </p>
            </Section>

            <Section title="11. Privacy; Data Security">
              <p>
                11.1 Our collection and use of personal data is described in the Privacy Policy.
              </p>
              <p>
                11.2 We implement reasonable administrative, technical, and organizational measures
                designed to protect data. No method of transmission or storage is 100% secure. You
                use the Service at your own risk regarding residual security risk.
              </p>
              <p>
                11.3 Certain media files (e.g., original audio/PDF binaries) may remain primarily
                on-device while derived study content syncs to our servers; practices may change—see
                the Privacy Policy for current details.
              </p>
              <p>
                11.4 International users: your data may be processed in the United States and other
                countries where we or our processors operate. Where required, we use appropriate
                transfer mechanisms as described in the Privacy Policy.
              </p>
            </Section>

            <Section title="12. Copyright / DMCA">
              <p>
                If you believe content on the Service infringes your copyright, send a notice to{' '}
                <a href={MAILTO} className="text-mars-blue hover:underline">
                  {SUPPORT}
                </a>{' '}
                with:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>your contact information;</li>
                <li>description of the copyrighted work;</li>
                <li>location of the allegedly infringing material;</li>
                <li>a statement of good-faith belief that use is unauthorized;</li>
                <li>
                  a statement under penalty of perjury that the information is accurate and you are
                  authorized to act;
                </li>
                <li>your physical or electronic signature.</li>
              </ul>
              <p>
                We may remove content and, in appropriate circumstances, terminate repeat infringers’
                accounts (17 U.S.C. § 512 / analogous laws).
              </p>
            </Section>

            <Section title="13. Disclaimers of Warranties">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
              <p>
                13.1 THE SERVICE AND AI OUTPUTS ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT
                WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
                NON-INFRINGEMENT, QUIET ENJOYMENT, ACCURACY, AND COMPLETENESS.
              </p>
              <p>
                13.2 WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR
                FREE OF HARMFUL COMPONENTS, OR THAT DEFECTS WILL BE CORRECTED.
              </p>
              <p>
                13.3 WE DO NOT WARRANT THE ACCURACY OF TRANSCRIPTIONS, NOTES, QUIZZES, FLASHCARDS,
                CHAT RESPONSES, OR ANY AI OUTPUTS.
              </p>
              <p>
                13.4 SOME JURISDICTIONS DO NOT ALLOW CERTAIN DISCLAIMERS; IN SUCH CASES, DISCLAIMERS
                APPLY TO THE FULLEST EXTENT PERMITTED.
              </p>
            </Section>

            <Section title="14. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
              <p>
                14.1 THE COMPANY AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
                PARTNERS, AND LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA,
                GOODWILL, OR BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATED TO THESE TERMS OR THE
                SERVICE, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR
                OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY.
              </p>
              <p>
                14.2 OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE WILL NOT
                EXCEED THE GREATER OF: (A) THE AMOUNTS YOU PAID US (EXCLUDING APP STORE FEES RETAINED
                BY APPLE) FOR THE SERVICE IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) USD $50.
              </p>
              <p>
                14.3 THE LIMITATIONS ABOVE APPLY TO AI OUTPUTS, USER CONTENT LOSS, ACCOUNT ACCESS
                ISSUES, BUGS, OUTAGES, UNAUTHORIZED ACCESS (EXCEPT TO THE EXTENT CAUSED BY OUR
                WILLFUL MISCONDUCT WHERE SUCH LIMITATION IS PROHIBITED), AND THIRD-PARTY PROVIDER
                FAILURES.
              </p>
              <p>
                14.4 CONSUMER LAW SAVINGS. NOTHING IN THESE TERMS EXCLUDES OR LIMITS LIABILITY THAT
                CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW (including liability for
                death/personal injury caused by negligence, fraud, or fraudulent misrepresentation,
                and non-waivable consumer rights in the EU/UK/EEA/Australia and similar
                jurisdictions).
              </p>
              <p>
                14.5 Some jurisdictions do not allow limitation of certain damages; in those
                jurisdictions our liability is limited to the maximum extent permitted.
              </p>
            </Section>

            <Section title="15. Indemnification">
              <p>
                To the maximum extent permitted by law, you will defend, indemnify, and hold harmless
                the Company and its affiliates, officers, directors, employees, and agents from and
                against any claims, damages, losses, liabilities, costs, and expenses (including
                reasonable attorneys’ fees) arising out of or related to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>your User Content;</li>
                <li>your use of the Service or AI Outputs;</li>
                <li>your violation of these Terms or law;</li>
                <li>your infringement of third-party rights;</li>
                <li>recordings made without required consent;</li>
                <li>academic misconduct claims related to your use;</li>
                <li>disputes between you and schools, instructors, or other users.</li>
              </ul>
            </Section>

            <Section title="16. Termination">
              <p>
                16.1 You may stop using the Service at any time and may delete your account as
                provided herein. Subscription cancellations follow Section 8.
              </p>
              <p>
                16.2 We may suspend or terminate your access immediately if you breach these Terms,
                create risk/harm, fail eligibility requirements, or if we discontinue the Service.
              </p>
              <p>
                16.3 Upon termination: your license ends; we may delete or deactivate your account
                data per the Privacy Policy; Sections that by nature should survive (including IP,
                disclaimers, liability limits, indemnity, dispute resolution, Apple-required terms)
                survive.
              </p>
            </Section>

            <Section title="17. Dispute Resolution; Arbitration; Class Action Waiver (U.S.)">
              <p className="rounded-lg border-l-2 border-mars-accent/60 bg-white/[0.03] py-3 pl-4">
                Please read this Section carefully. It affects your legal rights.
              </p>
              <p>
                17.1 Informal Resolution First. Before filing a claim, you agree to contact{' '}
                <a href={MAILTO} className="text-mars-blue hover:underline">
                  {SUPPORT}
                </a>{' '}
                and attempt to resolve the dispute informally for 30 days.
              </p>
              <p>
                17.2 Binding Arbitration. Except for Excluded Claims below, any dispute arising out
                of or relating to these Terms or the Service will be resolved by binding individual
                arbitration administered by the American Arbitration Association (“AAA”) under its
                Consumer Arbitration Rules. The seat of arbitration will be Richmond, Virginia, USA,
                unless you and we agree otherwise or applicable law requires a different location.
                Judgment on the award may be entered in any court with jurisdiction.
              </p>
              <p>
                17.3 Class Action Waiver. YOU AND WE AGREE TO BRING CLAIMS ONLY IN YOUR OR OUR
                INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS,
                CONSOLIDATED, OR REPRESENTATIVE PROCEEDING. THE ARBITRATOR MAY NOT CONSOLIDATE MORE
                THAN ONE PERSON’S CLAIMS.
              </p>
              <p>
                17.4 Excluded Claims. Either party may bring in small claims court eligible claims;
                either party may seek injunctive or other equitable relief in court for IP
                infringement or unauthorized access/misuse of the Service; and claims that cannot be
                arbitrated as a matter of law are excluded.
              </p>
              <p>
                17.5 Opt-Out. You may opt out of arbitration within 30 days of first accepting these
                Terms by emailing{' '}
                <a href={MAILTO} className="text-mars-blue hover:underline">
                  {SUPPORT}
                </a>{' '}
                with subject “Arbitration Opt-Out” and your name, account email/Apple ID email, and a
                clear statement of opt-out. Opt-out does not affect other Terms.
              </p>
              <p>
                17.6 Jury Trial Waiver. TO THE EXTENT PERMITTED BY LAW, YOU AND WE WAIVE ANY RIGHT TO
                A JURY TRIAL FOR CLAIMS SUBJECT TO ARBITRATION OR OTHERWISE COVERED HERE.
              </p>
              <p>
                17.7 Consumers Outside the U.S. If mandatory local consumer law gives you the right
                to bring proceedings in your country of residence or prohibits arbitration/class
                waivers, that law prevails to the extent of conflict. EU/UK consumers may have rights
                to use alternative dispute resolution bodies; this does not limit non-waivable
                rights.
              </p>
            </Section>

            <Section title="18. Governing Law; Venue">
              <p>
                18.1 Except where prohibited by mandatory consumer protection law, these Terms are
                governed by the laws of the Commonwealth of Virginia, USA, without regard to
                conflict-of-law rules.
              </p>
              <p>
                18.2 Subject to Section 17, exclusive venue for permitted court actions will be the
                state or federal courts located in Richmond, Virginia, and you consent to personal
                jurisdiction there, except that consumers entitled by law to sue in their home
                jurisdiction may do so.
              </p>
              <p>
                18.3 The UN Convention on Contracts for the International Sale of Goods does not
                apply.
              </p>
            </Section>

            <Section title="19. Export Controls; Sanctions; Legal Compliance">
              <p>
                19.1 You represent that you are not located in a country subject to a U.S. Government
                embargo or designated as a “terrorist supporting” country, and that you are not
                listed on any U.S. Government list of prohibited or restricted parties.
              </p>
              <p>
                19.2 You will not use, export, or re-export the Service except as authorized by U.S.
                law and the laws of the jurisdiction in which you obtained the Service.
              </p>
            </Section>

            <Section title="20. Region-Specific Terms">
              <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
                20.1 European Economic Area, United Kingdom, and Switzerland
              </h3>
              <p>If you are a consumer resident in the EEA/UK/Switzerland:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Nothing in these Terms limits your mandatory consumer rights under applicable law
                  (including the Consumer Rights Directive and local implementing laws).
                </li>
                <li>
                  For digital content/services, you may have a 14-day withdrawal right for distance
                  contracts, which may be lost if you expressly consent to immediate performance and
                  acknowledge loss of the withdrawal right—App Store purchases are typically
                  administered under Apple’s processes; where Apple’s terms and local law interact,
                  local mandatory law prevails.
                </li>
                <li>
                  Liability limitations do not exclude liability for intent, gross negligence, or
                  other non-excludable liability under local law.
                </li>
                <li>
                  You may have the right to lodge complaints with a local data protection authority
                  regarding personal data (see Privacy Policy).
                </li>
              </ul>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                20.2 California
              </h3>
              <p>
                California residents: under Cal. Civ. Code § 1789.3, you may contact the Complaint
                Assistance Unit of the Division of Consumer Services of the California Department of
                Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, CA
                95834, or by telephone at (800) 952-5210. Additional privacy rights are described in
                the Privacy Policy (CCPA/CPRA).
              </p>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                20.3 Australia
              </h3>
              <p>
                Nothing in these Terms excludes, restricts, or modifies any consumer guarantee,
                right, or remedy under the Australian Consumer Law that cannot be excluded. Where
                permitted, our liability for breach of a non-excludable guarantee is limited to
                resupply of services or payment of the cost of resupply.
              </p>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                20.4 Canada
              </h3>
              <p>
                Certain provinces provide mandatory consumer protections (including Quebec) that
                cannot be waived. Those protections prevail to the extent of conflict. French
                language requirements may apply to Quebec consumers; contact us if you require a
                French version.
              </p>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                20.5 Brazil and Other Jurisdictions
              </h3>
              <p>
                Mandatory local consumer and data protection laws (including LGPD where applicable)
                prevail over conflicting terms to the extent required. See the Privacy Policy for
                data rights.
              </p>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                20.6 Apple App Store / iOS Additional Terms (Required)
              </h3>
              <p>You and the Company acknowledge and agree:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/85">Agreement Between You and Us, Not Apple.</strong>{' '}
                  These Terms are between you and the Company only, not Apple Inc. (“Apple”). The
                  Company, not Apple, is solely responsible for the Licensed Application (Mars AI)
                  and its content. These Terms do not provide usage rules that conflict with the
                  Apple Media Services Terms and Conditions.
                </li>
                <li>
                  <strong className="text-white/85">Scope of License.</strong> The license is limited
                  to a non-transferable license to use Mars AI on Apple-branded products you own or
                  control, as permitted by Apple’s Usage Rules, including Family Sharing/volume
                  purchasing where applicable.
                </li>
                <li>
                  <strong className="text-white/85">Maintenance and Support.</strong> The Company is
                  solely responsible for maintenance and support. Apple has no obligation to furnish
                  maintenance and support.
                </li>
                <li>
                  <strong className="text-white/85">Warranty.</strong> The Company is solely
                  responsible for any product warranties to the extent not effectively disclaimed. If
                  Mars AI fails to conform to any applicable warranty, you may notify Apple, and
                  Apple will refund the purchase price for the app (if any) to you; to the maximum
                  extent permitted by law, Apple has no other warranty obligation, and other claims,
                  losses, liabilities, damages, costs, or expenses attributable to failure to conform
                  to warranty are the Company’s sole responsibility.
                </li>
                <li>
                  <strong className="text-white/85">Product Claims.</strong> The Company, not Apple,
                  is responsible for addressing claims relating to Mars AI or your possession/use of
                  it, including: (i) product liability claims; (ii) claims that Mars AI fails to
                  conform to legal or regulatory requirements; and (iii) claims under consumer
                  protection, privacy, or similar legislation.
                </li>
                <li>
                  <strong className="text-white/85">Intellectual Property Claims.</strong> In the
                  event of a third-party claim that Mars AI or your possession and use of it
                  infringes a third party’s IP rights, the Company, not Apple, is solely responsible
                  for investigation, defense, settlement, and discharge of such claim.
                </li>
                <li>
                  <strong className="text-white/85">Third-Party Beneficiary.</strong> You and we
                  acknowledge that Apple and Apple’s subsidiaries are third-party beneficiaries of
                  these Terms, and that upon your acceptance, Apple will have the right (and will be
                  deemed to have accepted the right) to enforce these Terms against you as a
                  third-party beneficiary.
                </li>
              </ul>
            </Section>

            <Section title="21. Changes to These Terms">
              <p>
                21.1 We may update these Terms from time to time. The “Last Updated” date will
                change. Material changes will be notified by in-app notice, email (if available), or
                posting on{' '}
                <a href="https://getmars.app/terms" className="text-mars-blue hover:underline">
                  https://getmars.app/terms
                </a>
                , as required by law.
              </p>
              <p>
                21.2 Continued use after the effective date of updated Terms constitutes acceptance,
                except where additional consent is required by law (including for certain changes
                affecting minors where parental consent rules apply).
              </p>
              <p>
                21.3 If you do not agree to updated Terms, stop using the Service and cancel any
                subscription via Apple settings / delete your account.
              </p>
            </Section>

            <Section title="22. Miscellaneous">
              <p>
                22.1 Entire Agreement. These Terms, the Privacy Policy, and any supplemental terms
                constitute the entire agreement regarding the Service and supersede prior agreements
                on the subject.
              </p>
              <p>
                22.2 Severability. If any provision is unenforceable, it will be modified to the
                minimum extent necessary; remaining provisions remain in effect.
              </p>
              <p>22.3 No Waiver. Failure to enforce a provision is not a waiver.</p>
              <p>
                22.4 Assignment. You may not assign these Terms without our consent. We may assign to
                an affiliate or successor in connection with a merger, acquisition, corporate
                reorganization, or sale of assets.
              </p>
              <p>
                22.5 Force Majeure. We are not liable for delays or failures due to events beyond
                reasonable control (including outages of cloud/AI providers, Apple services, natural
                disasters, war, labor disputes, internet failures, or government actions).
              </p>
              <p>
                22.6 No Third-Party Beneficiaries. Except Apple as stated in Section 20.6 and our
                permitted indemnified parties, there are no third-party beneficiaries.
              </p>
              <p>
                22.7 Notices. We may provide notices via the Service, website, or email associated
                with your account. Legal notices to us:{' '}
                <a href={MAILTO} className="text-mars-blue hover:underline">
                  {SUPPORT}
                </a>{' '}
                and Nexify Labs LLC, 8401 Mayland Dr Ste A, Richmond, VA 23294-4648, USA.
              </p>
              <p>22.8 Headings. Headings are for convenience only.</p>
              <p>
                22.9 Language. These Terms are in English. Translations are for convenience; English
                controls except where local law requires otherwise (e.g., certain consumer
                jurisdictions).
              </p>
              <p>
                22.10 Electronic Communications. You consent to receive electronic communications
                related to the Service and these Terms.
              </p>
              <p>
                22.11 Relationship. No joint venture, partnership, employment, or agency relationship
                is created.
              </p>
              <p>22.12 Interpretation. “Including” means “including without limitation.”</p>
            </Section>

            <Section title="23. Contact">
              <p>Questions, complaints, or claims about Mars AI:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Email:{' '}
                  <a href={MAILTO} className="text-mars-blue hover:underline">
                    {SUPPORT}
                  </a>
                </li>
                <li>Mail: Nexify Labs LLC, 8401 Mayland Dr Ste A, Richmond, VA 23294-4648, USA</li>
                <li>
                  Website:{' '}
                  <a href="https://getmars.app" className="text-mars-blue hover:underline">
                    https://getmars.app
                  </a>
                </li>
                <li>
                  Terms:{' '}
                  <a href="https://getmars.app/terms" className="text-mars-blue hover:underline">
                    https://getmars.app/terms
                  </a>
                </li>
                <li>
                  Privacy:{' '}
                  <a href="../privacy/" className="text-mars-blue hover:underline">
                    https://getmars.app/privacy
                  </a>
                </li>
              </ul>
            </Section>
          </div>
        </main>

        <footer className="border-t border-white/8 py-10">
          <p className="text-center font-body text-xs text-white/35">
            © {new Date().getFullYear()} Mars AI. Terms of Service.
          </p>
        </footer>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-lg font-semibold tracking-tight text-white">{title}</h2>
      {children}
    </section>
  )
}
