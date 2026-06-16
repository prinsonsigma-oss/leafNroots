import Link from 'next/link'
import { Leaf, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function HomeHero() {
  return (
   <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/contact.png"
    alt="Wellness Extracts"
    fill
    priority
    className="object-cover opacity-75"
  />

  {/* Overlay */}
  <div className="absolute inset-0" />

  {/* Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-black bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase">
          <Leaf size={11} />
          100% Natural Wellness Extracts
        </div>

        {/* Heading */}
        <h1
          className="font-bold leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="block text-orange-600 text-4xl sm:text-5xl lg:text-7xl">
            Nature's
          </span>

          <span className="block text-primary text-4xl sm:text-5xl lg:text-7xl">
            Goodness
          </span>

          <span className="block italic text-primary text-3xl sm:text-4xl lg:text-6xl mt-2">
            in Every Drop.
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-xl text-yellow-300 max-w-md lg:max-w-lg leading-relaxed">
          Premium wellness extracts made from India's finest spices,
          herbs and botanicals.
        </p>

        {/* Button */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/products"
            className="bg-primary text-white px-5 py-3 sm:px-6 sm:py-3 rounded font-semibold text-sm sm:text-base"
          >
            Explore Products
          </Link>
        </div>

      </div>
    </div>
  </div>
</section>
  )
}