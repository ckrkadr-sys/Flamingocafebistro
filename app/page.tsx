import { redirect } from "next/navigation";

import { getDefaultLocalizedPath } from "@/lib/i18n/routes";

export default function RootPage() {
  redirect(getDefaultLocalizedPath());
}
