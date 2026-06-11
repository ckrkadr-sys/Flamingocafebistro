import Link from "next/link";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

type TestimonialsProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function Testimonials({ dictionary, locale }: TestimonialsProps) {
  return (
    <section className="home-notes">
      <div className="home-section-heading home-section-heading--with-action">
        <div>
          <p>{dictionary.home.notesEyebrow}</p>
          <h2>{dictionary.home.notesTitle}</h2>
        </div>
        <Link className="home-outline-button" href={getLocalizedPath(locale, "contact")}>
          {dictionary.home.notesActionLabel}
          <span aria-hidden="true">+</span>
        </Link>
      </div>
      <div className="home-notes__grid">
        {dictionary.home.noteItems.map((item) => (
          <article className="home-note" key={item.title}>
            <span aria-hidden="true" className="home-note__avatar" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
