import Link from "next/link";

import type { ContactAction, SiteConfig } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";
import { isRenderableSiteFact } from "@/lib/site/siteHelpers";

type FeatureStripProps = Readonly<{
  contactActions: readonly ContactAction[];
  dictionary: Dictionary;
  locale: Locale;
  site: SiteConfig;
}>;

type FeatureAction = Readonly<{
  description: string;
  href: string;
  id: string;
  isExternal?: boolean;
  title: string;
  value?: string;
}>;

export function FeatureStrip({
  contactActions,
  dictionary,
  locale,
  site,
}: FeatureStripProps) {
  const menuPath = getLocalizedPath(locale, "menu");
  const contactPath = getLocalizedPath(locale, "contact");
  const directionsAction = contactActions.find(
    (action) => action.type === "directions",
  );
  const phoneAction = contactActions.find((action) => action.type === "phone");
  const openingHoursSummary = getOpeningHoursSummary(site);
  const [menuItem, directionsItem, hoursItem, phoneItem] =
    dictionary.home.featureItems;

  const featureActions: readonly FeatureAction[] = [
    {
      description: menuItem.description,
      href: menuPath,
      id: "menu",
      title: menuItem.title,
      value: dictionary.nav.menu,
    },
    {
      description: directionsItem.description,
      href: directionsAction?.href.value ?? contactPath,
      id: "directions",
      isExternal: Boolean(directionsAction),
      title: directionsItem.title,
      value: isRenderableSiteFact(site.address) ? site.address.value : undefined,
    },
    {
      description: hoursItem.description,
      href: contactPath,
      id: "hours",
      title: hoursItem.title,
      value: openingHoursSummary,
    },
    {
      description: phoneItem.description,
      href: phoneAction?.href.value ?? contactPath,
      id: "phone",
      title: phoneItem.title,
      value: isRenderableSiteFact(site.phoneNumber)
        ? site.phoneNumber.value
        : undefined,
    },
  ];

  return (
    <section
      aria-label={dictionary.home.featureStripLabel}
      className="home-feature-strip"
    >
      <div className="home-feature-strip__inner">
        {featureActions.map((item) => (
          <FeatureLink item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

function FeatureLink({
  item,
}: Readonly<{
  item: FeatureAction;
}>) {
  const content = (
    <>
      <span className="home-feature__copy">
        <span className="home-feature__title">{item.title}</span>
        {item.value ? (
          <span className="home-feature__value">{item.value}</span>
        ) : null}
        <span className="home-feature__description">{item.description}</span>
      </span>
    </>
  );

  if (item.isExternal) {
    return (
      <a
        className="home-feature"
        href={item.href}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <Link className="home-feature" href={item.href}>
      {content}
    </Link>
  );
}

function getOpeningHoursSummary(site: SiteConfig) {
  const firstOpenDay = site.openingHours.days.find(
    (day) => !day.isClosed && day.ranges.length > 0,
  );

  return firstOpenDay?.ranges
    .map((range) => `${range.opens} - ${range.closes}`)
    .join(", ");
}
