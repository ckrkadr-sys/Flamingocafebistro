import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  getMenuCategoryDisplayMode,
  type MenuCategoryDisplayMode,
} from "@/lib/menu/menuDisplayModes";

import { MenuCard, type MenuCardItem } from "./MenuCard";

type MenuGridProps = Readonly<{
  dictionary: Dictionary["menu"];
  items: readonly MenuCardItem[];
}>;

export function MenuGrid({ dictionary, items }: MenuGridProps) {
  const sections = items.reduce<
    {
      categoryId: string;
      categoryTitle: string;
      displayMode: MenuCategoryDisplayMode;
      items: MenuCardItem[];
    }[]
  >((groupedItems, item) => {
    const currentSection = groupedItems.find(
      (section) => section.categoryId === item.categoryId,
    );

    if (currentSection) {
      currentSection.items.push(item);
      return groupedItems;
    }

    return [
      ...groupedItems,
      {
        categoryId: item.categoryId,
        categoryTitle: item.categoryTitle,
        displayMode: getMenuCategoryDisplayMode(item.categoryId),
        items: [item],
      },
    ];
  }, []);

  return (
    <div className="menu-list">
      {sections.map((section) => (
        <section
          className={`menu-list__section menu-list__section--${section.displayMode}`}
          data-display-mode={section.displayMode}
          key={section.categoryId}
        >
          <h2 className="menu-list__title">{section.categoryTitle}</h2>
          <div className="menu-list__items">
            {section.items.map((item) => (
              <MenuCard
                dictionary={dictionary}
                displayMode={section.displayMode}
                item={item}
                key={item.id}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
