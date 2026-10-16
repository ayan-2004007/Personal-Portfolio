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
                            <h2 ref={headRef} className="font-sohne text-white text-[32px] min-[360px]:text-[40px] sm:text-[64px] md:text-[84px] lg:text-[112px] xl:text-[144px] 2xl:text-[172px] font-bold uppercase tracking-tight">Experience</h2>
                        </div>
                        <p className="font-sohne text-[#e6e6e6] text-base xl:text-2xl uppercase font-bold">(04)</p>
                    </div>
                    <img src={arrow.src} alt="" className="invert h-[28px] w-[28px] sm:h-[40px] sm:w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] xl:w-[100px] xl:h-[100px]" />
                </div>
                <hr ref={hrRef} className="h-px border-none bg-[#737373] w-0" />
            </div>

            <div className="flex flex-col gap-10 px-4 md:px-8 xl:flex-row xl:items-center xl:justify-between xl:px-5 2xl:px-14">
                <div className={`flex gap-5 md:gap-8 ${employer.logo ? "flex-col items-start" : "items-center"}`}>
                    {employer.logo ? (
                        <div className="rounded-2xl bg-white px-5 py-4 md:px-7 md:py-5">
                            <img src={employer.logo.src} alt={`${employer.company} logo`} className="h-10 w-auto md:h-14 xl:h-16" />
                        </div>
                    ) : (
                        <div aria-hidden="true" className="h-16 w-16 shrink-0 rounded-2xl bg-white flex items-center justify-center font-sohne font-bold text-black text-4xl md:h-24 md:w-24 md:text-6xl xl:h-28 xl:w-28 xl:text-7xl">{employer.company[0]}</div>
                    )}
                    <div className="flex flex-col gap-2">
                        <h3 className={`font-sohne font-bold uppercase tracking-tight text-white text-[28px] ${employer.logo ? "sr-only" : ""} min-[360px]:text-4xl md:text-5xl xl:text-6xl`}>{employer.company}</h3>
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <p className="font-sohne font-bold uppercase text-white text-[11px] md:text-sm lg:text-base">( {employer.title} )</p>
                            <p className="font-sohne font-bold uppercase text-[#9a9a9a] text-[11px] md:text-sm lg:text-base">{employer.period}</p>
                        </div>
                    </div>
                </div>
                <ul className="grid grid-cols-3 border border-[#434343] rounded-[30px] xl:w-[52%] xl:max-w-[720px]">
                    {employer.stats.map((stat, i) => (
                        <li key={stat.label} className={`flex flex-col gap-1 px-3 py-4 md:px-6 md:py-6 ${i > 0 ? "border-l border-[#434343]" : ""}`}>
                            <p className="font-sohne font-bold text-white text-2xl md:text-4xl xl:text-5xl">{stat.value}</p>
                            <p className="font-sohne font-bold uppercase text-[#9a9a9a] text-[9px] leading-[12px] md:text-xs md:leading-[16px]">{stat.label}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full flex flex-col gap-16 xl:gap-24">
                {experience.map((item, index) => (
                    <article key={item.number} className="flex flex-col gap-6 xl:gap-12">
                        <hr
                            ref={el => { hrRefs.current[index] = el }}
                            className="h-px border-none bg-[#737373] w-0"
                        />
                        <div className="flex flex-col gap-8 px-4 md:px-8 xl:flex-row xl:justify-between xl:gap-16 xl:px-5 2xl:px-14">
                            <div className="flex items-start gap-5 lg:gap-10 xl:w-[44%]">
                                <p className="font-sohne text-[#434343] text-6xl font-extrabold leading-none md:text-7xl lg:text-8xl xl:text-9xl">{item.number}</p>
                                <div className="flex flex-col gap-2 pt-1 lg:pt-3">
                                    <h3 className="font-sohne font-bold uppercase tracking-tight text-white text-2xl md:text-3xl lg:text-4xl">
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 duration-300">{item.product}</a>
                                        ) : item.product}
                                    </h3>
                                    <p className="font-sohne font-bold uppercase text-white text-[11px] md:text-sm">( {item.role} )</p>
                                    <p className="font-sohne font-bold uppercase text-[#9a9a9a] text-[11px] md:text-sm">{item.period}</p>
                                </div>
                            </div>

                            <div ref={el => { fadeRefs.current[index] = el }} className="flex flex-col gap-6 xl:w-[56%] xl:max-w-[720px]">
                                <p className="font-sohne uppercase font-semibold text-[#f2f2f2] text-[12px] leading-[17px] md:text-sm md:leading-[20px] xl:text-base xl:leading-[23px]">{item.summary}</p>
                                {item.contributions && (
                                    <ul className="flex flex-col gap-3">
                                        {item.contributions.map((point) => (
                                            <li key={point} className="flex items-start gap-3">
                                                <span className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-[#DBFF46] md:mt-[6px]" />
                                                <span className="font-sohne uppercase font-medium text-[#cfcfcf] text-[11px] leading-[16px] md:text-[13px] md:leading-[19px]">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <div className="flex flex-col gap-1">
                                    <p className="font-sohne uppercase font-bold text-white text-[10px] leading-[15px] md:text-xs md:leading-[18px]">Stack: {item.stack}</p>
                                    {item.platform && (
                                        <p className="font-sohne uppercase font-bold text-[#9a9a9a] text-[10px] leading-[15px] md:text-xs md:leading-[18px]">Platform: {item.platform}</p>
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
