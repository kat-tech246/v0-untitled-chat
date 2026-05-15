const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!

export async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  })
  if (!response.ok) throw new Error(`Shopify API error: ${response.statusText}`)
  const json = await response.json()
  if (json.errors) throw new Error(`Shopify GraphQL error: ${JSON.stringify(json.errors)}`)
  return json.data as T
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  productType: string
  tags: string[]
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } }
  images: { edges: Array<{ node: { url: string; altText: string | null } }> }
  variants: { edges: Array<{ node: { id: string; title: string; price: { amount: string; currencyCode: string }; availableForSale: boolean } }> }
  availableForSale: boolean
  metafield: { value: string } | null
}

const PRODUCT_FRAGMENT = `
  fragment ProductFragment on Product {
    id handle title description productType tags availableForSale
    priceRange { minVariantPrice { amount currencyCode } }
    images(first: 5) { edges { node { url altText } } }
    variants(first: 10) { edges { node { id title availableForSale price { amount currencyCode } } } }
    metafield(namespace: "custom", key: "badge") { value }
  }
`

export async function getAllProducts(): Promise<ShopifyProduct[]> {
  const query = `${PRODUCT_FRAGMENT} query { products(first: 50, sortKey: CREATED_AT, reverse: true) { edges { node { ...ProductFragment } } } }`
  const data = await shopifyFetch<{ products: { edges: Array<{ node: ShopifyProduct }> } }>(query)
  return data.products.edges.map(({ node }) => node)
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const query = `${PRODUCT_FRAGMENT} query GetProduct($handle: String!) { productByHandle(handle: $handle) { ...ProductFragment } }`
  const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>(query, { handle })
  return data.productByHandle
}

const BG_KEYS = ['bg-a', 'bg-b', 'bg-c', 'bg-d', 'bg-e', 'bg-f'] as const
function assignBackground(handle: string): string {
  let hash = 0
  for (let i = 0; i < handle.length; i++) hash = (hash + handle.charCodeAt(i)) % BG_KEYS.length
  return BG_KEYS[hash]
}

export function shopifyProductToLocal(product: ShopifyProduct) {
  const priceInCents = Math.round(parseFloat(product.priceRange.minVariantPrice.amount) * 100)
  const firstVariant = product.variants.edges[0]?.node
  const tags = product.tags.map(t => t.toLowerCase())
  let badge: string | null = null
  if (tags.includes('new')) badge = 'New'
  if (tags.includes('bestseller')) badge = 'Bestseller'
  if (product.metafield?.value) badge = product.metafield.value
  let category = product.productType.toLowerCase()
  if (!category) {
    const catMap: Record<string, string> = { necklace: 'necklaces', ring: 'rings', earring: 'earrings', bracelet: 'bracelets', necklaces: 'necklaces', rings: 'rings', earrings: 'earrings', bracelets: 'bracelets' }
    for (const tag of tags) { if (catMap[tag]) { category = catMap[tag]; break } }
  }
  return {
    id: product.handle,
    shopifyId: product.id,
    variantId: firstVariant?.id || '',
    name: product.title,
    description: product.description,
    priceInCents,
    category: category || 'necklaces',
    badge,
    bg: assignBackground(product.handle),
    image: product.images.edges[0]?.node.url || null,
    images: product.images.edges.map(edge => edge.node.url),
    availableForSale: product.availableForSale,
  }
}