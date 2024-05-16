import { a, defineFunction, secret } from '@aws-amplify/backend'

const apiKeysHandler = defineFunction({
    entry: './handler.ts',
    name: 'api-keys',
    environment: {
        GOOGLE_MAPS_API_KEY: secret('googleMapsApiKey'),
        STRIPE_PUBLIC_KEY: secret('stripePublicKey'),
    },
})

export const apiKeysHandlerSchema = {
    ApiKeyHandlerResponse: a.customType({
        googleMapsApiKey: a.string(),
        stripePublicKey: a.string(),
    }),
    handleApiKeys: a
        .query()
        .returns(a.ref('ApiKeyHandlerResponse'))
        .authorization((allow) => [allow.authenticated()])
        .handler(a.handler.function(apiKeysHandler)),
}
