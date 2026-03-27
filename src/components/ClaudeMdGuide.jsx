import { FileText, ExternalLink } from 'lucide-react'

export default function ClaudeMdGuide() {
  return (
    <section id="claude-md" className="py-20 md:py-28 px-8">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-beige text-secondary text-sm font-medium px-4 py-2 mb-6">
            <FileText size={16} />
            Bonus: Free Prompt
          </div>
          <h2
            className="font-serif text-primary font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}
          >
            The CLAUDE.md File Most People Get Wrong
          </h2>
        </div>

        <div className="prose-custom space-y-5 text-primary leading-relaxed">
          <p>
            Most people don't get the full Claude Code experience.
          </p>
          <p>
            Because they get one file wrong.
          </p>
          <p>
            It's called <strong>CLAUDE.md</strong>. It's a system prompt that gets loaded into every conversation you have.
          </p>
          <p>
            Think of it as the instruction manual for every agent you build.
          </p>
          <p className="text-secondary text-sm border-l-2 border-accent pl-5 py-1">
            I've built 20+ AI agents inside Claude Code. They touch every aspect of my business and let me run solo doing the work of a small team. But none of that would be possible without this file.
          </p>
          <p>
            Get it wrong and your agents produce generic output. They guess at things they shouldn't have to guess at.
          </p>
          <p>
            Get it right and everything clicks. Agents know their boundaries and you stop having to repeat yourself every conversation.
          </p>
          <p>
            Most CLAUDE.md files I see are either way too basic or a complete brain dump. Neither gets you where you need to be.
          </p>
          <p>
            <strong>So I built a prompt that handles this for you.</strong> Paste it into a new project, answer a few questions about your role and workflows, and it generates a CLAUDE.md based on how you actually work.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-[#feffff] border-2 border-accent p-8 shadow-brutal-accent">
            <h3 className="font-serif text-primary font-bold text-xl mb-2">
              Get the CLAUDE.md Generator Prompt
            </h3>
            <p className="text-secondary text-sm mb-6">
              Free. No sign up needed. Just open the doc and copy the prompt.
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
    </section>
  )
}
