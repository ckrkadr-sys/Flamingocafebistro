import { Button } from "@/components/shared/Button";
import { CardSurface } from "@/components/shared/CardSurface";
import type { SiteConfig } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { isRenderableSiteFact } from "@/lib/site/siteHelpers";

type MapPanelProps = Readonly<{
  dictionary: Dictionary["contact"];
  site: SiteConfig;
}>;

export function MapPanel({ dictionary, site }: MapPanelProps) {
  const embedUrl = isRenderableSiteFact(site.googleMapsEmbedUrl)
    ? site.googleMapsEmbedUrl.value
    : null;
  const directionsUrl = isRenderableSiteFact(site.googleMapsUrl)
    ? site.googleMapsUrl.value
    : null;

  return (
    <section className="contact-map">
      <h2 className="contact-section-title">{dictionary.mapTitle}</h2>
      <CardSurface className="contact-map__surface" padded={false}>
        {embedUrl ? (
          <iframe
            className="contact-map__iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={embedUrl}
            title={dictionary.mapEmbedTitle}
          />
        ) : (
          <div className="contact-map__placeholder">
            <span aria-hidden="true" className="contact-map__shape" />
            <div className="contact-map__placeholder-content">
              <h3>{dictionary.mapPlaceholderTitle}</h3>
              <p>{dictionary.mapPlaceholderDescription}</p>
              {directionsUrl ? (
                <Button
                  href={directionsUrl}
                  rel="noreferrer"
                  target="_blank"
                  variant="secondary"
                >
                  {dictionary.actionLabels.directions}
                </Button>
              ) : null}
            </div>
          </div>
        )}
      </CardSurface>
    </section>
  );
}
