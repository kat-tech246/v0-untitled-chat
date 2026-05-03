"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export function HeroSection() {
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
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-[70px]">
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
      <div className="relative z-[2] max-w-[1200px] mx-auto w-full px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="text-center md:text-left">
          {/* Eyebrow */}
          <div className="flex items-center gap-3.5 mb-5 animate-fadeUp justify-center md:justify-start">
            <div className="w-7 h-[0.5px] bg-blue-mid" />
            <span className="text-[0.46rem] font-extralight tracking-[5px] uppercase text-blue-mid">
              Fine Jewellery · Vienna · Austria
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif italic font-light text-[clamp(2.8rem,5.2vw,5rem)] text-wine leading-[1.08] mb-6 animate-fadeUp-delay-1">
            Each Azurél piece is
            <br />
            designed to be worn.
          </h1>

          {/* Description */}
          <p className="font-serif font-light text-base text-blue-deep leading-[1.9] max-w-[360px] mb-11 animate-fadeUp-delay-2 mx-auto md:mx-0">
            Not saved. Whether layered or worn alone, every piece adapts to your style, not the other way around.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 animate-fadeUp-delay-3 justify-center md:justify-start">
            <Link
              href="#shop"
              className="text-[0.46rem] font-extralight tracking-[4px] uppercase text-ivory bg-wine border-[0.5px] border-wine px-9 py-[15px] inline-block hover:bg-wine-deep hover:border-wine-deep hover:shadow-[0_8px_28px_rgba(90,15,26,0.18)] hover:-translate-y-[1px] transition-all duration-400"
            >
              Explore Collection
            </Link>
            <Link
              href="#about"
              className="text-[0.46rem] font-extralight tracking-[4px] uppercase text-wine flex items-center gap-2.5 hover:gap-4 hover:opacity-65 transition-all duration-300"
            >
              Our story <span className="text-[0.85rem]">→</span>
            </Link>
          </div>
        </div>

        {/* Hero Card */}
        <div className="relative flex items-center justify-center animate-fadeIn order-first md:order-last">
          {/* Floating Dots - hidden on mobile */}
          <div className="hidden md:block absolute w-14 h-14 -top-[18px] -right-[18px] rounded-full border-[0.5px] border-blue-lt/50 animate-float" style={{ background: "radial-gradient(circle, rgba(246,242,234,0.9) 0%, rgba(220,232,240,0.3) 60%, transparent 100%)" }} />
          <div className="hidden md:block absolute w-[34px] h-[34px] bottom-[90px] -left-[16px] rounded-full border-[0.5px] border-blue-lt/50 animate-float-delay-1" style={{ background: "radial-gradient(circle, rgba(246,242,234,0.9) 0%, rgba(220,232,240,0.3) 60%, transparent 100%)" }} />
          <div className="hidden md:block absolute w-5 h-5 top-[32%] -right-[28px] rounded-full border-[0.5px] border-blue-lt/50 animate-float-delay-2" style={{ background: "radial-gradient(circle, rgba(246,242,234,0.9) 0%, rgba(220,232,240,0.3) 60%, transparent 100%)" }} />

          {/* Card */}
          <div
            className="w-full max-w-[280px] md:max-w-[430px] aspect-[3/4] relative overflow-hidden shadow-[0_30px_80px_rgba(90,15,26,0.08)] rounded-sm"
          >
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
              className="absolute inset-0 w-full h-full object-cover"
            />
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
    </section>
  )
}
