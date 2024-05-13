import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { useAsyncList } from '@react-stately/data'
import { debounce, get, kebabCase } from 'lodash'
import { AddressFormSchema } from './AddressForm'

type Place = {
    placePrediction: {
        text: {
            text: string
        }
    }
}

type GetPlaceResponse = {
    addressComponents: {
        longText: string
        types: string[]
    }[]
}

export function AddressAutocomplete({
    googleMapsApiKey,
    onAutofillForm,
}: {
    googleMapsApiKey: string
    onAutofillForm: (address: Partial<AddressFormSchema>) => void
}) {
    const addressList = useAsyncPlaceList(googleMapsApiKey)

    const commonProps = {
        onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
            (e.target as HTMLInputElement)?.focus?.(),
        className: 'max-w-lg',
        placeholder: 'Type to search address...',
        variant: 'bordered',
    } as const

    return (
        <Autocomplete
            {...commonProps}
            inputValue={addressList.filterText}
            isLoading={addressList.isLoading}
            items={addressList.items}
            onInputChange={addressList.setFilterText}
            onSelectionChange={(selectedItem) => {
                if (!selectedItem) return

                const place = addressList.items.find(
                    (x) => x.name === selectedItem
                )

                if (!place?.placeId) return

                console.log('selected place', place)

                fetch(
                    `https://places.googleapis.com/v1/places/${place.placeId}`,
                    {
                        headers: {
                            'X-Goog-Api-Key': googleMapsApiKey,
                            'X-Goog-FieldMask': 'addressComponents',
                        },
                    }
                )
                    .then((x) => x.json())
                    .then(({ addressComponents = [] }: GetPlaceResponse) => {
                        const streetNumber =
                            addressComponents.find((x) =>
                                x.types.includes('street_number')
                            )?.longText ?? ''
                        const streetName =
                            addressComponents.find((x) =>
                                x.types.includes('route')
                            )?.longText ?? ''

                        const street = `${streetNumber} ${streetName}`

                        const city =
                            addressComponents.find((x) =>
                                x.types.includes('locality')
                            )?.longText ?? ''

                        const state = kebabCase(
                            addressComponents.find((x) =>
                                x.types.includes('administrative_area_level_1')
                            )?.longText ?? ''
                        )
                        console.log('state', state)
                        const zip =
                            addressComponents.find((x) =>
                                x.types.includes('postal_code')
                            )?.longText ?? ''

                        onAutofillForm({
                            address: street,
                            city,
                            state,
                            zip,
                        })
                    })

                // buggy you have to return selected item
                return selectedItem
            }}
        >
            {(item) => (
                <AutocompleteItem key={item.name} className="capitalize">
                    {item.name}
                </AutocompleteItem>
            )}
        </Autocomplete>
    )
}

const debouncedFetch = debounce(fetch, 300)

function useAsyncPlaceList(googleMapsApiKey: string) {
    return useAsyncList<{ name: string; placeId: string }>({
        async load({ signal, filterText }) {
            if (!filterText) {
                return {
                    items: [],
                }
            }

            const res = await debouncedFetch(
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
            const json = await res?.json?.()

            const items = (json.suggestions ?? []).map((place: Place) => ({
                name: get(place, 'placePrediction.text.text'),
                placeId: get(place, 'placePrediction.placeId'),
            }))

            console.log('items', items)

            return {
                items,
            }
        },
    })
}
