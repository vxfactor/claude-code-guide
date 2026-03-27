import { Bot, MessageSquare, FolderOpen, HelpCircle } from 'lucide-react'

function Callout({ children }) {
  return (
    <div className="bg-cream border border-border p-4 flex gap-3 items-start">
      <HelpCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
      <p className="text-secondary text-sm leading-relaxed">{children}</p>
    </div>
  )
}

export default function WhatIsClaude() {
  return (
    <section id="what-is-claude" className="py-20 md:py-28 px-8 bg-beige">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-16">
          <h2 className="font-serif text-primary font-bold tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            What is Claude Code?
          </h2>
          <p className="text-secondary text-lg mt-4 leading-relaxed">
            Claude Code is an AI assistant that runs on your computer. You talk to it in plain English — describe what you want — and it writes code, creates files, and builds things for you. Think of it like having a developer on your team that you can talk to.
          </p>
          <Callout>
            <strong>New to the terminal?</strong> The terminal (also called "command line" or "command prompt") is a text-based window where you type commands instead of clicking buttons. On Mac, search for "Terminal" in Spotlight. On Windows, search for "PowerShell." That's where Claude Code lives.
          </Callout>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
          <div className="bg-white border border-border p-7 shadow-brutal">
            <div className="w-10 h-10 bg-cream flex items-center justify-center mb-4">
              <MessageSquare size={20} className="text-accent" />
            </div>
            <h3 className="font-sans font-semibold text-primary text-base mb-2">Talk, Don't Type Code</h3>
            <p className="text-secondary text-sm leading-relaxed">
              You don't need to know how to code. Just describe what you want in plain English — like "create a landing page for my business" — and Claude Code builds it.
            </p>
          </div>

          <div className="bg-white border border-border p-7 shadow-brutal">
            <div className="w-10 h-10 bg-cream flex items-center justify-center mb-4">
              <FolderOpen size={20} className="text-accent" />
            </div>
            <h3 className="font-sans font-semibold text-primary text-base mb-2">Works Inside Your Files</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Point Claude Code at any folder on your computer and it can read, edit, and create files inside it. No copy-pasting between apps. It works directly in your project.
            </p>
          </div>

          <div className="bg-white border border-border p-7 shadow-brutal">
            <div className="w-10 h-10 bg-cream flex items-center justify-center mb-4">
              <Bot size={20} className="text-accent" />
            </div>
            <h3 className="font-sans font-semibold text-primary text-base mb-2">Build AI Agents</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Once you're comfortable, you can create agents — automated assistants that handle repeating tasks. Email replies, lead research, content creation, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
