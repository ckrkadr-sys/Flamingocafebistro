import Image from "next/image";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath, primaryNavRouteKeys } from "@/lib/i18n/routes";
import { getSiteConfig } from "@/lib/site/siteHelpers";

type HomeHeaderProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function HomeHeader({ dictionary, locale }: HomeHeaderProps) {
  const site = getSiteConfig();

  return (
    <header className="home-header">
      <div className="home-header__bar">
        <nav
          aria-label={dictionary.common.primaryNavigationLabel}
          className="home-header__nav home-header__nav--left"
        >
          {primaryNavRouteKeys.map((routeKey) => (
            <Link
              aria-current={routeKey === "home" ? "page" : undefined}
              className={
                routeKey === "contact"
                  ? "home-header__link home-header__cta"
                  : "home-header__link"
              }
              href={getLocalizedPath(locale, routeKey)}
              key={routeKey}
            >
              {dictionary.nav[routeKey]}
              {routeKey === "contact" ? <span aria-hidden="true">+</span> : null}
            </Link>
          ))}
        </nav>

        <Link
          aria-label={site.businessName}
          className="home-header__logo-link"
          href={getLocalizedPath(locale, "home")}
        >
          <Image
            alt=""
            className="home-header__logo"
            height={176}
            priority
            src={site.logoPath}
            width={176}
          />
        </Link>

        <div className="home-header__actions">
          <LanguageSwitcher
            ariaLabel={dictionary.common.languageSwitcherLabel}
            currentLocale={locale}
          />
        </div>

        <details className="home-header__mobile">
          <summary>{dictionary.common.mobileMenuOpenLabel}</summary>
          <div className="home-header__mobile-panel">
            <nav aria-label={dictionary.common.primaryNavigationLabel}>
              {primaryNavRouteKeys.map((routeKey) => (
                <Link
                  aria-current={routeKey === "home" ? "page" : undefined}
                  href={getLocalizedPath(locale, routeKey)}
                  key={routeKey}
                >
                  {dictionary.nav[routeKey]}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher
              ariaLabel={dictionary.common.languageSwitcherLabel}
              currentLocale={locale}
            />
          </div>
        </details>
      </div>
    </header>
  );
}
