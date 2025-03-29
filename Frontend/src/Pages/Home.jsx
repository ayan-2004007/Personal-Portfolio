import { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Preloader from "../Components/Preloader"
import HomeHero from "../Components/HomeHero"
import Works from "../Components/Works"
import Intro from "../Components/Intro"
import PostIntro from "../Components/PostIntro"
import Transition from "../Components/Transition"
import Footer from "../Components/Footer"
import NewNavbar from "../Components/NewNavbar"
// import MarqueeSection from "../Components/MarqueeSection"

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const lenis = new Lenis({
            duration: isMobile ? 2 : 1,
            easing: isMobile
                ? (t) => t * t * t * (t * (t * 6 - 15) + 10)
                : (t) => t * (2 - t),
            smoothTouch: isMobile ? true : false,
            inertia: isMobile ? 0.55 : 0.95,
            syncTouch: true,
        })

        function raf(time) {
            lenis.raf(time);
            ScrollTrigger.update();
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, [])
    return (
        <>
            {loading ? (
                <Preloader onComplete={() => setLoading(false)} />
            ) : (
                <body className="overflow-x-hidden flex flex-col gap-[156px]">
                    <div className="flex flex-col gap-[48px] xl:gap-[100px] 2xl:gap-[156px]">
                        <div className="felx flecol">
                            <HomeHero />
                        </div>
                        <Works />
                        <div>
                            <Intro />
                            <Transition />
                            <Footer />
                        </div>
                    </div>
                </body>
            )}
        </>

    )
}
export default Home