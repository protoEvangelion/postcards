import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import PaymentForm from './PaymentForm'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys, client } from '@/client'
import { useMemo } from 'react'

export function PaymentFormLoader({ stripeApiKey }: { stripeApiKey: string }) {
    const { data } = useQuery({
        queryKey: [QueryKeys.HandleStripePayment],
        queryFn: () => client.queries.handleStripePayment(),
    })

    const clientSecret = data?.data?.stripeSecret

    const stripePromise = useMemo(
        () => (stripeApiKey ? loadStripe(stripeApiKey) : null),
        [stripeApiKey]
    )

    return clientSecret ? (
        <Elements
            options={{
                clientSecret,
                appearance: {
                    theme: 'stripe',
                },
            }}
            stripe={stripePromise}
        >
            <PaymentForm />
        </Elements>
    ) : null
}
