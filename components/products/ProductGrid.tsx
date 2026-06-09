import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Leaf } from 'lucide-react'

export const products = [
  {
    id: 'black-lemon-tea',
    name: 'Black Lemon Tea Extract',
    description: 'Refreshing blend of black tea and zesty lemon for a revitalizing experience.',
    image: '/images/product-black-lemon.png',
  },
  {
    id: 'irani-chai',
    name: 'Irani Chai Extract',
    description: 'Authentic Irani chai with a perfect blend of tea and traditional spices.',
    image: '/images/product-irani-chai.png',
  },
  {
    id: 'ginger',
    name: 'Ginger Extract',
    description: 'Pure ginger extract with natural warmth and bold taste.',
    image: '/images/product-ginger.png',
  },
  {
    id: 'detox',
    name: 'Detox Extract',
    description: 'A refreshing blend of lemon, herbs and spices to support your daily detox.',
    image: '/images/product-detox.png',
  },
  {
    id: 'kashmir-kahwa',
    name: 'Kashmir Kahwa Extract',
    description: 'Traditional Kahwa with saffron, green tea and aromatic spices from Kashmir.',
    image: '/images/product-kashmir-kahwa.png',
  },
  {
    id: 'cardamom',
    name: 'Cardamom Extract',
    description: 'Made from the finest Malnad cardamom for rich aroma and flavour.',
    image: '/images/product-cardamom.png',
  },
  {
    id: 'masala-chai',
    name: 'Masala Chai Extract',
    description: 'Perfect blend of Indian spices and strong chai flavour.',
    image: '/images/product-masala-chai.png',
  },
]

const whyReasons = [
  'Premium quality natural extracts',
  'Authentic ingredients from India\'s finest regions',
  'Advanced extraction for maximum goodness',
  'Easy to use – just a few drops',
  'Trusted by thousands of happy customers',
]

export default function ProductGrid() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Leaf size={16} className="text-primary" />
          <h2
            className="text-2xl lg:text-3xl font-bold text-foreground tracking-wide uppercase"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Signature Extracts
          </h2>
          <Leaf size={16} className="text-primary" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Second row: 3 products + why choose card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {products.slice(4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* Why Choose Card */}
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                Why Choose<br />Leaf n Roots?
              </h3>
              <ul className="space-y-3">
                {whyReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-2 text-sm text-muted-foreground">
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
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-foreground text-sm leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
        <a
          href="https://wa.me/917619610605"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-primary text-primary px-3 py-2 rounded text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          View Details
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  )
}
