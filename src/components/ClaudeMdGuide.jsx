import { useState } from 'react'
import { FileText, ExternalLink, FolderTree, Lightbulb, Wrench, AlertCircle, BookOpen, HelpCircle } from 'lucide-react'

const tabs = [
  { id: 'what', label: 'What Is It?', icon: <BookOpen size={16} /> },
  { id: 'why', label: 'Why It Matters', icon: <Lightbulb size={16} /> },
  { id: 'folders', label: 'Hidden Folders', icon: <FolderTree size={16} /> },
  { id: 'prompt', label: 'The Prompt', icon: <Wrench size={16} /> },
]

function Callout({ children, type = 'info' }) {
  const styles = {
    info: 'bg-cream border-border',
    warning: 'bg-[#fef3e5] border-[#e8a840]',
  }
  return (
    <div className={`border p-4 flex gap-3 items-start ${styles[type]}`}>
      <HelpCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
      <div className="text-secondary text-sm leading-relaxed">{children}</div>
    </div>
  )
}

/* ─── Tab: What Is It? ─── */
function WhatIsIt() {
  return (
    <div className="space-y-5">
      <p>
        When you open Claude Code and start talking to it, there's a problem: it doesn't know anything about you. It doesn't know what your project is about, what tools you use, or how you like things done.
      </p>
      <p>
        Every single conversation starts from scratch.
      </p>
      <p>
        <strong>CLAUDE.md fixes that.</strong> It's a simple text file you put in your project folder. Every time Claude Code starts a new conversation, it reads this file first — before you say anything.
      </p>
      <p>
        Think of it like a brief for a new team member on their first day. You'd tell them: "Here's what we're building, here's how we do things, here's what to avoid." That's exactly what CLAUDE.md does for Claude Code.
      </p>

      <Callout>
        <strong>What does ".md" mean?</strong> It stands for "Markdown" — a simple text format that uses symbols like <code className="font-mono bg-beige px-1">#</code> for headings and <code className="font-mono bg-beige px-1">-</code> for bullet points. You can write it in any text editor. It's just a text file with light formatting.
      </Callout>

      <h3 className="font-sans font-semibold text-primary text-base pt-4">Where does it go?</h3>
      <p>
        Right in the root (top level) of your project folder. When Claude Code starts up, it walks through your folder looking for this file and loads it automatically.
      </p>

      {/* Simple visual */}
      <div className="bg-dark text-cream p-5 font-mono text-sm shadow-brutal space-y-1">
        <p className="text-accent font-bold">your-project/</p>
        <p className="pl-4">├── <span className="text-accent">CLAUDE.md</span> <span className="text-cream/50">← Claude reads this first</span></p>
        <p className="pl-4">├── src/</p>
        <p className="pl-4">├── package.json</p>
        <p className="pl-4">└── ... your other files</p>
      </div>
    </div>
  )
}

/* ─── Tab: Why It Matters ─── */
function WhyItMatters() {
  return (
    <div className="space-y-5">
      <p>
        Most people don't get the full Claude Code experience. Because they get this one file wrong.
      </p>
      <p className="text-secondary text-sm border-l-2 border-accent pl-5 py-1">
        I've built 20+ AI agents inside Claude Code. They touch every aspect of my business and let me run solo doing the work of a small team. But none of that would be possible without this file.
      </p>

      <h3 className="font-sans font-semibold text-primary text-base pt-2">Without CLAUDE.md</h3>
      <p>
        Claude Code guesses. It doesn't know your project uses React instead of Vue. It doesn't know you prefer simple code over clever code. It doesn't know your database is in Supabase, not Firebase. So it makes assumptions — and often gets them wrong.
      </p>
      <p>
        You end up correcting it constantly. "No, not that framework." "No, use this API instead." "No, that file goes over here." Every conversation starts with the same corrections.
      </p>

      <h3 className="font-sans font-semibold text-primary text-base pt-2">With a good CLAUDE.md</h3>
      <p>
        Everything clicks. Claude Code knows what your project is, what tech stack you use, what commands to run, and what mistakes to avoid. You stop repeating yourself and start getting useful work done immediately.
      </p>

      <h3 className="font-sans font-semibold text-primary text-base pt-2">The most common mistakes</h3>
      <div className="space-y-3">
        <div className="flex gap-3 items-start">
          <AlertCircle size={16} className="text-accent flex-shrink-0 mt-1" />
          <p><strong>Too basic:</strong> Just writing "This is a React project" gives Claude almost nothing to work with. It still has to guess everything else.</p>
        </div>
        <div className="flex gap-3 items-start">
          <AlertCircle size={16} className="text-accent flex-shrink-0 mt-1" />
          <p><strong>Brain dump:</strong> Pasting 1,500 lines of every possible instruction overwhelms Claude Code. Research shows it reliably follows around 200 instructions — after that, things get ignored.</p>
        </div>
        <div className="flex gap-3 items-start">
          <AlertCircle size={16} className="text-accent flex-shrink-0 mt-1" />
          <p><strong>No project clarity:</strong> If your CLAUDE.md doesn't explain <em>what you're building and who it's for</em>, Claude Code can't make good decisions. It needs to understand the goal, not just the tools.</p>
        </div>
      </div>

      <Callout>
        <strong>The sweet spot:</strong> Under 200 lines. Clear about what the project is, what tech it uses, what commands to run, and what to avoid. Think "onboarding doc for a smart new hire" — not an encyclopedia.
      </Callout>
    </div>
  )
}

