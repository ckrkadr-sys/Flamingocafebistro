import Link from "next/link";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

type ReservationBandProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function ReservationBand({ dictionary, locale }: ReservationBandProps) {
  return (
    <section className="home-reservation">
      <span className="home-reservation__badge">{dictionary.home.visitBadge}</span>
      <div>
        <p>{dictionary.home.visitEyebrow}</p>
        <h2>{dictionary.home.visitTitle}</h2>
        <span>{dictionary.home.visitDescription}</span>
      </div>
      <Link className="home-reservation__button" href={getLocalizedPath(locale, "contact")}>
        {dictionary.home.visitActionLabel}
        <span aria-hidden="true">+</span>
      </Link>
    </section>
  );
}
