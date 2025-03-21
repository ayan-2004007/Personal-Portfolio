import React, { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import arrow from "../Assets/direction.png"
import profile from "../Assets/profile.jpg"
import grain from "../Assets/grain.gif"

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
    const zoomRef = useRef(null)
    const containerRef = useRef(null)
    const headRef01 = useRef(null)
    const headRef02 = useRef(null)
    const hrRef = useRef(null)
    const textRef = useRef(null)
    const profileRef = useRef(null)
    const grainRef = useRef(null)

    useGSAP(() => {
        if (zoomRef.current) {
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
        if (grainRef.current) {
            gsap.fromTo(grainRef.current,
                { opacity: 0,transformOrigin: "center"  },
                {opacity:0.08,duration:0.5,
                    scrollTrigger:{
                        trigger:grainRef.current,
                        start:"top 100",
                        toggleActions:"play rnone none reverse",
                    }
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
                { scale: 1 },
                {
                    scale: 1.3,
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


            {/* Grain Background  */}
            <div className=" w-full bg-black -mt-80 relative z-10">
                <div
                    ref={grainRef}
                    className="grainy absolute inset-0 z-50 pointer-events-none"
                    style={{
                        backgroundImage: `url(${grain})`,
                        backgroundSize: "200px",
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center",
                    }}
                />
                <div className="flex flex-col gap-[156px] lg:gap-[186px]">
                    {/* Intro Name Section */}
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

                    {/* Brief introduction section with arrow image*/}
                    <div className="w-full flex justify-between px-6 mx-auto md:max-w-[526px] lg:max-w-[888px] 2xl:max-w-[1306px]">
                        <p className="font-sohne text-[12px] text-white uppercase md:text-sm xl:text-base xl:font-extrabold">( brief introduction )</p>
                        <img src={arrow} alt="" className="h-[30px] w-[30px] invert md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                    </div>



                    {/* Profile section with profile Image */}
                    <div className="flex flex-col text-[#FFF4F4] gap-6">
                        <p className="font-sohne-light uppercase text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        <div className="w-full max-h-[426px] object-cover md:max-w-[556px] lg:max-w-[874px] lg:max-h-[556px] xl:max-w-[1024px] xl:max-h-[624px] 2xl:max-w-[1196px] 2xl:max-h-[724px] overflow-hidden md:overflow-x-clip">
                            <img ref={profileRef} src={profile} alt="" className="relative w-full max-h-[426px] object-cover md:max-w-[556px] lg:max-w-[874px] lg:max-h-[556px] xl:max-w-[1024px] xl:max-h-[624px] 2xl:max-w-[1196px] 2xl:max-h-[724px]" />
                        </div>
                        <p className="font-sohne text-[12px] uppercase leading-[17px] text-justify max-w-[298px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  </p>
                    </div>
                </div>
            </div>


            {/* </div > */}
        </>
    )
}

export default Intro