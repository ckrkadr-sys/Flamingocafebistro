type MenuCategoryTabsProps = Readonly<{
  activeCategoryId: string;
  categories: readonly {
    id: string;
    targetId: string;
    title: string;
  }[];
  label: string;
  onSelectCategory: (categoryId: string) => void;
}>;

export function MenuCategoryTabs({
  activeCategoryId,
  categories,
  label,
  onSelectCategory,
}: MenuCategoryTabsProps) {
  return (
    <nav aria-label={label} className="menu-category-tabs">
      <ol className="menu-category-tabs__list">
        {categories.map((category) => (
          <li className="menu-category-tabs__item" key={category.id}>
            <a
              aria-current={
                activeCategoryId === category.id ? "location" : undefined
              }
              className="menu-category-tabs__button"
              href={`#${category.targetId}`}
              onClick={(event) => {
                event.preventDefault();
                onSelectCategory(category.id);
              }}
            >
              <span className="menu-category-tabs__title">
                {category.title}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
