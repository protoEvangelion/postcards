import { Footer } from '@/components/templates/Layout/Footer'
import { Topbar } from '@/components/templates/Layout/Topbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Theme, useTheme } from 'react-daisyui'

const RootComponent = () => {
    const { theme } = useTheme()

    return (
        <Theme dataTheme={theme}>
            <Topbar />

            <Outlet />

            <Footer />

            <TanStackRouterDevtools />
        </Theme>
    )
}

export const Route = createRootRoute({
    component: RootComponent,
})
