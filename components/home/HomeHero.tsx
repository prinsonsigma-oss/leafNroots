import Image from 'next/image'
import Link from 'next/link'
import { Leaf, MessageCircle } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <Leaf size={11} />
            100% Natural Wellness Extracts
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            A Drop of{' '}
            <span className="text-primary">Nature.</span>
            <br />A World of{' '}
            <span className="text-accent italic">Wellness.</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed text-base lg:text-lg max-w-lg">
            Premium wellness extracts made from {"India's"} finest spices, herbs and botanicals.
            From the cardamom hills of Malenadu to the saffron fields of Kashmir — just a few drops
            for a healthier, happier you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Leaf size={15} />
              Explore Products
            </Link>
            <a
              href="https://wa.me/917619610605"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MessageCircle size={15} />
              Order on WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-5 pt-2">
            {['100% Natural', 'Lab Tested', 'Made in India', 'No Preservatives'].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Leaf size={9} className="text-primary" />
                </div>
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-spices.png"
              alt="Leaf n Roots — premium wellness extracts with Indian spices and herbs"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating badge */}
          {/* <div className="absolute -bottom-4 left-4 lg:left-0 bg-card border border-border rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-primary-foreground font-bold text-sm" style={{ fontFamily: 'var(--font-playfair)' }}>LR</span>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">LEAF<span className="text-accent">ndd</span>ROOTS</p>
              <p className="text-xs text-muted-foreground">Drop of Wellness</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
