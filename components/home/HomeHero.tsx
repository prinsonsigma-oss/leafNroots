import Link from 'next/link'
import { Leaf, MessageCircle } from 'lucide-react'

export default function HomeHero() {
  return (
    <section
      className="relative overflow-hidden bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-spices.png')",
        backgroundSize: "100%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-2xl space-y-6 text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <Leaf size={11} />
            100% Natural Wellness Extracts
          </div>

          <h1
            className="text-4xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            A Drop of <span className="text-yellow-300">Nature.</span>
            <br />
            A World of <span className="italic text-green-300">Wellness.</span>
          </h1>

          <p className="text-lg text-white/90 max-w-lg">
            Premium wellness extracts made from India's finest spices,
            herbs and botanicals.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="bg-primary text-white px-6 py-3 rounded font-semibold"
            >
              Explore Products
            </Link>

            {/* <a
              href="https://wa.me/917619610605"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary border-2 border-white text-white px-6 py-3 rounded font-semibold"
            >
              <MessageCircle size={15} />
              Order on WhatsApp
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}