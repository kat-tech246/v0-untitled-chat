"use client"

import { X } from "lucide-react"

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
              Privacy Policy
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
            Last updated: January 2025
          </p>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">Introduction</h3>
            <p className="mb-4">
              Azurél Fine Jewellery GmbH (&ldquo;Azurél,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              azurel.at or make a purchase from us.
            </p>
            <p>
              By using our website and services, you consent to the data practices described in this policy. 
              If you do not agree with these practices, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">Information We Collect</h3>
            <p className="mb-3">We collect information you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Personal Information:</strong> Name, email address, postal address, telephone number</li>
              <li><strong>Payment Information:</strong> Credit card details (processed securely via Stripe)</li>
              <li><strong>Order Information:</strong> Purchase history, sizing preferences, gift messages</li>
              <li><strong>Communication Data:</strong> Correspondence with our concierge team</li>
              <li><strong>Account Information:</strong> Login credentials if you create an account</li>
            </ul>
            <p className="mb-3">We automatically collect certain information when you visit our website:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Device Information:</strong> Browser type, operating system, device identifier</li>
              <li><strong>Usage Data:</strong> Pages viewed, time spent, referring website</li>
              <li><strong>Location Data:</strong> General geographic location based on IP address</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">How We Use Your Information</h3>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and fulfil your orders, including shipping and delivery</li>
              <li>Communicate with you about orders, products, and services</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website, products, and customer experience</li>
              <li>Detect and prevent fraud or unauthorized activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">Information Sharing</h3>
            <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> Shipping carriers, payment processors (Stripe), email services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your personal information, including SSL encryption 
              for all data transmission, secure payment processing through Stripe, and restricted access to personal data. 
              However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">Your Rights (GDPR)</h3>
            <p className="mb-3">If you are a resident of the European Economic Area, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
              <li>Object to or restrict processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">Cookies</h3>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
              and personalize content. You can control cookie preferences through your browser settings. Essential cookies 
              required for website functionality cannot be disabled.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">Data Retention</h3>
            <p>
              We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, 
              unless a longer retention period is required by law. Order records are kept for 7 years for tax and legal compliance.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-serif italic text-lg text-wine mb-3">Contact Us</h3>
            <p className="mb-4">
              For questions about this Privacy Policy or to exercise your data rights, please contact our Data Protection Officer:
            </p>
            <div className="bg-blue-lt/30 p-5">
              <p className="font-serif italic text-base text-wine mb-2">Azurél Fine Jewellery GmbH</p>
              <p className="text-[0.65rem]">
                Karntner Strasse 16<br />
                1010 Vienna, Austria<br />
                Email: privacy@azurel.at<br />
                Phone: +43 1 512 00 00
              </p>
            </div>
          </section>

          <section>
            <h3 className="font-serif italic text-lg text-wine mb-3">Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated 
              &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
