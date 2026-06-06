import type { Locale } from "../lib/i18n/locales.ts";

export type LocalizedText<TValue> = Record<Locale, TValue>;

export type MenuCategoryTranslation = {
  title: string;
  description?: string;
};

export type MenuItemTranslation = {
  name: string;
  description?: string;
};

export type MenuCategory = {
  id: string;
  order: number;
  image?: string;
  translations: LocalizedText<MenuCategoryTranslation>;
};

export type MenuItem = {
  id: string;
  categoryId: string;
  price: number;
  image?: string;
  isPopular?: boolean;
  isNew?: boolean;
  allergens?: string[];
  tags?: string[];
  translations: LocalizedText<MenuItemTranslation>;
};

// Starter sample data for Phase 3 validation only. Replace with the real menu
// in the menu content phase without creating another menu source.
export const menuCategories: readonly MenuCategory[] = [
  {
    id: "breakfast",
    order: 10,
    translations: {
      tr: {
        title: "Kahvaltı",
        description: "Güne başlamak için sade cafe-bistro seçenekleri.",
      },
      en: {
        title: "Breakfast",
        description: "Simple cafe-bistro options to start the day.",
      },
      ru: {
        title: "Завтрак",
        description: "Простые варианты кафе-бистро для начала дня.",
      },
      de: {
        title: "Frühstück",
        description: "Einfache Cafe-Bistro-Optionen für den Start in den Tag.",
      },
    },
  },
  {
    id: "burgers",
    order: 20,
    translations: {
      tr: {
        title: "Burgerler",
        description: "Doyurucu bistro burger seçenekleri.",
      },
      en: {
        title: "Burgers",
        description: "Satisfying bistro burger options.",
      },
      ru: {
        title: "Бургеры",
        description: "Сытные варианты бургеров в стиле бистро.",
      },
      de: {
        title: "Burger",
        description: "Sättigende Bistro-Burger-Optionen.",
      },
    },
  },
  {
    id: "pasta",
    order: 30,
    translations: {
      tr: {
        title: "Makarnalar",
        description: "Günlük bistro tabakları.",
      },
      en: {
        title: "Pasta",
        description: "Everyday bistro plates.",
      },
      ru: {
        title: "Паста",
        description: "Повседневные блюда в стиле бистро.",
      },
      de: {
        title: "Pasta",
        description: "Alltägliche Bistro-Teller.",
      },
    },
  },
  {
    id: "desserts",
    order: 40,
    translations: {
      tr: {
        title: "Tatlılar",
        description: "Kahve yanında dengeli tatlı seçenekleri.",
      },
      en: {
        title: "Desserts",
        description: "Balanced sweet options alongside coffee.",
      },
      ru: {
        title: "Десерты",
        description: "Сбалансированные сладкие варианты к кофе.",
      },
      de: {
        title: "Desserts",
        description: "Ausgewogene süße Optionen zum Kaffee.",
      },
    },
  },
  {
    id: "hot-drinks",
    order: 50,
    translations: {
      tr: {
        title: "Sıcak İçecekler",
        description: "Kahve ve sıcak içecek seçenekleri.",
      },
      en: {
        title: "Hot Drinks",
        description: "Coffee and warm drink options.",
      },
      ru: {
        title: "Горячие напитки",
        description: "Кофе и другие горячие напитки.",
      },
      de: {
        title: "Heißgetränke",
        description: "Kaffee und warme Getränke.",
      },
    },
  },
  {
    id: "cold-drinks",
    order: 60,
    translations: {
      tr: {
        title: "Soğuk İçecekler",
        description: "Ferahlık veren soğuk içecekler.",
      },
      en: {
        title: "Cold Drinks",
        description: "Refreshing cold drinks.",
      },
      ru: {
        title: "Холодные напитки",
        description: "Освежающие холодные напитки.",
      },
      de: {
        title: "Kaltgetränke",
        description: "Erfrischende kalte Getränke.",
      },
    },
  },
  {
    id: "frozen-milkshake",
    order: 70,
    translations: {
      tr: {
        title: "Frozen ve Milkshake",
        description: "Serin ve keyifli içecek seçenekleri.",
      },
      en: {
        title: "Frozen and Milkshake",
        description: "Cool and enjoyable drink options.",
      },
      ru: {
        title: "Фрозен и милкшейки",
        description: "Прохладные и приятные напитки.",
      },
      de: {
        title: "Frozen und Milkshake",
        description: "Kühle und angenehme Getränke.",
      },
    },
  },
] as const;

