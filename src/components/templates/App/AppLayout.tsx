import React from 'react'
import {
    Avatar,
    Button,
    ScrollShadow,
    Spacer,
    useDisclosure,
} from '@nextui-org/react'
import { Icon } from '@iconify/react'

import { sectionItems } from './SidebarItems'
import { Sidebar } from './Sidebar'
import { SidebarDrawer } from './SidebarDrawer'
import { useRouterState } from '@tanstack/react-router'

export function AppLayout({
    children,
    header,
    title = 'Create a Postcard',
}: {
    children?: React.ReactNode
    header?: React.ReactNode
    title?: string
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const state = useRouterState()
    const currentRoutes = state.location.pathname.split('/')

    const content = (
        <div className="relative flex h-full flex-1 flex-col bg-gradient-to-b from-default-100 via-danger-100 to-secondary-100 p-6">
            <div className="flex items-center gap-2 px-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-foreground/20">
                    <Icon icon="arcticons:sendit" />
                </div>
                <span className="text-small font-medium text-foreground">
                    SendScripture
                </span>
            </div>

            <Spacer y={8} />

            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-2">
                    <Avatar
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a04258114e29028708c"
                    />
                    <div className="flex flex-col">
                        <p className="text-small text-foreground">Jane Doe</p>
                        <p className="text-tiny text-default-500">
                            Product Designer
                        </p>
                    </div>
                </div>
            </div>

            <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                <Sidebar
                    defaultSelectedKey="home"
                    iconClassName="text-default-600 group-data-[selected=true]:text-foreground"
                    itemClasses={{
                        base: 'data-[selected=true]:bg-default-400/20 data-[hover=true]:bg-default-400/10',
                        title: 'text-default-600 group-data-[selected=true]:text-foreground',
                    }}
                    items={sectionItems}
                    sectionClasses={{
                        heading: 'text-default-600 font-medium',
                    }}
                    selectedKeys={[currentRoutes[currentRoutes.length - 1]]}
                    variant="flat"
                />
            </ScrollShadow>

            <Spacer y={8} />

            <div className="mt-auto flex flex-col">
                <Button
                    fullWidth
                    className="justify-start text-default-600 data-[hover=true]:text-black"
                    startContent={
                        <Icon
                            className="text-default-600"
                            icon="solar:info-circle-line-duotone"
                            width={24}
                        />
                    }
                    variant="light"
                >
                    Help & Information
                </Button>
                <Button
                    className="justify-start text-default-600 data-[hover=true]:text-black"
                    startContent={
                        <Icon
                            className="rotate-180 text-default-600"
                            icon="solar:minus-circle-line-duotone"
                            width={24}
                        />
                    }
                    variant="light"
                >
                    Log Out
                </Button>
            </div>
        </div>
    )

    return (
        <div className="flex h-dvh w-full">
            <SidebarDrawer
                id="app-sidebar"
                className="flex-none"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                {content}
            </SidebarDrawer>

            <div
                id="app-content"
                className="sm:absolute sm:left-72 sm:right-0 overflow-y-scroll flex w-full flex-col gap-y-4 p-4 sm:max-w-[calc(100%_-_288px)]"
            >
                <header className="flex h-16 min-h-16 items-center justify-between gap-2 overflow-x-scroll rounded-medium border-divider px-4 py-2">
                    <div className="flex max-w-full items-center gap-2">
                        <Button
                            isIconOnly
                            className="flex sm:hidden"
                            size="sm"
                            variant="light"
                            onPress={onOpen}
                        >
                            <Icon
                                className="text-default-500"
                                height={24}
                                icon="solar:hamburger-menu-outline"
                                width={24}
                            />
                        </Button>
                        <h2 className="truncate text-medium font-medium text-default-700 pl-2">
                            {title}
                        </h2>
                    </div>
                    {header}
                </header>

                <main className="flex h-full">
                    <div className="flex h-full w-full flex-col gap-4 rounded-medium border-divider p-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
