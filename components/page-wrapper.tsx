"use client"

import { useState, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Marquee } from "@/components/marquee"
import { ShopSection } from "@/components/shop-section"
import { StatementSection } from "@/components/statement-section"
import { LookbookSection } from "@/components/lookbook-section"
import { TrustSection } from "@/components/trust-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SearchOverlay } from "@/components/search-overlay"
import { CartDrawer, type CartItem } from "@/components/cart-drawer"
import { WishlistDrawer } from "@/components/wishlist-drawer"
import { SizingGuideModal } from "@/components/sizing-guide-modal"
import { ShippingInfoModal } from "@/components/shipping-info-modal"
import { CareGuideModal } from "@/components/care-guide-modal"
import { CheckoutModal } from "@/components/checkout-modal"
import { Toast } from "@/components/toast"
import { type Product } from "@/lib/products"

export function PageWrapper() {
  // UI State
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isSizingGuideOpen, setIsSizingGuideOpen] = useState(false)
  const [isShippingInfoOpen, setIsShippingInfoOpen] = useState(false)
  const [isCareGuideOpen, setIsCareGuideOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [checkoutProductId, setCheckoutProductId] = useState<string | null>(null)

  // Data State
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [wishlistItems, setWishlistItems] = useState<Product[]>([])

  // Toast State
  const [toastMessage, setToastMessage] = useState("")
  const [isToastVisible, setIsToastVisible] = useState(false)

  const showToast = useCallback((message: string) => {
    setToastMessage(message)
    setIsToastVisible(true)
  }, [])

  // Cart Functions
  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, quantity }]
    })
    showToast(`${product.name} added to bag`)
  }, [showToast])

  const updateCartQuantity = useCallback((productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }, [])

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
    showToast("Item removed from bag")
  }, [showToast])

  // Wishlist Functions
  const addToWishlist = useCallback((product: Product) => {
    setWishlistItems((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
    showToast(`${product.name} saved to wishlist`)
  }, [showToast])

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId))
    showToast("Item removed from wishlist")
  }, [showToast])

  const isInWishlist = useCallback((productId: string) => {
    return wishlistItems.some((item) => item.id === productId)
  }, [wishlistItems])

  const toggleWishlist = useCallback((product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }, [isInWishlist, removeFromWishlist, addToWishlist])

  // Checkout Functions
  const handleCheckout = useCallback(() => {
    if (cartItems.length > 0) {
      setCheckoutProductId(cartItems[0].product.id)
      setIsCheckoutOpen(true)
      setIsCartOpen(false)
    }
  }, [cartItems])

  const handleBuyNow = useCallback((productId: string) => {
    setCheckoutProductId(productId)
    setIsCheckoutOpen(true)
  }, [])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <Navigation
        cartCount={cartCount}
        wishlistCount={wishlistItems.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSizingGuide={() => setIsSizingGuideOpen(true)}
        onOpenShippingInfo={() => setIsShippingInfoOpen(true)}
        onOpenCareGuide={() => setIsCareGuideOpen(true)}
      />

      <main>
        <HeroSection />
        <Marquee />
        <ShopSection
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          isInWishlist={isInWishlist}
          onBuyNow={handleBuyNow}
        />
        <StatementSection />
        <LookbookSection />
        <TrustSection />
        <AboutSection />
        <NewsletterSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Overlays & Modals */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onProductClick={(product) => {
          addToCart(product)
          setIsCartOpen(true)
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistItems}
        onRemoveItem={removeFromWishlist}
        onAddToCart={(product) => {
          addToCart(product)
          setIsCartOpen(true)
        }}
      />

      <SizingGuideModal
        isOpen={isSizingGuideOpen}
        onClose={() => setIsSizingGuideOpen(false)}
      />

      <ShippingInfoModal
        isOpen={isShippingInfoOpen}
        onClose={() => setIsShippingInfoOpen(false)}
      />

      <CareGuideModal
        isOpen={isCareGuideOpen}
        onClose={() => setIsCareGuideOpen(false)}
      />

      {checkoutProductId && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => {
            setIsCheckoutOpen(false)
            setCheckoutProductId(null)
          }}
          productId={checkoutProductId}
        />
      )}

      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </>
  )
}
