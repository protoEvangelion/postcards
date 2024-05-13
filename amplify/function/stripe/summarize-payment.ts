import type { Schema } from '../../data/resource'
import { env } from '$amplify/env/handler'
import { Stripe } from 'stripe'

export const handler: Schema['stripeSummarizePayment']['functionHandler'] =
    async (event) => {
        const stripe = new Stripe(env.STRIPE_CLIENT_SECRET, {
            typescript: true,
        })

        let details
        const confId = event.arguments.confTokenId

        if (confId) {
            const confirmationToken =
                await stripe.confirmationTokens.retrieve(confId)

            details = JSON.stringify(confirmationToken)
        }

        return {
            details,
        }
    }
