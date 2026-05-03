"use client"

import { useState, useEffect, useRef, type FormEvent } from "react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const sectionRef = useRef<HTMLElement>(null)

  const contactInfo = [
    { labelKey: "atelier", value: "Vienna, Austria" },
    { labelKey: "email", value: "hello@azurel.at" },
    { labelKey: "instagram", value: "@azurel.wien" },
    { labelKey: "hours", value: "Mon – Fri · 10:00 – 18:00" },
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-30 bg-ivory" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <div className="sr">
            <span className="text-[0.44rem] font-extralight tracking-[5px] uppercase text-blue-mid block mb-3">
              {t("contact", "getInTouch")}
            </span>
            <h2 className="font-serif italic font-light text-[clamp(2rem,3.8vw,3rem)] text-wine leading-[1.1] mb-11">
              {t("contact", "weLove").split(" ").slice(0, 3).join(" ")}
              <br />
              {t("contact", "weLove").split(" ").slice(3).join(" ")}
            </h2>

            {contactInfo.map((item, index) => (
              <div key={index} className="mb-7">
                <span className="text-[0.4rem] tracking-[4px] uppercase text-blue-mid block mb-1">
                  {t("contact", item.labelKey)}
                </span>
                <span className="font-serif italic text-[1.05rem] text-wine font-light">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="sr d2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.37rem] tracking-[3px] uppercase text-blue-mid">
                    {t("contact", "firstName")}
                  </label>
                  <input
                    type="text"
                    placeholder="Marie"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="font-serif italic text-[0.95rem] text-wine-deep bg-transparent border-0 border-b border-blue-mid/30 py-2 outline-none focus:border-blue-mid transition-colors placeholder:text-blue-mid/60 placeholder:italic"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.37rem] tracking-[3px] uppercase text-blue-mid">
                    {t("contact", "lastName")}
                  </label>
                  <input
                    type="text"
                    placeholder="Dupont"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                    className="font-serif italic text-[0.95rem] text-wine-deep bg-transparent border-0 border-b border-blue-mid/30 py-2 outline-none focus:border-blue-mid transition-colors placeholder:text-blue-mid/60 placeholder:italic"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.37rem] tracking-[3px] uppercase text-blue-mid">
                  {t("contact", "email")}
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="font-serif italic text-[0.95rem] text-wine-deep bg-transparent border-0 border-b border-blue-mid/30 py-2 outline-none focus:border-blue-mid transition-colors placeholder:text-blue-mid/60 placeholder:italic"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.37rem] tracking-[3px] uppercase text-blue-mid">
                  {t("contact", "subject")}
                </label>
                <input
                  type="text"
                  placeholder="Custom order enquiry"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="font-serif italic text-[0.95rem] text-wine-deep bg-transparent border-0 border-b border-blue-mid/30 py-2 outline-none focus:border-blue-mid transition-colors placeholder:text-blue-mid/60 placeholder:italic"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.37rem] tracking-[3px] uppercase text-blue-mid">
                  {t("contact", "message")}
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream piece…"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="font-serif italic text-[0.95rem] text-wine-deep bg-transparent border-0 border-b border-blue-mid/30 py-2 outline-none focus:border-blue-mid transition-colors placeholder:text-blue-mid/60 placeholder:italic resize-none min-h-[90px]"
                />
              </div>

              <button
                type="submit"
                className={`self-start text-[0.46rem] font-extralight tracking-[4px] uppercase text-ivory px-9 py-[15px] border-0 transition-all duration-400 ${
                  isSubmitted
                    ? "bg-wine-deep"
                    : "bg-wine hover:bg-wine-deep hover:shadow-[0_8px_28px_rgba(90,15,26,0.18)] hover:-translate-y-[1px]"
                }`}
              >
                {isSubmitted ? "✦" : t("contact", "sendMessage")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
