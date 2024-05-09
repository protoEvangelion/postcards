import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import PaymentForm from './PaymentForm'
import { useMemo } from 'react'
import { MultistepNavigationButtonsProps } from '../CreatePostcardFlow/multistep-navigation-buttons'

export function PaymentFormLoader({
    stripeApiKey,
    navigationButtonProps,
}: {
    stripeApiKey: string
    navigationButtonProps: MultistepNavigationButtonsProps
}) {
    // const { data } = useQuery({
    //     queryKey: [QueryKeys.HandleStripePayment],
    //     queryFn: () => client.queries.handleStripePayment(),
    // })

    // const clientSecret = data?.data?.stripeSecret

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
            <PaymentForm navigationButtonProps={navigationButtonProps} />
        </Elements>
    ) : null
}
