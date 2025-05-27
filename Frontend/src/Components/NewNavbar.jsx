import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import arrow from "../Assets/arrow.png"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

const NewNavbar = ({setTransitionPath}) => {
    // const navigate=useNavigate()
    const navRef = useRef(null)
    useGSAP(() => {
        gsap.from(navRef.current, {
            y: "-100%",
            duration: 2.5,
            ease: "expo.inOut"
        })
    })
    

    return (
        <>
            <div ref={navRef} className=" nav-cont w-full font-sohne flex items-center justify-between px-4 pt-4 md:max-w-[758px] md:mx-auto lg:max-w-full xl:px-8  2xl:px-20">
                <div className="logo-name flex flex-col gap-1 ">
                    <div className="w-fit text-white font-extrabold bg-black px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:font-black xl:px-5 xl:py-2">ayan</div>
                    <div className="w-fit text-white font-extrabold bg-black px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:font-black xl:px-5 xl:py-2">chakraborty</div>
                </div>
                <div className='hamburgur flex flex-col gap-[4px] xl:gap-1 lg:hidden'>
                    <div className='w-[60px] h-[2px] md:h-[2px] md:w-[96px] bg-black'></div>
                    <div className='w-[60px] h-[2px] md:h-[2px] md:w-[96px] bg-black'></div>
                    <div className='w-[60px] h-[2px] md:h-[2px] md:w-[96px] bg-black'></div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                    <button onClick={()=>setTransitionPath("/contact")} className="h-[64px] w-[234px] bg-black rounded-[60px] flex items-center justify-between px-2 pl-10 text-white font-sohne text-base font-bold xl:pl-10 group hover:cursor-pointer">
                        <span className="transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:translate-x-[50px]">
                            LETS WORK
                        </span>
                        <img
                            src={arrow}
                            alt=""
                            className="-rotate-45 h-[45px] w-[45px] xl:w-[48px] xl:h-[48px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:-translate-x-[150px]"
                        />
                    </button>
                </div>

                <div className="hidden lg:flex flex-col gap-1 items-end">
                    <div className="w-fit text-black font-extrabold text-[13px] uppercase text-right border-[1px] xl:border-2 border-[#121212] px-5 py-1 2xl:text-[15px] hover:bg-[#121212] hover:text-white duration-300 ease-in cursor-pointer">linkedin</div>
                    <div className="w-fit text-black font-extrabold text-[13px] uppercase text-right border-[1px] xl:border-2 border-[#121212] px-5 py-1 2xl:text-[15px] hover:bg-[#121212] hover:text-white duration-300 ease-in cursor-pointer">github</div>
                    <div className="w-fit text-black font-extrabold text-[13px] uppercase text-right border-[1px] xl:border-2 border-[#121212] px-5 py-1 2xl:text-[15px] hover:bg-[#121212] hover:text-white duration-300 ease-in cursor-pointer">instagram</div>
                </div>

            </div>
        </>
    )
}

export default NewNavbar