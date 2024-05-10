import { FAQ } from '@/components/organisms/Landing/FAQ'
import { Feature } from '@/components/organisms/Landing/Feature'
import { Hero } from '@/components/organisms/Landing/Hero'
import { Integration } from '@/components/organisms/Landing/Integration'
import { Pricing } from '@/components/organisms/Landing/Pricing'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: () => (
        <>
            <Hero />
            <Feature />
            <Integration />
            <Pricing />
            <FAQ />
        </>
    ),
})
