export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  category: string
  badge: string | null
  bg: string
}

// This is the source of truth for all products.
// All UI to display products should pull from this array.
// IDs passed to the checkout session should be the same as IDs from this array.
export const PRODUCTS: Product[] = [
  {
    id: 'ciel-pendant',
    name: 'Ciel Pendant',
    description: 'A delicate pendant inspired by the Viennese sky, crafted in sterling silver with a hand-polished finish.',
    priceInCents: 28500, // €285
    category: 'necklaces',
    badge: 'New',
    bg: 'bg-a',
  },
  {
    id: 'aurore-bangle-ring',
    name: 'Aurore Bangle Ring',
    description: 'An elegant bangle ring featuring our signature aurore design, handcrafted in 18k gold vermeil.',
    priceInCents: 19500, // €195
    category: 'rings',
    badge: null,
    bg: 'bg-b',
  },
  {
    id: 'etoile-flower-studs',
    name: 'Étoile Flower Studs',
    description: 'Timeless flower studs inspired by Viennese gardens, set with hand-selected cubic zirconia.',
    priceInCents: 16500, // €165
    category: 'earrings',
    badge: 'Bestseller',
    bg: 'bg-c',
  },
  {
    id: 'riviere-tennis-bracelet',
    name: 'Rivière Tennis Bracelet',
    description: 'A classic tennis bracelet featuring a continuous line of brilliant-cut stones in a secure channel setting.',
    priceInCents: 34000, // €340
    category: 'bracelets',
    badge: null,
    bg: 'bg-d',
  },
  {
    id: 'lune-torque-choker',
    name: 'Lune Torque Choker',
    description: 'A bold statement piece inspired by the crescent moon, crafted in solid sterling silver.',
    priceInCents: 42000, // €420
    category: 'necklaces',
    badge: 'New',
    bg: 'bg-e',
  },
  {
    id: 'cascade-stack-set',
    name: 'Cascade Stack Set',
    description: 'A set of three stackable rings in varying widths, designed to be worn together or separately.',
    priceInCents: 24500, // €245
    category: 'rings',
    badge: null,
    bg: 'bg-f',
  },
  {
    id: 'vienna-drop-earrings',
    name: 'Vienna Drop Earrings',
    description: 'Elegant drop earrings inspired by Viennese chandeliers, featuring cascading crystals in sterling silver.',
    priceInCents: 22500, // €225
    category: 'earrings',
    badge: null,
    bg: 'bg-a',
  },
  {
    id: 'danube-chain-bracelet',
    name: 'Danube Chain Bracelet',
    description: 'A flowing chain bracelet inspired by the Danube river, crafted in 18k gold vermeil with a secure clasp.',
    priceInCents: 18500, // €185
    category: 'bracelets',
    badge: 'New',
    bg: 'bg-b',
  },
  {
    id: 'opera-hoop-earrings',
    name: 'Opera Hoop Earrings',
    description: 'Classic hoop earrings with a modern twist, featuring a polished finish and secure click closure.',
    priceInCents: 14500, // €145
    category: 'earrings',
    badge: null,
    bg: 'bg-c',
  },
  {
    id: 'schonbrunn-signet-ring',
    name: 'Schönbrunn Signet Ring',
    description: 'A contemporary signet ring inspired by imperial Vienna, handcrafted in solid sterling silver.',
    priceInCents: 21000, // €210
    category: 'rings',
    badge: 'Bestseller',
    bg: 'bg-d',
  },
  {
    id: 'prater-pearl-necklace',
    name: 'Prater Pearl Necklace',
    description: 'A delicate chain adorned with freshwater pearls, evoking the elegance of Viennese gardens.',
    priceInCents: 32000, // €320
    category: 'necklaces',
    badge: null,
    bg: 'bg-e',
  },
  {
    id: 'klimt-cuff-bracelet',
    name: 'Klimt Cuff Bracelet',
    description: 'An artistic cuff bracelet inspired by Gustav Klimt, featuring intricate golden patterns.',
    priceInCents: 38000, // €380
    category: 'bracelets',
    badge: null,
    bg: 'bg-f',
  },
]

export function formatPrice(priceInCents: number): string {
  return `€ ${(priceInCents / 100).toFixed(0)}`
}
