type GalleryEmptyStateProps = Readonly<{
  message: string;
  title: string;
}>;

export function GalleryEmptyState({
  message,
  title,
}: GalleryEmptyStateProps) {
  return (
    <div className="gallery-empty-state">
      <h2 className="gallery-empty-state__title">{title}</h2>
      <p className="gallery-empty-state__message">{message}</p>
    </div>
  );
}
