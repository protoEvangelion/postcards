import { AppLayout } from '@/components/templates/App/AppLayout'
import { Navigate, Outlet, createFileRoute } from '@tanstack/react-router'
import { useAuthenticator } from '@aws-amplify/ui-react'
export const Route = createFileRoute('/app')({
    component: AppPage,
})

function AppPage() {
    const { user } = useAuthenticator((context) => [context.user])

    console.log('user', user)

    return !user ? (
        <Navigate to="/login" />
    ) : (
        <AppLayout>
            <Outlet />
        </AppLayout>
    )
}
