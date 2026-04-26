"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingBag, ChevronDown, Ruler, Truck, RotateCcw, Shield, ArrowLeft, Minus, Plus, ChevronRight } from "lucide-react"
import { NecklaceSvg, RingSvg, EarringsSvg, BraceletSvg, ChokerSvg, StackRingSvg } from "./jewelry-svgs"
import { type Product, formatPrice } from "@/lib/products"

interface ProductDetailProps {
  product: Product
  similarProducts: Product[]
  onAddToCart?: (product: Product, quantity?: number) => void
  onToggleWishlist?: (product: Product) => void
  onBuyNow?: (productId: string) => void
  isInWishlist?: (productId: string) => boolean
  onOpenSizingGuide?: () => void
}

const productSvgMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'ciel-pendant': NecklaceSvg,
  'aurore-bangle-ring': RingSvg,
  'etoile-flower-studs': EarringsSvg,
  'riviere-tennis-bracelet': BraceletSvg,
  'lune-torque-choker': ChokerSvg,
  'cascade-stack-set': StackRingSvg,
}

const bgStyles: Record<string, string> = {
  "bg-a": "linear-gradient(145deg, #DCE8F0, #E8EFF5)",
  "bg-b": "linear-gradient(145deg, #EAF2F7, #F6F2EA)",
  "bg-c": "linear-gradient(145deg, #EEF4F8, #DCE8F0)",
  "bg-d": "linear-gradient(145deg, #F6F2EA, #DCE8F0)",
  "bg-e": "linear-gradient(145deg, #E6EEF4, #EDE8DD)",
  "bg-f": "linear-gradient(145deg, #DCE8F0, #EFF4F7)",
}

const sizeGuides: Record<string, { label: string; sizes: string[] }> = {
  necklaces: { label: "Length", sizes: ["40cm", "45cm", "50cm", "55cm"] },
  rings: { label: "Ring Size", sizes: ["48", "50", "52", "54", "56", "58"] },
  earrings: { label: "Style", sizes: ["Studs", "Drop", "Hoops"] },
  bracelets: { label: "Size", sizes: ["S (15cm)", "M (17cm)", "L (19cm)"] },
}

