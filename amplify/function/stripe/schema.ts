import { a, defineFunction, secret } from '@aws-amplify/backend'

export const stripeWebhookPaymentHandler = defineFunction({
    entry: './webhook-payment.ts',
    name: 'webhook-payment',
    environment: {
        STRIPE_SECRET_KEY: secret('stripeSecretKey'),
    },
})

export const stripeWebhookPaymentHandlerSchema = {
    StripeWebhookPaymentResponse: a.customType({
        greeting: a.string(),
    }),
    stripeWebhookPayment: a
        .query()
        .returns(a.ref('StripeWebhookPaymentResponse'))
        .authorization((allow) => [allow.authenticated()])
        .handler(a.handler.function(stripeWebhookPaymentHandler)),
}

const stripeCreateIntentHandler = defineFunction({
    entry: './create-intent.ts',
    name: 'create-intent',
    environment: {
        STRIPE_SECRET_KEY: secret('stripeSecretKey'),
    },
})

export const stripeCreateIntentHandlerSchema = {
    StripeCreateIntentResponse: a.customType({
        stripeClientSecret: a.string(),
    }),
    stripeCreateIntent: a
        .query()
        .returns(a.ref('StripeCreateIntentResponse'))
        .authorization((allow) => [allow.authenticated()])
        .handler(a.handler.function(stripeCreateIntentHandler)),
}

const stripeSummarizePaymentHandler = defineFunction({
    entry: './summarize-payment.ts',
    name: 'summarize-payment',
    environment: {
        STRIPE_SECRET_KEY: secret('stripeSecretKey'),
    },
})

export const stripeSummarizePaymentHandlerSchema = {
    StripeSummarizePaymentResponse: a.customType({
        details: a.string(),
    }),
    stripeSummarizePayment: a
        .query()
        .arguments({ confTokenId: a.string() })
        .returns(a.ref('StripeSummarizePaymentResponse'))
        .authorization((allow) => [allow.authenticated()])
        .handler(a.handler.function(stripeSummarizePaymentHandler)),
}
