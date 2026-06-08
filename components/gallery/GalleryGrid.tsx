import type { Dictionary } from "@/lib/i18n/dictionaries";

import { GalleryCard, type GalleryCardItem } from "./GalleryCard";

type GalleryGridProps = Readonly<{
  dictionary: Dictionary["gallery"];
  items: readonly GalleryCardItem[];
}>;

export function GalleryGrid({ dictionary, items }: GalleryGridProps) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <GalleryCard
          categoryLabel={dictionary.categoryLabels[item.category]}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
}
