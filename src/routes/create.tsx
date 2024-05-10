import CreatePostcardFlow from '@/components/organisms/CreatePostcardFlow/CreatePostcardFlow'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create')({
    component: CreatePage,
})

function CreatePage() {
    return <CreatePostcardFlow />
}
