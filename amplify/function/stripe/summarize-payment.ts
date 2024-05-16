import type { Schema } from '../../data/resource'
import { Stripe } from 'stripe'
import { env } from '../../../.amplify/generated/env/summarize-payment'

export const handler: Schema['stripeSummarizePayment']['functionHandler'] =
    async (event) => {
        const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
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
