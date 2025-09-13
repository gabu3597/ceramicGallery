import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Paintbrush as Pinterest,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Leaf,
  Shield,
} from "lucide-react"

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
  { name: "Showroom", href: "#showroom" },
]

const productCategories = [
  { name: "Floor Tiles", href: "#floor-tiles" },
  { name: "Wall Tiles", href: "#wall-tiles" },
  { name: "Kitchen Tiles", href: "#kitchen-tiles" },
  { name: "Bathroom Tiles", href: "#bathroom-tiles" },
  { name: "Outdoor Tiles", href: "#outdoor-tiles" },
  { name: "Designer Collections", href: "#designer" },
]

const services = [
  { name: "Design Consultation", href: "#consultation" },
  { name: "Installation", href: "#installation" },
  { name: "Delivery", href: "#delivery" },
  { name: "Project Management", href: "#project-management" },
  { name: "Warranty & Support", href: "#warranty" },
  { name: "Maintenance", href: "#maintenance" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" },
  { name: "Pinterest", icon: Pinterest, href: "#", color: "hover:text-red-600" },
  { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
]

const brandLogos = [
  { name: "Porcelanosa", logo: "/placeholder.svg?key=porcelanosa-logo" },
  { name: "Marazzi", logo: "/placeholder.svg?key=marazzi-logo" },
  { name: "Daltile", logo: "/placeholder.svg?key=daltile-logo" },
  { name: "Emser", logo: "/placeholder.svg?key=emser-logo" },
  { name: "Interceramic", logo: "/placeholder.svg?key=interceramic-logo" },
  { name: "American Olean", logo: "/placeholder.svg?key=american-olean-logo" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Brand Partners */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-center font-serif text-xl font-bold mb-6">Trusted Brand Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-bold mb-2">Luxe Tiles</h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                Crafting extraordinary spaces with premium tiles since 1985. Your trusted partner for luxury tile
                solutions.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">123 Design District Ave, Los Angeles, CA 90028</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">(555) 123-TILE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">info@luxetiles.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">Mon-Fri: 9AM-7PM</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6 flex flex-wrap gap-2">
              <div className="flex items-center gap-1 text-xs bg-primary-foreground/10 px-2 py-1 rounded">
                <Award className="h-3 w-3 text-secondary" />
                <span>Licensed</span>
              </div>
              <div className="flex items-center gap-1 text-xs bg-primary-foreground/10 px-2 py-1 rounded">
                <Shield className="h-3 w-3 text-secondary" />
                <span>Insured</span>
              </div>
              <div className="flex items-center gap-1 text-xs bg-primary-foreground/10 px-2 py-1 rounded">
                <Leaf className="h-3 w-3 text-secondary" />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="font-serif text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80 text-sm">
                Subscribe to our newsletter for design inspiration, new arrivals, and exclusive offers.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
              <div className="flex gap-2 max-w-sm mx-auto lg:mx-0">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex-shrink-0"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-primary-foreground/60 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            <div className="text-sm text-primary-foreground/60">Follow us for daily design inspiration</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>© 2024 Luxe Tiles. All rights reserved. | Crafting luxury since 1985.</div>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-secondary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#accessibility" className="hover:text-secondary transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
