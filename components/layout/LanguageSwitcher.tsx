"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type SyntheticEvent } from "react";

import {
  localeLabels,
  supportedLocales,
  type Locale,
} from "@/lib/i18n/locales";
import { getEquivalentLocalizedPath } from "@/lib/i18n/routes";

type LanguageSwitcherProps = Readonly<{
  currentLocale: Locale;
  ariaLabel: string;
  disclosureGroupName?: string;
  languageNames?: Readonly<Record<Locale, string>>;
  onOpen?: () => void;
}>;

export function LanguageSwitcher({
  currentLocale,
  ariaLabel,
  disclosureGroupName,
  languageNames,
  onOpen,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);
  const switcherRef = useRef<HTMLDetailsElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const [currentPath, setCurrentPath] = useState(pathname);
  const currentLanguageName =
    languageNames?.[currentLocale] ?? localeLabels[currentLocale];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const switcher = switcherRef.current;

      if (
        switcher?.open &&
        event.target instanceof Node &&
        !switcher.contains(event.target)
      ) {
        switcher.removeAttribute("open");
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      const switcher = switcherRef.current;

      if (event.key !== "Escape" || !switcher?.open) {
        return;
      }

      event.preventDefault();
      switcher.removeAttribute("open");
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      previousPathnameRef.current = pathname;
      switcherRef.current?.removeAttribute("open");
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      setCurrentPath(
        `${window.location.pathname}${window.location.search}${window.location.hash}`,
      );
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [pathname]);

  function handleToggle(event: SyntheticEvent<HTMLDetailsElement>) {
    if (!event.currentTarget.open) {
      return;
    }

    onOpen?.();
    setCurrentPath(
      `${window.location.pathname}${window.location.search}${window.location.hash}`,
    );
  }

  function handleLocaleSelect() {
    switcherRef.current?.removeAttribute("open");
  }

  return (
    <details
      className="language-switcher"
      name={disclosureGroupName}
      onToggle={handleToggle}
      ref={switcherRef}
    >
      <summary
        aria-label={`${ariaLabel}: ${currentLanguageName}`}
        className="language-switcher__trigger"
        ref={triggerRef}
      >
        <span>{localeLabels[currentLocale]}</span>
        <span aria-hidden="true" className="language-switcher__chevron" />
      </summary>

      <div className="language-switcher__popover">
        <nav aria-label={ariaLabel}>
          <ul className="language-switcher__list">
            {supportedLocales.map((locale) => (
              <li key={locale}>
                <Link
                  aria-current={locale === currentLocale ? "true" : undefined}
                  className="language-switcher__link"
                  href={getEquivalentLocalizedPath(currentPath, locale)}
                  hrefLang={locale}
                  lang={locale}
                  onNavigate={handleLocaleSelect}
                >
                  {languageNames?.[locale] ?? localeLabels[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </details>
  );
}
