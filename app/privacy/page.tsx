import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Privacy Policy | Plany",
  description:
    "Your privacy matters. Plany is designed to keep your personal data safe, secure, and fully within your control. This policy discloses location data used for place reminders.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters. Plany is designed to keep your personal data safe, secure, and fully within your control. Last updated: 11 September 2026."
      sections={[
        {
          title: "Data We Collect",
          body: (
            <>
              <p>
                Plany only collects information needed to run your timeline,
                reminders, and coaching. Depending on how you use the app, that
                can include:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Account: email address, name, and sign-in details if you use
                  email OTP or Google
                </li>
                <li>
                  Profile and settings: wake and sleep times, language,
                  timezone, theme, notification preferences, quiet hours
                </li>
                <li>
                  Planning content you create: tasks, schedules, saved places,
                  and AI chat
                </li>
                <li>
                  Location data, if you use place reminders: precise location,
                  including in the background, plus place name, address, and
                  coordinates
                </li>
                <li>
                  Device and notifications: a push token so we can send
                  reminders, plus app version and device type for reliability
                </li>
                <li>
                  Purchases: subscription status from Google Play Billing (we
                  do not store your full payment card details)
                </li>
                <li>
                  Diagnostics: crash and error reports used to keep the app
                  working
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Location data",
          body: (
            <>
              <p>
                Plany accesses{" "}
                <strong className="font-medium text-plany-primary">
                  precise location data
                </strong>{" "}
                on Android, including{" "}
                <strong className="font-medium text-plany-primary">
                  in the background
                </strong>
                , to provide place reminders.
              </p>
              <p>
                If you attach a place to a task and choose Arriving or Leaving,
                Plany uses your device location and Android geofences to notify
                you when you arrive at or leave that place,{" "}
                <strong className="font-medium text-plany-primary">
                  even when the app is closed or not in use
                </strong>
                .
              </p>
              <p>What we access and store:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Your current location, when you tap Current location or when a
                  geofence needs to confirm you are at a saved place
                </li>
                <li>
                  Places you save: name, address, latitude, longitude, reminder
                  radius, and Arriving or Leaving
                </li>
              </ul>
              <p>
                Saved places (name, address, coordinates, radius, trigger) are
                stored on your account on Plany’s servers so they stay linked to
                your tasks. Live background location is processed on the device
                to fire the reminder. We do not keep a location history, and we
                do not use location for ads, analytics, or to track you for any
                other purpose.
              </p>
              <p>
                Place search uses Google Places. Maps and geofencing use Google
                Play services. Those services may receive the search query or
                coordinates needed to look up a place or register a geofence,
                under Google’s privacy policy.
              </p>
              <p>
                Location is optional. If you deny location permission, you can
                still use Plany for tasks and chat; you will not get arriving or
                leaving reminders. You can turn location off anytime in Android
                Settings → Apps → Plany → Permissions → Location.
              </p>
            </>
          ),
        },
        {
          title: "How We Use Your Data",
          body: (
            <>
              <p>We use this data to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Create and sign you into your account</li>
                <li>Show your timeline, tasks, and saved places</li>
                <li>
                  Send time-based and place-based reminders (arriving and
                  leaving a saved place)
                </li>
                <li>Provide AI planning help from the content you share</li>
                <li>Process subscriptions through Google Play</li>
                <li>Fix crashes and keep the app reliable</li>
              </ul>
              <p>
                Plany never sells your data or uses it for external advertising.
              </p>
            </>
          ),
        },
        {
          title: "AI Processing",
          body: "AI-driven insights and coaching are generated using your personal planning data, such as tasks and chat. All processing respects the highest privacy standards and follows industry-grade security. AI suggestions are not a substitute for professional advice.",
        },
        {
          title: "Notifications and purchases",
          body: (
            <>
              <p>
                If you allow notifications, we store a Firebase Cloud Messaging
                device token so Plany can send reminder and coaching
                notifications. You can turn notifications off in the app or in
                Android settings.
              </p>
              <p>
                Paid plans are billed by Google Play. Google processes the
                payment. We receive and store subscription status (for example
                Pro, plan, and expiry) so we can unlock features. We do not
                receive or store your full card number.
              </p>
            </>
          ),
        },
        {
          title: "Diagnostics and third parties",
          body: (
            <>
              <p>
                We use Sentry for crash and error reports. Those reports can
                include device model, OS version, app version, and a user id or
                email so we can debug an issue. We do not record session replay
                of your screen.
              </p>
              <p>Services that may process data on our behalf:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Google Sign-In, if you choose Google to create an account</li>
                <li>Google Places, Maps, and Play services for place search and geofences</li>
                <li>Firebase Cloud Messaging for push notifications</li>
                <li>Google Play Billing for subscriptions</li>
                <li>Sentry for crash reporting</li>
              </ul>
              <p>
                Each of those providers handles data under their own privacy
                policy. We do not share your data with advertisers or data
                brokers.
              </p>
            </>
          ),
        },
        {
          title: "Children",
          body: "Plany is not directed at children under 13, and we do not knowingly collect personal data from children under 13. If you believe a child has created an account, contact hq@plany.space and we will delete it.",
        },
        {
          title: "Your Control",
          body: (
            <>
              <p>
                You can export, view, or delete your data anytime. Plany is
                built to give you full ownership over your digital life and
                routines.
              </p>
              <p>
                To delete your Plany Timeline account, open the app and go to{" "}
                <strong className="font-medium text-plany-primary">
                  Settings → Profile Account → Delete account
                </strong>
                . After you confirm, you are signed out and your data is
                scheduled for removal. If you deleted by mistake, sign in again
                with the same email within{" "}
                <strong className="font-medium text-plany-primary">
                  10 minutes
                </strong>{" "}
                to restore your account. After about{" "}
                <strong className="font-medium text-plany-primary">
                  30 days
                </strong>
                , deleted account data is permanently removed.
              </p>
              <p>
                Full steps, what is deleted, and how to contact support:{" "}
                <Link
                  href="/blog/how-to-delete-your-plany-timeline-account"
                  className="font-medium text-plany-primary underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/50"
                >
                  How to delete your Plany Timeline account
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          title: "Security",
          body: "We protect your data with industry-standard security practices, including encryption in transit and access controls. If you have a security concern, contact hq@plany.space.",
        },
        {
          title: "Changes",
          body: "We may update this policy when we add features or to keep it accurate. The date at the top of this page will change. Continued use of Plany after an update means you accept the revised policy.",
        },
      ]}
    />
  );
}
