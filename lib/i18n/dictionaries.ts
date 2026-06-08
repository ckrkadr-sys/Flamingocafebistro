import type { ContactActionType, Weekday } from "../../data/site.ts";
import type { Locale } from "./locales.ts";
import type { RouteKey } from "./routes.ts";

type PageDictionary = {
  title: string;
};

type HomeDictionary = PageDictionary & {
  atmosphereActionLabel: string;
  atmosphereDescription: string;
  atmosphereEyebrow: string;
  atmosphereImageLabel: string;
  atmosphereTitle: string;
  categoriesDescription: string;
  categoriesEyebrow: string;
  categoriesTitle: string;
  categoryActionLabel: string;
  galleryActionLabel: string;
  galleryDescription: string;
  galleryEyebrow: string;
  galleryTitle: string;
  heroDescription: string;
  heroFallbackAction: string;
  heroImageLabel: string;
  heroPrimaryAction: string;
  heroSecondaryAction: string;
  heroTitle: string;
  locationActionLabel: string;
  locationDescription: string;
  locationEyebrow: string;
  locationPending: string;
  locationTitle: string;
  popularActionLabel: string;
  popularDescription: string;
  popularEyebrow: string;
  popularTitle: string;
};

type MenuDictionary = PageDictionary & {
  allCategoriesLabel: string;
  categoryFilterLabel: string;
  clearSearchLabel: string;
  emptyMessage: string;
  emptyTitle: string;
  eyebrow: string;
  intro: string;
  newBadgeLabel: string;
  popularBadgeLabel: string;
  searchLabel: string;
  searchPlaceholder: string;
};

type SeoDictionary = {
  title: string;
  description: string;
};

