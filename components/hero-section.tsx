"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  const orbsRef = useRef<HTMLDivElement[]>([])
  const ghostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      orbsRef.current.forEach((orb, i) => {
        if (orb) {
          orb.style.transform = `translateY(${scrollY * (0.05 + i * 0.025)}px)`
        }
      })
      if (ghostRef.current) {
        ghostRef.current.style.transform = `translateX(${scrollY * 0.03}px)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden">
      {/* MOBILE LAYOUT - Full bleed editorial hero */}
      <div className="md:hidden">
        {/* Full-bleed Hero Image */}
        <div className="relative w-full h-[65vh] min-h-[400px]">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0086.WEBP-wuGEKLx2VnejNifh8nDCEghk4Dn7oh.webp"
            alt="Azurél jewelry collection - various pendant charms in gold settings with colorful gemstones"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay at bottom for transition */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
          
          {/* Shimmer effect */}
          <div
            className="absolute inset-0 animate-shimmer pointer-events-none"
            style={{
              background: "linear-gradient(108deg, transparent 38%, rgba(255,255,255,0.2) 50%, transparent 62%)",
            }}
          />
        </div>

        {/* Text Content Below Image */}
        <div className="relative bg-ivory px-6 py-10 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5 justify-center animate-fadeUp">
            <div className="w-6 h-[0.5px] bg-blue-mid" />
            <span className="text-[0.42rem] font-extralight tracking-[4px] uppercase text-blue-mid">
              Fine Jewellery · Vienna
            </span>
            <div className="w-6 h-[0.5px] bg-blue-mid" />
          </div>

          {/* Headline */}
          <h1 className="font-serif italic font-light text-[2.2rem] text-wine leading-[1.12] mb-5 animate-fadeUp-delay-1">
            {t("hero", "headline1")}
            <br />
            {t("hero", "headline2")}
          </h1>

          {/* Description */}
          <p className="font-serif font-light text-[0.95rem] text-blue-deep leading-[1.85] max-w-[320px] mx-auto mb-8 animate-fadeUp-delay-2">
            {t("hero", "subline")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 animate-fadeUp-delay-3">
            <Link
              href="#shop"
              className="text-[0.44rem] font-extralight tracking-[4px] uppercase text-ivory bg-wine border-[0.5px] border-wine px-10 py-4 inline-block hover:bg-wine-deep transition-all duration-300 w-full max-w-[260px]"
            >
              {t("hero", "exploreCollection")}
            </Link>
            <Link
              href="#about"
              className="text-[0.44rem] font-extralight tracking-[4px] uppercase text-wine flex items-center gap-2 hover:opacity-65 transition-all duration-300"
            >
              {t("hero", "ourStory")} <span className="text-[0.85rem]">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* TABLET & DESKTOP LAYOUT */}
      <div className="hidden md:block min-h-screen relative pt-[70px]">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 60% at 85% 25%, rgba(220,232,240,0.28) 0%, transparent 65%),
              radial-gradient(ellipse 45% 50% at 15% 75%, rgba(220,232,240,0.18) 0%, transparent 60%),
              radial-gradient(ellipse 35% 40% at 55% 85%, rgba(246,242,234,0.6) 0%, transparent 55%),
              linear-gradient(160deg, #EEF4F8 0%, #F6F2EA 45%, #EEE9DE 100%)
            `,
          }}
        />

        {/* Ghost Text */}
        <div
          ref={ghostRef}
          className="absolute right-[-40px] bottom-[-60px] font-serif italic font-light text-[clamp(10rem,22vw,28rem)] text-transparent pointer-events-none select-none tracking-[-6px] leading-none"
          style={{ WebkitTextStroke: "0.5px rgba(143,175,193,0.12)" }}
          aria-hidden="true"
        >
          Azurél
        </div>

        {/* Orbs */}
        <div
          ref={(el) => { if (el) orbsRef.current[0] = el }}
          className="absolute w-[650px] h-[650px] -top-[180px] -right-[180px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(220,232,240,0.22) 0%, rgba(220,232,240,0.08) 50%, transparent 75%)",
          }}
        />
        <div
          ref={(el) => { if (el) orbsRef.current[1] = el }}
          className="absolute w-[380px] h-[380px] -bottom-[80px] -left-[70px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(246,242,234,0.5) 0%, rgba(220,232,240,0.1) 55%, transparent 80%)",
          }}
        />
        <div
          ref={(el) => { if (el) orbsRef.current[2] = el }}
          className="absolute w-[200px] h-[200px] top-[30%] left-[38%] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(220,232,240,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-[2] max-w-[1200px] mx-auto w-full px-6 lg:px-14 min-h-[calc(100vh-70px)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Eyebrow */}
              <div className="flex items-center gap-3.5 mb-5 animate-fadeUp justify-center lg:justify-start">
                <div className="w-7 h-[0.5px] bg-blue-mid" />
                <span className="text-[0.46rem] font-extralight tracking-[5px] uppercase text-blue-mid">
                  Fine Jewellery · Vienna · Austria
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif italic font-light text-[clamp(2.4rem,4.5vw,4.5rem)] text-wine leading-[1.08] mb-6 animate-fadeUp-delay-1">
                {t("hero", "headline1")}
                <br />
                {t("hero", "headline2")}
              </h1>

              {/* Description */}
              <p className="font-serif font-light text-base text-blue-deep leading-[1.9] max-w-[360px] mb-11 animate-fadeUp-delay-2 mx-auto lg:mx-0">
                {t("hero", "subline")}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-6 animate-fadeUp-delay-3 justify-center lg:justify-start">
                <Link
                  href="#shop"
                  className="text-[0.46rem] font-extralight tracking-[4px] uppercase text-ivory bg-wine border-[0.5px] border-wine px-9 py-[15px] inline-block hover:bg-wine-deep hover:border-wine-deep hover:shadow-[0_8px_28px_rgba(90,15,26,0.18)] hover:-translate-y-[1px] transition-all duration-400"
                >
                  {t("hero", "exploreCollection")}
                </Link>
                <Link
                  href="#about"
                  className="text-[0.46rem] font-extralight tracking-[4px] uppercase text-wine flex items-center gap-2.5 hover:gap-4 hover:opacity-65 transition-all duration-300"
                >
                  {t("hero", "ourStory")} <span className="text-[0.85rem]">→</span>
                </Link>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative flex items-center justify-center animate-fadeIn">
              {/* Floating Dots */}
              <div className="hidden lg:block absolute w-14 h-14 -top-[18px] -right-[18px] rounded-full border-[0.5px] border-blue-lt/50 animate-float" style={{ background: "radial-gradient(circle, rgba(246,242,234,0.9) 0%, rgba(220,232,240,0.3) 60%, transparent 100%)" }} />
              <div className="hidden lg:block absolute w-[34px] h-[34px] bottom-[90px] -left-[16px] rounded-full border-[0.5px] border-blue-lt/50 animate-float-delay-1" style={{ background: "radial-gradient(circle, rgba(246,242,234,0.9) 0%, rgba(220,232,240,0.3) 60%, transparent 100%)" }} />
              <div className="hidden lg:block absolute w-5 h-5 top-[32%] -right-[28px] rounded-full border-[0.5px] border-blue-lt/50 animate-float-delay-2" style={{ background: "radial-gradient(circle, rgba(246,242,234,0.9) 0%, rgba(220,232,240,0.3) 60%, transparent 100%)" }} />

              {/* Card */}
              <div className="w-full max-w-[380px] lg:max-w-[430px] aspect-[3/4] relative overflow-hidden shadow-[0_30px_80px_rgba(90,15,26,0.08)] rounded-sm">
                {/* Shimmer */}
                <div
                  className="absolute inset-0 animate-shimmer z-10 pointer-events-none"
                  style={{
                    background: "linear-gradient(108deg, transparent 38%, rgba(255,255,255,0.28) 50%, transparent 62%)",
                  }}
                />

                {/* Jewelry Image */}
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0086.WEBP-wuGEKLx2VnejNifh8nDCEghk4Dn7oh.webp"
                  alt="Azurél jewelry collection - various pendant charms in gold settings with colorful gemstones"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 animate-fadeIn" style={{ animationDelay: "1.2s" }}>
          <div className="w-[0.5px] h-12 bg-gradient-to-b from-blue-mid to-transparent animate-growLine" />
          <p className="text-[0.36rem] tracking-[5px] uppercase text-blue-mid writing-vertical-rl opacity-60" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </p>
        </div>
      </div>
    </section>
  )
}
