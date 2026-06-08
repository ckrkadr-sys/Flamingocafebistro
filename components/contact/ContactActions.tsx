import { Button } from "@/components/shared/Button";

export type ContactActionItem = Readonly<{
  external?: boolean;
  href: string;
  id: string;
  label: string;
}>;

type ContactActionsProps = Readonly<{
  actions: readonly ContactActionItem[];
  title: string;
  unavailableLabel: string;
}>;

export function ContactActions({
  actions,
  title,
  unavailableLabel,
}: ContactActionsProps) {
  return (
    <section className="contact-actions">
      <h2 className="contact-section-title">{title}</h2>
      {actions.length > 0 ? (
        <div className="contact-actions__grid">
          {actions.map((action) => (
            <Button
              href={action.href}
              key={action.id}
              rel={action.external ? "noreferrer" : undefined}
              target={action.external ? "_blank" : undefined}
              variant={action.external ? "secondary" : "primary"}
            >
              {action.label}
            </Button>
          ))}
        </div>
      ) : (
        <p className="contact-muted">{unavailableLabel}</p>
      )}
    </section>
  );
}
