import { AboutCta } from "@/components/about/AboutCta";
import { AboutExperience } from "@/components/about/AboutExperience";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import type { SiteConfig } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";

type AboutImage = Readonly<{
  alt: string;
  src: string;
}>;

type AboutPageProps = Readonly<{
  dictionary: Dictionary["about"];
  experienceImage: AboutImage;
  heroImage: AboutImage;
  locale: Locale;
  site: SiteConfig;
}>;

export function AboutPage({
  dictionary,
  experienceImage,
  heroImage,
  locale,
  site,
}: AboutPageProps) {
  return (
    <main className="about-page">
      <AboutHero
        dictionary={dictionary}
        image={heroImage}
        locale={locale}
        site={site}
      />
      <AboutStory dictionary={dictionary} />
      <AboutExperience dictionary={dictionary} image={experienceImage} />
      <AboutValues dictionary={dictionary} />
      <AboutCta dictionary={dictionary} locale={locale} />
    </main>
  );
}
