"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import arrow from "@/assets/direction.png"
import { projects } from "@/data/projects"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Works = () => {
    const containerRef = useRef(null)
    const sectionRef = useRef(null)
    const headRef = useRef(null)
    const hrRef = useRef(null)
    const circleRef = useRef(null)

    useEffect(() => {
        const circle = circleRef.current
        const projectEls = containerRef.current.querySelectorAll(".projects")
        const isMobile = window.innerWidth < 768
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
        if (isMobile || isTouch) return
        const handleMouseMove = (e) => {
            gsap.to(circle, {
                duration: 0.3,
                x: e.clientX,
                y: e.clientY,
                ease: "power2.out"
            })
        }
        const showCircle = () => { circle.classList.remove("hidden") }
        const hideCircle = () => { circle.classList.add("hidden") }

        projectEls.forEach(project => {
            project.addEventListener("mouseenter", showCircle)
            project.addEventListener("mousemove", handleMouseMove)
            project.addEventListener("mouseleave", hideCircle)
        })
        return () => {
            projectEls.forEach(project => {
                project.removeEventListener("mouseenter", showCircle)
                project.removeEventListener("mousemove", handleMouseMove)
                project.removeEventListener("mouseleave", hideCircle)
            })
        }
    }, [])

    useGSAP(() => {
        const container = containerRef.current

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
        <section id="work" aria-label="Work" className="space-y-[84px] md:space-y-[120px] lg:space-y-[144px]">
            <div className="xl:flex xl:flex-col xl:gap-7">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between xl:gap-10 xl:pr-5 xl:max-w-[1604px]">
                    <div className="flex items-baseline px-3 xl:px-5">
                        <div className="flex items-start">
                            <div className="overflow-hidden">
                                <h2 ref={headRef} className="max-w-[800px] font-sohne text-[76px] min-[360px]:text-[86px] sm:text-[120px] md:text-[144px] lg:text-[176px] xl:text-[208px] 2xl:text-[276px] font-bold tracking-tight"> Work</h2>
                            </div>
                            <p className="font-sohne text-[#121212] text-base xl:text-2xl uppercase font-bold ">(02)</p>
                        </div>
                        <img src={arrow.src} alt="" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] xl:w-[100px] xl:h-[100px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="uppercase px-3 font-sohne font-semibold text-[#121212] text-[10px] leading-[15px] max-w-[374px] mx-auto md:text-[12px] md:leading-[19px] md:max-w-[450px] lg:leading-[19px] lg:max-w-[524px] lg:mr-14 xl:mr-0 xl:px-0 xl:text-sm xl:leading-[20px] xl:max-w-[440px] 2xl:max-w-[595px]">A few products I've built and led at work, plus two projects from college. Scroll to see them.
                        </p>
                        <hr className="h-[1px] bg-[#121212] xl:hidden" />
                    </div>
                </div>
                <hr ref={hrRef} className="hidden h-[2px] bg-[#393939] xl:flex" />
            </div>

            <div ref={sectionRef} className="h-screen w-screen overflow-hidden xl:w-auto">

                <div
                    ref={circleRef}
                    className="h-24 w-24 fixed hidden lg:flex items-center justify-center text-white bg-black rounded-full pointer-events-none z-50 font-sohne text-sm"
                >
                    See Project
                </div>

                <div ref={containerRef} className="flex gap-2 xl:gap-12 xl:px-12">
                    {projects.map((project) => (
                        <a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} project`}
                            className="projects h-screen w-screen bg-white shrink-0 flex items-center justify-center xl:w-auto cursor-pointer"
                        >
                            <div className={`flex ${project.reverse ? "flex-col-reverse" : "flex-col"} items-start gap-8 lg:gap-10`}>
                                <img src={project.image.src} loading="lazy" decoding="async" width={project.image.width} height={project.image.height} alt={`${project.title} project preview`} className="w-[92vw] max-w-[380px] md:max-w-none md:w-[524px] lg:w-[656px]" />
                                <div className="flex flex-col gap-4 w-[92vw] max-w-[380px] md:max-w-none md:w-[524px] lg:w-[656px]">
                                    <div className="flex flex-col gap-1 border-b-2 border-[#121212] pb-2 md:flex-row md:items-baseline md:justify-between md:gap-4">
                                        <h3 className="font-sohne text-black text-2xl uppercase font-bold tracking-tight lg:text-3xl">{project.title}</h3>
                                        <p className="font-sohne text-[#121212] text-[10px] uppercase font-bold md:text-right md:text-[12px]">( {project.category} )</p>
                                    </div>
                                    <div className="flex flex-col gap-3 md:flex-row md:justify-between md:gap-8">
                                        <p className="font-sohne text-black text-[12px] leading-[17px] uppercase font-semibold md:text-sm md:max-w-[300px] md:leading-[19px] lg:max-w-[340px] lg:leading-[22px]">{project.description}</p>
                                        <div className="flex flex-col gap-2 md:max-w-[190px] lg:max-w-[230px]">
                                            <p className="font-sohne text-[#737373] text-[10px] leading-[15px] uppercase font-bold md:text-[11px] md:leading-[16px]">{project.role}</p>
                                            <p className="font-sohne text-[#121212] text-[10px] leading-[15px] uppercase font-bold md:text-[11px] md:leading-[16px]">{project.stack}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Works
