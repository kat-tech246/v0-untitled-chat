"use client"

import { X, Leaf, Recycle, Heart, Globe, Sparkles, Shield } from "lucide-react"

interface SustainabilityModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SustainabilityModal({ isOpen, onClose }: SustainabilityModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-wine-deep/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[85vh] bg-ivory overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-ivory border-b border-blue-mid/15 px-8 py-6 flex items-center justify-between z-10">
          <div>
            <span className="text-[0.4rem] tracking-[4px] uppercase text-blue-mid block mb-1">
              Our Commitment
            </span>
            <h2 className="font-serif italic text-2xl text-wine">Sustainability</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-blue-mid hover:text-wine transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-8 space-y-10">
          {/* Intro */}
          <div className="text-center max-w-lg mx-auto">
            <Leaf className="w-8 h-8 text-wine mx-auto mb-4" strokeWidth={1} />
            <p className="font-serif font-light text-lg text-wine-deep leading-relaxed mb-3">
              Beautiful jewellery should not come at the cost of our planet.
            </p>
            <p className="text-[0.7rem] text-blue-deep leading-relaxed">
              At Azurél, sustainability is not a marketing term — it is the foundation of everything we create. From the stones we select to the packaging we use, every choice is made with intention.
            </p>
          </div>

          {/* Pillars */}
          <div className="space-y-6">
            <div className="flex gap-5 p-6 bg-blue-lt/30 border border-blue-mid/10">
              <div className="flex-shrink-0">
                <Sparkles className="w-6 h-6 text-wine" strokeWidth={1.2} />
              </div>
              <div>
                <h3 className="font-serif italic text-lg text-wine mb-2">Ethical Stones</h3>
                <p className="text-[0.7rem] text-blue-deep leading-relaxed">
                  We exclusively use lab-created moissanite and cubic zirconia — stones that are chemically and optically identical to their mined counterparts, but without the environmental devastation and ethical concerns of traditional mining. Our stones are conflict-free, traceable, and just as brilliant.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-blue-lt/30 border border-blue-mid/10">
              <div className="flex-shrink-0">
                <Recycle className="w-6 h-6 text-wine" strokeWidth={1.2} />
              </div>
              <div>
                <h3 className="font-serif italic text-lg text-wine mb-2">Recycled Materials</h3>
                <p className="text-[0.7rem] text-blue-deep leading-relaxed">
                  All of our sterling silver and gold vermeil is crafted from 100% recycled precious metals. By using recycled materials, we reduce the demand for newly mined metals and give existing resources a second life. Each piece carries a legacy of responsibility.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-blue-lt/30 border border-blue-mid/10">
              <div className="flex-shrink-0">
                <Globe className="w-6 h-6 text-wine" strokeWidth={1.2} />
              </div>
              <div>
                <h3 className="font-serif italic text-lg text-wine mb-2">Carbon-Conscious Shipping</h3>
                <p className="text-[0.7rem] text-blue-deep leading-relaxed">
                  We offset 100% of our shipping emissions through verified carbon removal projects. Every order supports reforestation and renewable energy initiatives. We use consolidated shipments and optimized routing to minimize our footprint further.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-blue-lt/30 border border-blue-mid/10">
              <div className="flex-shrink-0">
                <Heart className="w-6 h-6 text-wine" strokeWidth={1.2} />
              </div>
              <div>
                <h3 className="font-serif italic text-lg text-wine mb-2">Thoughtful Packaging</h3>
                <p className="text-[0.7rem] text-blue-deep leading-relaxed">
                  Our packaging is 100% recyclable and biodegradable. We use FSC-certified paper, soy-based inks, and plastic-free materials. Our signature linen pouches are designed to be reused — as travel cases, storage for small treasures, or gifts in themselves.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-blue-lt/30 border border-blue-mid/10">
              <div className="flex-shrink-0">
                <Shield className="w-6 h-6 text-wine" strokeWidth={1.2} />
              </div>
              <div>
                <h3 className="font-serif italic text-lg text-wine mb-2">Made to Last</h3>
                <p className="text-[0.7rem] text-blue-deep leading-relaxed">
                  The most sustainable product is one that lasts. We design our pieces with longevity in mind — using high-quality materials, secure settings, and timeless designs that transcend trends. We also offer a lifetime repair service, because we believe in keeping your jewellery in your life, not in a landfill.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t border-blue-mid/15 pt-8">
            <p className="text-[0.45rem] tracking-[3px] uppercase text-blue-mid text-center mb-6">
              Our Certifications
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-blue-mid/30 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-[0.5rem] tracking-[1px] text-wine font-medium">RJC</span>
                </div>
                <p className="text-[0.5rem] text-blue-mid">Responsible Jewellery Council</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-blue-mid/30 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-[0.5rem] tracking-[1px] text-wine font-medium">B Corp</span>
                </div>
                <p className="text-[0.5rem] text-blue-mid">Certified B Corporation</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-blue-mid/30 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-[0.5rem] tracking-[1px] text-wine font-medium">1%</span>
                </div>
                <p className="text-[0.5rem] text-blue-mid">1% for the Planet</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-wine/5 p-8 text-center">
            <p className="font-serif italic text-lg text-wine leading-relaxed">
              &ldquo;Luxury should not be a burden — not to those who wear it, and not to the world we share.&rdquo;
            </p>
            <p className="text-[0.5rem] tracking-[2px] uppercase text-blue-mid mt-4">
              — The Azurél Founders
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
