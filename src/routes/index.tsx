import { FAQ } from '@/components/FAQ'
import { Feature } from '@/components/Feature'
import { Hero } from '@/components/Hero'
import { Integration } from '@/components/Integration'
import { Pricing } from '@/components/Pricing'
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
