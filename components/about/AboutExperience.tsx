import { HomeImageFrame } from "@/components/home/HomeImageFrame";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type AboutExperienceProps = Readonly<{
  dictionary: Dictionary["about"];
  image: Readonly<{
    alt: string;
    src: string;
  }>;
}>;

export function AboutExperience({
  dictionary,
  image,
}: AboutExperienceProps) {
  return (
    <Section className="about-experience" spacing="spacious">
      <Container className="about-experience__grid">
        <HomeImageFrame
          alt={image.alt}
          className="about-experience__image"
          src={image.src}
        />
        <div className="about-experience__content">
          <SectionTitle
            description={dictionary.experienceText}
            eyebrow={dictionary.experienceEyebrow}
            title={dictionary.experienceTitle}
          />
        </div>
      </Container>
    </Section>
  );
}
