import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/data'
import { Schema } from '../../data/resource'
import { env } from '../../../.amplify/generated/env/webhook-payment'
import { listCategories } from './graphql/queries'

Amplify.configure(
    {
        API: {
            GraphQL: {
                endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
                region: env.AWS_REGION,
                defaultAuthMode: 'identityPool',
            },
        },
    },
    {
        Auth: {
            credentialsProvider: {
                getCredentialsAndIdentityId: async () => ({
                    credentials: {
                        accessKeyId: env.AWS_ACCESS_KEY_ID,
                        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
                        sessionToken: env.AWS_SESSION_TOKEN,
                    },
                }),
                clearCredentialsAndIdentityId: () => {
                    /* noop */
                },
            },
        },
    }
)

const dataClient = generateClient<Schema>()

export const handler: Schema['stripeWebhookPayment']['functionHandler'] =
    async (event: any) => {
        console.log('!!!!fetching data')
        const data = await dataClient.graphql({
            query: listCategories,
        })
        console.log('!!!!data', data)
        console.log('!!!!!!event', event)
        return { greeting: 'hello' }
    }
