"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import arrow from "@/assets/direction.png"
import { employer, experience } from "@/data/experience"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
    const sectionRef = useRef(null)
    const headRef = useRef(null)
    const hrRef = useRef(null)
    const hrRefs = useRef([])
    const fadeRefs = useRef([])

    useGSAP(() => {
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
        hrRefs.current.forEach((hr) => {
            if (!hr) return
            gsap.fromTo(hr,
                { width: "0%" },
                {
                    width: "100%",
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: hr,
                        start: "top 85%",
                        end: "top 35%",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    }
                }
            )
        })
        fadeRefs.current.forEach((el) => {
            if (!el) return
            gsap.fromTo(el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: true,
                    }
                }
            )
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id="experience" aria-label="Experience" className="flex flex-col gap-16 md:gap-20 xl:gap-28">
            <div className="flex flex-col gap-4 xl:gap-7">
                <div className="flex items-baseline px-3 xl:px-5">
                    <div className="flex items-start">
                        <div className="overflow-hidden">
                            <h2 ref={headRef} className="font-sohne text-[40px] sm:text-[64px] md:text-[84px] lg:text-[112px] xl:text-[144px] 2xl:text-[176px] font-bold tracking-tight">Experience</h2>
                        </div>
                        <p className="font-sohne text-[#121212] text-base xl:text-2xl uppercase font-bold">(03)</p>
                    </div>
                    <img src={arrow.src} alt="" className="h-[28px] w-[28px] sm:h-[40px] sm:w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] xl:w-[100px] xl:h-[100px]" />
                </div>
                <div className="flex flex-col gap-2 xl:items-end xl:pr-5">
                    <p className="uppercase px-3 font-sohne font-semibold text-[#121212] text-[10px] leading-[15px] max-w-[374px] mx-auto md:text-[12px] md:leading-[19px] md:max-w-[450px] lg:max-w-[524px] xl:mx-0 xl:px-0 xl:text-sm xl:leading-[20px] xl:max-w-[595px]">
                        What I've owned, built and led in the industry. From product planning and system architecture to frontend engineering and team leadership, on platforms that real businesses use every day.
                    </p>
                    <hr className="h-[1px] bg-[#121212] xl:hidden" />
                </div>
                <hr ref={hrRef} className="hidden h-[2px] bg-[#393939] xl:flex" />
            </div>

            <div className="flex flex-col gap-3 px-4 md:px-8 md:flex-row md:items-baseline md:justify-between xl:px-5 2xl:px-14">
                <p className="font-sohne font-bold uppercase tracking-tight text-[#121212] text-4xl md:text-5xl xl:text-6xl">{employer.company}</p>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 md:justify-end">
                    <p className="font-sohne font-bold uppercase text-[#121212] text-sm lg:text-lg xl:text-xl">( {employer.title} )</p>
                    <p className="font-sohne font-bold uppercase text-[#737373] text-sm lg:text-lg xl:text-xl">{employer.period}</p>
                </div>
            </div>

            <div className="w-full flex flex-col gap-16 xl:gap-24">
                {experience.map((item, index) => (
                    <article key={item.number} className="flex flex-col gap-6 xl:gap-12">
                        <hr
                            ref={el => { hrRefs.current[index] = el }}
                            className="h-px border-none bg-[#121212] w-0"
                        />
                        <div className="flex flex-col gap-8 px-4 md:px-8 xl:flex-row xl:justify-between xl:gap-16 xl:px-5 2xl:px-14">
                            <div className="flex items-start gap-5 lg:gap-10 xl:w-[44%]">
                                <p className="font-sohne text-[#d6d6d6] text-6xl font-extrabold leading-none md:text-7xl lg:text-8xl xl:text-9xl">{item.number}</p>
                                <div className="flex flex-col gap-2 pt-1 lg:pt-3">
                                    {item.link ? (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-fit font-sohne font-bold uppercase tracking-tight text-[#121212] text-2xl md:text-3xl lg:text-4xl hover:opacity-60 duration-300">{item.product}</a>
                                    ) : (
                                        <h3 className="font-sohne font-bold uppercase tracking-tight text-[#121212] text-2xl md:text-3xl lg:text-4xl">{item.product}</h3>
                                    )}
                                    <p className="font-sohne font-bold uppercase text-[#121212] text-[11px] md:text-sm">( {item.role} )</p>
                                    <p className="font-sohne font-bold uppercase text-[#737373] text-[11px] md:text-sm">{item.period}</p>
                                </div>
                            </div>

                            <div ref={el => { fadeRefs.current[index] = el }} className="flex flex-col gap-6 xl:w-[56%] xl:max-w-[720px]">
                                <p className="font-sohne uppercase font-semibold text-[#121212] text-[12px] leading-[17px] md:text-sm md:leading-[20px] xl:text-base xl:leading-[23px]">{item.summary}</p>
                                {item.contributions && (
                                    <ul className="flex flex-col gap-3">
                                        {item.contributions.map((point) => (
                                            <li key={point} className="flex items-start gap-3">
                                                <span className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-[#121212] md:mt-[6px]" />
                                                <span className="font-sohne uppercase font-medium text-[#3a3a3a] text-[11px] leading-[16px] md:text-[13px] md:leading-[19px]">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <div className="flex flex-col gap-1">
                                    <p className="font-sohne uppercase font-bold text-[#121212] text-[10px] leading-[15px] md:text-xs md:leading-[18px]">Stack: {item.stack}</p>
                                    {item.platform && (
                                        <p className="font-sohne uppercase font-bold text-[#737373] text-[10px] leading-[15px] md:text-xs md:leading-[18px]">Platform: {item.platform}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Experience
