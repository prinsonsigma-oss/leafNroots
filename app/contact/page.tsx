import type { Metadata } from 'next'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'
import ContactFeatures from '@/components/contact/ContactFeatures'
import ProductsBanner from '@/components/contact/ProductsBanner'

export const metadata: Metadata = {
  title: 'Contact Us — Leaf n Roots',
  description:
    'Get in touch with Leaf n Roots. Order on WhatsApp, place bulk orders, or send us a message. Located in Mangaluru, Karnataka.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero contact section */}
        <section className="bg-background py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 mt-8">
                <ContactInfo />
              </div>

              {/* Map */}
              <div className="lg:col-span-1 rounded-xl overflow-hidden shadow-md border border-border min-h-64">
                <iframe
                  title="L&R Naturals location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=74.82%2C12.84%2C74.87%2C12.88&layer=mapnik&marker=12.8598%2C74.843"
                  className="w-full h-full min-h-80"
                  loading="lazy"
                  style={{ border: 0 }}
                  aria-label="Map showing L&R Naturals location in Mangaluru"
                />
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-1">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <ContactFeatures />
        <ProductsBanner />
      </main>
      <Footer />
    </div>
  )
}
