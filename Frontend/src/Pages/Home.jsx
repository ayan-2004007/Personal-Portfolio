import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from '../Components/Navbar'
import HomeHero from "../Components/HomeHero"
import Works from "../Components/Works";
import ScaleH from "../Components/ScaleH";
import Next from "../Components/Next";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    useEffect(() => {
        const lenis = new Lenis({
            duration: isMobile ? 1.5 : 1,
            easing: isMobile
                ? (t) => t * t * (3 - 2 * t) 
                : (t) =>t * (2 - t),
            smoothTouch: isMobile ? true : false,
            inertia: isMobile ? 1 : 0.95,
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
                <ScaleH/>
            </div>
            <Next/>
            </div>

        </body>
    )
}
export default Home