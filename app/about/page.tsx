import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutHero from '@/components/about/AboutHero'
import FeaturesGrid from '@/components/about/FeaturesGrid'
import OurStory from '@/components/about/OurStory'
import MissionVision from '@/components/about/MissionVision'
import WhyChoose from '@/components/about/WhyChoose'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Leaf n Roots',
  description: 'Learn about Leaf n Roots, our story, mission, and vision for natural wellness.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main>
        <AboutHero />
        <FeaturesGrid />
        <OurStory />
        <MissionVision />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  )
}
