import { useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import MultistepNavigationButtons, {
    MultistepNavigationButtonsProps,
} from '../CreatePostcardFlow/MultistepNavigationButtons'
import { StripeError } from '@stripe/stripe-js'
import { Heading } from '@/components/atoms/Typography/Heading'
import { SubHeading } from '@/components/atoms/Typography/SubHeading'
import { client } from '@/client'
import { SessionKeys } from '@/types'
import { useSessionStorage } from 'usehooks-ts'

const paymentElementOptions = {
    layout: 'tabs',
} as const

export default function CheckoutForm({
    navigationButtonProps,
}: {
    navigationButtonProps: MultistepNavigationButtonsProps
}) {
    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState<string>()
    const [error, setError] = useState<string>()
    const [isLoading, setIsLoading] = useState(false)

    const handleError = (error: StripeError) => {
        setIsLoading(false)
        setError(error.message)
    }

    const handleSubmit = async () => {
        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return
        }

        setIsLoading(true)

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit()
        if (submitError) {
            handleError(submitError)
            return
        }

        // Create the PaymentIntent and obtain clientSecret
        const clientSecret = await client.queries
            .stripeCreateIntent()
            .then(({ data }) => {
                return data?.stripeClientSecret
            })
            .catch((error) => setError(error.message))

        if (!clientSecret) return

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: window.location.href,
            },
        })

        // This point will only be reached if there is an immediate error when confirming the payment. Otherwise, your customer will be redirected to your `return_url`. For some payment methods like iDEAL, your customer will be redirected to an intermediate site first to authorize the payment, then redirected to the `return_url`.
        if (error.type === 'card_error' || error.type === 'validation_error') {
            setMessage(error.message)
        } else {
            setMessage('An unexpected error occurred.')
        }

        setIsLoading(false)
    }

    return (
        <section className="mb-52">
            <Heading>Add Payment</Heading>
            <SubHeading>
                Payment will be processed when you click the Schedule & Pay
                button.
            </SubHeading>

            {message && (
                <div role="alert" className="alert mb-9">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className={`${error ? 'stroke-error' : 'stroke-info'} shrink-0 w-6 h-6`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>{message}</span>
                </div>
            )}

            <form id="payment-form">
                <PaymentElement
                    id="payment-element"
                    options={paymentElementOptions}
                />

                <MultistepNavigationButtons
                    {...navigationButtonProps}
                    onNext={() => {
                        handleSubmit()
                    }}
                    nextButtonProps={{
                        ...navigationButtonProps.nextButtonProps,
                        disabled: isLoading || !stripe || !elements,
                        content: 'Schedule & Pay',
                        isLoading,
                    }}
                />
            </form>
        </section>
    )
}
