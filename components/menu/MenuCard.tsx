import Image from "next/image";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { MenuCategoryDisplayMode } from "@/lib/menu/menuDisplayModes";
import type { LocalizedMenuItem } from "@/lib/menu/menuHelpers";
import { isPlaceholderAssetPath } from "@/lib/site/siteHelpers";
import { formatPrice } from "@/lib/utils/formatPrice";

export type MenuCardItem = LocalizedMenuItem & {
  categoryTitle: string;
};

type MenuCardProps = Readonly<{
  dictionary: Dictionary["menu"];
  displayMode: MenuCategoryDisplayMode;
  item: MenuCardItem;
}>;

export function MenuCard({ dictionary, displayMode, item }: MenuCardProps) {
  const imagePath = item.imagePath ?? item.image;
  const imageSrc =
    displayMode === "food-media-list" &&
    typeof imagePath === "string" &&
    !isPlaceholderAssetPath(imagePath)
      ? imagePath
      : null;

  return (
    <article
      className={`menu-card menu-card--${displayMode}${
        imageSrc ? " menu-card--with-image" : ""
      }`}
    >
      <div className="menu-card__row">
        {imageSrc ? (
          <div className="menu-card__media">
            <Image
              alt={item.name}
              className="menu-card__image"
              fill
              sizes="(min-width: 60rem) 128px, 96px"
              src={imageSrc}
            />
          </div>
        ) : null}
        <div className="menu-card__content">
          <div className="menu-card__heading">
            <h3 className="menu-card__title">{item.name}</h3>
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
        <span className="menu-card__leader" aria-hidden="true" />
        <p className="menu-card__price">{formatPrice(item.price)}</p>
      </div>
    </article>
  );
}
