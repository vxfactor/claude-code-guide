import { useState, useEffect } from 'react'

const messages = [
  'Initializing system...',
  'Running diagnostics...',
  'Analyzing data points...',
  'Generating report...',
  'Optimization complete.',
]

export default function TelemetryTypewriter() {
  const [currentMsg, setCurrentMsg] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < messages[currentMsg].length) {
      const timeout = setTimeout(() => {
        setDisplayed(messages[currentMsg].slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 35)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentMsg((prev) => (prev + 1) % messages.length)
        setCharIndex(0)
        setDisplayed('')
      }, 1800)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, currentMsg])

  return (
    <div className="bg-moss/50 rounded-2xl p-6 border border-white/5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <p className="text-cream/40 text-xs font-mono uppercase tracking-wider">Live Feed</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs font-mono">Active</span>
        </div>
      </div>
      <div className="flex-1 bg-charcoal rounded-xl p-4 font-mono text-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-clay">$</span>
          <span className="text-cream/80">{displayed}<span className="animate-pulse text-clay">|</span></span>
        </div>
        <div className="mt-auto pt-4 border-t border-white/5 flex justify-between text-xs text-cream/30">
          <span>Status: Online</span>
          <span>Uptime: 99.9%</span>
        </div>
      </div>
    </div>
  )
}
