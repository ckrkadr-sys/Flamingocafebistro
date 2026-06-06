import type { Metadata } from "next";

import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/locales";
import type { RouteKey } from "@/lib/i18n/routes";

export function getLocalizedMetadata(locale: Locale, routeKey: RouteKey): Metadata {
  const metadata = getDictionary(locale).seo[routeKey];

  return {
    title: metadata.title,
    description: metadata.description,
  };
}
