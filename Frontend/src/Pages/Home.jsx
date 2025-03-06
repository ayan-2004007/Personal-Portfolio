import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Navbar from '../Components/Navbar'
import HomeHero from "../Components/HomeHero"
import Works from "../Components/Works"
import Intro from "../Components/Intro"
import PostIntro from "../Components/PostIntro"

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    useEffect(() => {
        const lenis = new Lenis({
            duration: isMobile ?2 : 1,
            easing: isMobile
                ? (t) => t * t * t * (t * (t * 6 - 15) + 10) 
                : (t) =>t * (2 - t),
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
        <body className="overflow-x-hidden flex flex-col gap-[156px]">
            <div className="flex flex-col lg:gap-[48px] xl:gap-[100px] 2xl:gap-[156px]">
            <HomeHero />
            <Works />
            <div>
                <Intro/>
                <PostIntro/>
            </div>
            </div>

        </body>
    )
}
export default Home