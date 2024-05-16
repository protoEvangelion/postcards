import type { ButtonProps } from '@nextui-org/react'

import * as React from 'react'
import { Button } from '@nextui-org/react'
import { Icon } from '@iconify/react'

import { cn } from '@/utils/cn'
import {
    ButtonWithBorderGradient,
    ButtonWithBorderGradientProps,
} from '@/components/atoms/ButtonWithBorderGradient'

export type MultistepNavigationButtonsProps =
    React.HTMLAttributes<HTMLDivElement> & {
        onBack: () => void
        onNext: () => void
        backButtonProps: ButtonProps
        nextButtonProps: ButtonWithBorderGradientProps
    }

const MultistepNavigationButtons = React.forwardRef<
    HTMLDivElement,
    MultistepNavigationButtonsProps
>(
    (
        {
            className,
            onBack,
            onNext,
            backButtonProps,
            nextButtonProps,
            ...props
        },
        ref
    ) => (
        <div
            ref={ref}
            className={cn(
                'lg:flex col-span-12 mx-auto my-6 flex w-full items-center justify-between gap-x-4 lg:mx-0',
                className
            )}
            {...props}
        >
            <Button
                className="rounded-medium border-default-200 text-medium font-medium text-default-500"
                variant="bordered"
                onPress={onBack}
                {...backButtonProps}
            >
                <Icon icon="solar:arrow-left-outline" width={24} />
                Go Back
            </Button>

            <ButtonWithBorderGradient onClick={onNext} {...nextButtonProps}>
                {nextButtonProps?.content || 'Continue'}
            </ButtonWithBorderGradient>
        </div>
    )
)

MultistepNavigationButtons.displayName = 'MultistepNavigationButtons'

export default MultistepNavigationButtons
