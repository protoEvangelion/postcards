export type StateProps = {
    title: string
    value: string
}

const states: StateProps[] = [
    {
        title: 'AL',
        value: 'alabama',
    },
    {
        title: 'AK',
        value: 'alaska',
    },
    {
        title: 'AZ',
        value: 'arizona',
    },
    {
        title: 'AR',
        value: 'arkansas',
    },
    {
        title: 'CA',
        value: 'california',
    },
    {
        title: 'CO',
        value: 'colorado',
    },
    {
        title: 'CT',
        value: 'connecticut',
    },
    {
        title: 'DE',
        value: 'delaware',
    },
    {
        title: 'FL',
        value: 'florida',
    },
    {
        title: 'GA',
        value: 'georgia',
    },
    {
        title: 'HI',
        value: 'hawaii',
    },
    {
        title: 'ID',
        value: 'idaho',
    },
    {
        title: 'IL',
        value: 'illinois',
    },
    {
        title: 'IN',
        value: 'indiana',
    },
    {
        title: 'IA',
        value: 'iowa',
    },
    {
        title: 'KS',
        value: 'kansas',
    },
    {
        title: 'KY',
        value: 'kentucky',
    },
    {
        title: 'LA',
        value: 'louisiana',
    },
    {
        title: 'ME',
        value: 'maine',
    },
    {
        title: 'MD',
        value: 'maryland',
    },
    {
        title: 'MA',
        value: 'massachusetts',
    },
    {
        title: 'MI',
        value: 'michigan',
    },
    {
        title: 'MN',
        value: 'minnesota',
    },
    {
        title: 'MS',
        value: 'mississippi',
    },
    {
        title: 'MO',
        value: 'missouri',
    },
    {
        title: 'MT',
        value: 'montana',
    },
    {
        title: 'NE',
        value: 'nebraska',
    },
    {
        title: 'NV',
        value: 'nevada',
    },
    {
        title: 'NH',
        value: 'new-hampshire',
    },
    {
        title: 'NJ',
        value: 'new-jersey',
    },
    {
        title: 'NM',
        value: 'new-mexico',
    },
    {
        title: 'NY',
        value: 'new-york',
    },
    {
        title: 'NC',
        value: 'north-carolina',
    },
    {
        title: 'ND',
        value: 'north-dakota',
    },
    {
        title: 'OH',
        value: 'ohio',
    },
    {
        title: 'OK',
        value: 'oklahoma',
    },
    {
        title: 'OR',
        value: 'oregon',
    },
    {
        title: 'PA',
        value: 'pennsylvania',
    },
    {
        title: 'RI',
        value: 'rhode-island',
    },
    {
        title: 'SC',
        value: 'south-carolina',
    },
    {
        title: 'SD',
        value: 'south-dakota',
    },
    {
        title: 'TN',
        value: 'tennessee',
    },
    {
        title: 'TX',
        value: 'texas',
    },
    {
        title: 'UT',
        value: 'utah',
    },
    {
        title: 'VT',
        value: 'vermont',
    },
    {
        title: 'VA',
        value: 'virginia',
    },
    {
        title: 'WA',
        value: 'washington',
    },
    {
        title: 'WV',
        value: 'west-virginia',
    },
    {
        title: 'WI',
        value: 'wisconsin',
    },
    {
        title: 'WY',
        value: 'wyoming',
    },
]

export function getStateAbbrev(state: string) {
    return states.find((x) => x.value === state)?.title ?? state.toUpperCase()
}

export default states
