"use client"

import { useEffect, useRef } from "react"
import { Star, CheckCircle, Package, ShoppingBag } from "lucide-react"

const trustItems = [
  {
    Icon: Star,
    title: "Moissanite & Zirconium",
    description: "Conflict-free stones with diamond-like brilliance. Ethically sourced, brilliantly set.",
  },
  {
    Icon: CheckCircle,
    title: "18K Gold Plated",
    description: "Premium plating applied with precision. Lasting beauty for every single day.",
  },
  {
    Icon: Package,
    title: "Vienna Atelier",
    description: "Every Azurél piece is designed and hand-finished in our Viennese studio.",
  },
  {
    Icon: ShoppingBag,
    title: "30-Day Returns",
    description: "Love it or return it — free of charge within Austria, no questions asked.",
  },
]

export function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <div
      ref={sectionRef}
      className="bg-ivory border-t border-b border-blue-mid/20 py-16 md:py-18"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className={`sr ${index === 1 ? "d1" : index === 2 ? "d2" : index === 3 ? "d3" : ""} text-center py-4`}
            >
              <item.Icon
                className="w-[34px] h-[34px] mx-auto mb-3.5 text-blue-mid"
                strokeWidth={1.2}
              />
              <span className="font-serif italic text-base text-wine block mb-2">
                {item.title}
              </span>
              <p className="text-[0.4rem] tracking-[1px] text-blue-mid leading-[1.85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
