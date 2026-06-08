import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";

type PageShellProps = Readonly<{
  title: string;
}>;

export function PageShell({ title }: PageShellProps) {
  return (
    <main>
      <Section spacing="compact">
        <Container>
          <SectionTitle as="h1" title={title} />
        </Container>
      </Section>
    </main>
  );
}
