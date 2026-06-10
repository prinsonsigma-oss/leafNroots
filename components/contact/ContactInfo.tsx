import { MapPin, Phone, Mail, Globe, Clock, } from 'lucide-react'

const info = [
  {
    icon: MapPin,
    title: 'Our Location',
    content: (
      <>
        <strong>L&R Naturals</strong>, Willys Centre, Collectors Gate, Balmatta,
        Mangaluru – 575002, Karnataka, India.
      </>
    ),
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 76196 10605',
    href: 'tel:+917619610605',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@leafnroot.in',
    href: 'mailto:info@leafnroot.in',
  },
  {
    icon: Globe,
    title: 'Website',
    content: 'www.leafnroot.in',
    href: 'https://www.leafnroot.in',
  },
  // {
  //   icon: Clock,
  //   title: 'Business Hours',
  //   content: 'Monday - Saturday: 9:30 AM - 6:30 PM\nSunday: Closed',
  // },

]

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Contact Us</p>
        <h1
          className="text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {"We're Here to"} <br />
          <span className="text-accent italic">{"Help You!"}</span>
        </h1>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
          Have questions about our products or want to place a bulk order?{' '}
          {"Get in touch with us, we'd love to hear from you!"}
        </p>
      </div>

      <ul className="space-y-5">
        {info.map(({ icon: Icon, title, content, href }) => (
          <li key={title} className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
              <Icon size={17} />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{title}</p>
              {href ? (
                <a
                  href={href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                >
                  {content}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground whitespace-pre-line">{content}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
