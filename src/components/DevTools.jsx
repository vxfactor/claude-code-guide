import { usePlatform } from './PlatformTabs'
import PlatformTabs from './PlatformTabs'
import CodeBlock from './CodeBlock'
import { Package, ExternalLink, HelpCircle, Apple, Monitor } from 'lucide-react'

function WhyCard({ title, children }) {
  return (
    <div className="bg-[#feffff] border border-border p-5 shadow-brutal">
      <h4 className="font-sans font-semibold text-primary text-[0.9375rem] mb-2">{title}</h4>
      <p className="text-secondary text-sm leading-relaxed">{children}</p>
    </div>
  )
}

function Callout({ children }) {
  return (
    <div className="bg-cream border border-border p-4 flex gap-3 items-start mt-4">
      <HelpCircle size={16} className="text-secondary mt-0.5 shrink-0" />
      <p className="text-secondary text-sm leading-relaxed">{children}</p>
    </div>
  )
}

function MacNodeInstructions() {
  return (
    <div className="space-y-4">
      <p className="text-secondary text-sm">
        Download the <strong>LTS</strong> (Long Term Support) version from the official site. LTS means it's the stable, well-tested version — avoid the "Current" option which is for testing experimental features.
      </p>
      <div className="shadow-brutal">
        <CodeBlock label="Option A — Download from nodejs.org (recommended)">
          {`# 1. Go to https://nodejs.org
# 2. Click the big green LTS download button
# 3. Open the downloaded .pkg file
# 4. Follow the installer — click "Continue" through each step`}
        </CodeBlock>
      </div>
      <div className="shadow-brutal">
        <CodeBlock label="Option B — Homebrew (if you already use it)">
          {`brew install node`}
        </CodeBlock>
      </div>
      <p className="text-secondary text-xs">
        Not sure what Homebrew is? Ignore Option B and use the installer above.
      </p>
    </div>
  )
}

function WindowsNodeInstructions() {
  return (
    <div className="space-y-4">
      <p className="text-secondary text-sm">
        Download the <strong>LTS</strong> (Long Term Support) version from the official site. LTS means it's the stable, well-tested version — avoid the "Current" option which is for testing experimental features.
      </p>
      <div className="shadow-brutal">
        <CodeBlock label="Option A — Download from nodejs.org (recommended)">
          {`# 1. Go to https://nodejs.org
# 2. Click the big green LTS download button
# 3. Open the downloaded .msi file
# 4. Follow the installer — click "Next" through each step
# 5. Leave all checkboxes at their defaults`}
        </CodeBlock>
      </div>
      <div className="shadow-brutal">
        <CodeBlock label="Option B — WinGet (Windows package manager)">
          {`winget install OpenJS.NodeJS.LTS`}
        </CodeBlock>
      </div>
      <p className="text-secondary text-xs">
        Not sure what WinGet is? Ignore Option B and use the installer above.
      </p>
    </div>
  )
}

function MacPythonInstructions() {
  return (
    <div className="space-y-4">
      <p className="text-secondary text-sm">
        Your Mac may have an outdated version of Python pre-installed, but you need a current one. Download the latest from python.org.
      </p>
      <div className="shadow-brutal">
        <CodeBlock label="Option A — Download from python.org (recommended)">
          {`# 1. Go to https://www.python.org/downloads/
# 2. Click the yellow "Download Python 3.x.x" button
# 3. Open the downloaded .pkg file
# 4. Follow the installer — click "Continue" through each step`}
        </CodeBlock>
      </div>
      <div className="shadow-brutal">
        <CodeBlock label="Option B — Homebrew (if you already use it)">
          {`brew install python`}
        </CodeBlock>
      </div>
    </div>
  )
}

function WindowsPythonInstructions() {
  return (
    <div className="space-y-4">
      <p className="text-secondary text-sm">
        Windows does not come with Python, so you need to install it yourself. This is quick — but there's one critical checkbox you must not miss.
      </p>
      <div className="bg-[#feffff] border border-accent p-5 shadow-brutal">
        <p className="text-sm text-primary font-medium">
          <strong>Do not skip this:</strong> On the very first screen of the installer, there's a checkbox at the bottom that says{' '}
          <strong>"Add python.exe to PATH"</strong>. You <strong>must</strong> check this box. If you miss it, Python won't work from PowerShell and you'll need to uninstall and start over.
        </p>
      </div>
      <div className="shadow-brutal">
        <CodeBlock label="Option A — Download from python.org (recommended)">
          {`# 1. Go to https://www.python.org/downloads/
# 2. Click the yellow "Download Python 3.x.x" button
# 3. Open the downloaded .exe file
# 4. CHECK the "Add python.exe to PATH" box at the bottom!
# 5. Click "Install Now"
# 6. Click "Close" when it finishes`}
        </CodeBlock>
      </div>
      <div className="shadow-brutal">
        <CodeBlock label="Option B — Microsoft Store">
          {`# 1. Open the Microsoft Store app on your PC
# 2. Search for "Python 3"
# 3. Pick the latest version (e.g. Python 3.13)
# 4. Click "Get" — it installs automatically`}
        </CodeBlock>
      </div>
      <p className="text-secondary text-xs">
        The Microsoft Store option handles PATH automatically, so it's a good alternative if you're worried about missing the checkbox.
      </p>
    </div>
  )
}

