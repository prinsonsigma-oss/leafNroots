import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Leaf } from 'lucide-react'
import { products as catalog, whyLeafNRoots } from '@/data/products'

export const products = catalog.map((product) => ({
  id: product.id,
  name: product.name,
  description: product.description,
  image: product.productImages[0],
  href: product.href,
}))

const whyReasons = whyLeafNRoots.slice(0, 5)

export default function ProductGrid() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2">
          <Leaf size={16} className="text-primary shrink-0" />
          <h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground tracking-wide uppercase text-center"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Signature Drops
          </h2>
          <Leaf size={16} className="text-primary shrink-0" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-3 sm:mt-5">
          {products.slice(4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          <div className="col-span-2 sm:col-span-1 bg-card border border-border rounded-xl p-4 sm:p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h3
                className="text-base sm:text-lg font-bold text-foreground mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Why Choose
                <br />
                Leaf n Roots?
              </h3>
              <ul className="space-y-3">
                {whyReasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                  >
                    <Check size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/about"
              className="mt-6 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Know More About Us
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        <h3
          className="font-bold text-foreground text-xs sm:text-sm leading-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {product.name}
        </h3>
        <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {product.description}
        </p>
        <a
          href={product.href}
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-primary text-primary px-3 py-2 rounded text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          View Details
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  )
}
