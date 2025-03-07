import React, { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import arrow from "../Assets/direction.png"
import profile from "../Assets/profile.jpg"

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
    const zoomRef = useRef(null)
    const containerRef = useRef(null)
    const headRef01 = useRef(null)
    const headRef02 = useRef(null)
    const hrRef = useRef(null)
    const textRef = useRef(null)
    const profileRef = useRef(null)

    useGSAP(() => {
        if(zoomRef.current){
            gsap.fromTo(
                zoomRef.current,
                { scale: 1 },
                {
                    scale: 25,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=100%",
                        scrub: 1,
                        pin: true
                    }
                }
            )
        }
        if (headRef01.current) {
            gsap.from(headRef01.current, {
                duration: 2.5,
                y: "100%",
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headRef01.current,
                    start: "top 70%",
                    toggleActions: "play none play reverse",

                },
            })
        }
        if (headRef02.current) {
            gsap.from(headRef02.current, {
                duration: 2.5,
                y: "100%",
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headRef02.current,
                    start: "top 70%",
                    toggleActions: "play none play reverse",

                },
            })
        }
        if (hrRef.current) {
            gsap.fromTo(
                hrRef.current,
                { width: "0%" },
                {
                    width: "100%",
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: hrRef.current,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse",
                        scrub: 1,
                    },
                }
            )
        }
        if (textRef.current) {
            gsap.from(textRef.current, {
                duration: 2.5,
                y: "100%",
                ease: "power4.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none play reverse",

                },
            })
        }
        if (profileRef.current) {
            gsap.fromTo(
                profileRef.current,
                { scale:1 },
                {
                    scale:1.3,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: profileRef.current,
                        start: "top 70%",
                        scrub: 1,
                    },
                }
            )
        }
    }, [])

    return (
        <>
            <div ref={containerRef} className="h-screen w-full flex items-center justify-center overflow-hidden">
                <h1 ref={zoomRef} className="font-sohne text-[138px] lg:text-[176px] xl:text-[218px] 2xl:text-[276px] text-black font-extrabold">
                    HEY
                </h1>
            </div>


            <div className="w-full bg-black -mt-80 relative z-10">
                <div className="flex flex-col gap-[156px] lg:gap-[186px]">
                    <div className="flex flex-col items-start gap-2">
                        <div className="w-full flex flex-col items-start -space-y-5 lg:flex-row lg:-space-y-0 lg:items-center lg:justify-center">
                            <div className="overflow-hidden">
                                <h1 ref={headRef01} className="font-sohne text-[68px] text-white font-medium uppercase tracking-tight px-2 sm:text-[104px] md:font-bold lg:px-6 lg:tracking-normal xl:text-[144px] 2xl:text-[172px]">Myself</h1>
                            </div>
                            <div className="flex items-start">
                                <div className="overflow-hidden">
                                    <h1 ref={headRef02} className="font-sohne text-[72px] text-white font-medium uppercase tracking-tight px-2 sm:text-[104px] md:font-bold lg:px-6 lg:tracking-normal xl:text-[144px] 2xl:text-[172px]">ayan</h1>
                                </div>
                                <p className="font-sohne text-[#e6e6e6] text-lg xl:text-2xl uppercase font-bold max-w-[586px] leading-[25px]">
                                    (03)
                                </p>
                            </div>
                        </div>
                        <hr ref={hrRef} className="text-[#737373] w-full" />
                    </div>
                    <div className="flex flex-col gap-7 items-center px-5 lg:items-start lg:px-16 xl:flex-row xl:mx-auto xl:px-0">
                        <div className="flex flex-row items-baseline gap-7">
                            <p className="font-sohne uppercase text-[#e6e6e6] text-base font-semibold md:text-lg xl:text-xl">( brief introduction )</p>
                            <img src={arrow} alt="" className=" h-[30px] w-[30px] invert xl:hidden" />
                        </div>
                        <div className="flex xl:items-baseline xl:gap-20 2xl:gap-28">
                            <div className="overflow-hidden">
                                <p ref={textRef} className="font-sohne text-[#aaaaaa] text-[12px] uppercase leading-[17px] font-medium max-w-[452px] lg:max-w-[507px] lg:text-sm lg:leading-[21px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                            <img src={arrow} alt="" className="hidden h-[60px] w-[60px] invert xl:inline-block 2xl:w-[80px] xl:h-[80px]" />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-full max-h-[426px] object-cover md:max-w-[556px] lg:max-w-[874px] lg:max-h-[556px] xl:max-w-[1024px] xl:max-h-[624px] 2xl:max-w-[1196px] 2xl:max-h-[724px] overflow-hidden md:overflow-x-clip">
                            <img ref={profileRef} src={profile} alt="" className="relative w-full max-h-[426px] object-cover md:max-w-[556px] lg:max-w-[874px] lg:max-h-[556px] xl:max-w-[1024px] xl:max-h-[624px] 2xl:max-w-[1196px] 2xl:max-h-[724px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro