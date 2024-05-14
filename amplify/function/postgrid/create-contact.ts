import type { Schema } from '../../data/resource'
// import { env } from '$amplify/env/handler'
// import { Stripe } from 'stripe'
// import { PostGrid } from 'postgrid-node-client'

export const handler: Schema['postgridCreateContact']['functionHandler'] =
    async () => {
        // const client = new PostGrid({
        //     mail: env.STRIPE_CLIENT_SECRET,
        // })
        // const stripe = new Stripe(env.STRIPE_CLIENT_SECRET, {
        //     typescript: true,
        // })
        // const todos = await runWithAmplifyServerContext({
        //     nextServerContext: { request, response },
        //     operation: async (contextSpec) => {
        //         const { data: todos } =
        //             await reqResBasedClient.models.Todo.list(contextSpec)
        //         return todos
        //     },
        // })

        // const scriptures = await client.models.Scripture.list()

        // Verify we successfully collected funds from customer to pay

        return { text: 'scriptures.data[0].text' }
    }
