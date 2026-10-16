"use client"

import arrow from "@/assets/arrow.png"
import profile from "@/assets/profile.jpg"
import grain from "@/assets/grain.gif"
import dir from "@/assets/direction.png"
import { email, socials } from "@/data/site"
import { useTransitionPath } from "./TransitionProvider"

const ContactFull = () => {
    const setTransitionPath = useTransitionPath()

    const handleClick = () => {
        alert("This button was supposed to send an email. But Ayan prioritized passing his exams. Wise choice?")
    }

    return (
        <main className="bg-black h-screen w-full overflow-hidden">
            <div
                className="grainy absolute inset-0 z-50 pointer-events-none w-full h-screen opacity-15 xl:opacity-[8%]"
                style={{
                    backgroundImage: `url(${grain.src})`,
                    backgroundSize: "200px",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                }} />

            <div className="relative flex flex-col justify-between h-full py-7 pb-14 z-10">
                <div onClick={() => setTransitionPath("/")} className="logo w-full px-6">
                    <div className="logo-name flex flex-col gap-1 font-sohne-halbfett cursor-pointer">
                        <div className="w-fit text-black bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:px-5 xl:py-2">ayan</div>
                        <div className="w-fit text-black bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:px-5 xl:py-2">chakraborty</div>
                    </div>
                </div>

                <div className="xl:flex sm:self-center xl:self-start xl:w-full xl:justify-between">
                    <div className="flex flex-col gap-14 xl:pl-8 2xl:pl-20">
                        <div className="flex flex-col gap-3 pl-6 sm:mx-auto xl:mx-0">
                            <p className="text-white font-sohne-light uppercase text-[11px]">( I will reach you ...  )</p>
                            <div className="flex gap-3">
                                <input type="text" aria-label="Your email" placeholder="ENTER YOUR EMAIL" className="text-black font-sohne-halbfett text-sm bg-white placeholder:text-black pl-6 pr-12 py-3 rounded-[60px] focus:outline-[#AEEE00] md:pr-20" />
                                <button onClick={handleClick} aria-label="Submit email" className="h-12 w-12 bg-white rounded-full flex items-center justify-center"><img src={arrow.src} alt="" className="invert h-10 w-10 hover:-rotate-45 duration-150 ease-in-out cursor-pointer" /></button>
                            </div>
                        </div>
                        <div className="px-2">
                            <h1 className="contact-tag text-white uppercase text-[3.5rem] font-sohne-fett break-all -tracking-[2px] leading-[52px] sm:text-center sm:break-normal sm:max-w-[676px] md:text-[4.5rem] md:leading-[62px] lg:text-[6rem] lg:leading-[82px] lg:max-w-[872px] xl:text-left 2xl:text-[6.5rem] 2xl:leading-[92px] 2xl:max-w-[1113px]">Partnership Starts with Hello</h1>
                        </div>
                    </div>
                    <div className="hidden xl:flex flex-col gap-9 pr-20 -mt-50">
                        <div className="flex flex-col gap-6">
                            <img src={profile.src} alt="Ayan Chakraborty" className="h-20 w-20 rounded-full object-cover" />
                            <p className="text-xs text-[#717171] uppercase font-sohne-halbfett max-w-[216px] text-justify">Have an idea or project in mind? Let’s talk. Feel free to email or connect with me anytime.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-2">
                                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center text-white font-sohne-fett uppercase text-sm cursor-pointer"><div className="h-3 w-3 rounded-full bg-[#DBFF46]" />Linkedin</a>
                                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center text-white font-sohne-fett uppercase text-sm cursor-pointer"><div className="h-3 w-3 rounded-full bg-[#DBFF46]" />github</a>
                                <div className="flex gap-4 items-center text-white font-sohne-fett text-sm "><div className="h-3 w-3 rounded-full bg-[#DBFF46]" />{email}</div>
                            </div>
                            <img src={dir.src} alt="" className="h-16 w-16 invert -rotate-90 opacity-70" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 self-end px-4 sm:px-8 xl:hidden">
                    <img src={profile.src} alt="Ayan Chakraborty" className="h-20 w-20 rounded-full object-cover" />
                    <p className="text-xs text-[#717171] uppercase font-sohne-halbfett max-w-[216px] text-justify">Have an idea or project in mind? Let's talk. Feel free to email or connect with me anytime.</p>
                </div>
            </div>
        </main>
    )
}

export default ContactFull
