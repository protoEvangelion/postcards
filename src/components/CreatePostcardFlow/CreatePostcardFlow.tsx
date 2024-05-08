'use client'

import React, { useEffect } from 'react'

import MultistepSidebar from './multistep-sidebar'
import MultistepNavigationButtons from './multistep-navigation-buttons'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { SignupForm } from './SignupForm'
import { ScriptureSelect } from '../Forms/ScriptureSelect/ScriptureSelect'
import { AddressAutocomplete } from '../Forms/AddressAutocomplete'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys, client } from '@/client'
import { CircularProgress } from '@nextui-org/progress'
import { PaymentFormLoader } from '../Forms/PaymentFormLoader'
import ReviewAndPaymentForm from './review-and-payment-form'

export default function CreatePostcardFlow() {
    const [[page], setPage] = React.useState([0, 0])

    const { data } = useQuery({
        queryKey: [QueryKeys.ApiKeys],
        queryFn: () => client.queries.handleApiKeys(),
    })

    const secrets = data?.data

    const { user } = useAuthenticator((context) => [context.user])

    useEffect(() => {
        if (user) {
            setPage([1, 1])
        }
    }, [user])

    const paginate = React.useCallback((newDirection: number) => {
        setPage((prev) => {
            const nextPage = prev[0] + newDirection

            if (nextPage < 0 || nextPage > 4) return prev

            return [nextPage, newDirection]
        })
    }, [])

    const onChangePage = React.useCallback((newPage: number) => {
        setPage((prev) => {
            if (newPage < 0 || newPage > 3) return prev
            const currentPage = prev[0]

            return [newPage, newPage > currentPage ? 1 : -1]
        })
    }, [])

    const onBack = React.useCallback(() => {
        paginate(-1)
    }, [paginate])

    const onNext = React.useCallback(() => {
        paginate(1)
    }, [paginate])

    if (!secrets?.stripeApiKey || !secrets?.googleMapsApiKey)
        return <CircularProgress />

    const components = [
        <SignupForm />,
        <ScriptureSelect />,
        <AddressAutocomplete googleMapsApiKey={secrets.googleMapsApiKey} />,
        <PaymentFormLoader stripeApiKey={secrets.stripeApiKey} />,
        <ReviewAndPaymentForm />,
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
                            i === page ? 'animate-fade-up' : 'invisible h-0'
                        }
                    >
                        {component}
                    </div>
                ))}

                <MultistepNavigationButtons
                    backButtonProps={{ isDisabled: page === 0 }}
                    className="hidden justify-start lg:flex"
                    nextButtonProps={{
                        children: 'Continue',
                    }}
                    onBack={onBack}
                    onNext={onNext}
                />
            </div>
        </MultistepSidebar>
    )
}
