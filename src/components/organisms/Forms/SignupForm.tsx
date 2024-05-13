import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import MultistepNavigationButtons, {
    MultistepNavigationButtonsProps,
} from '../CreatePostcardFlow/MultistepNavigationButtons'
import { Heading } from '@/components/atoms/Typography/Heading'

export const SignupForm = ({
    navigationButtonProps,
}: {
    navigationButtonProps: MultistepNavigationButtonsProps
}) => {
    const { user } = useAuthenticator((context) => [context.user])

    return user ? (
        <>
            <Heading>Welcome, you are signed in 👋</Heading>

            <MultistepNavigationButtons {...navigationButtonProps} />
        </>
    ) : (
        <Authenticator className="max-w-xs" />
    )
}
