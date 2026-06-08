"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  getEquivalentLocalizedPath,
} from "@/lib/i18n/routes";
import {
  localeLabels,
  supportedLocales,
  type Locale,
} from "@/lib/i18n/locales";

type LanguageSwitcherProps = Readonly<{
  currentLocale: Locale;
  ariaLabel: string;
}>;

export function LanguageSwitcher({
  currentLocale,
  ariaLabel,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={ariaLabel} className="language-switcher">
      <ul className="language-switcher__list">
        {supportedLocales.map((locale) => (
          <li key={locale}>
            <Link
              aria-current={locale === currentLocale ? "true" : undefined}
              className="language-switcher__link"
              href={getEquivalentLocalizedPath(pathname, locale)}
              hrefLang={locale}
              lang={locale}
            >
              {localeLabels[locale]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