export default function DevTools() {
  const { platform } = usePlatform()
  const isMac = platform === 'mac'
  const terminalName = isMac ? 'Terminal' : 'PowerShell'

  return (
    <section id="dev-tools" className="py-20 md:py-28 px-8">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-[#feffff] font-serif font-bold text-xl mb-4">
            2
          </div>
          <h2
            className="font-serif text-primary font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}
          >
            Install Developer Tools
          </h2>
          <p className="text-secondary mt-3 max-w-[560px] mx-auto">
            Claude Code can build software, automate tasks, and connect to APIs. To do all of that, it needs two tools installed on your computer: Node.js and Python.
          </p>
          <div className="mt-8 flex justify-center">
            <PlatformTabs />
          </div>
        </div>

        {/* Why section */}
        <div className="mb-12">
          <h3 className="font-sans font-semibold text-primary text-lg mb-4">
            Why do I need these?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <WhyCard title="Node.js — for building apps">
              When Claude Code builds you a website, dashboard, or web app, it uses Node.js behind the scenes. Node.js runs JavaScript outside of a browser — it's what powers most modern web development. It also comes with <strong>npm</strong>, a tool for installing packages (pre-built code libraries that save time).
            </WhyCard>
            <WhyCard title="Python — for scripts &amp; automation">
              When Claude Code writes scripts to pull data from APIs, process spreadsheets, send emails, or run automations, it usually writes them in Python. Python is one of the most popular programming languages because it's easy to read and has libraries for almost everything.
            </WhyCard>
          </div>
          <Callout>
            You don't need to learn Node.js or Python yourself. Claude Code writes the code for you. But the code needs these tools installed to actually run on your machine — the same way a PDF needs a PDF reader to open.
          </Callout>
        </div>

        {/* Node.js */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#339933] flex items-center justify-center">
              <Package size={16} className="text-[#feffff]" />
            </div>
            <h3 className="font-sans font-semibold text-primary text-lg">
              Install Node.js {isMac ? '(Mac)' : '(Windows)'}
            </h3>
          </div>

          {isMac ? <MacNodeInstructions /> : <WindowsNodeInstructions />}

          <div className="mt-4">
            <p className="text-secondary text-sm mb-2">
              Verify it's installed — open {terminalName} and run:
            </p>
            <div className="shadow-brutal">
              <CodeBlock label={terminalName}>
                {`node --version\nnpm --version`}
              </CodeBlock>
            </div>
            <p className="text-secondary text-xs mt-2">
              Both commands should print a version number (e.g. <code className="font-mono text-primary bg-cream px-1">v24.14.1</code>).{' '}
              {isMac
                ? 'If you see "command not found," close and reopen Terminal, then try again.'
                : 'If you see "not recognized," close and reopen PowerShell, then try again.'}
            </p>
          </div>

          <div className="mt-3">
            <a
              href="https://nodejs.org/en/download"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm inline-flex items-center gap-1 hover:underline underline-offset-2"
            >
              Official Node.js download page <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Python */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#3776AB] flex items-center justify-center">
              <Package size={16} className="text-[#feffff]" />
            </div>
            <h3 className="font-sans font-semibold text-primary text-lg">
              Install Python {isMac ? '(Mac)' : '(Windows)'}
            </h3>
          </div>

          {isMac ? <MacPythonInstructions /> : <WindowsPythonInstructions />}

          <div className="mt-4">
            <p className="text-secondary text-sm mb-2">
              Verify it's installed — open {terminalName} and run:
            </p>
            <div className="shadow-brutal">
              <CodeBlock label={terminalName}>
                {isMac ? `python3 --version` : `python --version`}
              </CodeBlock>
            </div>
            <p className="text-secondary text-xs mt-2">
              Should print something like <code className="font-mono text-primary bg-cream px-1">Python 3.13.x</code> or newer.{' '}
              {isMac
                ? 'If you see "command not found," close and reopen Terminal, then try again.'
                : 'If you see "not recognized," you likely missed the PATH checkbox — uninstall Python, reinstall, and check the box this time. Or try the Microsoft Store option instead.'}
            </p>
          </div>

          <div className="mt-3">
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm inline-flex items-center gap-1 hover:underline underline-offset-2"
            >
              Official Python download page <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* When will I use these? */}
        <div className="bg-cream border border-border p-6">
          <h3 className="font-sans font-semibold text-primary text-[0.9375rem] mb-3">
            When will Claude Code use these?
          </h3>
          <ul className="space-y-2 text-secondary text-sm">
            <li className="flex gap-2">
              <span className="text-accent font-bold shrink-0">→</span>
              <span><strong>Node.js</strong> — whenever you ask Claude to build a website, create a React app, set up an API, or install JavaScript packages</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold shrink-0">→</span>
              <span><strong>Python</strong> — whenever you ask Claude to write automation scripts, process data, connect to external APIs, or run backend logic</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold shrink-0">→</span>
              <span><strong>npm (comes with Node.js)</strong> — whenever Claude needs to install a JavaScript library, like a charting library for a dashboard or a framework like React</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold shrink-0">→</span>
              <span><strong>pip (comes with Python)</strong> — whenever Claude needs to install a Python library, like a web scraping tool or a data processing library</span>
            </li>
          </ul>
          <p className="text-secondary text-xs mt-4">
            You don't need to remember any of this. Claude Code will tell you if something is missing. But having both installed now means you won't hit a wall later.
          </p>
        </div>
      </div>
    </section>
  )
}
