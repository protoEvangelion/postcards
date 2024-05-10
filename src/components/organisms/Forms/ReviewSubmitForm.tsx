import { Heading } from '@/components/atoms/Typography/Heading'
import MultistepNavigationButtons, {
    MultistepNavigationButtonsProps,
} from '../CreatePostcardFlow/MultistepNavigationButtons'
import { SubHeading } from '@/components/atoms/Typography/SubHeading'

export function ReviewSubmitForm({
    stripeApiKey,
    navigationButtonProps,
}: {
    stripeApiKey: string
    navigationButtonProps: MultistepNavigationButtonsProps
}) {
    return (
        <div className="flex flex-col w-full component-preview py-8 justify-center gap-8">
            <Heading>Review & Submit</Heading>

            <SubHeading>Card Month 1 Front (Scripture)</SubHeading>

            <div className="aspect-video bg-white rounded-lg shadow-lg"></div>

            <SubHeading>Card Month 1 Back (Address Details)</SubHeading>

            <div className="aspect-video bg-white rounded-lg shadow-lg"></div>

            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">
                        Total Cost for 12 Postcards
                    </div>
                    <div className="stat-value">$25</div>
                </div>
            </div>

            <MultistepNavigationButtons
                {...navigationButtonProps}
                nextButtonProps={{
                    ...navigationButtonProps.nextButtonProps,
                    content: 'Schedule & Pay',
                }}
            />
        </div>
    )
}
