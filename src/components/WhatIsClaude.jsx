import { Bot, MessageSquare, FolderOpen } from 'lucide-react'

export default function WhatIsClaude() {
  return (
    <section id="what-is-claude" className="py-20 md:py-28 px-8 bg-beige">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-16">
          <h2 className="font-serif text-primary font-bold tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            What is Claude Code?
          </h2>
          <p className="text-secondary text-lg mt-4 leading-relaxed">
            Claude Code is an AI coding agent that lives in your terminal. You describe what you want in plain English and it writes code, edits files, runs commands, and builds entire features — all inside your existing project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
          <div className="bg-white border border-border p-7 shadow-brutal">
            <div className="w-10 h-10 bg-cream flex items-center justify-center mb-4">
              <MessageSquare size={20} className="text-accent" />
            </div>
            <h3 className="font-sans font-semibold text-primary text-base mb-2">Talk, Don't Type Code</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Describe what you want built in natural language. Claude Code translates your intent into working code.
            </p>
          </div>

          <div className="bg-white border border-border p-7 shadow-brutal">
            <div className="w-10 h-10 bg-cream flex items-center justify-center mb-4">
              <FolderOpen size={20} className="text-accent" />
            </div>
            <h3 className="font-sans font-semibold text-primary text-base mb-2">Works In Your Project</h3>
            <p className="text-secondary text-sm leading-relaxed">
              It reads your files, understands your codebase, and makes changes directly. No copy-pasting between a chat window and your editor.
            </p>
          </div>

          <div className="bg-white border border-border p-7 shadow-brutal">
            <div className="w-10 h-10 bg-cream flex items-center justify-center mb-4">
              <Bot size={20} className="text-accent" />
            </div>
            <h3 className="font-sans font-semibold text-primary text-base mb-2">Build AI Agents</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Go beyond one-off tasks. Create persistent agents that automate workflows across your entire business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
