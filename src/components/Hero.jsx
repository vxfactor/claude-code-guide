import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Terminal, ArrowDown } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6, delay: 0.2 })
        .from('.hero-title', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
        .from('.hero-sub', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-8 pt-24"
    >
      <div className="max-w-[720px] mx-auto">
        <div className="hero-badge inline-flex items-center gap-2 bg-beige text-secondary text-sm font-medium px-4 py-2 mb-8">
          <Terminal size={16} />
          Free Setup Guide
        </div>

        <h1
          className="hero-title font-serif text-primary font-bold leading-[1.1] tracking-tight"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
        >
          Get Started with Claude Code
        </h1>

        <p className="hero-sub text-secondary text-lg mt-6 max-w-[560px] mx-auto leading-relaxed">
          Set up Claude Code on Mac or Windows in under 10 minutes. No coding experience required. Once it's running, you can start building your own AI agents.
        </p>

        <div className="hero-cta mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#installation"
            className="bg-accent text-[#feffff] font-semibold px-8 py-3.5 text-base hover:bg-accent-hover hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Start Setup
          </a>
          <a
            href="#claude-md"
            className="text-primary font-medium text-base underline underline-offset-4 decoration-border hover:decoration-accent transition-colors"
          >
            Skip to CLAUDE.md Guide
          </a>
        </div>

        <a
          href="#what-is-claude"
          className="inline-block mt-16 text-secondary hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}
