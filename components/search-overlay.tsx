"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { PRODUCTS, type Product } from "@/lib/products"
import { RingSvg, NecklaceSvg, EarringsSvg, BraceletSvg } from "./jewelry-svgs"
import { useLanguage } from "@/lib/language-context"

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
  onProductClick: (product: Product) => void
}

export function SearchOverlay({ isOpen, onClose, onProductClick }: SearchOverlayProps) {
  const { t, language } = useLanguage()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      return
    }
    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
  }, [query])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  const getProductSVG = (category: string) => {
    switch (category) {
      case "rings":
        return <RingSvg className="w-[60%]" />
      case "necklaces":
        return <NecklaceSvg className="w-[60%]" />
      case "earrings":
        return <EarringsSvg className="w-[60%]" />
      case "bracelets":
        return <BraceletSvg className="w-[60%]" />
      default:
        return <RingSvg className="w-[60%]" />
    }
  }

  const getSearchPrompt = () => {
    if (language === "ru") return "Что вы ищете?"
    if (language === "de") return "Wonach suchen Sie?"
    return "What are you looking for?"
  }

  const getNoResultsText = () => {
    if (language === "ru") return `Ничего не найдено по запросу "${query}"`
    if (language === "de") return `Keine Ergebnisse für "${query}"`
    return `No pieces found for "${query}"`
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-ivory/[0.97] z-[4000] flex flex-col items-center justify-center p-10">
      <button
        onClick={onClose}
        className="absolute top-6 right-8 bg-transparent border-none text-blue-mid hover:text-wine transition-colors text-2xl"
        aria-label={t("misc", "close")}
      >
        <X className="w-6 h-6" strokeWidth={1.5} />
      </button>

      <div className="w-full max-w-[600px]">
        <span className="text-[0.42rem] tracking-[4px] uppercase text-blue-mid block mb-4">
          {getSearchPrompt()}
        </span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("misc", "searchPlaceholder")}
          className="w-full font-serif italic text-3xl text-wine bg-transparent border-none border-b border-blue-mid/30 outline-none py-3 focus:border-blue-mid transition-colors placeholder:text-blue-mid/50"
        />

        {results.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {results.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  onProductClick(product)
                  onClose()
                }}
                className="text-center block bg-transparent border-none p-0 w-full group"
              >
                <div className="aspect-square flex items-center justify-center mb-2 bg-blue-lt p-3">
                  {getProductSVG(product.category)}
                </div>
                <span className="font-serif italic text-[0.95rem] text-wine-deep group-hover:text-wine transition-colors block">
                  {product.name}
                </span>
                <span className="text-[0.38rem] tracking-[2px] text-blue-mid">
                  {"\u20AC"} {(product.priceInCents / 100).toLocaleString()}
                </span>
              </button>
            ))}
          </div>
        )}

        {query.trim() !== "" && results.length === 0 && (
          <p className="mt-8 text-center font-serif italic text-blue-mid">
            {getNoResultsText()}
          </p>
        )}
      </div>
    </div>
  )
}
