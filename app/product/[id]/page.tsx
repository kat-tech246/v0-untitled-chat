import { fetchProductByHandle, fetchProducts } from "@/lib/products"
import { ProductPageWrapper } from "@/components/product-page-wrapper"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const products = await fetchProducts()
  return products.map((p) => ({ id: p.id }))
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  
  const [product, allProducts] = await Promise.all([
    fetchProductByHandle(id),
    fetchProducts(),
  ])

  if (!product) notFound()

  const similarProducts = allProducts
    .filter((p) => p.category === product!.category && p.id !== product!.id)
    .slice(0, 3)

  return <ProductPageWrapper product={product!} similarProducts={similarProducts} />
}