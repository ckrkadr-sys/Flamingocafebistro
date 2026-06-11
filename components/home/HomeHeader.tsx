import Image from "next/image";
import Link from "next/link";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath, type RouteKey } from "@/lib/i18n/routes";
import { getSiteConfig } from "@/lib/site/siteHelpers";

type HomeHeaderProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

const leftNavItems = ["home", "menu", "about"] as const satisfies readonly RouteKey[];
const rightNavItems = ["contact", "gallery"] as const satisfies readonly RouteKey[];

export function HomeHeader({ dictionary, locale }: HomeHeaderProps) {
  const site = getSiteConfig();
  const navItems = [...leftNavItems, ...rightNavItems];

  return (
    <header className="home-header">
      <div className="home-header__bar">
        <nav
          aria-label={dictionary.common.primaryNavigationLabel}
          className="home-header__nav home-header__nav--left"
        >
          {leftNavItems.map((routeKey) => (
            <Link
              aria-current={routeKey === "home" ? "page" : undefined}
              className="home-header__link"
              href={getLocalizedPath(locale, routeKey)}
              key={routeKey}
            >
              {dictionary.nav[routeKey]}
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

        <nav
          aria-label={dictionary.common.primaryNavigationLabel}
          className="home-header__nav home-header__nav--right"
        >
          {rightNavItems.map((routeKey) => (
            <Link
              className="home-header__link"
              href={getLocalizedPath(locale, routeKey)}
              key={routeKey}
            >
              {dictionary.nav[routeKey]}
            </Link>
          ))}
          <Link
            className="home-header__cta"
            href={getLocalizedPath(locale, "contact")}
          >
            {dictionary.home.headerCtaLabel}
            <span aria-hidden="true">+</span>
          </Link>
        </nav>

        <details className="home-header__mobile">
          <summary>{dictionary.common.mobileMenuOpenLabel}</summary>
          <nav aria-label={dictionary.common.primaryNavigationLabel}>
            {navItems.map((routeKey) => (
              <Link
                aria-current={routeKey === "home" ? "page" : undefined}
                href={getLocalizedPath(locale, routeKey)}
                key={routeKey}
              >
                {dictionary.nav[routeKey]}
              </Link>
            ))}
            <Link href={getLocalizedPath(locale, "contact")}>
              {dictionary.home.headerCtaLabel}
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
