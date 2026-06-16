import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/components/products/ProductGrid'

export default function ProductsBanner() {
  return (
    <section className="relative bg-muted/50 border-y border-border py-10 overflow-hidden">

      {/* Decorative Left Image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 md:w-56 lg:w-72 h-40 md:h-56 lg:h-72 opacity-90 pointer-events-none">
        <Image
          src="/images/m1.png"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* Left Content */}
          <div className="pl-16 md:pl-24 lg:pl-67 flex flex-col items-center lg:items-start gap-4 shrink-0 text-center lg:text-left">

            <div className="relative w-24 h-24">
              <Image
                src="/images/lg.png"
                alt="Leaf n Roots logo"
                fill
                className="object-cover rounded-full"
              />
            </div>

            <blockquote
              className="text-lg font-bold text-foreground leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              &ldquo;A Drop of Nature,
              <br />
              A World of Wellness.&rdquo;
            </blockquote>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore Our Products
              <ArrowRight size={15} />
            </Link>

          </div>

          {/* Product Images */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 w-full hide-scrollbar">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative w-24 h-32 rounded-lg overflow-hidden shrink-0 shadow-md border border-border hover:scale-105 transition-transform"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
