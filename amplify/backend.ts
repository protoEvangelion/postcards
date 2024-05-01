import { defineBackend } from '@aws-amplify/backend'
import { auth } from './auth/resource'
import { data } from './data/resource'
import { userAdminRoleFunction } from './function/user-admin-role/resource'

defineBackend({
    auth,
    data,
    userAdminRoleFunction,
})
