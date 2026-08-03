'use client'

import Image from 'next/image'
import { useRef, useState, type ReactNode } from 'react'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {
  Star,
  CheckCircle2,
  CheckCircle,
  ShoppingBag,
  Droplets,
  CupSoda,
  Smile,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Leaf,
} from 'lucide-react'
import {
  keyHighlights,
  sizeOptions,
  whyLeafNRoots,
  type Product,
  type ProductPricing,
} from '@/data/products'

export default function ProductDetailPage({ product }: { product: Product }) {
  const reviewsRef = useRef<HTMLDivElement>(null)
  const [selectedSize, setSelectedSize] = useState<keyof ProductPricing>('5ml')
  const [selectedImage, setSelectedImage] = useState(product.productImages[0])

  const scrollLeft = () => {
    reviewsRef.current?.scrollBy({ left: -280, behavior: 'smooth' })
  }

  const scrollRight = () => {
    reviewsRef.current?.scrollBy({ left: 280, behavior: 'smooth' })
  }

  return (
    <div className="overflow-x-hidden">
      <AnnouncementBar />
      <Header />
      <div className="bg-background min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="bg-card rounded-xl border overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  width={700}
                  height={700}
                  className="w-full h-auto max-h-[28rem] sm:max-h-[36rem] lg:max-h-[40rem] object-cover"
                  priority
                />
              </div>

              <div className="flex gap-2 sm:gap-3 mt-4 flex-wrap">
                {product.productImages.map((image) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImage(image)}
                    className={`border rounded-lg overflow-hidden w-16 h-16 sm:w-20 sm:h-20 ${
                      selectedImage === image ? 'border-primary border-2' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  (128 Reviews)
                </span>
              </div>

              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                {product.description}
              </p>

              <p className="text-xs sm:text-sm font-semibold text-primary mb-5 sm:mb-6">
                No Tea Extract Used · No Artificial Tea Flavour
              </p>

              <div className="mb-5 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-primary">
                  ₹{product.pricing[selectedSize].toLocaleString('en-IN')}
                </span>
                <span className="ml-2 text-muted-foreground text-sm sm:text-base">
                  onwards
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                {keyHighlights.map((text) => (
                  <Feature key={text} text={text} />
                ))}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {sizeOptions.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 sm:px-4 py-2 rounded-lg border text-sm transition-all ${
                        selectedSize === size
                          ? 'bg-primary text-white border-primary'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 lg:mt-10">
                <a
                  href="https://wa.me/+917019965445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3.5 sm:py-4 rounded-lg flex items-center justify-center gap-2 font-semibold text-sm sm:text-base w-full"
                >
                  <ShoppingBag size={18} />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Benefits + Ingredients */}
          <div className="mt-10 sm:mt-16 grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            <section className="lg:col-span-2 bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_280px] gap-6 lg:gap-8 p-5 sm:p-8 lg:p-10 items-start">
                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-foreground"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Benefits
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    {product.benefits.map((benefit) => (
                      <BenefitCard key={benefit} title={benefit} />
                    ))}
                  </div>
                </div>

                <div className="flex justify-center md:justify-end order-first md:order-none">
                  <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-primary/10">
                    <Image
                      src={product.benefitsImage}
                      alt={`${product.shortName} beverage`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="border rounded-2xl p-5 sm:p-6 bg-background">
              <h2
                className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Ingredients
              </h2>
              <div className="space-y-3">
                {product.ingredients.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 sm:gap-4 border rounded-xl p-3 hover:shadow-md transition"
                  >
                    {item.image ? (
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Leaf size={20} className="text-primary" />
                      </div>
                    )}
                    <h3 className="font-semibold text-sm leading-snug">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* How To Use */}
          <section className="mt-10 sm:mt-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
              <div
                className="relative overflow-hidden rounded-2xl min-h-[280px]"
                style={{
                  backgroundImage: `url('${product.howToUseBackground}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 p-5 sm:p-8">
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    How To Use
                  </h2>
                  <p className="text-white/90 text-sm mb-6 sm:mb-8 max-w-md">
                    {product.howToUse}
                  </p>

                  <div className="space-y-5 sm:space-y-8">
                    <HowToStep
                      icon={<Droplets size={22} className="text-white" />}
                      title="Step 1"
                      text={product.howToUseSteps[0]}
                    />
                    <HowToStep
                      icon={<CupSoda size={22} className="text-white" />}
                      title="Step 2"
                      text={product.howToUseSteps[1]}
                    />
                    <HowToStep
                      icon={<Smile size={22} className="text-white" />}
                      title="Step 3"
                      text={product.howToUseSteps[2]}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="relative w-full aspect-[16/10] min-h-[200px] sm:min-h-[260px] rounded-2xl overflow-hidden border shadow-lg bg-[#f3efe6]">
                  <Image
                    src="/images/pack.png"
                    alt="Packaging options"
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl px-3 sm:px-4 py-3 flex items-center gap-3 shrink-0">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Lightbulb size={18} className="text-primary" />
                  </div>
                  <p className="font-semibold text-xs sm:text-sm leading-snug">
                    Bulk packaging available for businesses and distributors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why LEAF n ROOTS */}
          <section className="mt-10 sm:mt-16 border rounded-2xl p-5 sm:p-8 bg-muted/30">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Why LEAF n ROOTS?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {whyLeafNRoots.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 bg-background border rounded-xl p-3 sm:p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-green-600 shrink-0 mt-0.5"
                  />
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <section className="mt-10 sm:mt-16 mb-8 sm:mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Customer Reviews
            </h2>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
              <div className="border rounded-2xl p-4 sm:p-5 shadow-sm h-full flex flex-col">
                <div className="flex text-yellow-500 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={22} fill="currentColor" />
                  ))}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-2">4.8</h3>
                <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                  Based on 128 reviews
                </p>
                <div className="space-y-3 mt-auto">
                  {[
                    { star: 5, count: 102, width: '85%' },
                    { star: 4, count: 20, width: '20%' },
                    { star: 3, count: 4, width: '5%' },
                    { star: 2, count: 1, width: '2%' },
                    { star: 1, count: 1, width: '2%' },
                  ].map((item) => (
                    <div key={item.star} className="flex items-center gap-2 sm:gap-3">
                      <span className="w-5 sm:w-6 text-sm font-medium">
                        {item.star}
                      </span>
                      <Star
                        size={14}
                        fill="currentColor"
                        className="text-yellow-500 shrink-0"
                      />
                      <div className="flex-1 h-2.5 sm:h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-700 rounded-full"
                          style={{ width: item.width }}
                        />
                      </div>
                      <span className="text-sm w-8 text-right">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border rounded-2xl p-4 sm:p-5 shadow-sm h-full flex flex-col min-w-0">
                <div className="flex justify-end gap-2 mb-4 sm:mb-6">
                  <button
                    onClick={scrollLeft}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center hover:bg-muted transition"
                    aria-label="Previous reviews"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center hover:bg-muted transition"
                    aria-label="Next reviews"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div
                  ref={reviewsRef}
                  className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide flex-1 border-none -mx-1 px-1"
                >
                  {product.reviews.map((review) => (
                    <div
                      key={review.name}
                      className="min-w-[85%] sm:min-w-[280px] max-w-[320px]"
                    >
                      <ReviewCard name={review.name} review={review.review} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <CheckCircle size={16} className="text-primary shrink-0" />
      <span className="text-xs sm:text-sm font-medium leading-snug">{text}</span>
    </div>
  )
}

function BenefitCard({ title }: { title: string }) {
  return (
    <div className="rounded-xl">
      <div className="flex items-start gap-3">
        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
        <h3 className="font-semibold text-black text-sm sm:text-base leading-snug">
          {title}
        </h3>
      </div>
    </div>
  )
}

function HowToStep({
  icon,
  title,
  text,
}: {
  icon: ReactNode
  title: string
  text: string
}) {
  return (
    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-white text-base sm:text-lg">{title}</h3>
        <p className="text-white/90 text-sm sm:text-base leading-snug">{text}</p>
      </div>
    </div>
  )
}

function ReviewCard({ name, review }: { name: string; review: string }) {
  return (
    <div className="border rounded-xl p-4 sm:p-5 h-full">
      <div className="flex text-yellow-500 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground mb-4">{review}</p>
      <p className="font-semibold">{name}</p>
    </div>
  )
}
