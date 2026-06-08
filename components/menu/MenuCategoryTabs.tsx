import type { LocalizedMenuCategory } from "@/lib/menu/menuHelpers";

type MenuCategoryTabsProps = Readonly<{
  allLabel: string;
  categories: readonly LocalizedMenuCategory[];
  label: string;
  onSelectCategory: (categoryId: string) => void;
  selectedCategoryId: string;
}>;

export function MenuCategoryTabs({
  allLabel,
  categories,
  label,
  onSelectCategory,
  selectedCategoryId,
}: MenuCategoryTabsProps) {
  return (
    <nav aria-label={label} className="menu-category-tabs">
      <button
        aria-pressed={selectedCategoryId === "all"}
        className="menu-category-tabs__button"
        onClick={() => onSelectCategory("all")}
        type="button"
      >
        {allLabel}
      </button>
      {categories.map((category) => (
        <button
          aria-pressed={selectedCategoryId === category.id}
          className="menu-category-tabs__button"
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          type="button"
        >
          {category.title}
        </button>
      ))}
    </nav>
  );
}
