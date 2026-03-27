import { usePlatform } from './PlatformTabs'
import PlatformTabs from './PlatformTabs'
import CodeBlock from './CodeBlock'

export default function Installation() {
  const { platform } = usePlatform()

  return (
    <section id="installation" className="py-20 md:py-28 px-8 bg-beige">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-[#feffff] font-serif font-bold text-xl mb-4">
            1
          </div>
          <h2
            className="font-serif text-primary font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}
          >
            Install Claude Code
          </h2>
          <p className="text-secondary mt-3">One command. That's it.</p>
          <div className="mt-8 flex justify-center">
            <PlatformTabs />
          </div>
        </div>

        {platform === 'mac' ? (
          <div className="space-y-8">
            <div>
              <h3 className="font-sans font-semibold text-primary mb-3">
                Option A: Native Installer (recommended)
              </h3>
              <p className="text-secondary text-sm mb-4">
                Open Terminal (search "Terminal" in Spotlight) and paste this command:
              </p>
              <div className="shadow-brutal">
                <CodeBlock label="Terminal">
                  {`curl -fsSL https://claude.ai/install.sh | bash`}
                </CodeBlock>
              </div>
              <p className="text-secondary text-xs mt-2">
                Auto-updates included. Signed and notarized by Anthropic.
              </p>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-primary mb-3">
                Option B: Homebrew
              </h3>
              <div className="shadow-brutal">
                <CodeBlock label="Terminal">
                  {`brew install --cask claude-code`}
                </CodeBlock>
              </div>
              <p className="text-secondary text-xs mt-2">
                Does not auto-update. Run <code className="font-mono text-primary bg-cream px-1">brew upgrade claude-code</code> manually.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-[#feffff] border border-accent p-5 shadow-brutal">
              <p className="text-sm text-primary font-medium">
                Make sure Git for Windows is installed first.{' '}
                <a
                  href="https://git-scm.com/downloads/win"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  Download it here.
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-primary mb-3">
                Option A: PowerShell (recommended)
              </h3>
              <p className="text-secondary text-sm mb-4">
                Open PowerShell (search "PowerShell" in Start) and paste this command:
              </p>
              <div className="shadow-brutal">
                <CodeBlock label="PowerShell">
                  {`irm https://claude.ai/install.ps1 | iex`}
                </CodeBlock>
              </div>
              <p className="text-secondary text-xs mt-2">
                Auto-updates included. You do not need to run as Administrator.
              </p>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-primary mb-3">
                Option B: CMD
              </h3>
              <div className="shadow-brutal">
                <CodeBlock label="Command Prompt">
                  {`curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`}
                </CodeBlock>
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-primary mb-3">
                Option C: WinGet
              </h3>
              <div className="shadow-brutal">
                <CodeBlock label="PowerShell">
                  {`winget install Anthropic.ClaudeCode`}
                </CodeBlock>
              </div>
              <p className="text-secondary text-xs mt-2">
                Does not auto-update. Run <code className="font-mono text-primary bg-cream px-1">winget upgrade Anthropic.ClaudeCode</code> manually.
              </p>
            </div>
          </div>
        )}

        <div className="mt-10">
          <h3 className="font-sans font-semibold text-primary mb-3">
            Verify Installation
          </h3>
          <div className="shadow-brutal">
            <CodeBlock label="Terminal / PowerShell">
              {`claude --version\nclaude doctor`}
            </CodeBlock>
          </div>
          <p className="text-secondary text-sm mt-3">
            <code className="font-mono text-primary bg-cream px-1">claude doctor</code> runs diagnostics to make sure everything is configured correctly.
          </p>
        </div>
      </div>
    </section>
  )
}
