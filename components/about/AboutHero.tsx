import Link from 'next/link'
import { Leaf } from 'lucide-react'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/aboutus.png"
    alt="About Leaf n ROOTS"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 " />

  {/* Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl lg:max-w-2xl space-y-5 text-white">

        <p className="text-green-500 text-lg sm:text-xl font-bold tracking-[0.3em] uppercase">
          About Us
        </p>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          A Drop of Nature.
          <br />
          <span className="text-green-900">
            A World of Wellness.
          </span>
        </h1>

        <div className="space-y-4 text-black leading-relaxed text-sm sm:text-base lg:text-lg max-w-xl">
          <p>
            At Leaf n ROOTS, we believe exceptional wellness begins
            with exceptional ingredients.
          </p>

          <p>
            From the lush cardamom hills of Malenadu and the spice
            plantations of Kerala to the saffron fields of Kashmir,
            we carefully source nature's finest treasures and transform
            them into convenient drops of wellness.
          </p>

          <p>
            Our advanced extraction process captures the authentic
            aroma, flavor and goodness of each ingredient, delivering
            a premium tea experience in every drop.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition"
        >
          <Leaf size={15} />
          Know More About Our Story
          <Leaf size={15} />
        </Link>

      </div>
    </div>
  </div>
</section>
  )
}