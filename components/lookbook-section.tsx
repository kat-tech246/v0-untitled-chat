"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { CielPendantSvg, BraceletSvg, EarringsSvg, ChokerSvg } from "./jewelry-svgs"

const lookbookItems = [
  {
    title: "Ciel Pendant · €285",
    tall: true,
    bg: "lb-1",
    Svg: CielPendantSvg,
    svgClass: "w-[160px] h-auto opacity-75",
  },
  {
    title: "Rivière Bracelet · €340",
    tall: false,
    bg: "lb-2",
    Svg: BraceletSvg,
    svgClass: "w-[110px] h-auto opacity-[0.88]",
  },
  {
    title: "Étoile Studs · €165",
    tall: false,
    bg: "lb-3",
    Svg: EarringsSvg,
    svgClass: "w-[110px] h-auto opacity-[0.78]",
  },
  {
    title: "Lune Choker · €420",
    tall: false,
    bg: "lb-4",
    Svg: ChokerSvg,
    svgClass: "w-[110px] h-auto opacity-[0.78]",
  },
]

const bgStyles: Record<string, string> = {
  "lb-1": "linear-gradient(145deg, #DCE8F0, #D4E2EC)",
  "lb-2": "linear-gradient(145deg, #5A0F1A, #3A0A11)",
  "lb-3": "linear-gradient(145deg, #F6F2EA, #DCE8F0)",
  "lb-4": "linear-gradient(135deg, #EEF4F8, #EDE8DD)",
}

export function LookbookSection() {
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
    <section id="lookbook" className="py-20 md:py-30 bg-blue-pale" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        {/* Header */}
        <div className="sr flex justify-between items-end mb-12">
          <div>
            <span className="text-[0.44rem] font-extralight tracking-[5px] uppercase text-blue-mid block mb-3">
              Lookbook
            </span>
            <h2 className="font-serif italic font-light text-[clamp(2rem,3.8vw,3rem)] text-wine leading-[1.1]">
              Worn with
              <br />
              intention
            </h2>
          </div>
          <Link
            href="#"
            className="text-[0.46rem] font-extralight tracking-[4px] uppercase text-wine flex items-center gap-2.5 hover:gap-4 hover:opacity-65 transition-all duration-300"
          >
            View all <span className="text-[0.85rem]">→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-2 auto-rows-[minmax(270px,auto)]">
          {lookbookItems.map((item, index) => (
            <div
              key={index}
              className={`sr ${index === 1 ? "d1" : index === 2 ? "d2" : index === 3 ? "d3" : ""} ${
                item.tall ? "row-span-1 lg:row-span-2" : ""
              } relative overflow-hidden group interactive`}
            >
              {/* Background */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ background: bgStyles[item.bg] }}
              >
                <item.Svg className={item.svgClass} />
              </div>

              {/* Hover Veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-wine/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                <span className="font-serif italic text-[1.05rem] text-ivory font-light">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
