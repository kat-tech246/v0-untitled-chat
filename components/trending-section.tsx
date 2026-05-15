"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, TrendingUp, Heart, ShoppingBag } from "lucide-react"
import { NecklaceSvg, RingSvg, EarringsSvg, BraceletSvg, ChokerSvg, StackRingSvg } from "./jewelry-svgs"
import { PRODUCTS, formatPrice, type Product } from "@/lib/products"
import { useLanguage } from "@/lib/language-context"

const trendingProducts = PRODUCTS.filter(p => p.badge === "New" || p.badge === "Bestseller").slice(0, 3)

const productSvgMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'ciel-pendant': NecklaceSvg,
  'aurore-bangle-ring': RingSvg,
  'etoile-flower-studs': EarringsSvg,
  'riviere-tennis-bracelet': BraceletSvg,
  'lune-torque-choker': ChokerSvg,
  'cascade-stack-set': StackRingSvg,
  'vienna-drop-earrings': EarringsSvg,
  'danube-chain-bracelet': BraceletSvg,
  'opera-hoop-earrings': EarringsSvg,
  'schonbrunn-signet-ring': RingSvg,
  'prater-pearl-necklace': NecklaceSvg,
  'klimt-cuff-bracelet': BraceletSvg,
}

const bgStyles: Record<string, string> = {
  "bg-a": "linear-gradient(145deg, #DCE8F0, #E8EFF5)",
  "bg-b": "linear-gradient(145deg, #EAF2F7, #F6F2EA)",
  "bg-c": "linear-gradient(145deg, #EEF4F8, #DCE8F0)",
}

interface TrendingSectionProps {
  onAddToCart?: (product: Product) => void
  onToggleWishlist?: (product: Product) => void
  wishlistItems?: Product[]
}

export function TrendingSection({ 
  onAddToCart, 
  onToggleWishlist,
  wishlistItems = []
}: TrendingSectionProps) {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -28px 0px" }
    )

    const elements = sectionRef.current?.querySelectorAll(".sr")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.id === productId)
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-blue-lt overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        {/* Header */}
        <div className="sr flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-wine/60" strokeWidth={1.5} />
              <span className="text-[0.44rem] font-extralight tracking-[5px] uppercase text-wine/60">
                {t("trending", "trendingNow")}
              </span>
            </div>
            <h2 className="font-serif italic font-light text-[clamp(1.8rem,3.5vw,2.5rem)] text-wine-deep leading-[1.1]">
              {t("trending", "mostLoved")}
            </h2>
          </div>
          <Link
            href="/#shop"
            className="flex items-center gap-2 text-[0.42rem] tracking-[3px] uppercase text-wine/70 hover:text-wine-deep transition-colors group"
          >
            {t("trending", "viewAll")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Trending Products */}
        <div className="grid md:grid-cols-3 gap-6">
          {trendingProducts.map((product, index) => {
            const ProductSvg = productSvgMap[product.id] || NecklaceSvg
            const inWishlist = isInWishlist(product.id)
            return (
              <div
                key={product.id}
                className={`sr ${index === 1 ? "d2" : index === 2 ? "d3" : "d1"} group`}
              >
                <div 
                  className="aspect-[4/5] relative overflow-hidden mb-4 transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                  style={{ background: bgStyles[product.bg] || bgStyles["bg-a"] }}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-wine text-ivory text-[0.32rem] tracking-[2px] uppercase px-3 py-1.5 z-10">
                      {product.badge === "New" ? t("collection", "new") : t("collection", "bestseller")}
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      onToggleWishlist?.(product)
                    }}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-ivory/90 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart 
                      className="w-4 h-4 text-wine" 
                      strokeWidth={1.5}
                      fill={inWishlist ? "#5A0F1A" : "none"}
                    />
                  </button>

                  {/* Trending Number - Shows by default, hides on hover */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-ivory/90 flex items-center justify-center z-[5] group-hover:opacity-0 transition-opacity">
                    <span className="font-serif italic text-wine text-lg">{index + 1}</span>
                  </div>

                  {/* Product Image or SVG */}
<Link href={`/product/${product.id}`} className="absolute inset-0 flex items-center justify-center transition-transform duration-600 group-hover:scale-105">
  {product.image ? (
    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
  ) : (
    <ProductSvg className="w-[50%] drop-shadow-[0_10px_25px_rgba(90,15,26,0.1)]" />
  )}
</Link>
                  {/* Hover Overlay with Actions */}
                  <div className="absolute bottom-0 left-0 right-0 bg-ivory/95 p-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <button 
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        onAddToCart?.(product)
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 text-[0.38rem] tracking-[2px] uppercase py-2.5 border border-wine bg-transparent text-wine hover:bg-wine/5 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3" strokeWidth={1.5} />
                      {t("trending", "addToBag")}
                    </button>
                    <Link 
                      href={`/product/${product.id}`}
                      className="flex-1 text-[0.38rem] tracking-[2px] uppercase py-2.5 border border-wine bg-wine text-ivory hover:bg-wine-deep text-center transition-colors"
                    >
                      {t("trending", "viewDetails")}
                    </Link>
                  </div>
                </div>

                {/* Product Info */}
                <Link href={`/product/${product.id}`} className="block text-center">
                  <span className="text-[0.4rem] tracking-[2px] uppercase text-wine/50 block mb-1">
                    {t("categories", product.category as "necklaces" | "rings" | "earrings" | "bracelets")}
                  </span>
                  <span className="font-serif italic text-xl text-wine-deep block mb-2 group-hover:text-wine transition-colors">
                    {product.name}
                  </span>
                  <span className="text-[0.5rem] tracking-[2px] text-wine/70">
                    {formatPrice(product.priceInCents)}
                  </span>
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="sr text-center mt-14">
          <p className="font-serif italic text-lg text-wine-deep/80 mb-6">
            {t("trending", "discover")}
          </p>
          <Link
            href="/#shop"
            className="inline-block text-[0.42rem] tracking-[4px] uppercase text-ivory bg-wine px-10 py-4 hover:bg-wine-deep transition-colors"
          >
            {t("trending", "exploreCollection")}
          </Link>
        </div>
      </div>
    </section>
  )
}
