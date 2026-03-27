import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CodeBlock({ children, label }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      {label && (
        <div className="bg-dark text-cream/60 text-xs font-mono px-4 py-1.5 border-b border-cream/10">
          {label}
        </div>
      )}
      <div className="code-block">
        <code>{children}</code>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 text-cream/40 hover:text-cream transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  )
}