export type Dictionary = {
  nav: Record<RouteKey, string>;
  home: HomeDictionary;
  menu: MenuDictionary;
  about: PageDictionary;
  gallery: PageDictionary;
  contact: PageDictionary;
  footer: {
    addressLabel: string;
    brandAreaLabel: string;
    closedLabel: string;
    contactActionsTitle: string;
    contactTitle: string;
    copyright: string;
    detailsPending: string;
    navigationLabel: string;
    openingHoursTitle: string;
    phoneLabel: string;
    socialTitle: string;
    weekdays: Record<Weekday, string>;
  };
  common: {
    contactActionLabels: Record<ContactActionType, string>;
    floatingContactActionsLabel: string;
    languageSwitcherLabel: string;
    mobileMenuCloseLabel: string;
    mobileMenuOpenLabel: string;
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
      atmosphereActionLabel: "İletişime geç",
      atmosphereDescription: "Kahve, yemek ve serin içeceklerin aynı akışta durduğu sıcak bir cafe-bistro deneyimi.",
      atmosphereEyebrow: "Mekan hissi",
      atmosphereImageLabel: "Flamingo Cafe&Bistro atmosfer alanı",
      atmosphereTitle: "Günün her saatine uygun rahat bir durak",
      categoriesDescription: "Kahvaltıdan burgerlere, makarnadan içeceklere kadar menüye hızlıca göz atın.",
      categoriesEyebrow: "Menü kategorileri",
      categoriesTitle: "Ne arıyorsunuz?",
      categoryActionLabel: "Menüde gör",
      galleryActionLabel: "Galeriye git",
      galleryDescription: "Mekan, yemek ve içecek görselleri için hazırlanmış kısa bir ön izleme.",
      galleryEyebrow: "Galeri",
      galleryTitle: "Mekanın enerjisine kısa bir bakış",
      heroDescription: "Fiyatlı menüyü inceleyin, öne çıkan seçenekleri görün ve konuma kolayca ulaşın.",
      heroFallbackAction: "İletişime geç",
      heroImageLabel: "Flamingo Cafe&Bistro ana görsel alanı",
      heroPrimaryAction: "Menüyü gör",
      heroSecondaryAction: "Yol tarifi al",
      heroTitle: "Kahvaltı, bistro tabakları ve kahve için canlı bir durak",
      locationActionLabel: "İletişim sayfası",
      locationDescription: "Konum ve iletişim bilgileri hazır olduğunda burada hızlı erişim olarak gösterilecek.",
      locationEyebrow: "Konum ve iletişim",
      locationPending: "İletişim bilgileri yakında eklenecek.",
      locationTitle: "Ziyaret için pratik bilgiler",
      popularActionLabel: "Tüm menüye git",
      popularDescription: "Gerçek menü içeriği eklenene kadar küçük bir başlangıç ön izlemesi.",
      popularEyebrow: "Popüler başlangıçlar",
      popularTitle: "Menüden kısa bir tat",
      title: "Ana sayfa",
    },
    menu: {
      allCategoriesLabel: "Tümü",
      categoryFilterLabel: "Menü kategorileri",
      clearSearchLabel: "Aramayı temizle",
      emptyMessage: "Arama veya kategori filtresini değiştirerek tekrar deneyin.",
      emptyTitle: "Eşleşen ürün bulunamadı",
      eyebrow: "Fiyatlı menü",
      intro: "Kategorilere göre gezinin, ürün adında veya açıklamasında hızlıca arayın.",
      newBadgeLabel: "Yeni",
      popularBadgeLabel: "Popüler",
      searchLabel: "Menüde ara",
      searchPlaceholder: "Ürün adı veya açıklama ara",
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
      addressLabel: "Adres",
      brandAreaLabel: "Marka bilgisi",
      closedLabel: "Kapalı",
      contactActionsTitle: "Hızlı iletişim",
      contactTitle: "İletişim",
      copyright: "Flamingo Cafe&Bistro",
      detailsPending: "Bilgiler yakında eklenecek.",
      navigationLabel: "Alt gezinme",
      openingHoursTitle: "Çalışma saatleri",
      phoneLabel: "Telefon",
      socialTitle: "Sosyal",
      weekdays: {
        monday: "Pazartesi",
        tuesday: "Salı",
        wednesday: "Çarşamba",
        thursday: "Perşembe",
        friday: "Cuma",
        saturday: "Cumartesi",
        sunday: "Pazar",
      },
    },
    common: {
      contactActionLabels: {
        phone: "Telefon",
        whatsapp: "WhatsApp",
        directions: "Yol tarifi",
        instagram: "Instagram",
      },
      floatingContactActionsLabel: "Hızlı iletişim",
      languageSwitcherLabel: "Dil seçimi",
      mobileMenuCloseLabel: "Kapat",
      mobileMenuOpenLabel: "Menü",
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
      atmosphereActionLabel: "Contact us",
      atmosphereDescription: "A warm cafe-bistro flow where coffee, food and chilled drinks all sit together.",
      atmosphereEyebrow: "Atmosphere",
      atmosphereImageLabel: "Flamingo Cafe&Bistro atmosphere area",
      atmosphereTitle: "An easy stop for every part of the day",
      categoriesDescription: "Scan breakfast, burgers, pasta, drinks and more before opening the full menu.",
      categoriesEyebrow: "Menu categories",
      categoriesTitle: "What are you looking for?",
      categoryActionLabel: "View in menu",
      galleryActionLabel: "Open gallery",
      galleryDescription: "A short preview prepared for venue, food and drink visuals.",
      galleryEyebrow: "Gallery",
      galleryTitle: "A quick look at the place and its energy",
      heroDescription: "Browse the priced menu, see highlighted options and reach the location quickly.",
      heroFallbackAction: "Contact us",
      heroImageLabel: "Flamingo Cafe&Bistro hero visual area",
      heroPrimaryAction: "View menu",
      heroSecondaryAction: "Get directions",
      heroTitle: "A bright stop for breakfast, bistro plates and coffee",
      locationActionLabel: "Contact page",
      locationDescription: "Location and contact details will appear here as quick access once they are ready.",
      locationEyebrow: "Location and contact",
      locationPending: "Contact details will be added soon.",
      locationTitle: "Practical details for your visit",
      popularActionLabel: "Go to full menu",
      popularDescription: "A small starter preview until the real menu content is added.",
      popularEyebrow: "Popular starters",
      popularTitle: "A quick taste from the menu",
      title: "Home",
    },
    menu: {
      allCategoriesLabel: "All",
      categoryFilterLabel: "Menu categories",
      clearSearchLabel: "Clear search",
      emptyMessage: "Try changing the search term or category filter.",
      emptyTitle: "No matching items found",
      eyebrow: "Priced menu",
      intro: "Browse by category or quickly search item names and descriptions.",
      newBadgeLabel: "New",
      popularBadgeLabel: "Popular",
      searchLabel: "Search menu",
      searchPlaceholder: "Search item name or description",
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
      addressLabel: "Address",
      brandAreaLabel: "Brand information",
      closedLabel: "Closed",
      contactActionsTitle: "Quick contact",
      contactTitle: "Contact",
      copyright: "Flamingo Cafe&Bistro",
      detailsPending: "Details will be added soon.",
      navigationLabel: "Footer navigation",
      openingHoursTitle: "Opening hours",
      phoneLabel: "Phone",
      socialTitle: "Social",
      weekdays: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
      },
    },
    common: {
      contactActionLabels: {
        phone: "Phone",
        whatsapp: "WhatsApp",
        directions: "Directions",
        instagram: "Instagram",
      },
      floatingContactActionsLabel: "Quick contact",
      languageSwitcherLabel: "Language selection",
      mobileMenuCloseLabel: "Close",
      mobileMenuOpenLabel: "Menu",
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
      atmosphereActionLabel: "Связаться",
      atmosphereDescription: "Теплый формат кафе-бистро, где кофе, еда и прохладные напитки находятся в одном ритме.",
      atmosphereEyebrow: "Атмосфера",
      atmosphereImageLabel: "Зона атмосферы Flamingo Cafe&Bistro",
      atmosphereTitle: "Удобное место для любого времени дня",
      categoriesDescription: "Быстро посмотрите завтрак, бургеры, пасту, напитки и другие категории.",
      categoriesEyebrow: "Категории меню",
      categoriesTitle: "Что вы ищете?",
      categoryActionLabel: "Смотреть в меню",
      galleryActionLabel: "Открыть галерею",
      galleryDescription: "Короткий предварительный просмотр для фотографий места, еды и напитков.",
      galleryEyebrow: "Галерея",
      galleryTitle: "Быстрый взгляд на место и его энергию",
      heroDescription: "Посмотрите меню с ценами, выделенные позиции и быстро перейдите к информации о локации.",
      heroFallbackAction: "Связаться",
      heroImageLabel: "Главная визуальная зона Flamingo Cafe&Bistro",
      heroPrimaryAction: "Смотреть меню",
      heroSecondaryAction: "Маршрут",
      heroTitle: "Яркое место для завтрака, блюд бистро и кофе",
      locationActionLabel: "Страница контактов",
      locationDescription: "Когда данные о локации и контактах будут готовы, они появятся здесь для быстрого доступа.",
      locationEyebrow: "Локация и контакты",
      locationPending: "Контактные данные скоро будут добавлены.",
      locationTitle: "Практичная информация для визита",
      popularActionLabel: "Перейти ко всему меню",
      popularDescription: "Небольшой стартовый предварительный просмотр до добавления настоящего меню.",
      popularEyebrow: "Популярные старты",
      popularTitle: "Короткий вкус меню",
      title: "Главная",
    },
    menu: {
      allCategoriesLabel: "Все",
      categoryFilterLabel: "Категории меню",
      clearSearchLabel: "Очистить поиск",
      emptyMessage: "Попробуйте изменить поисковый запрос или категорию.",
      emptyTitle: "Подходящие позиции не найдены",
      eyebrow: "Меню с ценами",
      intro: "Просматривайте по категориям или быстро ищите по названию и описанию.",
      newBadgeLabel: "Новое",
      popularBadgeLabel: "Популярное",
      searchLabel: "Поиск по меню",
      searchPlaceholder: "Искать название или описание",
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
      addressLabel: "Адрес",
      brandAreaLabel: "Информация о бренде",
      closedLabel: "Закрыто",
      contactActionsTitle: "Быстрая связь",
      contactTitle: "Контакты",
      copyright: "Flamingo Cafe&Bistro",
      detailsPending: "Данные скоро будут добавлены.",
      navigationLabel: "Навигация в подвале",
      openingHoursTitle: "Часы работы",
      phoneLabel: "Телефон",
      socialTitle: "Соцсети",
      weekdays: {
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница",
        saturday: "Суббота",
        sunday: "Воскресенье",
      },
    },
    common: {
      contactActionLabels: {
        phone: "Телефон",
        whatsapp: "WhatsApp",
        directions: "Маршрут",
        instagram: "Instagram",
      },
      floatingContactActionsLabel: "Быстрая связь",
      languageSwitcherLabel: "Выбор языка",
      mobileMenuCloseLabel: "Закрыть",
      mobileMenuOpenLabel: "Меню",
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
      atmosphereActionLabel: "Kontakt aufnehmen",
      atmosphereDescription: "Ein warmer Cafe-Bistro-Fluss, in dem Kaffee, Essen und kühle Getränke zusammenpassen.",
      atmosphereEyebrow: "Atmosphäre",
      atmosphereImageLabel: "Atmosphäre-Bereich von Flamingo Cafe&Bistro",
      atmosphereTitle: "Ein entspannter Stopp für jede Tageszeit",
      categoriesDescription: "Frühstück, Burger, Pasta, Getränke und mehr schnell vor dem vollständigen Menü ansehen.",
      categoriesEyebrow: "Menükategorien",
      categoriesTitle: "Wonach suchen Sie?",
      categoryActionLabel: "Im Menü ansehen",
      galleryActionLabel: "Galerie öffnen",
      galleryDescription: "Eine kurze Vorschau für Bilder von Ort, Speisen und Getränken.",
      galleryEyebrow: "Galerie",
      galleryTitle: "Ein kurzer Blick auf Ort und Energie",
      heroDescription: "Das Menü mit Preisen ansehen, Highlights entdecken und schnell zur Standortinfo gelangen.",
      heroFallbackAction: "Kontakt aufnehmen",
      heroImageLabel: "Hero-Bildbereich von Flamingo Cafe&Bistro",
      heroPrimaryAction: "Menü ansehen",
      heroSecondaryAction: "Route anzeigen",
      heroTitle: "Ein lebendiger Ort für Frühstück, Bistro-Teller und Kaffee",
      locationActionLabel: "Kontaktseite",
      locationDescription: "Standort- und Kontaktdaten erscheinen hier als Schnellzugriff, sobald sie bereit sind.",
      locationEyebrow: "Standort und Kontakt",
      locationPending: "Kontaktdaten werden bald ergänzt.",
      locationTitle: "Praktische Details für Ihren Besuch",
      popularActionLabel: "Zum vollständigen Menü",
      popularDescription: "Eine kleine Startvorschau, bis echte Menüinhalte ergänzt werden.",
      popularEyebrow: "Beliebte Starter",
      popularTitle: "Ein kurzer Vorgeschmack aus dem Menü",
      title: "Startseite",
    },
    menu: {
      allCategoriesLabel: "Alle",
      categoryFilterLabel: "Menükategorien",
      clearSearchLabel: "Suche löschen",
      emptyMessage: "Ändern Sie den Suchbegriff oder den Kategoriefilter.",
      emptyTitle: "Keine passenden Produkte gefunden",
      eyebrow: "Menü mit Preisen",
      intro: "Nach Kategorien stöbern oder schnell nach Namen und Beschreibungen suchen.",
      newBadgeLabel: "Neu",
      popularBadgeLabel: "Beliebt",
      searchLabel: "Menü durchsuchen",
      searchPlaceholder: "Name oder Beschreibung suchen",
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
      addressLabel: "Adresse",
      brandAreaLabel: "Markeninformation",
      closedLabel: "Geschlossen",
      contactActionsTitle: "Schneller Kontakt",
      contactTitle: "Kontakt",
      copyright: "Flamingo Cafe&Bistro",
      detailsPending: "Details werden bald ergänzt.",
      navigationLabel: "Footer-Navigation",
      openingHoursTitle: "Öffnungszeiten",
      phoneLabel: "Telefon",
      socialTitle: "Social Media",
      weekdays: {
        monday: "Montag",
        tuesday: "Dienstag",
        wednesday: "Mittwoch",
        thursday: "Donnerstag",
        friday: "Freitag",
        saturday: "Samstag",
        sunday: "Sonntag",
      },
    },
    common: {
      contactActionLabels: {
        phone: "Telefon",
        whatsapp: "WhatsApp",
        directions: "Route",
        instagram: "Instagram",
      },
      floatingContactActionsLabel: "Schneller Kontakt",
      languageSwitcherLabel: "Sprachauswahl",
      mobileMenuCloseLabel: "Schließen",
      mobileMenuOpenLabel: "Menü",
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
