import Image from "next/image";

import { CardSurface } from "@/components/shared/CardSurface";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { LocalizedMenuItem } from "@/lib/menu/menuHelpers";
import { isPlaceholderAssetPath } from "@/lib/site/siteHelpers";
import { formatPrice } from "@/lib/utils/formatPrice";

export type MenuCardItem = LocalizedMenuItem & {
  categoryTitle: string;
};

type MenuCardProps = Readonly<{
  dictionary: Dictionary["menu"];
  item: MenuCardItem;
}>;

export function MenuCard({ dictionary, item }: MenuCardProps) {
  const imageSrc =
    typeof item.image === "string" && !isPlaceholderAssetPath(item.image)
      ? item.image
      : null;

  return (
    <CardSurface className="menu-card">
      <div className="menu-card__media" aria-hidden={!imageSrc}>
        {imageSrc ? (
          <Image
            alt={item.name}
            className="menu-card__image"
            fill
            sizes="(min-width: 60rem) 30vw, 100vw"
            src={imageSrc}
          />
        ) : (
          <>
            <span className="menu-card__shape" />
            <span className="menu-card__shape" />
          </>
        )}
      </div>

      <div className="menu-card__content">
        <div className="menu-card__meta">
          <span className="menu-card__category">{item.categoryTitle}</span>
          <span className="menu-card__price">{formatPrice(item.price)}</span>
        </div>

        <div className="menu-card__heading">
          <h2 className="menu-card__title">{item.name}</h2>
          <div className="menu-card__badges">
            {item.isPopular ? (
              <span className="menu-card__badge">
                {dictionary.popularBadgeLabel}
              </span>
            ) : null}
            {item.isNew ? (
              <span className="menu-card__badge menu-card__badge--new">
                {dictionary.newBadgeLabel}
              </span>
            ) : null}
          </div>
        </div>

        {item.description ? (
          <p className="menu-card__description">{item.description}</p>
        ) : null}
      </div>
    </CardSurface>
  );
}
