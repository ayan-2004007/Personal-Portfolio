import React from "react"
import Marquee from "react-fast-marquee"
import arrow from "../Assets/arrow.png"
import direction from "../Assets/direction.png"

const Footer = ({setTransitionPath}) => {
    return (
        <>
            <div className="h-[90vh] pb-10 w-full bg-white flex flex-col justify-between sm:h-screen sm:py-4 xl:justify-around xl:pb-0 2xl:py-0">

                {/* social media links  */}
                <div className="flex w-full items-start justify-between xl:px-6 2xl:px-14">
                    <div className="w-full flex flex-col gap-2 items-end px-4 md:px-8 xl:w-fit xl:items-start">
                        <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212] lg:text-lg 2xl:text-xl">ayanchakraborty2004@gmail.com</div>
                        <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212] lg:text-lg 2xl:text-xl">linkedIn</div>
                        <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212] lg:text-lg 2xl:text-xl">Github</div>
                        <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212] lg:text-lg 2xl:text-xl">Instagram</div>
                    </div>
                    {/* Location and CTAs (Visible after XL)  */}
                    <div className="xl:flex flex-col px-4 gap-2 md:px-8 hidden ">
                        <div className="flex flex-col">
                            <p className="text-sm font-sohne uppercase font-black">kolkata</p>
                            <p className="text-sm font-sohne uppercase font-black">2025 | ayan chakrbaorty</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <button onClick={()=>setTransitionPath("/contact")} className="h-16 w-50 xl:h-[64px] xl:w-[234px] bg-black rounded-[60px] flex items-center justify-between px-2 pl-10 text-white font-sohne text-sm xl:text-base font-bold xl:pl-10 group hover:cursor-pointer">
                                <span className="transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:translate-x-[50px]">
                                    LETS WORK
                                </span>
                                <img
                                    src={arrow}
                                    alt=""
                                    className="-rotate-45 h-[ lg:text-[196px]45px] w-[45px] xl:w-[48px] xl:h-[48px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:-translate-x-[150px]"
                                />
                            </button>
                            <button className="hidden sm:block border-2 border-[#121212] rounded-[60px] px-4 font-sohne text-sm uppercase font-bold">download resume</button>
                        </div>
                    </div>
                </div>


                {/* engagement text  */}
                <div className="flex w-full px-4 items-start md:px-8 xl:justify-center">
                    <p className="text-[12px] font-sohne uppercase  font-bold text-justify max-w-[306px] leading-[17px] md:text-sm md:max-w-[396px] md:leading-[19px] xl:text-base xl:leading-[21px] xl:max-w-[454px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a</p>
                </div>

                {/* Location and CTAs  (Visible up XL)*/}
                <div className="flex flex-col px-4 gap-2 md:px-8 xl:hidden">
                    <div className="flex flex-col">
                        <p className="text-sm font-sohne uppercase font-black">kolkata</p>
                        <p className="text-sm font-sohne uppercase font-black">2025 | ayan chakrbaorty</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button onClick={()=>setTransitionPath("/contact")} className="h-16 w-50 xl:h-[64px] xl:w-[234px] bg-black rounded-[60px] flex items-center justify-between px-2 pl-10 text-white font-sohne text-sm xl:text-base font-bold xl:pl-10 group hover:cursor-pointer">
                            <span className="transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:translate-x-[50px]">
                                LETS WORK
                            </span>
                            <img
                                src={arrow}
                                alt=""
                                className="-rotate-45 h-[ lg:text-[196px]45px] w-[45px] xl:w-[48px] xl:h-[48px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:-translate-x-[150px]"
                            />
                        </button>
                        <button className="hidden sm:block border-2 border-[#121212] rounded-[60px] px-4 font-sohne text-sm uppercase font-bold">download resume</button>
                    </div>
                </div>

                {/* Marquee  */}
                <div className="w-full flex flex-col">
                    
                    {/* Divider  */}
                    <hr className="text-[#A4A4A4] w-full h-[2px] xl:h-[3px]" />

                    <Marquee speed={110} className="2xl:-mb-10">
                        <div className="flex items-center gap-10 ml-10 lg:ml-20">
                            <p className="text-[124px] sm:text-[156px] font-sohne-light uppercase lg:text-[196px] xl:text-[224px] 2xl:text-[244px]">get in touch.</p>
                            <img src={direction} alt="" className="-rotate-90 h-24 w-24 lg:h-40 lg:w-40 opacity-35" />
                        </div>
                        <div className="flex items-center gap-10 ml-10 lg:ml-20">
                            <p className="text-[124px] sm:text-[156px] font-sohne-light uppercase lg:text-[196px] xl:text-[224px] 2xl:text-[244px]">get in touch.</p>
                            <img src={direction} alt="" className="-rotate-90 h-24 w-24 lg:h-40 lg:w-40 opacity-35" />
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default Footer