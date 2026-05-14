import { fetchProducts } from "@/lib/products"
import { PageWrapper } from "@/components/page-wrapper"

export default async function Home() {
  const products = await fetchProducts()
  return <PageWrapper products={products} />
}