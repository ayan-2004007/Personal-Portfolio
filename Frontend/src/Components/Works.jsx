import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import arrow from "../Assets/direction.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Works = () => {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const headRef = useRef(null)
    const hrRef = useRef(null)

    useGSAP(() => {
        const container = containerRef.current;
        const sections = gsap.utils.toArray(".horiz-section");

        if (headRef.current) {
            gsap.from(headRef.current, {
                duration: 2.5,
                y: "100%",
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headRef.current,
                    start: "top 70%",
                    toggleActions: "play none play reverse",
                },
            })
        }
        if (hrRef.current) {
            gsap.fromTo(
                hrRef.current,
                { width: "0%" },
                {
                    width: "100%",
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: hrRef.current,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse",
                        scrub: true,
                    },
                }
            )
        }
        gsap.to(container, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${window.innerWidth * (sections.length - 1)}`,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
            },
        })
    }, [])

    return (
        <div>
            <div className="xl:flex xl:flex-col xl:gap-7">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between xl:max-w-[1604px]">
                    <div className="flex items-baseline px-3 xl:px-5">
                        <div className="flex items-start">
                            <div className="overflow-hidden">
                                <h1 ref={headRef} className="max-w-[800px] font-sohne text-[86px] sm:text-[120px] md:text-[144px] lg:text-[176px] xl:text-[208px] 2xl:text-[276px] font-bold tracking-tight">
                                    Work
                                </h1>
                            </div>
                            <p className="font-sohne text-[#121212] text-base xl:text-2xl uppercase font-bold ">
                                (02)
                            </p>
                        </div>
                        <img
                            src={arrow}
                            alt=""
                            className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] xl:w-[100px] xl:h-[100px]"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="uppercase px-3 font-sohne font-semibold text-[#121212] text-[10px] leading-[15px] max-w-[374px] mx-auto md:text-[12px] md:leading-[19px] md:max-w-[450px] lg:leading-[19px] lg:max-w-[524px] lg:mr-14 xl:mr-0 xl:px-0 xl:text-sm xl:leading-[20px] xl:max-w-[595px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <hr className="h-[1px] bg-[#121212] xl:hidden" />
                    </div>
                </div>
                <hr ref={hrRef} className="hidden h-[2px] bg-[#393939] xl:flex" />
            </div>

            <div ref={sectionRef} className="h-screen w-screen overflow-hidden">
                <div ref={containerRef} className="flex">
                    <div className="h-screen w-screen bg-red-200 shrink-0 horiz-section"></div>
                    <div className="h-screen w-screen bg-green-200 shrink-0 horiz-section"></div>
                    <div className="h-screen w-screen bg-blue-200 shrink-0 horiz-section"></div>
                </div>
            </div>
            <div className="h-screen w-screen flex items-center justify-center text-4xl font-bold">
                Fuck You
            </div>
        </div>
    );
};

export default Works;
