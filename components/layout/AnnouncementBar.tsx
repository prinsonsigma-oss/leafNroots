'use client'

import { Leaf, FlaskConical, Ban, MapPin, Mail, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons'

const features = [
  { icon: Leaf, label: '100% Natural Ingredients' },
  { icon: FlaskConical, label: 'Lab Tested Quality' },
  { icon: Ban, label: 'No Artificial Flavours' },
  { icon: MapPin, label: 'Made in India' },
]

export default function AnnouncementBar() {
  return (
    <div className="bg-secondary text-secondary-foreground text-xs py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        {/* Features */}
        <div className="hidden md:flex items-center gap-5">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 opacity-90">
              <Icon size={12} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        {/* Mobile: single feature */}
        <div className="flex md:hidden items-center gap-1.5 opacity-90">
          <Leaf size={12} />
          <span>100% Natural Ingredients</span>
        </div>
        {/* Contact + Social */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:info@leafnroot.in"
            className="hidden sm:flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity"
          >
            <Mail size={12} />
            <span>info@leafnroot.in</span>
          </a>
          <a
            href="tel:+917019965445"
            className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity"
          >
            <Phone size={12} />
            <span>+91 70199 65445</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="https://facebook.com/leafnroots.natural" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity">
              <FacebookIcon size={13} />
            </a>
            <a href="https://instagram.com/leafnroots.natural" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity">
              <InstagramIcon size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
