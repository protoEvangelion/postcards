type SidebarItem = {
    key: string
    title: string
    icon?: string
    href?: string
    startContent?: React.ReactNode
    endContent?: React.ReactNode
    items?: SidebarItem[]
    className?: string
}

/**
 * Please check the https://nextui.org/docs/guide/routing to have a seamless router integration
 */

export const sectionItems: SidebarItem[] = [
    {
        key: 'home',
        href: '/app/home',
        icon: 'solar:home-2-linear',
        title: 'Home',
    },
    {
        key: 'create',
        href: '/app/create',
        icon: 'system-uicons:create',
        title: 'Create',
    },
    {
        key: 'payments',
        href: '/app/payments',
        icon: 'fluent:payment-16-regular',
        title: 'Payments',
    },
]
