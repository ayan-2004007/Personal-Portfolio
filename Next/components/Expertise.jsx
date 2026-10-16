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
    const headRef = useRef(null)
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
        if (headRef.current) {
            gsap.from(headRef.current, {
                duration: 2,
                y: "100%",
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headRef.current,
                    start: "top 80%",
                    toggleActions: "play none play reverse",
                },
            })
        }
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
        <section ref={containerRef} id="skills" aria-label="Skills" className="w-full flex flex-col gap-16 pb-10">
            <div className="flex items-baseline px-3 xl:px-5">
                <div className="flex items-start">
                    <div className="overflow-hidden">
                        <h2 ref={headRef} className="font-sohne text-white text-[32px] min-[360px]:text-[40px] sm:text-[64px] md:text-[84px] lg:text-[112px] xl:text-[144px] 2xl:text-[172px] font-bold uppercase tracking-tight">Skills</h2>
                    </div>
                    <p className="font-sohne text-[#e6e6e6] text-base xl:text-2xl uppercase font-bold">(05)</p>
                </div>
                <img src={arrow.src} alt="" className="invert h-[28px] w-[28px] sm:h-[40px] sm:w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] xl:w-[100px] xl:h-[100px]" />
            </div>
            {expertise.map((item, index) => (
                <div key={item.number} className="flex flex-col gap-3 xl:gap-12">
                    <hr
                        ref={el => { hrRefs.current[index] = el }}
                        className="text-[#737373] h-px border-none bg-[#737373] w-0"
                    />
                    <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between">
                        <div className="flex items-baseline gap-4 sm:gap-6 lg:gap-10 xl:w-full xl:justify-around">
                            <p className="font-sohne text-[#434343] text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{item.number}</p>
                            <h3 className="font-sohne font-bold text-white text-[15px] whitespace-nowrap uppercase sm:text-xl lg:text-2xl">( {item.title} )</h3>
                        </div>
                        <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                            <div className="flex flex-col gap-4 max-w-[356px] md:max-w-[576px]">
                                <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 md:text-sm md:leading-5 xl:font-semibold">
                                    {item.description}
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                        <li key={skill} className="font-sohne font-bold uppercase text-[#e6e6e6] text-[10px] px-2 py-1 border border-[#737373] rounded-[30px] md:text-[11px] xl:text-xs xl:px-3">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <img src={arrow.src} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Expertise
