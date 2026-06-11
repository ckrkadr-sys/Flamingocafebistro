import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Container } from "@/components/shared/Container";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath, primaryNavRouteKeys } from "@/lib/i18n/routes";
import { getSiteConfig } from "@/lib/site/siteHelpers";

type HeaderProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function Header({ dictionary, locale }: HeaderProps) {
  const site = getSiteConfig();
  const navItems = primaryNavRouteKeys.map((routeKey) => ({
    href: getLocalizedPath(locale, routeKey),
    label: dictionary.nav[routeKey],
  }));

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link
          aria-label={site.businessName}
          className="site-header__brand"
          href={getLocalizedPath(locale, "home")}
        >
          <span
            aria-hidden="true"
            className="site-header__logo"
            style={{ backgroundImage: `url(${site.logoPath})` }}
          />
          <span className="site-header__brand-name">{site.shortBrandName}</span>
        </Link>

        <nav
          aria-label={dictionary.common.primaryNavigationLabel}
          className="site-header__desktop-nav"
        >
          <ul className="site-header__nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="site-header__nav-link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__desktop-actions">
          <LanguageSwitcher
            ariaLabel={dictionary.common.languageSwitcherLabel}
            currentLocale={locale}
          />
        </div>

        <MobileNavigation
          closeLabel={dictionary.common.mobileMenuCloseLabel}
          currentLocale={locale}
          languageSwitcherLabel={dictionary.common.languageSwitcherLabel}
          navItems={navItems}
          openLabel={dictionary.common.mobileMenuOpenLabel}
          primaryNavigationLabel={dictionary.common.primaryNavigationLabel}
        />
      </Container>
    </header>
  );
}
