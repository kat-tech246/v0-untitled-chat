"use client"

import Link from "next/link"

interface FooterProps {
  onOpenSizingGuide?: () => void
  onOpenShippingInfo?: () => void
  onOpenCareGuide?: () => void
  onOpenSustainability?: () => void
  onOpenFAQ?: () => void
  onOpenPrivacyPolicy?: () => void
  onOpenTerms?: () => void
  onOpenTrackOrder?: () => void
  onOpenCustomerSupport?: () => void
}

const socials = [
  { label: "Ig", href: "https://instagram.com" },
  { label: "Tk", href: "https://tiktok.com" },
  { label: "Pt", href: "https://pinterest.com" },
  { label: "Fb", href: "https://facebook.com" },
]

export function Footer({
  onOpenSizingGuide,
  onOpenShippingInfo,
  onOpenCareGuide,
  onOpenSustainability,
  onOpenFAQ,
  onOpenPrivacyPolicy,
  onOpenTerms,
  onOpenTrackOrder,
  onOpenCustomerSupport,
}: FooterProps) {
  return (
    <footer className="bg-wine-deep py-20 md:py-20 px-6 md:px-14">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-9 md:gap-15 pb-14 border-b border-blue-lt/[0.07] mb-10">
          {/* Brand */}
          <div>
            <span className="font-serif italic font-light text-[2.2rem] text-ivory block mb-3">
              Azurel
            </span>
            <p className="text-[0.55rem] tracking-[2px] text-blue-lt/40 leading-[1.9] mb-6">
              Fine jewellery crafted in Vienna.
              <br />
              Moissanite · Zirconium · 18K Gold Plated.
            </p>
            <div className="flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border-[0.5px] border-blue-lt/[0.12] flex items-center justify-center text-blue-lt/25 text-[0.5rem] font-sans hover:border-blue-lt hover:text-blue-lt transition-all"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Collection Links */}
          <div>
            <span className="text-[0.42rem] tracking-[4px] uppercase text-blue-lt/[0.25] block mb-4">
              Collection
            </span>
            <ul className="flex flex-col gap-2.5">
              {["Necklaces", "Rings", "Earrings", "Bracelets", "New Arrivals"].map((label) => (
                <li key={label}>
                  <Link
                    href="/#shop"
                    className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <span className="text-[0.42rem] tracking-[4px] uppercase text-blue-lt/[0.25] block mb-4">
              Information
            </span>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/#about"
                  className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenCareGuide}
                  className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors bg-transparent border-none p-0 text-left"
                >
                  Jewellery Care
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSizingGuide}
                  className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors bg-transparent border-none p-0 text-left"
                >
                  Sizing Guide
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSustainability}
                  className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors bg-transparent border-none p-0 text-left"
                >
                  Sustainability
                </button>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <span className="text-[0.42rem] tracking-[4px] uppercase text-blue-lt/[0.25] block mb-4">
              Support
            </span>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={onOpenShippingInfo}
                  className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors bg-transparent border-none p-0 text-left"
                >
                  Shipping &amp; Returns
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTrackOrder}
                  className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors bg-transparent border-none p-0 text-left"
                >
                  Track My Order
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenFAQ}
                  className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors bg-transparent border-none p-0 text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCustomerSupport}
                  className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors bg-transparent border-none p-0 text-left"
                >
                  Customer Support
                </button>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="font-serif italic text-[0.95rem] font-light text-blue-lt/35 hover:text-blue-lt transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3.5 text-center">
          <span className="text-[0.42rem] tracking-[2px] text-blue-lt/[0.2]">
            © 2025 Azurel Fine Jewellery · Vienna, Austria · All rights reserved
          </span>
          <div className="flex gap-5">
            <button
              onClick={onOpenPrivacyPolicy}
              className="text-[0.42rem] tracking-[2px] text-blue-lt/[0.2] hover:text-blue-lt/50 transition-colors bg-transparent border-none p-0"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="text-[0.42rem] tracking-[2px] text-blue-lt/[0.2] hover:text-blue-lt/50 transition-colors bg-transparent border-none p-0"
            >
              Terms
            </button>
            <button
              onClick={onOpenPrivacyPolicy}
              className="text-[0.42rem] tracking-[2px] text-blue-lt/[0.2] hover:text-blue-lt/50 transition-colors bg-transparent border-none p-0"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
