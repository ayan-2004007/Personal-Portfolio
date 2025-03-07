import React,{useEffect, useRef} from "react"
import rimg from "../Assets/rotate.png"
import Marquee from "react-fast-marquee"

const MarqueeSection=()=>{
    return(

        <>
            <div className="h-screen w-full bg-white flex flex-col gap-7 -mt-1 sm:gap-10 2xl:gap-12">
                <Marquee speed={110}>
                    <div className="flex items-center justify-center gap-6 ml-6 xl:gap-10 xl:ml-10">
                        <h1 className="text-[#979797] font-sohne uppercase text-5xl font-black sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[78px] 2xl:text-[92px]">turning vision into reality</h1>
                        <img src={rimg} alt="" className="rotate h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] md:h-[62px] md:w-[62px] lg:h-[84px] lg:w-[84px] xl:h-[88px] xl:w-[88px] 2xl:h-[96px] 2xl:w-[96px]"/>
                    </div>
                    <div className="flex items-center justify-center gap-6 ml-6 xl:gap-10 xl:ml-10">
                        <h1 className="text-[#979797] font-sohne uppercase text-5xl font-black sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[78px] 2xl:text-[92px]">turning vision into reality</h1>
                        <img src={rimg} alt="" className="rotate h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] md:h-[62px] md:w-[62px] lg:h-[84px] lg:w-[84px] xl:h-[88px] xl:w-[88px] 2xl:h-[96px] 2xl:w-[96px]"/>
                    </div>
                </Marquee>

                <Marquee speed={110} direction="right">
                    <div className="flex items-center justify-center gap-6 ml-6 xl:gap-10 xl:ml-10">
                        <h1 className="text-[#979797] font-sohne uppercase text-5xl font-black sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[78px] 2xl:text-[92px]">expertise you can trust</h1>
                        <img src={rimg} alt="" className="rotate h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] md:h-[62px] md:w-[62px] lg:h-[84px] lg:w-[84px] xl:h-[88px] xl:w-[88px] 2xl:h-[96px] 2xl:w-[96px]"/>
                    </div>
                    <div className="flex items-center justify-center gap-6 ml-6 xl:gap-10 xl:ml-10">
                        <h1 className="text-[#979797] font-sohne uppercase text-5xl font-black sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[78px] 2xl:text-[92px]">expertise youy can trust</h1>
                        <img src={rimg} alt="" className="rotate h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] md:h-[62px] md:w-[62px] lg:h-[84px] lg:w-[84px] xl:h-[88px] xl:w-[88px] 2xl:h-[96px] 2xl:w-[96px]"/>
                    </div>
                </Marquee>
                
            </div>
        </>
    )
}

export default MarqueeSection