import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'
import { products } from '@/components/products/ProductGrid'

export default function HomeFeaturedProducts() {
  const featured = products.slice(0, 4)

  return (
    <section className="py-16 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Leaf size={16} className="text-primary" />
            <h2
              className="text-2xl lg:text-3xl font-bold text-foreground tracking-wide uppercase"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Our Signature Extracts
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3
                  className="font-bold text-foreground text-sm leading-tight"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Products
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
