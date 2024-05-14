import { Button, Drawer, Menu, Navbar } from 'react-daisyui'
import { Menu as MenuIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Link } from '@tanstack/react-router'

export const Topbar = () => {
    const [drawerOpened, setDrawerOpened] = useState(false)
    const [atTop, setAtTop] = useState(true)

    const { user } = useAuthenticator((context) => [context.user])

    useEffect(() => {
        const onWindowScroll = () => {
            setAtTop(window.pageYOffset < 30)
        }
        window.addEventListener('scroll', onWindowScroll)
        onWindowScroll()
    }, [])

    return (
        <div
            id="navbar-wrapper"
            className={`sticky top-0 z-10 border-b bg-base-100 lg:bg-opacity-95 lg:backdrop-blur-sm ${
                atTop ? 'border-transparent' : 'border-base-content/10'
            }`}
        >
            <div className="container">
                <Navbar className="px-0">
                    <Navbar.Start className="gap-2">
                        <div className="flex-none lg:hidden">
                            <Drawer
                                open={drawerOpened}
                                onClickOverlay={() =>
                                    setDrawerOpened(!drawerOpened)
                                }
                                side={
                                    <Menu className="min-h-full w-80 gap-2 bg-base-100 p-4 text-base-content">
                                        <Menu.Item className="font-medium">
                                            <a
                                                href="index.html"
                                                className="text-xl font-bold"
                                            >
                                                SendScripture
                                            </a>
                                        </Menu.Item>

                                        <Menu.Item className="font-medium">
                                            <Link to="/">Home</Link>
                                        </Menu.Item>
                                        <Menu.Item className="font-medium">
                                            <a href="#features">Features</a>
                                        </Menu.Item>
                                        <Menu.Item className="font-medium">
                                            <a href="#integrations">
                                                Integrations
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item className="font-medium">
                                            <a href="#pricing">Pricing</a>
                                        </Menu.Item>
                                        <Menu.Item className="font-medium">
                                            <a href="#faq">FAQ</a>
                                        </Menu.Item>
                                    </Menu>
                                }
                            >
                                <Button
                                    shape="square"
                                    color="ghost"
                                    onClick={() => setDrawerOpened(true)}
                                >
                                    <MenuIcon className="inline-block text-xl" />
                                </Button>
                            </Drawer>
                        </div>

                        <a
                            href="#"
                            className="text-xl font-bold tracking-tighter"
                        >
                            SendScripture
                        </a>
                    </Navbar.Start>

                    <Navbar.Center className="hidden lg:flex">
                        <Menu horizontal size="sm" className="gap-2 px-1">
                            <Menu.Item className="font-medium">
                                <a href="/#home">Home</a>
                            </Menu.Item>
                            <Menu.Item className="font-medium">
                                <a href="#features">Features</a>
                            </Menu.Item>
                            <Menu.Item className="font-medium">
                                <a href="#integrations">Integrations</a>
                            </Menu.Item>
                            <Menu.Item className="font-medium">
                                <a href="#pricing">Pricing</a>
                            </Menu.Item>
                            <Menu.Item className="font-medium">
                                <a href="#faq">FAQ</a>
                            </Menu.Item>
                        </Menu>
                    </Navbar.Center>

                    <Navbar.End className="gap-3">
                        {user ? (
                            <Link to="/app/create">
                                <Button size="sm">Dashboard</Button>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <Button size="sm">Get Started</Button>
                            </Link>
                        )}
                    </Navbar.End>
                </Navbar>
            </div>
        </div>
    )
}
