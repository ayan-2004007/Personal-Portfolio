import React from "react"
import Marquee from "react-fast-marquee"
import arrow from "../Assets/arrow.png"

const Contact = () => {
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-between py-4 pb-10">

                {/* Social links and Form  */}
                <div className="flex flex-col px-4">
                    <div className="w-full flex flex-col gap-2 items-end px-4 md:px-8 xl:w-fit xl:items-start">
                        <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212] lg:text-lg 2xl:text-xl">ayanchakraborty2004@gmail.com</div>
                        <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212] lg:text-lg 2xl:text-xl">linkedIn</div>
                        <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212] lg:text-lg 2xl:text-xl">Github</div>
                        <div className="w-fit text-base font-sohne font-bold px-3 py-2 border-2 border-[#121212] lg:text-lg 2xl:text-xl">Instagram</div>
                    </div>

                    {/* Form Section  */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="YOUR NAME" className="border-b-2 border-[#212121] font-sohne uppercase w-fit text-sm focus:outline-none" />
                            <input type="text" placeholder="YOUR EMAIL" className="border-b-2 border-[#212121] font-sohne uppercase w-fit text-sm focus:outline-none" />
                            <input type="text" placeholder="YOUR MESSAGE" className="border-b-2 border-[#212121] font-sohne uppercase w-fit text-sm focus:outline-none" />
                        </div>
                        {/* CTAs */}
                        <div className="flex flex-col">
                            <button className="h-16 w-40 xl:h-[64px] xl:w-[234px] bg-black rounded-[60px] flex items-center justify-between px-2 pl-10 text-white font-sohne text-sm xl:text-base font-bold xl:pl-10 group hover:cursor-pointer">
                                <span className="uppercase transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:translate-x-[50px]">
                                    send
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

                {/* Marquee Text  */}
                <Marquee speed={110} className="2xl:-mb-10">
                    <div className="flex items-center gap-10 ml-10 lg:ml-20">
                        <p className="uppercase text-[#D7D7D7] -tracking-[6px] text-[124px] sm:text-[156px] font-sohne-light lg:text-[196px] xl:text-[224px] 2xl:text-[244px]">build with me</p>
                    </div>
                    <div className="flex items-center gap-10 ml-10 lg:ml-20">
                        <p className="uppercase text-[#D7D7D7] -tracking-[6px] text-[124px] sm:text-[156px] font-sohne-light lg:text-[196px] xl:text-[224px] 2xl:text-[244px]">build with me</p>
                    </div>
                </Marquee>
            </div>
        </>
    )
}

export default Contact