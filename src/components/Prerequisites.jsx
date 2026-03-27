import { usePlatform } from './PlatformTabs'
import PlatformTabs from './PlatformTabs'
import { CheckCircle, AlertTriangle, CreditCard, Cpu, Wifi, Monitor } from 'lucide-react'

export default function Prerequisites() {
  const { platform } = usePlatform()

  const shared = [
    {
      icon: <CreditCard size={18} />,
      title: 'Anthropic Account',
      description: 'You need a paid Anthropic account — either Claude Pro ($20/mo), Max, Teams, or Enterprise. The free Claude.ai plan does NOT include Claude Code. Sign up at claude.ai if you don\'t have one yet.',
      important: true,
    },
    {
      icon: <Cpu size={18} />,
      title: '4 GB RAM minimum',
      description: '8 GB or more is recommended. Not sure how much you have? On Mac: Apple menu → About This Mac. On Windows: Settings → System → About.',
    },
    {
      icon: <Wifi size={18} />,
      title: 'Internet connection',
      description: 'Claude Code connects to Anthropic\'s cloud to process your requests.',
    },
  ]

  const platformSpecific = platform === 'mac'
    ? {
        icon: <Monitor size={18} />,
        title: 'macOS 13.0+ (Ventura or later)',
        description: 'Older macOS versions will get a "dyld: cannot load" error. Check yours in Apple menu > About This Mac.',
      }
    : {
        icon: <Monitor size={18} />,
        title: 'Windows 10 (version 1809+)',
        description: 'Windows Server 2019+ is also supported. WSL 1 and WSL 2 both work.',
      }

  const windowsExtra = platform === 'windows'
    ? {
        icon: <AlertTriangle size={18} />,
        title: 'Git for Windows (required)',
        description: 'Claude Code needs Git Bash internally. Download it from git-scm.com/downloads/win before installing Claude Code.',
        important: true,
      }
    : null

  return (
    <section id="prerequisites" className="py-20 md:py-28 px-8">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-primary font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}
          >
            Before You Start
          </h2>
          <p className="text-secondary mt-3">Make sure you have these ready.</p>
          <div className="mt-8 flex justify-center">
            <PlatformTabs />
          </div>
        </div>

        <div className="space-y-4">
          {[platformSpecific, ...shared, windowsExtra].filter(Boolean).map((item, i) => (
            <div
              key={i}
              className={`flex gap-4 p-5 border ${
                item.important ? 'border-accent bg-[#feffff]' : 'border-border bg-[#feffff]'
              } shadow-brutal`}
            >
              <div className={`mt-0.5 ${item.important ? 'text-accent' : 'text-secondary'}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-sans font-semibold text-primary text-[0.9375rem]">{item.title}</h3>
                <p className="text-secondary text-sm mt-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
