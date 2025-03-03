import React,{useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from "../Assets/logo.png"
import moon from "../Assets/moon_btn.png"
import arrow from "../Assets/arrow.png"

const Navbar = () => {
    const navRef=useRef(null)
    // useGSAP(()=>{
    //     gsap.from(".hamburgur",{
    //         x:600,
    //         duration:1,
    //         opacity:0
    //     })
    // })
    useGSAP(()=>{
        gsap.from(navRef.current,{
            y:"-100%",
            duration:1,
            delay:0.5,
            ease:"cubic-bezier(0.41, 0.01, 0.17, 0.99)"
        })
    })
    return (
        <>
            <div ref={navRef} className='flex items-center justify-center px-7 pt-2'>
                <div className='flex items-center justify-between w-full border-b-[1px] border-[#121212] pb-2 px-2 sm:max-w-[602px] lg:max-w-[1672px]'>
                    <div className='lg:flex lg:gap-2 items-center'>
                        <img src={logo} alt="LOGO" className='w-[45px] h-[45px] md:h-[48px] md:w-[48px]' />
                        <div className='hidden lg:flex  lg:flex-col'>
                            <h1 className='text-[11px] xl:text-[12px] font-bold text-black font-sohne '>AYAN</h1>
                            <h1 className='text-[11px] xl:text-[12px] font-bold text-black font-sohne '>CHAKRABORTY</h1>
                        </div>
                    </div>
                    <div className='hamburgur flex flex-col gap-[3px] xl:gap-1'>
                        <div className='w-[60px] h-[3px] bg-black xl:w-[96px]'></div>
                        <div className='w-[60px] h-[3px] bg-black xl:w-[96px]'></div>
                        <div className='w-[60px] h-[3px] bg-black xl:w-[96px]'></div>
                    </div>
                    <div className='hidden lg:flex items-center gap-2 xl:gap-3'>
                        {/* <img src={moon} alt="" className='w-[48px] h-[48px]' /> */}
                        <button className="h-[64px] w-[234px] bg-[#121212] rounded-[60px] flex items-center justify-between px-2 pl-10 text-white font-sohne text-base font-medium xl:pl-10 group hover:cursor-pointer">
                            <span className="transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:translate-x-[50px]">
                                LETS WORK
                            </span>
                            <img
                                src={arrow}
                                alt=""
                                className="h-[45px] w-[45px] xl:w-[48px] xl:h-[48px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:-translate-x-[150px]"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar