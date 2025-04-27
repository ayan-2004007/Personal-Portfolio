import React from "react"
import arrow from "../Assets/arrow.png"

const ContactFull = () => {
    return (
        <>
            <div className="bg-black h-screen w-full flex flex-col justify-between py-7">

                {/* Navbar Logo  */}
                <div className="w-full px-6">
                    <div className="logo-name flex flex-col gap-1 font-sohne-fett font-black">
                        <div className="w-fit text-black bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:font-black xl:px-5 xl:py-2">ayan</div>
                        <div className="w-fit text-black bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:font-black xl:px-5 xl:py-2">chakraborty</div>
                    </div>
                </div>

                {/* Typography  */}
                <div className="flex flex-col gap-14">
                    <div className="flex flex-col gap-3 pl-6">
                        <p className="text-white font-sohne-light uppercase text-[11px]">( Lorem ipsum dolor  )</p>
                        <div className="flex gap-3">
                            <input type="text" placeholder="ENTER YOUR EMAIL" className="text-black font-sohne-halbfett text-sm bg-white placeholder:text-black pl-6 pr-12 py-3 rounded-[60px] focus:outline-[#AEEE00]"/>
                            <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center"><img src={arrow} alt="" className="invert h-10 w-10"/></button>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="contact-tag text-white uppercase text-[3.5rem] font-sohne-fett break-all -tracking-[2px] leading-[52px]">Partnership Starts with Hello</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactFull