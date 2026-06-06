export const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export type Weekday = (typeof weekdays)[number];

export type SiteFact<TValue extends string | null = string> = {
  value: TValue;
  isPlaceholder: boolean;
  note?: string;
};

export type OpeningTimeRange = {
  opens: string;
  closes: string;
};

export type OpeningHoursDay = {
  day: Weekday;
  isClosed: boolean;
  ranges: readonly OpeningTimeRange[];
  isPlaceholder: boolean;
  note?: string;
};

export type OpeningHours = {
  timezone: string;
  days: readonly OpeningHoursDay[];
};

export type SocialPlatform = "instagram";

export type SocialLink = {
  id: string;
  platform: SocialPlatform;
  url: SiteFact;
  handle?: SiteFact;
};

export type ContactActionType =
  | "phone"
  | "whatsapp"
  | "directions"
  | "instagram";

export type ContactAction = {
  id: string;
  type: ContactActionType;
  href: SiteFact;
  value?: SiteFact<string | null>;
  isPrimary?: boolean;
};

export type SiteConfig = {
  businessName: string;
  shortBrandName: string;
  address: SiteFact;
  phoneNumber: SiteFact;
  whatsAppNumber: SiteFact;
  email: SiteFact<string | null>;
  instagram: {
    handle: SiteFact;
    url: SiteFact;
  };
  googleMapsUrl: SiteFact;
  googleMapsEmbedUrl: SiteFact<string | null>;
  openingHours: OpeningHours;
  logoPath: string;
  defaultHeroImagePath: string;
  socialLinks: readonly SocialLink[];
  primaryContactActions: readonly ContactAction[];
};

const placeholderNote = "Placeholder: real business details have not been provided yet.";
const openingHoursPlaceholderNote = "Placeholder: real opening hours have not been provided yet.";

// Centralized placeholder business facts for Phase 4. Replace these values with
// verified real business details before publishing contact/location UI or SEO.
export const siteConfig: SiteConfig = {
  businessName: "Flamingo Cafe&Bistro",
  shortBrandName: "Flamingo",
  address: {
    value: "PLACEHOLDER_ADDRESS",
    isPlaceholder: true,
    note: placeholderNote,
  },
  phoneNumber: {
    value: "PLACEHOLDER_PHONE_NUMBER",
    isPlaceholder: true,
    note: placeholderNote,
  },
  whatsAppNumber: {
    value: "PLACEHOLDER_WHATSAPP_NUMBER",
    isPlaceholder: true,
    note: placeholderNote,
  },
  email: {
    value: null,
    isPlaceholder: true,
    note: "Placeholder: business email has not been provided yet.",
  },
  instagram: {
    handle: {
      value: "PLACEHOLDER_INSTAGRAM_HANDLE",
      isPlaceholder: true,
      note: placeholderNote,
    },
    url: {
      value: "PLACEHOLDER_INSTAGRAM_URL",
      isPlaceholder: true,
      note: placeholderNote,
    },
  },
  googleMapsUrl: {
    value: "PLACEHOLDER_GOOGLE_MAPS_URL",
    isPlaceholder: true,
    note: placeholderNote,
  },
  googleMapsEmbedUrl: {
    value: null,
    isPlaceholder: true,
    note: "Placeholder: Google Maps embed URL has not been provided yet.",
  },
  openingHours: {
    timezone: "Europe/Istanbul",
    days: weekdays.map((day) => ({
      day,
      isClosed: false,
      ranges: [],
      isPlaceholder: true,
      note: openingHoursPlaceholderNote,
    })),
  },
  logoPath: "/images/placeholders/logo.svg",
  defaultHeroImagePath: "/images/placeholders/hero-01.webp",
  socialLinks: [
    {
      id: "instagram",
      platform: "instagram",
      handle: {
        value: "PLACEHOLDER_INSTAGRAM_HANDLE",
        isPlaceholder: true,
        note: placeholderNote,
      },
      url: {
        value: "PLACEHOLDER_INSTAGRAM_URL",
        isPlaceholder: true,
        note: placeholderNote,
      },
    },
  ],
  primaryContactActions: [
    {
      id: "phone",
      type: "phone",
      href: {
        value: "tel:PLACEHOLDER_PHONE_NUMBER",
        isPlaceholder: true,
        note: placeholderNote,
      },
      value: {
        value: "PLACEHOLDER_PHONE_NUMBER",
        isPlaceholder: true,
        note: placeholderNote,
      },
      isPrimary: true,
    },
    {
      id: "whatsapp",
      type: "whatsapp",
      href: {
        value: "https://wa.me/PLACEHOLDER_WHATSAPP_NUMBER",
        isPlaceholder: true,
        note: placeholderNote,
      },
      value: {
        value: "PLACEHOLDER_WHATSAPP_NUMBER",
        isPlaceholder: true,
        note: placeholderNote,
      },
      isPrimary: true,
    },
    {
      id: "directions",
      type: "directions",
      href: {
        value: "PLACEHOLDER_GOOGLE_MAPS_URL",
        isPlaceholder: true,
        note: placeholderNote,
      },
      isPrimary: true,
    },
    {
      id: "instagram",
      type: "instagram",
      href: {
        value: "PLACEHOLDER_INSTAGRAM_URL",
        isPlaceholder: true,
        note: placeholderNote,
      },
      value: {
        value: "PLACEHOLDER_INSTAGRAM_HANDLE",
        isPlaceholder: true,
        note: placeholderNote,
      },
    },
  ],
};
