import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/components/products/ProductGrid'

export default function ProductsBanner() {
  return (
    <section className="bg-muted/50 border-y border-border py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left: CTA */}
          <div className="flex flex-col items-center lg:items-start gap-4 shrink-0 text-center lg:text-left">
            <div className="relative w-16 h-16">
              <Image
                src="/images/hero-spices.png"
                alt="Leaf n Roots logo"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <blockquote
              className="text-lg font-bold text-foreground text-balance"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              &ldquo;A Drop of Nature,<br />A World of Wellness.&rdquo;
            </blockquote>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore Our Products
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Product images scroll */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 w-full lg:w-auto hide-scrollbar">
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
