import { ContactActions, type ContactActionItem } from "@/components/contact/ContactActions";
import { ContactCards, type ContactCardItem } from "@/components/contact/ContactCards";
import { MapPanel } from "@/components/contact/MapPanel";
import { OpeningHours } from "@/components/contact/OpeningHours";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type {
  ContactAction,
  OpeningHours as OpeningHoursData,
  SiteConfig,
  SocialLink,
} from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  isRenderableSiteFact,
} from "@/lib/site/siteHelpers";

type ContactPageProps = Readonly<{
  contactActions: readonly ContactAction[];
  dictionary: Dictionary;
  openingHours: OpeningHoursData;
  site: SiteConfig;
  socialLinks: readonly SocialLink[];
}>;

function isPresent<TValue>(value: TValue | null): value is TValue {
  return value !== null;
}

export function ContactPage({
  contactActions,
  dictionary,
  openingHours,
  site,
  socialLinks,
}: ContactPageProps) {
  const phoneAction = contactActions.find((action) => action.type === "phone");
  const contactCards: ContactCardItem[] = [
    isRenderableSiteFact(site.address)
      ? {
          href: isRenderableSiteFact(site.googleMapsUrl)
            ? site.googleMapsUrl.value
            : undefined,
          id: "address",
          label: dictionary.contact.addressLabel,
          value: site.address.value,
        }
      : null,
    isRenderableSiteFact(site.phoneNumber)
      ? {
          href: phoneAction?.href.value,
          id: "phone",
          label: dictionary.contact.phoneLabel,
          value: site.phoneNumber.value,
        }
      : null,
    isRenderableSiteFact(site.email)
      ? {
          href: `mailto:${site.email.value}`,
          id: "email",
          label: dictionary.contact.emailLabel,
          value: site.email.value,
        }
      : null,
    ...socialLinks.map((socialLink) =>
      isRenderableSiteFact(socialLink.url) &&
      socialLink.handle &&
      isRenderableSiteFact(socialLink.handle)
        ? {
            href: socialLink.url.value,
            id: socialLink.id,
            label: dictionary.contact.socialLabel,
            value: socialLink.handle.value,
        }
        : null,
    ),
  ].filter(isPresent);
  const actionItems: ContactActionItem[] = [
    ...contactActions.map((action) => ({
      external: action.type !== "phone",
      href: action.href.value,
      id: action.id,
      label: dictionary.contact.actionLabels[action.type],
    })),
    isRenderableSiteFact(site.email)
      ? {
          href: `mailto:${site.email.value}`,
          id: "email",
          label: dictionary.contact.actionLabels.email,
        }
      : null,
  ].filter(isPresent);

  return (
    <main className="contact-page">
      <Section className="contact-hero" spacing="compact">
        <Container>
          <SectionTitle
            description={dictionary.contact.intro}
            eyebrow={dictionary.contact.eyebrow}
            title={dictionary.contact.title}
          />
        </Container>
      </Section>

      <Section className="contact-content" spacing="compact">
        <Container className="contact-content__grid">
          <div className="contact-content__main">
            <ContactActions
              actions={actionItems}
              title={dictionary.contact.actionsTitle}
              unavailableLabel={dictionary.contact.unavailableLabel}
            />
            <ContactCards
              items={contactCards}
              title={dictionary.contact.detailsTitle}
              unavailableLabel={dictionary.contact.unavailableLabel}
            />
          </div>

          <div className="contact-content__side">
            <OpeningHours
              dictionary={dictionary}
              openingHours={openingHours}
            />
            <MapPanel dictionary={dictionary.contact} site={site} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
