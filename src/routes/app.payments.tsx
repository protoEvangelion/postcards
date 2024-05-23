import { client } from '@/client'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Button } from 'react-daisyui'

export const Route = createFileRoute('/app/payments')({
    component: PaymentsPage,
})

async function fetchData() {
    // const { data: customer, errors } = await client.models.Customer.create({
    //     name: 'Ry',
    // })
    console.log('!FETCH')
    // return
    await client.models.Cart.create({
        items: ['Tomatoz', 'Ice', 'Mint'],
        customerId: '08c80134-61bc-4191-9468-1e7379af46de',
    })
}

function PaymentsPage() {
    return <Button onClick={fetchData}>Fetch</Button>
}
