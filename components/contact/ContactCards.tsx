import { CardSurface } from "@/components/shared/CardSurface";

export type ContactCardItem = Readonly<{
  href?: string;
  id: string;
  label: string;
  value: string;
}>;

type ContactCardsProps = Readonly<{
  items: readonly ContactCardItem[];
  title: string;
  unavailableLabel: string;
}>;

export function ContactCards({
  items,
  title,
  unavailableLabel,
}: ContactCardsProps) {
  return (
    <section className="contact-card-section">
      <h2 className="contact-section-title">{title}</h2>
      {items.length > 0 ? (
        <div className="contact-card-grid">
          {items.map((item) => (
            <CardSurface className="contact-card" key={item.id}>
              <p className="contact-card__label">{item.label}</p>
              {item.href ? (
                <a className="contact-card__value" href={item.href}>
                  {item.value}
                </a>
              ) : (
                <p className="contact-card__value">{item.value}</p>
              )}
            </CardSurface>
          ))}
        </div>
      ) : (
        <p className="contact-muted">{unavailableLabel}</p>
      )}
    </section>
  );
}
