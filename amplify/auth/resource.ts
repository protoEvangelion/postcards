import { defineAuth } from '@aws-amplify/backend'
import { userAdminRoleFunction } from '../function/user-admin-role/resource'

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
    loginWith: {
        email: {
            verificationEmailSubject: 'Welcome, please verify your email.',
        },
    },
    access: (allow) => [
        allow.resource(userAdminRoleFunction).to(['manageUsers']),
    ],
})
