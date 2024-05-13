import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { useMemo } from 'react'

export function StripeLoader({
    stripeApiKey,
    children,
}: {
    stripeApiKey: string
    children: React.ReactNode
}) {
    const stripePromise = useMemo(
        () => (stripeApiKey ? loadStripe(stripeApiKey) : null),
        [stripeApiKey]
    )

    return stripeApiKey ? (
        <Elements
            options={{
                mode: 'payment',
                amount: 100, // 1 dollar
                currency: 'usd',
                paymentMethodCreation: 'manual',
                // Fully customizable with appearance API.
                appearance: {
                    theme: 'stripe',
                },
            }}
            stripe={stripePromise}
        >
            {children}
        </Elements>
    ) : null
}
