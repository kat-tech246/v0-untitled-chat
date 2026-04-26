"use client"

import { useEffect } from "react"
import { X, Trash2, ShoppingBag } from "lucide-react"
import { type Product } from "@/lib/products"
import { RingSvg, NecklaceSvg, EarringsSvg, BraceletSvg } from "./jewelry-svgs"

interface WishlistDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: Product[]
  onRemoveItem: (productId: string) => void
  onAddToCart: (product: Product) => void
}

export function WishlistDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onAddToCart,
}: WishlistDrawerProps) {
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
        return <RingSvg className="w-full" />
      case "necklaces":
        return <NecklaceSvg className="w-full" />
      case "earrings":
        return <EarringsSvg className="w-full" />
      case "bracelets":
        return <BraceletSvg className="w-full" />
      default:
        return <RingSvg className="w-full" />
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-wine-deep/40 z-[2500] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-full max-w-[420px] h-screen bg-ivory z-[3000] flex flex-col shadow-[-10px_0_50px_rgba(90,15,26,0.15)] transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-7 py-6 border-b border-blue-mid/20">
          <span className="font-serif italic text-xl text-wine">Your Wishlist</span>
          <button
            onClick={onClose}
            className="bg-transparent border-none text-blue-mid hover:text-wine transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-7 py-5">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif italic text-lg text-blue-mid mb-5">
                Your wishlist is empty.
              </p>
              <p className="text-[0.4rem] tracking-[1px] text-blue-mid/70 mb-6 leading-relaxed">
                Save your favorite pieces by clicking the heart icon on any product.
              </p>
              <button
                onClick={onClose}
                className="text-[0.46rem] font-light tracking-[4px] uppercase text-ivory bg-wine border border-wine px-9 py-4 hover:bg-wine-deep hover:border-wine-deep transition-all"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[70px_1fr_auto] gap-4 py-4 border-b border-blue-mid/15 items-center"
                >
                  <div className="aspect-square flex items-center justify-center overflow-hidden bg-blue-lt/50 p-2">
                    {getProductSVG(item.category)}
                  </div>
                  <div>
                    <span className="font-serif italic text-base text-wine block mb-1">
                      {item.name}
                    </span>
                    <span className="text-[0.38rem] tracking-[3px] uppercase text-blue-mid block mb-1">
                      {item.category}
                    </span>
                    <span className="text-[0.4rem] tracking-[2px] text-blue-deep">
                      {"\u20AC"} {(item.priceInCents / 100).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        onAddToCart(item)
                        onRemoveItem(item.id)
                      }}
                      className="w-8 h-8 border border-wine bg-wine text-ivory hover:bg-wine-deep transition-all flex items-center justify-center"
                      aria-label="Add to cart"
                      title="Add to cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="w-8 h-8 border border-blue-mid/40 bg-transparent text-blue-mid hover:border-wine hover:text-wine transition-all flex items-center justify-center"
                      aria-label="Remove from wishlist"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-7 py-6 border-t border-blue-mid/20">
            <p className="text-[0.38rem] tracking-[3px] uppercase text-blue-mid text-center mb-4">
              {items.length} {items.length === 1 ? "piece" : "pieces"} saved
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 bg-transparent border border-wine text-wine text-[0.42rem] tracking-[3px] uppercase hover:bg-wine hover:text-ivory transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
