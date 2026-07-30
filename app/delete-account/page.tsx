import { permanentRedirect } from "next/navigation";

export default function DeleteAccountRedirectPage() {
  permanentRedirect(
    "/blog/how-to-delete-your-plany-timeline-account",
  );
}
