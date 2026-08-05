import type { ReactNode } from "react";
import appIcon from "./assets/images/AppIcon.png";
import Starfield from "./components/Starfield";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <Starfield />
      <div className="relative z-10">
        <header className="border-b border-white/8">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
            <a href="../" className="flex items-center gap-2">
              <img
                src={appIcon}
                alt="Mars AI"
                className="h-7 w-7 rounded-[8px]"
              />
              <span className="font-heading text-sm font-bold tracking-wide text-white">
                MARS AI
              </span>
            </a>
            <a
              href="../"
              className="font-body text-sm text-white/50 transition-colors hover:text-white"
            >
              Back to home
            </a>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
          <p className="font-body text-xs font-medium tracking-[0.14em] text-mars-blue uppercase">
            Legal
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-white/55">
            This Privacy Policy explains how Mars AI collects, uses, stores, and
            shares information when you use the Mars AI mobile app, related
            backend services, and our AI-powered study features.
          </p>
          <p className="mt-6 font-body text-sm text-white/40">
            Last updated: August 5, 2026 · Contact:{" "}
            <a
              href="mailto:support@getmars.ai"
              className="text-mars-blue hover:underline"
            >
              support@getmars.ai
            </a>
          </p>

          <div className="mt-14 space-y-12 font-body text-[15px] leading-relaxed text-white/65">
            <Section title="1. Overview">
              <p>
                Mars AI is a study app that lets users record or upload lecture
                audio, import PDFs and text, generate transcripts and notes,
                create flashcards and quiz journeys, chat with an AI study
                assistant, and sync study content through Supabase-backed
                storage and authentication.
              </p>
              <p>
                This policy is written to match the current Mars AI app and
                infrastructure, including Supabase, Groq, OpenAI, Amplitude, and
                Superwall.
              </p>
              <p>
                Before you can use AI-powered features, the app shows an in-app
                disclosure after sign-in that explains what study content may be
                sent to third-party AI providers and asks you to confirm that
                you understand before proceeding.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>
                <strong className="text-white/85">
                  Account and session information.
                </strong>{" "}
                When you sign in with Apple or Google, we maintain a
                Supabase-backed user session and identifier so your content can
                be stored and synced across app launches. Depending on what your
                sign-in provider shares, this may include your name, email
                address, and a user identifier.
              </p>
              <p>
                <strong className="text-white/85">
                  Study content you provide.
                </strong>{" "}
                We collect audio recordings, uploaded audio files, transcripts,
                notes, flashcards, journeys, questions, study set names,
                imported PDF or text content, web links you submit, chat
                messages with the AI tutor, and related study content you create
                in the app.
              </p>
              <p>
                <strong className="text-white/85">
                  Usage and analytics data.
                </strong>{" "}
                We collect product interaction data such as screen views and
                in-app events to understand how the app is used and improve
                onboarding, reliability, and feature performance.
              </p>
              <p>
                <strong className="text-white/85">
                  Subscription and purchase data.
                </strong>{" "}
                If you subscribe, purchase status and related subscription
                events are handled through Apple and our paywall provider so we
                can determine whether you have access to paid features.
              </p>
              <p>
                <strong className="text-white/85">Reminder preferences.</strong>{" "}
                We store your study reminder times and selected weekdays on your
                device so local reminder notifications can be scheduled.
              </p>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                Permissions and device-level access
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/85">Microphone:</strong> used to
                  record lecture audio. Recorded audio may be sent to a
                  third-party AI service for transcription when you use AI
                  features.
                </li>
                <li>
                  <strong className="text-white/85">Notifications:</strong> used
                  for local study reminders.
                </li>
                <li>
                  <strong className="text-white/85">
                    Files you choose to upload:
                  </strong>{" "}
                  used to import audio, PDFs, or text you select through the iOS
                  file picker.
                </li>
              </ul>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                Information we do not currently collect in the app
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  We do not request precise location, contacts, camera, or photo
                  library permissions.
                </li>
                <li>We do not include third-party advertising SDKs.</li>
                <li>
                  We do not currently use remote push notification tokens;
                  reminders are scheduled locally on-device.
                </li>
              </ul>
            </Section>

            <Section title="3. How We Use Information">
              <ul className="list-disc space-y-2 pl-5">
                <li>To authenticate users and maintain sessions.</li>
                <li>
                  To store, sync, and display your study sets, lectures, notes,
                  flashcards, and quiz content.
                </li>
                <li>
                  To transcribe lecture audio and generate AI study materials.
                </li>
                <li>
                  To support AI tutoring, starter questions, flashcard
                  generation, and simplified explanations.
                </li>
                <li>To schedule local study reminders.</li>
                <li>
                  To measure product usage and improve the app experience.
                </li>
                <li>To manage subscriptions and paid access.</li>
                <li>To provide support if you contact us.</li>
              </ul>
            </Section>

            <Section title="4. AI Processing">
              <p>
                Mars AI uses third-party AI services to power transcription,
                note generation, quizzes, flashcards, and tutor chat. In the
                current app, this processing is initiated from the Mars AI app
                when you use those features.
              </p>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                What may be sent for AI processing
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Audio recordings and uploaded audio files</li>
                <li>
                  Transcripts and extracted text from PDFs, documents, or web
                  links
                </li>
                <li>
                  Notes, lecture titles, flashcards, and quiz-related content
                </li>
                <li>Messages and chat history with the AI tutor</li>
              </ul>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                Who receives AI processing requests
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/85">Groq:</strong> audio
                  transcription.
                </li>
                <li>
                  <strong className="text-white/85">OpenAI:</strong> note
                  generation, question generation, tutor-style responses,
                  flashcards, and related AI outputs.
                </li>
              </ul>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                In-app consent
              </h3>
              <p>
                After you sign in, Mars AI shows a disclosure explaining that
                study content may be sent to third-party AI providers such as
                OpenAI and Groq. You must confirm that you understand before
                AI-powered features become available. We do not send your study
                content to those providers for AI processing until you have
                given that confirmation in the app.
              </p>

              <p className="rounded-lg border-l-2 border-mars-accent/60 bg-white/[0.03] py-3 pl-4">
                We do not use your study content to deliver third-party ads. AI
                providers may process submitted content to provide the requested
                service, subject to their own terms and policies.
              </p>
            </Section>

            <Section title="5. Where Information Is Stored">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/85">On your device:</strong> the
                  app stores local mirrors of study sets, documents, progress
                  data, reminder settings, recordings, and uploaded files in
                  local app storage.
                </li>
                <li>
                  <strong className="text-white/85">In Supabase:</strong> we
                  store synced study content and profile-related data tied to
                  your account.
                </li>
                <li>
                  <strong className="text-white/85">With AI providers:</strong>{" "}
                  content you submit for AI features is transmitted to Groq and
                  OpenAI for processing in order to generate the requested
                  results.
                </li>
              </ul>
            </Section>

            <Section title="6. Sharing and Service Providers">
              <p>
                We share information with service providers only as needed to
                operate Mars AI.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/85">Supabase:</strong>{" "}
                  authentication, database, and sync.
                </li>
                <li>
                  <strong className="text-white/85">Groq:</strong> audio
                  transcription.
                </li>
                <li>
                  <strong className="text-white/85">OpenAI:</strong> note
                  generation, question generation, tutor-style responses,
                  flashcards, and related AI outputs.
                </li>
                <li>
                  <strong className="text-white/85">Amplitude:</strong> product
                  analytics and usage measurement.
                </li>
                <li>
                  <strong className="text-white/85">Superwall:</strong>{" "}
                  subscription paywall and purchase flow management.
                </li>
                <li>
                  <strong className="text-white/85">Apple:</strong> App Store
                  billing/subscription management, Sign in with Apple,
                  ratings/reviews, and iOS platform services.
                </li>
                <li>
                  <strong className="text-white/85">Google:</strong> Sign in
                  with Google, when you choose that sign-in option.
                </li>
              </ul>
              <p>
                We may also disclose information if required by law, legal
                process, or to protect the rights, safety, or security of Mars
                AI, our users, or others.
              </p>
            </Section>

            <Section title="7. Data Retention">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Study content stored in Supabase is retained until you delete
                  it or it is otherwise removed from our systems.
                </li>
                <li>
                  Local app data may remain on your device until you delete it,
                  remove the app, or reset local data.
                </li>
                <li>
                  Reminder settings remain on-device until changed or removed.
                </li>
                <li>
                  Analytics and operational logs retained by our service
                  providers are governed by their own retention policies.
                </li>
              </ul>
            </Section>

            <Section title="8. Your Choices and Controls">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  You must confirm in-app that you understand third-party AI
                  processing before AI features become available.
                </li>
                <li>
                  You can choose whether to grant microphone and notification
                  permissions.
                </li>
                <li>
                  You can delete study sets and individual notes in the app.
                </li>
                <li>You can manage local reminder settings from the app.</li>
                <li>You can manage subscriptions through Apple.</li>
                <li>
                  You can contact{" "}
                  <a
                    href="mailto:support@getmars.ai"
                    className="text-mars-blue hover:underline"
                  >
                    support@getmars.ai
                  </a>{" "}
                  with privacy or deletion requests.
                </li>
              </ul>
              <p className="rounded-lg border-l-2 border-mars-accent/60 bg-white/[0.03] py-3 pl-4">
                If you use Delete account in the app, Mars AI attempts to remove
                your synced content and delete your authenticated account from
                our backend. Some data may remain temporarily in backups, logs,
                or provider systems according to their retention practices.
              </p>
            </Section>

            <Section title="9. Clipboard, Reviews, and Support">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  The app can copy transcripts or source text to your clipboard
                  only when you tap a copy action.
                </li>
                <li>
                  The app can trigger Apple’s in-app review prompt when you
                  choose a rating-related action.
                </li>
                <li>
                  If you email support, we receive the information you include
                  in that message.
                </li>
              </ul>
            </Section>

            <Section title="10. Security">
              <p>
                We use access controls, row-level security in Supabase, and
                authenticated requests to protect data. However, no system can
                guarantee absolute security, and you should avoid submitting
                information you do not want processed by third-party AI
                providers.
              </p>
            </Section>

            <Section title="11. International Processing">
              <p>
                Your information may be processed in countries other than the
                one where you live, including where our service providers
                operate infrastructure or personnel. By using Mars AI, you
                understand that such transfers may occur.
              </p>
            </Section>

            <Section title="12. Children’s Privacy">
              <p>
                Mars AI is not intended for children under 13, and we do not
                knowingly collect personal information from children under 13.
                If you believe a child has provided personal information,
                contact us at{" "}
                <a
                  href="mailto:support@getmars.ai"
                  className="text-mars-blue hover:underline"
                >
                  support@getmars.ai
                </a>
                .
              </p>
            </Section>

            <Section title="13. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. When we do,
                we will revise the “Last updated” date above. Your continued use
                of Mars AI after changes become effective means you accept the
                updated policy.
              </p>
            </Section>

            <Section title="14. Contact Us">
              <p>
                If you have questions about this Privacy Policy or Mars AI’s
                privacy practices, contact us at{" "}
                <a
                  href="mailto:support@getmars.ai"
                  className="text-mars-blue hover:underline"
                >
                  support@getmars.ai
                </a>
                .
              </p>
            </Section>
          </div>
        </main>

        <footer className="border-t border-white/8 py-10">
          <p className="text-center font-body text-xs text-white/35">
            © {new Date().getFullYear()} Mars AI. Privacy Policy.
          </p>
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-lg font-semibold tracking-tight text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}
