import type { Schema } from '../../data/resource'
import { env } from '../../../.amplify/generated/env/api-keys'
export const handler: Schema['handleApiKeys']['functionHandler'] = async () => {
    return {
        googleMapsApiKey: env.GOOGLE_MAPS_API_KEY,
        stripePublicKey: env.STRIPE_PUBLIC_KEY,
    }
}
