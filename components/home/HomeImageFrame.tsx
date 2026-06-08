import Image from "next/image";

import { isPlaceholderAssetPath } from "@/lib/site/siteHelpers";
import { cn } from "@/lib/utils/cn";

type HomeImageFrameProps = Readonly<{
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  src: string;
}>;

export function HomeImageFrame({
  alt,
  className,
  priority = false,
  sizes = "(min-width: 60rem) 50vw, 100vw",
  src,
}: HomeImageFrameProps) {
  const isPlaceholder = isPlaceholderAssetPath(src);

  return (
    <div
      aria-label={isPlaceholder ? alt : undefined}
      className={cn(
        "home-image-frame",
        isPlaceholder && "home-image-frame--placeholder",
        className,
      )}
      role={isPlaceholder ? "img" : undefined}
    >
      {isPlaceholder ? (
        <>
          <span aria-hidden="true" className="home-image-frame__shape" />
          <span aria-hidden="true" className="home-image-frame__shape" />
        </>
      ) : (
        <Image
          alt={alt}
          className="home-image-frame__image"
          fill
          priority={priority}
          sizes={sizes}
          src={src}
        />
      )}
    </div>
  );
}
