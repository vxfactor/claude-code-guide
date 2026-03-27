import { useState } from 'react'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/mo',
    description: 'Perfect for getting started with a solid foundation.',
    features: ['Feature one', 'Feature two', 'Feature three', 'Email support'],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/mo',
    description: 'For teams ready to scale with advanced capabilities.',
    features: ['Everything in Starter', 'Feature four', 'Feature five', 'Feature six', 'Priority support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for organizations with complex needs.',
    features: ['Everything in Professional', 'Feature seven', 'Feature eight', 'Dedicated manager', '24/7 support'],
    popular: false,
  },
]

export default function Membership() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-clay font-mono text-xs tracking-[0.3em] uppercase mb-4">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-cream mb-4">
            Choose Your Plan
          </h2>
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            Simple, transparent pricing that scales with your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative rounded-3xl p-8 border transition-all duration-500 ${
                tier.popular
                  ? 'bg-clay/5 border-clay/30 scale-[1.02]'
                  : 'bg-moss/30 border-white/5 hover:border-white/10'
              } ${hovered === i ? 'transform -translate-y-2' : ''}`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-clay text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-cream text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-cream/40 text-sm mb-6">{tier.description}</p>

              <div className="mb-8">
                <span className="text-cream text-4xl font-light">{tier.price}</span>
                <span className="text-cream/40 text-sm">{tier.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-cream/60 text-sm">
                    <Check size={16} className="text-clay flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-clay text-white hover:opacity-90'
                    : 'bg-white/5 text-cream border border-white/10 hover:bg-white/10'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