export const menuItems: readonly MenuItem[] = [
  {
    id: "starter-breakfast-plate",
    categoryId: "breakfast",
    price: 240,
    isPopular: true,
    allergens: ["egg", "dairy", "gluten"],
    tags: ["starter-sample"],
    translations: {
      tr: {
        name: "Başlangıç Kahvaltı Tabağı",
        description: "Yumurta, peynir, zeytin ve taze ekmek ile örnek tabak.",
      },
      en: {
        name: "Starter Breakfast Plate",
        description: "Sample plate with egg, cheese, olives and fresh bread.",
      },
      ru: {
        name: "Стартовая тарелка завтрака",
        description: "Пример тарелки с яйцом, сыром, оливками и свежим хлебом.",
      },
      de: {
        name: "Starter-Frühstücksteller",
        description: "Beispielteller mit Ei, Käse, Oliven und frischem Brot.",
      },
    },
  },
  {
    id: "starter-bistro-burger",
    categoryId: "burgers",
    price: 320,
    isPopular: true,
    allergens: ["gluten", "dairy"],
    tags: ["starter-sample"],
    translations: {
      tr: {
        name: "Başlangıç Bistro Burger",
        description: "Köfte, yeşillik ve sade bistro sos ile örnek burger.",
      },
      en: {
        name: "Starter Bistro Burger",
        description: "Sample burger with patty, greens and simple bistro sauce.",
      },
      ru: {
        name: "Стартовый бистро-бургер",
        description: "Пример бургера с котлетой, зеленью и простым соусом бистро.",
      },
      de: {
        name: "Starter-Bistro-Burger",
        description: "Beispielburger mit Patty, Grünzeug und einfacher Bistro-Sauce.",
      },
    },
  },
  {
    id: "starter-cream-pasta",
    categoryId: "pasta",
    price: 285,
    allergens: ["gluten", "dairy"],
    tags: ["starter-sample"],
    translations: {
      tr: {
        name: "Başlangıç Kremalı Makarna",
        description: "Kremalı sos ve taze otlar ile örnek makarna.",
      },
      en: {
        name: "Starter Cream Pasta",
        description: "Sample pasta with cream sauce and fresh herbs.",
      },
      ru: {
        name: "Стартовая паста со сливочным соусом",
        description: "Пример пасты со сливочным соусом и свежей зеленью.",
      },
      de: {
        name: "Starter-Pasta mit Sahnesauce",
        description: "Beispielpasta mit Sahnesauce und frischen Kräutern.",
      },
    },
  },
  {
    id: "starter-cafe-dessert",
    categoryId: "desserts",
    price: 180,
    allergens: ["dairy", "gluten"],
    tags: ["starter-sample"],
    translations: {
      tr: {
        name: "Başlangıç Cafe Tatlısı",
        description: "Kahve yanında sunulacak dengeli örnek tatlı.",
      },
      en: {
        name: "Starter Cafe Dessert",
        description: "Balanced sample dessert to serve with coffee.",
      },
      ru: {
        name: "Стартовый десерт кафе",
        description: "Сбалансированный пример десерта к кофе.",
      },
      de: {
        name: "Starter-Cafe-Dessert",
        description: "Ausgewogenes Beispieldessert zum Kaffee.",
      },
    },
  },
  {
    id: "starter-latte",
    categoryId: "hot-drinks",
    price: 120,
    allergens: ["dairy"],
    tags: ["starter-sample"],
    translations: {
      tr: {
        name: "Başlangıç Latte",
        description: "Sütlü kahve için örnek sıcak içecek.",
      },
      en: {
        name: "Starter Latte",
        description: "Sample hot drink for a milk coffee option.",
      },
      ru: {
        name: "Стартовый латте",
        description: "Пример горячего напитка с молоком и кофе.",
      },
      de: {
        name: "Starter-Latte",
        description: "Beispiel-Heißgetränk für eine Milchkaffee-Option.",
      },
    },
  },
  {
    id: "starter-iced-tea",
    categoryId: "cold-drinks",
    price: 105,
    isNew: true,
    tags: ["starter-sample"],
    translations: {
      tr: {
        name: "Başlangıç Soğuk Çay",
        description: "Ferahlık veren örnek soğuk içecek.",
      },
      en: {
        name: "Starter Iced Tea",
        description: "Refreshing sample cold drink.",
      },
      ru: {
        name: "Стартовый холодный чай",
        description: "Освежающий пример холодного напитка.",
      },
      de: {
        name: "Starter-Eistee",
        description: "Erfrischendes Beispiel-Kaltgetränk.",
      },
    },
  },
  {
    id: "starter-strawberry-milkshake",
    categoryId: "frozen-milkshake",
    price: 165,
    allergens: ["dairy"],
    tags: ["starter-sample"],
    translations: {
      tr: {
        name: "Başlangıç Çilekli Milkshake",
        description: "Serin içecek kategorisi için örnek milkshake.",
      },
      en: {
        name: "Starter Strawberry Milkshake",
        description: "Sample milkshake for the chilled drink category.",
      },
      ru: {
        name: "Стартовый клубничный милкшейк",
        description: "Пример милкшейка для категории охлажденных напитков.",
      },
      de: {
        name: "Starter-Erdbeer-Milkshake",
        description: "Beispiel-Milkshake für die Kategorie gekühlte Getränke.",
      },
    },
  },
] as const;
