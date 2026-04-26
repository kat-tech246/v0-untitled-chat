"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"
import { NecklaceSvg, RingSvg, EarringsSvg } from "./jewelry-svgs"
import { PRODUCTS, formatPrice } from "@/lib/products"

const trendingProducts = PRODUCTS.filter(p => p.badge === "New" || p.badge === "Bestseller").slice(0, 3)

const productSvgMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'ciel-pendant': NecklaceSvg,
  'aurore-bangle-ring': RingSvg,
  'etoile-flower-studs': EarringsSvg,
}

const bgStyles: Record<string, string> = {
  "bg-a": "linear-gradient(145deg, #DCE8F0, #E8EFF5)",
  "bg-b": "linear-gradient(145deg, #EAF2F7, #F6F2EA)",
  "bg-c": "linear-gradient(145deg, #EEF4F8, #DCE8F0)",
}

export function TrendingSection() {
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

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-wine-deep overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        {/* Header */}
        <div className="sr flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-blue-lt/60" strokeWidth={1.5} />
              <span className="text-[0.44rem] font-extralight tracking-[5px] uppercase text-blue-lt/60">
                Trending Now
              </span>
            </div>
            <h2 className="font-serif italic font-light text-[clamp(1.8rem,3.5vw,2.5rem)] text-ivory leading-[1.1]">
              Most Loved This Season
            </h2>
          </div>
          <Link
            href="/#shop"
            className="flex items-center gap-2 text-[0.42rem] tracking-[3px] uppercase text-blue-lt/70 hover:text-ivory transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Trending Products */}
        <div className="grid md:grid-cols-3 gap-6">
          {trendingProducts.map((product, index) => {
            const ProductSvg = productSvgMap[product.id] || NecklaceSvg
            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className={`sr ${index === 1 ? "d2" : index === 2 ? "d3" : "d1"} group block`}
              >
                <div 
                  className="aspect-[4/5] relative overflow-hidden mb-4 transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                  style={{ background: bgStyles[product.bg] || bgStyles["bg-a"] }}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-wine text-ivory text-[0.32rem] tracking-[2px] uppercase px-3 py-1.5 z-10">
                      {product.badge}
                    </div>
                  )}

                  {/* Trending Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-ivory/90 flex items-center justify-center z-10">
                    <span className="font-serif italic text-wine text-lg">{index + 1}</span>
                  </div>

                  {/* Product SVG */}
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-600 group-hover:scale-105">
                    <ProductSvg className="w-[50%] drop-shadow-[0_10px_25px_rgba(90,15,26,0.1)]" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/10 transition-colors duration-400" />
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <span className="text-[0.4rem] tracking-[2px] uppercase text-blue-lt/50 block mb-1">
                    {product.category}
                  </span>
                  <span className="font-serif italic text-xl text-ivory block mb-2 group-hover:text-blue-lt transition-colors">
                    {product.name}
                  </span>
                  <span className="text-[0.5rem] tracking-[2px] text-blue-lt/70">
                    {formatPrice(product.priceInCents)}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="sr text-center mt-14">
          <p className="font-serif italic text-lg text-ivory/80 mb-6">
            Discover what everyone is wearing this season
          </p>
          <Link
            href="/#shop"
            className="inline-block text-[0.42rem] tracking-[4px] uppercase text-wine-deep bg-ivory px-10 py-4 hover:bg-blue-lt transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
