import React from "react"
import Marquee from "react-fast-marquee"
import arrow from "../Assets/arrow.png"
import direction from "../Assets/direction.png"

const Footer = () => {
    return (
        <>
            <div className="h-[90vh] pb-10 w-full bg-white flex flex-col justify-between">

                {/* social media links  */}
                <div className="w-full flex flex-col gap-2 items-end px-4">
                    <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212]">ayanchakraborty2004@gmail.com</div>
                    <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212]">linkedIn</div>
                    <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212]">Github</div>
                    <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212]">Instagram</div>
                </div>


                {/* engagement text  */}
                <div className="flex w-full px-4 items-start">
                    <p className="text-[12px] font-sohne uppercase  font-bold text-justify max-w-[306px] leading-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a</p>
                </div>

                {/* Location and CTAs  */} 
                <div className="flex flex-col px-4">
                    <div className="flex flex-col">
                        <p className="text-sm font-sohne uppercase font-black">kolkata</p>
                        <p className="text-sm font-sohne uppercase font-black">2025 | ayan chakrbaorty</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="h-16 w-50 xl:h-[64px] xl:w-[234px] bg-black rounded-[60px] flex items-center justify-between px-2 pl-10 text-white font-sohne text-sm xl:text-base font-bold xl:pl-10 group hover:cursor-pointer">
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
                </div>

                {/* Divider  */}
                <hr className="text-[#A4A4A4] w-full h-[2px]" />

                {/* Marquee  */}
                <div className="w-full">
                    <Marquee speed={110}>
                        <div className="flex items-center gap-10 ml-10">
                            <p className="text-[104px] font-sohne-light uppercase">get in touch</p>
                            <img src={direction} alt="" className="-rotate-90 h-24 w-24"/>
                        </div>
                        <div className="flex items-center gap-10 ml-10">
                            <p className="text-[104px] font-sohne-light uppercase">get in touch</p>
                            <img src={direction} alt="" className="-rotate-90 h-24 w-24"/>
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default Footer