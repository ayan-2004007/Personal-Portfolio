import React, { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import loader from "../Assets/loading.gif"

const Preloader = ({ onComplete }) => {
    const [count, setCount] = useState(0)
    const lineRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            lineRef.current,
            { scaleX: 0.1 },
            { scaleX: 1, duration: 4, ease: "power2.in" }
        )

        let counter = 0
        const interval = setInterval(() => {
            if (counter < 100) {
                counter += 1
                setCount(counter)
            } else {
                clearInterval(interval)
                gsap.to(".preloader", {
                    y: "-100%",
                    duration: 1.8,
                    ease: "expo.inOut",
                    onComplete: () => {
                        if (onComplete) {
                            onComplete()
                        }
                    }
                })
            }
        }, 40)

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div className="preloader w-full h-screen bg-black flex flex-col justify-around font-sohne text-white xl:justify-between">
            <div className="flex flex-col px-4 xl:px-8 2xl:px-20 gap-2 lg:flex-row lg:w-full lg:justify-between xl:pt-4">
                <div className="logo-name flex flex-col gap-1">
                    <div className="w-fit text-black font-extrabold bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:font-black xl:px-5 xl:py-2">ayan</div>
                    <div className="w-fit text-black font-extrabold bg-white px-2 py-1 uppercase text-[11px] sm:text-[12px] sm:px-3 sm:py-1 xl:text-sm xl:font-black xl:px-5 xl:py-2">chakraborty</div>
                </div>
                <div className="flex flex-col">
                    <p className="uppercase text-sm">copyright 2025</p>
                    <p className="uppercase text-sm">made and maintained by ayan</p>
                </div>
            </div>

            <div className="flex w-full items-center gap-2 md:px-2 xl:px-4">
                <div ref={lineRef} className="h-[1px] bg-[#7a7a7a] flex-grow"></div>
                <p className="whitespace-nowrap uppercase font-extrabold">( portfolio )</p>
            </div>

            <div className="flex flex-row w-full justify-between items-baseline pl-6">
                <img src={loader} alt="loader" className="w-10 h-10 lg:w-16 lg:h-16"/>
                <div className="flex items-center justify-end px-2 xl:px-4">
                    <p className="font-sohne-light text-[124px] md:text-[176px] lg:text-[256px] 2xl:text-[356px]">{count}</p>
                    <p className="text-[54px] lg:text-[96px]">%</p>
                </div>
            </div>
        </div>
    )
}

export default Preloader
