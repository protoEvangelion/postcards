import { generateClient } from 'aws-amplify/data'
import { type Schema } from '../amplify/data/resource'
import { useQuery } from '@tanstack/react-query'

export const client = generateClient<Schema>()

export enum QueryKeys {
    ApiKeys,
    StripeCreatePaymentIntent,
    StripeSummarizePayment,
    ScriptureCategoryList,
}

export function useScriptureCategoryList() {
    return useQuery({
        queryKey: [QueryKeys.ScriptureCategoryList],
        queryFn: () =>
            client.models.Category.list({
                selectionSet: ['id', 'scriptures.*', 'text'],
            }),
    })
}
