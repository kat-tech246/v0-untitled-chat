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
        "Azurel был основан в Вене в 2026 году с простой идеей: красивые украшения должны быть частью вашего стиля, а не наградой, которую нужно заслужить. То, к чему тянешься в обычный вторник. То, что делает простой день немного особенным.",
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

  // PRODUCT PAGE
  product: {
    home: { en: 'Home', de: 'Startseite', ru: 'Главная' },
    collection: { en: 'Collection', de: 'Kollektion', ru: 'Коллекция' },
    addToBag: { en: 'Add to Bag', de: 'In den Warenkorb', ru: 'В корзину' },
    addedToBag: { en: 'Added to Bag', de: 'Hinzugefügt', ru: 'Добавлено' },
    buyNow: { en: 'Buy Now', de: 'Jetzt kaufen', ru: 'Купить' },
    quantity: { en: 'Quantity', de: 'Anzahl', ru: 'Количество' },
    sizeGuide: { en: 'Size Guide', de: 'Größenguide', ru: 'Размеры' },
    freeShipping: { en: 'Free Shipping', de: 'Kostenloser Versand', ru: 'Бесплатная доставка' },
    returns: { en: '30-Day Returns', de: '30 Tage Rückgabe', ru: 'Возврат 30 дней' },
    warranty: { en: '2-Year Warranty', de: '2 Jahre Garantie', ru: 'Гарантия 2 года' },
    productDetails: { en: 'Product Details', de: 'Produktdetails', ru: 'Описание' },
    shippingDelivery: { en: 'Shipping & Delivery', de: 'Versand & Lieferung', ru: 'Доставка' },
    sizingGuide: { en: 'Sizing Guide', de: 'Größenguide', ru: 'Размеры' },
    returnsCare: { en: 'Returns & Care', de: 'Rückgabe & Pflege', ru: 'Возврат и уход' },
    youMayLove: { en: 'You May Also Love', de: 'Das könnte Ihnen auch gefallen', ru: 'Вам также понравится' },
    similarPieces: { en: 'Similar pieces from our collection', de: 'Ähnliche Stücke aus unserer Kollektion', ru: 'Похожие украшения' },
    material: { en: 'Material: 18K Gold Vermeil over Sterling Silver (2.5 microns)', de: 'Material: 18K vergoldetes Sterlingsilber (2,5 Mikrometer)', ru: 'Материал: позолота 18K на серебре 925 (2,5 мкм)' },
    stones: { en: 'Stones: Premium AAA-grade Moissanite or Cubic Zirconia', de: 'Steine: Premium AAA-Moissanit oder Zirkonia', ru: 'Камни: муассанит или цирконий класса AAA' },
    finish: { en: 'Finish: Hand-polished with protective coating', de: 'Finish: Handpoliert mit Schutzschicht', ru: 'Отделка: ручная полировка с защитным покрытием' },
    hypoallergenic: { en: 'Hypoallergenic: Nickel-free, safe for sensitive skin', de: 'Hypoallergen: Nickelfrei, für empfindliche Haut', ru: 'Гипоаллергенно: без никеля, подходит для чувствительной кожи' },
    freeWorldwideShipping: { en: 'Free Worldwide Shipping', de: 'Kostenloser weltweiter Versand', ru: 'Бесплатная доставка по всему миру' },
    shippingDesc: { en: 'Complimentary insured shipping on all orders. Express options available at checkout.', de: 'Kostenloser versicherter Versand bei allen Bestellungen. Expressoptionen an der Kasse verfügbar.', ru: 'Бесплатная застрахованная доставка. Экспресс-доставка доступна при оформлении заказа.' },
    austria: { en: 'Austria:', de: 'Österreich:', ru: 'Австрия:' },
    europe: { en: 'Europe:', de: 'Europa:', ru: 'Европа:' },
    international: { en: 'International:', de: 'International:', ru: 'Международная:' },
    days23: { en: '2-3 business days', de: '2-3 Werktage', ru: '2-3 рабочих дня' },
    days35: { en: '3-5 business days', de: '3-5 Werktage', ru: '3-5 рабочих дней' },
    days57: { en: '5-7 business days', de: '5-7 Werktage', ru: '5-7 рабочих дней' },
    trackingNote: { en: 'All shipments include tracking. Signature required upon delivery.', de: 'Alle Sendungen mit Sendungsverfolgung. Unterschrift bei Lieferung erforderlich.', ru: 'Все отправления с отслеживанием. Подпись при получении.' },
    findPerfectFit: { en: 'Find Your Perfect Fit', de: 'Finde deine perfekte Größe', ru: 'Подберите идеальный размер' },
    useSizingGuide: { en: 'Use our sizing guide to ensure the perfect fit for your new piece.', de: 'Nutze unseren Größenguide für die perfekte Passform.', ru: 'Используйте наш гид по размерам для идеальной посадки.' },
    ringSizeChart: { en: 'Ring Size Chart (EU)', de: 'Ringgrößentabelle (EU)', ru: 'Таблица размеров колец (EU)' },
    chainLengthGuide: { en: 'Chain Length Guide', de: 'Kettenlängen-Guide', ru: 'Гид по длине цепочек' },
    braceletSizeGuide: { en: 'Bracelet Size Guide', de: 'Armband-Größenguide', ru: 'Размеры браслетов' },
    earringStyles: { en: 'Earring Styles', de: 'Ohrringstile', ru: 'Стили серёжек' },
    contactConcierge: { en: 'Unsure of your size? Contact our concierge team for personalized assistance.', de: 'Unsicher bei der Größe? Kontaktiere unser Concierge-Team für persönliche Beratung.', ru: 'Не уверены в размере? Наша команда поможет подобрать.' },
    daysReturns: { en: '30-Day Returns', de: '30 Tage Rückgabe', ru: 'Возврат 30 дней' },
    returnsDesc: { en: 'Unworn items in original packaging may be returned within 30 days for a full refund.', de: 'Ungetragene Artikel in Originalverpackung können innerhalb von 30 Tagen zurückgegeben werden.', ru: 'Неношеные украшения в оригинальной упаковке можно вернуть в течение 30 дней.' },
    careInstructions: { en: 'Care Instructions', de: 'Pflegehinweise', ru: 'Уход за украшениями' },
    storeInBox: { en: 'Store in the provided jewellery box', de: 'In der mitgelieferten Schmuckbox aufbewahren', ru: 'Храните в шкатулке' },
    removeBeforeSwimming: { en: 'Remove before swimming or bathing', de: 'Vor dem Schwimmen oder Baden abnehmen', ru: 'Снимайте перед купанием' },
    avoidPerfumes: { en: 'Avoid contact with perfumes and lotions', de: 'Kontakt mit Parfüms und Lotionen vermeiden', ru: 'Избегайте контакта с парфюмом и лосьонами' },
    cleanGently: { en: 'Clean gently with a soft, dry cloth', de: 'Vorsichtig mit einem weichen, trockenen Tuch reinigen', ru: 'Протирайте мягкой сухой тканью' },
    length: { en: 'Length', de: 'Länge', ru: 'Длина' },
    ringSize: { en: 'Ring Size', de: 'Ringgröße', ru: 'Размер кольца' },
    style: { en: 'Style', de: 'Stil', ru: 'Стиль' },
    size: { en: 'Size', de: 'Größe', ru: 'Размер' },
    // Earring styles
    studs: { en: 'Studs', de: 'Ohrstecker', ru: 'Гвоздики' },
    drop: { en: 'Drop', de: 'Tropfen', ru: 'Подвесные' },
    hoops: { en: 'Hoops', de: 'Creolen', ru: 'Кольца' },
    // Bracelet sizes
    sizeS: { en: 'S (15cm)', de: 'S (15cm)', ru: 'S (15см)' },
    sizeM: { en: 'M (17cm)', de: 'M (17cm)', ru: 'M (17см)' },
    sizeL: { en: 'L (19cm)', de: 'L (19cm)', ru: 'L (19см)' },
    // Earring style descriptions
    studsDesc: { en: 'Classic, close to the ear', de: 'Klassisch, nah am Ohr', ru: 'Классические, близко к уху' },
    dropDesc: { en: 'Dangle below the earlobe', de: 'Hängen unter dem Ohrläppchen', ru: 'Свисают ниже мочки' },
    hoopsDesc: { en: 'Circular design, various sizes available', de: 'Rundes Design, verschiedene Größen', ru: 'Круглые, разные размеры' },
    // Chain lengths
    chain40: { en: 'Sits at the base of neck (choker style)', de: 'Am Halsansatz (Choker-Stil)', ru: 'На основании шеи (чокер)' },
    chain45: { en: 'Sits at the collarbone (classic length)', de: 'Am Schlüsselbein (klassische Länge)', ru: 'На ключице (классическая длина)' },
    chain50: { en: 'Falls below collarbone (versatile)', de: 'Unter dem Schlüsselbein (vielseitig)', ru: 'Ниже ключицы (универсальная)' },
    chain55: { en: 'Falls at chest level (statement)', de: 'Auf Brusthöhe (Statement)', ru: 'На уровне груди (statement)' },
    // Bracelet sizes descriptions
    braceletS: { en: 'Petite wrist (13-14cm circumference)', de: 'Zierliches Handgelenk (13-14cm)', ru: 'Тонкое запястье (13-14см)' },
    braceletM: { en: 'Average wrist (15-16cm circumference)', de: 'Durchschnittliches Handgelenk (15-16cm)', ru: 'Среднее запястье (15-16см)' },
    braceletL: { en: 'Larger wrist (17-18cm circumference)', de: 'Größeres Handgelenk (17-18cm)', ru: 'Широкое запястье (17-18см)' },
  },

  // MARQUEE
  marquee: {
    items: {
      en: ['Free Shipping Worldwide', 'Moissanite & Zirconium', '18K Gold Plated', 'Vienna Atelier', '30-Day Returns'],
      de: ['Kostenloser weltweiter Versand', 'Moissanit & Zirkonium', '18K Vergoldet', 'Wiener Atelier', '30 Tage Rückgabe'],
      ru: ['Бесплатная доставка', 'Муассанит и цирконий', 'Позолота 18K', 'Венская мастерская', 'Возврат 30 дней'],
    },
  },
} as const

export type TranslationKey = keyof typeof translations
