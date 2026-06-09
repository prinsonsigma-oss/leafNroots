import Link from 'next/link'
import { MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/ui/SocialIcons'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
]

const productLinks = [
  'Black Lemon Tea Extract',
  'Irani Chai Extract',
  'Ginger Extract',
  'Detox Extract',
  'Kashmir Kahwa Extract',
  'Cardamom Extract',
  'Masala Chai Extract',
]

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="text-accent font-bold text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>LR</span>
              </div>
              <div>
                <p className="font-bold text-base" style={{ fontFamily: 'var(--font-playfair)' }}>
                  LEAF<span className="text-accent">n</span>ROOTS
                </p>
                <p className="text-xs opacity-70">Drop of Wellness</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {"Nature's goodness in every drop. Premium wellness extracts crafted for a better you."}
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="WhatsApp" className="opacity-70 hover:opacity-100 hover:text-accent transition-all">
                <WhatsAppIcon size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="opacity-70 hover:opacity-100 hover:text-accent transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="opacity-70 hover:opacity-100 hover:text-accent transition-all">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-accent">Our Products</h3>
            <ul className="space-y-2.5">
              {productLinks.map((p) => (
                <li key={p}>
                  <Link href="/products" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + WhatsApp */}
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-accent">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex gap-2.5 text-sm opacity-80">
                  <MapPin size={15} className="shrink-0 mt-0.5 text-accent" />
                  <span>L&R Naturals, Willys Centre, Collectors Gate, Balmatta, Mangaluru – 575002, Karnataka, India.</span>
                </li>
                <li>
                  <a href="tel:+917619610605" className="flex gap-2.5 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                    <Phone size={15} className="shrink-0 text-accent" />
                    +91 76196 10605
                  </a>
                </li>
                <li>
                  <a href="mailto:info@leafnroot.in" className="flex gap-2.5 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                    <Mail size={15} className="shrink-0 text-accent" />
                    info@leafnroot.in
                  </a>
                </li>
                <li>
                  <a href="https://www.leafnroot.in" className="flex gap-2.5 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                    <Globe size={15} className="shrink-0 text-accent" />
                    www.leafnroot.in
                  </a>
                </li>
              </ul>
            </div>
            {/* WhatsApp Box */}
            <div className="border border-accent/30 rounded-lg p-4 bg-white/5">
              <p className="text-sm font-semibold text-accent mb-1">ORDER ON WHATSAPP</p>
              <p className="text-xs opacity-70 mb-3">Have questions or want to place your order? Chat with us on WhatsApp.</p>
              <a
                href="https://wa.me/917619610605"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded text-sm font-semibold hover:bg-primary/80 transition-colors"
              >
                <MessageCircle size={15} />
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
          <span>© 2024 Leaf n Roots. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/contact" className="hover:opacity-100 transition-opacity">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
