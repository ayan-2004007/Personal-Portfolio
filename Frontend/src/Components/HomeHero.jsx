import React, { useRef } from "react";
import Navbar from '../Components/Navbar'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import bg from "../Assets/holomorph.mp4"
import insta from "../Assets/insta.png"
import linkedin from "../Assets/linkedin.png"
import github from "../Assets/github.png"


const HomeHero = () => {
    const textRef = useRef(null)
    const headRef =useRef(null)

    useGSAP(() => {
        if (textRef.current) {
            gsap.from(textRef.current, {
                duration: 2,
                y: "100%",
                opacity: 0,
                ease: "power4.out",
                delay: 0.3
            });
        }
    
        if (headRef.current) {
            gsap.from(headRef.current, {
                duration: 2,
                y: "100%",
                opacity: 0,
                ease: "power4.out",
                delay: 0.5
            });
        }
    }, { scope: textRef }); 
    

    return (
        <>
            <div className="flex flex-col w-full h-screen">
                <Navbar />
                <div className="flex flex-col gap-10 px-2">
                    <div className="flex w-full items-start gap-0 lg:gap-2 justify-center px-4">
                        <div className="overflow-hidden">
                            <p ref={textRef} className="font-sohne text-[#121212] text-[12px] leading-[17px] font-semibold lg:text-sm xl:text-base uppercase lg:font-bold max-w-[586px] lg:leading-[25px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            </p>
                        </div>
                        <p className="font-sohne text-[#121212] text-2xl uppercase font-bold max-w-[586px] leading-[25px]">
                            (01)
                        </p>
                    </div>


 



                    <div className="relative w-full h-full flex rounded-[30px]">
                        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-[500px] object-cover rounded-[30px]">
                            <source src={bg} type="video/mp4" />
                        </video>

                        <div className="relative z-10 w-full">
                            <div className="flex flex-col items-start">
                                <div className="flex gap-2">
                                    <img src={insta} alt="" className="h-[30px] w-[30px]" />
                                    <img src={linkedin} alt="" className="h-[30px] w-[30px]" />
                                    <img src={github} alt="" className="h-[30px] w-[30px]" />
                                </div>
                                <div className="flex gap-1 text-white text-base">
                                    <div className="font-sohne px-2 py-1 border-2 border-white rounded-[30px] font-bold">Full Stack Developer</div>
                                    <div className="font-sohne px-2 py-1 border-2 border-white rounded-[30px] font-bold">Ui/UX</div>
                                </div>
                            </div>

                            <div className="flex flex-col text-white overflow-x-hidden w-full">
                                <div className="flex flex-col">
                                    <div className="flex items-baseline w-full">
                                        <p className="font-sohne text-lg font-bold">Building Scalable Web Solutions</p>
                                        <div className="h-[2px] bg-white w-full"></div>
                                    </div>
                                    <h1 ref={headRef} className="font-sohne text-[72px] font-black tracking-tight break-all ">Developer</h1>
                                </div>
                                <p className="font-sohne text-[11px] font-bold">©2025 | AYAN CHAKRABORTY</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default HomeHero;
