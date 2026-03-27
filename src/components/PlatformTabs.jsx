import { createContext, useContext, useState } from 'react'
import { Apple, Monitor } from 'lucide-react'

const PlatformContext = createContext()

export function PlatformProvider({ children }) {
  const [platform, setPlatform] = useState('mac')
  return (
    <PlatformContext.Provider value={{ platform, setPlatform }}>
      {children}
    </PlatformContext.Provider>
  )
}

export function usePlatform() {
  return useContext(PlatformContext)
}

export default function PlatformTabs() {
  const { platform, setPlatform } = usePlatform()

  return (
    <div className="inline-flex bg-beige p-1">
      <button
        onClick={() => setPlatform('mac')}
        className={`flex items-center gap-2 px-5 py-2 text-sm font-semibold transition-all ${
          platform === 'mac'
            ? 'bg-primary text-[#feffff] shadow-sm'
            : 'text-secondary hover:text-primary'
        }`}
      >
        <Apple size={14} />
        Mac
      </button>
      <button
        onClick={() => setPlatform('windows')}
        className={`flex items-center gap-2 px-5 py-2 text-sm font-semibold transition-all ${
          platform === 'windows'
            ? 'bg-primary text-[#feffff] shadow-sm'
            : 'text-secondary hover:text-primary'
        }`}
      >
        <Monitor size={14} />
        Windows
      </button>
    </div>
  )
}
