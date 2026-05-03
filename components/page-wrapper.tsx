"use client"

import { useState, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Marquee } from "@/components/marquee"
import { TrendingSection } from "@/components/trending-section"
import { ShopSection } from "@/components/shop-section"
import { StatementSection } from "@/components/statement-section"
import { LookbookSection } from "@/components/lookbook-section"
import { TrustSection } from "@/components/trust-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
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
import { useCart } from "@/lib/cart-context"

export function PageWrapper() {
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

      <main>
        <HeroSection />
        <Marquee />
        <TrendingSection 
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          wishlistItems={wishlistItems}
        />
        <ShopSection 
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          onBuyNow={handleBuyNow}
          wishlistItems={wishlistItems}
        />
        <StatementSection />
        <LookbookSection />
        <TrustSection />
        <AboutSection />
        <NewsletterSection />
        <ContactSection />
      </main>

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
        onClose={() => {
          setIsRegionSelectorOpen(false)
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }, 300)
        }}
      />

      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={hideToast}
      />
    </>
  )
}
