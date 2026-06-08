import type { GalleryCategory } from "@/data/gallery";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type GalleryCategoryFilterProps = Readonly<{
  categories: readonly GalleryCategory[];
  dictionary: Dictionary["gallery"];
  onSelectCategory: (category: GalleryCategory | "all") => void;
  selectedCategory: GalleryCategory | "all";
}>;

export function GalleryCategoryFilter({
  categories,
  dictionary,
  onSelectCategory,
  selectedCategory,
}: GalleryCategoryFilterProps) {
  return (
    <nav
      aria-label={dictionary.categoryFilterLabel}
      className="gallery-category-filter"
    >
      <button
        aria-pressed={selectedCategory === "all"}
        className="gallery-category-filter__button"
        onClick={() => onSelectCategory("all")}
        type="button"
      >
        {dictionary.allCategoriesLabel}
      </button>
      {categories.map((category) => (
        <button
          aria-pressed={selectedCategory === category}
          className="gallery-category-filter__button"
          key={category}
          onClick={() => onSelectCategory(category)}
          type="button"
        >
          {dictionary.categoryLabels[category]}
        </button>
      ))}
    </nav>
  );
}
