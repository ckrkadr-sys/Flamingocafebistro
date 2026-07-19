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
      className={`menu-item-row menu-item-row--${displayMode} ${
        imageSrc
          ? "menu-item-row--with-image"
          : "menu-item-row--no-image"
      }`}
    >
      <div className="menu-item-row__content">
        <div className="menu-item-row__primary">
          <h3 className="menu-item-row__title">{item.name}</h3>
          <p className="menu-item-row__price">{formatPrice(item.price)}</p>
        </div>
        {hasDetails ? (
          <div className="menu-item-row__details">
            {item.description ? (
              <p className="menu-item-row__description">{item.description}</p>
            ) : null}
            {hasBadges ? (
              <div className="menu-item-row__badges">
                {item.isPopular ? (
                  <span className="menu-item-row__badge">
                    {dictionary.popularBadgeLabel}
                  </span>
                ) : null}
                {item.isNew ? (
                  <span className="menu-item-row__badge menu-item-row__badge--new">
                    {dictionary.newBadgeLabel}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      {imageSrc ? (
        <div className="menu-item-row__media">
          <Image
            alt={item.name}
            className="menu-item-row__image"
            height={112}
            sizes="(max-width: 430px) 100px, (max-width: 767px) 112px, 96px"
            src={imageSrc}
            width={112}
          />
        </div>
      ) : null}
    </article>
  );
}
