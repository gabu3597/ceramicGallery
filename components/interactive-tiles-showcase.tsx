"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

gsap.registerPlugin(ScrollTrigger)

const tileCollections = [
  {
    id: 1,
    name: "Carrara Marble",
    category: "Premium Stone",
    price: "From $89/sq ft",
    image: "/carrara-marble-tiles-luxury-bathroom.jpg",
    description: "Timeless Italian marble with distinctive veining",
    features: ["Natural Stone", "Polished Finish", "Heat Resistant"],
    popular: true,
  },
  {
    id: 2,
    name: "Subway Classic",
    category: "Ceramic",
    price: "From $12/sq ft",
    image: "/white-subway-tiles-modern-kitchen.jpg",
    description: "Classic subway tiles for modern spaces",
    features: ["Easy Clean", "Versatile", "Timeless Design"],
    popular: false,
  },
  {
    id: 3,
    name: "Travertine Elegance",
    category: "Natural Stone",
    price: "From $45/sq ft",
    image: "/travertine-tiles-elegant-bathroom.jpg",
    description: "Warm travertine with natural texture",
    features: ["Non-Slip", "Natural Texture", "Durable"],
    popular: true,
  },
  {
    id: 4,
    name: "Hexagon Mosaic",
    category: "Mosaic",
    price: "From $28/sq ft",
    image: "/hexagon-mosaic-tiles-modern-design.jpg",
    description: "Contemporary hexagonal patterns",
    features: ["Geometric Design", "Multiple Colors", "Easy Install"],
    popular: false,
  },
]

export function InteractiveTilesShowcase() {
  const [selectedTile, setSelectedTile] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const showcaseRef = useRef<HTMLDivElement>(null)
  const tilesRef = useRef<HTMLDivElement[]>([])
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tiles = tilesRef.current.filter(Boolean)
    if (tiles.length === 0) return

    tiles.forEach((tile, index) => {
      // Initial animation
      gsap.fromTo(
        tile,
        {
          y: 100,
          opacity: 0,
          rotationY: -15,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: tile,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // 3D hover effect
      const handleMouseMove = (e: MouseEvent) => {
        const rect = tile.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const rotateX = (e.clientY - centerY) / 10
        const rotateY = (centerX - e.clientX) / 10

        gsap.to(tile, {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        })
      }

      const handleMouseLeave = () => {
        gsap.to(tile, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "power2.out",
        })
      }

      tile.addEventListener("mousemove", handleMouseMove)
      tile.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        tile.removeEventListener("mousemove", handleMouseMove)
        tile.removeEventListener("mouseleave", handleMouseLeave)
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.1,
          ease: "power2.out",
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`fixed w-5 h-5 rounded-full pointer-events-none z-50 transition-opacity duration-300 ${
          selectedTile ? "opacity-100 bg-accent/50 scale-150" : "opacity-0"
        }`}
        style={{ mixBlendMode: "difference" }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div ref={showcaseRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Premium Collections
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Interactive Tile Showcase
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Experience our premium tile collections with interactive 3D previews. Hover to explore each tile's unique
              characteristics and craftsmanship.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tileCollections.map((tile, index) => (
            <Card
              key={tile.id}
              ref={(el) => {
                if (el) tilesRef.current[index] = el
              }}
              className="group cursor-pointer transition-all duration-500 hover:shadow-2xl border-0 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm"
              onMouseEnter={() => setSelectedTile(tile.id)}
              onMouseLeave={() => setSelectedTile(null)}
              style={{ transformStyle: "preserve-3d" }}
            >
              <CardContent className="p-0 relative">
                {/* Popular Badge */}
                {tile.popular && (
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-gradient-to-r from-accent to-secondary text-white font-medium shadow-lg">
                      🔥 Popular
                    </Badge>
                  </div>
                )}

                {/* Tile Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tile.image || "/placeholder.svg"}
                    alt={tile.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-foreground">
                    {tile.price}
                  </div>
                </div>

                {/* Tile Information */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs text-accent font-medium uppercase tracking-wide">{tile.category}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{tile.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{tile.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tile.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-lg ring-2 ring-transparent group-hover:ring-accent/30 transition-all duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="font-serif text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                Schedule a consultation with our design experts and bring your vision to life with our premium tile
                collections.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-3 group">
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
