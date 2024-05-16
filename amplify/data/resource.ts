import { type ClientSchema, a, defineData } from '@aws-amplify/backend'
import { apiKeysHandlerSchema } from '../function/api-keys/schema'
import {
    stripeCreateIntentHandlerSchema,
    stripeSummarizePaymentHandlerSchema,
    stripeWebhookPaymentHandler,
    stripeWebhookPaymentHandlerSchema,
} from '../function/stripe/schema'

const schema = a
    .schema({
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
        ...apiKeysHandlerSchema,
        ...stripeCreateIntentHandlerSchema,
        ...stripeSummarizePaymentHandlerSchema,
        ...stripeWebhookPaymentHandlerSchema,
    })
    .authorization((allow) => [allow.resource(stripeWebhookPaymentHandler)])

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'userPool',
    },
})
