"use client"

import { useEffect, useRef } from "react"
import { SmallGemSvg } from "./jewelry-svgs"

export function StatementSection() {
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
      className="bg-wine py-20 md:py-28 px-6 md:px-14 text-center relative overflow-hidden"
    >
      {/* Ghost Text */}
      <div
        className="absolute -bottom-[70px] left-1/2 -translate-x-1/2 font-serif italic text-[clamp(7rem,16vw,20rem)] font-light text-transparent whitespace-nowrap pointer-events-none select-none"
        style={{ WebkitTextStroke: "0.5px rgba(220,232,240,0.06)" }}
        aria-hidden="true"
      >
        Azurél
      </div>

      {/* Corner Decorations */}
      <div className="hidden md:block absolute top-9 left-14 w-12 h-12 border-t-[0.5px] border-l-[0.5px] border-blue-lt/[0.12]" />
      <div className="hidden md:block absolute bottom-9 right-14 w-12 h-12 border-b-[0.5px] border-r-[0.5px] border-blue-lt/[0.12]" />

      {/* Content */}
      <div className="sr relative z-[2] max-w-[680px] mx-auto">
        <SmallGemSvg className="w-[26px] mx-auto mb-8" />
        <p className="font-serif italic font-light text-[clamp(1.6rem,3vw,2.5rem)] text-ivory leading-[1.55] mb-7">
          {'"'}Jewellery is not decoration.
          <br />
          It is the armour a woman chooses
          <br />
          to face the world in.{'"'}
        </p>
        <div className="w-9 h-[0.5px] bg-blue-lt/25 mx-auto mb-4" />
        <span className="text-[0.4rem] tracking-[5px] uppercase text-blue-lt/30">
          Azurél · Fine Jewellery · Vienna · Est. 2025
        </span>
      </div>
    </div>
  )
}
