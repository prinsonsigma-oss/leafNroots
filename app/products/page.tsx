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
    'Explore our signature wellness extracts: Black Lemon Tea, Irani Chai, Ginger, Detox, Kashmir Kahwa, Cardamom, and Masala Chai extracts.',
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
