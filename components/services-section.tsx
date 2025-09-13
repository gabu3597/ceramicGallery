"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Truck, Wrench, Users, Shield, Leaf, Clock, Award } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const services = [
  {
    icon: Palette,
    title: "Design Consultation",
    description:
      "Expert guidance from our certified interior designers to help you choose the perfect tiles for your space.",
    features: ["Free consultation", "3D visualization", "Color matching"],
    popular: true,
  },
  {
    icon: Truck,
    title: "Delivery & Logistics",
    description: "Reliable delivery service ensuring your tiles arrive safely and on schedule, anywhere in the region.",
    features: ["Same-day delivery", "White glove service", "Installation scheduling"],
    popular: false,
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Certified installers with decades of experience ensuring flawless results for your project.",
    features: ["Licensed contractors", "Quality guarantee", "Post-installation support"],
    popular: true,
  },
  {
    icon: Users,
    title: "Project Management",
    description: "Dedicated project coordinators to oversee your installation from start to finish.",
    features: ["Timeline management", "Quality control", "Regular updates"],
    popular: false,
  },
  {
    icon: Shield,
    title: "Warranty & Support",
    description: "Comprehensive warranty coverage and ongoing support for all our products and services.",
    features: ["Extended warranty", "24/7 support", "Maintenance guidance"],
    popular: false,
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Sustainable tile options made from recycled materials and eco-conscious manufacturing processes.",
    features: ["Recycled content", "Low emissions", "LEED certified"],
    popular: true,
  },
]

const whyChooseUs = [
  {
    icon: Clock,
    title: "35+ Years Experience",
    description: "Decades of expertise in luxury tile installation and design",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized for excellence in customer service and quality",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all products and services",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Committed to environmentally responsible sourcing and installation",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="w-12 h-1 bg-secondary mx-auto mb-6 animate-shimmer" />
          <ScrollReveal
            containerClassName="mb-6"
            textClassName="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            baseOpacity={0.15}
            baseRotation={1.5}
            blurStrength={2}
          >
            Our Services
          </ScrollReveal>
          <ScrollReveal
            containerClassName=""
            textClassName="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed"
            baseOpacity={0.2}
            baseRotation={1}
            blurStrength={1.5}
          >
            From initial consultation to final installation, we provide comprehensive services to ensure your tile
            project exceeds expectations.
          </ScrollReveal>
        </div>
        {/* Services Timeline */}
        <div className="relative mb-20">
          {/* Central vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-primary h-full rounded-full opacity-60 animate-shimmer" />

          {/* Timeline dots gradient overlay */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent rounded-full animate-pulse" />
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isLeft = index % 2 === 0

              return (
                <div key={service.title} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 animate-float">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg animate-pulse-glow">
                      <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Service card */}
                  <div className={`flex ${isLeft ? "justify-start pr-8 lg:pr-16" : "justify-end pl-8 lg:pl-16"}`}>
                    <div className={`w-full max-w-md ${isLeft ? "lg:max-w-lg" : "lg:max-w-lg"}`}>
                      <Card
                        className={`group cursor-pointer transition-all duration-700 hover:shadow-2xl border-0 shadow-lg relative overflow-hidden hover-lift ${isLeft
                            ? "animate-slide-in-left"
                            : "animate-slide-in-right"
                          }`}
                        style={{
                          animationDelay: `${index * 200}ms`,
                          background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                        }}
                      >
                        {/* Connecting line to timeline */}
                        <div
                          className={`absolute top-1/2 transform -translate-y-1/2 w-8 lg:w-16 h-0.5 bg-gradient-to-r ${isLeft
                              ? "right-0 translate-x-full from-primary/60 to-transparent"
                              : "left-0 -translate-x-full from-transparent to-primary/60"
                            }`}
                        />

                        {service.popular && (
                          <div className="absolute top-4 right-4 z-10">
                            <Badge className="bg-gradient-to-r from-accent to-secondary text-white font-medium shadow-md animate-pulse-glow">
                              Popular
                            </Badge>
                          </div>
                        )}

                        <CardContent className="p-6 lg:p-8">
                          <div className="mb-4">
                            <div
                              className={`w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 hover-scale ${isLeft ? "group-hover:rotate-3" : "group-hover:-rotate-3"
                                }`}
                            >
                              <IconComponent className="h-7 w-7 text-primary group-hover:text-secondary transition-all duration-500 animate-float" />
                            </div>
                            <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                              {service.description}
                            </p>
                          </div>

                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div
                                key={feature}
                                className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500"
                                style={{ animationDelay: `${index * 200 + featureIndex * 100}ms` }}
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-500 animate-pulse" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </CardContent>

                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </Card>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-background rounded-2xl p-8 sm:p-12 shadow-lg hover-lift animate-slide-in-up">
          <div className="text-center mb-12">
            <ScrollReveal
              containerClassName="mb-4"
              textClassName="font-serif text-2xl sm:text-3xl font-bold text-foreground"
              baseOpacity={0.2}
              baseRotation={1}
              blurStrength={1.5}
            >
              Why Choose Luxe Tiles?
            </ScrollReveal>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-2">
              Our commitment to excellence and customer satisfaction sets us apart in the luxury tile industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={item.title} className={`text-center group hover-lift animate-scale-in stagger-${index + 1}`}>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-all duration-500 hover-scale animate-float">
                    <IconComponent className="h-8 w-8 text-secondary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
