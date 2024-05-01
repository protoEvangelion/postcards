import heroImage from '@/assets/landing/mock-postcard.png'
import { Button } from 'react-daisyui'
import Card3d from 'card3d'
import { useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'

export const Hero = () => {
    const heroImageRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (heroImageRef.current) {
            new Card3d(heroImageRef.current, {
                perspective: 1000,
                fullPageListening: true,
            })
        }
    }, [heroImageRef.current])

    return (
        <section className="py-8 lg:py-20" id="home">
            <div className="grid gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-black tracking-tighter lg:text-6xl lg:leading-none">
                        Send encouraging
                        <span className="text-primary"> scriptures </span>
                        to loved ones & friends.
                    </h1>
                    <p className=" mt-8 text-lg">
                        You can select from a pre vetted topical list of
                        scriptures that will be sent to your recipient on a
                        monthly basis. Simply select your desired category, and
                        we will select a relevant scripture, create the
                        postcard, and mail it!
                    </p>
                    <div className="mt-16 inline-flex gap-3">
                        <Link to="/create">
                            <Button color="primary">Get Started</Button>
                        </Link>
                        <Button color="ghost">Learn More</Button>
                    </div>
                </div>

                <div>
                    <div
                        className="rounded-2xl bg-gradient-to-r from-indigo-200 via-red-200 to-purple-300 p-3"
                        ref={heroImageRef}
                    >
                        <img
                            alt="SaaS"
                            id="hero-image"
                            className="rounded-lg"
                            width="100%"
                            src={heroImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
