import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import { motion } from 'framer-motion'

export const SignupForm = () => {
    const { user } = useAuthenticator((context) => [context.user])

    return user ? (
        <motion.div
            initial={{ opacity: 0 }} // Start with the content invisible
            animate={{ opacity: 1 }} // Animate to fully visible
            transition={{ delay: 0.5 }} // Delay the animation by 1 second
        >
            <div className="text-3xl font-bold leading-9 text-default-foreground py-10">
                Welcome, you are signed in 👋
            </div>
        </motion.div>
    ) : (
        <Authenticator className="max-w-xs" />
    )
}
