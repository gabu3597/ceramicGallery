"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle, Calendar, Award } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="w-12 h-1 bg-secondary mx-auto mb-6 animate-shimmer" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Ready to transform your space? Contact our expert team for a personalized consultation and discover the
            perfect tiles for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg hover-lift animate-slide-in-left">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-scale-in" />
                  <h4 className="font-semibold text-foreground mb-2">Message Sent Successfully!</h4>
                  <p className="text-muted-foreground">
                    Thank you for your inquiry. We'll be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select project type</option>
                        <option value="bathroom">Bathroom Renovation</option>
                        <option value="kitchen">Kitchen Remodel</option>
                        <option value="flooring">Flooring Installation</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="outdoor">Outdoor Installation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                   className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 hover-lift animate-pulse-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
           <Card className="border-0 shadow-lg hover-lift animate-slide-in-right">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Visit Our Showroom</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale animate-float">
                     <MapPin className="h-5 w-5 text-primary animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        123 Design District Avenue
                        <br />
                        Los Angeles, CA 90028
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale animate-float">
                     <Phone className="h-5 w-5 text-primary animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">(555) 123-TILE</p>
                      <p className="text-sm text-muted-foreground">WhatsApp: (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale animate-float">
                     <Mail className="h-5 w-5 text-primary animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">info@luxetiles.com</p>
                      <p className="text-sm text-muted-foreground">design@luxetiles.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale animate-float">
                     <Clock className="h-5 w-5 text-primary animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: 12:00 PM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-3">
                   <Badge variant="secondary" className="bg-secondary/10 text-secondary hover-scale animate-pulse-glow">
                      <Calendar className="h-3 w-3 mr-1" />
                      Free Consultation
                    </Badge>
                   <Badge variant="secondary" className="bg-accent/10 text-accent hover-scale animate-pulse-glow">
                      <Award className="h-3 w-3 mr-1" />
                      Licensed & Insured
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
           <Card className="border-0 shadow-lg hover-lift animate-slide-in-right stagger-2">
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                   <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2 animate-float" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">123 Design District Avenue, LA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-8 sm:p-12 text-center hover-lift animate-slide-in-up">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Limited Time: Free Design Consultation
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Book your complimentary design consultation this month and receive a 3D visualization of your project plus
            10% off your first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 hover-lift animate-pulse-glow">
              <MessageSquare className="h-4 w-4 mr-2" />
              Book Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent px-8 py-3 hover-lift"
            >
              Call Now: (555) 123-TILE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