export function ProductDetail({ 
  product, 
  similarProducts,
  onAddToCart,
  onToggleWishlist,
  onBuyNow,
  isInWishlist,
  onOpenSizingGuide,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [activeAccordion, setActiveAccordion] = useState<string | null>("details")
  const [addedToCart, setAddedToCart] = useState(false)

  const ProductSvg = productSvgMap[product.id] || NecklaceSvg
  const sizeGuide = sizeGuides[product.category] || sizeGuides.necklaces
  const isWishlisted = isInWishlist?.(product.id) ?? false

  const handleAddToCart = () => {
    onAddToCart?.(product, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    onBuyNow?.(product.id)
  }

  const handleToggleWishlist = () => {
    onToggleWishlist?.(product)
  }

  const accordionItems = [
    {
      id: "details",
      title: "Product Details",
      content: (
        <div className="space-y-4 text-[0.7rem] text-blue-deep leading-relaxed">
          <p>{product.description}</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-wine mt-2 flex-shrink-0" />
              <span>Material: 18K Gold Vermeil over Sterling Silver (2.5 microns)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-wine mt-2 flex-shrink-0" />
              <span>Stones: Premium AAA-grade Moissanite or Cubic Zirconia</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-wine mt-2 flex-shrink-0" />
              <span>Finish: Hand-polished with protective coating</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-wine mt-2 flex-shrink-0" />
              <span>Hypoallergenic: Nickel-free, safe for sensitive skin</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "shipping",
      title: "Shipping & Delivery",
      content: (
        <div className="space-y-4 text-[0.7rem] text-blue-deep leading-relaxed">
          <div className="flex items-start gap-3">
            <Truck className="w-4 h-4 text-wine flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="font-medium text-wine-deep mb-1">Free Worldwide Shipping</p>
              <p>Complimentary insured shipping on all orders. Express options available at checkout.</p>
            </div>
          </div>
          <div className="bg-blue-lt/30 p-4 space-y-2">
            <p><strong>Austria:</strong> 2-3 business days</p>
            <p><strong>Europe:</strong> 3-5 business days</p>
            <p><strong>International:</strong> 5-7 business days</p>
          </div>
          <p className="text-[0.6rem] text-blue-mid">
            All shipments include tracking. Signature required upon delivery.
          </p>
        </div>
      )
    },
    {
      id: "sizing",
      title: "Sizing Guide",
      content: (
        <div className="space-y-4 text-[0.7rem] text-blue-deep leading-relaxed">
          <div className="flex items-start gap-3">
            <Ruler className="w-4 h-4 text-wine flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="font-medium text-wine-deep mb-1">Find Your Perfect Fit</p>
              <p>Use our sizing guide to ensure the perfect fit for your new piece.</p>
            </div>
          </div>
          {product.category === "rings" && (
            <div className="bg-blue-lt/30 p-4">
              <p className="font-medium text-wine-deep mb-2">Ring Size Chart (EU)</p>
              <div className="grid grid-cols-3 gap-2 text-[0.6rem]">
                <div><strong>Size 48:</strong> 15.3mm</div>
                <div><strong>Size 50:</strong> 15.9mm</div>
                <div><strong>Size 52:</strong> 16.5mm</div>
                <div><strong>Size 54:</strong> 17.2mm</div>
                <div><strong>Size 56:</strong> 17.8mm</div>
                <div><strong>Size 58:</strong> 18.4mm</div>
              </div>
            </div>
          )}
          {product.category === "necklaces" && (
            <div className="bg-blue-lt/30 p-4">
              <p className="font-medium text-wine-deep mb-2">Chain Length Guide</p>
              <div className="space-y-1 text-[0.6rem]">
                <p><strong>40cm:</strong> Sits at the base of neck (choker style)</p>
                <p><strong>45cm:</strong> Sits at the collarbone (classic length)</p>
                <p><strong>50cm:</strong> Falls below collarbone (versatile)</p>
                <p><strong>55cm:</strong> Falls at chest level (statement)</p>
              </div>
            </div>
          )}
          {product.category === "bracelets" && (
            <div className="bg-blue-lt/30 p-4">
              <p className="font-medium text-wine-deep mb-2">Bracelet Size Guide</p>
              <div className="space-y-1 text-[0.6rem]">
                <p><strong>S (15cm):</strong> Petite wrist (13-14cm circumference)</p>
                <p><strong>M (17cm):</strong> Average wrist (15-16cm circumference)</p>
                <p><strong>L (19cm):</strong> Larger wrist (17-18cm circumference)</p>
              </div>
            </div>
          )}
          {product.category === "earrings" && (
            <div className="bg-blue-lt/30 p-4">
              <p className="font-medium text-wine-deep mb-2">Earring Styles</p>
              <div className="space-y-1 text-[0.6rem]">
                <p><strong>Studs:</strong> Classic, close to the ear</p>
                <p><strong>Drop:</strong> Dangle below the earlobe</p>
                <p><strong>Hoops:</strong> Circular design, various sizes available</p>
              </div>
            </div>
          )}
          <p className="text-[0.6rem] text-blue-mid">
            Unsure of your size? Contact our concierge team for personalized assistance.
          </p>
        </div>
      )
    },
    {
      id: "returns",
      title: "Returns & Care",
      content: (
        <div className="space-y-4 text-[0.7rem] text-blue-deep leading-relaxed">
          <div className="flex items-start gap-3">
            <RotateCcw className="w-4 h-4 text-wine flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="font-medium text-wine-deep mb-1">30-Day Returns</p>
              <p>Unworn items in original packaging may be returned within 30 days for a full refund.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-4 h-4 text-wine flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="font-medium text-wine-deep mb-1">Care Instructions</p>
              <ul className="space-y-1 mt-2">
                <li>Store in the provided jewellery box</li>
                <li>Remove before swimming or bathing</li>
                <li>Avoid contact with perfumes and lotions</li>
                <li>Clean gently with a soft, dry cloth</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-ivory pt-[70px]">
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-14 py-6">
        <nav className="flex items-center gap-2 text-[0.55rem] tracking-[1px]">
          <Link href="/" className="text-blue-mid hover:text-wine transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-blue-mid/50" />
          <Link href="/#shop" className="text-blue-mid hover:text-wine transition-colors">
            Collection
          </Link>
          <ChevronRight className="w-3 h-3 text-blue-mid/50" />
          <span className="text-wine">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-14 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div 
              className="aspect-square relative overflow-hidden"
              style={{ background: bgStyles[product.bg] }}
            >
              {product.badge && (
                <div className="absolute top-4 left-4 bg-wine text-ivory text-[0.35rem] tracking-[2px] uppercase px-3 py-1.5 z-10">
                  {product.badge}
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <ProductSvg className="w-[60%] drop-shadow-[0_12px_30px_rgba(90,15,26,0.12)]" />
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className={`aspect-square relative overflow-hidden border-2 transition-colors ${
                    i === 1 ? "border-wine" : "border-transparent hover:border-blue-mid/30"
                  }`}
                  style={{ background: bgStyles[product.bg] }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ProductSvg className="w-[55%] opacity-80" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {/* Category */}
            <span className="text-[0.45rem] tracking-[3px] uppercase text-blue-mid block mb-2">
              {product.category}
            </span>

            {/* Name */}
            <h1 className="font-serif italic font-light text-[2.5rem] text-wine leading-tight mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-xl tracking-[1px] text-wine-deep mb-6">
              {formatPrice(product.priceInCents)}
            </p>

            {/* Description */}
            <p className="text-[0.75rem] tracking-[0.5px] text-blue-deep leading-[1.8] mb-8">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid">
                  {sizeGuide.label}
                </label>
                <button 
                  onClick={onOpenSizingGuide}
                  className="text-[0.4rem] tracking-[1px] text-wine underline underline-offset-2 hover:text-wine-deep transition-colors"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizeGuide.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[60px] text-[0.5rem] tracking-[1px] uppercase px-4 py-3 border transition-all ${
                      selectedSize === size
                        ? "border-wine bg-wine text-ivory"
                        : "border-blue-mid/30 text-blue-deep hover:border-wine"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid block mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-blue-mid/30">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-blue-mid hover:text-wine transition-colors"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-wine-deep font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-blue-mid hover:text-wine transition-colors"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 text-[0.42rem] tracking-[3px] uppercase py-4 border border-wine text-wine hover:bg-wine hover:text-ivory transition-colors"
              >
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                {addedToCart ? "Added to Bag" : "Add to Bag"}
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 text-[0.42rem] tracking-[3px] uppercase py-4 bg-wine text-ivory hover:bg-wine-deep transition-colors"
              >
                Buy Now
              </button>
              <button
                onClick={handleToggleWishlist}
                className={`w-14 flex items-center justify-center border transition-colors ${
                  isWishlisted 
                    ? "border-wine bg-wine/5 text-wine" 
                    : "border-blue-mid/30 text-blue-mid hover:border-wine hover:text-wine"
                }`}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart 
                  className="w-5 h-5" 
                  strokeWidth={1.5} 
                  fill={isWishlisted ? "#5A0F1A" : "none"}
                />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-blue-mid/15 mb-8">
              <div className="text-center">
                <Truck className="w-5 h-5 text-wine mx-auto mb-2" strokeWidth={1.2} />
                <p className="text-[0.45rem] tracking-[1px] text-blue-mid">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 text-wine mx-auto mb-2" strokeWidth={1.2} />
                <p className="text-[0.45rem] tracking-[1px] text-blue-mid">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 text-wine mx-auto mb-2" strokeWidth={1.2} />
                <p className="text-[0.45rem] tracking-[1px] text-blue-mid">2-Year Warranty</p>
              </div>
            </div>

            {/* Accordion */}
            <div className="divide-y divide-blue-mid/15">
              {accordionItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-[0.5rem] tracking-[2px] uppercase text-wine-deep">
                      {item.title}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-blue-mid transition-transform duration-300 ${
                        activeAccordion === item.id ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === item.id ? "max-h-[500px] pb-5" : "max-h-0"
                  }`}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="bg-blue-lt/30 py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14">
          <h2 className="font-serif italic font-light text-2xl text-wine text-center mb-3">
            You May Also Love
          </h2>
          <p className="text-[0.55rem] tracking-[2px] uppercase text-blue-mid text-center mb-12">
            Similar pieces from our collection
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map((similarProduct) => {
              const SimilarSvg = productSvgMap[similarProduct.id] || NecklaceSvg
              return (
                <Link
                  key={similarProduct.id}
                  href={`/product/${similarProduct.id}`}
                  className="group"
                >
                  <div 
                    className="aspect-[3/4] relative overflow-hidden mb-4 transition-shadow group-hover:shadow-[0_15px_40px_rgba(90,15,26,0.1)]"
                    style={{ background: bgStyles[similarProduct.bg] }}
                  >
                    {similarProduct.badge && (
                      <div className="absolute top-3 left-3 bg-wine text-ivory text-[0.3rem] tracking-[2px] uppercase px-2 py-1 z-10">
                        {similarProduct.badge}
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <SimilarSvg className="w-[50%] drop-shadow-[0_8px_18px_rgba(90,15,26,0.08)]" />
                    </div>
                  </div>
                  <span className="text-[0.4rem] tracking-[2px] uppercase text-blue-mid block mb-1">
                    {similarProduct.category}
                  </span>
                  <span className="font-serif italic text-lg text-wine block mb-1 group-hover:text-wine-deep transition-colors">
                    {similarProduct.name}
                  </span>
                  <span className="text-[0.5rem] tracking-[1px] text-blue-deep">
                    {formatPrice(similarProduct.priceInCents)}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Back to Collection */}
          <div className="text-center mt-14">
            <Link
              href="/#shop"
              className="inline-flex items-center gap-2 text-[0.45rem] tracking-[3px] uppercase text-wine border border-wine px-8 py-4 hover:bg-wine hover:text-ivory transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Back to Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
