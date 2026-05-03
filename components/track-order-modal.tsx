"use client"

import { useState, type FormEvent } from "react"
import { X, Package, Truck, CheckCircle, Clock, Search, MapPin } from "lucide-react"

interface TrackOrderModalProps {
  isOpen: boolean
  onClose: () => void
}

type OrderStatus = "processing" | "shipped" | "in-transit" | "delivered" | null

interface OrderDetails {
  orderNumber: string
  status: OrderStatus
  estimatedDelivery: string
  items: string[]
  shippingAddress: string
  carrier: string
  trackingNumber: string
  updates: { date: string; status: string; location: string }[]
}

export function TrackOrderModal({ isOpen, onClose }: TrackOrderModalProps) {
  const [orderNumber, setOrderNumber] = useState("")
  const [email, setEmail] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setError("")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Demo: Show sample order for specific input
    if (orderNumber.toLowerCase().includes("az") || orderNumber === "12345") {
      setOrderDetails({
        orderNumber: orderNumber.toUpperCase() || "AZ-2025-00847",
        status: "in-transit",
        estimatedDelivery: "January 28, 2025",
        items: ["Ciel Pendant - Sterling Silver", "Étoile Flower Studs - Gold Vermeil"],
        shippingAddress: "Maria Schmidt\n123 Ringstrasse\n1010 Vienna, Austria",
        carrier: "DHL Express",
        trackingNumber: "1234567890",
        updates: [
          { date: "Jan 25, 14:32", status: "In Transit", location: "Vienna Distribution Center" },
          { date: "Jan 24, 09:15", status: "Departed Facility", location: "Vienna Airport" },
          { date: "Jan 23, 16:45", status: "Shipped", location: "Azurél Atelier, Vienna" },
          { date: "Jan 22, 11:20", status: "Order Confirmed", location: "Online" },
        ]
      })
    } else {
      setError("No order found with these details. Please check your order number and email address.")
      setOrderDetails(null)
    }
    
    setIsSearching(false)
  }

  const resetSearch = () => {
    setOrderDetails(null)
    setOrderNumber("")
    setEmail("")
    setError("")
  }

  if (!isOpen) return null

  const statusSteps = [
    { key: "processing", label: "Processing", icon: Clock },
    { key: "shipped", label: "Shipped", icon: Package },
    { key: "in-transit", label: "In Transit", icon: Truck },
    { key: "delivered", label: "Delivered", icon: CheckCircle },
  ]

  const getStatusIndex = (status: OrderStatus) => {
    return statusSteps.findIndex(s => s.key === status)
  }

  return (
    <div className="fixed inset-0 z-[1001] flex items-start justify-center overflow-y-auto bg-wine-deep/40 backdrop-blur-sm p-4 md:p-8">
      <div 
        className="relative w-full max-w-[600px] bg-ivory my-8 animate-in fade-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-ivory border-b border-blue-mid/20 px-6 md:px-10 py-6 flex items-center justify-between z-10">
          <div>
            <span className="text-[0.4rem] font-extralight tracking-[4px] uppercase text-blue-mid block mb-1">
              Order Tracking
            </span>
            <h2 className="font-serif italic font-light text-2xl text-wine">
              Track Your Order
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-blue-mid hover:text-wine transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" strokeWidth={1.2} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-10 py-8">
          {!orderDetails ? (
            <>
              <p className="text-[0.7rem] tracking-[1px] text-blue-deep leading-relaxed mb-8">
                Enter your order number and email address to track the status of your Azurél order.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid block mb-2">
                    Order Number
                  </label>
                  <input
                    type="text"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="e.g., AZ-2025-00847"
                    required
                    className="w-full font-serif italic text-base text-wine-deep bg-transparent border-b border-blue-mid/40 px-0 py-3 outline-none focus:border-wine transition-colors placeholder:text-blue-mid/50"
                  />
                </div>

                <div>
                  <label className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="The email used for your order"
                    required
                    className="w-full font-serif italic text-base text-wine-deep bg-transparent border-b border-blue-mid/40 px-0 py-3 outline-none focus:border-wine transition-colors placeholder:text-blue-mid/50"
                  />
                </div>

                {error && (
                  <p className="text-[0.6rem] text-wine bg-wine/5 px-4 py-3 border border-wine/20">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSearching}
                  className="w-full flex items-center justify-center gap-2 text-[0.42rem] tracking-[3px] uppercase text-ivory bg-wine px-8 py-4 hover:bg-wine-deep transition-colors disabled:opacity-70"
                >
                  {isSearching ? (
                    <>
                      <span className="w-4 h-4 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" strokeWidth={1.5} />
                      Track Order
                    </>
                  )}
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-blue-mid/15">
                <p className="text-[0.55rem] tracking-[1px] text-blue-mid text-center">
                  Can&apos;t find your order? Contact our concierge team at{" "}
                  <a href="mailto:concierge@azurel.at" className="text-wine hover:underline">
                    concierge@azurel.at
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Order Found - Status Display */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[0.5rem] tracking-[2px] uppercase text-blue-mid mb-1">Order Number</p>
                    <p className="font-serif italic text-lg text-wine">{orderDetails.orderNumber}</p>
                  </div>
                  <button
                    onClick={resetSearch}
                    className="text-[0.4rem] tracking-[2px] uppercase text-blue-mid hover:text-wine transition-colors"
                  >
                    Track Another
                  </button>
                </div>

                {/* Status Progress */}
                <div className="relative mb-8">
                  <div className="absolute top-4 left-0 right-0 h-[2px] bg-blue-mid/20" />
                  <div 
                    className="absolute top-4 left-0 h-[2px] bg-wine transition-all duration-500"
                    style={{ width: `${(getStatusIndex(orderDetails.status) / (statusSteps.length - 1)) * 100}%` }}
                  />
                  <div className="relative flex justify-between">
                    {statusSteps.map((step, index) => {
                      const isActive = index <= getStatusIndex(orderDetails.status)
                      const Icon = step.icon
                      return (
                        <div key={step.key} className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                            isActive ? "bg-wine text-ivory" : "bg-blue-lt text-blue-mid"
                          }`}>
                            <Icon className="w-4 h-4" strokeWidth={1.5} />
                          </div>
                          <span className={`text-[0.4rem] tracking-[1px] uppercase mt-2 ${
                            isActive ? "text-wine" : "text-blue-mid/60"
                          }`}>
                            {step.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Estimated Delivery */}
                <div className="bg-blue-lt/40 p-5 mb-6">
                  <p className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid mb-1">Estimated Delivery</p>
                  <p className="font-serif italic text-xl text-wine">{orderDetails.estimatedDelivery}</p>
                </div>

                {/* Order Details */}
                <div className="space-y-5 mb-8">
                  <div>
                    <p className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid mb-2">Items</p>
                    {orderDetails.items.map((item, i) => (
                      <p key={i} className="text-[0.7rem] text-blue-deep">{item}</p>
                    ))}
                  </div>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid mb-2">Carrier</p>
                      <p className="text-[0.7rem] text-blue-deep">{orderDetails.carrier}</p>
                    </div>
                    <div>
                      <p className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid mb-2">Tracking Number</p>
                      <p className="text-[0.7rem] text-wine font-mono">{orderDetails.trackingNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <p className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid mb-4">Tracking History</p>
                  <div className="space-y-0 border-l-2 border-blue-mid/20 ml-2">
                    {orderDetails.updates.map((update, i) => (
                      <div key={i} className="relative pl-6 pb-5 last:pb-0">
                        <div className={`absolute left-[-5px] top-0 w-2 h-2 rounded-full ${
                          i === 0 ? "bg-wine" : "bg-blue-mid/40"
                        }`} />
                        <p className="text-[0.5rem] text-blue-mid mb-1">{update.date}</p>
                        <p className="text-[0.7rem] text-wine-deep font-medium mb-0.5">{update.status}</p>
                        <p className="text-[0.6rem] text-blue-mid flex items-center gap-1">
                          <MapPin className="w-3 h-3" strokeWidth={1.5} />
                          {update.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
