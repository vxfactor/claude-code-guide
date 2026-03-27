import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const dates = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

export default function AdaptiveRegimen() {
  const [selected, setSelected] = useState(null)
  const cursorRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current || !cursorRef.current) return
    const cells = gridRef.current.querySelectorAll('[data-cell]')
    if (cells.length === 0) return

    const sequence = [4, 8, 12, 7, 15]
    let step = 0

    const moveCursor = () => {
      const target = cells[sequence[step % sequence.length]]
      if (!target) return
      const rect = target.getBoundingClientRect()
      const parentRect = gridRef.current.getBoundingClientRect()

      gsap.to(cursorRef.current, {
        x: rect.left - parentRect.left + rect.width / 2,
        y: rect.top - parentRect.top + rect.height / 2,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          setSelected(sequence[step % sequence.length])
          step++
        }
      })
    }

    moveCursor()
    const interval = setInterval(moveCursor, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-moss/50 rounded-2xl p-6 border border-white/5 h-full">
      <p className="text-cream/40 text-xs font-mono uppercase tracking-wider mb-4">Scheduler</p>
      <p className="text-cream text-sm font-medium mb-3">Select Date</p>

      <div ref={gridRef} className="relative grid grid-cols-7 gap-1 text-center text-xs">
        {/* Animated cursor */}
        <div ref={cursorRef} className="absolute w-8 h-8 rounded-full bg-clay/20 border border-clay/40 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 transition-none" />

        {days.map(d => (
          <div key={d} className="text-cream/30 py-1">{d}</div>
        ))}
        {dates.map((date, i) => (
          <div
            key={i}
            data-cell
            className={`py-1.5 rounded-lg cursor-pointer transition-colors duration-200 ${selected === i ? 'bg-clay text-white' : 'text-cream/60 hover:bg-white/5'}`}
          >
            {date}
          </div>
        ))}
      </div>

      <button className="mt-4 w-full bg-clay/10 border border-clay/30 text-clay text-xs font-semibold py-2 rounded-lg hover:bg-clay/20 transition-colors">
        Confirm
      </button>
    </div>
  )
}
