import CodeBlock from './CodeBlock'
import { FolderOpen, Terminal, Globe, ArrowLeft, MessageSquare, HelpCircle } from 'lucide-react'

const steps = [
  {
    icon: <FolderOpen size={20} />,
    title: 'Open your terminal and go to a project folder',
    description: 'A "project folder" is just any folder on your computer where you want Claude Code to work. It could be an existing project or a brand new empty folder.',
    tip: 'Don\'t have a project yet? Create a new folder: mkdir my-first-project then cd my-first-project',
    code: 'cd your-project',
  },
  {
    icon: <Terminal size={20} />,
    title: 'Type "claude" and hit enter',
    description: 'This starts Claude Code. It will launch inside whatever folder you\'re in, and it can now see and edit any files in that folder.',
    code: 'claude',
  },
  {
    icon: <Globe size={20} />,
    title: 'Sign in through your browser',
    description: 'A browser window will pop up asking you to log in to your Anthropic account. This only happens once — after this, Claude Code remembers who you are.',
    tip: 'Browser didn\'t open? Press the "c" key to copy the login link, then paste it into your browser manually.',
    code: null,
  },
  {
    icon: <ArrowLeft size={20} />,
    title: 'Go back to your terminal',
    description: 'Once you\'ve signed in, switch back to your terminal window. You\'ll see Claude Code is ready and waiting for you to type something.',
    code: null,
  },
  {
    icon: <MessageSquare size={20} />,
    title: 'Start talking to it',
    description: 'Just type what you want in plain English. "Create a simple website about my coffee shop" or "Write a Python script that renames all my photos." Claude Code will read your files, understand your project, and start building.',
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
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 bg-[#feffff] border border-border flex items-center justify-center text-accent shadow-brutal">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border min-h-[24px]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1 min-h-[80px]">
                <h3 className="font-sans font-semibold text-primary text-[0.9375rem]">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm mt-1 leading-relaxed">
                  {step.description}
                </p>
                {step.tip && (
                  <div className="mt-2 bg-cream border border-border p-3 flex gap-2 items-start">
                    <HelpCircle size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-secondary text-xs leading-relaxed">{step.tip}</p>
                  </div>
                )}
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
