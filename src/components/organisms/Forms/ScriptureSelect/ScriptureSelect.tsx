import { Timeline } from 'react-daisyui'
import { Schema } from 'amplify/data/resource'
import { SelectionSet } from 'aws-amplify/api'
import { useScriptureCategoryList } from '@/client'
import { Heading } from '@/components/atoms/Typography/Heading'
import { SubHeading } from '@/components/atoms/Typography/SubHeading'
import { Tooltip } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useFormPersist from 'react-hook-form-persist'
import { z } from 'zod'
import { FormSelect } from '@/components/molecules/FormSelect'
import MultistepNavigationButtons, {
    MultistepNavigationButtonsProps,
} from '../../CreatePostcardFlow/MultistepNavigationButtons'
import { SessionKeys } from '@/types'

const categorySelectionSet = ['id', 'scriptures.*', 'text'] as const

const schema = z.object({
    category: z
        .string()
        .min(1, { message: 'Please select a scripture to continue.' }),
})

export type ScriptureFormSchema = z.infer<typeof schema>

export type CategoryData = SelectionSet<
    Schema['Category']['type'],
    typeof categorySelectionSet
>

export function ScriptureSelect({
    navigationButtonProps,
}: {
    navigationButtonProps: MultistepNavigationButtonsProps
}) {
    const { data: { data: categories } = {} } = useScriptureCategoryList()

    const { setValue, control, watch, getValues, handleSubmit } =
        useForm<ScriptureFormSchema>({
            resolver: zodResolver(schema),
            mode: 'onBlur',
        })

    useFormPersist(SessionKeys['selectScriptureForm'], {
        watch,
        setValue,
        storage: window.sessionStorage,
    })

    if (!categories) return null

    const selectedVerses = categories.find(
        (x) => x.text === getValues().category
    )?.scriptures
    const months = getNextTwelveMonths()

    return (
        <form
            className="flex flex-col w-full component-preview py-8 justify-center gap-8"
            onSubmit={handleSubmit((data, event) => {
                event?.preventDefault()
                navigationButtonProps.onNext()
            })}
        >
            <Heading>Select a Category</Heading>
            <SubHeading>
                A category will include 12 Scriptures hand selected by our
                Biblical Counseling ministry.
            </SubHeading>

            <FormSelect
                control={control}
                name="category"
                label="Select Scripture Category"
                items={categories.map((category) => ({
                    title: category.text,
                    value: category.text,
                }))}
            />

            {selectedVerses && (
                <div className="carousel carousel-center space-x-4 rounded-box bg-slate-50 animate-fade-up">
                    <Timeline className="pt-4 pb-10">
                        {selectedVerses.map(({ reference, text }, i) => {
                            const month = `${months[i]} 1st`

                            return (
                                <Timeline.Item
                                    connect="both"
                                    key={reference}
                                    className="animate-fade-left"
                                >
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

            <MultistepNavigationButtons
                {...navigationButtonProps}
                onNext={() => {
                    // onNext handled onSubmit
                }}
            />
        </form>
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
