import React from 'react'
import { useForm, SubmitHandler, FieldError } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, Input, Card, Form } from 'react-daisyui'
import { client } from '@/client'

// Define the validation schema using zod
const recipientSchema = z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    address: z.string().nonempty({ message: 'Address is required' }),
    address2: z.string().optional(),
    zip: z.string().nonempty({ message: 'ZIP code is required' }),
    city: z.string().nonempty({ message: 'City is required' }),
    state: z.string().nonempty({ message: 'State is required' }),
})

// Define the form inputs type based on the schema
type RecipientFormData = z.infer<typeof recipientSchema>

const getInputClassName = (error?: FieldError) => {
    const defaultClasses = 'input-bordered'

    return error ? `${defaultClasses} input-error` : defaultClasses
}

export const RecipientForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RecipientFormData>({
        resolver: zodResolver(recipientSchema),
    })

    const onSubmit: SubmitHandler<RecipientFormData> = (data) => {
        const a = client.models.Recipient.create({ ...data })
        console.log('!created', a)
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Add Recipient</Card.Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register('name')}
                        placeholder="Name"
                        className={getInputClassName(errors.name)}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <Input {...register('address')} placeholder="Address" />
                    {errors.address && <p>{errors.address.message}</p>}

                    <Input
                        {...register('address2')}
                        placeholder="Address 2 (Optional)"
                    />

                    <Input {...register('zip')} placeholder="ZIP Code" />
                    {errors.zip && <p>{errors.zip.message}</p>}

                    <Input {...register('city')} placeholder="City" />
                    {errors.city && <p>{errors.city.message}</p>}

                    <Input {...register('state')} placeholder="State" />
                    {errors.state && <p>{errors.state.message}</p>}

                    <Button type="submit" color="primary">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
