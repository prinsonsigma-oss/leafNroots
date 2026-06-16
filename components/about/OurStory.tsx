import Image from 'next/image'
import { Leaf, Sprout, Flame, Sparkles, Sun } from 'lucide-react'
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

const sources = [
  { label: 'Malenadu\nCardamom', icon: Sprout },
  { label: 'Kerala\nSpices', icon: Flame },
  { label: 'Kashmir\nSaffron', icon: Sparkles },
  { label: 'South India\nLemons', icon: Sun },
]

export default function OurStory() {
  return (
    <section className="relative min-h-[650px] md:min-h-[750px] lg:min-h-[850px] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/plantation.png"
    alt="India's finest growing regions — lush green tea plantation"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 " />

  {/* Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl lg:max-w-2xl text-white">

        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <Leaf size={16} className="text-yellow-950" />
          <p className="text-yellow-950 text-l font-bold tracking-widest uppercase">
            Our Story
          </p>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
         <span className="text-yellow-300"> Every Drop Begins
          <br />
          at the Source</span>
        </h2>

        {/* Description */}
        <div className="space-y-4 text-sm sm:text-base lg:text-lg text-black leading-relaxed">
          <p>
            At Leaf n Roots,we believe exceptional wellness start with exceptional Ingredients.
          </p>

          <p>
            From the cardamom hills of Malenadu and the spice plantations of Kerala to the saffron fields of Kashmir,we carefully source 
            nature's finest treasures and transform them into convenient drops of wellness.
          </p>

          <p>
            Adrop of nature.A worldof wellness. 
          </p>
        </div>

        {/* Source Icons */}
        <div className="pt-8">
  <Link
    href="/contact"
    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
  >
    Know More About Us
    <ArrowRight size={18} />
  </Link>
</div>

      </div>
    </div>
  </div>
</section>
  )
}
