"use client"

import { useState, useEffect, useRef, type FormEvent } from "react"
import { useLanguage } from "@/lib/language-context"

export function NewsletterSection() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <div
      ref={sectionRef}
      className="py-20 md:py-22 bg-blue-lt border-t border-blue-mid/20"
    >
      <div className="sr max-w-[520px] mx-auto text-center px-6">
        <h3 className="font-serif italic font-light text-[2.2rem] text-wine mb-2.5">
          {t("newsletter", "title")}
        </h3>
        <p className="text-[0.42rem] tracking-[1.5px] text-blue-deep leading-[1.9] mb-7">
          {t("newsletter", "body")}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-[400px] mx-auto">
          <input
            type="email"
            placeholder={t("newsletter", "placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 font-serif italic text-[0.95rem] text-wine-deep bg-ivory border-[0.5px] border-blue-mid/40 sm:border-r-0 px-4 py-3 outline-none focus:border-blue-mid transition-colors placeholder:text-blue-mid/70"
          />
          <button
            type="submit"
            className={`text-[0.4rem] tracking-[3px] uppercase text-ivory px-6 py-3 whitespace-nowrap transition-colors ${
              isSubmitted ? "bg-wine-deep" : "bg-wine hover:bg-wine-deep"
            }`}
          >
            {isSubmitted ? "✦" : t("newsletter", "subscribe")}
          </button>
        </form>
      </div>
    </div>
  )
}
