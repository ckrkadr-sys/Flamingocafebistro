import Link from "next/link";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

type EventNightsProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function EventNights({ dictionary, locale }: EventNightsProps) {
  return (
    <section className="home-events">
      <div className="home-events__intro">
        <p className="home-script-label">{dictionary.home.eventsEyebrow}</p>
        <h2>{dictionary.home.eventsTitle}</h2>
        <p>{dictionary.home.eventsDescription}</p>
        <Link className="home-outline-button" href={getLocalizedPath(locale, "contact")}>
          {dictionary.home.eventsActionLabel}
          <span aria-hidden="true">+</span>
        </Link>
      </div>
      <div className="home-events__cards">
        {dictionary.home.eventItems.map((item) => (
          <article className="home-event-card" key={item.title}>
            <span aria-hidden="true" className="home-event-card__shine" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
