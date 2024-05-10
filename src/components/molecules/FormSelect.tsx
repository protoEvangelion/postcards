import { Select, SelectProps, SelectItem } from '@nextui-org/react'
import React from 'react'
import { Control, Controller } from 'react-hook-form'

export type FormSelectProps = {
    name: string
    control: Control<any, any>
    items: Item[]
} & Omit<SelectProps, 'children' | 'items'>

type Item = {
    title: string
    value: string
}

export const FormSelect: React.FC<FormSelectProps> = ({ name, ...props }) => {
    return (
        <Controller
            name={name}
            control={props.control}
            render={({ field, fieldState }) => {
                return (
                    <Select
                        {...props}
                        isInvalid={!!fieldState.error?.message}
                        errorMessage={fieldState.error?.message?.toString()}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        selectedKeys={[
                            field.value ?? props.defaultSelectedKeys,
                        ]}
                        items={props.items}
                    >
                        {(item) => (
                            <SelectItem key={item.value}>
                                {item.title}
                            </SelectItem>
                        )}
                    </Select>
                )
            }}
        ></Controller>
    )
}
