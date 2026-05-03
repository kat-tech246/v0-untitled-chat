export type Language = 'en' | 'de' | 'ru'
export type Region = 'austria' | 'azerbaijan'

export interface RegionConfig {
  name: string
  languages: Language[]
  defaultLanguage: Language
}

export const regions: Record<Region, RegionConfig> = {
  austria: {
    name: 'Austria',
    languages: ['en', 'de'],
    defaultLanguage: 'en',
  },
  azerbaijan: {
    name: 'Azerbaijan',
    languages: ['ru'],
    defaultLanguage: 'ru',
  },
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский',
}

export const languageShortNames: Record<Language, string> = {
  en: 'EN',
  de: 'DE',
  ru: 'RU',
}

export const translations = {
  // HERO
  hero: {
    headline1: {
      en: 'Not a statement.',
      de: 'Kein Statement.',
      ru: 'Не просто украшение —',
    },
    headline2: {
      en: 'A signature.',
      de: 'Eine Signatur.',
      ru: 'ваш стиль.',
    },
    subline: {
      en: 'Designed to be worn. Every day.',
      de: 'Zum Tragen gemacht. Jeden Tag.',
      ru: 'Создано носить. Каждый день.',
    },
    exploreCollection: {
      en: 'Explore Collection',
      de: 'Kollektion entdecken',
      ru: 'Смотреть коллекцию',
    },
    ourStory: {
      en: 'Our Story',
      de: 'Unsere Geschichte',
      ru: 'Наша история',
    },
    eyebrow: {
      en: 'Fine Jewellery · Vienna',
      de: 'Feiner Schmuck · Wien',
      ru: 'Ювелирные украшения · Вена',
    },
  },

  // NAVIGATION
  nav: {
    home: { en: 'Home', de: 'Startseite', ru: 'Главная' },
    collection: { en: 'Collection', de: 'Kollektion', ru: 'Коллекция' },
    lookbook: { en: 'Lookbook', de: 'Lookbook', ru: 'Лукбук' },
    ourMaison: { en: 'Our Maison', de: 'Unser Haus', ru: 'О нас' },
    contact: { en: 'Contact', de: 'Kontakt', ru: 'Контакт' },
  },

  // TRENDING SECTION
  trending: {
    trendingNow: { en: 'Trending Now', de: 'Aktuell beliebt', ru: 'Сейчас в тренде' },
    mostLoved: { en: 'Most Loved This Season', de: 'Die Lieblinge dieser Saison', ru: 'Фавориты сезона' },
    viewAll: { en: 'View All', de: 'Alle ansehen', ru: 'Смотреть всё' },
    addToBag: { en: 'Add to Bag', de: 'In den Warenkorb', ru: 'В корзину' },
    viewDetails: { en: 'View Details', de: 'Details ansehen', ru: 'Подробнее' },
    discover: { en: 'Discover what everyone is wearing this season', de: 'Entdecke, was diese Saison getragen wird', ru: 'Откройте для себя украшения этого сезона' },
    exploreCollection: { en: 'Explore Collection', de: 'Kollektion entdecken', ru: 'Смотреть коллекцию' },
  },

  // COLLECTION SECTION
  collection: {
    theCollection: { en: 'The Collection', de: 'Die Kollektion', ru: 'Коллекция' },
    eachPiece: { en: 'Each piece, a quiet statement', de: 'Jedes Stück, eine stille Aussage', ru: 'Каждое украшение — особое' },
    viewFullCollection: { en: 'View Full Collection', de: 'Gesamte Kollektion ansehen', ru: 'Вся коллекция' },
    buyNow: { en: 'Buy Now', de: 'Jetzt kaufen', ru: 'Купить' },
    new: { en: 'New', de: 'Neu', ru: 'Новинка' },
    bestseller: { en: 'Bestseller', de: 'Bestseller', ru: 'Хит продаж' },
  },

  // CATEGORIES
  categories: {
    all: { en: 'All', de: 'Alle', ru: 'Всё' },
    necklaces: { en: 'Necklaces', de: 'Halsketten', ru: 'Колье' },
    rings: { en: 'Rings', de: 'Ringe', ru: 'Кольца' },
    earrings: { en: 'Earrings', de: 'Ohrringe', ru: 'Серьги' },
    bracelets: { en: 'Bracelets', de: 'Armbänder', ru: 'Браслеты' },
  },

  // QUOTE SECTION
  quote: {
    text: {
      en: 'Jewellery is not decoration. It is the armour a woman chooses to face the world in.',
      de: 'Schmuck ist keine Dekoration. Er ist die Rüstung, die eine Frau wählt, um der Welt zu begegnen.',
      ru: 'Украшения — это не просто декор. Это выбор женщины, с которым она выходит в мир.',
    },
  },

  // LOOKBOOK
  lookbook: {
    title: { en: 'Lookbook', de: 'Lookbook', ru: 'Лукбук' },
    wornWithIntention: { en: 'Worn with intention', de: 'Mit Absicht getragen', ru: 'Носить — значит жить' },
    viewAll: { en: 'View all', de: 'Alle ansehen', ru: 'Смотреть всё' },
  },

  // PILLARS / TRUST SECTION
  pillars: {
    moissanite: {
      title: { en: 'Moissanite & Zirconium', de: 'Moissanit & Zirkonium', ru: 'Муассанит и цирконий' },
      desc: { en: 'Ethical stones with diamond-like brilliance.', de: 'Ethische Steine mit diamantähnlichem Glanz.', ru: 'Этичные камни с бриллиантовым сиянием.' },
    },
    gold: {
      title: { en: '18K Gold Plated', de: '18K Vergoldet', ru: 'Позолота 18K' },
      desc: { en: 'Premium plating applied with precision.', de: 'Präzise aufgetragene Premiumvergoldung.', ru: 'Точное покрытие. Красота на каждый день.' },
    },
    vienna: {
      title: { en: 'Vienna Atelier', de: 'Wiener Atelier', ru: 'Венская мастерская' },
      desc: { en: 'Every piece designed and finished in Vienna.', de: 'Jedes Stück wird in Wien entworfen und veredelt.', ru: 'Каждое украшение создано и отделано в Вене.' },
    },
    returns: {
      title: { en: '30-Day Returns', de: '30 Tage Rückgabe', ru: 'Возврат 30 дней' },
      desc: { en: 'Free within Austria, no questions asked.', de: 'Kostenlos innerhalb Österreichs.', ru: 'Бесплатно по Австрии. Без лишних вопросов.' },
    },
  },

  // OUR STORY SECTION
  ourStory: {
    title: { en: 'Our Story', de: 'Unsere Geschichte', ru: 'Наша история' },
    headline: { en: 'Designed to be worn. Not displayed.', de: 'Zum Tragen gemacht. Nicht zur Schau gestellt.', ru: 'Создано носить. Не хранить.' },
    body: {
      en: [
        "Jewellery has always been treated like something you earn. A milestone. A gift for a specific version of yourself that hasn't arrived yet. We always found that a little sad.",
        "Azurél was founded in Vienna in 2026 with a simple idea: that beautiful, thoughtfully designed jewellery should be part of how you dress, not a reward you work toward. Something you reach for on a Tuesday. Something that makes an ordinary day feel considered.",
        "Our pieces are drawn to the kind of beauty that doesn't announce itself. Pear cuts, clean bezels, delicate chains, asymmetric details that reveal themselves slowly. We curate everything according to our own taste, which means nothing makes it in just because it is trending. It has to feel right.",
        "We work with moissanite and zirconium — stones chosen for their brilliance, their ethics, and the simple fact that they are genuinely beautiful. A lab diamond line is coming as Azurél grows. The philosophy will remain exactly the same.",
        "This is jewellery for people who know what they like and wear it without ceremony.",
      ],
      de: [
        "Schmuck wurde schon immer als etwas behandelt, das man sich verdienen muss. Ein Meilenstein. Ein Geschenk für eine Version von dir selbst, die noch nicht angekommen ist. Wir fanden das schon immer ein wenig traurig.",
        "Azurél wurde 2026 in Wien mit einer einfachen Idee gegründet: dass schöner, durchdachter Schmuck Teil deiner Garderobe sein sollte — keine Belohnung, auf die man hinarbeitet. Etwas, nach dem man an einem Dienstag greift. Etwas, das einen gewöhnlichen Tag besonders macht.",
        "Unsere Stücke ziehen die Art von Schönheit an, die sich nicht ankündigt. Tropfenschliffe, klare Fassungen, zarte Ketten, asymmetrische Details, die sich langsam offenbaren. Wir kuratieren alles nach unserem eigenen Geschmack, was bedeutet, dass nichts aufgenommen wird, nur weil es im Trend liegt. Es muss sich richtig anfühlen.",
        "Wir arbeiten mit Moissanit und Zirkonium — Steine, die für ihre Brillanz, ihre Ethik und schlicht ihre Schönheit ausgewählt wurden. Eine Linie mit Labordiamanten folgt, wenn Azurél wächst. Die Philosophie bleibt dieselbe.",
        "Dies ist Schmuck für Menschen, die wissen, was sie mögen — und ihn ohne Umstände tragen.",
      ],
      ru: [
        "Украшения всегда считались чем-то заработанным. Знаковым подарком. Для той версии себя, которая ещё впереди. Нам всегда казалось это немного грустным.",
        "Azurél был основан в Вене в 2026 году с простой идеей: красивые украшения должны быть частью вашего стиля — а не наградой, которую нужно заслужить. То, к чему тянешься в обычный вторник. То, что делает простой день немного особенным.",
        "Мы работаем с муассанитом и цирконием — камнями, выбранными за их блеск, этичность и красоту. Линия с лабораторными бриллиантами появится позже. Философия останется той же.",
        "Это украшения для тех, кто знает свой вкус и носит то, что нравится — без лишних поводов.",
      ],
    },
    pillarLabels: {
      ethical: { en: 'Ethical Stones · Moissanite & Zirconium', de: 'Ethische Steine · Moissanit & Zirkonium', ru: 'Этичные камни · Муассанит и цирконий' },
      gold: { en: '18K Gold Plating · Precision Crafted', de: '18K Vergoldung · Präzisionsgefertigt', ru: 'Позолота 18K · Точное исполнение' },
      vienna: { en: 'Designed & Finished in Vienna', de: 'Entworfen & veredelt in Wien', ru: 'Разработано и создано в Вене' },
      sustainable: { en: 'Sustainable Packaging', de: 'Nachhaltige Verpackung', ru: 'Экологичная упаковка' },
    },
  },

  // NEWSLETTER
  newsletter: {
    title: { en: 'First access, always.', de: 'Immer zuerst.', ru: 'Будьте первыми.' },
    body: {
      en: 'Join the Azurél inner circle — be the first to know about new collections, exclusive events, and pieces made just for you.',
      de: 'Werde Teil des Azurél Inner Circle — erfahre als Erste von neuen Kollektionen, exklusiven Events und Stücken, die nur für dich gemacht sind.',
      ru: 'Вступите во внутренний круг Azurél — узнавайте первыми о новых коллекциях и эксклюзивных украшениях.',
    },
    subscribe: { en: 'Subscribe', de: 'Abonnieren', ru: 'Подписаться' },
    placeholder: { en: 'Enter your email', de: 'E-Mail eingeben', ru: 'Введите email' },
  },

  // CONTACT SECTION
  contact: {
    getInTouch: { en: 'Get in Touch', de: 'Kontakt aufnehmen', ru: 'Свяжитесь с нами' },
    weLove: { en: "We'd love to hear from you", de: 'Wir freuen uns von Ihnen zu hören', ru: 'Будем рады услышать вас' },
    atelier: { en: 'Atelier', de: 'Atelier', ru: 'Ателье' },
    email: { en: 'Email', de: 'E-Mail', ru: 'Эл. почта' },
    instagram: { en: 'Instagram', de: 'Instagram', ru: 'Инстаграм' },
    hours: { en: 'Hours', de: 'Öffnungszeiten', ru: 'Часы работы' },
    firstName: { en: 'First Name', de: 'Vorname', ru: 'Имя' },
    lastName: { en: 'Last Name', de: 'Nachname', ru: 'Фамилия' },
    subject: { en: 'Subject', de: 'Betreff', ru: 'Тема' },
    message: { en: 'Message', de: 'Nachricht', ru: 'Сообщение' },
    sendMessage: { en: 'Send Message', de: 'Nachricht senden', ru: 'Отправить' },
  },

  // FOOTER
  footer: {
    tagline: {
      en: 'Fine jewellery crafted in Vienna. Moissanite · Zirconium · 18K Gold Plated.',
      de: 'Feiner Schmuck, gefertigt in Wien. Moissanit · Zirkonium · 18K vergoldet.',
      ru: 'Ювелирные украшения из Вены. Муассанит · Цирконий · Позолота 18K.',
    },
    collection: { en: 'Collection', de: 'Kollektion', ru: 'Коллекция' },
    information: { en: 'Information', de: 'Informationen', ru: 'Информация' },
    support: { en: 'Support', de: 'Support', ru: 'Поддержка' },
    necklaces: { en: 'Necklaces', de: 'Halsketten', ru: 'Колье' },
    rings: { en: 'Rings', de: 'Ringe', ru: 'Кольца' },
    earrings: { en: 'Earrings', de: 'Ohrringe', ru: 'Серьги' },
    bracelets: { en: 'Bracelets', de: 'Armbänder', ru: 'Браслеты' },
    newArrivals: { en: 'New Arrivals', de: 'Neuankömmlinge', ru: 'Новинки' },
    ourStory: { en: 'Our Story', de: 'Unsere Geschichte', ru: 'Наша история' },
    jewelleryCare: { en: 'Jewellery Care', de: 'Schmuckpflege', ru: 'Уход за украшениями' },
    sizingGuide: { en: 'Sizing Guide', de: 'Größenguide', ru: 'Размеры' },
    sustainability: { en: 'Sustainability', de: 'Nachhaltigkeit', ru: 'Устойчивость' },
    press: { en: 'Press', de: 'Presse', ru: 'Пресса' },
    shippingReturns: { en: 'Shipping & Returns', de: 'Versand & Rückgabe', ru: 'Доставка и возврат' },
    trackOrder: { en: 'Track My Order', de: 'Meine Bestellung verfolgen', ru: 'Отследить заказ' },
    faq: { en: 'FAQ', de: 'FAQ', ru: 'FAQ' },
    customerSupport: { en: 'Customer Support', de: 'Kundensupport', ru: 'Поддержка' },
    contactUs: { en: 'Contact', de: 'Kontakt', ru: 'Контакт' },
    privacyPolicy: { en: 'Privacy Policy', de: 'Datenschutz', ru: 'Политика конфиденциальности' },
    terms: { en: 'Terms', de: 'AGB', ru: 'Условия' },
    cookies: { en: 'Cookies', de: 'Cookies', ru: 'Cookies' },
    regionLanguage: { en: 'Region & Language', de: 'Region & Sprache', ru: 'Регион и язык' },
  },

  // CART & WISHLIST
  cart: {
    yourCartEmpty: { en: 'Your cart is empty.', de: 'Ihr Warenkorb ist leer.', ru: 'Корзина пуста.' },
    yourWishlistEmpty: { en: 'Your wishlist is empty.', de: 'Ihre Wunschliste ist leer.', ru: 'Список желаний пуст.' },
    saveHeart: { en: 'Save your favorite pieces by clicking the heart icon.', de: 'Speichern Sie Ihre Lieblingstücke mit dem Herz-Symbol.', ru: 'Добавляйте украшения, нажимая на сердечко.' },
    exploreCollection: { en: 'Explore Collection', de: 'Kollektion entdecken', ru: 'Смотреть коллекцию' },
    yourSelection: { en: 'Your Selection', de: 'Ihre Auswahl', ru: 'Ваш выбор' },
    yourWishlist: { en: 'Your Wishlist', de: 'Ihre Wunschliste', ru: 'Список желаний' },
    shoppingBag: { en: 'Shopping Bag', de: 'Warenkorb', ru: 'Ваша корзина' },
    checkout: { en: 'Checkout', de: 'Zur Kasse', ru: 'Оформить заказ' },
    subtotal: { en: 'Subtotal', de: 'Zwischensumme', ru: 'Итого' },
    remove: { en: 'Remove', de: 'Entfernen', ru: 'Удалить' },
  },

  // REGION SELECTOR
  region: {
    title: { en: 'Select Your Region', de: 'Wähle deine Region', ru: 'Выберите регион' },
    subtitle: { en: 'Choose your location and preferred language', de: 'Wähle deinen Standort und deine bevorzugte Sprache', ru: 'Выберите местоположение и язык' },
  },

  // MISC
  misc: {
    close: { en: 'Close', de: 'Schließen', ru: 'Закрыть' },
    search: { en: 'Search', de: 'Suche', ru: 'Поиск' },
    searchPlaceholder: { en: 'Search for jewellery...', de: 'Nach Schmuck suchen...', ru: 'Искать украшения...' },
    scroll: { en: 'Scroll', de: 'Scrollen', ru: 'Листать' },
  },
} as const

export type TranslationKey = keyof typeof translations
