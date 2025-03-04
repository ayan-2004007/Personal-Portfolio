import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from '../Components/Navbar'
import HomeHero from "../Components/HomeHero"
import Works from "../Components/Works";

gsap.registerPlugin(ScrollTrigger);
const Home=()=>{
    useEffect(()=>{
        const lenis=new Lenis({
            duration: 1,
            easing: (t) =>  t * (2 - t),
            smoothTouch: false,
            inertia: 0.95,
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
    },[])
    return(
            <body>
                <HomeHero/>
                <Works/>

            </body>
    )
}
export default Home