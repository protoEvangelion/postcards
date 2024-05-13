import { cn } from '@nextui-org/react'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AddressAutocomplete } from './AddressAutocomplete'
import useFormPersist from 'react-hook-form-persist'
import states from '../CreatePostcardFlow/states'
import MultistepNavigationButtons, {
    MultistepNavigationButtonsProps,
} from '../CreatePostcardFlow/MultistepNavigationButtons'
import { Heading } from '@/components/atoms/Typography/Heading'
import { SubHeading } from '@/components/atoms/Typography/SubHeading'
import { FormInput } from '@/components/molecules/FormInput'
import { FormSelect } from '@/components/molecules/FormSelect'

// Define the validation schema using zod
const addressSchema = z.object({
    isRecipientAddress: z.boolean(),
    name: z.string().min(1, { message: 'Name is required' }),
    address: z.string().min(1, { message: 'Address is required' }),
    address2: z.string().optional(),
    zip: z.string().min(1, { message: 'ZIP code is required' }),
    city: z.string().min(1, { message: 'City is required' }),
    // State will always have something
    state: z.string().optional(),
})
// Define the form inputs type based on the schema
export type AddressFormSchema = z.infer<typeof addressSchema>

export interface AddressFormProps
    extends React.HTMLAttributes<HTMLFormElement> {
    isRecipientForm: boolean
    googleMapsApiKey: string
    name: string
    navigationButtonProps: MultistepNavigationButtonsProps
}

const AddressForm = ({
    className,
    isRecipientForm,
    googleMapsApiKey,
    name,
    navigationButtonProps,
}: AddressFormProps) => {
    const { handleSubmit, setValue, control, trigger, watch } =
        useForm<AddressFormSchema>({
            resolver: zodResolver(addressSchema),
            mode: 'onBlur',
        })

    useFormPersist(name, {
        watch,
        setValue,
        storage: window.sessionStorage,
    })

    const inputProps = {
        control,
        labelPlacement: 'outside',
        classNames: {
            label: 'text-small font-medium text-default-700 group-data-[filled-within=true]:text-default-700',
        },
    } as const

    const onSubmit: SubmitHandler<AddressFormSchema> = (formData) => {
        console.log('!', formData)
        // client.models.Recipient.create({ ...formData }).then((d) => {
        //     console.log('recipient', d.data)
        //     setRecipient(d.data)
        // })
    }

    return (
        <>
            {isRecipientForm && (
                <>
                    <Heading>Choose Address</Heading>
                    <SubHeading>
                        Add recipient address where the postcard will be
                        delivered.
                    </SubHeading>
                </>
            )}

            <AddressAutocomplete
                googleMapsApiKey={googleMapsApiKey}
                onAutofillForm={(address) => {
                    console.log('autofill', address)
                    Object.entries(address).forEach(([key, value]) => {
                        setValue(key as keyof AddressFormSchema, value)
                    })

                    // retrigger onBlur validation
                    trigger()
                }}
            />

            <form
                className={cn(
                    'grid grid-cols-12 flex-col gap-4 py-8',
                    className
                )}
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormInput
                    {...inputProps}
                    name="name"
                    label="Name"
                    className="col-span-12 md:col-span-12"
                    placeholder="First & Last Name"
                />

                <FormInput
                    {...inputProps}
                    name="address"
                    label="Address"
                    className="col-span-12 md:col-span-6"
                    placeholder="Enter Street Address"
                />

                <FormInput
                    {...inputProps}
                    name="address2"
                    label="Address 2"
                    className="col-span-12 md:col-span-6"
                    placeholder="Apt, suite, unit, building, floor, etc."
                />

                <FormInput
                    {...inputProps}
                    name="city"
                    label="City"
                    className="col-span-12 md:col-span-4"
                />

                <FormSelect
                    {...inputProps}
                    name="state"
                    label="State"
                    items={states}
                    defaultSelectedKeys={'texas'}
                    className="col-span-12 md:col-span-4"
                />

                <FormInput
                    {...inputProps}
                    name="zip"
                    label="Zip Code"
                    className="col-span-12 md:col-span-4"
                />

                <MultistepNavigationButtons {...navigationButtonProps} />
            </form>
        </>
    )
}

AddressForm.displayName = 'AddressForm'

export default AddressForm
