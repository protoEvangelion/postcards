import { useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { useSessionStorage } from 'usehooks-ts'
import { SessionKeys } from '@/types'
import MultistepNavigationButtons, {
    MultistepNavigationButtonsProps,
} from '../CreatePostcardFlow/MultistepNavigationButtons'
import { StripeError } from '@stripe/stripe-js'
import { Heading } from '@/components/atoms/Typography/Heading'
import { SubHeading } from '@/components/atoms/Typography/SubHeading'

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
    const { user } = useAuthenticator((context) => [context.user])

    const [confToken, setConfToken] = useSessionStorage<string>(
        SessionKeys['confirmationToken'],
        ''
    )

    const [message, setMessage] = useState<string>()
    const [error, setError] = useState<string>()
    const [isLoading, setIsLoading] = useState(false)

    const handleError = (error: StripeError) => {
        setIsLoading(false)
        setError(error.message)
    }

    const handleSubmit = async (
        callback: MultistepNavigationButtonsProps['onNext']
    ) => {
        console.log('!handle payment')

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

        // Create the ConfirmationToken using the details collected by the Payment Element
        const { error, confirmationToken } =
            await stripe.createConfirmationToken({
                elements,
                params: {
                    payment_method_data: {
                        billing_details: {
                            // TODO does loginId include email when logged in with social?
                            // email: user.signInDetails.loginId,
                        },
                    },
                },
            })

        if (!error && confirmationToken) {
            setConfToken(confirmationToken.id)
            callback()
        }

        // This point is only reached if there's an immediate error when
        // creating the ConfirmationToken. Show the error to your customer (for example, payment details incomplete)
        if (
            error &&
            (error.type === 'card_error' || error.type === 'validation_error')
        ) {
            console.error('Error:', error.message)
            setMessage(error.message)
        }

        setIsLoading(false)
    }

    return (
        <>
            <Heading>Add Payment</Heading>
            <SubHeading>
                Payment will not be processed until you review & submit in the
                next step.
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
                        handleSubmit(navigationButtonProps.onNext)
                    }}
                    nextButtonProps={{
                        ...navigationButtonProps.nextButtonProps,
                        disabled: isLoading || !stripe || !elements,
                        isLoading,
                    }}
                />
            </form>
        </>
    )
}
