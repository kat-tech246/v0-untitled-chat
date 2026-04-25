"use client"

import { useEffect } from "react"
import { X, Minus, Plus, Trash2 } from "lucide-react"
import { type Product } from "@/lib/products"
import { RingSVG, NecklaceSVG, EarringSVG, BraceletSVG } from "./jewelry-svgs"

export interface CartItem {
  product: Product
  quantity: number
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemoveItem: (productId: string) => void
  onCheckout: () => void
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
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

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.priceInCents * item.quantity,
    0
  )

  const getProductSVG = (category: string) => {
    switch (category) {
      case "rings":
        return <RingSVG className="w-full" />
      case "necklaces":
        return <NecklaceSVG className="w-full" />
      case "earrings":
        return <EarringSVG className="w-full" />
      case "bracelets":
        return <BraceletSVG className="w-full" />
      default:
        return <RingSVG className="w-full" />
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
          <span className="font-serif italic text-xl text-wine">Your Selection</span>
          <button
            onClick={onClose}
            className="bg-transparent border-none text-blue-mid hover:text-wine transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-7 py-5">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif italic text-lg text-blue-mid mb-5">
                Your cart is empty.
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
                  key={item.product.id}
                  className="grid grid-cols-[70px_1fr_auto] gap-4 py-4 border-b border-blue-mid/15 items-center"
                >
                  <div className="aspect-square flex items-center justify-center overflow-hidden bg-blue-lt/50 p-2">
                    {getProductSVG(item.product.category)}
                  </div>
                  <div>
                    <span className="font-serif italic text-base text-wine block mb-1">
                      {item.product.name}
                    </span>
                    <span className="text-[0.4rem] tracking-[2px] text-blue-mid">
                      {"\u20AC"} {(item.product.priceInCents / 100).toLocaleString()}
                    </span>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                        }
                        className="w-6 h-6 border border-blue-mid/40 bg-transparent text-blue-mid hover:bg-wine hover:border-wine hover:text-ivory transition-all flex items-center justify-center"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-[0.4rem] tracking-[1px] text-wine-deep min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 border border-blue-mid/40 bg-transparent text-blue-mid hover:bg-wine hover:border-wine hover:text-ivory transition-all flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="bg-transparent border-none text-blue-mid/50 hover:text-wine transition-colors p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-7 py-6 border-t border-blue-mid/20">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[0.42rem] tracking-[3px] uppercase text-blue-mid">
                Subtotal
              </span>
              <span className="font-serif italic text-xl text-wine">
                {"\u20AC"} {(subtotal / 100).toLocaleString()}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-4 bg-wine border-none text-ivory text-[0.44rem] tracking-[4px] uppercase hover:bg-wine-deep transition-colors mb-3"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 bg-transparent border border-wine text-wine text-[0.42rem] tracking-[3px] uppercase hover:bg-wine hover:text-ivory transition-all"
            >
              Continue Shopping
            </button>
            <p className="text-[0.36rem] tracking-[1px] text-blue-mid text-center mt-4 leading-relaxed">
              Complimentary shipping on all orders · Secure gift packaging included
            </p>
          </div>
        )}
      </div>
    </>
  )
}
