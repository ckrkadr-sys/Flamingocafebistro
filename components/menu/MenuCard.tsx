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

// Square cover crops need extra source width to keep landscape photos sharp at DPR 2–3.
const menuImageSourceSizes =
  "(max-width: 430px) 178px, (max-width: 767px) 200px, 170px";

export function MenuCard({ dictionary, displayMode, item }: MenuCardProps) {
  const imagePath = item.imagePath ?? item.image;
  const hasBadges = Boolean(item.isPopular || item.isNew);
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
          <div className="menu-item-row__copy">
            <h3 className="menu-item-row__title">{item.name}</h3>
            {item.description ? (
              <p className="menu-item-row__description">{item.description}</p>
            ) : null}
          </div>
          <p className="menu-item-row__price">{formatPrice(item.price)}</p>
        </div>
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
      {imageSrc ? (
        <div className="menu-item-row__media">
          <Image
            alt={item.name}
            className="menu-item-row__image"
            height={112}
            quality={85}
            sizes={menuImageSourceSizes}
            src={imageSrc}
            width={112}
          />
        </div>
      ) : null}
    </article>
  );
}
