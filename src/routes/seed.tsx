import { client } from '@/client'
import { verses } from '@/components/Forms/ScriptureSelect/verses'
import { createFileRoute } from '@tanstack/react-router'
import { Accordion, Button } from 'react-daisyui'

export const Route = createFileRoute('/seed')({
    loader: () =>
        client.models.Category.list({
            selectionSet: ['id', 'scriptures.*', 'text'],
        }),
    component: SeedPage,
})

function SeedPage() {
    const { data: categories } = Route.useLoaderData()
    return (
        <>
            {!categories.length && (
                <Button onClick={handleSeed} className="my-10">
                    Seed it
                </Button>
            )}

            {categories.map((category) => (
                <Accordion>
                    <Accordion.Title className="text-xl font-medium">
                        {category.text}
                    </Accordion.Title>
                    <Accordion.Content>
                        <ol className="list-decimal">
                            {category.scriptures.map((scripture) => (
                                <li>{scripture.reference}</li>
                            ))}
                        </ol>
                    </Accordion.Content>
                </Accordion>
            ))}
        </>
    )
}

function handleSeed() {
    Object.entries(verses).forEach(async ([category, categoryVerses]) => {
        const { data } = await client.models.Category.create({
            text: category,
        })

        if (data?.id) {
            categoryVerses.forEach(async ({ reference, verse }) => {
                await client.models.Scripture.create({
                    categoryId: data.id,
                    reference,
                    text: verse,
                })
            })
        }
    })
}
