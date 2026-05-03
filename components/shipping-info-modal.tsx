"use client"

import { useEffect } from "react"
import { X, Truck, RotateCcw, Package, Globe } from "lucide-react"

interface ShippingInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ShippingInfoModal({ isOpen, onClose }: ShippingInfoModalProps) {
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

  const shippingInfo = [
    {
      icon: Globe,
      title: "Worldwide Delivery",
      description: "We ship to over 100 countries worldwide. All orders are fully insured and trackable.",
    },
    {
      icon: Truck,
      title: "Complimentary Shipping",
      description: "Free express shipping on all orders. No minimum purchase required.",
    },
    {
      icon: Package,
      title: "Signature Packaging",
      description: "Every piece arrives in our elegant gift box, wrapped and ready to give.",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day returns on all unworn items. We provide prepaid return labels.",
    },
  ]

  const deliveryTimes = [
    { region: "Austria", time: "1-2 business days" },
    { region: "European Union", time: "3-5 business days" },
    { region: "United Kingdom", time: "4-6 business days" },
    { region: "United States & Canada", time: "5-8 business days" },
    { region: "Rest of World", time: "7-14 business days" },
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
          aria-label="Close shipping info"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        <div className="p-10 md:p-12">
          <span className="text-[0.4rem] tracking-[4px] uppercase text-blue-mid block mb-2">
            Azurel Service
          </span>
          <h2 className="font-serif italic font-light text-3xl text-wine mb-8">
            Shipping & Returns
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {shippingInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-blue-lt/30 border-l-2 border-wine">
                <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-wine" strokeWidth={1.2} />
                </div>
                <div>
                  <span className="font-serif italic text-base text-wine block mb-2">
                    {item.title}
                  </span>
                  <p className="text-[0.4rem] tracking-[1px] text-blue-deep leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Times */}
          <div className="mb-8">
            <h3 className="font-serif italic text-xl text-wine mb-4">
              Estimated Delivery Times
            </h3>
            <div className="border border-blue-mid/20">
              {deliveryTimes.map((item, index) => (
                <div 
                  key={item.region} 
                  className={`flex justify-between items-center py-4 px-5 ${
                    index !== deliveryTimes.length - 1 ? "border-b border-blue-mid/15" : ""
                  }`}
                >
                  <span className="text-[0.42rem] tracking-[2px] text-wine-deep">{item.region}</span>
                  <span className="text-[0.4rem] tracking-[1px] text-blue-mid">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Returns Policy */}
          <div className="p-6 bg-wine text-ivory">
            <h3 className="font-serif italic text-xl mb-3">Returns Policy</h3>
            <p className="text-[0.42rem] tracking-[1px] leading-relaxed opacity-85 mb-4">
              We want you to love your Azurel piece. If for any reason you&apos;re not completely satisfied, 
              you may return unworn items within 30 days of delivery for a full refund.
            </p>
            <ul className="text-[0.4rem] tracking-[1px] space-y-2 opacity-75">
              <li>- Items must be unworn and in original packaging</li>
              <li>- Personalized pieces are final sale</li>
              <li>- Refunds processed within 5-7 business days</li>
              <li>- Contact concierge@azurel.at to initiate a return</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8 text-center">
            <p className="text-[0.4rem] tracking-[1px] text-blue-mid mb-2">
              Questions about your order?
            </p>
            <a 
              href="mailto:concierge@azurel.at" 
              className="font-serif italic text-base text-wine hover:text-blue-deep transition-colors"
            >
              concierge@azurel.at
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
