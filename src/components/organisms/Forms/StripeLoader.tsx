import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { useMemo } from 'react'

export function StripeLoader({
    stripePublicKey,
    children,
}: {
    stripePublicKey: string
    children: React.ReactNode
}) {
    const stripePromise = useMemo(
        () => (stripePublicKey ? loadStripe(stripePublicKey) : null),
        [stripePublicKey]
    )

    return stripePublicKey ? (
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
