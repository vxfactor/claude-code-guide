import { useState, useEffect } from 'react'

const cards = [
  { label: 'Metric One', value: '94.2%', trend: '+12.3%', positive: true },
  { label: 'Metric Two', value: '1,247', trend: '+8.1%', positive: true },
  { label: 'Metric Three', value: '3.2s', trend: '-22%', positive: true },
]

export default function DiagnosticShuffler() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-moss/50 rounded-2xl p-6 border border-white/5 h-full">
      <p className="text-cream/40 text-xs font-mono uppercase tracking-wider mb-4">Diagnostics</p>
      <div className="relative h-40">
        {cards.map((card, i) => {
          const offset = (i - active + cards.length) % cards.length
          return (
            <div
              key={i}
              className="absolute inset-x-0 bg-charcoal border border-white/10 rounded-xl p-4 transition-all duration-500"
              style={{
                transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.05})`,
                opacity: offset === 0 ? 1 : 0.5 - offset * 0.15,
                zIndex: cards.length - offset,
              }}
            >
              <p className="text-cream/50 text-xs mb-1">{card.label}</p>
              <p className="text-cream text-2xl font-semibold">{card.value}</p>
              <p className={`text-xs mt-1 ${card.positive ? 'text-green-400' : 'text-red-400'}`}>{card.trend}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
