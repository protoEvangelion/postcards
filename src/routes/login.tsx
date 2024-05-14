import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import { Navigate, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
    component: LoginPage,
})

function LoginPage() {
    const { user } = useAuthenticator((context) => [context.user])

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 p-2 sm:p-4 lg:p-8">
            {user ? <Navigate to="/app/create" /> : <Authenticator />}
        </div>
    )
}
