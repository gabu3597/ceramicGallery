"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 animate-scale-in">
        <img
          src="/luxury-tile-showroom-interior-with-elegant-marble-.jpg"
          alt="Luxury tile showroom interior"
          className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 animate-fade-in" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-in-up">
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

          <p className="text-base sm:text-lg mb-12 text-balance opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-3">
            Discover our curated collection of luxury tiles, where timeless elegance meets contemporary design.
            Transform your vision into reality with our expert craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up stagger-4">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover-lift animate-pulse-glow"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent hover-lift"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Showroom Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
