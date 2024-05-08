'use client'

import { cn, Input, InputProps } from '@nextui-org/react'

import { Heading } from '../atoms/Typography/Heading'
import { SubHeading } from '../atoms/Typography/SubHeading'

import React, { useState } from 'react'
import { useForm, SubmitHandler, FieldError } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, Card } from 'react-daisyui'
import { client } from '@/client'
import { Schema } from 'amplify/data/resource'

// Define the validation schema using zod
const recipientSchema = z.object({
    isRecipientAddress: z.boolean(),
    name: z.string().min(1, { message: 'Name is required' }),
    address: z.string().min(1, { message: 'Address is required' }),
    address2: z.string().optional(),
    zip: z.string().min(1, { message: 'ZIP code is required' }),
    city: z.string().min(1, { message: 'City is required' }),
    state: z.string().min(1, { message: 'State is required' }),
})
// Define the form inputs type based on the schema
type RecipientFormData = z.infer<typeof recipientSchema>

export interface AddressFormProps
    extends React.HTMLAttributes<HTMLFormElement> {
    isRecipientForm: boolean
}

const AddressForm = React.forwardRef<HTMLFormElement, AddressFormProps>(
    ({ className, isRecipientForm, ...props }, ref) => {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<RecipientFormData>({
            resolver: zodResolver(recipientSchema),
        })
        const [recipient, setRecipient] = useState<
            Schema['Address']['type'] | null
        >(null)

        const inputProps: Pick<InputProps, 'labelPlacement' | 'classNames'> = {
            labelPlacement: 'outside',
            classNames: {
                label: 'text-small font-medium text-default-700 group-data-[filled-within=true]:text-default-700',
            },
        }

        const onSubmit: SubmitHandler<RecipientFormData> = (formData) => {
            console.log('!', formData)
            // client.models.Recipient.create({ ...formData }).then((d) => {
            //     console.log('recipient', d.data)
            //     setRecipient(d.data)
            // })
        }

        return (
            <>
                <Heading>Choose Address</Heading>

                {isRecipientForm ? (
                    <SubHeading>
                        Add recipient address where the postcard will be
                        delivered.
                    </SubHeading>
                ) : (
                    <SubHeading>
                        Add your address which will show up as the return
                        address on the postcard.
                    </SubHeading>
                )}

                <form
                    ref={ref}
                    className={cn(
                        'grid grid-cols-12 flex-col gap-4 py-8',
                        className
                    )}
                    onSubmit={handleSubmit(onSubmit)}
                    {...props}
                >
                    <Input
                        {...register('name')}
                        {...inputProps}
                        className="col-span-12 md:col-span-12"
                        label="Name"
                        placeholder="First & Last Name"
                    />

                    <Input
                        {...register('address')}
                        {...inputProps}
                        className="col-span-12 md:col-span-6"
                        label="Address"
                        placeholder="Enter Street Address"
                    />

                    <Input
                        {...register('address2')}
                        {...inputProps}
                        className="col-span-12 md:col-span-6"
                        label="Address 2"
                        placeholder="Apt, suite, unit, building, floor, etc."
                    />

                    <Input
                        {...register('city')}
                        {...inputProps}
                        className="col-span-12 md:col-span-4"
                        label="City"
                    />

                    <Input
                        {...register('state')}
                        {...inputProps}
                        className="col-span-12 md:col-span-4"
                        label="State"
                    />

                    <Input
                        {...register('zip')}
                        {...inputProps}
                        className="col-span-12 md:col-span-4"
                        label="Zip Code"
                    />
                </form>
            </>
        )
    }
)

AddressForm.displayName = 'AddressForm'

export default AddressForm
