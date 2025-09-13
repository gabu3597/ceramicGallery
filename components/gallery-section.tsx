"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Heart, Share2 } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Elegant Italian Marble Bathroom",
    category: "Bathroom",
    image: "/luxury-marble-bathroom-with-elegant-tiles.jpg",
    description: "Luxurious Carrara marble creates a spa-like retreat",
    size: "large",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Kitchen Backsplash",
    category: "Kitchen",
    image: "/modern-kitchen-backsplash-with-subway-tiles.jpg",
    description: "Sleek subway tiles with contemporary flair",
    size: "medium",
    featured: false,
  },
  {
    id: 3,
    title: "Rustic Living Room Feature Wall",
    category: "Living Room",
    image: "/rustic-stone-feature-wall-in-living-room.jpg",
    description: "Natural stone creates warmth and character",
    size: "medium",
    featured: true,
  },
  {
    id: 4,
    title: "Outdoor Patio Paradise",
    category: "Outdoor",
    image: "/luxury-outdoor-patio-with-stone-tiles.jpg",
    description: "Weather-resistant tiles for outdoor elegance",
    size: "large",
    featured: false,
  },
  {
    id: 5,
    title: "Minimalist Shower Design",
    category: "Bathroom",
    image: "/minimalist-shower-with-porcelain-tiles.jpg",
    description: "Clean lines with premium porcelain",
    size: "small",
    featured: false,
  },
  {
    id: 6,
    title: "Grand Entrance Foyer",
    category: "Entryway",
    image: "/grand-entrance-foyer-with-statement-tiles.jpg",
    description: "Statement flooring that makes an impression",
    size: "medium",
    featured: true,
  },
  {
    id: 7,
    title: "Cozy Fireplace Surround",
    category: "Living Room",
    image: "/rustic-stone-feature-wall-in-living-room.jpg",
    description: "Textured tiles create a focal point",
    size: "small",
    featured: false,
  },
  {
    id: 8,
    title: "Luxury Master Suite",
    category: "Bedroom",
    image: "/carrara-marble-tiles-luxury-bathroom.jpg",
    description: "Sophisticated tile flooring throughout",
    size: "large",
    featured: true,
  },
]

const categories = ["All", "Bathroom", "Kitchen", "Living Room", "Outdoor", "Entryway", "Bedroom"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = galleryItems.filter((item) => selectedCategory === "All" || item.category === selectedCategory)

  const getGridClasses = (size: string, index: number) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2"
      case "medium":
        return "md:col-span-1 md:row-span-1"
      case "small":
        return "md:col-span-1 md:row-span-1"
      default:
        return "md:col-span-1 md:row-span-1"
    }
  }

  const getImageHeight = (size: string) => {
    switch (size) {
      case "large":
        return "h-64 md:h-96"
      case "medium":
        return "h-48 md:h-64"
      case "small":
        return "h-40 md:h-48"
      default:
        return "h-48 md:h-64"
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="w-12 h-1 bg-secondary mx-auto mb-6 animate-shimmer" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Inspiration Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Discover how our premium tiles transform spaces into extraordinary environments. Each project showcases the
            perfect blend of craftsmanship and design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-500 hover-lift ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg animate-pulse-glow"
                  : "border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className={`group cursor-pointer transition-all duration-700 hover:shadow-2xl border-0 shadow-md overflow-hidden hover-lift animate-scale-in stagger-${(index % 6) + 1} ${getGridClasses(
                item.size,
              )}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 ${getImageHeight(
                      item.size,
                    )}`}
                  />

                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground font-medium animate-pulse-glow">Featured</Badge>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${
                      hoveredItem === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-4 left-4 right-4 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                      <h3 className="font-serif text-lg font-bold text-white mb-1 text-balance">{item.title}</h3>
                      <p className="text-sm text-white/80 mb-3 leading-relaxed">{item.description}</p>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="h-8 px-3 hover-scale">
                          <Eye className="h-3 w-3 mr-1 transition-transform group-hover:scale-110" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 px-3 border-white/20 text-white hover:bg-white hover:text-foreground bg-transparent hover-scale"
                        >
                          <Heart className="h-3 w-3 mr-1 transition-transform group-hover:scale-110" />
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 px-3 border-white/20 text-white hover:bg-white hover:text-foreground bg-transparent hover-scale"
                        >
                          <Share2 className="h-3 w-3 transition-transform group-hover:scale-110" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-2 py-1 bg-white/90 text-foreground rounded-full font-medium transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
                      {item.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 animate-slide-in-up">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover-lift"
          >
            Load More Projects
          </Button>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 sm:p-12 hover-lift animate-slide-in-up">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Let our design experts help you create a space that reflects your unique style. From concept to
              completion, we're here to guide you every step of the way.
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 hover-lift animate-pulse-glow">
              Get Design Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
