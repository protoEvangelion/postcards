import CreatePostcardFlow from '@/components/organisms/CreatePostcardFlow/CreatePostcardFlow'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/create')({
    component: CreatePage,
})

function CreatePage() {
    return <CreatePostcardFlow />
}
