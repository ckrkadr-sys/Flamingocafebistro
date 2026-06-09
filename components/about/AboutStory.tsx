import { CardSurface } from "@/components/shared/CardSurface";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type AboutStoryProps = Readonly<{
  dictionary: Dictionary["about"];
}>;

export function AboutStory({ dictionary }: AboutStoryProps) {
  return (
    <Section className="about-story" spacing="compact">
      <Container className="about-story__grid">
        <SectionTitle
          eyebrow={dictionary.storyEyebrow}
          title={dictionary.storyTitle}
        />
        <CardSurface className="about-story__surface">
          <p className="about-story__text">{dictionary.storyText}</p>
        </CardSurface>
      </Container>
    </Section>
  );
}
