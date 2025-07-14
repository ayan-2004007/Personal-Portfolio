import React, { useRef, useEffect } from "react"
import arrow from "../Assets/direction.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Expertise = () => {
    const containerRef = useRef(null)
    const hrRefs = useRef([])
    const [isReady, setIsReady] = React.useState(false)
    useEffect(() => {
        hrRefs.current = hrRefs.current.slice(0, 4)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        const timer = setTimeout(() => {
            setIsReady(true)
            ScrollTrigger.refresh()
        }, 300)
        return () => clearTimeout(timer)
    }, [])

    useGSAP(() => {
        if (!isReady) return
        containerRef.current.offsetHeight
        hrRefs.current.forEach((hrRef, index) => {
            if (hrRef) {
                gsap.fromTo(hrRef,
                    { width: "0%" },
                    {
                        width: "100%",
                        duration: 2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: hrRef,
                            start: "top 80%",
                            end: "top 20%",
                            scrub: 1,
                            invalidateOnRefresh: true,
                            toggleActions: "play none none none"
                        }
                    }
                )
            }
        })
        setTimeout(() => ScrollTrigger.refresh(), 100)
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [isReady])
    return (
        <div ref={containerRef} className="w-full flex flex-col gap-16 pb-10">
            {/*1. Ui/Ux */}
            <div className="flex flex-col gap-3 xl:gap-12">
                <hr 
                    ref={el => hrRefs.current[0] = el} 
                    className="text-[#737373] h-px border-none bg-[#737373] w-0" 
                />
                <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between">
                    <div className="flex items-baseline gap-6 lg:gap-10 xl:w-full xl:justify-around">
                        <p className="font-sohne text-[#434343] text-6xl font-extrabold md:text-7xl lg:text-8xl xl:text-9xl">01</p>
                        <p className="font-sohne font-bold text-white text-xl uppercase lg:text-2xl">( ui/ux )</p>
                    </div>
                    <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                        <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 max-w-[356px] md:text-sm md:leading-5 md:max-w-[576px] xl:font-semibold">
                            Designing clean, intuitive, and responsive interfaces with a focus on user flow, interaction, and accessibility.
                        </p>
                        <img src={arrow} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                    </div>
                </div>                    
            </div>

            {/*2. Frontend */}
            <div className="flex flex-col gap-3 xl:gap-12">
                <hr 
                    ref={el => hrRefs.current[1] = el} 
                    className="text-[#737373] h-px border-none bg-[#737373] w-0" 
                />
                <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between">
                    <div className="flex items-baseline gap-6 lg:gap-10 xl:w-full xl:justify-around">
                        <p className="font-sohne text-[#434343] text-6xl font-extrabold md:text-7xl lg:text-8xl xl:text-9xl">02</p>
                        <p className="font-sohne font-bold text-white text-xl uppercase lg:text-2xl">( frontend )</p>
                    </div>
                    <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                        <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 max-w-[356px] md:text-sm md:leading-5 md:max-w-[576px] xl:font-semibold">
                            Building pixel-perfect, responsive web apps using React, Tailwind, and GSAP with smooth animations and dynamic behavior.
                        </p>
                        <img src={arrow} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                    </div>
                </div>                    
            </div>

            {/*3. Backend */}
            <div className="flex flex-col gap-3 xl:gap-12">
                <hr 
                    ref={el => hrRefs.current[2] = el} 
                    className="text-[#737373] h-px border-none bg-[#737373] w-0" 
                />
                <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between">
                    <div className="flex items-baseline gap-6 lg:gap-10 xl:w-full xl:justify-around">
                        <p className="font-sohne text-[#434343] text-6xl font-extrabold md:text-7xl lg:text-8xl xl:text-9xl">03</p>
                        <p className="font-sohne font-bold text-white text-xl uppercase lg:text-2xl">( backend )</p>
                    </div>
                    <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                        <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 max-w-[356px] md:text-sm md:leading-5 md:max-w-[576px] xl:font-semibold">
                            Creating scalable and secure APIs using Node.js, Express, and Flask, with database integration and server-side logic.
                        </p>
                        <img src={arrow} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                    </div>
                </div>                    
            </div>

            {/*4. AI/ML */}
            <div className="flex flex-col gap-3 xl:gap-12">
                <hr 
                    ref={el => hrRefs.current[3] = el} 
                    className="text-[#737373] h-px border-none bg-[#737373] w-0" 
                />
                <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between">
                    <div className="flex items-baseline gap-6 lg:gap-10 xl:w-full xl:justify-around">
                        <p className="font-sohne text-[#434343] text-6xl font-extrabold md:text-7xl lg:text-8xl xl:text-9xl">04</p>
                        <p className="font-sohne font-bold text-white text-xl uppercase lg:text-2xl">( AI/ML )</p>
                    </div>
                    <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                        <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 max-w-[356px] md:text-sm md:leading-5 md:max-w-[576px] xl:font-semibold">
                            Currently exploring AI/ML to integrate intelligent features into modern web apps using Python and LLM technologies.
                        </p>
                        <img src={arrow} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                    </div>
                </div>                    
            </div>

            {/*5. Database  */}
            <div className="flex flex-col gap-3 xl:gap-12">
                <hr 
                    ref={el => hrRefs.current[3] = el} 
                    className="text-[#737373] h-px border-none bg-[#737373] w-0" 
                />
                <div className="flex flex-col gap-4 px-4 sm:mx-auto xl:flex-row xl:mx-0 xl:justify-between">
                    <div className="flex items-baseline gap-6 lg:gap-10 xl:w-full xl:justify-around">
                        <p className="font-sohne text-[#434343] text-6xl font-extrabold md:text-7xl lg:text-8xl xl:text-9xl">05</p>
                        <p className="font-sohne font-bold text-white text-xl uppercase lg:text-2xl">( Databases )</p>
                    </div>
                    <div className="flex items-end gap-6 mx-auto lg:gap-8 xl:mx-0 xl:w-full xl:justify-around">
                        <p className="text-[#e6e6e6] font-sohne-light lg:uppercase text-[12px] text-justify leading-4 max-w-[356px] md:text-sm md:leading-5 md:max-w-[576px] xl:font-semibold">
                            Experienced in managing SQL and NoSQL databases including MongoDB Atlas, MySQL, and PostgreSQL for scalable, real-world web applications.
                        </p>
                        <img src={arrow} alt="" className="h-[40px] w-[40px] invert md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]" />
                    </div>
                </div>                    
            </div>
        </div>
    )
}

export default Expertise