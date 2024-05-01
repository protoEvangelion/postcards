import { useState } from 'react'
import { Select, Timeline } from 'react-daisyui'
import { Schema } from 'amplify/data/resource'
import { SelectionSet } from 'aws-amplify/api'

const Option = Select.Option

const Card = ({ verse, reference }: { verse: string; reference: string }) => {
    return (
        <div className="flex-col w-3/4 shadow-xl rounded-lg aspect-video flex p-10 my-3 hover:shadow-2xl transition-shadow duration-300 justify-around">
            <div className="p-4">
                <p className="text-gray-800 text-3xl font-['Dancing_Script']">
                    {verse}
                </p>
            </div>

            <p className="text-2xl self-end font-bold">~ {reference}</p>
        </div>
    )
}

const categorySelectionSet = ['id', 'scriptures.*', 'text'] as const

export type CategoryData = SelectionSet<
    Schema['Category']['type'],
    typeof categorySelectionSet
>

export function ScriptureTimeline({
    categories,
}: {
    categories: CategoryData[]
}) {
    const [value, setValue] = useState('default')
    const selectedVerses = categories.find((x) => x.text === value)?.scriptures
    const months = getNextTwelveMonths()

    return (
        <div className="flex flex-col w-full component-preview p-4 items-center justify-center gap-10 ">
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
                <Timeline vertical>
                    {selectedVerses.map(({ reference, text }, i) => {
                        const isEven = i % 2 === 0
                        const month = `${months[i]} 1st`

                        return (
                            <Timeline.Item connect="both" key={reference}>
                                <Timeline.Start
                                    className="flex justify-end pr-5"
                                    box={isEven}
                                >
                                    {isEven ? (
                                        month
                                    ) : (
                                        <Card
                                            verse={text}
                                            reference={reference}
                                        />
                                    )}
                                </Timeline.Start>
                                <Timeline.Middle />
                                <Timeline.End
                                    box={!isEven}
                                    className="flex justify-start pl-5"
                                >
                                    {isEven ? (
                                        <Card
                                            verse={text}
                                            reference={reference}
                                        />
                                    ) : (
                                        month
                                    )}
                                </Timeline.End>
                            </Timeline.Item>
                        )
                    })}
                </Timeline>
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
