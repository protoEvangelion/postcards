import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import './index.css'
import '@aws-amplify/ui-react/styles.css'
import { NextUIProvider } from '@nextui-org/react'

import { routeTree } from './routeTree.gen'

import { Amplify } from 'aws-amplify'
import amplifyconfig from '../amplify_outputs.json'
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './client'

Amplify.configure(amplifyconfig)

const router = createRouter({ routeTree })

const queryClient = new QueryClient()

const theme = {
    name: 'my-theme',
    tokens: {
        components: {
            authenticator: {
                router: {
                    borderStyle: 'none',
                    boxShadow: 'none',
                },
            },
        },
    },
}

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Authenticator.Provider>
                <NextUIProvider>
                    <QueryClientProvider client={queryClient}>
                        <RouterProvider router={router} />
                    </QueryClientProvider>
                </NextUIProvider>
            </Authenticator.Provider>
        </ThemeProvider>
    </React.StrictMode>
)
