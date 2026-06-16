import Image from 'next/image'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="relative bg-green-900 text-secondary-foreground py-16 overflow-hidden">

  {/* Left Decorative Image */}
  <div className="absolute left-0 top-0 bottom-0 w-40 md:w-56 lg:w-80 opacity-90 pointer-events-none z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-900/50 to-transparent z-10" />
    <Image
      src="/images/m1.png"
      alt=""
      fill
      className="object-contain object-left"
      aria-hidden="true"
    />
  </div>

  {/* Right Decorative Image */}
  <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 lg:w-80 opacity-100 pointer-events-none z-0">
    <div className="absolute inset-0 bg-gradient-to-l from-green-900 via-green-900/50 to-transparent z-10" />
    <Image
      src="/images/m2.png"
      alt=""
      fill
      className="object-contain object-right"
      aria-hidden="true"
    />
  </div>

  {/* Main Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

      {/* Mission */}
      <div className="space-y-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <Target size={16} className="text-black" />
          </div>
          <h3 className="text-xl font-bold tracking-widest uppercase text-black">
            Our Mission
          </h3>
        </div>

        <p className="text-secondary-foreground/90 leading-relaxed text-sm md:text-base">
          To make wellness simple, natural and accessible for everyone
          through pure, high-quality extracts that enhance everyday life.
        </p>
      </div>

      {/* Center Logo */}
      <div className="flex justify-center">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <Image
            src="/images/lg.png"
            alt="Leaf n Roots mission — premium herbal tea extract"
            fill
            className="object-cover rounded-full  border-white/10"
          />
        </div>
      </div>

      {/* Vision */}
      <div className="space-y-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <Eye size={16} className="text-black" />
          </div>
          <h3 className="text-xl font-bold tracking-widest uppercase text-black">
            Our Vision
          </h3>
        </div>

        <p className="text-secondary-foreground/90 leading-relaxed text-sm md:text-base">
          To be India's most trusted brand for natural wellness extracts
          and to bring the goodness of nature to every home across the world.
        </p>
      </div>

    </div>
  </div>

</section>
  )
}
