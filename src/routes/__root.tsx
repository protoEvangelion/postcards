import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Theme, useTheme } from 'react-daisyui'
import { Topbar } from '@/components/Topbar.tsx'
import { Footer } from '@/components/Footer.tsx'

const RootComponent = () => {
    const { theme } = useTheme()

    return (
        <Theme dataTheme={theme} className="flex flex-col min-h-screen">
            <Topbar className="grow-0 shrink-0" />

            <div className="container grow">
                <Outlet />
            </div>

            <Footer className="grow-0 shrink-0" />

            <TanStackRouterDevtools />
        </Theme>
    )
}

export const Route = createRootRoute({
    component: RootComponent,
})
