"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const productCategories = [
  {
    title: "Floor Tiles",
    description: "Premium flooring solutions for every space",
    image: "/placeholder.svg?key=floor-tiles",
    badge: "Popular",
    features: ["Porcelain", "Natural Stone", "Ceramic"],
  },
  {
    title: "Wall Tiles",
    description: "Elegant wall coverings and accent pieces",
    image: "/placeholder.svg?key=wall-tiles",
    badge: "Trending",
    features: ["Subway", "Mosaic", "Large Format"],
  },
  {
    title: "Kitchen Tiles",
    description: "Durable and stylish kitchen solutions",
    image: "/placeholder.svg?key=kitchen-tiles",
    badge: "New",
    features: ["Backsplash", "Countertop", "Waterproof"],
  },
  {
    title: "Bathroom Tiles",
    description: "Luxury tiles for spa-like experiences",
    image: "/placeholder.svg?key=bathroom-tiles",
    badge: "Premium",
    features: ["Non-slip", "Moisture Resistant", "Easy Clean"],
  },
  {
    title: "Outdoor Tiles",
    description: "Weather-resistant outdoor collections",
    image: "/placeholder.svg?key=outdoor-tiles",
    badge: "Durable",
    features: ["Frost Proof", "Anti-slip", "UV Resistant"],
  },
  {
    title: "Designer Collections",
    description: "Exclusive limited edition designs",
    image: "/placeholder.svg?key=designer-tiles",
    badge: "Exclusive",
    features: ["Handcrafted", "Limited Edition", "Custom"],
  },
]

const styles = [
  {
    title: "Modern Minimalist",
    description: "Clean lines and contemporary aesthetics",
    image: "/placeholder.svg?key=modern-style",
    color: "bg-slate-100",
  },
  {
    title: "Classic Marble",
    description: "Timeless elegance with natural veining",
    image: "/placeholder.svg?key=marble-style",
    color: "bg-stone-100",
  },
  {
    title: "Rustic Charm",
    description: "Warm textures with natural character",
    image: "/placeholder.svg?key=rustic-style",
    color: "bg-amber-50",
  },
  {
    title: "Industrial Edge",
    description: "Bold designs with urban sophistication",
    image: "/placeholder.svg?key=industrial-style",
    color: "bg-zinc-100",
  },
]

export function ProductHighlights() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="w-12 h-1 bg-secondary mx-auto mb-6" />
          <ScrollReveal
            containerClassName="mb-6"
            textClassName="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            baseOpacity={0.15}
            baseRotation={1.5}
            blurStrength={2}
          >
            Product Highlights
          </ScrollReveal>
          <ScrollReveal
            containerClassName=""
            textClassName="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed"
            baseOpacity={0.2}
            baseRotation={1}
            blurStrength={1.5}
          >
            Explore our comprehensive collection of premium tiles, carefully selected to meet every design vision and
            functional requirement.
          </ScrollReveal>
        </div>

        {/* Product Categories Grid */}
        <div className="mb-20">
          <ScrollReveal
            containerClassName="mb-8"
            textClassName="font-serif text-2xl sm:text-3xl font-bold text-foreground text-center"
            baseOpacity={0.2}
            baseRotation={1}
            blurStrength={1.5}
          >
            Categories
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card
                key={category.title}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-medium">
                        {category.badge}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-serif text-xl font-bold text-foreground mb-2">{category.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature) => (
                        <span key={feature} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Styles Section */}
        <div>
          <ScrollReveal
            containerClassName="mb-8"
            textClassName="font-serif text-2xl sm:text-3xl font-bold text-foreground text-center"
            baseOpacity={0.2}
            baseRotation={1}
            blurStrength={1.5}
          >
            Popular Styles
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style, index) => (
              <Card
                key={style.title}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className={`h-32 ${style.color} flex items-center justify-center`}>
                      <img
                        src={style.image || "/placeholder.svg"}
                        alt={style.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-1 text-sm">{style.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{style.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-primary/5 rounded-2xl p-8 sm:p-12">
            <ScrollReveal
              containerClassName="mb-4"
              textClassName="font-serif text-2xl sm:text-3xl font-bold text-foreground"
              baseOpacity={0.2}
              baseRotation={1}
              blurStrength={1.5}
            >
              Need Help Choosing?
            </ScrollReveal>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Our expert design consultants are here to help you find the perfect tiles for your project. Schedule a
              free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                View Full Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
