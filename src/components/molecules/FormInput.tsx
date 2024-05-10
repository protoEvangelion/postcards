import { Input, InputProps } from '@nextui-org/react'
import React from 'react'
import { Control, Controller } from 'react-hook-form'

export type FormInputProps = {
    name: string
    control: Control<any, any>
} & InputProps

export const FormInput: React.FC<FormInputProps> = ({ name, ...props }) => {
    return (
        <Controller
            name={name}
            control={props.control}
            render={({ field, fieldState }) => {
                return (
                    <Input
                        {...props}
                        isInvalid={!!fieldState.error?.message}
                        errorMessage={fieldState.error?.message?.toString()}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                    />
                )
            }}
        ></Controller>
    )
}
