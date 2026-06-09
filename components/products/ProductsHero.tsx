import Image from 'next/image'
import { Leaf, Ban, FlaskConical, MapPin } from 'lucide-react'

const badges = [
  { icon: Leaf, label: '100% Natural Ingredients' },
  { icon: Ban, label: 'No Artificial Flavours' },
  { icon: FlaskConical, label: 'Lab Tested Quality' },
  { icon: MapPin, label: 'Made in India' },
]

export default function ProductsHero() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="space-y-6">
          <p className="text-primary text-sm font-bold tracking-widest uppercase">Our Products</p>
          <h1
            className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Wellness in{' '}
            <em className="not-italic text-accent" style={{ fontFamily: 'var(--font-playfair)' }}>
              Every Drop
            </em>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Carefully crafted wellness extracts made from {"India's"} finest spices, herbs and botanicals.
            Just a few drops for a healthier you!
          </p>

          {/* Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div className="w-11 h-11 rounded-full border-2 border-primary/30 bg-muted flex items-center justify-center text-primary">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <p className="text-xs font-semibold text-foreground leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/products-hero.png"
              alt="Leaf n Roots — premium wellness extracts with Indian spices"
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
