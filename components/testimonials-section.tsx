"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    location: "Beverly Hills, CA",
    rating: 5,
    text: "The team at Luxe Tiles transformed our master bathroom into a spa-like retreat. Their attention to detail and expertise in marble installation is unmatched. We couldn't be happier with the results!",
    image: "/placeholder-user.jpg",
    project: "Master Bathroom Renovation",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Interior Designer",
    location: "Manhattan, NY",
    rating: 5,
    text: "As a designer, I've worked with many tile suppliers, but Luxe Tiles consistently delivers exceptional quality and service. Their product knowledge and design consultation services are invaluable.",
    image: "/placeholder-user.jpg",
    project: "Luxury Penthouse Design",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Architect",
    location: "Miami, FL",
    rating: 5,
    text: "The custom tile work for our commercial project exceeded all expectations. From initial consultation to final installation, the professionalism and craftsmanship were outstanding.",
    image: "/placeholder-user.jpg",
    project: "Boutique Hotel Lobby",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Homeowner",
    location: "Austin, TX",
    rating: 5,
    text: "Our kitchen backsplash installation was flawless. The team helped us choose the perfect tiles and the installation was completed on time and within budget. Highly recommended!",
    image: "/placeholder-user.jpg",
    project: "Kitchen Renovation",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Property Developer",
    location: "Seattle, WA",
    rating: 5,
    text: "Working with Luxe Tiles on multiple properties has been a pleasure. Their reliability, quality products, and competitive pricing make them our go-to tile supplier.",
    image: "/placeholder-user.jpg",
    project: "Residential Development",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Homeowner",
    location: "Phoenix, AZ",
    rating: 5,
    text: "The outdoor patio tiles have held up beautifully through extreme weather conditions. The consultation process helped us choose the perfect weather-resistant options.",
    image: "/placeholder-user.jpg",
    project: "Outdoor Living Space",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Get visible testimonials (current + next 2 for desktop)
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-secondary text-secondary" : "text-muted-foreground"}`} />
    ))
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="w-12 h-1 bg-secondary mx-auto mb-6 animate-shimmer" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with
            Luxe Tiles.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop View - 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${index}`}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift animate-scale-in stagger-${index + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 hover-scale transition-transform duration-300"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-secondary/20 animate-float" />
                    <p className="text-muted-foreground leading-relaxed pl-4 italic">"{testimonial.text}"</p>
                  </div>

                  <div className="text-xs text-muted-foreground font-medium">Project: {testimonial.project}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile/Tablet View - 1 card */}
          <div className="lg:hidden mb-8">
            <Card className="border-0 shadow-lg hover-lift animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover mr-4 hover-scale transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">{renderStars(testimonials[currentIndex].rating)}</div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-secondary/20 animate-float" />
                  <p className="text-muted-foreground leading-relaxed pl-4 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>

                <div className="text-xs text-muted-foreground font-medium">
                  Project: {testimonials[currentIndex].project}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full p-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover-scale"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 hover-scale ${
                    index === currentIndex ? "bg-primary animate-pulse-glow" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full p-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover-scale"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary/5 rounded-2xl p-8 sm:p-12 hover-lift animate-slide-in-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="hover-scale animate-scale-in stagger-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 animate-pulse-glow">2,500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="hover-scale animate-scale-in stagger-2">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 animate-pulse-glow">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="hover-scale animate-scale-in stagger-3">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 animate-pulse-glow">35+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="hover-scale animate-scale-in stagger-4">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 animate-pulse-glow">50+</div>
              <div className="text-muted-foreground">Design Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
