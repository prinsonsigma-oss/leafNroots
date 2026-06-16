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
    <section className="bg-yellow-100 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">

          {/* Left Side */}
          <div className="relative max-w-md">

            {/* Decorative Image Overlay */}
            <div className="absolute -left-8 -top-6 w-50 h-50 opacity-90 pointer-events-none">
              <Image
                src="/images/m1.png"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10 pl-36 lg:pl-60">
              <h3
                className="relative z-10 text-xl lg:text-2xl font-bold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A Drop of Wellness
                <br />
                <span className="text-primary">
                  For a Better You
                </span>
              </h3>

              <a
                href="https://wa.me/917619610605"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded mt-4 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <MessageCircle size={16} />
                Order on WhatsApp
              </a>

            </div>
          </div>

          {/* Right Side Benefits */}
          <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-between gap-4 lg:gap-0">

            {benefits.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className={`flex flex-col items-center text-center px-8 lg:px-10 py-2 flex-1 ${index !== benefits.length - 1
                  ? "lg:border-r border-border"
                  : ""
                  }`}
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary mb-3">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <span className="text-l md:text-sm font-medium text-foreground leading-tight whitespace-pre-line">
                  {label}
                </span>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}
