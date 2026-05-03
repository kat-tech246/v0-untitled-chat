"use client"

import { useEffect, useRef } from "react"
import { Star, CheckCircle, Package, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TrustSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  const trustItems = [
    {
      Icon: Star,
      titleKey: "moissanite" as const,
    },
    {
      Icon: CheckCircle,
      titleKey: "gold" as const,
    },
    {
      Icon: Package,
      titleKey: "vienna" as const,
    },
    {
      Icon: ShoppingBag,
      titleKey: "returns" as const,
    },
  ]

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
                {t("pillars", `${item.titleKey}.title`)}
              </span>
              <p className="text-[0.4rem] tracking-[1px] text-blue-mid leading-[1.85]">
                {t("pillars", `${item.titleKey}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
