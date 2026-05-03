"use client"

import { useState, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { SearchOverlay } from "@/components/search-overlay"
import { CartDrawer } from "@/components/cart-drawer"
import { WishlistDrawer } from "@/components/wishlist-drawer"
import { SizingGuideModal } from "@/components/sizing-guide-modal"
import { ShippingInfoModal } from "@/components/shipping-info-modal"
import { CareGuideModal } from "@/components/care-guide-modal"
import { FAQModal } from "@/components/faq-modal"
import { PrivacyPolicyModal } from "@/components/privacy-policy-modal"
import { TermsModal } from "@/components/terms-modal"
import { TrackOrderModal } from "@/components/track-order-modal"
import { CustomerSupportModal } from "@/components/customer-support-modal"
import { SustainabilityModal } from "@/components/sustainability-modal"
import { CheckoutModal } from "@/components/checkout-modal"
import { RegionSelector } from "@/components/region-selector"
import { Toast } from "@/components/toast"
import { type Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

interface ProductPageWrapperProps {
  product: Product
  similarProducts: Product[]
}

export function ProductPageWrapper({ product, similarProducts }: ProductPageWrapperProps) {
  // Use shared cart context
  const {
    cartItems,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    cartCount,
    wishlistItems,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    toastMessage,
    isToastVisible,
    hideToast,
  } = useCart()

  // UI State
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isSizingGuideOpen, setIsSizingGuideOpen] = useState(false)
  const [isShippingInfoOpen, setIsShippingInfoOpen] = useState(false)
  const [isCareGuideOpen, setIsCareGuideOpen] = useState(false)
  const [isFAQOpen, setIsFAQOpen] = useState(false)
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false)
  const [isCustomerSupportOpen, setIsCustomerSupportOpen] = useState(false)
  const [isSustainabilityOpen, setIsSustainabilityOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [checkoutProductId, setCheckoutProductId] = useState<string | null>(null)
  const [isRegionSelectorOpen, setIsRegionSelectorOpen] = useState(false)

  // Cart handler that also opens the drawer
  const handleAddToCart = useCallback((p: Product, quantity: number = 1) => {
    addToCart(p, quantity)
    setIsCartOpen(true)
  }, [addToCart])

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

      <ProductDetail 
        product={product} 
        similarProducts={similarProducts}
        onAddToCart={handleAddToCart}
        onToggleWishlist={toggleWishlist}
        onBuyNow={handleBuyNow}
        isInWishlist={isInWishlist}
        onOpenSizingGuide={() => setIsSizingGuideOpen(true)}
      />

      <Footer
        onOpenSizingGuide={() => setIsSizingGuideOpen(true)}
        onOpenShippingInfo={() => setIsShippingInfoOpen(true)}
        onOpenCareGuide={() => setIsCareGuideOpen(true)}
        onOpenSustainability={() => setIsSustainabilityOpen(true)}
        onOpenFAQ={() => setIsFAQOpen(true)}
        onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
        onOpenCustomerSupport={() => setIsCustomerSupportOpen(true)}
        onOpenRegionSelector={() => setIsRegionSelectorOpen(true)}
      />

      {/* Overlays & Modals */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onProductClick={(p) => {
          handleAddToCart(p)
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
        onAddToCart={(p) => {
          handleAddToCart(p)
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

      <FAQModal
        isOpen={isFAQOpen}
        onClose={() => setIsFAQOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />

      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      <TrackOrderModal
        isOpen={isTrackOrderOpen}
        onClose={() => setIsTrackOrderOpen(false)}
      />

      <CustomerSupportModal
        isOpen={isCustomerSupportOpen}
        onClose={() => setIsCustomerSupportOpen(false)}
      />

      <SustainabilityModal
        isOpen={isSustainabilityOpen}
        onClose={() => setIsSustainabilityOpen(false)}
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

      <RegionSelector
        isOpen={isRegionSelectorOpen}
        onClose={() => setIsRegionSelectorOpen(false)}
      />

      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={hideToast}
      />
    </>
  )
}
