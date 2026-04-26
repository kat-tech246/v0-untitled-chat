'use client'

import { useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import Checkout from './checkout'
import { PRODUCTS, formatPrice } from '@/lib/products'

interface CheckoutModalProps {
  productId: string | null
  onClose: () => void
  isOpen?: boolean
}

export function CheckoutModal({ productId, onClose, isOpen = true }: CheckoutModalProps) {
  const product = productId ? PRODUCTS.find(p => p.id === productId) : null

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (productId) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [productId, handleEscape])

  if (!isOpen || !productId || !product) return null

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-wine-deep/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] mx-4 bg-ivory overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-blue-mid/20">
          <div>
            <span className="text-[0.5rem] tracking-[3px] uppercase text-blue-mid block mb-0.5">
              Secure Checkout
            </span>
            <h2 id="checkout-title" className="font-serif italic text-xl text-wine">
              {product.name}
            </h2>
            <span className="text-[0.6rem] tracking-[2px] text-blue-deep">
              {formatPrice(product.priceInCents)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-wine hover:bg-wine/5 transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
        
        {/* Checkout Form */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <Checkout productId={productId} />
        </div>
      </div>
    </div>
  )
}
