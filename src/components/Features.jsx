import DiagnosticShuffler from './DiagnosticShuffler'
import TelemetryTypewriter from './TelemetryTypewriter'
import AdaptiveRegimen from './AdaptiveRegimen'

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      {/* Rounded transition top */}
      <div className="absolute -top-16 left-0 right-0 h-32 bg-cream rounded-t-[3rem]" />

      <div className="relative max-w-6xl mx-auto bg-cream rounded-5xl px-8 py-20 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-charcoal text-4xl md:text-5xl font-serif font-light mb-4">
            Your Command Center
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Real-time dashboards and analytics that give you full visibility into every metric that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <DiagnosticShuffler />
          <TelemetryTypewriter />
          <AdaptiveRegimen />
        </div>
      </div>
    </section>
  )
}
