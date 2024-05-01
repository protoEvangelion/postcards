import { client } from '@/client'
import { RecipientForm } from '@/components/Forms/RecipientForm'
import { RecipientsList } from '@/components/Recipients'
import { ScriptureTimeline } from '@/components/ScriptureSelect/ScriptureTimeline'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create')({
    loader: () =>
        client.models.Category.list({
            selectionSet: ['id', 'scriptures.*', 'text'],
        }),
    component: CreatePage,
})

function CreatePage() {
    const { data: categories } = Route.useLoaderData()
    console.log('categories', categories)

    return (
        <>
            <ScriptureTimeline categories={categories} />
            <RecipientForm />
            <RecipientsList />
        </>
    )
}
