import type { Locale } from "./locales.ts";
import type { RouteKey } from "./routes.ts";

type PageDictionary = {
  title: string;
};

type SeoDictionary = {
  title: string;
  description: string;
};

export type Dictionary = {
  nav: Record<RouteKey, string>;
  home: PageDictionary;
  menu: PageDictionary;
  about: PageDictionary;
  gallery: PageDictionary;
  contact: PageDictionary;
  footer: {
    copyright: string;
  };
  common: {
    languageSwitcherLabel: string;
    primaryNavigationLabel: string;
  };
  seo: Record<RouteKey, SeoDictionary>;
};

export const requiredDictionarySections = [
  "nav",
  "home",
  "menu",
  "about",
  "gallery",
  "contact",
  "footer",
  "common",
  "seo",
] as const satisfies readonly (keyof Dictionary)[];

export const dictionaries = {
  tr: {
    nav: {
      home: "Ana sayfa",
      menu: "Menü",
      about: "Hakkımızda",
      gallery: "Galeri",
      contact: "İletişim",
    },
    home: {
      title: "Ana sayfa",
    },
    menu: {
      title: "Menü",
    },
    about: {
      title: "Hakkımızda",
    },
    gallery: {
      title: "Galeri",
    },
    contact: {
      title: "İletişim",
    },
    footer: {
      copyright: "Flamingo Cafe&Bistro",
    },
    common: {
      languageSwitcherLabel: "Dil seçimi",
      primaryNavigationLabel: "Ana gezinme",
    },
    seo: {
      home: {
        title: "Flamingo Cafe&Bistro | Ana sayfa",
        description: "Flamingo Cafe&Bistro ana sayfa hazırlık görünümü.",
      },
      menu: {
        title: "Flamingo Cafe&Bistro | Menü",
        description: "Flamingo Cafe&Bistro menü sayfası hazırlık görünümü.",
      },
      about: {
        title: "Flamingo Cafe&Bistro | Hakkımızda",
        description: "Flamingo Cafe&Bistro hakkımızda sayfası hazırlık görünümü.",
      },
      gallery: {
        title: "Flamingo Cafe&Bistro | Galeri",
        description: "Flamingo Cafe&Bistro galeri sayfası hazırlık görünümü.",
      },
      contact: {
        title: "Flamingo Cafe&Bistro | İletişim",
        description: "Flamingo Cafe&Bistro iletişim sayfası hazırlık görünümü.",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
    },
    home: {
      title: "Home",
    },
    menu: {
      title: "Menu",
    },
    about: {
      title: "About",
    },
    gallery: {
      title: "Gallery",
    },
    contact: {
      title: "Contact",
    },
    footer: {
      copyright: "Flamingo Cafe&Bistro",
    },
    common: {
      languageSwitcherLabel: "Language selection",
      primaryNavigationLabel: "Primary navigation",
    },
    seo: {
      home: {
        title: "Flamingo Cafe&Bistro | Home",
        description: "Flamingo Cafe&Bistro home page preparation view.",
      },
      menu: {
        title: "Flamingo Cafe&Bistro | Menu",
        description: "Flamingo Cafe&Bistro menu page preparation view.",
      },
      about: {
        title: "Flamingo Cafe&Bistro | About",
        description: "Flamingo Cafe&Bistro about page preparation view.",
      },
      gallery: {
        title: "Flamingo Cafe&Bistro | Gallery",
        description: "Flamingo Cafe&Bistro gallery page preparation view.",
      },
      contact: {
        title: "Flamingo Cafe&Bistro | Contact",
        description: "Flamingo Cafe&Bistro contact page preparation view.",
      },
    },
  },
  ru: {
    nav: {
      home: "Главная",
      menu: "Меню",
      about: "О нас",
      gallery: "Галерея",
      contact: "Контакты",
    },
    home: {
      title: "Главная",
    },
    menu: {
      title: "Меню",
    },
    about: {
      title: "О нас",
    },
    gallery: {
      title: "Галерея",
    },
    contact: {
      title: "Контакты",
    },
    footer: {
      copyright: "Flamingo Cafe&Bistro",
    },
    common: {
      languageSwitcherLabel: "Выбор языка",
      primaryNavigationLabel: "Основная навигация",
    },
    seo: {
      home: {
        title: "Flamingo Cafe&Bistro | Главная",
        description: "Подготовительный вид главной страницы Flamingo Cafe&Bistro.",
      },
      menu: {
        title: "Flamingo Cafe&Bistro | Меню",
        description: "Подготовительный вид страницы меню Flamingo Cafe&Bistro.",
      },
      about: {
        title: "Flamingo Cafe&Bistro | О нас",
        description: "Подготовительный вид страницы о Flamingo Cafe&Bistro.",
      },
      gallery: {
        title: "Flamingo Cafe&Bistro | Галерея",
        description: "Подготовительный вид страницы галереи Flamingo Cafe&Bistro.",
      },
      contact: {
        title: "Flamingo Cafe&Bistro | Контакты",
        description: "Подготовительный вид страницы контактов Flamingo Cafe&Bistro.",
      },
    },
  },
  de: {
    nav: {
      home: "Startseite",
      menu: "Menü",
      about: "Über uns",
      gallery: "Galerie",
      contact: "Kontakt",
    },
    home: {
      title: "Startseite",
    },
    menu: {
      title: "Menü",
    },
    about: {
      title: "Über uns",
    },
    gallery: {
      title: "Galerie",
    },
    contact: {
      title: "Kontakt",
    },
    footer: {
      copyright: "Flamingo Cafe&Bistro",
    },
    common: {
      languageSwitcherLabel: "Sprachauswahl",
      primaryNavigationLabel: "Hauptnavigation",
    },
    seo: {
      home: {
        title: "Flamingo Cafe&Bistro | Startseite",
        description: "Vorbereitungsansicht der Startseite von Flamingo Cafe&Bistro.",
      },
      menu: {
        title: "Flamingo Cafe&Bistro | Menü",
        description: "Vorbereitungsansicht der Menüseite von Flamingo Cafe&Bistro.",
      },
      about: {
        title: "Flamingo Cafe&Bistro | Über uns",
        description: "Vorbereitungsansicht der Über-uns-Seite von Flamingo Cafe&Bistro.",
      },
      gallery: {
        title: "Flamingo Cafe&Bistro | Galerie",
        description: "Vorbereitungsansicht der Galerie-Seite von Flamingo Cafe&Bistro.",
      },
      contact: {
        title: "Flamingo Cafe&Bistro | Kontakt",
        description: "Vorbereitungsansicht der Kontaktseite von Flamingo Cafe&Bistro.",
      },
    },
  },
} as const satisfies Record<Locale, Dictionary>;
