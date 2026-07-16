import type { ReactNode } from 'react'
import appIcon from './assets/images/AppIcon.png'
import Starfield from './components/Starfield'

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-white/55">
            This Privacy Policy explains how Mars AI collects, uses, stores, and shares information
            when you use the Mars AI mobile app, related backend services, and our AI-powered study
            features.
          </p>
          <p className="mt-6 font-body text-sm text-white/40">
            Last updated: July 3, 2026 · Contact:{' '}
            <a href="mailto:support@getmars.ai" className="text-mars-blue hover:underline">
              support@getmars.ai
            </a>
          </p>

          <div className="mt-14 space-y-12 font-body text-[15px] leading-relaxed text-white/65">
            <Section title="1. Overview">
              <p>
                Mars AI is a study app that lets users record or upload lecture audio, generate
                transcripts and notes, create flashcards and quiz journeys, chat with an AI study
                assistant, and sync study content through Supabase-backed storage and
                authentication.
              </p>
              <p>
                This policy is written to match the current codebase and infrastructure used by the
                app, including Supabase, Groq, OpenAI, and a server-side generation worker deployed
                on Google Cloud Run.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>
                <strong className="text-white/85">Account and session information.</strong> We
                maintain a Supabase-backed user session and identifier so your content can be stored
                and synced across app launches. In the current codebase, this may include an
                anonymous account identifier.
              </p>
              <p>
                <strong className="text-white/85">Study content you provide.</strong> We collect
                audio recordings, uploaded audio files, transcripts, notes, flashcards, journeys,
                questions, study set names, and related study content you create in the app.
              </p>
              <p>
                <strong className="text-white/85">Job and processing metadata.</strong> We store
                metadata related to generation jobs, including lecture IDs, user IDs, language
                selections, storage paths, job status, stage, timestamps, retry attempts, and error
                details.
              </p>
              <p>
                <strong className="text-white/85">Reminder preferences.</strong> We store your study
                reminder times and selected weekdays on your device so local reminder notifications
                can be scheduled.
              </p>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                Permissions and device-level access
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/85">Microphone:</strong> used to record lecture
                  audio.
                </li>
                <li>
                  <strong className="text-white/85">Notifications:</strong> used for local study
                  reminders.
                </li>
                <li>
                  <strong className="text-white/85">Files you choose to upload:</strong> used to
                  import audio you select through the iOS file picker.
                </li>
              </ul>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                Information we do not currently collect in the app codebase
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  We do not request precise location, contacts, camera, or photo library permissions
                  in the current codebase.
                </li>
                <li>We do not currently include third-party advertising SDKs in the app codebase.</li>
                <li>
                  We do not currently use remote push notification tokens; reminders are scheduled
                  locally on-device.
                </li>
              </ul>
            </Section>

            <Section title="3. How We Use Information">
              <ul className="list-disc space-y-2 pl-5">
                <li>To authenticate users and maintain sessions.</li>
                <li>
                  To store, sync, and display your study sets, lectures, notes, flashcards, and quiz
                  content.
                </li>
                <li>To transcribe lecture audio and generate AI study materials.</li>
                <li>
                  To support AI tutoring, starter questions, flashcard generation, and simplified
                  explanations.
                </li>
                <li>To schedule local study reminders.</li>
                <li>
                  To troubleshoot processing failures and improve reliability of job execution.
                </li>
                <li>To provide support if you contact us.</li>
              </ul>
            </Section>

            <Section title="4. AI Processing and Cloud Infrastructure">
              <p>
                Mars AI uses a combination of app-side and server-side processing, depending on the
                feature and deployment state.
              </p>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                Lecture processing pipeline
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  When you upload or record lecture audio for note generation, the app uploads the
                  audio to a private Supabase Storage bucket.
                </li>
                <li>
                  The app creates a generation job and triggers a server-side worker running on
                  Google Cloud Run.
                </li>
                <li>
                  The worker downloads the uploaded audio, sends audio to Groq for transcription,
                  sends prompts and study content to OpenAI for notes and question generation, and
                  writes results back into Supabase.
                </li>
                <li>The app then syncs those results and displays them in the UI.</li>
              </ul>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                Interactive AI features
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  AI tutor chat, starter-question generation, flashcard generation, and simpler
                  explanations are proxied through the worker so model API keys are not exposed in
                  the app for those features.
                </li>
                <li>
                  Those requests include content necessary to answer the request, such as lecture
                  title, notes, transcript excerpts, chat history, or flashcard text.
                </li>
              </ul>

              <h3 className="mt-6 font-heading text-sm font-semibold tracking-wide text-white">
                Direct transcription path currently present in the codebase
              </h3>
              <p>
                The current codebase also includes a standalone transcription screen that can send
                audio directly to Groq for transcription. If that feature is enabled in your build
                and you use it, your audio file is transmitted directly to Groq for that
                transcription request.
              </p>
              <p className="rounded-lg border-l-2 border-mars-accent/60 bg-white/[0.03] py-3 pl-4">
                We do not use your study content to deliver third-party ads. AI providers may process
                submitted content to provide the requested service, subject to their own terms and
                policies.
              </p>
            </Section>

            <Section title="5. Where Information Is Stored">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/85">On your device:</strong> the app stores local
                  mirrors of study sets, documents, progress data, reminder settings, recordings,
                  and uploaded files in local app storage.
                </li>
                <li>
                  <strong className="text-white/85">In Supabase:</strong> we store synced study
                  content, generation job rows, and private uploaded audio files used for
                  processing.
                </li>
                <li>
                  <strong className="text-white/85">On Google Cloud Run / Cloud Tasks:</strong> our
                  worker infrastructure processes queued generation jobs.
                </li>
              </ul>
            </Section>

            <Section title="6. Sharing and Service Providers">
              <p>We share information with service providers only as needed to operate Mars AI.</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/85">Supabase:</strong> authentication, database,
                  storage, and sync.
                </li>
                <li>
                  <strong className="text-white/85">Groq:</strong> audio transcription.
                </li>
                <li>
                  <strong className="text-white/85">OpenAI:</strong> note generation, question
                  generation, tutor-style responses, flashcards, and related AI outputs.
                </li>
                <li>
                  <strong className="text-white/85">Google Cloud:</strong> Cloud Run, Cloud Tasks,
                  and related worker infrastructure.
                </li>
                <li>
                  <strong className="text-white/85">Apple:</strong> App Store billing/subscription
                  management, ratings/reviews, and iOS platform services.
                </li>
              </ul>
              <p>
                We may also disclose information if required by law, legal process, or to protect
                the rights, safety, or security of Mars AI, our users, or others.
              </p>
            </Section>

            <Section title="7. Data Retention">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Study content stored in Supabase is retained until you delete it or it is
                  otherwise removed from our systems.
                </li>
                <li>
                  Private uploaded audio used for lecture generation is intended to be transient.
                  The worker deletes the upload after successful completion, but temporary retention
                  may occur if a job fails, is retried, or has not yet been cleaned up.
                </li>
                <li>
                  Local app data may remain on your device until you delete it, remove the app, or
                  reset local data.
                </li>
                <li>Reminder settings remain on-device until changed or removed.</li>
                <li>
                  Job metadata and error data may remain in backend systems for operational and
                  debugging purposes.
                </li>
              </ul>
            </Section>

            <Section title="8. Your Choices and Controls">
              <ul className="list-disc space-y-2 pl-5">
                <li>You can choose whether to grant microphone and notification permissions.</li>
                <li>You can delete study sets and individual notes in the app.</li>
                <li>You can manage local reminder settings from the app.</li>
                <li>
                  You can manage subscriptions through Apple if subscriptions are enabled in your
                  deployed version.
                </li>
                <li>
                  You can contact{' '}
                  <a href="mailto:support@getmars.ai" className="text-mars-blue hover:underline">
                    support@getmars.ai
                  </a>{' '}
                  with privacy or deletion requests.
                </li>
              </ul>
              <p className="rounded-lg border-l-2 border-mars-accent/60 bg-white/[0.03] py-3 pl-4">
                The current “Delete account” path in the codebase primarily resets local app data on
                the device. It should not be treated as a full server-side account deletion workflow
                unless your deployed backend explicitly supports that flow.
              </p>
            </Section>

            <Section title="9. Clipboard, Reviews, and Support">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  The app can copy transcripts or source text to your clipboard only when you tap a
                  copy action.
                </li>
                <li>
                  The app can trigger Apple’s in-app review prompt when you choose a rating-related
                  action.
                </li>
                <li>If you email support, we receive the information you include in that message.</li>
              </ul>
            </Section>

            <Section title="10. Security">
              <p>
                We use access controls, private storage configuration, row-level security in
                Supabase, and authenticated requests to protect data. However, no system can
                guarantee absolute security, and you should avoid submitting information you do not
                want processed by third-party AI providers.
              </p>
            </Section>

            <Section title="11. International Processing">
              <p>
                Your information may be processed in countries other than the one where you live,
                including where our service providers operate infrastructure or personnel. By using
                Mars AI, you understand that such transfers may occur.
              </p>
            </Section>

            <Section title="12. Children’s Privacy">
              <p>
                Mars AI is not intended for children under 13, and we do not knowingly collect
                personal information from children under 13. If you believe a child has provided
                personal information, contact us at{' '}
                <a href="mailto:support@getmars.ai" className="text-mars-blue hover:underline">
                  support@getmars.ai
                </a>
                .
              </p>
            </Section>

            <Section title="13. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the
                “Last updated” date above. Your continued use of Mars AI after changes become
                effective means you accept the updated policy.
              </p>
            </Section>

            <Section title="14. Contact Us">
              <p>
                If you have questions about this Privacy Policy or Mars AI’s privacy practices,
                contact us at{' '}
                <a href="mailto:support@getmars.ai" className="text-mars-blue hover:underline">
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
