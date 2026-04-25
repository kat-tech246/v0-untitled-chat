"use client"

export function Marquee() {
  const items = [
    "Fine Jewellery",
    "Moissanite",
    "Zirconium",
    "18K Gold Plated",
    "Crafted in Vienna",
    "Ethically Sourced",
    "Free Shipping Austria",
  ]

  return (
    <div className="bg-wine py-3 overflow-hidden whitespace-nowrap" aria-hidden="true">
      <div className="inline-flex animate-ticker hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
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
