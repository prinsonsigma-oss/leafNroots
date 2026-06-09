import { MessageCircle, Package, Truck, Shield } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Chat on WhatsApp',
    description: 'Quick replies on WhatsApp',
  },
  {
    icon: Package,
    title: 'Bulk Orders',
    description: 'Special pricing for distributors',
  },
  {
    icon: Truck,
    title: 'Pan India Delivery',
    description: 'Safe and secure delivery',
  },
  {
    icon: Shield,
    title: 'Trusted Quality',
    description: 'Lab tested and 100% natural',
  },
]

export default function ContactFeatures() {
  return (
    <div className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <p className="text-sm font-bold text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
