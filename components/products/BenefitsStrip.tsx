import Image from 'next/image'
import { MessageCircle, Flame, Shield, Zap, Leaf } from 'lucide-react'

const benefits = [
  { icon: Flame, label: 'Supports\nDigestion' },
  { icon: Shield, label: 'Boosts\nImmunity' },
  { icon: Zap, label: 'Natural\nEnergy Boost' },
  { icon: Leaf, label: 'Promotes\nWellness' },
]

export default function BenefitsStrip() {
  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-28 h-28 rounded-full overflow-hidden shrink-0 shadow-lg">
              <Image
                src="/images/mission-tea.png"
                alt="A drop of wellness for a better you"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left space-y-3">
              <h3
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                A Drop of Wellness<br />For a Better You
              </h3>
              <a
                href="https://wa.me/917619610605"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <MessageCircle size={16} />
                Order on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="grid grid-cols-4 gap-4">
            {benefits.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <p className="text-xs font-semibold text-foreground whitespace-pre-line leading-tight">
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
