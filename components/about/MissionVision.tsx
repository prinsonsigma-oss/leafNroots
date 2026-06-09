import Image from 'next/image'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="relative bg-secondary text-secondary-foreground py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Target size={16} className="text-accent" />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-accent">Our Mission</h3>
            </div>
            <p className="text-secondary-foreground/90 leading-relaxed text-sm">
              To make wellness simple, natural and accessible for everyone through pure, high-quality
              extracts that enhance everyday life.
            </p>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-40 h-40">
              <Image
                src="/images/mission-tea.png"
                alt="Leaf n Roots mission — premium herbal tea extract"
                fill
                className="object-cover rounded-full border-4 border-accent/50 shadow-xl"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-base" style={{ fontFamily: 'var(--font-playfair)' }}>
                LEAF<span className="text-accent">n</span>ROOTS
              </p>
              <p className="text-xs opacity-70">Drop of Wellness</p>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Eye size={16} className="text-accent" />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-accent">Our Vision</h3>
            </div>
            <p className="text-secondary-foreground/90 leading-relaxed text-sm">
              {"To be India's"} most trusted brand for natural wellness extracts and to bring the goodness
              of nature to every home across the world.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative side images */}
      <div className="absolute left-0 top-0 bottom-0 w-32 opacity-20 pointer-events-none hidden lg:block">
        <Image
          src="/images/mission-tea.png"
          alt=""
          fill
          className="object-cover object-right"
          aria-hidden="true"
        />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-32 opacity-20 pointer-events-none hidden lg:block">
        <Image
          src="/images/hero-spices.png"
          alt=""
          fill
          className="object-cover object-left"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
