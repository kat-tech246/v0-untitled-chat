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
      ru: 'Не заявление.',
    },
    headline2: {
      en: 'A signature.',
      de: 'Eine Signatur.',
      ru: 'Подпись.',
    },
    subline: {
      en: 'Designed to be worn. Not saved for.',
      de: 'Zum Tragen gemacht. Nicht zum Aufbewahren.',
      ru: 'Создано, чтобы носить. Не хранить.',
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
  },

  // NAVIGATION
  nav: {
    home: { en: 'Home', de: 'Startseite', ru: 'Главная' },
    collection: { en: 'Collection', de: 'Kollektion', ru: 'Коллекция' },
    lookbook: { en: 'Lookbook', de: 'Lookbook', ru: 'Лукбук' },
    ourMaison: { en: 'Our Maison', de: 'Unser Haus', ru: 'Наш дом' },
    contact: { en: 'Contact', de: 'Kontakt', ru: 'Контакт' },
  },

  // TRENDING SECTION
  trending: {
    trendingNow: { en: 'Trending Now', de: 'Aktuell beliebt', ru: 'Сейчас в тренде' },
    mostLoved: { en: 'Most Loved This Season', de: 'Die Lieblinge dieser Saison', ru: 'Самое любимое в этом сезоне' },
    viewAll: { en: 'View All', de: 'Alle ansehen', ru: 'Смотреть всё' },
    addToBag: { en: 'Add to Bag', de: 'In den Warenkorb', ru: 'В корзину' },
    viewDetails: { en: 'View Details', de: 'Details ansehen', ru: 'Подробнее' },
    discover: { en: 'Discover what everyone is wearing this season', de: 'Entdecke, was diese Saison getragen wird', ru: 'Узнайте, что носят в этом сезоне' },
    exploreCollection: { en: 'Explore Collection', de: 'Kollektion entdecken', ru: 'Смотреть коллекцию' },
  },

  // COLLECTION SECTION
  collection: {
    theCollection: { en: 'The Collection', de: 'Die Kollektion', ru: 'Коллекция' },
    eachPiece: { en: 'Each piece, a quiet statement', de: 'Jedes Stück, eine stille Aussage', ru: 'Каждое украшение — тихое высказывание' },
    viewFullCollection: { en: 'View Full Collection', de: 'Gesamte Kollektion ansehen', ru: 'Смотреть всю коллекцию' },
    buyNow: { en: 'Buy Now', de: 'Jetzt kaufen', ru: 'Купить сейчас' },
    new: { en: 'New', de: 'Neu', ru: 'Новинка' },
    bestseller: { en: 'Bestseller', de: 'Bestseller', ru: 'Бестселлер' },
  },

  // CATEGORIES
  categories: {
    all: { en: 'All', de: 'Alle', ru: 'Все' },
    necklaces: { en: 'Necklaces', de: 'Halsketten', ru: 'Ожерелья' },
    rings: { en: 'Rings', de: 'Ringe', ru: 'Кольца' },
    earrings: { en: 'Earrings', de: 'Ohrringe', ru: 'Серьги' },
    bracelets: { en: 'Bracelets', de: 'Armbänder', ru: 'Браслеты' },
  },

  // QUOTE SECTION
  quote: {
    text: {
      en: 'Jewellery is not decoration. It is the armour a woman chooses to face the world in.',
      de: 'Schmuck ist keine Dekoration. Er ist die Rüstung, die eine Frau wählt, um der Welt zu begegnen.',
      ru: 'Украшения — это не декор. Это доспехи, которые женщина выбирает, чтобы встретить мир.',
    },
  },

  // LOOKBOOK
  lookbook: {
    title: { en: 'Lookbook', de: 'Lookbook', ru: 'Лукбук' },
    wornWithIntention: { en: 'Worn with intention', de: 'Mit Absicht getragen', ru: 'Носить осознанно' },
    viewAll: { en: 'View all', de: 'Alle ansehen', ru: 'Смотреть всё' },
  },

  // PILLARS / TRUST SECTION
  pillars: {
    moissanite: {
      title: { en: 'Moissanite & Zirconium', de: 'Moissanit & Zirkonium', ru: 'Муассанит и цирконий' },
      desc: { en: 'Conflict-free stones with diamond-like brilliance.', de: 'Konfliktfreie Steine mit diamantähnlichem Glanz.', ru: 'Бесконфликтные камни с бриллиантовым блеском.' },
    },
    gold: {
      title: { en: '18K Gold Plated', de: '18K Vergoldet', ru: 'Позолота 18K' },
      desc: { en: 'Premium plating applied with precision.', de: 'Präzise aufgetragene Premiumvergoldung.', ru: 'Точное нанесение премиального покрытия.' },
    },
    vienna: {
      title: { en: 'Vienna Atelier', de: 'Wiener Atelier', ru: 'Венская мастерская' },
      desc: { en: 'Every piece designed and hand-finished in our Viennese studio.', de: 'Jedes Stück wird in unserem Wiener Studio entworfen und von Hand veredelt.', ru: 'Каждое украшение разработано и вручную отделано в нашей венской студии.' },
    },
    returns: {
      title: { en: '30-Day Returns', de: '30 Tage Rückgabe', ru: '30-дневный возврат' },
      desc: { en: 'Free of charge within Austria, no questions asked.', de: 'Kostenlos innerhalb Österreichs, keine Fragen gestellt.', ru: 'Бесплатно в пределах Австрии, без лишних вопросов.' },
    },
  },

  // OUR STORY SECTION
  ourStory: {
    title: { en: 'Our Story', de: 'Unsere Geschichte', ru: 'Наша история' },
    headline: { en: 'Designed to be worn. Not displayed.', de: 'Zum Tragen gemacht. Nicht zur Schau gestellt.', ru: 'Создано, чтобы носить. Не выставлять напоказ.' },
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
        "Украшения всегда воспринимались как нечто заработанное. Веха. Подарок для той версии себя, которая ещё не наступила. Мы всегда считали это немного грустным.",
        "Azurél был основан в Вене в 2026 году с простой идеей: красивые, продуманные украшения должны быть частью того, как вы одеваетесь, а не наградой, к которой стремятся. То, к чему тянешься во вторник. То, что делает обычный день особенным.",
        "Наши украшения притягивают тот вид красоты, который не заявляет о себе. Грушевидные огранки, чистые оправы, тонкие цепочки, асимметричные детали, которые раскрываются постепенно. Мы курируем всё по собственному вкусу, а это значит, что ничто не попадает к нам только потому, что это в тренде. Оно должно ощущаться правильным.",
        "Мы работаем с муассанитом и цирконием — камнями, выбранными за их блеск, этичность и просто красоту. Линия с выращенными в лаборатории бриллиантами появится по мере роста Azurél. Философия останется прежней.",
        "Это украшения для людей, которые знают, что им нравится, и носят их без церемоний.",
      ],
    },
    pillarLabels: {
      ethical: { en: 'Ethical Stones · Moissanite & Zirconium', de: 'Ethische Steine · Moissanit & Zirkonium', ru: 'Этичные камни · Муассанит и цирконий' },
      gold: { en: '18K Gold Plating · Precision Crafted', de: '18K Vergoldung · Präzisionsgefertigt', ru: 'Позолота 18K · Точное исполнение' },
      vienna: { en: 'Designed & Finished in Vienna', de: 'Entworfen & veredelt in Wien', ru: 'Разработано и отделано в Вене' },
      sustainable: { en: 'Sustainable Packaging', de: 'Nachhaltige Verpackung', ru: 'Экологичная упаковка' },
    },
  },

  // NEWSLETTER
  newsletter: {
    title: { en: 'First access, always.', de: 'Immer zuerst.', ru: 'Всегда первыми.' },
    body: {
      en: 'Join the Azurél inner circle — be the first to know about new collections, exclusive events, and pieces made just for you.',
      de: 'Werde Teil des Azurél Inner Circle — erfahre als Erste von neuen Kollektionen, exklusiven Events und Stücken, die nur für dich gemacht sind.',
      ru: 'Вступите во внутренний круг Azurél — узнавайте первыми о новых коллекциях, эксклюзивных событиях и украшениях, созданных специально для вас.',
    },
    subscribe: { en: 'Subscribe', de: 'Abonnieren', ru: 'Подписаться' },
    placeholder: { en: 'Enter your email', de: 'E-Mail eingeben', ru: 'Введите email' },
  },

  // CONTACT SECTION
  contact: {
    getInTouch: { en: 'Get in Touch', de: 'Kontakt aufnehmen', ru: 'Связаться с нами' },
    weLove: { en: "We'd love to hear from you", de: 'Wir freuen uns von Ihnen zu hören', ru: 'Мы будем рады услышать вас' },
    atelier: { en: 'Atelier', de: 'Atelier', ru: 'Ателье' },
    email: { en: 'Email', de: 'E-Mail', ru: 'Эл. почта' },
    instagram: { en: 'Instagram', de: 'Instagram', ru: 'Инстаграм' },
    hours: { en: 'Hours', de: 'Öffnungszeiten', ru: 'Часы работы' },
    firstName: { en: 'First Name', de: 'Vorname', ru: 'Имя' },
    lastName: { en: 'Last Name', de: 'Nachname', ru: 'Фамилия' },
    subject: { en: 'Subject', de: 'Betreff', ru: 'Тема' },
    message: { en: 'Message', de: 'Nachricht', ru: 'Сообщение' },
    sendMessage: { en: 'Send Message', de: 'Nachricht senden', ru: 'Отправить сообщение' },
  },

  // FOOTER
  footer: {
    tagline: {
      en: 'Fine jewellery crafted in Vienna. Moissanite · Zirconium · 18K Gold Plated.',
      de: 'Feiner Schmuck, gefertigt in Wien. Moissanit · Zirkonium · 18K vergoldet.',
      ru: 'Ювелирные украшения, созданные в Вене. Муассанит · Цирконий · Позолота 18K.',
    },
    collection: { en: 'Collection', de: 'Kollektion', ru: 'Коллекция' },
    information: { en: 'Information', de: 'Informationen', ru: 'Информация' },
    support: { en: 'Support', de: 'Support', ru: 'Поддержка' },
    necklaces: { en: 'Necklaces', de: 'Halsketten', ru: 'Ожерелья' },
    rings: { en: 'Rings', de: 'Ringe', ru: 'Кольца' },
    earrings: { en: 'Earrings', de: 'Ohrringe', ru: 'Серьги' },
    bracelets: { en: 'Bracelets', de: 'Armbänder', ru: 'Браслеты' },
    newArrivals: { en: 'New Arrivals', de: 'Neuankömmlinge', ru: 'Новинки' },
    ourStory: { en: 'Our Story', de: 'Unsere Geschichte', ru: 'Наша история' },
    jewelleryCare: { en: 'Jewellery Care', de: 'Schmuckpflege', ru: 'Уход за украшениями' },
    sizingGuide: { en: 'Sizing Guide', de: 'Größenguide', ru: 'Руководство по размерам' },
    sustainability: { en: 'Sustainability', de: 'Nachhaltigkeit', ru: 'Устойчивость' },
    press: { en: 'Press', de: 'Presse', ru: 'Пресса' },
    shippingReturns: { en: 'Shipping & Returns', de: 'Versand & Rückgabe', ru: 'Доставка и возврат' },
    trackOrder: { en: 'Track My Order', de: 'Meine Bestellung verfolgen', ru: 'Отследить заказ' },
    faq: { en: 'FAQ', de: 'FAQ', ru: 'FAQ' },
    customerSupport: { en: 'Customer Support', de: 'Kundensupport', ru: 'Поддержка клиентов' },
    contactUs: { en: 'Contact', de: 'Kontakt', ru: 'Контакт' },
    privacyPolicy: { en: 'Privacy Policy', de: 'Datenschutz', ru: 'Политика конфиденциальности' },
    terms: { en: 'Terms', de: 'AGB', ru: 'Условия' },
    cookies: { en: 'Cookies', de: 'Cookies', ru: 'Cookies' },
  },

  // CART & WISHLIST
  cart: {
    yourCartEmpty: { en: 'Your cart is empty.', de: 'Ihr Warenkorb ist leer.', ru: 'Ваша корзина пуста.' },
    yourWishlistEmpty: { en: 'Your wishlist is empty.', de: 'Ihre Wunschliste ist leer.', ru: 'Ваш список желаний пуст.' },
    saveHeart: { en: 'Save your favorite pieces by clicking the heart icon on any product.', de: 'Speichern Sie Ihre Lieblingstücke, indem Sie auf das Herz-Symbol bei einem Produkt klicken.', ru: 'Сохраняйте любимые украшения, нажимая на значок сердца.' },
    exploreCollection: { en: 'Explore Collection', de: 'Kollektion entdecken', ru: 'Смотреть коллекцию' },
    yourSelection: { en: 'Your Selection', de: 'Ihre Auswahl', ru: 'Ваш выбор' },
    yourWishlist: { en: 'Your Wishlist', de: 'Ihre Wunschliste', ru: 'Список желаний' },
    shoppingBag: { en: 'Shopping Bag', de: 'Warenkorb', ru: 'Корзина' },
    checkout: { en: 'Checkout', de: 'Zur Kasse', ru: 'Оформить заказ' },
    subtotal: { en: 'Subtotal', de: 'Zwischensumme', ru: 'Итого' },
    remove: { en: 'Remove', de: 'Entfernen', ru: 'Удалить' },
  },

  // MISC
  misc: {
    close: { en: 'Close', de: 'Schließen', ru: 'Закрыть' },
    search: { en: 'Search', de: 'Suche', ru: 'Поиск' },
    searchPlaceholder: { en: 'Search for jewellery...', de: 'Nach Schmuck suchen...', ru: 'Искать украшения...' },
  },
} as const

export type TranslationKey = keyof typeof translations
