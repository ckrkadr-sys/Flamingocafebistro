import type { GalleryCategory } from "../../data/gallery.ts";
import type { ContactActionType, Weekday } from "../../data/site.ts";
import type { Locale } from "./locales.ts";
import type { RouteKey } from "./routes.ts";

type PageDictionary = {
  title: string;
};

type HomeTextItem = {
  title: string;
  description: string;
};

type HomeHeroCategoryLinks = {
  breakfast: string;
  coffees: string;
  desserts: string;
};

type HomeDictionary = PageDictionary & {
  aboutActionLabel: string;
  aboutDescription: string;
  aboutEyebrow: string;
  aboutImageBadge: string;
  aboutImageLabel: string;
  aboutStampLabel: string;
  aboutTitle: string;
  atmosphereActionLabel: string;
  atmosphereDescription: string;
  atmosphereEyebrow: string;
  atmosphereTitle: string;
  categoriesDescription: string;
  categoriesEyebrow: string;
  categoriesTitle: string;
  categoryActionLabel: string;
  galleryActionLabel: string;
  galleryDescription: string;
  galleryEyebrow: string;
  galleryTitle: string;
  eventItems: readonly HomeTextItem[];
  eventsActionLabel: string;
  eventsDescription: string;
  eventsEyebrow: string;
  eventsTitle: string;
  featureItems: readonly HomeTextItem[];
  featureStripLabel: string;
  heroCategoryLinks: HomeHeroCategoryLinks;
  heroCategoryNavLabel: string;
  heroDescription: string;
  heroEyebrow: string;
  heroPrimaryAction: string;
  heroTitle: string;
  menuCardImageLabel: string;
  noteItems: readonly HomeTextItem[];
  notesActionLabel: string;
  notesEyebrow: string;
  notesTitle: string;
  popularActionLabel: string;
  popularDescription: string;
  popularEyebrow: string;
  popularTitle: string;
  visitActionLabel: string;
  visitBadge: string;
  visitDescription: string;
  visitEyebrow: string;
  visitTitle: string;
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

type AboutValueItem = {
  title: string;
  description: string;
};

type AboutDictionary = PageDictionary & {
  ctaContactLabel: string;
  ctaMenuLabel: string;
  ctaText: string;
  ctaTitle: string;
  experienceEyebrow: string;
  experienceImageLabel: string;
  experienceText: string;
  experienceTitle: string;
  eyebrow: string;
  heroImageLabel: string;
  intro: string;
  storyEyebrow: string;
  storyText: string;
  storyTitle: string;
  valueItems: readonly AboutValueItem[];
  valuesEyebrow: string;
  valuesTitle: string;
};

type GalleryDictionary = PageDictionary & {
  allCategoriesLabel: string;
  categoryFilterLabel: string;
  categoryLabels: Record<GalleryCategory, string>;
  emptyMessage: string;
  emptyTitle: string;
  eyebrow: string;
  intro: string;
};

type ContactActionKey = ContactActionType | "email";

type ContactDictionary = PageDictionary & {
  actionLabels: Record<ContactActionKey, string>;
  actionsTitle: string;
  addressLabel: string;
  detailsTitle: string;
  emailLabel: string;
  eyebrow: string;
  intro: string;
  mapEmbedTitle: string;
  mapPlaceholderDescription: string;
  mapPlaceholderTitle: string;
  mapTitle: string;
  openingHoursTitle: string;
  phoneLabel: string;
  socialLabel: string;
  unavailableLabel: string;
};

type SeoDictionary = {
  title: string;
  description: string;
};

export type Dictionary = {
  nav: Record<RouteKey, string>;
  home: HomeDictionary;
  menu: MenuDictionary;
  about: AboutDictionary;
  gallery: GalleryDictionary;
  contact: ContactDictionary;
  common: {
    closedLabel: string;
    contactActionLabels: Record<ContactActionType, string>;
    floatingContactActionsLabel: string;
    languageNames: Record<Locale, string>;
    languageSwitcherLabel: string;
    mobileMenuCloseLabel: string;
    mobileMenuOpenLabel: string;
    primaryNavigationLabel: string;
    weekdays: Record<Weekday, string>;
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
      aboutActionLabel: "Hikayeye git",
      aboutDescription: "Fethiye Çalış Sahil'de kahve, kahvaltı, bistro lezzetleri ve gün batımı molaları için sıcak, modern ve pratik bir durak.",
      aboutEyebrow: "Hakkında",
      aboutImageBadge: "Güzel anlar. Güzel lezzetler.",
      aboutImageLabel: "Flamingo Cafe&Bistro iç mekan atmosferini temsil eden görsel alan",
      aboutStampLabel: "Özenle hazır",
      aboutTitle: "Bizim bistro",
      atmosphereActionLabel: "İletişime geç",
      atmosphereDescription: "Çalış Sahil'in gün batımı hissiyle kahve, yemek, içecek ve tatlıyı aynı sıcak akışta buluşturan bir cafe-bistro.",
      atmosphereEyebrow: "Mekan hissi",
      atmosphereTitle: "Çalış Sahil'de günün her saatine uygun sıcak bir durak",
      categoriesDescription: "Kahvaltıdan burgerlere, makarnadan içeceklere kadar menüye hızlıca göz atın.",
      categoriesEyebrow: "Menü kategorileri",
      categoriesTitle: "Ne arıyorsunuz?",
      categoryActionLabel: "Menüde gör",
      galleryActionLabel: "Galeriye git",
      galleryDescription: "Mekan, yemek ve içecek görselleri için hazırlanmış kısa bir ön izleme.",
      galleryEyebrow: "Galeri",
      galleryTitle: "Mekanın enerjisine kısa bir bakış",
      eventItems: [
        {
          title: "Kahve molası",
          description: "Günün ritmine uygun sıcak ve soğuk içecek alanı.",
        },
        {
          title: "Bistro sofraları",
          description: "Yemek, tatlı ve içecekleri birlikte düşünen rahat buluşma hissi.",
        },
        {
          title: "Gün batımı akışı",
          description: "Çalış Sahil ziyaretini sıcak bir atmosferle tamamlayan görsel ritim.",
        },
      ],
      eventsActionLabel: "İletişime geç",
      eventsDescription: "Bu alan gerçek etkinlik duyurusu değil; Flamingo'nun gün içindeki cafe-bistro ritmini görsel olarak anlatır.",
      eventsEyebrow: "Şimdi",
      eventsTitle: "Cafe-bistro anları",
      featureItems: [
        {
          title: "Fiyatlı menü",
          description: "Kahvaltı, kahve, tatlı ve bistro lezzetlerini hızlıca açın.",
        },
        {
          title: "Yol tarifi",
          description: "Çalış Sahil konumunu haritada açın.",
        },
        {
          title: "Çalışma saati",
          description: "Günün planını hızlıca netleştirin.",
        },
        {
          title: "Telefon",
          description: "Konum ve ziyaret soruları için doğrudan arayın.",
        },
      ],
      featureStripLabel: "Flamingo Cafe&Bistro öne çıkan ziyaret detayları",
      heroCategoryLinks: {
        breakfast: "Kahvaltı",
        coffees: "Kahveler",
        desserts: "Tatlılar",
      },
      heroCategoryNavLabel: "Öne çıkan menü kategorileri",
      heroDescription: "Kahvaltı, tatlılar, kahveler ve daha fazlası.",
      heroEyebrow: "Flamingo Cafe & Bistro",
      heroPrimaryAction: "Menüyü Gör",
      heroTitle: "Lezzetlerimizi Keşfedin",
      menuCardImageLabel: "Menü ürünü görsel alanı",
      noteItems: [
        {
          title: "Kahve",
          description: "Günün kısa molaları için sıcak, sade ve net bir odak.",
        },
        {
          title: "Lezzet",
          description: "Kahvaltıdan bistro tabaklarına uzanan dengeli menü hissi.",
        },
        {
          title: "Manzara",
          description: "Çalış Sahil ve gün batımı atmosferini öne çıkaran marka ritmi.",
        },
      ],
      notesActionLabel: "İletişime geç",
      notesEyebrow: "Misafirlerin fark ettiği",
      notesTitle: "Kısa notlar",
      popularActionLabel: "Tüm menüye git",
      popularDescription: "Gerçek menü içeriği eklenene kadar küçük bir başlangıç ön izlemesi.",
      popularEyebrow: "Popüler başlangıçlar",
      popularTitle: "Menüden kısa bir tat",
      visitActionLabel: "İletişim bilgileri",
      visitBadge: "Ziyaret bilgisi",
      visitDescription: "Telefon, yol tarifi ve çalışma saatleriyle ziyaretinizi kolayca planlayın.",
      visitEyebrow: "İyi lezzet, birlikte daha güzel",
      visitTitle: "Ziyaretinizi planlayın",
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
      ctaContactLabel: "İletişime geç",
      ctaMenuLabel: "Menüyü gör",
      ctaText: "Menüyü fiyatlarıyla inceleyin veya Çalış Sahil'deki konum ve iletişim bilgilerine geçin.",
      ctaTitle: "Çalış Sahil ziyaretinizi kolay planlayın",
      experienceEyebrow: "Cafe-bistro deneyimi",
      experienceImageLabel: "Flamingo Cafe&Bistro cafe-bistro deneyimi görsel alanı",
      experienceText: "Kahve, kahvaltı, bistro yemekleri, tatlılar ve serin içecekler; Çalış Sahil'in sıcak atmosferi ve gün batımı manzarasıyla birlikte düşünülür.",
      experienceTitle: "Kahve molasından gün batımı sofralarına",
      eyebrow: "Flamingo hakkında",
      heroImageLabel: "Flamingo Cafe&Bistro hakkında sayfası görsel alanı",
      intro: "Flamingo Cafe&Bistro, Fethiye Çalış Sahil'de kahve, yemek, içecek ve tatlıyı sıcak bir atmosfer ve güzel gün batımı manzarasıyla buluşturan modern bir cafe-bistrodur.",
      storyEyebrow: "Kısa hikaye",
      storyText: "Odak noktamız; fiyatları net bir menü, Çalış Sahil'e yakışan rahat mekan hissi ve kolay ulaşılabilir konum bilgileriyle sade bir ziyaret deneyimi sunmak.",
      storyTitle: "Fethiye'de günün farklı anlarına uyum sağlayan bir cafe-bistro",
      title: "Hakkımızda",
      valueItems: [
        {
          title: "Özenli lezzetler",
          description: "Taze ve dikkatli hazırlanan seçeneklere alan açan sade bir menü yapısı.",
        },
        {
          title: "Sıcak atmosfer",
          description: "Çalış Sahil'de günün farklı saatlerinde rahatça uğranabilecek modern cafe hissi.",
        },
        {
          title: "Çeşitli menü",
          description: "Kahve, yiyecek, tatlı ve içecek kategorilerini birlikte gösteren dengeli akış.",
        },
        {
          title: "Net fiyatlar",
          description: "Menüde ürünleri fiyatlarıyla birlikte görmeyi kolaylaştıran pratik yapı.",
        },
        {
          title: "Yerel deneyim",
          description: "Fethiye Çalış Sahil'deki konuma ve iletişim bilgilerine hızlı ulaşmayı destekleyen yakın cafe-bistro hissi.",
        },
      ],
      valuesEyebrow: "Değerler",
      valuesTitle: "Flamingo deneyimini belirleyen detaylar",
    },
    gallery: {
      allCategoriesLabel: "Tümü",
      categoryFilterLabel: "Galeri kategorileri",
      categoryLabels: {
        venue: "Mekan",
        food: "Yemek",
        drinks: "İçecekler",
        desserts: "Tatlılar",
        atmosphere: "Atmosfer",
      },
      emptyMessage: "Başka bir kategori seçerek galeriyi tekrar görüntüleyin.",
      emptyTitle: "Bu kategoride görsel bulunamadı",
      eyebrow: "Galeri",
      intro: "Mekan, yemek, içecek ve atmosfer görselleri için hazırlanmış güncellenebilir galeri alanı.",
      title: "Galeri",
    },
    contact: {
      actionLabels: {
        phone: "Ara",
        whatsapp: "WhatsApp",
        directions: "Yol tarifi al",
        instagram: "Instagram",
        email: "E-posta gönder",
      },
      actionsTitle: "Hızlı aksiyonlar",
      addressLabel: "Adres",
      detailsTitle: "İletişim bilgileri",
      emailLabel: "E-posta",
      eyebrow: "İletişim",
      intro: "Fethiye Çalış Sahil'deki adres, telefon, yol tarifi, Instagram ve çalışma saatleri tek yerde.",
      mapEmbedTitle: "Flamingo Cafe&Bistro haritası",
      mapPlaceholderDescription: "Harita yerleşimi daha sonra eklenecek; yol tarifi için Google Maps bağlantısını kullanabilirsiniz.",
      mapPlaceholderTitle: "Yol tarifi bağlantısı hazır",
      mapTitle: "Konum",
      openingHoursTitle: "Çalışma saatleri",
      phoneLabel: "Telefon",
      socialLabel: "Sosyal",
      unavailableLabel: "Bu bilgi şu anda kullanılamıyor.",
      title: "İletişim",
    },
    common: {
      closedLabel: "Kapalı",
      contactActionLabels: {
        phone: "Telefon",
        whatsapp: "WhatsApp",
        directions: "Yol tarifi",
        instagram: "Instagram",
      },
      floatingContactActionsLabel: "Hızlı iletişim",
      languageNames: {
        tr: "Türkçe",
        en: "English",
        ru: "Русский",
        de: "Deutsch",
      },
      languageSwitcherLabel: "Dil seçimi",
      mobileMenuCloseLabel: "Kapat",
      mobileMenuOpenLabel: "Menü",
      primaryNavigationLabel: "Ana gezinme",
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
    seo: {
      home: {
        title: "Flamingo Cafe&Bistro | Ana sayfa",
        description: "Fethiye Çalış Sahil'de kahve, yemek, içecek ve gün batımı manzarası sunan Flamingo Cafe&Bistro.",
      },
      menu: {
        title: "Flamingo Cafe&Bistro | Menü",
        description: "Flamingo Cafe&Bistro menüsünde kahve, yiyecek, tatlı ve içecek seçeneklerini fiyatlarıyla inceleyin.",
      },
      about: {
        title: "Flamingo Cafe&Bistro | Hakkımızda",
        description: "Flamingo Cafe&Bistro'nun Fethiye Çalış Sahil'deki modern cafe-bistro deneyimini keşfedin.",
      },
      gallery: {
        title: "Flamingo Cafe&Bistro | Galeri",
        description: "Flamingo Cafe&Bistro mekan, yemek, içecek ve atmosfer görselleri için galeri alanı.",
      },
      contact: {
        title: "Flamingo Cafe&Bistro | İletişim",
        description: "Flamingo Cafe&Bistro adres, telefon, yol tarifi, Instagram ve çalışma saatleri.",
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
      aboutActionLabel: "Our story",
      aboutDescription: "A warm, modern and practical stop by Çalış Beach in Fethiye for coffee, breakfast, bistro flavors and sunset breaks.",
      aboutEyebrow: "About",
      aboutImageBadge: "Good times. Great flavors.",
      aboutImageLabel: "Visual area representing the Flamingo Cafe&Bistro interior atmosphere",
      aboutStampLabel: "Made with care",
      aboutTitle: "Our bistro",
      atmosphereActionLabel: "Contact us",
      atmosphereDescription: "Coffee, food, drinks and desserts in a warm cafe-bistro flow shaped by Çalış Beach sunsets.",
      atmosphereEyebrow: "Atmosphere",
      atmosphereTitle: "A warm stop by Çalış Beach for every part of the day",
      categoriesDescription: "Scan breakfast, burgers, pasta, drinks and more before opening the full menu.",
      categoriesEyebrow: "Menu categories",
      categoriesTitle: "What are you looking for?",
      categoryActionLabel: "View in menu",
      galleryActionLabel: "Open gallery",
      galleryDescription: "A short preview prepared for venue, food and drink visuals.",
      galleryEyebrow: "Gallery",
      galleryTitle: "A quick look at the place and its energy",
      eventItems: [
        {
          title: "Coffee pause",
          description: "A warm and chilled drink focus for different parts of the day.",
        },
        {
          title: "Bistro tables",
          description: "A relaxed gathering mood across food, desserts and drinks.",
        },
        {
          title: "Sunset flow",
          description: "A visual rhythm that fits a warm Çalış Beach visit.",
        },
      ],
      eventsActionLabel: "Contact us",
      eventsDescription: "This area is not a live event listing; it visually explains the cafe-bistro rhythm at Flamingo.",
      eventsEyebrow: "Happening now",
      eventsTitle: "Cafe-bistro moments",
      featureItems: [
        {
          title: "Priced menu",
          description: "Open breakfast, coffee, desserts and bistro flavors quickly.",
        },
        {
          title: "Directions",
          description: "Open the Çalış Beach location on the map.",
        },
        {
          title: "Opening hours",
          description: "Check the day plan at a glance.",
        },
        {
          title: "Phone",
          description: "Call directly for location and visit questions.",
        },
      ],
      featureStripLabel: "Flamingo Cafe&Bistro visit highlights",
      heroCategoryLinks: {
        breakfast: "Breakfast",
        coffees: "Coffees",
        desserts: "Desserts",
      },
      heroCategoryNavLabel: "Featured menu categories",
      heroDescription: "Breakfast, desserts, coffees and more.",
      heroEyebrow: "Flamingo Cafe & Bistro",
      heroPrimaryAction: "View our menu",
      heroTitle: "Discover Our Flavors",
      menuCardImageLabel: "Menu product visual area",
      noteItems: [
        {
          title: "Coffee",
          description: "A warm and simple focus for quick pauses through the day.",
        },
        {
          title: "Flavor",
          description: "A balanced menu feeling from breakfast to bistro plates.",
        },
        {
          title: "View",
          description: "A brand rhythm shaped by Çalış Beach and sunset atmosphere.",
        },
      ],
      notesActionLabel: "Contact us",
      notesEyebrow: "What guests notice",
      notesTitle: "Love notes",
      popularActionLabel: "Go to full menu",
      popularDescription: "A small starter preview until the real menu content is added.",
      popularEyebrow: "Popular starters",
      popularTitle: "A quick taste from the menu",
      visitActionLabel: "Contact details",
      visitBadge: "Visit info",
      visitDescription: "Use phone, directions and opening hours to plan your visit easily.",
      visitEyebrow: "Good food, better together",
      visitTitle: "Plan your visit",
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
      ctaContactLabel: "Contact us",
      ctaMenuLabel: "View menu",
      ctaText: "Browse the priced menu or open the Çalış Beach location and contact details for your visit.",
      ctaTitle: "Plan your Çalış Beach visit easily",
      experienceEyebrow: "Cafe-bistro experience",
      experienceImageLabel: "Flamingo Cafe&Bistro cafe-bistro experience visual area",
      experienceText: "Coffee, breakfast, bistro plates, desserts and chilled drinks are framed by a warm Çalış Beach atmosphere and sunset views.",
      experienceTitle: "From coffee breaks to sunset tables",
      eyebrow: "About Flamingo",
      heroImageLabel: "Flamingo Cafe&Bistro about page visual area",
      intro: "Flamingo Cafe&Bistro is a modern cafe-bistro by Çalış Beach in Fethiye, bringing coffee, food, drinks and desserts together with a warm atmosphere and beautiful sunset views.",
      storyEyebrow: "Short story",
      storyText: "The focus is simple: a clear priced menu, an easy Çalış Beach atmosphere, and practical contact and location access for a smooth visit.",
      storyTitle: "A Fethiye cafe-bistro made for different moments of the day",
      title: "About",
      valueItems: [
        {
          title: "Careful flavors",
          description: "A simple menu structure that leaves room for fresh, carefully prepared options.",
        },
        {
          title: "Warm atmosphere",
          description: "A modern cafe feeling for relaxed stops by Çalış Beach across the day.",
        },
        {
          title: "Menu variety",
          description: "A balanced flow across coffee, food, desserts and drinks.",
        },
        {
          title: "Clear prices",
          description: "A practical menu experience that keeps product prices visible.",
        },
        {
          title: "Local experience",
          description: "A close cafe-bistro feel with quick access to the Fethiye Çalış Beach location and contact details.",
        },
      ],
      valuesEyebrow: "Values",
      valuesTitle: "The details that shape the Flamingo experience",
    },
    gallery: {
      allCategoriesLabel: "All",
      categoryFilterLabel: "Gallery categories",
      categoryLabels: {
        venue: "Venue",
        food: "Food",
        drinks: "Drinks",
        desserts: "Desserts",
        atmosphere: "Atmosphere",
      },
      emptyMessage: "Choose another category to view the gallery again.",
      emptyTitle: "No visuals in this category yet",
      eyebrow: "Gallery",
      intro: "A flexible gallery area prepared for venue, food, drink and atmosphere visuals.",
      title: "Gallery",
    },
    contact: {
      actionLabels: {
        phone: "Call",
        whatsapp: "WhatsApp",
        directions: "Get directions",
        instagram: "Instagram",
        email: "Send email",
      },
      actionsTitle: "Quick actions",
      addressLabel: "Address",
      detailsTitle: "Contact information",
      emailLabel: "Email",
      eyebrow: "Contact",
      intro: "Address, phone, directions, Instagram and opening hours for the Çalış Beach location in one practical place.",
      mapEmbedTitle: "Flamingo Cafe&Bistro map",
      mapPlaceholderDescription: "The embedded map will be added later; use the Google Maps link for directions.",
      mapPlaceholderTitle: "Directions link ready",
      mapTitle: "Location",
      openingHoursTitle: "Opening hours",
      phoneLabel: "Phone",
      socialLabel: "Social",
      unavailableLabel: "This detail is currently unavailable.",
      title: "Contact",
    },
    common: {
      closedLabel: "Closed",
      contactActionLabels: {
        phone: "Phone",
        whatsapp: "WhatsApp",
        directions: "Directions",
        instagram: "Instagram",
      },
      floatingContactActionsLabel: "Quick contact",
      languageNames: {
        tr: "Türkçe",
        en: "English",
        ru: "Русский",
        de: "Deutsch",
      },
      languageSwitcherLabel: "Language selection",
      mobileMenuCloseLabel: "Close",
      mobileMenuOpenLabel: "Menu",
      primaryNavigationLabel: "Primary navigation",
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
    seo: {
      home: {
        title: "Flamingo Cafe&Bistro | Home",
        description: "Flamingo Cafe&Bistro by Çalış Beach in Fethiye for coffee, food, drinks and sunset views.",
      },
      menu: {
        title: "Flamingo Cafe&Bistro | Menu",
        description: "Browse Flamingo Cafe&Bistro menu options with prices for coffee, food, desserts and drinks.",
      },
      about: {
        title: "Flamingo Cafe&Bistro | About",
        description: "Discover Flamingo Cafe&Bistro, a modern cafe-bistro by Çalış Beach in Fethiye.",
      },
      gallery: {
        title: "Flamingo Cafe&Bistro | Gallery",
        description: "Gallery area for Flamingo Cafe&Bistro venue, food, drinks and atmosphere visuals.",
      },
      contact: {
        title: "Flamingo Cafe&Bistro | Contact",
        description: "Flamingo Cafe&Bistro address, phone, directions, Instagram and opening hours.",
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
      aboutActionLabel: "История",
      aboutDescription: "Теплая, современная и практичная остановка у пляжа Чалыш в Фетхие для кофе, завтрака, бистро-вкусов и пауз на закате.",
      aboutEyebrow: "О нас",
      aboutImageBadge: "Хорошие моменты. Яркие вкусы.",
      aboutImageLabel: "Визуальная зона, передающая атмосферу интерьера Flamingo Cafe&Bistro",
      aboutStampLabel: "С заботой",
      aboutTitle: "Наше бистро",
      atmosphereActionLabel: "Связаться",
      atmosphereDescription: "Кофе, еда, напитки и десерты в уютном формате кафе-бистро у пляжа Чалыш с видами на закат.",
      atmosphereEyebrow: "Атмосфера",
      atmosphereTitle: "Уютная остановка у пляжа Чалыш в любое время дня",
      categoriesDescription: "Быстро посмотрите завтрак, бургеры, пасту, напитки и другие категории.",
      categoriesEyebrow: "Категории меню",
      categoriesTitle: "Что вы ищете?",
      categoryActionLabel: "Смотреть в меню",
      galleryActionLabel: "Открыть галерею",
      galleryDescription: "Короткий предварительный просмотр для фотографий места, еды и напитков.",
      galleryEyebrow: "Галерея",
      galleryTitle: "Быстрый взгляд на место и его энергию",
      eventItems: [
        {
          title: "Пауза на кофе",
          description: "Акцент на горячих и прохладных напитках для разных моментов дня.",
        },
        {
          title: "Столы бистро",
          description: "Спокойное настроение для еды, десертов и напитков вместе.",
        },
        {
          title: "Ритм заката",
          description: "Визуальный ритм, подходящий теплому визиту к пляжу Чалыш.",
        },
      ],
      eventsActionLabel: "Связаться",
      eventsDescription: "Этот блок не является расписанием событий; он визуально передает дневной ритм кафе-бистро Flamingo.",
      eventsEyebrow: "Сейчас",
      eventsTitle: "Моменты кафе-бистро",
      featureItems: [
        {
          title: "Меню с ценами",
          description: "Быстро откройте завтраки, кофе, десерты и блюда бистро.",
        },
        {
          title: "Маршрут",
          description: "Откройте локацию у пляжа Чалыш на карте.",
        },
        {
          title: "Часы работы",
          description: "Быстро уточните план на день.",
        },
        {
          title: "Телефон",
          description: "Позвоните напрямую по вопросам локации и визита.",
        },
      ],
      featureStripLabel: "Ключевые детали визита в Flamingo Cafe&Bistro",
      heroCategoryLinks: {
        breakfast: "Завтраки",
        coffees: "Кофе",
        desserts: "Десерты",
      },
      heroCategoryNavLabel: "Популярные категории меню",
      heroDescription: "Завтраки, десерты, кофе и многое другое.",
      heroEyebrow: "Flamingo Cafe & Bistro",
      heroPrimaryAction: "Смотреть меню",
      heroTitle: "Откройте наши вкусы",
      menuCardImageLabel: "Визуальная зона продукта меню",
      noteItems: [
        {
          title: "Кофе",
          description: "Теплый и простой фокус для коротких пауз в течение дня.",
        },
        {
          title: "Вкус",
          description: "Сбалансированное ощущение меню от завтрака до блюд бистро.",
        },
        {
          title: "Вид",
          description: "Ритм бренда, сформированный пляжем Чалыш и атмосферой заката.",
        },
      ],
      notesActionLabel: "Связаться",
      notesEyebrow: "Что замечают гости",
      notesTitle: "Короткие заметки",
      popularActionLabel: "Перейти ко всему меню",
      popularDescription: "Небольшой стартовый предварительный просмотр до добавления настоящего меню.",
      popularEyebrow: "Популярные старты",
      popularTitle: "Короткий вкус меню",
      visitActionLabel: "Контакты",
      visitBadge: "Для визита",
      visitDescription: "Используйте телефон, маршрут и часы работы, чтобы легко спланировать визит.",
      visitEyebrow: "Хорошая еда лучше вместе",
      visitTitle: "Планируйте визит",
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
      ctaContactLabel: "Связаться",
      ctaMenuLabel: "Смотреть меню",
      ctaText: "Посмотрите меню с ценами или откройте локацию и контакты у пляжа Чалыш.",
      ctaTitle: "Планируйте визит к пляжу Чалыш проще",
      experienceEyebrow: "Опыт кафе-бистро",
      experienceImageLabel: "Визуальная зона опыта кафе-бистро Flamingo Cafe&Bistro",
      experienceText: "Кофе, завтраки, блюда бистро, десерты и прохладные напитки соединяются с теплой атмосферой Чалыша и видами на закат.",
      experienceTitle: "От кофейной паузы до столов на закате",
      eyebrow: "О Flamingo",
      heroImageLabel: "Визуальная зона страницы о Flamingo Cafe&Bistro",
      intro: "Flamingo Cafe&Bistro — современное кафе-бистро у пляжа Чалыш в Фетхие, где кофе, еда, напитки и десерты соединяются с теплой атмосферой и красивыми видами на закат.",
      storyEyebrow: "Короткая история",
      storyText: "Фокус простой: понятное меню с ценами, спокойная атмосфера у пляжа Чалыш и быстрый доступ к локации и контактам.",
      storyTitle: "Кафе-бистро в Фетхие для разных моментов дня",
      title: "О нас",
      valueItems: [
        {
          title: "Внимательные вкусы",
          description: "Простая структура меню для свежих и аккуратно подготовленных вариантов.",
        },
        {
          title: "Теплая атмосфера",
          description: "Современное ощущение кафе для спокойных остановок у пляжа Чалыш в течение дня.",
        },
        {
          title: "Разнообразное меню",
          description: "Сбалансированный поток кофе, еды, десертов и напитков.",
        },
        {
          title: "Понятные цены",
          description: "Практичное меню, где цены на позиции остаются видимыми.",
        },
        {
          title: "Локальный опыт",
          description: "Близкое ощущение кафе-бистро с быстрым доступом к локации у пляжа Чалыш в Фетхие и контактам.",
        },
      ],
      valuesEyebrow: "Ценности",
      valuesTitle: "Детали, которые формируют опыт Flamingo",
    },
    gallery: {
      allCategoriesLabel: "Все",
      categoryFilterLabel: "Категории галереи",
      categoryLabels: {
        venue: "Зал",
        food: "Еда",
        drinks: "Напитки",
        desserts: "Десерты",
        atmosphere: "Атмосфера",
      },
      emptyMessage: "Выберите другую категорию, чтобы снова посмотреть галерею.",
      emptyTitle: "В этой категории пока нет изображений",
      eyebrow: "Галерея",
      intro: "Галерея для фотографий пространства, еды, напитков и атмосферы.",
      title: "Галерея",
    },
    contact: {
      actionLabels: {
        phone: "Позвонить",
        whatsapp: "WhatsApp",
        directions: "Маршрут",
        instagram: "Instagram",
        email: "Написать email",
      },
      actionsTitle: "Быстрые действия",
      addressLabel: "Адрес",
      detailsTitle: "Контактная информация",
      emailLabel: "Email",
      eyebrow: "Контакты",
      intro: "Адрес, телефон, маршрут, Instagram и часы работы локации у пляжа Чалыш в одном удобном месте.",
      mapEmbedTitle: "Карта Flamingo Cafe&Bistro",
      mapPlaceholderDescription: "Встроенная карта будет добавлена позже; для маршрута используйте ссылку Google Maps.",
      mapPlaceholderTitle: "Ссылка на маршрут готова",
      mapTitle: "Локация",
      openingHoursTitle: "Часы работы",
      phoneLabel: "Телефон",
      socialLabel: "Соцсети",
      unavailableLabel: "Эта информация сейчас недоступна.",
      title: "Контакты",
    },
    common: {
      closedLabel: "Закрыто",
      contactActionLabels: {
        phone: "Телефон",
        whatsapp: "WhatsApp",
        directions: "Маршрут",
        instagram: "Instagram",
      },
      floatingContactActionsLabel: "Быстрая связь",
      languageNames: {
        tr: "Türkçe",
        en: "English",
        ru: "Русский",
        de: "Deutsch",
      },
      languageSwitcherLabel: "Выбор языка",
      mobileMenuCloseLabel: "Закрыть",
      mobileMenuOpenLabel: "Меню",
      primaryNavigationLabel: "Основная навигация",
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
    seo: {
      home: {
        title: "Flamingo Cafe&Bistro | Главная",
        description: "Flamingo Cafe&Bistro у пляжа Чалыш в Фетхие: кофе, еда, напитки и виды на закат.",
      },
      menu: {
        title: "Flamingo Cafe&Bistro | Меню",
        description: "Смотрите меню Flamingo Cafe&Bistro с ценами на кофе, еду, десерты и напитки.",
      },
      about: {
        title: "Flamingo Cafe&Bistro | О нас",
        description: "Узнайте о Flamingo Cafe&Bistro, современном кафе-бистро у пляжа Чалыш в Фетхие.",
      },
      gallery: {
        title: "Flamingo Cafe&Bistro | Галерея",
        description: "Галерея для фотографий места, еды, напитков и атмосферы Flamingo Cafe&Bistro.",
      },
      contact: {
        title: "Flamingo Cafe&Bistro | Контакты",
        description: "Адрес, телефон, маршрут, Instagram и часы работы Flamingo Cafe&Bistro.",
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
      aboutActionLabel: "Zur Geschichte",
      aboutDescription: "Ein warmer, moderner und praktischer Stopp am Çalış Strand in Fethiye für Kaffee, Frühstück, Bistro-Aromen und Pausen beim Sonnenuntergang.",
      aboutEyebrow: "Über uns",
      aboutImageBadge: "Gute Zeiten. Große Aromen.",
      aboutImageLabel: "Visueller Bereich für die Innenraum-Atmosphäre von Flamingo Cafe&Bistro",
      aboutStampLabel: "Mit Sorgfalt",
      aboutTitle: "Unser Bistro",
      atmosphereActionLabel: "Kontakt aufnehmen",
      atmosphereDescription: "Kaffee, Speisen, Getränke und Desserts in einem gemütlichen Cafe-Bistro-Fluss am Çalış Strand mit Blick auf den Sonnenuntergang.",
      atmosphereEyebrow: "Atmosphäre",
      atmosphereTitle: "Ein gemütlicher Stopp am Çalış Strand für jede Tageszeit",
      categoriesDescription: "Frühstück, Burger, Pasta, Getränke und mehr schnell vor dem vollständigen Menü ansehen.",
      categoriesEyebrow: "Menükategorien",
      categoriesTitle: "Wonach suchen Sie?",
      categoryActionLabel: "Im Menü ansehen",
      galleryActionLabel: "Galerie öffnen",
      galleryDescription: "Eine kurze Vorschau für Bilder von Ort, Speisen und Getränken.",
      galleryEyebrow: "Galerie",
      galleryTitle: "Ein kurzer Blick auf Ort und Energie",
      eventItems: [
        {
          title: "Kaffeepause",
          description: "Ein Fokus auf warme und kühle Getränke für verschiedene Tagesmomente.",
        },
        {
          title: "Bistro-Tische",
          description: "Eine entspannte Stimmung rund um Speisen, Desserts und Getränke.",
        },
        {
          title: "Sonnenuntergang",
          description: "Ein visueller Rhythmus für einen warmen Besuch am Çalış Strand.",
        },
      ],
      eventsActionLabel: "Kontakt aufnehmen",
      eventsDescription: "Dieser Bereich ist keine echte Eventliste; er zeigt visuell den Tagesrhythmus des Flamingo Cafe-Bistros.",
      eventsEyebrow: "Gerade jetzt",
      eventsTitle: "Cafe-Bistro-Momente",
      featureItems: [
        {
          title: "Menü mit Preisen",
          description: "Frühstück, Kaffee, Desserts und Bistro-Aromen schnell öffnen.",
        },
        {
          title: "Route",
          description: "Den Standort am Çalış Strand auf der Karte öffnen.",
        },
        {
          title: "Öffnungszeiten",
          description: "Den Tagesplan auf einen Blick prüfen.",
        },
        {
          title: "Telefon",
          description: "Direkt für Standort- und Besuchsfragen anrufen.",
        },
      ],
      featureStripLabel: "Besuchsdetails von Flamingo Cafe&Bistro",
      heroCategoryLinks: {
        breakfast: "Frühstück",
        coffees: "Kaffee",
        desserts: "Desserts",
      },
      heroCategoryNavLabel: "Ausgewählte Menükategorien",
      heroDescription: "Frühstück, Desserts, Kaffee und mehr.",
      heroEyebrow: "Flamingo Cafe & Bistro",
      heroPrimaryAction: "Menü ansehen",
      heroTitle: "Unsere Aromen entdecken",
      menuCardImageLabel: "Visueller Bereich für Menüprodukt",
      noteItems: [
        {
          title: "Kaffee",
          description: "Ein warmer und klarer Fokus für kurze Pausen am Tag.",
        },
        {
          title: "Aromen",
          description: "Ein ausgewogenes Menügefühl von Frühstück bis Bistro-Tellern.",
        },
        {
          title: "Aussicht",
          description: "Ein Markenrhythmus, geprägt von Çalış Strand und Sonnenuntergang.",
        },
      ],
      notesActionLabel: "Kontakt aufnehmen",
      notesEyebrow: "Was Gäste bemerken",
      notesTitle: "Kurze Notizen",
      popularActionLabel: "Zum vollständigen Menü",
      popularDescription: "Eine kleine Startvorschau, bis echte Menüinhalte ergänzt werden.",
      popularEyebrow: "Beliebte Starter",
      popularTitle: "Ein kurzer Vorgeschmack aus dem Menü",
      visitActionLabel: "Kontaktdaten",
      visitBadge: "Besuchsinfo",
      visitDescription: "Nutzen Sie Telefon, Route und Öffnungszeiten, um Ihren Besuch einfach zu planen.",
      visitEyebrow: "Gutes Essen, besser zusammen",
      visitTitle: "Besuch planen",
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
      ctaContactLabel: "Kontakt aufnehmen",
      ctaMenuLabel: "Menü ansehen",
      ctaText: "Sehen Sie das Menü mit Preisen an oder öffnen Sie Standort und Kontaktdaten am Çalış Strand.",
      ctaTitle: "Planen Sie Ihren Besuch am Çalış Strand einfacher",
      experienceEyebrow: "Cafe-Bistro-Erlebnis",
      experienceImageLabel: "Visueller Bereich für das Cafe-Bistro-Erlebnis von Flamingo Cafe&Bistro",
      experienceText: "Kaffee, Frühstück, Bistro-Teller, Desserts und kühle Getränke treffen auf die warme Atmosphäre des Çalış Strands und schöne Sonnenuntergänge.",
      experienceTitle: "Von der Kaffeepause bis zum Tisch bei Sonnenuntergang",
      eyebrow: "Über Flamingo",
      heroImageLabel: "Visueller Bereich der Über-uns-Seite von Flamingo Cafe&Bistro",
      intro: "Flamingo Cafe&Bistro ist ein modernes Cafe-Bistro am Çalış Strand in Fethiye, das Kaffee, Speisen, Getränke und Desserts mit warmer Atmosphäre und wunderschönem Sonnenuntergang verbindet.",
      storyEyebrow: "Kurze Geschichte",
      storyText: "Der Fokus ist einfach: ein Menü mit klaren Preisen, eine entspannte Atmosphäre am Çalış Strand und schneller Zugang zu Standort und Kontakt.",
      storyTitle: "Ein Cafe-Bistro in Fethiye für verschiedene Momente des Tages",
      title: "Über uns",
      valueItems: [
        {
          title: "Sorgfältige Aromen",
          description: "Eine einfache Menüstruktur mit Raum für frische und sorgfältig vorbereitete Optionen.",
        },
        {
          title: "Warme Atmosphäre",
          description: "Ein modernes Cafe-Gefühl für entspannte Stopps am Çalış Strand über den Tag.",
        },
        {
          title: "Menüvielfalt",
          description: "Ein ausgewogener Ablauf über Kaffee, Essen, Desserts und Getränke.",
        },
        {
          title: "Klare Preise",
          description: "Ein praktisches Menüerlebnis, bei dem Produktpreise sichtbar bleiben.",
        },
        {
          title: "Lokales Erlebnis",
          description: "Ein nahbares Cafe-Bistro-Gefühl mit schnellem Zugang zum Standort am Çalış Strand in Fethiye und zu Kontaktinformationen.",
        },
      ],
      valuesEyebrow: "Werte",
      valuesTitle: "Details, die das Flamingo-Erlebnis prägen",
    },
    gallery: {
      allCategoriesLabel: "Alle",
      categoryFilterLabel: "Galeriekategorien",
      categoryLabels: {
        venue: "Ort",
        food: "Speisen",
        drinks: "Getränke",
        desserts: "Desserts",
        atmosphere: "Atmosphäre",
      },
      emptyMessage: "Wählen Sie eine andere Kategorie, um die Galerie erneut anzusehen.",
      emptyTitle: "In dieser Kategorie gibt es noch keine Bilder",
      eyebrow: "Galerie",
      intro: "Ein flexibler Galeriebereich für Bilder von Ort, Speisen, Getränken und Atmosphäre.",
      title: "Galerie",
    },
    contact: {
      actionLabels: {
        phone: "Anrufen",
        whatsapp: "WhatsApp",
        directions: "Route anzeigen",
        instagram: "Instagram",
        email: "E-Mail senden",
      },
      actionsTitle: "Schnelle Aktionen",
      addressLabel: "Adresse",
      detailsTitle: "Kontaktinformationen",
      emailLabel: "E-Mail",
      eyebrow: "Kontakt",
      intro: "Adresse, Telefon, Route, Instagram und Öffnungszeiten für den Standort am Çalış Strand an einem praktischen Ort.",
      mapEmbedTitle: "Karte von Flamingo Cafe&Bistro",
      mapPlaceholderDescription: "Die eingebettete Karte wird später ergänzt; nutzen Sie den Google-Maps-Link für die Route.",
      mapPlaceholderTitle: "Routenlink bereit",
      mapTitle: "Standort",
      openingHoursTitle: "Öffnungszeiten",
      phoneLabel: "Telefon",
      socialLabel: "Social Media",
      unavailableLabel: "Diese Information ist derzeit nicht verfügbar.",
      title: "Kontakt",
    },
    common: {
      closedLabel: "Geschlossen",
      contactActionLabels: {
        phone: "Telefon",
        whatsapp: "WhatsApp",
        directions: "Route",
        instagram: "Instagram",
      },
      floatingContactActionsLabel: "Schneller Kontakt",
      languageNames: {
        tr: "Türkçe",
        en: "English",
        ru: "Русский",
        de: "Deutsch",
      },
      languageSwitcherLabel: "Sprachauswahl",
      mobileMenuCloseLabel: "Schließen",
      mobileMenuOpenLabel: "Menü",
      primaryNavigationLabel: "Hauptnavigation",
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
    seo: {
      home: {
        title: "Flamingo Cafe&Bistro | Startseite",
        description: "Flamingo Cafe&Bistro am Çalış Strand in Fethiye für Kaffee, Speisen, Getränke und Sonnenuntergang.",
      },
      menu: {
        title: "Flamingo Cafe&Bistro | Menü",
        description: "Sehen Sie die Menüoptionen von Flamingo Cafe&Bistro mit Preisen für Kaffee, Speisen, Desserts und Getränke.",
      },
      about: {
        title: "Flamingo Cafe&Bistro | Über uns",
        description: "Entdecken Sie Flamingo Cafe&Bistro, ein modernes Cafe-Bistro am Çalış Strand in Fethiye.",
      },
      gallery: {
        title: "Flamingo Cafe&Bistro | Galerie",
        description: "Galeriebereich für Ort, Speisen, Getränke und Atmosphäre von Flamingo Cafe&Bistro.",
      },
      contact: {
        title: "Flamingo Cafe&Bistro | Kontakt",
        description: "Adresse, Telefon, Route, Instagram und Öffnungszeiten von Flamingo Cafe&Bistro.",
      },
    },
  },
} as const satisfies Record<Locale, Dictionary>;
