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
  const hasBadges = Boolean(item.isPopular || item.isNew);
  const hasDetails = Boolean(item.description || hasBadges);
  const imageSrc =
    typeof imagePath === "string" && !isPlaceholderAssetPath(imagePath)
      ? imagePath
      : null;

  return (
    <article
      className={`menu-card menu-card--${displayMode}${
        imageSrc ? " menu-card--with-image" : ""
      }`}
    >
      {imageSrc ? (
        <div className="menu-card__media">
          <Image
            alt={item.name}
            className="menu-card__image"
            height={108}
            sizes="(min-width: 60rem) 112px, 88px"
            src={imageSrc}
            width={144}
          />
        </div>
      ) : null}
      <div className="menu-card__content">
        <div className="menu-card__heading">
          <h3 className="menu-card__title">{item.name}</h3>
          <p className="menu-card__price">{formatPrice(item.price)}</p>
        </div>
        {hasDetails ? (
          <div className="menu-card__details">
            {item.description ? (
              <p className="menu-card__description">{item.description}</p>
            ) : null}
            {hasBadges ? (
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
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
