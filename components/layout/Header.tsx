import { HeaderClient } from "@/components/layout/HeaderClient";
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
    routeKey,
  }));

  return (
    <HeaderClient
      brandLabel={site.businessName}
      currentLocale={locale}
      homeHref={getLocalizedPath(locale, "home")}
      languageSwitcherLabel={dictionary.common.languageSwitcherLabel}
      logoPath={site.logoPath}
      mobileMenuOpenLabel={dictionary.common.mobileMenuOpenLabel}
      navItems={navItems}
      primaryNavigationLabel={dictionary.common.primaryNavigationLabel}
    />
  );
}
