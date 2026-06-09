import Image from 'next/image'
import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="space-y-6">
          <p className="text-primary text-sm font-bold tracking-widest uppercase">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance" style={{ fontFamily: 'var(--font-playfair)' }}>
            A Drop of Nature.<br />
            <span className="text-primary">A World of Wellness.</span>
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
            <p>
              At Leaf n ROOTS, we believe exceptional wellness begins with exceptional ingredients.
            </p>
            <p>
              From the lush cardamom hills of Malenadu and the spice plantations of Kerala to the saffron
              fields of Kashmir, we carefully source {"nature's"} finest treasures and transform them into
              convenient drops of wellness.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Leaf size={15} />
            Know More About Our Story
            <Leaf size={15} />
          </Link>
        </div>

        {/* Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-spices.png"
              alt="Leaf n Roots wellness extracts with Indian spices and golden drop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
