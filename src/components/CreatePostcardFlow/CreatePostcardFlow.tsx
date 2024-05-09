import React from 'react'

import MultistepSidebar from './multistep-sidebar'
import MultistepNavigationButtons, {
    MultistepNavigationButtonsProps,
} from './multistep-navigation-buttons'
import { SignupForm } from './SignupForm'
import { ScriptureSelect } from '../Forms/ScriptureSelect/ScriptureSelect'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys, client } from '@/client'
import { CircularProgress } from '@nextui-org/progress'
import { PaymentFormLoader } from '../Forms/PaymentFormLoader'
import ReviewAndPaymentForm from './review-and-payment-form'
import AddressForm from '../Forms/AddressForm'
import { useSessionStorage } from 'usehooks-ts'
import { SessionKeys } from '@/types'
import { ReviewSubmitForm } from '../Forms/ReviewSubmitForm'

export default function CreatePostcardFlow() {
    const [page, setPage] = useSessionStorage(
        SessionKeys['createStepsState'],
        0
    )

    const { data } = useQuery({
        queryKey: [QueryKeys.ApiKeys],
        queryFn: () => client.queries.handleApiKeys(),
    })

    const secrets = data?.data

    const paginate = React.useCallback(
        (newDirection: number) => {
            setPage((prev) => {
                const nextPage = prev + newDirection

                if (nextPage < 0 || nextPage > 4) return prev

                return nextPage
            })
        },
        [setPage]
    )

    const onChangePage = React.useCallback(
        (newPage: number) => {
            setPage((prev) => {
                if (newPage < 0 || newPage > 3) return prev

                return newPage
            })
        },
        [setPage]
    )

    const onBack = React.useCallback(() => {
        paginate(-1)
    }, [paginate])

    const onNext = React.useCallback(() => {
        paginate(1)
    }, [paginate])

    if (!secrets?.stripeApiKey || !secrets?.googleMapsApiKey)
        return <CircularProgress />

    const navigationButtonProps: MultistepNavigationButtonsProps = {
        backButtonProps: { isDisabled: page === 0 },
        className: 'hidden justify-start lg:flex col-span-12',
        nextButtonProps: {
            children: 'Continue',
            type: 'submit',
        },
        onBack: onBack,
        onNext: onNext,
    }

    // TODO do we need to render all components at once now that we are persiting state in session?
    const components = [
        <SignupForm
            googleMapsApiKey={secrets.googleMapsApiKey}
            navigationButtonProps={navigationButtonProps}
        />,
        <ScriptureSelect navigationButtonProps={navigationButtonProps} />,
        <AddressForm
            name="recipient-address-form"
            isRecipientForm
            googleMapsApiKey={secrets.googleMapsApiKey}
            navigationButtonProps={navigationButtonProps}
        />,
        <PaymentFormLoader
            stripeApiKey={secrets.stripeApiKey}
            navigationButtonProps={navigationButtonProps}
        />,
        <ReviewSubmitForm
            stripeApiKey={secrets.stripeApiKey}
            navigationButtonProps={navigationButtonProps}
        />,
    ]

    return (
        <MultistepSidebar
            currentPage={page}
            onBack={onBack}
            onChangePage={onChangePage}
            onNext={onNext}
        >
            <div className="relative flex h-fit w-full flex-col pt-6 text-center lg:h-full lg:justify-center lg:pt-0">
                {components.map((component, i) => (
                    <div
                        key={i}
                        id={i + '-component-animation-wrapper'}
                        className={
                            i === page
                                ? 'animate-fade-up animate-duration-500'
                                : 'invisible h-0'
                        }
                    >
                        {component}
                    </div>
                ))}
            </div>
        </MultistepSidebar>
    )
}
