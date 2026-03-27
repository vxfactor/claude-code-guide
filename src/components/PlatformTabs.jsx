import { createContext, useContext, useState } from 'react'

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
    <div className="inline-flex border border-border bg-white shadow-brutal">
      <button
        onClick={() => setPlatform('mac')}
        className={`px-6 py-2.5 text-sm font-semibold transition-all ${
          platform === 'mac'
            ? 'bg-primary text-white'
            : 'text-secondary hover:text-primary'
        }`}
      >
        Mac
      </button>
      <button
        onClick={() => setPlatform('windows')}
        className={`px-6 py-2.5 text-sm font-semibold transition-all ${
          platform === 'windows'
            ? 'bg-primary text-white'
            : 'text-secondary hover:text-primary'
        }`}
      >
        Windows
      </button>
    </div>
  )
}
