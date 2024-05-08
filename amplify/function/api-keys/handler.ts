import type { Schema } from '../../data/resource'
import { env } from '$amplify/env/api-keys'

export const handler: Schema['handleApiKeys']['functionHandler'] = async () => {
    return {
        googleMapsApiKey: env.GOOGLE_MAPS_API_KEY,
        stripeApiKey: env.STRIPE_API_KEY,
    }
}
