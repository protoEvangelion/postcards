import type { Schema } from '../../data/resource'
import { env } from '$amplify/env/create-intent'
import { Stripe } from 'stripe'

export const handler: Schema['stripeCreateIntent']['functionHandler'] =
    async () =>
        // event,
        // context
        {
            const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
                typescript: true,
            })

            // Create a PaymentIntent with the order amount and currency
            const paymentIntent = await stripe.paymentIntents.create({
                amount: 100,
                currency: 'usd',
                // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
                automatic_payment_methods: {
                    enabled: true,
                },
            })

            return {
                stripeClientSecret: paymentIntent.client_secret,
            }
        }
