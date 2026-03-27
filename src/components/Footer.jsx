import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark py-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-[#feffff] text-xl font-bold mb-3">Nic Silver</h3>
            <p className="text-[#d9d0c9] text-sm leading-relaxed">
              AI consultant helping businesses automate with Claude Code and custom AI agents.
            </p>
          </div>

          <div>
            <h4 className="text-[#feffff] text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://code.claude.com/docs/en/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d9d0c9] text-sm hover:text-[#feffff] transition-colors inline-flex items-center gap-1"
                >
                  Official Claude Code Docs <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://code.claude.com/docs/en/getting-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d9d0c9] text-sm hover:text-[#feffff] transition-colors inline-flex items-center gap-1"
                >
                  Advanced Setup Guide <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1YSpH03XWzF_gxyNYCPOnMAAD9EIfBkTaGAQ-RBUUSds/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d9d0c9] text-sm hover:text-[#feffff] transition-colors inline-flex items-center gap-1"
                >
                  CLAUDE.md Generator Prompt <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#feffff] text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://nicsilver.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d9d0c9] text-sm hover:text-[#feffff] transition-colors inline-flex items-center gap-1"
                >
                  nicsilver.com <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/nicsilver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d9d0c9] text-sm hover:text-[#feffff] transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#feffff]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#d9d0c9]/50 text-xs">
            &copy; {new Date().getFullYear()} Nic Silver. All rights reserved.
          </p>
          <p className="text-[#d9d0c9]/50 text-xs">
            Installation instructions sourced from official Anthropic documentation.
          </p>
        </div>
      </div>
    </footer>
  )
}
