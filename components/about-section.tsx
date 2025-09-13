import ScrollReveal from "./scroll-reveal"

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="/elegant-tile-showroom-exterior-with-modern-archite.jpg"
                alt="Luxe Tiles showroom exterior"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary-foreground">35+</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <div className="w-12 h-1 bg-secondary mb-4" />
              <ScrollReveal
                containerClassName="mb-4"
                textClassName="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
                baseOpacity={0.15}
                baseRotation={1.5}
                blurStrength={2}
              >
                About Our Showroom
              </ScrollReveal>

              <ScrollReveal
                containerClassName="mb-6"
                textClassName="text-xl text-muted-foreground text-balance"
                baseOpacity={0.2}
                baseRotation={1}
                blurStrength={1.5}
              >
                Crafting spaces with luxury tiles since 1985
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                For nearly four decades, Luxe Tiles has been the premier destination for discerning homeowners,
                architects, and designers seeking the finest in luxury tile collections.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Our carefully curated selection features premium materials from renowned artisans worldwide, ensuring
                every project reflects uncompromising quality and timeless elegance.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Expert Consultation</h3>
                  <p className="text-muted-foreground">Personalized design guidance from our experienced team</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Premium Quality</h3>
                  <p className="text-muted-foreground">Only the finest materials from trusted global suppliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
