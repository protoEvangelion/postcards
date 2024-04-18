import { Hero } from './components/Hero.tsx'
import { Feature } from '@/components/Feature.tsx'
import { Integration } from '@/components/Integration.tsx'
import { Pricing } from '@/components/Pricing.tsx'
import { Topbar } from '@/components/Topbar.tsx'
import { FAQ } from '@/components/FAQ.tsx'
import { Footer } from '@/components/Footer.tsx'
import { Theme, useTheme } from 'react-daisyui'

import { ScriptureTimeline } from './components/ScriptureSelect/ScriptureTimeline.tsx'

function App() {
    const { theme } = useTheme()

    return (
        <Theme dataTheme={theme}>
            <Topbar />
            <Hero />
            <ScriptureTimeline />
            <Feature />
            <Integration />
            <Pricing />
            <FAQ />
            <Footer />
        </Theme>
    )
}

export default App
