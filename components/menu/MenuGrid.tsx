import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { MenuSection } from "@/lib/menu/menuSections";

import { MenuCard } from "./MenuCard";

type MenuGridProps = Readonly<{
  dictionary: Dictionary["menu"];
  sections: readonly MenuSection[];
}>;

export function getMenuSectionElementId(categoryId: string) {
  return `menu-category-${categoryId}`;
}

export function MenuGrid({ dictionary, sections }: MenuGridProps) {
  return (
    <div className="menu-chapters">
      {sections.map((section) => (
        <section
          className={`menu-chapter menu-chapter--${section.displayMode}`}
          data-display-mode={section.displayMode}
          id={getMenuSectionElementId(section.categoryId)}
          key={section.categoryId}
        >
          <header className="menu-chapter__header">
            <div className="menu-chapter__heading">
              <h2 className="menu-chapter__title">{section.categoryTitle}</h2>
              {section.categoryDescription ? (
                <p className="menu-chapter__description">
                  {section.categoryDescription}
                </p>
              ) : null}
            </div>
          </header>
          <div className="menu-chapter__items">
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
