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
  whatsAppNumber: SiteFact<string | null>;
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

const unavailableNote = "Unavailable by current project decision.";

// Centralized placeholder business facts for Phase 4. Replace these values with
// verified real business details before publishing contact/location UI or SEO.
export const siteConfig: SiteConfig = {
  businessName: "Flamingo Cafe&Bistro",
  shortBrandName: "Flamingo",
  address: {
    value: "Foça, 1054. Sk. 62h, 48300 Fethiye/Muğla",
    isPlaceholder: false,
  },
  phoneNumber: {
    value: "+90 543 212 25 43",
    isPlaceholder: false,
  },
  whatsAppNumber: {
    value: null,
    isPlaceholder: false,
    note: unavailableNote,
  },
  email: {
    value: null,
    isPlaceholder: false,
    note: unavailableNote,
  },
  instagram: {
    handle: {
      value: "@flamingocafe.bistro",
      isPlaceholder: false,
    },
    url: {
      value: "https://www.instagram.com/flamingocafe.bistro",
      isPlaceholder: false,
    },
  },
  googleMapsUrl: {
    value: "https://share.google/dAPjCBPb8m6F2OZ9e",
    isPlaceholder: false,
  },
  googleMapsEmbedUrl: {
    value: null,
    isPlaceholder: false,
    note: unavailableNote,
  },
  openingHours: {
    timezone: "Europe/Istanbul",
    days: weekdays.map((day) => ({
      day,
      isClosed: false,
      ranges: [
        {
          opens: "10:00",
          closes: "23:30",
        },
      ],
      isPlaceholder: false,
    })),
  },
  logoPath: "/images/logo/flamingocafe-logo.webp",
  defaultHeroImagePath: "/images/placeholders/hero-01.webp",
  socialLinks: [
    {
      id: "instagram",
      platform: "instagram",
      handle: {
        value: "@flamingocafe.bistro",
        isPlaceholder: false,
      },
      url: {
        value: "https://www.instagram.com/flamingocafe.bistro",
        isPlaceholder: false,
      },
    },
  ],
  primaryContactActions: [
    {
      id: "phone",
      type: "phone",
      href: {
        value: "tel:+905432122543",
        isPlaceholder: false,
      },
      value: {
        value: "+90 543 212 25 43",
        isPlaceholder: false,
      },
      isPrimary: true,
    },
    {
      id: "directions",
      type: "directions",
      href: {
        value: "https://share.google/dAPjCBPb8m6F2OZ9e",
        isPlaceholder: false,
      },
      isPrimary: true,
    },
    {
      id: "instagram",
      type: "instagram",
      href: {
        value: "https://www.instagram.com/flamingocafe.bistro",
        isPlaceholder: false,
      },
      value: {
        value: "@flamingocafe.bistro",
        isPlaceholder: false,
      },
      isPrimary: true,
    },
  ],
};
