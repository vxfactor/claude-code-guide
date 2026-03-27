import { PlatformProvider } from './components/PlatformTabs'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsClaude from './components/WhatIsClaude'
import Prerequisites from './components/Prerequisites'
import Installation from './components/Installation'
import DevTools from './components/DevTools'
import FirstRun from './components/FirstRun'
import WhereToRun from './components/WhereToRun'
import Troubleshooting from './components/Troubleshooting'
import ClaudeMdGuide from './components/ClaudeMdGuide'
import Footer from './components/Footer'

export default function App() {
  return (
    <PlatformProvider>
      <div className="relative">
        <Navbar />
        <Hero />
        <WhatIsClaude />
        <Prerequisites />
        <Installation />
        <DevTools />
        <FirstRun />
        <WhereToRun />
        <Troubleshooting />
        <ClaudeMdGuide />
        <Footer />
      </div>
    </PlatformProvider>
  )
}
