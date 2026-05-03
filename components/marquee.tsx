"use client"

import { useLanguage } from "@/lib/language-context"

export function Marquee() {
  const { language } = useLanguage()
  
  const items: Record<string, string[]> = {
    en: [
      "Fine Jewellery",
      "Moissanite",
      "Zirconium",
      "18K Gold Plated",
      "Crafted in Vienna",
      "Ethically Sourced",
      "Free Shipping Austria",
    ],
    de: [
      "Feiner Schmuck",
      "Moissanit",
      "Zirkonium",
      "18K Vergoldet",
      "Gefertigt in Wien",
      "Ethisch beschafft",
      "Kostenloser Versand Österreich",
    ],
    ru: [
      "Ювелирные украшения",
      "Муассанит",
      "Цирконий",
      "Позолота 18K",
      "Создано в Вене",
      "Этичные материалы",
      "Бесплатная доставка",
    ],
  }

  const currentItems = items[language] || items.en

  return (
    <div className="bg-wine py-3 overflow-hidden whitespace-nowrap" aria-hidden="true">
      <div className="inline-flex animate-ticker hover:[animation-play-state:paused]">
        {[...currentItems, ...currentItems].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[0.44rem] font-thin tracking-[5px] uppercase text-blue-lt/80 px-9">
              {item}
            </span>
            <span className="text-blue-lt/25">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
