import { useState } from 'react'
import { Terminal, MonitorSmartphone, Code2, CheckCircle, X, ExternalLink } from 'lucide-react'

const surfaces = [
  {
    id: 'terminal',
    icon: <Terminal size={24} />,
    name: 'Terminal',
    tagline: 'Maximum control',
    description: 'The original way to run Claude Code. Open your terminal, type claude, and go. Best for power users who want full scripting access and automation.',
    bestFor: 'Scripting, CI/CD pipelines, piping output, agent teams, automation',
    setup: 'Already installed if you followed the steps above. Just open any terminal and run claude.',
    pros: [
      'Full scripting and piping support (--print flag, stdin/stdout)',
      'Agent teams for multi-agent collaboration',
      'All permission modes including headless (dontAsk)',
      'Third-party providers (Amazon Bedrock, Google Vertex, Foundry)',
      'Lightest resource footprint',
      'Works over SSH and in containers',
    ],
    cons: [
      'No visual diff preview — changes shown as text',
      'No inline file navigation',
      'Steeper learning curve for non-terminal users',
    ],
  },
  {
    id: 'vscode',
    icon: <Code2 size={24} />,
    name: 'VS Code',
    tagline: 'Best of both worlds',
    description: 'A chat panel inside your editor with visual diffs, @-mentions, and inline code navigation. The CLI is bundled inside — open the integrated terminal for full CLI access too.',
    bestFor: 'Daily coding workflow, visual diffs alongside your editor, beginners who want a GUI',
    setup: 'Open VS Code → Extensions (Cmd+Shift+X) → Search "Claude Code" by Anthropic → Install. The extension handles authentication automatically.',
    pros: [
      'Visual inline diffs — see exactly what changed before accepting',
      '@-mention files with line ranges for precise context',
      'Multiple conversation tabs',
      'Plan review mode — approve changes before they happen',
      'Full CLI still available in VS Code\'s integrated terminal',
      'Checkpoints to roll back changes',
    ],
    cons: [
      'Requires VS Code (not available for other editors natively)',
      'Slightly heavier than terminal-only',
      'Some CLI-only features (agent teams, --print piping) need the integrated terminal',
    ],
  },
  {
    id: 'desktop',
    icon: <MonitorSmartphone size={24} />,
    name: 'Desktop App',
    tagline: 'Richest visual experience',
    description: 'A standalone app with the most polished visual interface. Exclusive features like live app preview, scheduled tasks, and PR monitoring that aren\'t available anywhere else.',
    bestFor: 'Visual review, scheduled tasks, PR monitoring, non-terminal users, live app preview',
    setup: 'Download from claude.ai/download. Open the app, sign in, and click the "Code" tab to start using Claude Code.',
    pros: [
      'Visual diff review with inline comments',
      'Live app preview with embedded browser',
      'Scheduled tasks GUI — run agents on a schedule',
      'GitHub PR monitoring with auto-merge',
      'File attachments and drag-and-drop',
      'Most approachable for non-technical users',
    ],
    cons: [
      'No third-party provider support (Anthropic account only)',
      'No agent teams or scripting/automation',
      'Cannot pipe input/output like the CLI',
      'macOS and Windows only (no Linux)',
    ],
  },
]

function SurfaceCard({ surface, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-6 border transition-all h-full flex flex-col ${
        isSelected
          ? 'border-accent bg-[#feffff] shadow-brutal-accent'
          : 'border-border bg-[#feffff] shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg'
      }`}
    >
      <div className={`w-12 h-12 flex items-center justify-center mb-4 ${isSelected ? 'bg-accent/10' : 'bg-cream'}`}>
        <div className={isSelected ? 'text-accent' : 'text-secondary'}>{surface.icon}</div>
      </div>
      <h3 className="font-sans font-semibold text-primary text-base">
        {surface.name}
      </h3>
      <p className="text-secondary text-sm mt-1">{surface.tagline}</p>
    </button>
  )
}

export default function WhereToRun() {
  const [selected, setSelected] = useState('terminal')
  const active = surfaces.find((s) => s.id === selected)

  return (
    <section id="where-to-run" className="py-20 md:py-28 px-8">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-[#feffff] font-serif font-bold text-xl mb-4">
            3
          </div>
          <h2
            className="font-serif text-primary font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}
          >
            Where to Run It
          </h2>
          <p className="text-secondary mt-3 max-w-[560px] mx-auto">
            Claude Code works across three surfaces. They all share the same engine and config — pick the one that fits how you work.
          </p>
        </div>

        {/* Surface selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {surfaces.map((surface) => (
            <SurfaceCard
              key={surface.id}
              surface={surface}
              isSelected={selected === surface.id}
              onClick={() => setSelected(surface.id)}
            />
          ))}
        </div>

        {/* Detail panel */}
        <div className="bg-[#feffff] border border-border p-8 shadow-brutal">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-accent">{active.icon}</div>
            <h3 className="font-serif text-primary font-bold text-xl">{active.name}</h3>
          </div>

          <p className="text-primary leading-relaxed mb-6">
            {active.description}
          </p>

          <div className="bg-cream border border-border p-4 mb-6">
            <p className="text-sm">
              <span className="font-semibold text-primary">Best for: </span>
              <span className="text-secondary">{active.bestFor}</span>
            </p>
          </div>

          <div className="bg-cream border border-border p-4 mb-6">
            <p className="text-sm">
              <span className="font-semibold text-primary">Setup: </span>
              <span className="text-secondary">{active.setup}</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pros */}
            <div>
              <h4 className="font-sans font-semibold text-primary text-sm mb-3">Strengths</h4>
              <ul className="space-y-2">
                {active.pros.map((pro, i) => (
                  <li key={i} className="flex gap-2 text-sm text-secondary">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <h4 className="font-sans font-semibold text-primary text-sm mb-3">Trade-offs</h4>
              <ul className="space-y-2">
                {active.cons.map((con, i) => (
                  <li key={i} className="flex gap-2 text-sm text-secondary">
                    <X size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-8 bg-beige border border-border p-6 shadow-brutal">
          <p className="text-sm text-primary leading-relaxed">
            <span className="font-semibold">Our recommendation: </span>
            Start with VS Code if you're new — you get visual diffs and the full CLI in the same window. As you get comfortable, the terminal gives you more power for automation. The Desktop app is great if you want scheduled tasks or don't use a code editor.
          </p>
        </div>
      </div>
    </section>
  )
}
