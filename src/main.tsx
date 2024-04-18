import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import '@aws-amplify/ui-react/styles.css'

import { Amplify } from 'aws-amplify'
import amplifyconfig from '../amplifyconfiguration.json'
import { Authenticator } from '@aws-amplify/ui-react'

Amplify.configure(amplifyconfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Authenticator.Provider>
            <App />
        </Authenticator.Provider>
    </React.StrictMode>
)
