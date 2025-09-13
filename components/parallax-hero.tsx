"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

gsap.registerPlugin(ScrollTrigger)

export function ParallaxHero() {
  const heroRef = useRef<HTMLElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const background = backgroundRef.current
    const content = contentRef.current
    const overlay = overlayRef.current

    if (!hero || !background || !content || !overlay) return

    // Background parallax - slower movement
    gsap.to(background, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    // Content parallax - faster movement for depth
    gsap.to(content, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    // Overlay opacity change on scroll
    gsap.to(overlay, {
      opacity: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    })

    // Floating animation for decorative elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div ref={backgroundRef} className="absolute inset-0 z-0 scale-110">
        <img
          src="/luxury-tile-showroom-interior-with-elegant-marble-.jpg"
          alt="Luxury tile showroom interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dynamic Overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-10" />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-2 h-2 bg-secondary/30 rounded-full blur-sm" />
        <div className="floating-element absolute top-1/3 right-1/3 w-3 h-3 bg-accent/20 rounded-full blur-sm" />
        <div className="floating-element absolute bottom-1/3 left-1/3 w-1 h-1 bg-secondary/40 rounded-full blur-sm" />
      </div>

      {/* Hero Content with Parallax */}
      <div ref={contentRef} className="relative z-30 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <ScrollReveal
            containerClassName="mb-6"
            textClassName="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-balance"
            baseOpacity={0.2}
            baseRotation={2}
            blurStrength={3}
          >
            Luxe Tiles
          </ScrollReveal>

          <ScrollReveal
            containerClassName="mb-8"
            textClassName="text-lg sm:text-xl md:text-2xl text-white text-balance font-light leading-relaxed"
            baseOpacity={0.3}
            baseRotation={1}
            blurStrength={2}
          >
            Crafting extraordinary spaces with premium tiles since 1985
          </ScrollReveal>

          <p className="text-base sm:text-lg mb-12 text-balance opacity-90 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of luxury tiles, where timeless elegance meets contemporary design.
            Transform your vision into reality with our expert craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent group"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Showroom Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
