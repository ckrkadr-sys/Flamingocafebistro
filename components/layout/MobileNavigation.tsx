"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Locale } from "@/lib/i18n/locales";

type MobileNavigationProps = Readonly<{
  closeLabel: string;
  currentLocale: Locale;
  languageSwitcherLabel: string;
  navItems: readonly Readonly<{
    href: string;
    label: string;
  }>[];
  openLabel: string;
  primaryNavigationLabel: string;
}>;

export function MobileNavigation({
  closeLabel,
  currentLocale,
  languageSwitcherLabel,
  navItems,
  openLabel,
  primaryNavigationLabel,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const toggleLabel = isOpen ? closeLabel : openLabel;

  return (
    <div className="mobile-navigation">
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={toggleLabel}
        className="mobile-navigation__toggle"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true" className="mobile-navigation__toggle-mark" />
        <span>{toggleLabel}</span>
      </button>

      <div
        className="mobile-navigation__panel"
        hidden={!isOpen}
        id={menuId}
      >
        <nav aria-label={primaryNavigationLabel}>
          <ul className="mobile-navigation__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="mobile-navigation__link"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
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
    </div>
  );
}
