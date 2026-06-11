import Image from 'next/image'
import { Leaf, Sprout, Flame, Sparkles, Sun } from 'lucide-react'

const sources = [
  { label: 'Malenadu\nCardamom', icon: Sprout },
  { label: 'Kerala\nSpices', icon: Flame },
  { label: 'Kashmir\nSaffron', icon: Sparkles },
  { label: 'South India\nLemons', icon: Sun },
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
            {sources.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-primary">
                  <Icon size={22} strokeWidth={1.5} />
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