/* ─── Tab: Hidden Folders ─── */
function HiddenFolders() {
  return (
    <div className="space-y-5">
      <p>
        Your CLAUDE.md is the starting point, but as your project grows, you'll notice a hidden folder called <code className="font-mono bg-beige px-1">.claude/</code> appear in your project. This is where Claude Code stores its more advanced configuration.
      </p>

      <Callout>
        <strong>What's a "hidden folder"?</strong> On Mac and Windows, folders that start with a dot (like <code className="font-mono bg-cream px-1">.claude</code>) are hidden by default — you won't see them in Finder or File Explorer unless you turn on "show hidden files." They're still there, just tucked away to keep things tidy.
      </Callout>

      <h3 className="font-sans font-semibold text-primary text-base pt-2">What's inside .claude/</h3>
      <p>
        Think of it as the control center for Claude Code. Here's what each piece does:
      </p>

      {/* Folder structure diagram */}
      <div className="bg-dark text-cream p-5 font-mono text-sm shadow-brutal space-y-1">
        <p className="text-accent font-bold">your-project/</p>
        <p className="pl-4">├── <span className="text-accent">CLAUDE.md</span> <span className="text-cream/50">← Main instructions</span></p>
        <p className="pl-4">└── <span className="text-accent">.claude/</span> <span className="text-cream/50">← Hidden control center</span></p>
        <p className="pl-12">├── <span className="text-[#a58372]">rules/</span> <span className="text-cream/50">← Always-on guidelines</span></p>
        <p className="pl-20 text-cream/40">├── code-style.md</p>
        <p className="pl-20 text-cream/40">├── testing.md</p>
        <p className="pl-20 text-cream/40">└── security.md</p>
        <p className="pl-12">├── <span className="text-[#a58372]">skills/</span> <span className="text-cream/50">← Reusable workflows</span></p>
        <p className="pl-20 text-cream/40">└── deploy/</p>
        <p className="pl-28 text-cream/40">└── SKILL.md</p>
        <p className="pl-12">├── <span className="text-[#a58372]">agents/</span> <span className="text-cream/50">← Specialist assistants</span></p>
        <p className="pl-20 text-cream/40">└── code-reviewer.md</p>
        <p className="pl-12">└── <span className="text-[#a58372]">settings.json</span> <span className="text-cream/50">← Permissions</span></p>
      </div>

      <div className="space-y-6 pt-2">
        <div>
          <h4 className="font-sans font-semibold text-primary text-sm flex items-center gap-2">
            <span className="w-6 h-6 bg-accent text-[#feffff] flex items-center justify-center text-xs font-bold">R</span>
            rules/ — Always-on guidelines
          </h4>
          <p className="text-secondary text-sm mt-2 leading-relaxed">
            Small markdown files that get loaded into <em>every</em> conversation automatically. Each file covers one topic — like "how to write code" or "how to handle errors." This keeps your main CLAUDE.md short while still giving Claude detailed instructions.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-primary text-sm flex items-center gap-2">
            <span className="w-6 h-6 bg-accent text-[#feffff] flex items-center justify-center text-xs font-bold">S</span>
            skills/ — Reusable workflows
          </h4>
          <p className="text-secondary text-sm mt-2 leading-relaxed">
            Skills are step-by-step recipes that Claude Code can follow. For example, a "deploy" skill might tell Claude exactly how to push your code to a server. You trigger them by typing <code className="font-mono bg-beige px-1">/skill-name</code> or Claude loads them automatically when your request matches.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-primary text-sm flex items-center gap-2">
            <span className="w-6 h-6 bg-accent text-[#feffff] flex items-center justify-center text-xs font-bold">A</span>
            agents/ — Specialist assistants
          </h4>
          <p className="text-secondary text-sm mt-2 leading-relaxed">
            Agents are like department heads. You define a "code reviewer" agent that only reviews code, or a "research" agent that searches the web. Each has its own personality, tools, and instructions. Claude Code delegates tasks to them so it can focus on orchestrating.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-primary text-sm flex items-center gap-2">
            <span className="w-6 h-6 bg-accent text-[#feffff] flex items-center justify-center text-xs font-bold">P</span>
            settings.json — Permissions
          </h4>
          <p className="text-secondary text-sm mt-2 leading-relaxed">
            Controls what Claude Code is allowed to do without asking you first. For example, you can allow it to run certain terminal commands automatically, or block it from deleting files. Think of it as the safety net.
          </p>
        </div>
      </div>

      <h3 className="font-sans font-semibold text-primary text-base pt-4">How does CLAUDE.md connect to all this?</h3>
      <p>
        Your CLAUDE.md is the overview — it tells Claude Code what the project is and how things are organized. It might say "rules for code style are in .claude/rules/code-style.md" or "use the deploy skill to push to production." Claude Code automatically discovers the rules, skills, and agents in the .claude folder, but your CLAUDE.md provides the big picture that ties everything together.
      </p>

      <Callout>
        <strong>You don't need all of this right away.</strong> Start with just a CLAUDE.md file. As you use Claude Code more, you'll naturally want to add rules, skills, and agents. The hidden folder grows with you.
      </Callout>
    </div>
  )
}

