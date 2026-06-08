import Link from "next/link";

import { Container } from "@/components/shared/Container";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath, routeKeys } from "@/lib/i18n/routes";
import {
  getOpeningHours,
  getRenderableContactActions,
  getRenderableSocialLinks,
  getSiteConfig,
  isRenderableSiteFact,
} from "@/lib/site/siteHelpers";

type FooterProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function Footer({ dictionary, locale }: FooterProps) {
  const site = getSiteConfig();
  const contactActions = getRenderableContactActions();
  const socialLinks = getRenderableSocialLinks();
  const openingHours = getOpeningHours();
  const navItems = routeKeys.map((routeKey) => ({
    href: getLocalizedPath(locale, routeKey),
    label: dictionary.nav[routeKey],
  }));
  const contactItems = [
    isRenderableSiteFact(site.address)
      ? {
          href: isRenderableSiteFact(site.googleMapsUrl)
            ? site.googleMapsUrl.value
            : null,
          label: dictionary.footer.addressLabel,
          value: site.address.value,
        }
      : null,
    isRenderableSiteFact(site.phoneNumber)
      ? {
          href: contactActions.find((action) => action.type === "phone")?.href
            .value ?? null,
          label: dictionary.footer.phoneLabel,
          value: site.phoneNumber.value,
        }
      : null,
  ].filter((item) => item !== null);
  const shouldShowOpeningHours = openingHours.days.some(
    (day) => !day.isPlaceholder,
  );

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <section
          aria-label={dictionary.footer.brandAreaLabel}
          className="site-footer__brand"
        >
          <Link className="site-footer__brand-link" href={getLocalizedPath(locale, "home")}>
            <span
              aria-hidden="true"
              className="site-footer__logo"
              style={{ backgroundImage: `url(${site.logoPath})` }}
            />
            <span>{site.businessName}</span>
          </Link>
        </section>

        <nav
          aria-label={dictionary.footer.navigationLabel}
          className="site-footer__nav"
        >
          <ul className="site-footer__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="site-footer__link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="site-footer__section">
          <h2 className="site-footer__heading">{dictionary.footer.contactTitle}</h2>
          {contactItems.length > 0 ? (
            <dl className="site-footer__details">
              {contactItems.map((item) => (
                <div className="site-footer__detail" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    {item.href ? (
                      <a className="site-footer__link" href={item.href}>
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="site-footer__muted">{dictionary.footer.detailsPending}</p>
          )}
        </section>

        <section className="site-footer__section">
          <h2 className="site-footer__heading">
            {dictionary.footer.contactActionsTitle}
          </h2>
          {contactActions.length > 0 ? (
            <ul className="site-footer__list">
              {contactActions.map((action) => (
                <li key={action.id}>
                  <a
                    className="site-footer__link"
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
            <p className="site-footer__muted">{dictionary.footer.detailsPending}</p>
          )}
        </section>

        <section className="site-footer__section">
          <h2 className="site-footer__heading">
            {dictionary.footer.openingHoursTitle}
          </h2>
          {shouldShowOpeningHours ? (
            <dl className="site-footer__details">
              {openingHours.days.map((day) => (
                <div className="site-footer__detail" key={day.day}>
                  <dt>{dictionary.footer.weekdays[day.day]}</dt>
                  <dd>
                    {day.isClosed
                      ? dictionary.footer.closedLabel
                      : day.ranges
                          .map((range) => `${range.opens} - ${range.closes}`)
                          .join(", ") || dictionary.footer.detailsPending}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="site-footer__muted">{dictionary.footer.detailsPending}</p>
          )}
        </section>

        <section className="site-footer__section">
          <h2 className="site-footer__heading">{dictionary.footer.socialTitle}</h2>
          {socialLinks.length > 0 ? (
            <ul className="site-footer__list">
              {socialLinks.map((socialLink) => (
                <li key={socialLink.id}>
                  <a
                    className="site-footer__link"
                    href={socialLink.url.value}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {socialLink.handle &&
                    isRenderableSiteFact(socialLink.handle)
                      ? socialLink.handle.value
                      : dictionary.common.contactActionLabels[socialLink.platform]}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="site-footer__muted">{dictionary.footer.detailsPending}</p>
          )}
        </section>

        <p className="site-footer__copyright">{dictionary.footer.copyright}</p>
      </Container>
    </footer>
  );
}
