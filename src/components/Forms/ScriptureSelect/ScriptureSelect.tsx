import { useEffect, useState } from 'react'
import { Select, Timeline } from 'react-daisyui'
import { Schema } from 'amplify/data/resource'
import { SelectionSet } from 'aws-amplify/api'
import { useQuery } from '@tanstack/react-query'
import { client } from '@/client'
import { Heading } from '@/components/atoms/Typography/Heading'
import { SubHeading } from '@/components/atoms/Typography/SubHeading'
import { Tooltip } from '@nextui-org/react'

const Option = Select.Option

const categorySelectionSet = ['id', 'scriptures.*', 'text'] as const

export type CategoryData = SelectionSet<
    Schema['Category']['type'],
    typeof categorySelectionSet
>

export function ScriptureSelect() {
    const { data: { data: categories } = {} } = useQuery({
        queryKey: ['categoryList'],
        queryFn: () =>
            client.models.Category.list({
                selectionSet: ['id', 'scriptures.*', 'text'],
            }),
    })

    const [value, setValue] = useState('default')
    if (!categories) return null

    const selectedVerses = categories.find((x) => x.text === value)?.scriptures
    const months = getNextTwelveMonths()

    return (
        <div className="flex flex-col w-full component-preview py-8 justify-center gap-10">
            <Heading>Select a Category</Heading>
            <SubHeading>
                A category will include 12 Scriptures hand selected by our
                Biblical Counseling ministry.
            </SubHeading>

            <Select
                value={value}
                onChange={(event) => setValue(event.target.value)}
            >
                <Option value={'default'} disabled>
                    Select Scripture Category
                </Option>

                {categories.map((category) => (
                    <Option key={category.id} value={category.text}>
                        {category.text}
                    </Option>
                ))}
            </Select>

            {selectedVerses && (
                <div className="carousel carousel-center space-x-4 rounded-box bg-slate-50">
                    <Timeline className="pt-4 pb-10">
                        {selectedVerses.map(({ reference, text }, i) => {
                            const month = `${months[i]} 1st`

                            return (
                                <Timeline.Item connect="both" key={reference}>
                                    <Timeline.Start className="flex justify-end pr-5">
                                        {month}
                                    </Timeline.Start>
                                    <Timeline.Middle />
                                    <Timeline.End
                                        box
                                        className="flex justify-start pl-5"
                                    >
                                        <Tooltip
                                            content={text}
                                            className="max-w-52"
                                        >
                                            {reference}
                                        </Tooltip>
                                    </Timeline.End>
                                </Timeline.Item>
                            )
                        })}
                    </Timeline>
                </div>
            )}
        </div>
    )
}

function getNextTwelveMonths() {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const currentMonth = new Date().getMonth()

    return [
        ...monthNames.slice(currentMonth + 1),
        ...monthNames.slice(0, currentMonth + 1),
    ]
}
