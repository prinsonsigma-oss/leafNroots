import type { Metadata } from 'next'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HomeHero from '@/components/home/HomeHero'
import FeaturesGrid from '@/components/about/FeaturesGrid'
import HomeFeaturedProducts from '@/components/home/HomeFeaturedProducts'
import OurStory from '@/components/about/OurStory'
import MissionVision from '@/components/about/MissionVision'
import WhyChoose from '@/components/about/WhyChoose'
import TestimonialsCarousel from '@/components/home/testimonial'

export const metadata: Metadata = {
  title: 'Leaf n Roots — Drop of Wellness',
  description:
    "Premium natural wellness extracts made from India's finest spices, herbs and botanicals. 100% Natural, Lab Tested, Made in India.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main>
        <HomeHero />
        <FeaturesGrid />
        <HomeFeaturedProducts />
        <OurStory />
        <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <TestimonialsCarousel />
      </div>
    </section>
        {/* <MissionVision />
        <WhyChoose /> */}
      </main>
      <Footer />
    </div>
  )
}
