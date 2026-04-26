import { notFound } from "next/navigation"
import { PRODUCTS } from "@/lib/products"
import { ProductPageWrapper } from "@/components/product-page-wrapper"
import { CustomCursor } from "@/components/custom-cursor"

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = PRODUCTS.find((p) => p.id === id)
  
  if (!product) {
    return { title: "Product Not Found | Azurel" }
  }

  return {
    title: `${product.name} | Azurel Fine Jewellery`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = PRODUCTS.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const similarProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3)

  // If not enough similar in same category, add from other categories
  if (similarProducts.length < 3) {
    const additional = PRODUCTS.filter(
      (p) => p.id !== product.id && !similarProducts.some((sp) => sp.id === p.id)
    ).slice(0, 3 - similarProducts.length)
    similarProducts.push(...additional)
  }

  return (
    <>
      <CustomCursor />
      <ProductPageWrapper product={product} similarProducts={similarProducts} />
    </>
  )
}
