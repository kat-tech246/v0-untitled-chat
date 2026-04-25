"use client"

import { useEffect } from "react"
import { X, Droplets, Sun, Sparkles, Heart } from "lucide-react"

interface CareGuideModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CareGuideModal({ isOpen, onClose }: CareGuideModalProps) {
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

  if (!isOpen) return null

  const careTips = [
    {
      icon: Droplets,
      title: "Avoid Water & Moisture",
      tips: [
        "Remove jewellery before swimming, showering, or washing hands",
        "Pat dry immediately if your piece gets wet",
        "Store in a dry environment away from humidity",
      ],
    },
    {
      icon: Sun,
      title: "Protect from Elements",
      tips: [
        "Keep away from direct sunlight when storing",
        "Avoid contact with perfumes, lotions, and hairspray",
        "Apply cosmetics before putting on your jewellery",
      ],
    },
    {
      icon: Sparkles,
      title: "Cleaning Your Pieces",
      tips: [
        "Use a soft, lint-free cloth to gently polish",
        "For deeper cleaning, use mild soap and lukewarm water",
        "Dry thoroughly with a soft cloth after cleaning",
      ],
    },
    {
      icon: Heart,
      title: "Storage & Handling",
      tips: [
        "Store pieces separately to prevent scratching",
        "Use the Azurel pouch or box provided",
        "Put on jewellery last and remove it first",
      ],
    },
  ]

  const materialGuide = [
    {
      material: "18K Gold Plating",
      care: "Our gold plating is designed to last beautifully with proper care. Avoid harsh chemicals and store separately.",
    },
    {
      material: "Moissanite",
      care: "Nearly as hard as diamond, moissanite is durable and brilliant. Clean with mild soap and water for maximum sparkle.",
    },
    {
      material: "Zirconium",
      care: "Zirconium stones are scratch-resistant and hypoallergenic. Polish regularly with a soft cloth to maintain brilliance.",
    },
  ]

  return (
    <div 
      className="fixed inset-0 bg-wine-deep/50 z-[2000] flex items-center justify-center p-5 backdrop-blur-[4px]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-ivory max-w-[700px] w-full max-h-[90vh] overflow-y-auto relative shadow-[0_40px_100px_rgba(58,10,17,0.3)]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-transparent border-none text-blue-mid hover:text-wine transition-colors z-10"
          aria-label="Close care guide"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        <div className="p-10 md:p-12">
          <span className="text-[0.4rem] tracking-[4px] uppercase text-blue-mid block mb-2">
            Azurel Guide
          </span>
          <h2 className="font-serif italic font-light text-3xl text-wine mb-4">
            Jewellery Care
          </h2>
          <p className="font-serif text-base text-blue-deep leading-relaxed mb-10">
            With proper care, your Azurel pieces will maintain their beauty for years to come. 
            Follow these guidelines to keep your jewellery looking radiant.
          </p>

          {/* Care Tips */}
          <div className="space-y-8 mb-10">
            {careTips.map((section) => (
              <div key={section.title} className="border-b border-blue-mid/15 pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-lt flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-wine" strokeWidth={1.2} />
                  </div>
                  <h3 className="font-serif italic text-xl text-wine">{section.title}</h3>
                </div>
                <ul className="space-y-2 pl-16">
                  {section.tips.map((tip, index) => (
                    <li key={index} className="text-[0.42rem] tracking-[1px] text-blue-deep leading-relaxed flex items-start gap-3">
                      <span className="text-wine mt-1">-</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Material Guide */}
          <div className="bg-wine p-8 text-ivory mb-8">
            <h3 className="font-serif italic text-xl mb-6">Material Guide</h3>
            <div className="space-y-6">
              {materialGuide.map((item) => (
                <div key={item.material}>
                  <span className="text-[0.44rem] tracking-[3px] uppercase text-blue-lt block mb-2">
                    {item.material}
                  </span>
                  <p className="text-[0.42rem] tracking-[1px] leading-relaxed opacity-85">
                    {item.care}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lifetime Care */}
          <div className="text-center p-6 bg-blue-lt/40 border border-blue-mid/20">
            <h4 className="font-serif italic text-lg text-wine mb-3">Lifetime Care Promise</h4>
            <p className="text-[0.4rem] tracking-[1px] text-blue-deep leading-relaxed max-w-md mx-auto">
              All Azurel pieces come with complimentary cleaning and inspection services. 
              Visit our Vienna atelier or contact us to arrange care for your jewellery.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-8 text-center">
            <p className="text-[0.4rem] tracking-[1px] text-blue-mid mb-2">
              Need assistance with your piece?
            </p>
            <a 
              href="mailto:care@azurel.at" 
              className="font-serif italic text-base text-wine hover:text-blue-deep transition-colors"
            >
              care@azurel.at
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
