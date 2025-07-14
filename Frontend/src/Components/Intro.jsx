import React, { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import arrow from "../Assets/direction.png"
import profile from "../Assets/profile.jpg"
import grain from "../Assets/grain.gif"

import Expertise from "./Expertise"
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
    const paraRef=useRef(null)

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
                duration: 1.6,
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
                duration: 1.6,
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
            const isMobile = window.innerWidth <= 768
            const opacity = isMobile ? 0.17 : 0.08
            const endTar = isMobile ? 30 : 40
            gsap.fromTo(grainRef.current,
                { opacity: 0, transformOrigin: "center" },
                {
                    opacity: opacity,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: grainRef.current,
                        start: "top 100",
                        end: `bottom ${endTar}%`,
                        toggleActions: "play none none reverse",
                        onLeave: () => gsap.to(grainRef.current, { opacity: 0, duration: 0.5 }),
                        onEnterBack: () => gsap.to(grainRef.current, { opacity: opacity, duration: 0.5 })
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
        if(paraRef.current){
            gsap.fromTo(paraRef.current,{opacity:0.3},
                {opacity:1,duration:1.5, 
                    scrollTrigger:{
                        trigger:paraRef.current,
                        start:"top 80%",
                        end:"top 50%",
                        toggleActions:"play none none reverse"
                    }
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

            <div className=" w-full bg-black -mt-80 relative z-10 overflow-hidden">
                {/* Grain Background  */}
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

                    {/* Intro main content  */}
                    <div className="flex flex-col gap-20 xl:gap-8">
                        {/* Brief introduction section with arrow image*/}
                        <div className="w-full flex justify-between px-6 mx-auto md:max-w-[526px] lg:max-w-[888px] 2xl:max-w-[1306px]">
                            <p className="font-sohne text-[12px] text-white uppercase md:text-sm xl:text-base xl:font-extrabold">( brief introduction )</p>
                            <img src={arrow} alt="" className="h-[30px] w-[30px] invert md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                        </div>



                        {/* Profile section with profile Image */}
                        <div className="relative flex flex-col text-[#FFF4F4] gap-6">
                            <p ref={paraRef} className="font-sohne-light uppercase text-2xl z-10 relative max-w-[490px] md:left-[20%] md:top-10 md:text-3xl md:max-w-[576px] lg:text-4xl lg:left-[30%] lg:max-w-[650px] xl:left-[40%] xl:text-[44px] xl:max-w-[790px] xl:top-16 2xl:text-5xl 2xl:leading-[53px] 2xl:left-[54%] 2xl:top-20">
                                Aspiring full stack developer building real-world projects while constantly learning and evolving in tech.
                            </p>

                            <div className="relative w-full max-h-[426px] object-cover sm:max-h-[524px] md:max-w-[676px] lg:max-w-[974px] lg:max-h-[656px] xl:max-w-[1196px] xl:max-h-[774px] 2xl:max-w-[1276px] overflow-hidden md:overflow-x-clip lg:left-10 xl:left-6">
                                <img ref={profileRef} src={profile} alt="" className="relative w-full opacity-90 max-h-[426px] object-cover sm:max-h-[524px] md:max-w-[676px] lg:max-w-[974px] lg:max-h-[656px] xl:max-w-[1196px] xl:max-h-[774px] 2xl:max-w-[1276px] lg:left-10 xl:left-6" />
                            </div>

                            <p className="font-sohne font-extrabold text-[11px] uppercase leading-[17px] text-justify max-w-[298px] relative z-10 left-10 bottom-28 md:text-[12px] lg:text-sm lg:max-w-[424px] lg:leading-[21px] xl:left-[218px] 2xl:text-base 2xl:leading-[25px] 2xl:bottom-36">I'm Ayan Chakraborty, a 21-year-old Computer Science graduate, focused on full stack development with strong expertise in the MERN stack, UI/UX, and practical project building. I've completed multiple freelance, college and personal projects—including live applications. As a quick learner with deep CS knowledge, I adapt to new tech easily. I'm currently learning AI/ML to build intelligent, scalable, future-ready web solutions.</p>
                        </div>
                    </div>

                    {/* Expertise section  */}
                    <div>
                        <Expertise/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Intro