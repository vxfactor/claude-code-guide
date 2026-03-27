import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#prerequisites', label: 'Prerequisites' },
    { href: '#installation', label: 'Install' },
    { href: '#first-run', label: 'First Run' },
    { href: '#where-to-run', label: 'Where to Run' },
    { href: '#troubleshooting', label: 'Troubleshooting' },
    { href: '#claude-md', label: 'CLAUDE.md' },
  ]

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
            className="h-8"
          />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] font-medium text-secondary hover:text-primary transition-colors"
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
        <div className="lg:hidden bg-cream border-b border-border px-8 pb-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#installation"
            onClick={() => setMenuOpen(false)}
            className="bg-accent text-[#feffff] font-semibold text-sm px-5 py-2.5 text-center hover:bg-accent-hover transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
