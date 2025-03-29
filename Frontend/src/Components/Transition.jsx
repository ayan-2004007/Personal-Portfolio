import React, {useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const SectionTransition = () => {
    const transitionRef = useRef(null)
    const divRefs = useRef([])
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        const timer1 = setTimeout(() => {
            ScrollTrigger.refresh()
        }, 100)
        
        const timer2 = setTimeout(() => {
            setIsReady(true)
            ScrollTrigger.refresh()
        }, 300)
        
        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
        }
    }, [])

    useGSAP(() => {
        if (!isReady) return
        transitionRef.current.offsetHeight
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: transitionRef.current,
                start: "top 70%",
                end: "top 20%",
                scrub: true,
                invalidateOnRefresh: true,
                toggleActions: "play none none none" 
            }
        })
        
        divRefs.current.reverse().forEach((ref, index) => {
            if (ref) {
                tl.fromTo(
                    ref, 
                    { 
                        scaleY: 0, 
                        transformOrigin: "bottom",
                        opacity: 0 
                    }, 
                    { 
                        scaleY: 1, 
                        opacity: 1,
                        duration: 2, 
                        ease: "power2.out" 
                    }, 
                    index * 0.1
                )
            }
        })
        ScrollTrigger.refresh()
        
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [isReady])
    return (
        <div ref={transitionRef} className="relative z-10 w-full bg-black flex flex-col">
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    ref={el => divRefs.current[i] = el}
                    className="w-full h-[2vh] xl:h-[3vh] bg-white origin-top scale-y-0 z-30"
                />
            ))}
        </div>
    )
}

export default SectionTransition