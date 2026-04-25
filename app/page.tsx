import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Marquee } from "@/components/marquee"
import { ShopSection } from "@/components/shop-section"
import { StatementSection } from "@/components/statement-section"
import { LookbookSection } from "@/components/lookbook-section"
import { TrustSection } from "@/components/trust-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <Marquee />
        <ShopSection />
        <StatementSection />
        <LookbookSection />
        <TrustSection />
        <AboutSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
