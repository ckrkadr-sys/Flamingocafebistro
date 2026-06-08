import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getRenderableContactActions } from "@/lib/site/siteHelpers";

type FloatingContactActionsProps = Readonly<{
  dictionary: Dictionary;
}>;

export function FloatingContactActions({
  dictionary,
}: FloatingContactActionsProps) {
  const contactActions = getRenderableContactActions().filter(
    (action) => action.isPrimary,
  );

  if (contactActions.length === 0) {
    return null;
  }

  return (
    <aside
      aria-label={dictionary.common.floatingContactActionsLabel}
      className="floating-contact-actions"
    >
      {contactActions.map((action) => (
        <a
          className="floating-contact-actions__link"
          href={action.href.value}
          key={action.id}
          rel={action.type === "phone" ? undefined : "noreferrer"}
          target={action.type === "phone" ? undefined : "_blank"}
        >
          {dictionary.common.contactActionLabels[action.type]}
        </a>
      ))}
    </aside>
  );
}
