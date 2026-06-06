import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath, routeKeys } from "@/lib/i18n/routes";

type HeaderProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function Header({ dictionary, locale }: HeaderProps) {
  return (
    <header>
      <nav aria-label={dictionary.common.primaryNavigationLabel}>
        <ul>
          {routeKeys.map((routeKey) => (
            <li key={routeKey}>
              <Link href={getLocalizedPath(locale, routeKey)}>
                {dictionary.nav[routeKey]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageSwitcher
        ariaLabel={dictionary.common.languageSwitcherLabel}
        currentLocale={locale}
      />
    </header>
  );
}
