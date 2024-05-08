import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { useAsyncList } from '@react-stately/data'
import { get } from 'lodash'
import { Heading } from '../atoms/Typography/Heading'
import { SubHeading } from '../atoms/Typography/SubHeading'

type Place = {
    placePrediction: {
        text: {
            text: string
        }
    }
}

export function AddressAutocomplete({
    googleMapsApiKey,
}: {
    googleMapsApiKey: string
}) {
    const yourAddressList = useAsyncPlaceList(googleMapsApiKey)
    const recipientAddressList = useAsyncPlaceList(googleMapsApiKey)

    const commonProps = {
        onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
            (e.target as HTMLInputElement)?.focus?.(),
        className: 'max-w-lg',
        placeholder: 'Type to search address...',
        variant: 'bordered',
    } as const

    return (
        <>
            <Heading>Choose Address</Heading>
            <SubHeading>Select Your Address</SubHeading>
            <Autocomplete
                {...commonProps}
                inputValue={yourAddressList.filterText}
                isLoading={yourAddressList.isLoading}
                items={yourAddressList.items}
                onInputChange={yourAddressList.setFilterText}
            >
                {(item) => (
                    <AutocompleteItem key={item.name} className="capitalize">
                        {item.name}
                    </AutocompleteItem>
                )}
            </Autocomplete>

            <SubHeading>Select Recipient Address</SubHeading>
            <Autocomplete
                {...commonProps}
                inputValue={recipientAddressList.filterText}
                isLoading={recipientAddressList.isLoading}
                items={recipientAddressList.items}
                onInputChange={recipientAddressList.setFilterText}
            >
                {(item) => (
                    <AutocompleteItem key={item.name} className="capitalize">
                        {item.name}
                    </AutocompleteItem>
                )}
            </Autocomplete>
        </>
    )
}

function useAsyncPlaceList(googleMapsApiKey: string) {
    return useAsyncList<{ name: string }>({
        async load({ signal, filterText }) {
            if (!filterText) {
                return {
                    items: [],
                }
            }
            const res = await fetch(
                `https://places.googleapis.com/v1/places:autocomplete`,
                {
                    signal,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Goog-Api-Key': googleMapsApiKey,
                    },
                    body: JSON.stringify({
                        input: filterText,
                        includedRegionCodes: ['us'],
                        includedPrimaryTypes: ['premise'],
                    }),
                }
            )
            const json = await res.json()

            const items = (json.suggestions ?? []).map((place: Place) => ({
                name: get(place, 'placePrediction.text.text'),
            }))

            console.log('items', items)

            return {
                items,
            }
        },
    })
}
