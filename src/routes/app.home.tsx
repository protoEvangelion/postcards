import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/home')({
    component: HomePage,
})

function HomePage() {
    return 'home'
}
