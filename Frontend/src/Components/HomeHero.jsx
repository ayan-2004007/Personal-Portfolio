import React, { useState, useRef } from "react"
import Preloader from "../Components/Preloader"
import NewNavbar from "../Components/NewNavbar"
import Cursor from "../Components/Cursor"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import bg from "../Assets/holomorph.mp4"

const HomeHero = ({setTransitionPath}) => {
    const textRef = useRef(null)
    const headRef = useRef(null)
    const videoRef = useRef(null)
    const contRef = useRef(null)
    const subHeadRef = useRef(null)
    const roleRef = useRef(null)

    useGSAP(() => {
            gsap.from(textRef.current, {
                duration: 2,
                y: "110%",
                ease: "expo.inOut",
                delay: 2
            })

            gsap.fromTo(
                contRef.current,
                { scaleX: 0, transformOrigin: "center" },
                { scaleX: 1, duration: 2.5, ease: "expo.inOut" }
            )

            gsap.fromTo(
                videoRef.current,
                { opacity: 0, transformOrigin: "center" },
                { opacity: 1, duration: 2.5, ease: "expo.inOut", delay: 1.5 }
            )

            gsap.from(headRef.current, {
                duration: 2,
                y: "100%",
                ease: "expo.inOut",
                delay: 2
            })

            gsap.fromTo(
                subHeadRef.current,
                { opacity: 0, },
                { opacity: 1, duration: 2.5, ease: "expo.inOut", delay: 1.5 }
            )
            gsap.fromTo(
                roleRef.current,
                { opacity: 0, },
                { opacity: 1, duration: 2.5, ease: "expo.inOut", delay: 1.5 }
            )
    },)

    return (
        <>
                <div className="flex flex-col w-full h-screen gap-10 xl:gap-0 sm:justify-between lg:pb-4">
                    <Cursor />
                    <NewNavbar setTransitionPath={setTransitionPath}/>
                    <div className="flex w-full items-start gap-1 lg:gap-2 justify-center px-4">
                        <div className="overflow-hidden">
                            <p ref={textRef} className="my-2 font-sohne text-[#121212] text-[12px] leading-[17px] font-semibold lg:text-sm uppercase lg:font-bold max-w-[586px] lg:leading-[19px] 2xl:leading-[22px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            </p>
                        </div>
                        <p className="font-sohne text-[#121212] text-2xl uppercase font-bold max-w-[586px] leading-[25px]">(01)</p>
                    </div>
                    <div className="px-2 xl:px-4 w-full lg:h-[530px] 2xl:h-[580px]">
                        <div ref={contRef} className="relative w-full flex rounded-[50px] bg-black">
                            <video ref={videoRef} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-[508px] object-cover object-center rounded-[50px] lg:h-[530px] 2xl:h-[580px]">
                                <source src={bg} type="video/mp4" />
                            </video>
                            <div className="relative z-10 w-full">
                                <div className="flex flex-col gap-10 h-[508px] justify-between pt-9 pb-2 lg:h-[530px] 2xl:h-[580px]">
                                    <div className="flex flex-col items-start px-6 gap-6 lg:flex-row justify-end">
                                        <div ref={roleRef} className="flex gap-1 text-white text-base">
                                            <div className="font-sohne px-2 py-1 border-2 border-white rounded-[30px] font-bold lg:text-lg xl:text-xl">Full Stack Developer</div>
                                            <div className="font-sohne px-2 py-1 border-2 border-white rounded-[30px] font-bold lg:text-lg xl:text-xl">Ui/UX</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-white w-full gap-8 xl:gap-0">
                                        <div className="flex flex-col xl:pl-4">
                                            <div ref={subHeadRef} className="flex items-baseline w-full">
                                                <p className="font-sohne text-lg font-bold lg:font-medium xl:text-xl 2xl:text-2xl ml-1 xl:max-w-[612px] whitespace-nowrap xl:whitespace-normal">
                                                    Building Scalable Web Solutions
                                                </p>
                                                <div className="h-[2px] bg-white w-full"></div>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h1 ref={headRef} className="dev font-sohne-light text-white text-[74px] tarcking-tight xl:tracking-tighter text-balance sm:text-[120px] md:text-[144px] lg:text-[176px] xl:text-[208px] 2xl:text-[276px] 2xl:leading-[270px] overflow-hidden">
                                                    Developer
                                                </h1>
                                            </div>
                                        </div>
                                        <p className="font-sohne text-[11px] font-bold text-center xl:text-right xl:text-sm xl:mr-5">©2025 | AYAN CHAKRABORTY</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default HomeHero
