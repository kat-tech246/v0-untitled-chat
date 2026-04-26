"use client"

import { X } from "lucide-react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
              Legal
            </span>
            <h2 className="font-serif italic font-light text-2xl text-wine">
              Terms &amp; Conditions
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
        <div className="px-6 md:px-10 py-8 text-[0.7rem] tracking-[0.5px] text-blue-deep leading-[1.9]">
          <p className="mb-6 text-[0.6rem] text-blue-mid">
            Effective Date: January 2025
          </p>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">1. Agreement to Terms</h3>
            <p>
              By accessing or using the Azurél website (azurel.at) and purchasing our products, you agree to be bound by 
              these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">2. Products and Pricing</h3>
            <p className="mb-3">
              All products displayed on our website are subject to availability. We reserve the right to discontinue 
              any product at any time without notice.
            </p>
            <p className="mb-3">
              Prices are displayed in Euros (EUR) and include applicable VAT for EU customers. Prices are subject to 
              change without notice, but changes will not affect orders already placed.
            </p>
            <p>
              We make every effort to display product colours and details accurately. However, we cannot guarantee 
              that your device&apos;s display will accurately reflect the actual product appearance.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">3. Orders and Payment</h3>
            <p className="mb-3">
              By placing an order, you confirm that all information provided is accurate and complete. We reserve the 
              right to refuse or cancel any order for any reason, including suspected fraud.
            </p>
            <p className="mb-3">
              Payment is processed securely through Stripe. We accept Visa, Mastercard, American Express, PayPal, 
              and Apple Pay. Your payment information is encrypted and never stored on our servers.
            </p>
            <p>
              Orders are confirmed via email upon successful payment processing. This confirmation constitutes 
              acceptance of your order and forms a binding contract.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">4. Shipping and Delivery</h3>
            <p className="mb-3">
              We offer worldwide shipping. Delivery times are estimates and not guaranteed. Azurél is not responsible 
              for delays caused by customs, weather, or carrier issues.
            </p>
            <p className="mb-3">
              Risk of loss and title for items pass to you upon delivery. All shipments are insured against loss 
              and damage during transit.
            </p>
            <p>
              International customers are responsible for any import duties, taxes, or customs fees. These charges 
              are not included in our prices.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">5. Returns and Refunds</h3>
            <p className="mb-3">
              We accept returns within 30 days of delivery for unworn items in original packaging. Items must be 
              in the same condition as received.
            </p>
            <p className="mb-3">
              Custom, engraved, or personalised items cannot be returned unless defective. Sale items are final sale.
            </p>
            <p>
              Refunds are processed within 5-7 business days of receiving the returned item. Original shipping 
              costs are non-refundable. We provide prepaid return labels for EU customers.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">6. Product Warranty</h3>
            <p className="mb-3">
              All Azurél pieces come with a 2-year warranty against manufacturing defects. This warranty does not 
              cover normal wear and tear, damage from misuse, or alterations by third parties.
            </p>
            <p>
              We offer complimentary cleaning and inspection for the lifetime of your piece. Repairs outside 
              warranty coverage are available at cost.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">7. Intellectual Property</h3>
            <p>
              All content on this website, including designs, text, images, logos, and trademarks, is the property 
              of Azurél Fine Jewellery GmbH and is protected by copyright and intellectual property laws. 
              Unauthorized use is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">8. Limitation of Liability</h3>
            <p>
              Azurél shall not be liable for any indirect, incidental, special, or consequential damages arising 
              from your use of our website or products. Our total liability shall not exceed the amount paid for 
              the product in question.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">9. Governing Law</h3>
            <p>
              These Terms and Conditions are governed by the laws of Austria. Any disputes shall be resolved in 
              the courts of Vienna, Austria. For EU consumers, this does not affect your statutory rights under 
              applicable consumer protection laws.
            </p>
          </section>

          <section>
            <h3 className="font-serif italic text-lg text-wine mb-3">10. Contact Information</h3>
            <div className="bg-blue-lt/30 p-5">
              <p className="font-serif italic text-base text-wine mb-2">Azurél Fine Jewellery GmbH</p>
              <p className="text-[0.65rem]">
                Karntner Strasse 16<br />
                1010 Vienna, Austria<br />
                Company Registration: FN 123456a<br />
                VAT ID: ATU12345678<br />
                Email: legal@azurel.at
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
