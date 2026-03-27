import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function SplitReveal({ text, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const words = ref.current.querySelectorAll('.word')
    gsap.fromTo(words, { opacity: 0.1 }, {
      opacity: 1,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      },
    })
  }, [])

  return (
    <p ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word inline-block mr-[0.3em]">{word}</span>
      ))}
    </p>
  )
}

export default function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.to(sectionRef.current.querySelector('.parallax-bg'), {
      yPercent: -20,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
  }, [])

  return (
    <section id="philosophy" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden py-32">
      {/* Parallax background */}
      <div
        className="parallax-bg absolute inset-0 scale-125 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=2000&q=80')` }}
      />
      <div className="absolute inset-0 bg-charcoal/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <p className="text-clay font-mono text-xs tracking-[0.3em] uppercase mb-12">Philosophy</p>

        <div className="space-y-16">
          <div>
            <p className="text-cream/30 text-sm font-mono mb-4">The Old Way</p>
            <SplitReveal
              text="Do everything manually. Hire more people. Hope it scales. Watch quality drop as volume increases."
              className="text-3xl md:text-5xl font-serif font-light text-cream/60 leading-tight"
            />
          </div>

          <div className="w-24 h-px bg-clay/40" />

          <div>
            <p className="text-clay text-sm font-mono mb-4">The New Way</p>
            <SplitReveal
              text="Build intelligent systems. Maintain quality at any scale. Focus on strategy, not execution."
              className="text-3xl md:text-5xl font-serif font-light text-cream leading-tight"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
