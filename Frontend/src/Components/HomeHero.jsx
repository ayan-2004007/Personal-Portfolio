import React, { useRef } from "react"
import Navbar from '../Components/Navbar'
import Cursor from '../Components/Cursor'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import bg from "../Assets/holomorph.mp4"
import insta from "../Assets/insta.png"
import linkedin from "../Assets/linkedin.png"
import github from "../Assets/github.png"

const HomeHero = () => {
    const textRef = useRef(null)
    const headRef = useRef(null)
    const videoRef = useRef(null)
    const iconRef=useRef(null)

    useGSAP(() => {
        if (textRef.current) {
            gsap.from(textRef.current, {
                duration: 2,
                y: "110%",
                ease: "power4.out",
                delay: 3
            })
        }
        gsap.fromTo(
            videoRef.current,
            { width: "0%" },
            { width: "100%", duration: 2, ease: "cubic-bezier(0.41, 0.01, 0.17, 0.99)", delay: 0.5 }
        )
        if (headRef.current) {
            gsap.from(headRef.current, {
                duration: 2,
                y: "100%",
                ease: "power4.out",
                delay: 3,
            })
        }
        if (iconRef.current) {
            gsap.from(iconRef.current, {
                duration: 2,
                y: "-100%",
                ease: "power4.out",
                opacity:0,
                delay: 3
            })
        }
    })

    return (
        <>
            <div className="flex flex-col w-full h-screen gap-10 xl:gap-0 xl:justify-between lg:pb-4">
                <Cursor />
                <Navbar />
                <div className="flex w-full items-start gap-1 lg:gap-2 justify-center px-4">
                    <div className="overflow-hidden">
                        <p ref={textRef} className="my-2 font-sohne text-[#121212] text-[12px] leading-[17px] font-semibold lg:text-sm uppercase lg:font-bold max-w-[586px] lg:leading-[19px] 2xl:leading-[22px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        </p>
                    </div>
                    <p className="font-sohne text-[#121212] text-2xl uppercase font-bold max-w-[586px] leading-[25px]">
                        (01)
                    </p>
                </div>
                <div className="px-2 xl:px-4 w-full h-full lg:h-[530px] 2xl:h-[580px]">
                    <div className="relative w-full h-full flex rounded-[30px]">
                        <video ref={videoRef} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-[508px] object-cover object-center rounded-[30px] lg:h-[530px] 2xl:h-[580px]">
                            <source src={bg} type="video/mp4" />
                        </video>

                        <div className="relative z-10 w-full">
                            <div className=" flex flex-col gap-10 h-[508px] justify-between pt-9 pb-2 lg:h-[530px] 2xl:h-[580px]">
                                <div className="flex flex-col items-start px-6 gap-6 lg:flex-row lg:justify-between">
                                    <div className="flex gap-2" ref={iconRef}>
                                        <img src={insta} alt="" className="h-[30px] w-[30px] lg:w-[36px] lg:h-[36px]" />
                                        <img src={linkedin} alt="" className="h-[30px] w-[30px] lg:w-[36px] lg:h-[36px]" />
                                        <img src={github} alt="" className="h-[30px] w-[30px] lg:w-[36px] lg:h-[36px]" />
                                    </div>
                                    <div className="flex gap-1 text-white text-base">
                                        <div className="font-sohne px-2 py-1 border-2 border-white rounded-[30px] font-bold lg:text-lg xl:text-xl">Full Stack Developer</div>
                                        <div className="font-sohne px-2 py-1 border-2 border-white rounded-[30px] font-bold lg:text-lg xl:text-xl">Ui/UX</div>
                                    </div>
                                </div>

                                <div className="flex flex-col text-white w-full gap-8 xl:gap-0">
                                    <div className="flex flex-col xl:pl-4">
                                        <div className="flex items-baseline w-full">
                                            <p className="font-sohne text-lg font-bold lg:font-medium xl:text-xl 2xl:text-2xl ml-1 xl:max-w-[612px] whitespace-nowrap xl:whitespace-normal">Building Scalable Web Solutions</p>
                                            <div className="h-[2px] bg-white w-full"></div>
                                        </div>
                                        <div className="overflow-hidden">
                                            <h1 ref={headRef} className="dev font-sohne text-[74px] font-black tracking-tight text-balance sm:text-[120px] md:text-[144px] lg:text-[176px] xl:text-[208px] 2xl:text-[276px] 2xl:leading-[270px] overflow-hidden"
                                            >Developer</h1>
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
