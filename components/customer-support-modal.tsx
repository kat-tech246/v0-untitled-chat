"use client"

import { useState, type FormEvent } from "react"
import { X, MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

interface CustomerSupportModalProps {
  isOpen: boolean
  onClose: () => void
}

const supportTopics = [
  "Order Status & Tracking",
  "Returns & Exchanges",
  "Product Information",
  "Sizing Assistance",
  "Custom Orders",
  "Repairs & Care",
  "Payment Issues",
  "Other Inquiry"
]

export function CustomerSupportModal({ isOpen, onClose }: CustomerSupportModalProps) {
  const [activeTab, setActiveTab] = useState<"contact" | "form">("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    topic: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setFormData({ name: "", email: "", orderNumber: "", topic: "", message: "" })
    setIsSubmitted(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[1001] flex items-start justify-center overflow-y-auto bg-wine-deep/40 backdrop-blur-sm p-4 md:p-8">
      <div 
        className="relative w-full max-w-[700px] bg-ivory my-8 animate-in fade-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-ivory border-b border-blue-mid/20 px-6 md:px-10 py-6 flex items-center justify-between z-10">
          <div>
            <span className="text-[0.4rem] font-extralight tracking-[4px] uppercase text-blue-mid block mb-1">
              Help &amp; Support
            </span>
            <h2 className="font-serif italic font-light text-2xl text-wine">
              Customer Support
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

        {/* Tabs */}
        <div className="flex border-b border-blue-mid/15">
          <button
            onClick={() => setActiveTab("contact")}
            className={`flex-1 py-4 text-[0.45rem] tracking-[2px] uppercase transition-colors ${
              activeTab === "contact" 
                ? "text-wine border-b-2 border-wine" 
                : "text-blue-mid hover:text-wine"
            }`}
          >
            Contact Info
          </button>
          <button
            onClick={() => setActiveTab("form")}
            className={`flex-1 py-4 text-[0.45rem] tracking-[2px] uppercase transition-colors ${
              activeTab === "form" 
                ? "text-wine border-b-2 border-wine" 
                : "text-blue-mid hover:text-wine"
            }`}
          >
            Send Message
          </button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-10 py-8">
          {activeTab === "contact" ? (
            <>
              <p className="text-[0.7rem] tracking-[1px] text-blue-deep leading-relaxed mb-8">
                Our dedicated concierge team is here to assist you with any questions about your order, 
                our products, or any other inquiries. We pride ourselves on providing exceptional service.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {/* Phone */}
                <div className="bg-blue-lt/30 p-6">
                  <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5 text-wine" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif italic text-lg text-wine mb-2">Call Us</h4>
                  <p className="text-[0.8rem] text-wine-deep font-medium mb-2">+43 1 512 00 00</p>
                  <p className="text-[0.55rem] tracking-[1px] text-blue-mid">
                    Monday - Saturday<br />
                    10:00 - 19:00 CET
                  </p>
                </div>

                {/* Email */}
                <div className="bg-blue-lt/30 p-6">
                  <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5 text-wine" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif italic text-lg text-wine mb-2">Email Us</h4>
                  <a href="mailto:concierge@azurel.at" className="text-[0.8rem] text-wine-deep font-medium hover:underline block mb-2">
                    concierge@azurel.at
                  </a>
                  <p className="text-[0.55rem] tracking-[1px] text-blue-mid">
                    Response within<br />
                    24 hours
                  </p>
                </div>

                {/* Live Chat */}
                <div className="bg-blue-lt/30 p-6">
                  <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mb-4">
                    <MessageCircle className="w-5 h-5 text-wine" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif italic text-lg text-wine mb-2">Live Chat</h4>
                  <button className="text-[0.42rem] tracking-[2px] uppercase text-ivory bg-wine px-5 py-2.5 hover:bg-wine-deep transition-colors mb-2">
                    Start Chat
                  </button>
                  <p className="text-[0.55rem] tracking-[1px] text-blue-mid">
                    Available during<br />
                    business hours
                  </p>
                </div>

                {/* Visit */}
                <div className="bg-blue-lt/30 p-6">
                  <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-wine" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif italic text-lg text-wine mb-2">Visit Us</h4>
                  <p className="text-[0.7rem] text-blue-deep mb-2">
                    Karntner Strasse 16<br />
                    1010 Vienna, Austria
                  </p>
                  <p className="text-[0.55rem] tracking-[1px] text-blue-mid">
                    By appointment<br />
                    recommended
                  </p>
                </div>
              </div>

              {/* Response Times */}
              <div className="border-t border-blue-mid/15 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-wine" strokeWidth={1.5} />
                  <h4 className="text-[0.5rem] tracking-[2px] uppercase text-blue-mid">Expected Response Times</h4>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-serif italic text-xl text-wine mb-1">2 hrs</p>
                    <p className="text-[0.5rem] tracking-[1px] text-blue-mid">Phone</p>
                  </div>
                  <div>
                    <p className="font-serif italic text-xl text-wine mb-1">24 hrs</p>
                    <p className="text-[0.5rem] tracking-[1px] text-blue-mid">Email</p>
                  </div>
                  <div>
                    <p className="font-serif italic text-xl text-wine mb-1">Instant</p>
                    <p className="text-[0.5rem] tracking-[1px] text-blue-mid">Live Chat</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-wine" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif italic text-2xl text-wine mb-3">
                    Message Received
                  </h3>
                  <p className="text-[0.7rem] tracking-[1px] text-blue-deep leading-relaxed mb-8 max-w-sm mx-auto">
                    Thank you for contacting us. A member of our concierge team will respond within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-[0.42rem] tracking-[3px] uppercase text-wine border border-wine px-8 py-3 hover:bg-wine hover:text-ivory transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-[0.7rem] tracking-[1px] text-blue-deep leading-relaxed mb-8">
                    Send us a message and our concierge team will respond within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid block mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full font-serif italic text-base text-wine-deep bg-transparent border-b border-blue-mid/40 px-0 py-3 outline-none focus:border-wine transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid block mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full font-serif italic text-base text-wine-deep bg-transparent border-b border-blue-mid/40 px-0 py-3 outline-none focus:border-wine transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid block mb-2">
                          Order Number (if applicable)
                        </label>
                        <input
                          type="text"
                          value={formData.orderNumber}
                          onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                          placeholder="e.g., AZ-2025-00847"
                          className="w-full font-serif italic text-base text-wine-deep bg-transparent border-b border-blue-mid/40 px-0 py-3 outline-none focus:border-wine transition-colors placeholder:text-blue-mid/50"
                        />
                      </div>
                      <div>
                        <label className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid block mb-2">
                          Topic *
                        </label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          required
                          className="w-full font-serif italic text-base text-wine-deep bg-transparent border-b border-blue-mid/40 px-0 py-3 outline-none focus:border-wine transition-colors"
                        >
                          <option value="">Select a topic</option>
                          {supportTopics.map(topic => (
                            <option key={topic} value={topic}>{topic}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[0.45rem] tracking-[2px] uppercase text-blue-mid block mb-2">
                        Your Message *
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        placeholder="Please describe how we can assist you..."
                        className="w-full font-serif italic text-base text-wine-deep bg-transparent border border-blue-mid/40 px-4 py-3 outline-none focus:border-wine transition-colors placeholder:text-blue-mid/50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 text-[0.42rem] tracking-[3px] uppercase text-ivory bg-wine px-8 py-4 hover:bg-wine-deep transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" strokeWidth={1.5} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
