import React,{useRef} from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
    const codeRef=useRef(null)
    const designRef=useRef(null)
    const innovateRef=useRef(null)

    useGSAP(()=>{
        if(codeRef.current){
            gsap.from(codeRef.current,{
                x:"-100%",
                opacity:0,
                ease:"power1.out",
                scrollTrigger:{
                    trigger:codeRef.current,
                    start:"top 80%",
                    end:"top 30%",
                    scrub:2,
                }
            })
        }
        if(designRef.current){
            gsap.from(designRef.current,{
                x:"100%",
                opacity:0,
                ease:"power1.out",
                scrollTrigger:{
                    trigger:designRef.current,
                    start:"top 80%",
                    end:"top 50%",
                    scrub:2,
                }
            },)
        }
        if(innovateRef.current){
            gsap.from(innovateRef.current,{
                x:"-100%",
                opacity:0,
                ease:"power1.out",
                scrollTrigger:{
                    trigger:innovateRef.current,
                    start:"top 80%",
                    end:"top 60%",
                    scrub:2,
                }
            },)
        }
    })

    return (
        <>
            <div className="h-screen w-full bg-black flex flex-col items-center justify-center gap-2 lg:gap-1 xl:gap-0 xl:-space-y-2 2xl:-space-y-6">
                <div className="flex items-start overflow-hidden w-full px-2 sm:px-5 justify-end lg:justify-center">
                    <h1 ref={codeRef} className="font-sohne bg-gradient-to-t from-gray-600 to-white text-transparent bg-clip-text uppercase text-[64px] font-semibold sm:text-[76px] md:text-[84px] lg:font-bold xl:text-[104px] 2xl:text-[114px] 2xl:font-black">code.</h1>
                </div>
                <div className="flex items-start overflow-hidden w-full px-2 sm:px-5 justify-end lg:justify-center">
                    <h1 ref={designRef} className="font-sohne bg-gradient-to-t from-gray-600 to-white text-transparent bg-clip-text uppercase text-[64px] font-semibold sm:text-[76px] md:text-[84px] lg:font-bold xl:text-[104px] 2xl:text-[114px] 2xl:font-black">design.</h1>
                </div>
                <div className="flex items-start overflow-hidden w-full px-2 sm:px-5 justify-end lg:justify-center">
                    <h1 ref={innovateRef} className="font-sohne bg-gradient-to-t from-gray-600 to-white text-transparent bg-clip-text uppercase text-[64px] font-semibold sm:text-[76px] md:text-[84px] lg:font-bold xl:text-[104px] 2xl:text-[114px] 2xl:font-black">innovate.</h1>
                </div>
            </div>
        </>
    )
}
export default Intro