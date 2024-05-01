import { RecipientForm } from '@/components/Forms/RecipientForm'
import { RecipientsList } from '@/components/Recipients'
import { ScriptureTimeline } from '@/components/ScriptureSelect/ScriptureTimeline'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/create')({
    component: CreatePage,
})

function CreatePage() {
    return (
        <>
            <ScriptureTimeline />
            <RecipientForm />
            <RecipientsList />
        </>
    )
}
