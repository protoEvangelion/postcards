import { client } from '@/client'
import { Schema } from 'amplify/data/resource'
import { useEffect, useState } from 'react'

export function RecipientsList() {
    const [recipients, setRecipient] = useState<Schema['Recipient'][]>([])

    async function listrecipient() {
        // fetch all recipient
        const { data } = await client.models.Recipient.list()
        setRecipient(data)
    }

    useEffect(() => {
        listrecipient()
        const sub = client.models.Recipient.observeQuery().subscribe(
            ({ items }) => setRecipient([...items])
        )

        return () => sub.unsubscribe()
    }, [])
    return <div>{JSON.stringify(recipients, null, 4)}</div>
}
