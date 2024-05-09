import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import { Heading } from '../atoms/Typography/Heading'
import AddressForm from '../Forms/AddressForm'
import { SubHeading } from '../atoms/Typography/SubHeading'
import { MultistepNavigationButtonsProps } from './multistep-navigation-buttons'

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
