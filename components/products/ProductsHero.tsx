import { Leaf, Ban, FlaskConical, MapPin } from 'lucide-react'
import Image from 'next/image'

const badges = [
  { icon: Leaf, label: '100% Natural Ingredients' },
  { icon: Ban, label: 'No Artificial Flavours' },
  { icon: FlaskConical, label: 'Lab Tested Quality' },
  { icon: MapPin, label: 'Made in India' },
]

export default function ProductsHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/products-hero.png"
    alt="Leaf n ROOTS Products"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0" />

  {/* Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-white space-y-6">

        <p className="text-green-900 text-sm font-bold tracking-widest uppercase">
          Our Products
        </p>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Wellness in{" "}
          <span className="text-accent">
            Every Drop
          </span>
        </h1>

        <p className="text-black text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
          Carefully crafted wellness extracts made from India's finest
          spices, herbs and botanicals. Just a few drops for a healthier
          you!
        </p>

        {/* Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6 pt-4 max-w-2xl">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-green-950 text-green-950  flex items-center justify-center">
                <Icon size={26} />
              </div>

              <p className="text-xs sm:text-sm font-semibold text-black">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>
  )
}