import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { LocalizedMenuItem } from "@/lib/menu/menuHelpers";
import { formatPrice } from "@/lib/utils/formatPrice";

export type MenuCardItem = LocalizedMenuItem & {
  categoryTitle: string;
};

type MenuCardProps = Readonly<{
  dictionary: Dictionary["menu"];
  item: MenuCardItem;
}>;

export function MenuCard({ dictionary, item }: MenuCardProps) {
  return (
    <article className="menu-card">
      <div className="menu-card__row">
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
