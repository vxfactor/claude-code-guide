import CodeBlock from './CodeBlock'
import { FolderOpen, Terminal, Globe, ArrowLeft, MessageSquare } from 'lucide-react'

const steps = [
  {
    icon: <FolderOpen size={20} />,
    title: 'Navigate to your project',
    description: 'Open your terminal and go to any project folder — or create a new empty one.',
    code: 'cd your-project',
  },
  {
    icon: <Terminal size={20} />,
    title: 'Run claude',
    description: 'Type claude and hit enter. This starts the interactive agent.',
    code: 'claude',
  },
  {
    icon: <Globe size={20} />,
    title: 'Sign in via browser',
    description: 'Your browser opens automatically for a one-time OAuth sign-in with your Anthropic account. If it doesn\'t open, press c to copy the URL.',
    code: null,
  },
  {
    icon: <ArrowLeft size={20} />,
    title: 'Return to terminal',
    description: 'After signing in, go back to your terminal. You\'re now authenticated — no API keys to paste, no config files to edit.',
    code: null,
  },
  {
    icon: <MessageSquare size={20} />,
    title: 'Start talking',
    description: 'Describe what you want in plain English. Claude Code reads your files, understands your project, and gets to work.',
    code: null,
  },
]

export default function FirstRun() {
  return (
    <section id="first-run" className="py-20 md:py-28 px-8">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-[#feffff] font-serif font-bold text-xl mb-4">
            2
          </div>
          <h2
            className="font-serif text-primary font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}
          >
            Your First Run
          </h2>
          <p className="text-secondary mt-3">Five steps and you're up and running.</p>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5">
              {/* Step number line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[#feffff] border border-border flex items-center justify-center text-accent shadow-brutal flex-shrink-0">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-full bg-border mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-6 flex-1">
                <h3 className="font-sans font-semibold text-primary text-[0.9375rem]">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm mt-1 leading-relaxed">
                  {step.description}
                </p>
                {step.code && (
                  <div className="mt-3 shadow-brutal">
                    <CodeBlock>{step.code}</CodeBlock>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
