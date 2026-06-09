import Image from 'next/image'
import { Leaf } from 'lucide-react'

const sources = [
  { label: 'Malenadu\nCardamom', icon: '🌿' },
  { label: 'Kerala\nSpices', icon: '🌶️' },
  { label: 'Kashmir\nSaffron', icon: '🌸' },
  { label: 'South India\nLemons', icon: '🍋' },
]

export default function OurStory() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image with overlay */}
        <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
          <Image
            src="/images/plantation.png"
            alt="India's finest growing regions — lush green tea plantation"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-accent/90 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/80 tracking-wider uppercase font-semibold">Sourced From</p>
                <p className="text-primary-foreground font-bold text-base leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {"India's Finest"}<br />Growing Regions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Story Text */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Leaf size={16} className="text-primary" />
              <p className="text-primary text-sm font-bold tracking-widest uppercase">Our Story</p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-playfair)' }}>
              Every Drop Begins at the Source
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our journey began with a simple belief – nature has everything we need to live well.
            </p>
            <p>
              We travelled across India to handpick the finest herbs, spices and botanicals known for
              their aroma, taste and wellness benefits.
            </p>
            <p>
              Using advanced extraction techniques, we capture the authentic goodness of each ingredient
              — delivering a premium tea and wellness experience in every drop.
            </p>
          </div>

          {/* Source icons */}
          <div className="grid grid-cols-4 gap-4 pt-4">
            {sources.map(({ label, icon }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-2xl">
                  {icon}
                </div>
                <p className="text-xs font-semibold text-foreground whitespace-pre-line leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
