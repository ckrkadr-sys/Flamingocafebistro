type MenuEmptyStateProps = Readonly<{
  message: string;
  title: string;
}>;

export function MenuEmptyState({ message, title }: MenuEmptyStateProps) {
  return (
    <div className="menu-empty-state">
      <h2 className="menu-empty-state__title">{title}</h2>
      <p className="menu-empty-state__message">{message}</p>
    </div>
  );
}
