"use client"

import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import arrow from "@/assets/arrow.png"
import grain from "@/assets/grain.gif"
import close from "@/assets/close.png"
import { socials } from "@/data/site"
import { useTransitionPath } from "./TransitionProvider"

const NewNavbar = () => {
    const setTransitionPath = useTransitionPath()
    const navRef = useRef(null)
    const sliderRef = useRef()
    const [menuOpen, setMenuOpen] = useState(false)

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: "-100%",
            duration: 2.5,
            ease: "expo.inOut"
        })
    }, [])

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
        if (!menuOpen) {
            gsap.fromTo(sliderRef.current,
                { y: "-100%" }, { y: "0%", duration: 1, ease: "expo.inOut" })
        } else {
            gsap.to(sliderRef.current,
                { y: "-100%", duration: 1, ease: "expo.inOut" })
        }
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"
            document.body.style.position = "fixed"
            document.body.style.left = "0"
            document.body.style.right = "0"
        } else {
            document.body.style.overflow = "scroll"
            document.body.style.position = ""
            document.body.style.left = ""
            document.body.style.right = ""
        }
    }, [menuOpen])

    return (
        <>
            <nav ref={navRef} aria-label="Primary" className=" nav-cont w-full font-sohne flex items-center justify-between px-4 pt-4 md:max-w-[758px] md:mx-auto lg:max-w-full xl:px-8  2xl:px-20">
                <div className="logo-name flex flex-col gap-1 ">
                    <div className="w-fit text-white font-extrabold bg-black px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:font-black xl:px-5 xl:py-2">ayan</div>
                    <div className="w-fit text-white font-extrabold bg-black px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:font-black xl:px-5 xl:py-2">chakraborty</div>
                </div>
                <div onClick={toggleMenu} role="button" aria-label="Open menu" className='hamburgur flex flex-col gap-[4px] xl:gap-1 lg:hidden'>
                    <div className='w-[60px] h-[2px] md:h-[2px] md:w-[96px] bg-black'></div>
                    <div className='w-[60px] h-[2px] md:h-[2px] md:w-[96px] bg-black'></div>
                    <div className='w-[60px] h-[2px] md:h-[2px] md:w-[96px] bg-black'></div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                    <button onClick={() => setTransitionPath("/contact")} className="h-[64px] w-[234px] bg-black rounded-[60px] flex items-center justify-between px-2 pl-10 text-white font-sohne text-base font-bold xl:pl-10 group hover:cursor-pointer">
                        <span className="transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:translate-x-[50px]">
                            LETS WORK
                        </span>
                        <img
                            src={arrow.src}
                            alt=""
                            className="-rotate-45 h-[45px] w-[45px] xl:w-[48px] xl:h-[48px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:-translate-x-[150px]"
                        />
                    </button>
                </div>

                <div className="hidden lg:flex flex-col gap-1 items-end">
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="block w-fit text-black font-extrabold text-[13px] uppercase text-right border-[1px] xl:border-2 border-[#121212] px-5 py-1 2xl:text-[15px] hover:bg-[#121212] hover:text-white duration-300 ease-in cursor-pointer">linkedin</a>
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="block w-fit text-black font-extrabold text-[13px] uppercase text-right border-[1px] xl:border-2 border-[#121212] px-5 py-1 2xl:text-[15px] hover:bg-[#121212] hover:text-white duration-300 ease-in cursor-pointer">github</a>
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="block w-fit text-black font-extrabold text-[13px] uppercase text-right border-[1px] xl:border-2 border-[#121212] px-5 py-1 2xl:text-[15px] hover:bg-[#121212] hover:text-white duration-300 ease-in cursor-pointer">instagram</a>
                </div>
            </nav>

            <div ref={sliderRef} className="w-full h-screen fixed top-0 left-0 bg-black z-50 flex flex-col justify-around lg:hidden" style={{ transform: "translateY(-100%)" }}>
                <div
                    className="grainy absolute inset-0 z-50 pointer-events-none w-full h-screen opacity-15 xl:opacity-[8%]"
                    style={{
                        backgroundImage: `url(${grain.src})`,
                        backgroundSize: "200px",
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center",
                    }} />
                <div className="flex flex-col w-full">
                    <button onClick={toggleMenu} className="text-white flex justify-end px-4 pt-4">
                        <img src={close.src} alt="Close" className="w-14 h-14" />
                    </button>

                    <div className="flex flex-col gap-1 px-4">
                        <div className="font-sohne w-fit text-black font-extrabold bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1">ayan</div>
                        <div className="font-sohne w-fit text-black font-extrabold bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1">chakraborty</div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 px-4">
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="block text-white font-sohne-light uppercase text-5xl">Linkedin</a>
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="block text-white font-sohne-light uppercase text-5xl">Github</a>
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="block text-white font-sohne-light uppercase text-5xl">instagram</a>
                </div>

                <div className="px-4 pb-2">
                    <button
                        onClick={() => setTransitionPath("/contact")}
                        className="h-[64px] w-[234px] bg-white rounded-[60px] flex items-center justify-between px-2 pl-10 text-black font-sohne text-base font-bold xl:pl-10 group hover:cursor-pointer"
                    >
                        <span className="transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:translate-x-[50px]">
                            LETS WORK
                        </span>
                        <img
                            src={arrow.src}
                            alt=""
                            className="invert -rotate-45 h-[45px] w-[45px] xl:w-[48px] xl:h-[48px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:-translate-x-[150px]"
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default NewNavbar
