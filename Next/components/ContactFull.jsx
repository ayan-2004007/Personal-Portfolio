"use client"

import arrow from "@/assets/arrow.png"
import profile from "@/assets/me-avatar.jpg"
import grain from "@/assets/grain.gif"
import dir from "@/assets/direction.png"
import { email, socials } from "@/data/site"
import { useTransitionPath } from "./TransitionProvider"

const ContactFull = () => {
    const setTransitionPath = useTransitionPath()


    return (
        <main className="bg-black min-h-screen w-full overflow-x-hidden">
            <div
                className="grainy fixed inset-0 z-50 pointer-events-none w-full h-full opacity-15 xl:opacity-[8%]"
                style={{
                    backgroundImage: `url(${grain.src})`,
                    backgroundSize: "200px",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                }} />

            <div className="relative flex flex-col justify-between gap-12 min-h-screen py-7 pb-14 z-10">
                <div onClick={() => setTransitionPath("/")} className="logo w-full px-6">
                    <div className="logo-name flex flex-col gap-1 font-sohne-halbfett cursor-pointer">
                        <div className="w-fit text-black bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:px-5 xl:py-2">ayan</div>
                        <div className="w-fit text-black bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:px-5 xl:py-2">chakraborty</div>
                    </div>
                </div>

                <div className="xl:flex sm:self-center xl:self-start xl:w-full xl:justify-between">
                    <div className="flex flex-col gap-14 xl:pl-8 2xl:pl-20">
                        <div className="flex flex-col gap-3 pl-6 sm:mx-auto xl:mx-0">
                            <p className="text-white font-sohne-light uppercase text-[11px]">( drop me a line )</p>
                            <div className="flex gap-3">
                                <a href={`mailto:${email}`} className="text-black font-sohne-halbfett text-[11px] whitespace-nowrap bg-white pl-5 pr-5 py-3 rounded-[60px] hover:bg-[#AEEE00] duration-300 sm:text-sm sm:pl-6 sm:pr-12 md:pr-20">{email}</a>
                                <a href={`mailto:${email}`} aria-label="Email Ayan" className="group h-12 w-12 shrink-0 bg-white rounded-full hidden min-[360px]:flex items-center justify-center"><img src={arrow.src} alt="" className="invert h-10 w-10 group-hover:-rotate-45 duration-150 ease-in-out" /></a>
                            </div>
                        </div>
                        <div className="px-2">
                            <h1 className="contact-tag text-white uppercase text-[2.15rem] font-sohne-fett -tracking-[1px] leading-[38px] sm:text-[3.5rem] sm:leading-[52px] sm:-tracking-[2px] sm:text-center sm:max-w-[676px] md:text-[4.5rem] md:leading-[62px] lg:text-[6rem] lg:leading-[82px] lg:max-w-[872px] xl:text-left 2xl:text-[6.5rem] 2xl:leading-[92px] 2xl:max-w-[1113px]">Partnership Starts with Hello</h1>
                        </div>
                    </div>
                    <div className="hidden xl:flex flex-col gap-9 pr-20 -mt-50">
                        <div className="flex flex-col gap-6">
                            <img src={profile.src} alt="Ayan Chakraborty" className="h-20 w-20 rounded-full object-cover" />
                            <p className="text-xs text-[#717171] uppercase font-sohne-halbfett max-w-[216px] text-justify">Have a project in mind or a question? Send me an email or message me on LinkedIn.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-2">
                                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center text-white font-sohne-fett uppercase text-sm cursor-pointer"><div className="h-3 w-3 rounded-full bg-[#DBFF46]" />Linkedin</a>
                                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center text-white font-sohne-fett uppercase text-sm cursor-pointer"><div className="h-3 w-3 rounded-full bg-[#DBFF46]" />github</a>
                                <a href={`mailto:${email}`} className="flex gap-4 items-center text-white font-sohne-fett text-sm cursor-pointer"><div className="h-3 w-3 rounded-full bg-[#DBFF46]" />{email}</a>
                            </div>
                            <img src={dir.src} alt="" className="h-16 w-16 invert -rotate-90 opacity-70" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 self-end px-4 sm:px-8 xl:hidden">
                    <img src={profile.src} alt="Ayan Chakraborty" className="h-20 w-20 rounded-full object-cover" />
                    <p className="text-xs text-[#717171] uppercase font-sohne-halbfett max-w-[216px] text-justify">Have a project in mind or a question? Send me an email or message me on LinkedIn.</p>
                </div>
            </div>
        </main>
    )
}

export default ContactFull
