import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import AddressForm from './AddressForm'
import { MultistepNavigationButtonsProps } from '../CreatePostcardFlow/MultistepNavigationButtons'
import { Heading } from '@/components/atoms/Typography/Heading'
import { SubHeading } from '@/components/atoms/Typography/SubHeading'

export const SignupForm = ({
    googleMapsApiKey,
    navigationButtonProps,
}: {
    googleMapsApiKey: string
    navigationButtonProps: MultistepNavigationButtonsProps
}) => {
    const { user } = useAuthenticator((context) => [context.user])

    return user ? (
        <>
            <Heading>Welcome, you are signed in 👋</Heading>
            <SubHeading>Please Add Your Address</SubHeading>

            <AddressForm
                name="user-address-form"
                isRecipientForm={false}
                googleMapsApiKey={googleMapsApiKey}
                navigationButtonProps={navigationButtonProps}
            />
        </>
    ) : (
        <Authenticator className="max-w-xs" />
    )
}
