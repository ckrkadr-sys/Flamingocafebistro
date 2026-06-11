import Image from "next/image";
import Link from "next/link";

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

type HomeFooterProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function HomeFooter({ dictionary, locale }: HomeFooterProps) {
  const site = getSiteConfig();
  const contactActions = getRenderableContactActions();
  const socialLinks = getRenderableSocialLinks();
  const openingHours = getOpeningHours();
  const phoneAction = contactActions.find((action) => action.type === "phone");

  return (
    <footer className="home-footer">
      <div className="home-footer__brand">
        <Link href={getLocalizedPath(locale, "home")}>
          <Image alt="" height={92} src={site.logoPath} width={92} />
          <span>{site.businessName}</span>
        </Link>
        <p>{dictionary.home.footerTagline}</p>
        {socialLinks.length > 0 ? (
          <div className="home-footer__socials">
            {socialLinks.map((socialLink) => (
              <a
                href={socialLink.url.value}
                key={socialLink.id}
                rel="noreferrer"
                target="_blank"
              >
                {socialLink.handle && isRenderableSiteFact(socialLink.handle)
                  ? socialLink.handle.value
                  : dictionary.common.contactActionLabels[socialLink.platform]}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <nav aria-label={dictionary.footer.navigationLabel}>
        <h2>{dictionary.home.footerQuickLinksTitle}</h2>
        <ul>
          {routeKeys.map((routeKey) => (
            <li key={routeKey}>
              <Link href={getLocalizedPath(locale, routeKey)}>
                {dictionary.nav[routeKey]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section>
        <h2>{dictionary.footer.openingHoursTitle}</h2>
        <dl>
          {openingHours.days.slice(0, 4).map((day) => (
            <div key={day.day}>
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
      </section>

      <section>
        <h2>{dictionary.footer.contactTitle}</h2>
        {isRenderableSiteFact(site.address) ? <p>{site.address.value}</p> : null}
        {isRenderableSiteFact(site.phoneNumber) ? (
          <a href={phoneAction?.href.value ?? undefined}>{site.phoneNumber.value}</a>
        ) : null}
      </section>

      <section className="home-footer__loop">
        <h2>{dictionary.home.footerStayTitle}</h2>
        <p>{dictionary.home.footerStayText}</p>
        <Link href={getLocalizedPath(locale, "contact")}>
          {dictionary.home.footerStayActionLabel}
        </Link>
      </section>
    </footer>
  );
}
