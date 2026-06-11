import Image from "next/image";

import { CardSurface } from "@/components/shared/CardSurface";
import type { GalleryCategory } from "@/data/gallery";
import { isPlaceholderAssetPath } from "@/lib/site/siteHelpers";
import { cn } from "@/lib/utils/cn";

export type GalleryCardItem = Readonly<{
  alt: string;
  category: GalleryCategory;
  featured?: boolean;
  height?: number;
  id: string;
  src: string;
  width?: number;
}>;

type GalleryCardProps = Readonly<{
  categoryLabel: string;
  item: GalleryCardItem;
}>;

export function GalleryCard({ categoryLabel, item }: GalleryCardProps) {
  const isPlaceholder = isPlaceholderAssetPath(item.src);

  return (
    <CardSurface
      className={cn("gallery-card", item.featured && "gallery-card--featured")}
      padded={false}
    >
      <div
        aria-label={isPlaceholder ? item.alt : undefined}
        className="gallery-card__media"
        role={isPlaceholder ? "img" : undefined}
      >
        {isPlaceholder ? (
          <>
            <span aria-hidden="true" className="gallery-card__shape" />
            <span aria-hidden="true" className="gallery-card__shape" />
          </>
        ) : (
          <Image
            alt={item.alt}
            className="gallery-card__image"
            fill
            sizes="(min-width: 60rem) 33vw, (min-width: 48rem) 50vw, 100vw"
            src={item.src}
          />
        )}
      </div>
      <div className="gallery-card__content">
        <p className="gallery-card__category">{categoryLabel}</p>
      </div>
    </CardSurface>
  );
}
