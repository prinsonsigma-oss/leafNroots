import { Leaf, Ban, FlaskConical, Wheat, Droplets, MapPin } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: '100% Natural Ingredients',
    description: "Pure & natural ingredients from India's finest growing regions.",
  },
  {
    icon: Ban,
    title: 'No Artificial Flavours',
    description: 'Absolutely no artificial flavours, colours or preservatives.',
  },
  {
    icon: FlaskConical,
    title: 'Lab Tested Quality',
    description: 'Every batch is rigorously tested for purity, safety and quality.',
  },
  {
    icon: Wheat,
    title: 'Authentic Indian Ingredients',
    description: 'Sourced from trusted farmers and plantations across India.',
  },
  {
    icon: Droplets,
    title: 'Easy to Use',
    description: 'Just a few drops for a refreshing & healthy experience.',
  },
  {
    icon: MapPin,
    title: 'Made in India',
    description: 'Proudly made in India with care, passion and purpose.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-10 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-foreground leading-tight">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
