import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductHighlights } from "@/components/product-highlights"
import { GallerySection } from "@/components/gallery-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductHighlights />
      <GallerySection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
