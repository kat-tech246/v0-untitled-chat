"use client"

import { useState, useEffect, useRef } from "react"
import { Heart } from "lucide-react"
import Link from "next/link"
import { NecklaceSvg, RingSvg, EarringsSvg, BraceletSvg, ChokerSvg, StackRingSvg } from "./jewelry-svgs"

const products = [
  {
    id: 1,
    category: "necklaces",
    name: "Ciel Pendant",
    price: "€ 285",
    badge: "New",
    bg: "bg-a",
    Svg: NecklaceSvg,
  },
  {
    id: 2,
    category: "rings",
    name: "Aurore Bangle Ring",
    price: "€ 195",
    badge: null,
    bg: "bg-b",
    Svg: RingSvg,
  },
  {
    id: 3,
    category: "earrings",
    name: "Étoile Flower Studs",
    price: "€ 165",
    badge: "Bestseller",
    bg: "bg-c",
    Svg: EarringsSvg,
  },
  {
    id: 4,
    category: "bracelets",
    name: "Rivière Tennis Bracelet",
    price: "€ 340",
    badge: null,
    bg: "bg-d",
    Svg: BraceletSvg,
  },
  {
    id: 5,
    category: "necklaces",
    name: "Lune Torque Choker",
    price: "€ 420",
    badge: "New",
    bg: "bg-e",
    Svg: ChokerSvg,
  },
  {
    id: 6,
    category: "rings",
    name: "Cascade Stack Set",
    price: "€ 245",
    badge: null,
    bg: "bg-f",
    Svg: StackRingSvg,
  },
]

const filters = ["All", "Necklaces", "Rings", "Earrings", "Bracelets"]

const bgStyles: Record<string, string> = {
  "bg-a": "linear-gradient(145deg, #DCE8F0, #E8EFF5)",
  "bg-b": "linear-gradient(145deg, #EAF2F7, #F6F2EA)",
  "bg-c": "linear-gradient(145deg, #EEF4F8, #DCE8F0)",
  "bg-d": "linear-gradient(145deg, #F6F2EA, #DCE8F0)",
  "bg-e": "linear-gradient(145deg, #E6EEF4, #EDE8DD)",
  "bg-f": "linear-gradient(145deg, #DCE8F0, #EFF4F7)",
}

export function ShopSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [wishlist, setWishlist] = useState<number[]>([])
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

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter(
          (p) => p.category === activeFilter.toLowerCase()
        )

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <section id="shop" className="py-20 md:py-30 bg-ivory" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        {/* Header */}
        <div className="sr flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-13">
          <div>
            <span className="text-[0.44rem] font-extralight tracking-[5px] uppercase text-blue-mid block mb-3">
              The Collection
            </span>
            <h2 className="font-serif italic font-light text-[clamp(2rem,3.8vw,3rem)] text-wine leading-[1.1]">
              Each piece,
              <br />
              a quiet statement
            </h2>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[0.4rem] font-extralight tracking-[3px] uppercase px-4 py-[7px] border-[0.5px] transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-wine border-wine text-ivory"
                    : "bg-transparent border-blue-mid/35 text-blue-mid hover:bg-wine hover:border-wine hover:text-ivory"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`sr ${index % 3 === 1 ? "d2" : index % 3 === 2 ? "d3" : "d1"} group relative interactive`}
            >
              {/* Image Container */}
              <div
                className="aspect-[3/4] relative overflow-hidden mb-3.5 transition-shadow duration-400 group-hover:shadow-[0_20px_50px_rgba(90,15,26,0.1)]"
                style={{ background: bgStyles[product.bg] }}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-wine text-ivory text-[0.3rem] tracking-[2px] uppercase px-2 py-1 z-10">
                    {product.badge}
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 w-[30px] h-[30px] rounded-full bg-ivory/[0.88] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className="w-3 h-3 text-wine"
                    strokeWidth={1.5}
                    fill={wishlist.includes(product.id) ? "#5A0F1A" : "none"}
                  />
                </button>

                {/* Product SVG */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-[600ms] group-hover:scale-105">
                  <product.Svg className="w-[52%] drop-shadow-[0_8px_18px_rgba(90,15,26,0.08)] group-hover:drop-shadow-[0_14px_28px_rgba(90,15,26,0.14)] transition-[filter] duration-400" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-ivory/[0.97] border-t border-blue-mid/25 p-3 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <button className="flex-1 text-[0.36rem] tracking-[2px] uppercase py-2 px-1 border-[0.5px] border-wine bg-transparent text-wine hover:bg-wine/5 transition-colors text-center">
                    Quick View
                  </button>
                  <button className="flex-1 text-[0.36rem] tracking-[2px] uppercase py-2 px-1 border-[0.5px] border-wine bg-wine text-ivory text-center">
                    Add to Bag
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="px-0.5">
                <span className="text-[0.38rem] tracking-[3px] uppercase text-blue-mid block mb-1">
                  {product.category.charAt(0).toUpperCase() +
                    product.category.slice(1, -1)}
                </span>
                <span className="font-serif italic text-[1.1rem] text-wine block mb-1">
                  {product.name}
                </span>
                <span className="text-[0.44rem] tracking-[2px] text-blue-deep">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="sr text-center mt-14">
          <Link
            href="#"
            className="text-[0.46rem] font-extralight tracking-[4px] uppercase text-ivory bg-wine border-[0.5px] border-wine px-9 py-[15px] inline-block hover:bg-wine-deep hover:border-wine-deep hover:shadow-[0_8px_28px_rgba(90,15,26,0.18)] hover:-translate-y-[1px] transition-all duration-400"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
