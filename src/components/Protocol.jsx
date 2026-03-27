import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your current setup, identify bottlenecks, and map out the optimal path forward.',
  },
  {
    number: '02',
    title: 'Implementation',
    description: 'We build and deploy your custom system, integrating with your existing tools and workflows.',
  },
  {
    number: '03',
    title: 'Optimization',
    description: 'We monitor, refine, and scale — ensuring consistent results as your needs evolve.',
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    if (!sectionRef.current) return

    cardsRef.current.forEach((card, i) => {
      if (!card) return

      ScrollTrigger.create({
        trigger: card,
        start: `top ${80 + i * 2}%`,
        end: `top ${20}%`,
        pin: i < steps.length - 1,
        pinSpacing: false,
      })

      gsap.fromTo(card, { opacity: 0, y: 60 }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1,
        },
      })
    })

    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [])

  return (
    <section id="process" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-clay font-mono text-xs tracking-[0.3em] uppercase mb-4">Process</p>
        <h2 className="text-4xl md:text-6xl font-serif font-light text-cream mb-6">
          The Protocol.
        </h2>
        <p className="text-cream/50 text-lg max-w-xl mb-20">
          A proven three-step process that takes you from where you are to where you want to be.
        </p>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-moss/30 border border-white/5 rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-start gap-6">
                <span className="text-clay font-mono text-sm mt-1">{step.number}</span>
                <div>
                  <h3 className="text-cream text-2xl md:text-3xl font-serif font-light mb-3">{step.title}</h3>
                  <p className="text-cream/50 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Decorative SVG */}
              <div className="mt-8 flex justify-end">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-clay/20">
                  <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="40" y1="2" x2="40" y2="78" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="2" y1="40" x2="78" y2="40" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
