"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Heart, ShoppingBag } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-ivory z-[999] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Menu Content */}
        <div 
          className={`h-full flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isMenuOpen ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 md:px-14 h-[70px] border-b border-blue-mid/25">
            <Link
              href="#home"
              onClick={closeMenu}
              className="font-serif italic font-light text-3xl text-wine tracking-[2px] hover:opacity-65 transition-opacity"
            >
              Azurél
            </Link>

            {/* Close Button - Animated X */}
            <button
              onClick={closeMenu}
              className="relative w-8 h-8 flex items-center justify-center group"
              aria-label="Close menu"
            >
              <span className="absolute w-6 h-[1px] bg-wine-deep rotate-45 transition-transform group-hover:rotate-[135deg]" />
              <span className="absolute w-6 h-[1px] bg-wine-deep -rotate-45 transition-transform group-hover:rotate-[45deg]" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-1 flex flex-col md:flex-row">
            {/* Main Navigation */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-20 lg:px-32">
              <nav className="flex flex-col gap-4 md:gap-6">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#shop", label: "Collection" },
                  { href: "#lookbook", label: "Lookbook" },
                  { href: "#about", label: "Our Maison" },
                  { href: "#contact", label: "Contact" },
                ].map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center gap-6"
                    style={{ 
                      transitionDelay: isMenuOpen ? `${index * 80}ms` : "0ms",
                    }}
                  >
                    <span className="text-[0.65rem] font-light tracking-[3px] text-blue-mid/60 w-6">
                      0{index + 1}
                    </span>
                    <span className="font-serif italic font-light text-4xl md:text-5xl lg:text-6xl text-wine tracking-[2px] transition-all duration-300 group-hover:text-blue-deep group-hover:translate-x-3">
                      {item.label}
                    </span>
                    <span className="hidden md:block w-0 h-[0.5px] bg-blue-mid transition-all duration-500 group-hover:w-20" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Side Panel - Contact Info */}
            <div className="hidden lg:flex flex-col justify-center px-16 border-l border-blue-mid/15 w-[380px] bg-blue-lt/30">
              <div className="space-y-8">
                <div>
                  <p className="text-[0.6rem] font-light tracking-[4px] uppercase text-blue-mid/70 mb-3">
                    Visit Our Atelier
                  </p>
                  <p className="font-serif italic text-lg text-wine-deep leading-relaxed">
                    Kärntner Straße 16<br />
                    1010 Vienna, Austria
                  </p>
                </div>
                <div>
                  <p className="text-[0.6rem] font-light tracking-[4px] uppercase text-blue-mid/70 mb-3">
                    Contact
                  </p>
                  <p className="font-serif italic text-lg text-wine-deep">
                    +43 1 512 00 00
                  </p>
                  <p className="text-[0.7rem] tracking-[1px] text-blue-mid mt-1">
                    concierge@azurel.at
                  </p>
                </div>
                <div>
                  <p className="text-[0.6rem] font-light tracking-[4px] uppercase text-blue-mid/70 mb-3">
                    Hours
                  </p>
                  <p className="text-[0.7rem] tracking-[1px] text-blue-deep leading-relaxed">
                    Monday – Saturday: 10:00 – 19:00<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="flex items-center justify-between px-6 md:px-14 py-6 border-t border-blue-mid/15">
            <div className="flex gap-8">
              {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[0.6rem] font-light tracking-[3px] uppercase text-blue-mid/70 hover:text-wine transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
            <p className="hidden md:block text-[0.55rem] font-light tracking-[2px] text-blue-mid/50">
              Fine Jewellery · Vienna · Since 1923
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav
        className={`fixed inset-x-0 top-0 z-[1000] flex items-center justify-between px-6 md:px-14 backdrop-blur-[20px] border-b border-blue-mid/25 transition-all duration-400 ${
          isScrolled
            ? "h-[58px] bg-ivory/[0.97] shadow-[0_1px_32px_rgba(90,15,26,0.05)]"
            : "h-[70px] bg-ivory/[0.82]"
        }`}
      >
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="relative w-8 h-8 flex flex-col items-center justify-center gap-[6px] group"
          aria-label="Open menu"
        >
          <span className="block w-6 h-[1px] bg-wine-deep transition-all duration-300 group-hover:w-5 group-hover:translate-x-[2px]" />
          <span className="block w-6 h-[1px] bg-wine-deep transition-all duration-300" />
          <span className="block w-6 h-[1px] bg-wine-deep transition-all duration-300 group-hover:w-5 group-hover:-translate-x-[2px]" />
        </button>

        {/* Logo - Center */}
        <Link
          href="#home"
          className="absolute left-1/2 -translate-x-1/2 font-serif italic font-light text-3xl text-wine tracking-[2px] hover:opacity-65 transition-opacity"
        >
          Azurél
        </Link>

        {/* Right Icons */}
        <div className="flex gap-5 items-center">
          <button
            className="hidden md:flex bg-transparent border-none text-blue-mid/70 hover:text-wine transition-colors p-1 items-center"
            aria-label="Search"
          >
            <Search className="w-[17px] h-[17px]" strokeWidth={1.3} />
          </button>
          <button
            className="bg-transparent border-none text-blue-mid/70 hover:text-wine transition-colors p-1 flex items-center"
            aria-label="Wishlist"
          >
            <Heart className="w-[17px] h-[17px]" strokeWidth={1.3} />
          </button>
          <div className="relative">
            <button
              className="bg-transparent border-none text-blue-mid/70 hover:text-wine transition-colors p-1 flex items-center"
              aria-label="Bag"
            >
              <ShoppingBag className="w-[17px] h-[17px]" strokeWidth={1.3} />
            </button>
            <span className="absolute -top-[3px] -right-[5px] w-[13px] h-[13px] rounded-full bg-blue-lt border-[1.5px] border-ivory text-[0.28rem] tracking-normal text-wine flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}
