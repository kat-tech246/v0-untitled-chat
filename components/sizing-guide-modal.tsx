"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface SizingGuideModalProps {
  isOpen: boolean
  onClose: () => void
}

type TabType = "rings" | "necklaces" | "bracelets"

export function SizingGuideModal({ isOpen, onClose }: SizingGuideModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("rings")

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

  const ringSizes = [
    { eu: "48", us: "4.5", uk: "I", diameter: "15.3mm" },
    { eu: "50", us: "5.5", uk: "K", diameter: "15.9mm" },
    { eu: "52", us: "6", uk: "L", diameter: "16.5mm" },
    { eu: "54", us: "7", uk: "N", diameter: "17.2mm" },
    { eu: "56", us: "7.5", uk: "O", diameter: "17.8mm" },
    { eu: "58", us: "8.5", uk: "Q", diameter: "18.5mm" },
    { eu: "60", us: "9", uk: "R", diameter: "19.1mm" },
  ]

  const necklaceLengths = [
    { name: "Choker", length: "35-40cm / 14-16\"", style: "Sits close to the neck" },
    { name: "Princess", length: "43-48cm / 17-19\"", style: "Falls at the collarbone" },
    { name: "Matinee", length: "50-60cm / 20-24\"", style: "Falls between collarbone and bust" },
    { name: "Opera", length: "70-90cm / 28-36\"", style: "Falls at or below the bust" },
  ]

  const braceletSizes = [
    { size: "S", wrist: "14-15.5cm / 5.5-6\"", description: "Petite fit" },
    { size: "M", wrist: "16-17.5cm / 6.3-6.9\"", description: "Standard fit" },
    { size: "L", wrist: "18-19.5cm / 7-7.7\"", description: "Relaxed fit" },
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
          aria-label="Close sizing guide"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        <div className="p-10 md:p-12">
          <span className="text-[0.4rem] tracking-[4px] uppercase text-blue-mid block mb-2">
            Azurel Guide
          </span>
          <h2 className="font-serif italic font-light text-3xl text-wine mb-6">
            Sizing Guide
          </h2>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b border-blue-mid/20 pb-4">
            {(["rings", "necklaces", "bracelets"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[0.4rem] font-light tracking-[3px] uppercase px-5 py-2 border transition-all ${
                  activeTab === tab
                    ? "bg-wine border-wine text-ivory"
                    : "bg-transparent border-blue-mid/35 text-blue-mid hover:border-wine hover:text-wine"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Ring Sizes */}
          {activeTab === "rings" && (
            <div>
              <p className="font-serif text-base text-blue-deep leading-relaxed mb-6">
                Find your perfect ring size using our conversion chart. For the most accurate fit, 
                we recommend measuring your finger at the end of the day when it&apos;s at its largest.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-blue-mid/30">
                      <th className="text-left text-[0.38rem] tracking-[3px] uppercase text-blue-mid py-3 pr-4">EU</th>
                      <th className="text-left text-[0.38rem] tracking-[3px] uppercase text-blue-mid py-3 pr-4">US</th>
                      <th className="text-left text-[0.38rem] tracking-[3px] uppercase text-blue-mid py-3 pr-4">UK</th>
                      <th className="text-left text-[0.38rem] tracking-[3px] uppercase text-blue-mid py-3">Diameter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ringSizes.map((size) => (
                      <tr key={size.eu} className="border-b border-blue-mid/15">
                        <td className="py-3 pr-4 font-serif italic text-wine">{size.eu}</td>
                        <td className="py-3 pr-4 text-[0.42rem] tracking-[1px] text-wine-deep">{size.us}</td>
                        <td className="py-3 pr-4 text-[0.42rem] tracking-[1px] text-wine-deep">{size.uk}</td>
                        <td className="py-3 text-[0.42rem] tracking-[1px] text-blue-mid">{size.diameter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-5 bg-blue-lt/40 border-l-2 border-wine">
                <p className="text-[0.4rem] tracking-[1px] text-blue-deep leading-relaxed">
                  <strong className="text-wine">Tip:</strong> If you&apos;re between sizes, we recommend sizing up. 
                  All Azurel rings are designed with a comfortable band width.
                </p>
              </div>
            </div>
          )}

          {/* Necklace Lengths */}
          {activeTab === "necklaces" && (
            <div>
              <p className="font-serif text-base text-blue-deep leading-relaxed mb-6">
                Our necklaces are crafted in various lengths to complement different necklines and styles. 
                Choose the length that best suits your look.
              </p>
              <div className="space-y-4">
                {necklaceLengths.map((length) => (
                  <div key={length.name} className="flex items-start gap-6 py-4 border-b border-blue-mid/15">
                    <div className="min-w-[100px]">
                      <span className="font-serif italic text-lg text-wine">{length.name}</span>
                    </div>
                    <div>
                      <span className="text-[0.44rem] tracking-[2px] text-wine-deep block mb-1">{length.length}</span>
                      <span className="text-[0.4rem] tracking-[1px] text-blue-mid">{length.style}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-5 bg-blue-lt/40 border-l-2 border-wine">
                <p className="text-[0.4rem] tracking-[1px] text-blue-deep leading-relaxed">
                  <strong className="text-wine">Adjustable:</strong> Many of our necklaces feature an adjustable chain, 
                  allowing you to customize the length for different occasions.
                </p>
              </div>
            </div>
          )}

          {/* Bracelet Sizes */}
          {activeTab === "bracelets" && (
            <div>
              <p className="font-serif text-base text-blue-deep leading-relaxed mb-6">
                To find your bracelet size, measure around your wrist with a flexible tape measure, 
                then add 1-2cm for a comfortable fit.
              </p>
              <div className="space-y-4">
                {braceletSizes.map((size) => (
                  <div key={size.size} className="flex items-center gap-6 py-4 border-b border-blue-mid/15">
                    <div className="w-12 h-12 rounded-full bg-wine flex items-center justify-center">
                      <span className="font-serif italic text-xl text-ivory">{size.size}</span>
                    </div>
                    <div>
                      <span className="text-[0.44rem] tracking-[2px] text-wine-deep block mb-1">{size.wrist}</span>
                      <span className="text-[0.4rem] tracking-[1px] text-blue-mid">{size.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-5 bg-blue-lt/40 border-l-2 border-wine">
                <p className="text-[0.4rem] tracking-[1px] text-blue-deep leading-relaxed">
                  <strong className="text-wine">Bangle bracelets:</strong> For bangles, measure the widest part of your hand 
                  (knuckles) to ensure it can slip over comfortably.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
