import React from 'react'
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import logo from "../Assets/logo.png"
import moon from "../Assets/moon_btn.png"
import arrow from "../Assets/arrow.png"

const Navbar = () => {
    // useGSAP(()=>{
    //     gsap.from(".hamburgur",{
    //         x:600,
    //         duration:1,
    //         opacity:0
    //     })
    // })
    return (
        <>
        <div className='flex items-center justify-center px-7 py-2'>
            <div className='flex items-center justify-between w-full border-b-[1px] border-[#121212] py-2 px-2 sm:max-w-[602px] lg:max-w-[1672px] xl:pb-3'>
                <div className='lg:flex lg:gap-2 items-center'>
                    <img src={logo} alt="LOGO" className='w-[52px] h-[52px] md:h-[60px] md:w-[60px]'/>
                    <div className='hidden lg:flex  lg:flex-col'>
                        <h1 className='text-base xl:text-lg text-black font-sohne '>AYAN</h1>
                        <h1 className='text-base xl:text-lg text-black font-sohne '>CHAKRABORTY</h1>
                    </div>
                </div>
                <div className='hamburgur flex flex-col gap-[3px] xl:gap-1'>
                    <div className='w-[60px] h-[3px] bg-black xl:w-[96px]'></div>
                    <div className='w-[60px] h-[3px] bg-black xl:w-[96px]'></div>
                    <div className='w-[60px] h-[3px] bg-black xl:w-[96px]'></div>
                </div>
                <div className='hidden lg:flex items-center gap-2 xl:gap-3'>
                    <img src={moon} alt="" className='w-[50px] h-[50px]'/>
                    <button className='h-[64px] w-[234px] xl:h-[74px] xl:w-[274px] bg-[#121212] rounded-[60px] flex items-center justify-between px-2 pl-10 text-white font-sohne text-base font-medium xl:pl-16'>LETS WORK<span><img src={arrow} alt="" className='h-[50px] w-[50px] xl:w-[60px] xl:h-[60px]' /></span></button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Navbar