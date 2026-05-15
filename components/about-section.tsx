"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t, tArray } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const pillars = [
    t("ourStory", "pillarLabels.ethical"),
    t("ourStory", "pillarLabels.gold"),
    t("ourStory", "pillarLabels.vienna"),
    t("ourStory", "pillarLabels.sustainable"),
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

  const bodyParagraphs = tArray("ourStory", "body")

  return (
    <section id="about" className="py-20 md:py-30 bg-ivory" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Visual */}
          <div className="sr relative">
            <div
              className="w-full aspect-[4/5] relative overflow-hidden shadow-[0_28px_70px_rgba(90,15,26,0.08)]"
              style={{
                background: "linear-gradient(145deg, #DCE8F0 0%, rgba(220,232,240,0.5) 40%, #F6F2EA 70%, #EDE8DD 100%)",
              }}
            >
              {/* Shimmer */}
              <div
                className="absolute inset-0 animate-shimmer"
                style={{
                  background: "linear-gradient(108deg, transparent 38%, rgba(255,255,255,0.22) 50%, transparent 62%)",
                  animationDelay: "1s",
                }}
              />

              {/* About SVG */}
              <svg viewBox="0 0 300 400" fill="none" className="absolute inset-0 w-full h-full p-12">
                <path d="M150 28 C106 28 64 68 64 108 C64 160 150 246 150 246 C150 246 236 160 236 108 C236 68 194 28 150 28Z" fill="rgba(220,232,240,.25)" stroke="rgba(90,15,26,.2)" strokeWidth="1.4" />
                <path d="M150 50 C114 50 82 82 82 114 C82 158 150 228 150 228 C150 228 218 158 218 114 C218 82 186 50 150 50Z" fill="rgba(220,232,240,.15)" stroke="rgba(90,15,26,.1)" strokeWidth=".8" />
                <line x1="150" y1="28" x2="150" y2="246" stroke="rgba(90,15,26,.08)" strokeWidth=".8" />
                <line x1="64" y1="108" x2="236" y2="108" stroke="rgba(90,15,26,.08)" strokeWidth=".8" />
                <line x1="78" y1="54" x2="150" y2="108" stroke="rgba(90,15,26,.06)" strokeWidth=".6" />
                <line x1="222" y1="54" x2="150" y2="108" stroke="rgba(90,15,26,.06)" strokeWidth=".6" />
                <line x1="72" y1="168" x2="150" y2="108" stroke="rgba(90,15,26,.06)" strokeWidth=".6" />
                <line x1="228" y1="168" x2="150" y2="108" stroke="rgba(90,15,26,.06)" strokeWidth=".6" />
                <ellipse cx="118" cy="62" rx="20" ry="11" fill="white" opacity=".22" transform="rotate(-25 118 62)" />
                <path d="M36 58 C32 58 28 62 28 67 C28 73 36 81 36 81 C36 81 44 73 44 67 C44 62 40 58 36 58Z" fill="#DCE8F0" stroke="rgba(90,15,26,.25)" strokeWidth=".8" />
                <path d="M264 138 C260 138 256 142 256 147 C256 153 264 161 264 161 C264 161 272 153 272 147 C272 142 268 138 264 138Z" fill="#DCE8F0" stroke="rgba(90,15,26,.25)" strokeWidth=".8" />
                <text x="150" y="295" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontStyle="italic" fontSize="24" fill="rgba(90,15,26,.35)" letterSpacing="4">Azurél</text>
                <text x="150" y="318" textAnchor="middle" fontFamily="'Josefin Sans',sans-serif" fontSize="7" fill="rgba(143,175,193,.45)" letterSpacing="6">VIENNA · AUSTRIA</text>
              </svg>
            </div>

            {/* Stat Box */}
            <div className="hidden md:flex absolute -bottom-[26px] -right-[26px] w-[148px] h-[148px] bg-wine flex-col items-center justify-center text-center gap-1 shadow-[0_14px_36px_rgba(90,15,26,0.2)]">
              <span className="font-serif italic text-[2.5rem] font-light text-blue-lt leading-none">∞</span>
             <span className="text-[0.33rem] tracking-[2px] uppercase text-blue-lt/45">
              Est. 2026
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="sr d2">
            <span className="text-[0.44rem] font-extralight tracking-[5px] uppercase text-blue-mid block mb-3">
              {t("ourStory", "title")}
            </span>
            <h2 className="font-serif italic font-light text-[clamp(2rem,3.8vw,3rem)] text-wine leading-[1.1] mb-7">
              {t("ourStory", "headline").split(".")[0]}.
              <br />
              {t("ourStory", "headline").split(".")[1]?.trim() || ""}
            </h2>

            <div className="space-y-4">
              {bodyParagraphs.map((paragraph, index) => (
                <p key={index} className="font-serif font-light text-[1.02rem] text-blue-deep leading-[1.95]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pillars */}
            <div className="mt-10 border-t border-blue-mid/25">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center py-4 border-b border-blue-mid/25"
                >
                  <span className="font-serif italic text-[0.85rem] text-blue-lt min-w-[20px]">
                    0{index + 1}
                  </span>
                  <span className="text-[0.45rem] tracking-[3px] uppercase text-wine-deep">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
