"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Heart, ShoppingBag, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-ivory z-[998] flex flex-col items-center justify-center gap-7 transition-opacity duration-400 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={closeMobileMenu}
          className="absolute top-5 right-9 text-xl text-blue-mid bg-transparent border-none"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        {["home", "shop", "lookbook", "about", "contact"].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            onClick={closeMobileMenu}
            className="font-serif italic font-light text-4xl text-wine tracking-[2px] hover:opacity-55 transition-opacity"
          >
            {item === "home" ? "Home" : item === "shop" ? "Collection" : item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`fixed inset-x-0 top-0 z-[1000] flex items-center justify-between px-6 md:px-14 backdrop-blur-[20px] border-b border-blue-mid/25 transition-all duration-400 ${
          isScrolled
            ? "h-[58px] bg-ivory/[0.97] shadow-[0_1px_32px_rgba(90,15,26,0.05)]"
            : "h-[70px] bg-ivory/[0.82]"
        }`}
      >
        <Link
          href="#home"
          className="font-serif italic font-light text-3xl text-wine tracking-[2px] hover:opacity-65 transition-opacity"
        >
          Azurél
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-11 list-none">
          {[
            { href: "#shop", label: "Collection" },
            { href: "#lookbook", label: "Lookbook" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[0.5rem] font-extralight tracking-[4px] uppercase text-blue-deep relative hover:text-wine transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-[3px] left-0 w-0 h-[0.5px] bg-blue-mid transition-all duration-400 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 items-center">
          <button
            className="bg-transparent border-none text-blue-mid/70 hover:text-wine transition-colors p-1 flex items-center"
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex md:hidden flex-col gap-[5px] p-1"
          aria-label="Open menu"
        >
          <span className="block w-5 h-[0.5px] bg-wine-deep" />
          <span className="block w-5 h-[0.5px] bg-wine-deep" />
          <span className="block w-5 h-[0.5px] bg-wine-deep" />
        </button>
      </nav>
    </>
  )
}
