import { Leaf, Ban, FlaskConical, MapPin } from 'lucide-react'

const badges = [
  { icon: Leaf, label: '100% Natural Ingredients' },
  { icon: Ban, label: 'No Artificial Flavours' },
  { icon: FlaskConical, label: 'Lab Tested Quality' },
  { icon: MapPin, label: 'Made in India' },
]

export default function ProductsHero() {
  return (
    <section
      className="relative overflow-hidden bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/products-hero.png')",
        backgroundSize: 'cover', // change to 90% if too zoomed
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl space-y-6 text-white">
          <p className="text-yellow-300 text-sm font-bold tracking-widest uppercase">
            Our Products
          </p>

          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Wellness in{' '}
            <span className="text-green-300">
              Every Drop
            </span>
          </h1>

          <p className="text-white/90 leading-relaxed max-w-2xl">
            Carefully crafted wellness extracts made from India's finest spices,
            herbs and botanicals. Just a few drops for a healthier you!
          </p>

          {/* Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <p className="text-xs font-semibold text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}