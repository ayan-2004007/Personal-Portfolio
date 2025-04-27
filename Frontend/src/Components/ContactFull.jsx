import React, { useRef } from "react"
import arrow from "../Assets/arrow.png"
import profile from "../Assets/profile.jpg"
import grain from "../Assets/grain.gif"

const ContactFull = () => {
    return (
        <>
            <div className="bg-black h-screen w-full overflow-hidden">
                {/* Grainy background  */}
                <div
                    className="grainy absolute inset-0 z-50 pointer-events-none w-full h-screen opacity-15"
                    style={{
                        backgroundImage: `url(${grain})`,
                        backgroundSize: "200px",
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center",
                    }} />

                <div className="relative flex flex-col justify-between h-full py-7 pb-14 z-10">
                    {/* Navbar Logo  */}
                    <div className="w-full px-6">
                        <div className="logo-name flex flex-col gap-1 font-sohne-fett font-black">
                            <div className="w-fit text-black bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:font-black xl:px-5 xl:py-2">ayan</div>
                            <div className="w-fit text-black bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:font-black xl:px-5 xl:py-2">chakraborty</div>
                        </div>
                    </div>

                    {/* Typography  */}
                    <div className="flex flex-col gap-14 sm:self-center">
                        <div className="flex flex-col gap-3 pl-6 sm:mx-auto">
                            <p className="text-white font-sohne-light uppercase text-[11px]">( Lorem ipsum dolor  )</p>
                            <div className="flex gap-3">
                                <input type="text" placeholder="ENTER YOUR EMAIL" className="text-black font-sohne-halbfett text-sm bg-white placeholder:text-black pl-6 pr-12 py-3 rounded-[60px] focus:outline-[#AEEE00]" />
                                <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center"><img src={arrow} alt="" className="invert h-10 w-10" /></button>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="contact-tag text-white uppercase text-[3.5rem] font-sohne-fett break-all -tracking-[2px] leading-[52px] sm:text-center sm:break-normal sm:max-w-[676px]">Partnership Starts with Hello</p>
                        </div>
                    </div>

                    <div className="flex gap-3 self-end px-4">
                        <img src={profile} alt="" className="h-20 w-20 rounded-full object-cover" />
                        <p className="text-xs text-[#717171] uppercase font-sohne-halbfett max-w-[216px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactFull