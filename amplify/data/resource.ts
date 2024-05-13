import {
    type ClientSchema,
    a,
    defineData,
    defineFunction,
    secret,
} from '@aws-amplify/backend'

const apiKeysHandler = defineFunction({
    entry: '../function/api-keys/handler.ts',
    name: 'api-keys',
    environment: {
        GOOGLE_MAPS_API_KEY: secret('googleMapsApiKey'),
        STRIPE_API_KEY: secret('stripeApiKey'),
    },
})

const stripeCreateIntentHandler = defineFunction({
    entry: '../function/stripe/create-intent.ts',
    name: 'create-intent',
    environment: {
        STRIPE_CLIENT_SECRET: secret('stripeClientSecret'),
    },
})

const stripeSummarizePaymentHandler = defineFunction({
    entry: '../function/stripe/summarize-payment.ts',
    name: 'summarize-payment',
    environment: {
        STRIPE_CLIENT_SECRET: secret('stripeClientSecret'),
    },
})

const schema = a.schema({
    Address: a
        .model({
            isRecipientAddress: a.boolean().required(),
            name: a.string().required(),
            address: a.string().required(),
            address2: a.string(),
            zip: a.string().required(),
            city: a.string().required(),
            state: a.string().required(),
        })
        .authorization((allow) => [allow.owner()]),
    Postcard: a
        .model({
            scheduledDate: a.datetime().required(),
            shipped: a.boolean().required(),
            delivered: a.boolean().required(),
            scriptureId: a.id().required(),
            scripture: a.belongsTo('Scripture', 'scriptureId'),
        })
        .authorization((allow) => [allow.owner()]),
    Scripture: a
        .model({
            reference: a.string().required(),
            text: a.string().required(),
            categoryId: a.id().required(),
            category: a.belongsTo('Category', 'categoryId'),
            postcards: a.hasMany('Postcard', 'scriptureId'),
        })
        .authorization((allow) => [allow.authenticated()]),
    Category: a
        .model({
            text: a.string().required(),
            scriptures: a.hasMany('Scripture', 'categoryId'),
        })
        .authorization((allow) => [allow.authenticated()]),
    Payment: a
        .model({
            amount: a.float().required(),
            date: a.datetime().required(),
        })
        .authorization((allow) => [allow.owner()]),

    // FUNCTIONS
    ApiKeyResponse: a.customType({
        googleMapsApiKey: a.string(),
        stripeApiKey: a.string(),
    }),
    handleApiKeys: a
        .query()
        .returns(a.ref('ApiKeyResponse'))
        .authorization((allow) => [allow.authenticated()])
        .handler(a.handler.function(apiKeysHandler)),

    StripeCreateIntentResponse: a.customType({
        stripeSecret: a.string(),
    }),
    stripeCreateIntent: a
        .query()
        .returns(a.ref('StripeCreateIntentResponse'))
        .authorization((allow) => [allow.authenticated()])
        .handler(a.handler.function(stripeCreateIntentHandler)),

    StripeSummarizePaymentResponse: a.customType({
        details: a.string(),
    }),
    stripeSummarizePayment: a
        .query()
        .arguments({ confTokenId: a.string() })
        .returns(a.ref('StripeSummarizePaymentResponse'))
        .authorization((allow) => [allow.authenticated()])
        .handler(a.handler.function(stripeSummarizePaymentHandler)),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'userPool',
    },
})
