"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Locale } from "@/lib/i18n/locales";
import { getRouteKeyFromPath, type RouteKey } from "@/lib/i18n/routes";

type HeaderNavItem = Readonly<{
  href: string;
  label: string;
  routeKey: RouteKey;
}>;

type HeaderClientProps = Readonly<{
  brandLabel: string;
  currentLocale: Locale;
  homeHref: string;
  languageSwitcherLabel: string;
  logoPath: string;
  mobileMenuOpenLabel: string;
  navItems: readonly HeaderNavItem[];
  primaryNavigationLabel: string;
}>;

export function HeaderClient({
  brandLabel,
  currentLocale,
  homeHref,
  languageSwitcherLabel,
  logoPath,
  mobileMenuOpenLabel,
  navItems,
  primaryNavigationLabel,
}: HeaderClientProps) {
  const pathname = usePathname();
  const activeRouteKey = getRouteKeyFromPath(pathname ?? homeHref);

  return (
    <header className="home-header">
      <div className="home-header__bar">
        <nav
          aria-label={primaryNavigationLabel}
          className="home-header__nav home-header__nav--left"
        >
          {navItems.map((item) => (
            <Link
              aria-current={
                activeRouteKey === item.routeKey ? "page" : undefined
              }
              className={
                item.routeKey === "contact"
                  ? "home-header__link home-header__cta"
                  : "home-header__link"
              }
              href={item.href}
              key={item.routeKey}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          aria-label={brandLabel}
          className="home-header__logo-link"
          href={homeHref}
        >
          <Image
            alt=""
            className="home-header__logo"
            height={176}
            priority
            src={logoPath}
            width={176}
          />
        </Link>

        <div className="home-header__actions">
          <LanguageSwitcher
            ariaLabel={languageSwitcherLabel}
            currentLocale={currentLocale}
          />
        </div>

        <details className="home-header__mobile">
          <summary>{mobileMenuOpenLabel}</summary>
          <div className="home-header__mobile-panel">
            <nav aria-label={primaryNavigationLabel}>
              <ul className="home-header__mobile-list">
                {navItems.map((item) => (
                  <li key={item.routeKey}>
                    <Link
                      aria-current={
                        activeRouteKey === item.routeKey ? "page" : undefined
                      }
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageSwitcher
              ariaLabel={languageSwitcherLabel}
              currentLocale={currentLocale}
            />
          </div>
        </details>
      </div>
    </header>
  );
}
