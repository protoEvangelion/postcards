import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import './index.css'
import '@aws-amplify/ui-react/styles.css'
import { NextUIProvider } from '@nextui-org/react'

import { routeTree } from './routeTree.gen'

import { Amplify } from 'aws-amplify'
import amplifyconfig from '../amplify_outputs.json'
import { Authenticator } from '@aws-amplify/ui-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './client'

Amplify.configure(amplifyconfig)

const router = createRouter({ routeTree })

const queryClient = new QueryClient()

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Authenticator.Provider>
            <NextUIProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </NextUIProvider>
        </Authenticator.Provider>
    </React.StrictMode>
)
