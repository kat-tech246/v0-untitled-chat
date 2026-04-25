import Link from "next/link"

const footerLinks = {
  collection: [
    { label: "Necklaces", href: "#" },
    { label: "Rings", href: "#" },
    { label: "Earrings", href: "#" },
    { label: "Bracelets", href: "#" },
    { label: "New Arrivals", href: "#" },
  ],
  information: [
    { label: "Our Story", href: "#about" },
    { label: "Sustainability", href: "#" },
    { label: "Stone Guide", href: "#" },
    { label: "Care Instructions", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Shipping & Returns", href: "#" },
    { label: "Sizing Guide", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Custom Orders", href: "#" },
  ],
}

const socials = [
  { label: "Ig", href: "#" },
  { label: "Tk", href: "#" },
  { label: "Pt", href: "#" },
  { label: "Fb", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-wine-deep py-20 md:py-20 px-6 md:px-14">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-9 md:gap-15 pb-14 border-b border-blue-lt/[0.07] mb-10">
          {/* Brand */}
          <div>
            <span className="font-serif italic font-light text-[2.2rem] text-ivory block mb-3">
              Azurél
            </span>
            <p className="text-[0.4rem] tracking-[2px] text-blue-lt/20 leading-[1.9] mb-6">
              Fine jewellery crafted in Vienna.
              <br />
              Moissanite · Zirconium · 18K Gold Plated.
            </p>
            <div className="flex gap-2.5">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 border-[0.5px] border-blue-lt/[0.12] flex items-center justify-center text-blue-lt/25 text-[0.5rem] font-sans hover:border-blue-lt hover:text-blue-lt transition-all"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Collection Links */}
          <div>
            <span className="text-[0.38rem] tracking-[4px] uppercase text-blue-lt/[0.22] block mb-4">
              Collection
            </span>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.collection.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-serif italic text-[0.9rem] font-light text-blue-lt/30 hover:text-blue-lt transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <span className="text-[0.38rem] tracking-[4px] uppercase text-blue-lt/[0.22] block mb-4">
              Information
            </span>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.information.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-serif italic text-[0.9rem] font-light text-blue-lt/30 hover:text-blue-lt transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <span className="text-[0.38rem] tracking-[4px] uppercase text-blue-lt/[0.22] block mb-4">
              Support
            </span>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-serif italic text-[0.9rem] font-light text-blue-lt/30 hover:text-blue-lt transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3.5 text-center">
          <span className="text-[0.35rem] tracking-[2px] text-blue-lt/[0.14]">
            © 2025 Azurél Fine Jewellery · Vienna, Austria · All rights reserved
          </span>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[0.35rem] tracking-[2px] text-blue-lt/[0.14] hover:text-blue-lt/40 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
