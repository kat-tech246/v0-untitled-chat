"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  const ghostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (ghostRef.current) {
        ghostRef.current.style.transform = `translateX(${scrollY * 0.03}px)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Full-bleed Hero - All screen sizes */}
      <div className="relative w-full h-[70vh] min-h-[500px] md:h-[75vh] md:min-h-[600px] lg:h-[85vh] lg:min-h-[700px]">
        {/* Hero Image - Full bleed */}
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0086.WEBP-wuGEKLx2VnejNifh8nDCEghk4Dn7oh.webp"
          alt="Azurél jewelry collection - various pendant charms in gold settings with colorful gemstones"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent" />
        
        {/* Shimmer effect */}
        <div
          className="absolute inset-0 animate-shimmer pointer-events-none"
          style={{
            background: "linear-gradient(108deg, transparent 38%, rgba(255,255,255,0.12) 50%, transparent 62%)",
          }}
        />

        {/* Ghost Text - Desktop only */}
        <div
          ref={ghostRef}
          className="hidden lg:block absolute right-[-40px] bottom-[15%] font-serif italic font-light text-[clamp(10rem,18vw,22rem)] text-transparent pointer-events-none select-none tracking-[-6px] leading-none z-[1]"
          style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.08)" }}
          aria-hidden="true"
        >
          Azurél
        </div>

        {/* Text Content Overlay */}
        <div className="absolute inset-0 flex items-end md:items-center z-[2]">
          <div className="w-full max-w-[1200px] mx-auto px-6 pb-12 md:pb-0 md:px-14 lg:px-20">
            <div className="max-w-[500px] lg:max-w-[550px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4 md:mb-5 animate-fadeUp">
                <div className="w-5 md:w-7 h-[0.5px] bg-ivory/50" />
                <span className="text-[0.4rem] md:text-[0.46rem] font-extralight tracking-[4px] md:tracking-[5px] uppercase text-ivory/70">
                  {t("hero", "eyebrow")}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif italic font-light text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem] text-ivory leading-[1.1] mb-4 md:mb-5 animate-fadeUp-delay-1">
                {t("hero", "headline1")}
                <br />
                {t("hero", "headline2")}
              </h1>

              {/* Description */}
              <p className="font-serif font-light text-[0.9rem] md:text-base lg:text-lg text-ivory/85 leading-[1.8] max-w-[380px] lg:max-w-[420px] mb-8 md:mb-10 animate-fadeUp-delay-2">
                {t("hero", "subline")}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 animate-fadeUp-delay-3">
                <Link
                  href="#shop"
                  className="text-[0.42rem] md:text-[0.46rem] font-extralight tracking-[4px] uppercase text-wine-deep bg-ivory border-[0.5px] border-ivory px-8 md:px-10 py-3.5 md:py-4 inline-block hover:bg-ivory/90 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:-translate-y-[1px] transition-all duration-300"
                >
                  {t("hero", "exploreCollection")}
                </Link>
                <Link
                  href="#about"
                  className="text-[0.42rem] md:text-[0.46rem] font-extralight tracking-[4px] uppercase text-ivory/90 flex items-center gap-2 hover:text-ivory hover:gap-4 transition-all duration-300"
                >
                  {t("hero", "ourStory")} <span className="text-[0.85rem]">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Hint - Desktop only */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2.5 animate-fadeIn z-[2]" style={{ animationDelay: "1.2s" }}>
          <div className="w-[0.5px] h-10 bg-gradient-to-b from-ivory/60 to-transparent animate-growLine" />
          <p className="text-[0.36rem] tracking-[5px] uppercase text-ivory/50 writing-vertical-rl" style={{ writingMode: "vertical-rl" }}>
            {t("misc", "scroll")}
          </p>
        </div>
      </div>
    </section>
  )
}
