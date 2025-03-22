import React, { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const SectionTransition = () => {
    const transitionRef = useRef(null)
    const divRefs = useRef([])

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: transitionRef.current,
                start: "top 50%",
                scrub: 1,
                toggleActions: "play none play reverse",
            }
        })
        divRefs.current.reverse().forEach((ref, index) => {
            tl.fromTo(
                ref, 
                { scaleY: 0, transformOrigin: "bottom" }, 
                { scaleY: 1, duration: 1.5, ease: "power2.out" }, index * 0.1
            )
        })
    })

    return (
        <div ref={transitionRef} className="relative z-10 w-full bg-black flex flex-col">
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (divRefs.current[i] = el)}
                    className="w-full h-[2vh] xl:h-[3vh] bg-white origin-top scale-y-0 z-30"
                />
            ))}
        </div>
    )
}

export default SectionTransition;
