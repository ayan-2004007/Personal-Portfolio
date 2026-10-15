"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import arrow from "@/assets/direction.png"
import { expertise } from "@/data/expertise"

gsap.registerPlugin(ScrollTrigger)

const Expertise = () => {
    const containerRef = useRef(null)
    const hrRefs = useRef([])
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        const timer = setTimeout(() => {
            setIsReady(true)
            ScrollTrigger.refresh()
        }, 300)
        return () => clearTimeout(timer)
    }, [])

    useGSAP(() => {
        if (!isReady) return
        containerRef.current.offsetHeight
        hrRefs.current.forEach((hrRef) => {
            if (hrRef) {
                gsap.fromTo(hrRef,
                    { width: "0%" },
                    {
                        width: "100%",
                        duration: 2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: hrRef,
                            start: "top 80%",
                            end: "top 20%",
                            scrub: 1,
                            invalidateOnRefresh: true,
                            toggleActions: "play none none none"
                        }
                    }
                )
            }
        })
        const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 100)
        return () => clearTimeout(refreshTimer)
    }, { dependencies: [isReady], scope: containerRef })

    return (
        <div ref={containerRef} className="w-full flex flex-col gap-16 pb-10">
            {expertise.map((item, index) => (
                <div key={item.number} className="flex flex-col gap-3 xl:gap-12">
                    <hr
                        ref={el => { hrRefs.current[index] = el }}
                        className="text-[#737373] h-px border-none bg-[#737373] w-0"
                    />
                    <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between">
                        <div className="flex items-baseline gap-6 lg:gap-10 xl:w-full xl:justify-around">
                            <p className="font-sohne text-[#434343] text-6xl font-extrabold md:text-7xl lg:text-8xl xl:text-9xl">{item.number}</p>
                            <h3 className="font-sohne font-bold text-white text-xl uppercase lg:text-2xl">( {item.title} )</h3>
                        </div>
                        <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                            <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 max-w-[356px] md:text-sm md:leading-5 md:max-w-[576px] xl:font-semibold">
                                {item.description}
                            </p>
                            <img src={arrow.src} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Expertise