/* ─── Tab: The Prompt ─── */
function ThePrompt() {
  return (
    <div className="space-y-5">
      <p>
        Writing a good CLAUDE.md from scratch is hard. You have to figure out what to include, how much detail to give, and how to structure it so Claude Code actually follows it.
      </p>
      <p>
        <strong>So I built a prompt that does it for you.</strong>
      </p>
      <p>
        You paste the prompt into Claude Code, answer a few questions about your role, your tools, and your workflows, and it generates a complete CLAUDE.md tailored to how you actually work.
      </p>

      <h3 className="font-sans font-semibold text-primary text-base pt-2">What the prompt does</h3>
      <div className="space-y-3">
        <div className="flex gap-3 items-start bg-[#feffff] border border-border p-4">
          <span className="w-6 h-6 bg-beige flex items-center justify-center text-accent font-bold text-xs flex-shrink-0">1</span>
          <div>
            <p className="text-primary text-sm font-semibold">Asks about your project</p>
            <p className="text-secondary text-sm">What are you building? Who is it for? What tech do you use? This gives Claude Code the project clarity it needs to make smart decisions instead of guessing.</p>
          </div>
        </div>
        <div className="flex gap-3 items-start bg-[#feffff] border border-border p-4">
          <span className="w-6 h-6 bg-beige flex items-center justify-center text-accent font-bold text-xs flex-shrink-0">2</span>
          <div>
            <p className="text-primary text-sm font-semibold">Asks about your workflows</p>
            <p className="text-secondary text-sm">How do you build? How do you deploy? What commands do you run? This means Claude Code can follow your existing process instead of inventing its own.</p>
          </div>
        </div>
        <div className="flex gap-3 items-start bg-[#feffff] border border-border p-4">
          <span className="w-6 h-6 bg-beige flex items-center justify-center text-accent font-bold text-xs flex-shrink-0">3</span>
          <div>
            <p className="text-primary text-sm font-semibold">Sets up the right folder structure</p>
            <p className="text-secondary text-sm">The prompt creates not just the CLAUDE.md file, but also the <code className="font-mono bg-beige px-1">.claude/</code> folder with a proper rules directory. This gives you the right foundation from day one — the same structure the pros use.</p>
          </div>
        </div>
        <div className="flex gap-3 items-start bg-[#feffff] border border-border p-4">
          <span className="w-6 h-6 bg-beige flex items-center justify-center text-accent font-bold text-xs flex-shrink-0">4</span>
          <div>
            <p className="text-primary text-sm font-semibold">Keeps it concise</p>
            <p className="text-secondary text-sm">The generated CLAUDE.md stays under 200 lines — the sweet spot where Claude Code reliably follows every instruction without getting overwhelmed.</p>
          </div>
        </div>
      </div>

      <h3 className="font-sans font-semibold text-primary text-base pt-4">Why project clarity matters so much</h3>
      <p>
        Here's something most guides don't tell you: the <em>most important thing</em> in your CLAUDE.md isn't the tech stack or the commands. It's telling Claude Code what you're actually building and why.
      </p>
      <p>
        When Claude Code understands the goal — "this is an e-commerce store for handmade ceramics" or "this is an internal dashboard for our sales team" — it makes better decisions about everything. It picks the right approach, writes better copy, and avoids choices that don't fit your audience.
      </p>
      <p>
        Without that context, Claude Code has no way to prioritize. It's like giving a contractor a list of materials but not telling them what you're building. They might build something, but it probably won't be what you wanted.
      </p>

      {/* CTA */}
      <div className="mt-8 text-center">
        <div className="bg-[#feffff] border-2 border-accent p-8 shadow-brutal-accent">
          <h3 className="font-serif text-primary font-bold text-xl mb-2">
            Get the CLAUDE.md Generator Prompt
          </h3>
          <p className="text-secondary text-sm mb-6">
            Free. No sign up. Open the doc, copy the prompt, paste it into Claude Code, and answer a few questions. You'll have a production-ready CLAUDE.md in minutes.
          </p>
          <a
            href="https://docs.google.com/document/d/1YSpH03XWzF_gxyNYCPOnMAAD9EIfBkTaGAQ-RBUUSds/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-[#feffff] font-semibold px-8 py-3.5 text-base hover:bg-accent-hover hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Grab the Prompt <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
const tabContent = {
  what: WhatIsIt,
  why: WhyItMatters,
  folders: HiddenFolders,
  prompt: ThePrompt,
}

export default function ClaudeMdGuide() {
  const [activeTab, setActiveTab] = useState('what')
  const ActiveContent = tabContent[activeTab]

  return (
    <section id="claude-md" className="py-20 md:py-28 px-8">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-beige text-secondary text-sm font-medium px-4 py-2 mb-6">
            <FileText size={16} />
            Deep Dive
          </div>
          <h2
            className="font-serif text-primary font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}
          >
            The CLAUDE.md File Most People Get Wrong
          </h2>
          <p className="text-secondary mt-3 max-w-[560px] mx-auto">
            This is the single most important file in your project. Take 5 minutes to understand it.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-[#feffff] shadow-brutal'
                  : 'bg-[#feffff] text-secondary border border-border hover:text-primary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="text-primary leading-relaxed">
          <ActiveContent />
        </div>

        {/* Navigation between tabs */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-border">
          <button
            onClick={() => {
              const idx = tabs.findIndex((t) => t.id === activeTab)
              if (idx > 0) setActiveTab(tabs[idx - 1].id)
            }}
            className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all ${
              activeTab === tabs[0].id
                ? 'text-border cursor-default'
                : 'text-secondary hover:text-primary hover:bg-beige'
            }`}
            disabled={activeTab === tabs[0].id}
          >
            ← Previous
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-2.5 h-2.5 transition-all ${
                  activeTab === tab.id
                    ? 'bg-accent scale-125'
                    : 'bg-border hover:bg-secondary'
                }`}
                aria-label={`Go to ${tab.label}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              const idx = tabs.findIndex((t) => t.id === activeTab)
              if (idx < tabs.length - 1) setActiveTab(tabs[idx + 1].id)
            }}
            className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all ${
              activeTab === tabs[tabs.length - 1].id
                ? 'text-border cursor-default'
                : 'text-secondary hover:text-primary hover:bg-beige'
            }`}
            disabled={activeTab === tabs[tabs.length - 1].id}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}
