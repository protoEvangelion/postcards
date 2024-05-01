import { type ClientSchema, a, defineData } from '@aws-amplify/backend'

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
    Recipient: a
        .model({
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
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'userPool',
    },
})

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
