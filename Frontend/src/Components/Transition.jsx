import React, { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const SectionTransition = () => {
    const transitionRef = useRef(null)
    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const fourthRef = useRef(null)
    const fifthRef = useRef(null)
    const sixthRef = useRef(null)
    const seventhRef = useRef(null)
    const eighthRef = useRef(null)
    const ninthRef = useRef(null)
    const tenthRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: transitionRef.current,
                start: "top 90%",
                end: "top top",
                scrub: 1,
            }
        })

        tl.fromTo(firstRef.current, { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, duration: 1.5, ease: "power2.out" }, 0)
            .fromTo(secondRef.current, { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, duration: 1.5, ease: "power2.out" }, 0.2)
            .fromTo(thirdRef.current, { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, duration: 1.5, ease: "power2.out" }, 0.4)
            .fromTo(fourthRef.current, { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, duration: 1.5, ease: "power2.out" }, 0.6)
            .fromTo(fifthRef.current, { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, duration: 1.5, ease: "power2.out" }, 0.8)
            .fromTo(sixthRef.current, { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, duration: 1.5, ease: "power2.out" }, 1)
            .fromTo(seventhRef.current, { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, duration: 1.5, ease: "power2.out" }, 1.2)
            .fromTo(eighthRef.current, { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, duration: 1.5, ease: "power2.out" }, 1.4)
            .fromTo(ninthRef.current, { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, duration: 1.5, ease: "power2.out" }, 1.6)
            .fromTo(tenthRef.current, { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, duration: 1.5, ease: "power2.out" }, 1.8)
    })

    return (
        <>
            <div ref={transitionRef} className="relative z-10 w-full bg-black flex flex-col">
                <div ref={firstRef} className="w-full h-[5vh] bg-white origin-top scale-y-0"></div>
                <div ref={secondRef} className="w-full h-[5vh] bg-white origin-top scale-y-0"></div>
                <div ref={thirdRef} className="w-full h-[5vh] bg-white origin-top scale-y-0"></div>
                <div ref={fourthRef} className="w-full h-[5vh] bg-white origin-top scale-y-0"></div>
                <div ref={fifthRef} className="w-full h-[5vh] bg-white origin-top scale-y-0"></div>
                <div ref={sixthRef} className="w-full h-[5vh] bg-white origin-top scale-y-0"></div>
                <div ref={seventhRef} className="w-full h-[5vh] bg-white origin-top scale-y-0"></div>
                <div ref={eighthRef} className="w-full h-[5vh] bg-white origin-top scale-y-0"></div>
                <div ref={ninthRef} className="w-full h-[5vh] bg-white origin-top scale-y-0"></div>
                <div ref={tenthRef} className="w-full h-[5vh] bg-white origin-top scale-y-0"></div>
            </div>
        </>

    );
};

export default SectionTransition;
