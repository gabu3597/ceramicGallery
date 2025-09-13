"use client"

import { useRef, useEffect } from "react"
import { ScrollReveal } from "./scroll-reveal"

interface Category {
  id: string
  name: string
  description?: string
  image: string
  href?: string
}

interface CategoriesSectionProps {
  categories?: Category[]
  title?: string
  subtitle?: string
  className?: string
}

const defaultCategories: Category[] = [
  {
    id: "floor-tiles",
    name: "Floor Tiles",
    description: "Premium flooring solutions",
    image: "/luxury-floor-tiles-marble-ceramic.jpg",
    href: "/categories/floor-tiles",
  },
  {
    id: "wall-tiles",
    name: "Wall Tiles",
    description: "Elegant wall coverings",
    image: "/luxury-wall-tiles-subway-metro.jpg",
    href: "/categories/wall-tiles",
  },
  {
    id: "kitchen-tiles",
    name: "Kitchen Tiles",
    description: "Culinary perfection",
    image: "/luxury-kitchen-backsplash-tiles.jpg",
    href: "/categories/kitchen-tiles",
  },
  {
    id: "bathroom-tiles",
    name: "Bathroom Tiles",
    description: "Spa-inspired designs",
    image: "/luxury-bathroom-tiles-spa-marble.jpg",
    href: "/categories/bathroom-tiles",
  },
  {
    id: "outdoor-tiles",
    name: "Outdoor Tiles",
    description: "Weather-resistant beauty",
    image: "/luxury-outdoor-patio-tiles-stone.jpg",
    href: "/categories/outdoor-tiles",
  },
  {
    id: "mosaic-tiles",
    name: "Mosaic Tiles",
    description: "Artistic expressions",
    image: "/luxury-mosaic-tiles-artistic-pattern.jpg",
    href: "/categories/mosaic-tiles",
  },
]

export function CategoriesSection({
  categories = defaultCategories,
  title = "Explore Our Collections",
  subtitle = "Discover premium tiles for every space and style",
  className = "",
}: CategoriesSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Add smooth scrolling behavior
    container.style.scrollBehavior = "smooth"

    // Optional: Add mouse wheel horizontal scrolling
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        container.scrollLeft += e.deltaY
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <section className={`py-20 bg-gradient-to-b from-slate-50 to-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">{title}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
          </ScrollReveal>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
          >
            {categories.map((category, index) => (
              <ScrollReveal key={category.id} delay={index * 0.1}>
                <div className="flex-none w-80 md:w-96 snap-start group">
                  <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                        <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 text-balance">
                          {category.name}
                        </h3>
                        {category.description && (
                          <p className="text-slate-200 text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                            {category.description}
                          </p>
                        )}
                      </div>

                      {/* Accent Line */}
                      <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mt-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>

                    {/* Interactive Link */}
                    {category.href && (
                      <a
                        href={category.href}
                        className="absolute inset-0 z-10"
                        aria-label={`Explore ${category.name}`}
                      />
                    )}

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-amber-400/30 transition-all duration-300" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {categories.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-slate-300 transition-colors duration-300 hover:bg-amber-400"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <ScrollReveal delay={0.4}>
            <button className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
              View All Categories
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
