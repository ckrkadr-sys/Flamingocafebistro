import type { Dictionary } from "@/lib/i18n/dictionaries";

import { MenuCard, type MenuCardItem } from "./MenuCard";

type MenuGridProps = Readonly<{
  dictionary: Dictionary["menu"];
  items: readonly MenuCardItem[];
}>;

export function MenuGrid({ dictionary, items }: MenuGridProps) {
  return (
    <div className="menu-grid">
      {items.map((item) => (
        <MenuCard dictionary={dictionary} item={item} key={item.id} />
      ))}
    </div>
  );
}
