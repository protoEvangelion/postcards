import { FAQ } from '@/components/Landing/FAQ'
import { Feature } from '@/components/Landing/Feature'
import { Hero } from '@/components/Landing/Hero'
import { Integration } from '@/components/Landing/Integration'
import { Pricing } from '@/components/Landing/Pricing'
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
