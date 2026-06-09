import { CardSurface } from "@/components/shared/CardSurface";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type AboutValuesProps = Readonly<{
  dictionary: Dictionary["about"];
}>;

export function AboutValues({ dictionary }: AboutValuesProps) {
  return (
    <Section className="about-values">
      <Container>
        <SectionTitle
          eyebrow={dictionary.valuesEyebrow}
          title={dictionary.valuesTitle}
        />
        <div className="about-values__grid">
          {dictionary.valueItems.map((item) => (
            <CardSurface className="about-value-card" key={item.title}>
              <h3 className="about-value-card__title">{item.title}</h3>
              <p className="about-value-card__description">
                {item.description}
              </p>
            </CardSurface>
          ))}
        </div>
      </Container>
    </Section>
  );
}
