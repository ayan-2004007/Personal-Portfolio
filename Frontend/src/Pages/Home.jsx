import { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Preloader from "../Components/Preloader"
import HomeHero from "../Components/HomeHero"
import Works from "../Components/Works"
import Intro from "../Components/Intro"
import Transition from "../Components/Transition"
import Footer from "../Components/Footer"

gsap.registerPlugin(ScrollTrigger)

const Home = ({ setTransitionPath }) => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches

    // Load preloader only once per session
    const [loading, setLoading] = useState(() => {
        return !sessionStorage.getItem("hasSeenPreloader")
    })

    useEffect(() => {
        const lenis = new Lenis({
            duration: isMobile ? 2 : 1,
            easing: isMobile
                ? (t) => t * t * t * (t * (t * 6 - 15) + 10)
                : (t) => t * (2 - t),
            smoothTouch: isMobile,
            inertia: isMobile ? 0.55 : 0.95,
            syncTouch: true,
        })

        function raf(time) {
            lenis.raf(time)
            ScrollTrigger.update()
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <>
            {loading ? (
                <Preloader
                    onComplete={() => {
                        sessionStorage.setItem("hasSeenPreloader", "true")
                        setLoading(false)
                    }}
                />
            ) : (
                <div className="overflow-x-hidden flex flex-col gap-[156px]">
                    <div className="flex flex-col gap-[48px] xl:gap-[100px] 2xl:gap-[156px]">
                        <div className="felx flecol">
                            <HomeHero setTransitionPath={setTransitionPath} />
                        </div>
                        <Works />
                        <div>
                            <Intro />
                            <Transition />
                            <Footer setTransitionPath={setTransitionPath} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
