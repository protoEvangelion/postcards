import React, { useMemo } from 'react'
import { P, match } from 'ts-pattern'
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
import { LazyMotion, domAnimation, m } from 'framer-motion'

const variants = {
    enter: (direction: number) => ({
        y: direction > 0 ? 30 : -30,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        y: direction < 0 ? 30 : -30,
        opacity: 0,
    }),
}

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

    const navigationButtonProps: MultistepNavigationButtonsProps = {
        backButtonProps: { isDisabled: page === 0 },
        className: 'hidden justify-start lg:flex col-span-12',
        nextButtonProps: {
            children: 'Continue',
        },
        onBack: onBack,
        onNext: onNext,
    }

    const content = useMemo(() => {
        const component = match({ page, secrets })
            .with({ page: 0 }, () => (
                <SignupForm navigationButtonProps={navigationButtonProps} />
            ))
            .with({ page: 1 }, () => (
                <ScriptureSelect
                    navigationButtonProps={navigationButtonProps}
                />
            ))
            .with(
                {
                    page: 2,
                    secrets: { googleMapsApiKey: P.not(P.nullish) },
                },
                ({ secrets: { googleMapsApiKey } }) => (
                    <AddressForm
                        name={SessionKeys['userAddressForm']}
                        isRecipientForm={false}
                        googleMapsApiKey={googleMapsApiKey}
                        navigationButtonProps={navigationButtonProps}
                    />
                )
            )
            .with(
                {
                    page: 3,
                    secrets: { googleMapsApiKey: P.not(P.nullish) },
                },
                ({ secrets: { googleMapsApiKey } }) => (
                    <AddressForm
                        name={SessionKeys['recipientAddressForm']}
                        isRecipientForm
                        googleMapsApiKey={googleMapsApiKey}
                        navigationButtonProps={navigationButtonProps}
                    />
                )
            )
            .with(
                { secrets: { stripePublicKey: P.not(P.nullish) } },
                ({ secrets: { stripePublicKey } }) => (
                    <ReviewSubmitForm
                        stripePublicKey={stripePublicKey}
                        navigationButtonProps={navigationButtonProps}
                    />
                )
            )
            .otherwise(() => null)

        return (
            <LazyMotion features={domAnimation}>
                <m.div
                    key={page}
                    animate="center"
                    className="col-span-12"
                    exit="exit"
                    custom={1}
                    initial="exit"
                    transition={{
                        y: {
                            ease: 'backOut',
                            duration: 0.35,
                        },
                        opacity: { duration: 0.4 },
                    }}
                    variants={variants}
                >
                    {component}
                </m.div>
            </LazyMotion>
        )
    }, [page, secrets])

    if (!secrets?.stripePublicKey || !secrets?.googleMapsApiKey)
        return <CircularProgress />

    return (
        <MultistepSidebar
            currentPage={page}
            onBack={onBack}
            onChangePage={onChangePage}
            onNext={onNext}
        >
            <div className="relative flex h-fit w-full flex-col pt-6 text-center lg:h-full lg:justify-center lg:pt-0 animate-fade-up animate-duration-500">
                {content}
            </div>
        </MultistepSidebar>
    )
}
