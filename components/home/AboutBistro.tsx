import Link from "next/link";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

type AboutBistroProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function AboutBistro({ dictionary, locale }: AboutBistroProps) {
  return (
    <section className="home-about-bistro">
      <div
        aria-label={dictionary.home.aboutImageLabel}
        className="home-about-bistro__image"
        role="img"
      >
        <span aria-hidden="true" className="home-about-bistro__neon">
          {dictionary.home.aboutImageBadge}
        </span>
      </div>
      <div className="home-about-bistro__content">
        <p className="home-script-label">{dictionary.home.aboutEyebrow}</p>
        <h2>{dictionary.home.aboutTitle}</h2>
        <p>{dictionary.home.aboutDescription}</p>
        <Link className="home-outline-button" href={getLocalizedPath(locale, "about")}>
          {dictionary.home.aboutActionLabel}
          <span aria-hidden="true">+</span>
        </Link>
      </div>
      <span aria-hidden="true" className="home-about-bistro__stamp">
        {dictionary.home.aboutStampLabel}
      </span>
    </section>
  );
}
