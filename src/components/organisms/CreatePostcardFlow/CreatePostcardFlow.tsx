import React from 'react'

import MultistepSidebar from './MultistepSidebar'
import { MultistepNavigationButtonsProps } from './MultistepNavigationButtons'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys, client } from '@/client'
import { CircularProgress } from '@nextui-org/progress'
import { useSessionStorage } from 'usehooks-ts'
import { SessionKeys } from '@/types'
import AddressForm from '../Forms/AddressForm'
import { ReviewSubmitForm } from '../Forms/ReviewSubmitForm'
import { ScriptureSelect } from '../Forms/ScriptureSelect/ScriptureSelect'
import { SignupForm } from '../Forms/SignupForm'

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

                if (nextPage < 0 || nextPage > 5) return prev

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

    if (!secrets?.stripePublicKey || !secrets?.googleMapsApiKey)
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
        <SignupForm navigationButtonProps={navigationButtonProps} />,
        <ScriptureSelect navigationButtonProps={navigationButtonProps} />,
        <AddressForm
            name={SessionKeys['userAddressForm']}
            isRecipientForm={false}
            googleMapsApiKey={secrets.googleMapsApiKey}
            navigationButtonProps={navigationButtonProps}
        />,
        <AddressForm
            name={SessionKeys['recipientAddressForm']}
            isRecipientForm
            googleMapsApiKey={secrets.googleMapsApiKey}
            navigationButtonProps={navigationButtonProps}
        />,
        <ReviewSubmitForm
            stripePublicKey={secrets.stripePublicKey}
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
                            // show conf on last page
                            i === page || (i === 4 && page === 5)
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
