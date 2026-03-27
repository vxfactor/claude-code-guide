import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import CodeBlock from './CodeBlock'

const issues = [
  {
    question: '"command not found: claude" after installing',
    answer: 'Your terminal can\'t find the claude binary. Restart your terminal first. If that doesn\'t work, add ~/.local/bin to your PATH:',
    code: 'echo \'export PATH="$HOME/.local/bin:$PATH"\' >> ~/.zshrc && source ~/.zshrc',
    codeLabel: 'Terminal (Mac/Linux)',
  },
  {
    question: 'I\'m on the free Claude plan and can\'t access Claude Code',
    answer: 'The free Claude.ai plan does not include Claude Code. You need a Claude Pro ($20/mo), Max, Teams, or Enterprise plan. Alternatively, you can use a Console (API) account with billing enabled.',
    code: null,
  },
  {
    question: 'Windows: Claude Code won\'t start or Git Bash not found',
    answer: 'Claude Code requires Git for Windows. Install it from git-scm.com/downloads/win, then reinstall Claude Code. If Git is installed but not detected, set the path manually in your settings:',
    code: '{\n  "env": {\n    "CLAUDE_CODE_GIT_BASH_PATH": "C:\\\\Program Files\\\\Git\\\\bin\\\\bash.exe"\n  }\n}',
    codeLabel: '~/.claude/settings.json',
  },
  {
    question: 'WSL: Browser doesn\'t open for login',
    answer: 'WSL can\'t always launch your Windows browser. When prompted to sign in, press c to copy the OAuth URL to your clipboard, then paste it manually into your browser.',
    code: null,
  },
  {
    question: '"irm is not recognized" on Windows',
    answer: 'You\'re running the command in CMD, not PowerShell. Open PowerShell (search for it in Start menu) and try again. Alternatively, use the CMD-specific install command.',
    code: 'curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd',
    codeLabel: 'Command Prompt',
  },
  {
    question: 'OAuth error or 403 Forbidden during sign-in',
    answer: 'Run /logout inside Claude Code, restart, and re-authenticate. Verify your subscription is active. If you previously set an ANTHROPIC_API_KEY environment variable, it may be overriding OAuth:',
    code: 'unset ANTHROPIC_API_KEY',
    codeLabel: 'Terminal',
  },
  {
    question: 'npm install method not working',
    answer: 'The npm installation method is now deprecated. Switch to the native installer. Do NOT use sudo with npm.',
    code: 'curl -fsSL https://claude.ai/install.sh | bash\nnpm uninstall -g @anthropic-ai/claude-code',
    codeLabel: 'Terminal',
  },
]

function AccordionItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border bg-[#feffff] shadow-brutal">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-cream/50 transition-colors"
      >
        <span className="font-sans font-semibold text-primary text-[0.9375rem] pr-4">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`text-secondary flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-border">
          <p className="text-secondary text-sm mt-4 leading-relaxed">
            {item.answer}
          </p>
          {item.code && (
            <div className="mt-3">
              <CodeBlock label={item.codeLabel}>{item.code}</CodeBlock>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function Troubleshooting() {
  return (
    <section id="troubleshooting" className="py-20 md:py-28 px-8 bg-beige">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-primary font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}
          >
            Common Issues
          </h2>
          <p className="text-secondary mt-3">
            Stuck? Check these fixes first.
          </p>
        </div>

        <div className="space-y-4">
          {issues.map((item, i) => (
            <AccordionItem key={i} item={item} />
          ))}
        </div>

        <p className="text-center text-secondary text-sm mt-8">
          Still stuck? Check the{' '}
          <a
            href="https://code.claude.com/docs/en/troubleshooting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:text-accent-hover"
          >
            official troubleshooting docs
          </a>
          .
        </p>
      </div>
    </section>
  )
}
