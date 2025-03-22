import React,{useRef} from "react"
import arrow from "../Assets/direction.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Expertise = () => {
    const hr1Ref=useRef(null)
    const hr2Ref=useRef(null)
    const hr3Ref=useRef(null)
    const hr4Ref=useRef(null)
    useGSAP(()=>{
        ScrollTrigger.refresh();
        if(hr1Ref.current){
            gsap.fromTo(hr1Ref.current,{width:"0%"},
                {width:"100%",duration:2,ease:"power2.out",
                    scrollTrigger:{
                        trigger:hr1Ref.current,
                        start:"top bottom",
                        toggleActions: "play reverse play reverse",
                        scrub:1
                    }
                }
            )
        }
        if(hr2Ref.current){
            gsap.fromTo(hr2Ref.current,{width:"0%"},
                {width:"100%",duration:2,ease:"power2.out",
                    scrollTrigger:{
                        trigger:hr2Ref.current,
                        start:"top bottom",
                        toggleActions: "play reverse play reverse",
                        scrub:1
                    }
                }
            )
        }
        if(hr3Ref.current){
            gsap.fromTo(hr3Ref.current,{width:"0%"},
                {width:"100%",duration:2,ease:"power2.out",
                    scrollTrigger:{
                        trigger:hr3Ref.current,
                        start:"top bottom",
                        toggleActions: "play reverse play reverse",
                        scrub:1
                    }
                }
            )
        }
        if(hr4Ref.current){
            gsap.fromTo(hr4Ref.current,{width:"0%"},
                {width:"100%",duration:2,ease:"power2.out",
                    scrollTrigger:{
                        trigger:hr4Ref.current,
                        start:"top bottom",
                        toggleActions: "play reverse play reverse",
                        scrub:1
                    }
                }
            )
        }
    },[])

    return (
        <>
            <div className="w-full flex flex-col gap-16 pb-10">

                {/* Ui/Ux  */}
                <div className="flex flex-col gap-3 xl:gap-12">
                    <hr ref={hr1Ref} className="text-[#737373] w-full" />
                    <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between ">
                        <div className="flex items-baseline gap-6 lg:gap-10 xl:w-full xl:justify-around">
                            <p className="font-sohne text-[#434343] text-6xl font-extrabold md:text-7xl lg:text-8xl xl:text-9xl">01</p>
                            <p className="font-sohne font-bold text-white text-xl uppercase lg:text-2xl">( ui/ux )</p>
                        </div>
                        <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                            <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 max-w-[356px] md:text-sm md:leading-5 md:max-w-[576px] xl:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                            <img src={arrow} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                        </div>
                    </div>                    
                </div>


                {/* Frontend  */}
                <div className="flex flex-col gap-3 xl:gap-12">
                    <hr ref={hr2Ref} className="text-[#737373] w-full" />
                    <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between ">
                        <div className="flex items-baseline gap-6 lg:gap-10 xl:w-full xl:justify-around">
                            <p className="font-sohne text-[#434343] text-6xl font-extrabold md:text-7xl lg:text-8xl xl:text-9xl">02</p>
                            <p className="font-sohne font-bold text-white text-xl uppercase lg:text-2xl">( frontend )</p>
                        </div>
                        <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                            <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 max-w-[356px] md:text-sm md:leading-5 md:max-w-[576px] xl:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                            <img src={arrow} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                        </div>
                    </div>                    
                </div>

                {/* Backend  */}
                <div className="flex flex-col gap-3 xl:gap-12">
                    <hr ref={hr3Ref} className="text-[#737373] w-full" />
                    <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between ">
                        <div className="flex items-baseline gap-6 lg:gap-10 xl:w-full xl:justify-around">
                            <p className="font-sohne text-[#434343] text-6xl font-extrabold md:text-7xl lg:text-8xl xl:text-9xl">03</p>
                            <p className="font-sohne font-bold text-white text-xl uppercase lg:text-2xl">( backend )</p>
                        </div>
                        <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                            <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 max-w-[356px] md:text-sm md:leading-5 md:max-w-[576px] xl:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                            <img src={arrow} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                        </div>
                    </div>                    
                </div>

                {/* 3D modelling  */}
                <div className="flex flex-col gap-3 xl:gap-12">
                    <hr ref={hr4Ref} className="text-[#737373] w-full" />
                    <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between ">
                        <div className="flex items-baseline gap-6 lg:gap-10 xl:w-full xl:justify-around">
                            <p className="font-sohne text-[#434343] text-6xl font-extrabold md:text-7xl lg:text-8xl xl:text-9xl">04</p>
                            <p className="font-sohne font-bold text-white text-xl uppercase lg:text-2xl">( 3d models )</p>
                        </div>
                        <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                            <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 max-w-[356px] md:text-sm md:leading-5 md:max-w-[576px] xl:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                            <img src={arrow} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                        </div>
                    </div>                    
                </div>

            </div>
        </>
    )
}

export default Expertise