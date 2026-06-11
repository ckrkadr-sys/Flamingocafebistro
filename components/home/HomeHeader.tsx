import { Header } from "@/components/layout/Header";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";

type HomeHeaderProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function HomeHeader(props: HomeHeaderProps) {
  return <Header {...props} />;
}
