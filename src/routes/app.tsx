import { AppLayout } from '@/components/templates/App/AppLayout'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
    component: AppPage,
})

function AppPage() {
    return (
        <AppLayout>
            <Outlet />
        </AppLayout>
    )
}
