import { useEffect, useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import { SuccessSvg } from '@/components/atoms/Svgs/Success'
import { Link } from '@tanstack/react-router'
import { useSessionStorage } from 'usehooks-ts'
import { SessionKeys } from '@/types'
import { ButtonWithBorderGradient } from '@/components/atoms/ButtonWithBorderGradient'

export default function PaymentResult() {
    const stripe = useStripe()

    const [_, setPage] = useSessionStorage(SessionKeys['createStepsState'], 5)

    useEffect(() => {
        // Set page one after so last step shows a check
        setPage(5)
    }, [])

    const [message, setMessage] = useState<string>()

    useEffect(() => {
        if (!stripe) {
            return
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret'
        )

        if (!clientSecret) {
            return
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent?.status) {
                case 'succeeded':
                    setMessage('Payment succeeded!')
                    break
                case 'processing':
                    setMessage('Your payment is processing.')
                    break
                case 'requires_payment_method':
                    setMessage(
                        'Your payment was not successful, please try again.'
                    )
                    break
                default:
                    setMessage('Something went wrong.')
                    break
            }
        })
    }, [stripe])

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <SuccessSvg />

            <div className="card-body items-start gap-5">
                <h2 className="card-title">{message}</h2>
                <p>Continue to see your scheduled cards.</p>
                <div className="card-actions">
                    <ButtonWithBorderGradient className="text-medium font-medium">
                        <Link to="/app/home">Continue</Link>
                    </ButtonWithBorderGradient>
                </div>
            </div>
        </div>
    )
}
