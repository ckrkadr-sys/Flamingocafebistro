import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import type {
  ContactAction,
  OpeningHours,
  SiteConfig,
} from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";
import { isRenderableSiteFact } from "@/lib/site/siteHelpers";

type HomeLocationStripProps = Readonly<{
  contactActions: readonly ContactAction[];
  dictionary: Dictionary;
  locale: Locale;
  openingHours: OpeningHours;
  site: SiteConfig;
}>;

export function HomeLocationStrip({
  contactActions,
  dictionary,
  locale,
  openingHours,
  site,
}: HomeLocationStripProps) {
  const hasOpeningHours = openingHours.days.some((day) => !day.isPlaceholder);
  const hasContactDetails =
    contactActions.length > 0 || isRenderableSiteFact(site.address);

  return (
    <Section className="home-location" spacing="compact">
      <Container className="home-location__inner">
        <div className="home-location__content">
          <p className="home-section-eyebrow">{dictionary.home.locationEyebrow}</p>
          <h2 className="home-location__title">{dictionary.home.locationTitle}</h2>
          <p className="home-location__description">
            {dictionary.home.locationDescription}
          </p>
        </div>

        <div className="home-location__details">
          {hasContactDetails ? (
            <ul className="home-location__actions">
              {isRenderableSiteFact(site.address) ? (
                <li>{site.address.value}</li>
              ) : null}
              {contactActions.map((action) => (
                <li key={action.id}>
                  <a
                    className="home-location__link"
                    href={action.href.value}
                    rel={action.type === "phone" ? undefined : "noreferrer"}
                    target={action.type === "phone" ? undefined : "_blank"}
                  >
                    {dictionary.common.contactActionLabels[action.type]}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="home-location__pending">
              {dictionary.home.locationPending}
            </p>
          )}

          {hasOpeningHours ? (
            <dl className="home-location__hours">
              {openingHours.days.map((day) => (
                <div className="home-location__hour" key={day.day}>
                  <dt>{dictionary.footer.weekdays[day.day]}</dt>
                  <dd>
                    {day.isClosed
                      ? dictionary.footer.closedLabel
                      : day.ranges
                          .map((range) => `${range.opens} - ${range.closes}`)
                          .join(", ") || dictionary.home.locationPending}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <Button href={getLocalizedPath(locale, "contact")}>
            {dictionary.home.locationActionLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
