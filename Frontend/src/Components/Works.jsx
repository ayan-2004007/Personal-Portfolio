import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import arrow from "../Assets/direction.png"

import p1 from "../Assets/psd01.png"
import p2 from "../Assets/psd02.png"
import p3 from "../Assets/psd03.png"
import p4 from "../Assets/psd04.png"
import p6 from "../Assets/psd06.jpg"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Works = () => {
    const containerRef = useRef(null)
    const sectionRef = useRef(null)
    const headRef = useRef(null)
    const hrRef = useRef(null)
    const circleRef=useRef(null)

    const redirect = (link) => {
        window.open(link, "_blank")
    }

    useEffect(() => {
        const circle = document.getElementById("hover-circle")
        const projects = document.querySelectorAll('.projects')
        const isMobile = window.innerWidth < 768
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        if (isMobile || isTouch) return
        const handleMouseMove = (e) => {
           gsap.to(circle,{
            duration:0.3,
            x:e.clientX,
            y:e.clientY,
            ease:"power2.out"
           })
        }
        const showCircle = () => { circle.classList.remove("hidden") }
        const hideCircle = () => { circle.classList.add("hidden") }

        projects.forEach(project => {
            project.addEventListener('mouseenter', showCircle)
            project.addEventListener('mousemove', handleMouseMove)
            project.addEventListener('mouseleave', hideCircle)
        })
        return () => {
            projects.forEach(project => {
                project.removeEventListener('mouseenter', showCircle)
                project.removeEventListener('mousemove', handleMouseMove)
                project.removeEventListener('mouseleave', hideCircle)
            })
        }
    }, [])

    useGSAP(() => {
        const container = containerRef.current
        // const sections = gsap.utils.toArray(".projects")

        if (headRef.current) {
            gsap.from(headRef.current, {
                duration: 2,
                y: "100%",
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headRef.current,
                    start: "top 80%",
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
                        scrub: 1,
                    },
                }
            )
        }
        gsap.to(container, {
            x: () => -1 * (container.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${container.scrollWidth - window.innerWidth}`,
                pin: true,
                scrub: 1,
            },
        })

    }, [])
    return (
        <div className="space-y-[84px] md:space-y-[120px] lg:space-y-[144px]">
            <div className="xl:flex xl:flex-col xl:gap-7">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between xl:max-w-[1604px]">
                    <div className="flex items-baseline px-3 xl:px-5">
                        <div className="flex items-start">
                            <div className="overflow-hidden">
                                <h1 ref={headRef} className="max-w-[800px] font-sohne text-[86px] sm:text-[120px] md:text-[144px] lg:text-[176px] xl:text-[208px] 2xl:text-[276px] font-bold tracking-tight"> Work</h1>
                            </div>
                            <p className="font-sohne text-[#121212] text-base xl:text-2xl uppercase font-bold ">(02)</p>
                        </div>
                        <img src={arrow} alt="" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] xl:w-[100px] xl:h-[100px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="uppercase px-3 font-sohne font-semibold text-[#121212] text-[10px] leading-[15px] max-w-[374px] mx-auto md:text-[12px] md:leading-[19px] md:max-w-[450px] lg:leading-[19px] lg:max-w-[524px] lg:mr-14 xl:mr-0 xl:px-0 xl:text-sm xl:leading-[20px] xl:max-w-[595px]">Here's a glimpse into what I've been building. From sleek frontends to powerful full stack apps, each project reflects my passion for problem-solving and clean design. Scroll down to see what I've been up to.
                        </p>
                        <hr className="h-[1px] bg-[#121212] xl:hidden" />
                    </div>
                </div>
                <hr ref={hrRef} className="hidden h-[2px] bg-[#393939] xl:flex" />
            </div>

            <div ref={sectionRef} className="h-screen w-screen overflow-hidden xl:w-auto">

                <div
                    ref={circleRef}
                    id="hover-circle"
                    className="h-24 w-24 fixed hidden lg:flex items-center justify-center text-white bg-black rounded-full pointer-events-none z-50 font-sohne text-sm"
                >
                    See Project
                </div>

                <div ref={containerRef} className="flex gap-2 xl:gap-12">
                    <div onClick={() => { redirect("https://github.com/ayan-2004007/MEDIMATE") }} className="projects h-screen w-screen bg-white shrink-0 flex items-center justify-center xl:w-auto cursor-pointer">
                        <div className="flex flex-col items-start gap-12">
                            <img src={p6} alt="" className="w-[380px] md:w-[524px] lg:w-[656px]" />
                            <p className="font-sohne text-black text-sm px-5 max-w-[276px]  uppercase font-semibold md:leading-[19px] lg:leading-[22px]">AI-powered medical chatbot that analyzes symptoms and predicts diseases using LLMs. Features natural language input, voice support, and an intuitive interface.</p>
                        </div>
                    </div>

                    <div onClick={() => { redirect("https://bookaholiclibrary.netlify.app/") }} className="projects h-screen w-screen bg-white shrink-0 flex items-center justify-center xl:w-auto cursor-pointer">
                        <div className="flex flex-col-reverse items-start gap-12">
                            <img src={p1} alt="" className="w-[380px] md:w-[524px] lg:w-[656px]" />
                            <p className="font-sohne text-black text-sm px-5 max-w-[276px]  uppercase font-semibold md:leading-[19px] lg:leading-[22px]">Online library system that simplifies book browsing, borrowing, and returning. Designed to modernize library management for users and admins alike.</p>
                        </div>
                    </div>

                    <div onClick={() => { redirect("https://www.figma.com/proto/zS0aeOQNTwN9dnwMlPWHEs/CRESCENDO?node-id=2361-1328&t=U1bMTzqCJmxHA4ra-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=301%3A2") }} className="projects h-screen w-screen bg-white shrink-0 flex items-center justify-center xl:w-auto cursor-pointer">
                        <div className="flex flex-col items-start gap-12">
                            <img src={p3} alt="" className="w-[380px] md:w-[524px] lg:w-[656px]" />
                            <p className="font-sohne text-black text-sm px-5 max-w-[276px]  uppercase font-semibold md:leading-[19px] lg:leading-[22px]">Web design created for my college’s educational club. Designed in Figma with a modern, student-centric layout reflecting the identity of the Crescendo coding wing.</p>
                        </div>
                    </div>

                    <div onClick={() => { redirect("https://surakshasecurity.netlify.app/") }} className="projects h-screen w-screen bg-white shrink-0 flex items-center justify-center xl:w-auto cursor-pointer">
                        <div className="flex flex-col-reverse items-start gap-12">
                            <img src={p4} alt="" className="w-[380px] md:w-[524px] lg:w-[656px]" />
                            <p className="font-sohne text-black text-sm px-5 max-w-[276px]  uppercase font-semibold md:leading-[19px] lg:leading-[22px]">Frontend website for a security services client. Built with a clean layout and responsive design using React and Tailwind.</p>
                        </div>
                    </div>

                    <div onClick={() => { redirect("https://www.figma.com/proto/WKmic680O6pfH5DGHY138E/Your-Aesthetics?node-id=1-2&t=cN6dhJButpW0kfx4-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1") }} className="projects h-screen w-screen bg-white shrink-0 flex items-center justify-center xl:w-auto cursor-pointer">
                        <div className="flex flex-col items-start gap-12">
                            <img src={p2} alt="" className="w-[380px] md:w-[524px] lg:w-[656px]" />
                            <p className="font-sohne text-black text-sm px-5 max-w-[276px]  uppercase font-semibold md:leading-[19px] lg:leading-[22px]">Web design for an interior design agency, focusing on modern aesthetics, clean visuals, and interactive user experience.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Works
