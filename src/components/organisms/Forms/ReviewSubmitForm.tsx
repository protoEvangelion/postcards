import { Heading } from '@/components/atoms/Typography/Heading'
import { MultistepNavigationButtonsProps } from '../CreatePostcardFlow/MultistepNavigationButtons'
import { SubHeading } from '@/components/atoms/Typography/SubHeading'
import { useSessionStorage } from 'usehooks-ts'
import { SessionKeys } from '@/types'
import { useScriptureCategoryList } from '@/client'
import { ScriptureFormSchema } from './ScriptureSelect/ScriptureSelect'
import { Divider } from '@nextui-org/react'
import { AddressFormSchema } from './AddressForm'
import { getStateAbbrev } from '../CreatePostcardFlow/states'
import { StripeLoader } from './StripeLoader'
import PaymentResult from '../CreatePostcardFlow/PaymentResult'
import PaymentForm from './PaymentForm'

export function ReviewSubmitForm({
    stripePublicKey,
    navigationButtonProps,
}: {
    stripePublicKey: string
    navigationButtonProps: MultistepNavigationButtonsProps
}) {
    const [selectedScripture] = useSessionStorage<ScriptureFormSchema>(
        SessionKeys['selectScriptureForm'],
        {} as any
    )
    const [recipientAddressForm] = useSessionStorage<AddressFormSchema>(
        SessionKeys['recipientAddressForm'],
        {} as any
    )

    const { data: { data: categories } = {} } = useScriptureCategoryList()

    const firstScripture = categories?.find(
        (x) => x.text === selectedScripture.category
    )?.scriptures?.[0]

    const clientSecret = new URLSearchParams(window.location.search).get(
        'payment_intent_client_secret'
    )

    return (
        <StripeLoader stripePublicKey={stripePublicKey}>
            {clientSecret ? (
                <PaymentResult />
            ) : (
                <div className="flex flex-col w-full component-preview py-8 justify-center gap-8">
                    <Heading>Review & Submit</Heading>

                    <SubHeading>Card Month 1 Front (Scripture)</SubHeading>

                    <div className="aspect-video bg-white rounded-lg shadow-large flex p-7 gap-3 items-center flex-col justify-center prose prose-lg">
                        {firstScripture?.text}{' '}
                        <div>{firstScripture?.reference}</div>
                    </div>

                    <SubHeading>Card Month 1 Back (Address Details)</SubHeading>

                    <div className="aspect-video bg-white rounded-lg shadow-large flex p-7 gap-3">
                        <div className="flex-grow basis-0"></div>

                        <Divider orientation="vertical" />

                        <div className="flex-grow basis-0 prose prose-sm flex flex-col justify-between items-start text-start">
                            <div className="flex flex-col items-start">
                                <span>Return To:</span>
                                <span>SendScripture</span>
                                <span>PO Box 1234</span>
                            </div>

                            <div className="flex flex-col">
                                <span>{recipientAddressForm?.name}</span>
                                <span>Or Current Resident</span>
                                <span>{recipientAddressForm?.address}</span>
                                <span>{recipientAddressForm?.address2}</span>
                                <span>
                                    <span>{recipientAddressForm?.city}, </span>
                                    <span>
                                        {getStateAbbrev(
                                            recipientAddressForm?.state ?? ''
                                        )}{' '}
                                    </span>
                                    <span>{recipientAddressForm?.zip}</span>
                                </span>
                            </div>
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

                    <PaymentForm
                        navigationButtonProps={navigationButtonProps}
                    />
                </div>
            )}
        </StripeLoader>
    )
}
