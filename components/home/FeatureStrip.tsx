import type { Dictionary } from "@/lib/i18n/dictionaries";

type FeatureStripProps = Readonly<{
  dictionary: Dictionary;
}>;

export function FeatureStrip({ dictionary }: FeatureStripProps) {
  return (
    <section
      aria-label={dictionary.home.featureStripLabel}
      className="home-feature-strip"
    >
      <div className="home-feature-strip__inner">
        {dictionary.home.featureItems.map((item, index) => (
          <article className="home-feature" key={item.title}>
            <span aria-hidden="true" className="home-feature__icon">
              {index + 1}
            </span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
