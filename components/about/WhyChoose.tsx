import { Award, Heart, Coffee, Activity, Leaf } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the best ingredients make it to our drops.',
  },
  {
    icon: Heart,
    title: 'Crafted with Care',
    description: 'Blended with expertise and passion.',
  },
  {
    icon: Coffee,
    title: 'Great Taste',
    description: 'Rich aroma and natural flavor in every drop.',
  },
  {
    icon: Activity,
    title: 'Better Wellness',
    description: 'Support your daily wellness in the most natural way.',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    description: 'Ethical sourcing for a better planet and future.',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Leaf size={16} className="text-primary" />
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-wide text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
            Why Choose Leaf n Roots?
          </h2>
          <Leaf size={16} className="text-primary" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-primary">
                <Icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
