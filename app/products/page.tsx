import type { Metadata } from 'next'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductsHero from '@/components/products/ProductsHero'
import ProductGrid from '@/components/products/ProductGrid'
import BenefitsStrip from '@/components/products/BenefitsStrip'

export const metadata: Metadata = {
  title: 'Products — Leaf n Roots',
  description:
    'Explore our signature drops: Masala Blend, Ginger, Cardamom, Detox, Irani Chai, Kashmir Kahwa, and Lemon Mint Masala Blend. 100% natural spice & herb extracts — no tea extract used.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main>
        <ProductsHero />
        <ProductGrid />
        <BenefitsStrip />
      </main>
      <Footer />
    </div>
  )
}
