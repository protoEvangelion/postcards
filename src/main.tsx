import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import './index.css'
import '@aws-amplify/ui-react/styles.css'

import { routeTree } from './routeTree.gen'

import { Amplify } from 'aws-amplify'
import amplifyconfig from '../amplify_outputs.json'
import { Authenticator } from '@aws-amplify/ui-react'
import { client } from './client'

// Client must be imported before Amplify.configure
console.log('!client', client)

Amplify.configure(amplifyconfig)

const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Authenticator.Provider>
            <RouterProvider router={router} />
        </Authenticator.Provider>
    </React.StrictMode>
)
