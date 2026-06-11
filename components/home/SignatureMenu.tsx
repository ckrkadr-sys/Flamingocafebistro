import Link from "next/link";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";
import type { LocalizedMenuItem } from "@/lib/menu/menuHelpers";
import { formatPrice } from "@/lib/utils/formatPrice";

type SignatureMenuProps = Readonly<{
  dictionary: Dictionary;
  items: readonly LocalizedMenuItem[];
  locale: Locale;
}>;

export function SignatureMenu({
  dictionary,
  items,
  locale,
}: SignatureMenuProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="home-signature">
      <div className="home-section-heading home-section-heading--with-action">
        <div>
          <p>{dictionary.home.signatureEyebrow}</p>
          <h2>{dictionary.home.signatureTitle}</h2>
        </div>
        <Link className="home-outline-button" href={getLocalizedPath(locale, "menu")}>
          {dictionary.home.signatureActionLabel}
          <span aria-hidden="true">+</span>
        </Link>
      </div>

      <div className="home-signature__grid">
        {items.slice(0, 4).map((item, index) => (
          <Link
            className="home-signature-card"
            href={`${getLocalizedPath(locale, "menu")}?category=${item.categoryId}`}
            key={item.id}
          >
            <span
              aria-label={dictionary.home.menuCardImageLabel}
              className="home-signature-card__media"
              role="img"
            >
              <span aria-hidden="true" className="home-signature-card__plate" />
              <span aria-hidden="true" className="home-signature-card__accent" />
            </span>
            <span className="home-signature-card__price">
              {formatPrice(item.price)}
            </span>
            <span className="home-signature-card__body">
              <span className="home-signature-card__title">{item.name}</span>
              {item.description ? (
                <span className="home-signature-card__description">
                  {item.description}
                </span>
              ) : null}
              <span className="home-signature-card__index" aria-hidden="true">
                0{index + 1}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
