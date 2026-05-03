"use client"

import { useState } from "react"
import { X, ChevronDown } from "lucide-react"

interface FAQModalProps {
  isOpen: boolean
  onClose: () => void
}

const faqCategories = [
  {
    title: "Ordering & Payment",
    items: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and bank transfers. All transactions are secured with SSL encryption."
      },
      {
        question: "Can I modify or cancel my order?",
        answer: "Orders can be modified or cancelled within 2 hours of placement. Please contact our concierge team immediately at concierge@azurel.at. Once an order enters production, modifications are no longer possible."
      },
      {
        question: "Do you offer gift wrapping?",
        answer: "Yes, every Azurél piece arrives in our signature presentation box with ribbon and a handwritten note card. Complimentary gift wrapping is included with all orders."
      },
      {
        question: "Can I purchase a gift card?",
        answer: "Yes, we offer digital gift cards in denominations of €100, €250, €500, and €1000. Gift cards are delivered via email and never expire."
      }
    ]
  },
  {
    title: "Shipping & Delivery",
    items: [
      {
        question: "How long does shipping take?",
        answer: "Standard shipping within Austria takes 2-3 business days. European delivery is 3-5 business days. International shipping to the US and Asia takes 5-7 business days. Express options are available at checkout."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship worldwide. All international orders are fully insured and include tracking. Import duties and taxes may apply depending on your country."
      },
      {
        question: "Is shipping insured?",
        answer: "All Azurél shipments are fully insured against loss and damage. We partner with secure couriers and require signature confirmation for all deliveries."
      }
    ]
  },
  {
    title: "Returns & Exchanges",
    items: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for unworn items in original packaging. Items must be returned in the same condition as received. Custom or engraved pieces cannot be returned."
      },
      {
        question: "How do I initiate a return?",
        answer: "Contact our concierge team at concierge@azurel.at with your order number. We will provide a prepaid return label and process your refund within 5-7 business days of receiving the item."
      },
      {
        question: "Can I exchange for a different size?",
        answer: "Yes, we offer complimentary exchanges within 30 days. Contact our team to arrange the exchange. We recommend using our sizing guide to find your perfect fit before ordering."
      }
    ]
  },
  {
    title: "Product & Care",
    items: [
      {
        question: "What materials do you use?",
        answer: "Our pieces are crafted with premium moissanite, AAA-grade cubic zirconia, and 18k gold vermeil (2.5 microns of 18k gold over sterling silver). We never use nickel or other harmful alloys."
      },
      {
        question: "How should I care for my jewellery?",
        answer: "Store pieces in the provided box away from moisture. Remove before swimming, showering, or exercising. Clean gently with a soft cloth. Avoid contact with perfumes, lotions, and chemicals."
      },
      {
        question: "Do you offer repairs?",
        answer: "Yes, we offer complimentary cleaning and inspection for life. Repairs are available at cost, typically €25-75 depending on the service required. Contact our atelier to arrange."
      },
      {
        question: "Are your pieces hypoallergenic?",
        answer: "Yes, all Azurél pieces are nickel-free and hypoallergenic. Our sterling silver and gold vermeil are safe for sensitive skin."
      }
    ]
  },
  {
    title: "Custom Orders",
    items: [
      {
        question: "Do you offer custom designs?",
        answer: "Yes, our atelier accepts custom commissions. Consultations begin at €150 (applied to your order). Custom pieces typically take 4-8 weeks to complete."
      },
      {
        question: "Can I request engraving?",
        answer: "We offer complimentary engraving on select pieces - up to 15 characters. Engraved items cannot be returned but may be exchanged for the same item with different engraving."
      }
    ]
  }
]

export function FAQModal({ isOpen, onClose }: FAQModalProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[1001] flex items-start justify-center overflow-y-auto bg-wine-deep/40 backdrop-blur-sm p-4 md:p-8">
      <div 
        className="relative w-full max-w-[800px] bg-ivory my-8 animate-in fade-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-ivory border-b border-blue-mid/20 px-6 md:px-10 py-6 flex items-center justify-between z-10">
          <div>
            <span className="text-[0.4rem] font-extralight tracking-[4px] uppercase text-blue-mid block mb-1">
              Help Centre
            </span>
            <h2 className="font-serif italic font-light text-2xl text-wine">
              Frequently Asked Questions
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
          <p className="text-[0.7rem] tracking-[1px] text-blue-deep leading-relaxed mb-10">
            Find answers to common questions about ordering, shipping, returns, and caring for your Azurél pieces. 
            If you need further assistance, our concierge team is available Monday to Saturday, 10:00 - 19:00 CET.
          </p>

          {faqCategories.map((category, catIndex) => (
            <div key={category.title} className="mb-8 last:mb-0">
              <h3 className="text-[0.5rem] font-extralight tracking-[4px] uppercase text-wine mb-4 pb-2 border-b border-blue-mid/15">
                {category.title}
              </h3>
              <div className="space-y-1">
                {category.items.map((item, itemIndex) => {
                  const id = `${catIndex}-${itemIndex}`
                  const isOpenItem = openItems.includes(id)
                  return (
                    <div key={id} className="border-b border-blue-mid/10 last:border-b-0">
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none group"
                      >
                        <span className="font-serif italic text-base text-wine-deep group-hover:text-wine transition-colors pr-4">
                          {item.question}
                        </span>
                        <ChevronDown 
                          className={`w-4 h-4 text-blue-mid flex-shrink-0 transition-transform duration-300 ${isOpenItem ? "rotate-180" : ""}`}
                          strokeWidth={1.5}
                        />
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpenItem ? "max-h-[300px] opacity-100 pb-4" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-[0.65rem] tracking-[0.5px] text-blue-deep leading-[1.8] pl-0 pr-8">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-10 pt-8 border-t border-blue-mid/20 text-center">
            <p className="font-serif italic text-lg text-wine mb-2">
              Still have questions?
            </p>
            <p className="text-[0.6rem] tracking-[1px] text-blue-mid mb-5">
              Our concierge team is here to help
            </p>
            <a 
              href="mailto:concierge@azurel.at"
              className="inline-block text-[0.42rem] tracking-[3px] uppercase text-ivory bg-wine px-8 py-3 hover:bg-wine-deep transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
