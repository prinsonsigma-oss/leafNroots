import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/aboutus.png')",
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl space-y-6 text-white">
          <p className="text-white text-4xl font-bold tracking-widest uppercase">
            About Us
          </p>

          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            A Drop of Nature.
            <br />
            <span className="text-yellow-300">A World of Wellness.</span>
          </h1>

          <div className="space-y-4 text-white/90 leading-relaxed text-base">
            <p>
              At Leaf n ROOTS, we believe exceptional wellness begins with
              exceptional ingredients.
            </p>

            <p>
              From the lush cardamom hills of Malenadu and the spice plantations
              of Kerala to the saffron fields of Kashmir, we carefully source
              nature's finest treasures and transform them into convenient drops
              of wellness.
            </p>

            <p>
              Our advanced extraction process captures the authentic aroma,
              flavor and goodness of each ingredient, delivering a premium tea
              experience in every drop.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Leaf size={15} />
            Know More About Our Story
            <Leaf size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}