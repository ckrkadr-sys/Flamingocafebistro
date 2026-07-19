type MenuEmptyStateProps = Readonly<{
  message: string;
  title: string;
}>;

export function MenuEmptyState({ message, title }: MenuEmptyStateProps) {
  return (
    <div aria-live="polite" className="menu-empty-state" role="status">
      <h2 className="menu-empty-state__title">{title}</h2>
      <p className="menu-empty-state__message">{message}</p>
    </div>
  );
}
