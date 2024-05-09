import MultistepNavigationButtons, {
    MultistepNavigationButtonsProps,
} from '../CreatePostcardFlow/multistep-navigation-buttons'
import { Heading } from '../atoms/Typography/Heading'

export function ReviewSubmitForm({
    stripeApiKey,
    navigationButtonProps,
}: {
    stripeApiKey: string
    navigationButtonProps: MultistepNavigationButtonsProps
}) {
    return (
        <>
            <Heading>Review & Submit</Heading>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="aspect-w-6 aspect-h-4 bg-white rounded-lg shadow-lg">
                    Front
                </div>
                <div className="aspect-w-6 aspect-h-4 bg-white rounded-lg shadow-lg">
                    Back
                </div>
            </div>

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
        </>
    )
}
