import { CardSurface } from "@/components/shared/CardSurface";
import type { OpeningHours as OpeningHoursData } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type OpeningHoursProps = Readonly<{
  dictionary: Dictionary;
  openingHours: OpeningHoursData;
}>;

export function OpeningHours({
  dictionary,
  openingHours,
}: OpeningHoursProps) {
  const visibleDays = openingHours.days.filter((day) => !day.isPlaceholder);

  return (
    <section className="contact-opening-hours">
      <h2 className="contact-section-title">
        {dictionary.contact.openingHoursTitle}
      </h2>
      <CardSurface className="contact-opening-hours__surface">
        {visibleDays.length > 0 ? (
          <dl className="contact-opening-hours__list">
            {visibleDays.map((day) => (
              <div className="contact-opening-hours__day" key={day.day}>
                <dt>{dictionary.common.weekdays[day.day]}</dt>
                <dd>
                  {day.isClosed
                    ? dictionary.common.closedLabel
                    : day.ranges
                        .map((range) => `${range.opens} - ${range.closes}`)
                        .join(", ") || dictionary.contact.unavailableLabel}
                </dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="contact-muted">{dictionary.contact.unavailableLabel}</p>
        )}
      </CardSurface>
    </section>
  );
}
