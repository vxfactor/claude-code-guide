import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [setupOpen, setSetupOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSetupOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const setupLinks = [
    { href: '#prerequisites', label: 'Prerequisites' },
    { href: '#installation', label: 'Install Claude Code' },
    { href: '#dev-tools', label: 'Install Dev Tools' },
    { href: '#first-run', label: 'First Run' },
  ]

  const topLinks = [
    { href: '#where-to-run', label: 'Where to Run' },
    { href: '#troubleshooting', label: 'Troubleshooting' },
    { href: '#claude-md', label: 'CLAUDE.md' },
  ]

  const allLinks = [...setupLinks, ...topLinks]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="https://res.cloudinary.com/drdkvqdzd/image/upload/v1772094064/silver_logo_transparent_vrvadv.png"
            alt="Nic Silver"
            className="h-14"
          />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {/* Setup dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSetupOpen(!setupOpen)}
              className="text-[0.875rem] font-medium text-secondary hover:text-primary transition-colors flex items-center gap-1"
            >
              Setup Guide
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${setupOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {setupOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#feffff] border border-border shadow-brutal min-w-[200px]">
                {setupLinks.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setSetupOpen(false)}
                    className={`block px-4 py-3 text-sm text-secondary hover:text-primary hover:bg-cream transition-colors ${
                      i < setupLinks.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <span className="text-accent font-semibold mr-2">{i + 1}.</span>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {topLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.875rem] font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#installation"
            className="bg-accent text-[#feffff] font-semibold text-sm px-5 py-2.5 hover:bg-accent-hover hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-primary">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-cream border-b border-border px-8 pb-6 flex flex-col gap-1">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-2 mb-1">Setup Guide</p>
          {setupLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-secondary hover:text-primary pl-3 py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-border my-2" />
          {topLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-secondary hover:text-primary py-1.5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#installation"
            onClick={() => setMenuOpen(false)}
            className="bg-accent text-[#feffff] font-semibold text-sm px-5 py-2.5 text-center hover:bg-accent-hover transition-colors mt-2"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
